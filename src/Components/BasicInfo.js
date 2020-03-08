import React from 'react';

export default function BasicInfo({ 
    nextStep, name, email, 
    jobRole, validationErrors, setValidationErrors, 
    handleChange
}) {
    return (
        <div>
            <legend>Basic Info</legend>

            <label htmlFor="name">Full Name: *</label>
            <input 
                style={{
                    border: validationErrors ? "red solid 1px" : "none"
                }}
                onChange={handleChange('name')} 
                onBlur={(e) => {
                    e.target.value === '' 
                        ? setValidationErrors(true) 
                        : setValidationErrors(false)
                }}
                value={name} type="text" id="named" name="name" autoFocus 
            />
            {validationErrors && <span>Please enter name</span>}

            <label htmlFor="email">Email: *</label>
            <input 
                style={{
                    border: validationErrors ? "red solid 1px" : "none"
                }}
                onChange={handleChange('email')} 
                onBlur={(e) => {
                    e.target.value === ''
                        ? setValidationErrors(true)
                        : setValidationErrors(false)
                }}
                value={email || ''} type="email" id="email" name="email" required/>
            {validationErrors && <span>Enter valid email</span>}

            <label htmlFor="jobRole">Job Role</label>
            <select onChange={handleChange('jobRole')} value={jobRole} id="jobRole" name="jobRole" >
                <option value="full-stack js developer">Full Stack JavaScript Developer</option>
                <option value="front-end developer">Front End Developer</option>
                <option value="back-end developer">Back End Developer</option>
                <option value="designer">Designer</option>
                <option value="student">Student</option>
                <option value="other">Other</option>
            </select>
            <br />

            {jobRole === "other" &&
                <textarea id='other-title' type='text' placeholder="Your Job Role" required></textarea>
            }
            
            <button onClick={!validationErrors ? nextStep : undefined}>Next</button>
        </div>
    )
}
