// import React, {useState, useRef, useEffect} from 'react';
// import '../styles/App.css';
// import BasicInfo from './BasicInfo';
// import ActivitiesInfo from "./ActivitiesInfo";
// import PayInfo from "./PayInfo";
// import ShirtInfo from "./ShirtInfo";
// import SubmitButton from './SubmitButton';

// export default function App() {
//   // state to handle steps in form
//   let [step, setStep] = useState(1);

//   // handle validation errors
//   let [validationErrors, setStateValidation] = useState(false);

//   // state for form fields
//   let [name, setName] = useState("");
//   let [email, setEmail] = useState("");
//   let [jobRole, setJobRole] = useState([]);
//   let [selectedShirt, setSelectedShirt] = useState([]);
//   let [selectedDesign, setSelectedDesign] = useState([]);
//   let [selectedColor, setSelectedColor] = useState([]);
//   let [total, setTotal] = useState(0);
//   let [selectedActivity, setSelectedActivity] = useState([]);
//   let [selectedPayMethod, setSelectedPayMethod] = useState("cc");
//   let [validCC, setValidCC] = useState({ cc: null, zip: null, ccv: null, year: null });

//   const nextStep = () => {
//     setStep(step + 1);
//   }

//   const prevStep = () => {
//     setStep(step - 1);
//   }

//   const onSubmit = data => console.log(data);

//   return (
//     <div className="container">
//       <header>
//         <span>Register for</span><h1>Full Stack Conf</h1>
//       </header>

//       <form onSubmit={(e) => {
//         e.preventDefault();
//         onSubmit(e); 
//       }} 
//         action="index.html" method="post"
//       >
//         <fieldset>
//           {/* basic info section */}
//           {step === 1 && <BasicInfo 
//             validationErrors={validationErrors}
//             setStateValidation={setStateValidation}
//             nextStep={nextStep}
//             name={name}
//             setName={setName}
//             email={email}
//             setEmail={setEmail}
//             jobRole={jobRole}
//             setJobRole={setJobRole}
//           />}
//           {/* t-shirt info */}
//           {step === 2 && <ShirtInfo 
//             validationErrors={validationErrors}
//             setStateValidation={setStateValidation}
//             nextStep={nextStep}
//             prevStep={prevStep}
//             selectedShirt={selectedShirt}
//             setSelectedShirt={setSelectedShirt}
//             selectedDesign={selectedDesign}
//             setSelectedDesign={setSelectedDesign}
//             selectedColor={selectedColor}
//             setSelectedColor={setSelectedColor}
//           />}
//           {/* activities / workshops */}
//           {step === 3 && <ActivitiesInfo 
//             validationErrors={validationErrors}
//             setStateValidation={setStateValidation}
//             nextStep={nextStep}
//             prevStep={prevStep}
//           />}
//           {/* pay info */}
//           {step === 4 && <PayInfo 
//             validationErrors={validationErrors}
//             setStateValidation={setStateValidation}
//             nextStep={nextStep}
//             prevStep={prevStep}
//             selectedPayMethod={selectedPayMethod}
//             setSelectedPayMethod={setSelectedPayMethod}
//             validCC={validCC}
//             setValidCC={setValidCC}
//           />}
//           {/* hide until everything is filled */}
//           {step === 5 && <SubmitButton />}
//         </fieldset>
//       </form>
//     </div>
//   );
// }

import React, { Component } from 'react';
import '../styles/App.css';
import BasicInfo from './BasicInfo';
import ActivitiesInfo from "./ActivitiesInfo";
import PayInfo from "./PayInfo";
import ShirtInfo from "./ShirtInfo";
import SubmitButton from './SubmitButton';

export default class App extends Component {
  state = {
    step: 3,
    validationErrors: false,

    name: "",
    email: "",
    jobRole: "full-stack js developer",
    selectedShirt: "Small",
    selectedDesign: "Select Theme",
    selectedColor: "Select a color",
    total: 0,
    selectedActivity: {},
    activitiesArray: [],
    selectedPayMethod: "cc",
    validCC: null,
    validZip: null,
    validCCV: null,
    validYear: null,
    ccNum: "",
    ccZip: "",
    ccv: "",

  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  setStateValidation = (input, bool) => {
    this.setState({ [input]: bool });
  }

  handleChange = input => e => {
    this.setState({[input]: e.target.value})
  }

  onSubmit = data => console.log(data);

  render() {
    let { step } = this.state;

    return (
      <div className="container">
        <header>
          <span>Register for</span><h1>Full Stack Conf</h1>
        </header>

        <form onSubmit={(e) => {
          e.preventDefault();
          this.onSubmit(e);
        }}
          action="index.html" method="post"
        >
          <fieldset>
            {step === 1 && <BasicInfo
              state={this.state}
              handleChange={this.handleChange}
              setStateValidation={this.setStateValidation}
              nextStep={this.nextStep}
            />}
            {step === 2 && <ShirtInfo
              state={this.state}
              handleChange={this.handleChange}
              setStateValidation={this.setStateValidation}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
            />}
            {step === 3 && <ActivitiesInfo
              setStateValidation={this.setStateValidation}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
            />}
            {step === 4 && <PayInfo
              state={this.state}
              setStateValidation={this.setStateValidation}
              handleChange={this.handleChange}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
            />}
            {/* hide until everything is filled */}
            {step === 5 && <SubmitButton />}
          </fieldset>
        </form>
      </div>
    );
  }
}
