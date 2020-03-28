import React from 'react'

export default function SubmitButton({ state }) {
    const { submitted } = state;
    return (
        <div>
            {submitted 
                ? (
                    <>
                        <h1>Ready to Submit?</h1>
                        <button style={{ display: "" }}>Submit</button>
                    </>
                )
                : (<h1>Thanks! 🎉</h1>)
            }
        </div>
    )
}
