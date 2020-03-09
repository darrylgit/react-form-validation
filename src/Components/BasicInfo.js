import React from 'react';

export default function BasicInfo({ 
    nextStep, name, email, 
    jobRole, validationErrors, setValidationErrors, 
    handleChange
}) {
    function isValidEmail(email) {
        const valid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
        return valid;
    }

    return (
        <div>
            <legend>Basic Info</legend>

            <label htmlFor="name">Full Name: *</label>
            <input 
                onChange={handleChange('name')} 
                onBlur={(e) => {
                    e.target.value === '' 
                        ? setValidationErrors(true) 
                        : setValidationErrors(false)
                }}
                style={{
                    border: validationErrors && name === '' ? "red solid 1px" : "none"
                }}
                value={name} type="text" id="named" name="name" autoFocus 
            />
            {validationErrors && !name && <span>Please enter name</span>}

            <label htmlFor="email">Email: *</label>
            <input 
                onChange={handleChange('email')} 
                onBlur={(e) => {
                    !isValidEmail(e.target.value)
                        ? setValidationErrors(true)
                        : setValidationErrors(false)
                }}
                style={{
                    border: (validationErrors && !isValidEmail(email) && email !== '')
                     ? "red solid 1px" 
                     : "none"
                }}
                value={email || ''} type="email" id="email" name="email" />
            {(validationErrors && !isValidEmail(email) && email !== '') && <span>Enter valid email</span>}

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
