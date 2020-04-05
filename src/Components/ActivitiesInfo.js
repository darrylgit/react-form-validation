import React, { useState, useEffect } from 'react'

export default function ActivitiesInfo({ 
    nextStep, prevStep, setStateValidation,
    handleActivities, state
}) {
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
        },
        {
            index: 2,
            name: "js-libs",
            price: 100,
            body: "JavaScript Libraries Workshop : ",
            time: "Tuesday 1pm - 4pm",
        },
        {
            index: 3,
            name: "express",
            price: 100,
            body: "Express Workshop : ",
            time: "Tuesday 9am - 12pm",
        },
        {
            index: 4,
            name: "node",
            price: 100,
            body: "Node.js Workshop : ",
            time: "Tuesday 1pm - 4pm",
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

    let [total, setTotal] = useState(0);
    let [disabledIndexes, setDisabledIndexes] = useState([]);

    const handlePrice = (e, price) => {
        e.target.checked
            ? setTotal(total += price)
            : setTotal(total -= price)
    }

    let indexToDisable;
    checkboxes.filter(cb => cb.time === state.selectedActivity.time)
        .filter(item => {
            if (item.index !== state.selectedActivity.index) {
                indexToDisable = item.index;
            }
        }
    );

    const handleDisablingCheckboxes = (e) => {
        if (indexToDisable !== undefined) {
            let indexToRemove = disabledIndexes.filter(i => i !== indexToDisable)

            // TODO : Make sure the items are getting removed properly inside of useEffect instead of here
            // don't allow duplicates to get added
            e.target.checked
                ? setDisabledIndexes(val => [...val, indexToDisable])
                : setDisabledIndexes([...indexToRemove])
        }
    }
    useEffect(() => {
        if (indexToDisable !== undefined) setDisabledIndexes(val => [...val, indexToDisable])
        //causes infinite loop
        // return () => setDisabledIndexes([...indexToRemove]) 
    }, [indexToDisable])

    console.log({ 
        "disabled indexes": disabledIndexes, 
        "current index": state.selectedActivity.index, 
        "indexToDisable": indexToDisable,
        "is indexToDisable included?": disabledIndexes.includes(indexToDisable),
    });

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
                            handleActivities(e, cb);
                            handleDisablingCheckboxes(e)
                        }}
                        disabled={disabledIndexes.includes(index)}
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
