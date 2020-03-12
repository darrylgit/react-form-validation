import React from 'react'

export default function ShirtInfo({ 
    handleChange, nextStep, prevStep, selectedShirt, 
    selectedDesign, selectedColor, validationErrors, setValidationErrors,
}) {
    console.log("shirt info rendered");
    // selectedDesign === "Select Theme" ? setValidationErrors(true) : setValidationErrors(false);

    const shirtSizes = ["Small", "Medium", "Large", "X-Large"];

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
                <select onChange={handleChange("selectedDesign")} value={selectedDesign} id="design" name="user_design" required>
                    <option value="Select Theme">Select Theme</option>
                    <option value="Js Puns">Theme - JS Puns</option>
                    <option value="I heart js">Theme - I &#9829; JS</option>
                </select>
            </div>

            <div id="colors-js-puns" className="color">
                <label htmlFor="color">Color:</label>
                <select onChange={handleChange("selectedColor")} value={selectedColor} id="color">
                    <option value="cornFlowerBlue">Cornflower Blue (JS Puns shirt only)</option>
                    <option value="darkSlateGrey">Dark Slate Grey (JS Puns shirt only)</option>
                    <option value="gold">Gold (JS Puns shirt only)</option>
                    <option value="tomato">Tomato (I &#9829; JS shirt only)</option>
                    <option value="steelBlue">Steel Blue (I &#9829; JS shirt only)</option>
                    <option value="dimGrey">Dim Grey (I &#9829; JS shirt only)</option>
                </select>
            </div>

            <button onClick={prevStep}>Back</button>
            <button onClick={!validationErrors ? nextStep : undefined}>Next</button>
        </div>
    )
}
