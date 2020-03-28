import React from 'react'

export default function ActivitiesInfo({ 
    nextStep, prevStep, total, 
    handleChange, handlePrice, handleActivities,
}) {
    const checkboxes = [
        {
            name: "all",
            price: 200,
            body: "Main Conference",
            time: "Main Conference",
        },
        {
            name: "js-frameworks",
            price: 100,
            body: "JavaScript Frameworks Workshop : ",
            time: "Tuesday 9am - 12pm",
        },
        {
            name: "js-libs",
            price: 100,
            body: "JavaScript Libraries Workshop : ",
            time: "Tuesday 1pm - 4pm",
        },
        {
            name: "express",
            price: 100,
            body: "Express Workshop : ",
            time: "Tuesday 9am - 12pm",
        },
        {
            name: "node",
            price: 100,
            body: "Node.js Workshop : ",
            time: "Tuesday 1pm - 4pm",
        },
        {
            name: "build-tools",
            price: 100,
            body: "Build tools Workshop : ",
            time: "Wednesday 9am - 12pm",
        },
        {
            name: "npm",
            price: 100,
            body: "Npm Workshop : ",
            time: "Wednesday 1pm - 4pm",
        },
    ]

    return (
        <fieldset className="activities">
            <legend>Register for Activities</legend> 
            {checkboxes.map( (cb, index) => (
                <label key={cb.name}>
                    <input 
                        type="checkbox" 
                        name={cb.name}
                        price={cb.price}
                        // disabled={true}
                        onChange={(e) => {
                            handlePrice(e, cb.price);
                            handleActivities(e, cb.time);
                            //handle disabling duplicate times
                        }}
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
