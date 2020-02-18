import React from 'react'

export default function BasicInfo({ setBasicInfoRole }) {
    const setRole = (e) => {
        setBasicInfoRole(e.target.value);
    }

    return (
        <>
            <legend>Basic Info</legend>

            <label htmlFor="named">Full Name:</label>
            <input type="text" id="named" name="name" autoFocus />
            <span>Name cannot be blank</span>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <span>Must enter valid email address</span>

            <label htmlFor="title">Job Role</label>
            <select onChange={(e) => setRole(e)} id="title" name="title">
                <option value="full-stack js developer">Full Stack JavaScript Developer</option>
                <option value="front-end developer">Front End Developer</option>
                <option value="back-end developer">Back End Developer</option>
                <option value="designer">Designer</option>
                <option value="student">Student</option>
                <option value="other">Other</option>
            </select>
            <br />
            <input id='other-title' type='text' placeholder="Your Job Role" />
            <textarea />
        </>
    )
}
