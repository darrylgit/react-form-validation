import React from 'react'

export default function ActivitiesInfo({ 
    state, nextStep, prevStep, 
    handlePrice, handleActivities, setStateValidation,
}) {

    const { total } = state;

    let [checkedIndex, setCheckedIndex] = React.useState([]);

    const checkboxes = [
        {
            index: 0,
            name: "all",
            price: 200,
            body: "Main Conference",
            time: "Main Conference",
        },
        {
            index: 1,
            name: "js-frameworks",
            price: 100,
            body: "JavaScript Frameworks Workshop : ",
            time: "Tuesday 9am - 12pm",
            conflict: false,
        },
        {
            index: 2,
            name: "js-libs",
            price: 100,
            body: "JavaScript Libraries Workshop : ",
            time: "Tuesday 1pm - 4pm",
            conflict: false,
        },
        {
            index: 3,
            name: "express",
            price: 100,
            body: "Express Workshop : ",
            time: "Tuesday 9am - 12pm",
            conflict: false,
        },
        {
            index: 4,
            name: "node",
            price: 100,
            body: "Node.js Workshop : ",
            time: "Tuesday 1pm - 4pm",
            conflict: false,
        },
        {
            index: 5,
            name: "build-tools",
            price: 100,
            body: "Build tools Workshop : ",
            time: "Wednesday 9am - 12pm",
        },
        {
            index: 6,
            name: "npm",
            price: 100,
            body: "Npm Workshop : ",
            time: "Wednesday 1pm - 4pm",
        },
    ]

    let handleSettingChecked = (e, cb) => {
        // let index = cb.index;
        // switch (index) {
        //     case index:
        //         e.target.checked ? setCheckedIndex(index) : setCheckedIndex(null);
        //         break;
        
        //     default:
        //         break;
        // }

        // add/ remove any checked items to the array and handle duplicates
    };

    const determineIndexToDisable = (cb) => {
        let indexesToDisable;

        switch (cb.index) {
            case 1:
                indexesToDisable = 3;
                break;

            case 2:
                indexesToDisable = 4;
                break;

            case 3:
                indexesToDisable = 1;
                break;

            case 4:
                indexesToDisable = 2;
                break;
        
            default:
                break;
        }
        setCheckedIndex(indexesToDisable);
        return indexesToDisable;
    }

    return (
        <fieldset className="activities">
            <legend>Register for Activities</legend> 
            {checkboxes.map( (cb, index) => (
                <label key={cb.name}>
                    <input 
                        type="checkbox" 
                        name={cb.name}
                        price={cb.price}
                        onChange={(e) => {
                            handlePrice(e, cb.price);
                            handleActivities(e, cb.time);
                            // handleSettingChecked(e, cb);
                            determineIndexToDisable(cb)                    
                        }}
                        disabled={index === checkedIndex}
                    /> 
                    {cb.body}{cb.time}, ${cb.price} 
                </label>
            ))}
            {total !== 0 &&
                <span>Total = {total} </span>
            }
            <br />
            <span>Must select at least one option</span>

            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
        </fieldset>
    )
}
