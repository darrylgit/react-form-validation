import React, {useState, useRef, useEffect} from 'react';
import '../styles/App.css';
import BasicInfo from './BasicInfo';
import ActivitiesInfo from "./ActivitiesInfo";
import PayInfo from "./PayInfo";
import ShirtInfo from "./ShirtInfo";
import SubmitButton from './SubmitButton';
import { useForm } from 'react-hook-form';

export default function App() {
  // state to handle steps in form
  let [step, setStep] = useState(1);

  // state for form fields
  let [name, setName] = useState();
  let [email, setEmail] = useState();
  let [jobRole, setJobRole] = useState([]);
  let [selectedShirt, setSelectedShirt] = useState();
  let [selectedDesign, setSelectedDesign] = useState();
  let [selectedColor, setSelectedColor] = useState();
  let [total, setTotal] = useState(0);
  let [selectedActivity, setSelectedActivity] = useState();
  let [selectedPayMethod, setSelectedPayMethod] = useState("cc");
  let [validCC, setValidCC] = useState([]);
  let [allFieldsAreGood, safg] = useState(false);

  const nextStep = () => {
    setStep(step + 1);
  }

  const prevStep = () => {
    setStep(step - 1);
  }

  const onSubmit = data => console.log(data);

  return (
    <div className="container">
      <header>
        <span>Register for</span><h1>Full Stack Conf</h1>
      </header>

      <form onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e); 
      }} 
        action="index.html" method="post"
      >
        <fieldset>
          {/* basic info section */}
          {step === 1 && <BasicInfo 
            nextStep={nextStep}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            jobRole={jobRole}
            setJobRole={setJobRole}
          />}
          {/* t-shirt info */}
          {step === 2 && <ShirtInfo 
            nextStep={nextStep}
            prevStep={prevStep}
            selectedShirt={selectedShirt}
            setSelectedShirt={setSelectedShirt}
            selectedDesign={selectedDesign}
            setSelectedDesign={setSelectedDesign}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />}
          {/* activities / workshops */}
          {step === 3 && <ActivitiesInfo 
            nextStep={nextStep}
            prevStep={prevStep}
          />}
          {/* pay info */}
          {step === 4 && <PayInfo 
            nextStep={nextStep}
            prevStep={prevStep}
            selectedPayMethod={selectedPayMethod}
            setSelectedPayMethod={setSelectedPayMethod}
            validCC={validCC}
            setValidCC={setValidCC}
            allFieldsAreGood={allFieldsAreGood}
            safg={safg}
          />}
          {/* hide until everything is filled */}
          {step === 5 && <SubmitButton />}
        </fieldset>
      </form>
    </div>
  );
}
