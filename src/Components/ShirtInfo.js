import React, { useEffect } from 'react'

export default function ShirtInfo({ 
    handleChange, nextStep, prevStep, selectedShirt, 
    selectedDesign, selectedColor, validationErrors, setValidationErrors,
}) {
    const shirtSizes = ["Small", "Medium", "Large", "X-Large"];
    const jsPunsShirtColors = [
        {
            color: "Select a color",
        },
        {
            color: "Cornflower Blue", 
        },
        {
            color: "Dark Slate Grey",
        },
        {
            color: "Gold"
        },
    ];
    const loveJsShirtColors = [
        {
            color: "Select a color",
        },
        { 
            color: "Mint Green", 
        },
        {
            color: "Steel Blue",
        },
        {
            color: "Dim Grey"
        },
    ];

    useEffect(() => {
        (selectedDesign === "Select Theme" || 
        (selectedDesign !== "Select Theme" && selectedColor === "Select a color")) 
            ? setValidationErrors(true) 
            : setValidationErrors(false);
    }, [selectedDesign, selectedColor, setValidationErrors]);

    return (
        <div className="shirt">
            <legend>T-Shirt Info</legend>
            <div>
                <label htmlFor="size">Size:</label>
                <select onChange={handleChange("selectedShirt")} value={selectedShirt} id="size" name="user_size">
                    {/* create option based off each value in array */}
                    {shirtSizes.map(shirt => (
                        <option key={shirt} value={shirt}>
                            {shirt}
                        </option>
                    ))}
                </select>
            </div>

            <div className="design">
                <label htmlFor="design">Design:</label>
                <select className={validationErrors ? "error" : "none"} onChange={handleChange("selectedDesign")} value={selectedDesign} id="design" name="user_design">
                    <option value="Select Theme">Select Theme</option>
                    <option value="Js Puns">Theme - JS Puns</option>
                    <option value="I heart js">Theme - I 💙JS</option>
                </select>
            </div>
            {/* {validationErrors && <span>Select a design theme</span>} */}

            {selectedDesign !== "Select Theme" &&
                <div id="colors-js-puns" className="color">
                    <label htmlFor="color">Color:</label>
                    <select className={validationErrors ? "error" : "none"} onChange={handleChange("selectedColor")} value={selectedColor} id="color">
                        {/* JS Puns shirt only */}
                        {selectedDesign === "Js Puns" && jsPunsShirtColors.map(color => (
                            <option key={color.color} value={color.color}>{color.color}</option>        
                        ))}
                    
                        {/* I 💙 JS shirt only */}
                        {selectedDesign === "I heart js" && loveJsShirtColors.map(color => {
                            return <option key={color.color} value={color.color}>{color.color}</option>
                        })}
                    
                    </select>
                </div>
            }

            <button onClick={prevStep}>Back</button>
            <button onClick={!validationErrors ? nextStep : undefined}>Next</button>
        </div>
    )
}
