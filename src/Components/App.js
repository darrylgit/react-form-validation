import React, {useState} from 'react';
import '../styles/App.css';
import BasicInfo from './BasicInfo';
import ActivitiesInfo from "./ActivitiesInfo";
import PayInfo from "./PayInfo";
import ShirtInfo from "./ShirtInfo";
import SubmitButton from './SubmitButton';
import { useForm } from 'react-hook-form';


export default function App() {

  // const {ref, handleSubmit} = useForm();

  let [payInfoComplete, setPayInfoComplete] = useState(false); // will be used to allow user to submit 

  const onSubmit = data => console.log(data);

  return (
    <div className="container">
      <header>
        <span>Register for</span><h1>Full Stack Conf</h1>
      </header>

      <form onSubmit={(e) => {e.preventDefault()}} 
        action="index.html" method="post"
      >
        <fieldset>
          {/* basic info section */}
          <BasicInfo 
          />
          {/* t-shirt info */}
          <ShirtInfo />
          {/* activities / workshops */}
          <ActivitiesInfo />
          {/* pay info */}
          <PayInfo setPayInfoComplete={setPayInfoComplete}/>
          {/* hide until everything is filled */}
          {payInfoComplete ? (<SubmitButton />) : ("")}
        </fieldset>
      </form>
    </div>
  );
}
