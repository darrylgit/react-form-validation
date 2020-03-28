import React from 'react';

export default function BasicInfo({ 
    state, nextStep, setStateValidation, 
    handleChange
}) {
    const { name, email, jobRole, validationErrors } = state;
    
    function isValidEmail(email) {
        const valid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email) && email !== '';
        return valid;
    }

    const emailHasErrors = (!isValidEmail(email) && email !== '') || !email;

    return (
        <div>
            <legend>Basic Info</legend>

            <label htmlFor="name">Full Name: *</label>
            <input 
                onChange={handleChange('name')} 
                onBlur={(e) => {
                    e.target.value === '' 
                        ? setStateValidation('validationErrors',true) 
                        : setStateValidation('validationErrors',false)
                }}
                style={{
                    border: validationErrors && name === '' ? "red solid 1px" : "none"
                }}
                value={name} type="text" id="named" name="name" autoFocus 
            />
            {validationErrors && !name && <span>Please enter name</span>}

            <label htmlFor="email">Email: *</label>
            <input 
                className={validationErrors && emailHasErrors ? "error" : ""}
                onChange={handleChange('email')} 
                onBlur={(e) => {
                    !isValidEmail(e.target.value)
                        ? setStateValidation('validationErrors',true)
                        : setStateValidation('validationErrors',false)
                }}
                value={email || ''} type="email" id="email" name="email" />
            {validationErrors && emailHasErrors && <span>Enter valid email</span>}

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
            
            <button onClick={!validationErrors && name && !emailHasErrors ? nextStep : undefined}>Next</button>
        </div>
    )
}
