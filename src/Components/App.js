import React, {useState} from 'react';
import '../styles/App.css';
import BasicInfo from './BasicInfo';
import ActivitiesInfo from "./ActivitiesInfo";
import PayInfo from "./PayInfo";
import ShirtInfo from "./ShirtInfo";

export default function App() {
  let [basicInfoRole, setBasicInfoRole] = useState([]); //able to record shirt val

  let [selectedShirt, setSelectedShirt] = useState([]); //able to record shirt val
  let [selectedDesign, setSelectedDesign] = useState([]); //👌🏽
  let [selectedColor, setSelectedColor] = useState([]); //👌🏽

  return (
    <div className="container">
      <header>
        <span>Register for</span><h1>Full Stack Conf</h1>
      </header>

      <form action="index.html" method="post">
        <fieldset>
          {/* basic info section */}
          <BasicInfo 
            setBasicInfoRole={setBasicInfoRole}
          />
          {console.log(basicInfoRole)}

          {/* t-shirt info */}
          <ShirtInfo 
            setSelectedShirt={setSelectedShirt}
            setSelectedDesign={setSelectedDesign}
            setSelectedColor={setSelectedColor}
          />

          {/* activities / workshops */}
          <ActivitiesInfo />

          {/* pay info */}
          <PayInfo />

        </fieldset>
      </form>
    </div>
  );
}
