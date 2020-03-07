import React from 'react';

export default function BasicInfo({ 
    nextStep, name, setName, email, 
    setEmail, jobRole, setJobRole 
}) {
    console.log("basic info rendered");
    return (
        <div>
            <legend>Basic Info</legend>

            <label htmlFor="name">Full Name: *</label>
            <input onChange={(e) => setName(e.target.value)} value={name || ''} type="text" id="named" name="name" autoFocus required/>

            <label htmlFor="email">Email: *</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email || ''} type="email" id="email" name="email" required/>

            <label htmlFor="jobRole">Job Role</label>
            <select onChange={(e) => setJobRole(e.target.value)} value={jobRole} id="jobRole" name="jobRole" >
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
            
            <button onClick={nextStep}>Next</button>
        </div>
    )
}
