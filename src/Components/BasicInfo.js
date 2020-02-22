import React, { useState } from 'react';

export default function BasicInfo({ ref }) {
    let [name, setName] = useState();
    let [email, setEmail] = useState();
    let [jobRole, setJobRole] = useState([]);

    return (
        <>
            <legend>Basic Info</legend>

            <label htmlFor="named">Full Name: *</label>
            <input ref={ref} onChange={(e) => setName(e.target.value)} type="text" id="named" name="name" autoFocus required/>

            <label htmlFor="email">Email: *</label>
            <input onChange={(e) => setEmail(e.target.value)} ref={ref} type="email" id="email" name="email" required/>

            <label htmlFor="title">Job Role</label>
            <select ref={ref} onChange={(e) => setJobRole(e.target.value)} id="title" name="title" >
                <option value="full-stack js developer">Full Stack JavaScript Developer</option>
                <option value="front-end developer">Front End Developer</option>
                <option value="back-end developer">Back End Developer</option>
                <option value="designer">Designer</option>
                <option value="student">Student</option>
                <option value="other">Other</option>
            </select>
            <br />
            {jobRole === "other" 
            ? (
                <>
                    {/* <input ref={ref} id='other-title' type='text' placeholder="Your Job Role" required/> */}
                    <textarea ref={ref} id='other-title' type='text' placeholder="Your Job Role" required></textarea>
                </>
            )
            : ("")}
            
        </>
    )
}
