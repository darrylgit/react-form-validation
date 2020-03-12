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
//   let [validationErrors, setValidationErrors] = useState(false);

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
//             setValidationErrors={setValidationErrors}
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
//             setValidationErrors={setValidationErrors}
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
//             setValidationErrors={setValidationErrors}
//             nextStep={nextStep}
//             prevStep={prevStep}
//           />}
//           {/* pay info */}
//           {step === 4 && <PayInfo 
//             validationErrors={validationErrors}
//             setValidationErrors={setValidationErrors}
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
    step: 1,
    validationErrors: false,

    name: "",
    email: "",
    jobRole: "full-stack js developer",
    selectedShirt: "",
    selectedDesign: "Select Theme",
    selectedColor: "cornFlowerBlue",
    total: 0,
    selectedActivity: [],
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

  setValidationErrors = (bool) => {
    this.setState({validationErrors: bool})
  }

  handlePrice = (e, price) => {
    let { total } = this.state;
    e.target.checked 
      ? this.setState({ total: total += price }) 
      : this.setState({ total: total -= price });
  }

  setValidCC = bool => {
    this.setState({ validCC: bool })
  }

  setValidCCV = bool => {
    this.setState({ validCCV: bool })
  }

  setValidZip = bool => {
    this.setState({ validZip: bool })
  }

  setValidYear = bool => {
    this.setState({ validYear: bool })
  }

  handleChange = input => e => {
    this.setState({[input]: e.target.value})
  }

  onSubmit = data => console.log(data);

  render() {
    let {
      step, name, email, jobRole,
      selectedShirt, selectedDesign, selectedColor,
      total, selectedActivity, selectedPayMethod,
      validationErrors, validCC, validZip,
      validCCV, validYear, ccNum,
      ccZip, ccv,
    } = this.state;

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
            {/* basic info section */}
            {step === 1 && <BasicInfo
              handleChange={this.handleChange}
              validationErrors={validationErrors}
              setValidationErrors={this.setValidationErrors}
              nextStep={this.nextStep}
              name={name}
              setName={this.setName}
              email={email}
              setEmail={this.setEmail}
              jobRole={jobRole}
              setJobRole={this.setJobRole}
            />}
            {/* t-shirt info */}
            {step === 2 && <ShirtInfo
              handleChange={this.handleChange}
              validationErrors={validationErrors}
              setValidationErrors={this.setValidationErrors}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              selectedShirt={selectedShirt}
              selectedDesign={selectedDesign}
              selectedColor={selectedColor}
            />}
            {/* activities / workshops */}
            {step === 3 && <ActivitiesInfo
              handleChange={this.handleChange}
              handlePrice={this.handlePrice}
              validationErrors={validationErrors}
              selectedActivity={selectedActivity}
              total={total}
              setValidationErrors={this.setValidationErrors}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
            />}
            {/* pay info */}
            {step === 4 && <PayInfo
              handleChange={this.handleChange}
              validationErrors={validationErrors}
              setValidationErrors={this.setValidationErrors}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              selectedPayMethod={selectedPayMethod}
              validCC={validCC}
              validZip={validZip}
              validCCV={validCCV}
              validYear={validYear}
              setValidCC={this.setValidCC}
              setValidCCV={this.setValidCCV}
              setValidZip={this.setValidZip}
              setValidYear={this.setValidYear}
              ccNum={ccNum}
              ccZip={ccZip}
              ccv={ccv}
            />}
            {/* hide until everything is filled */}
            {step === 5 && <SubmitButton />}
          </fieldset>
        </form>
      </div>
    );
  }
}
