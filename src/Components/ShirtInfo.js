import React, { useState } from 'react'

export default function ShirtInfo({ }) {
    const shirtSizes = ["Small", "Medium", "Large", "X-Large"];

    let [selectedShirt, setSelectedShirt] = useState();
    let [selectedDesign, setSelectedDesign] = useState();
    let [selectedColor, setSelectedColor] = useState();

    return (
        <fieldset className="shirt">
            <legend>T-Shirt Info</legend>

            <div>
                <label htmlFor="size">Size:</label>
                <select onChange={(e) => {setSelectedShirt(e.target.value)}} id="size" name="user_size">
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
                <select onChange={(e) => { setSelectedDesign(e.target.value) }} id="design" name="user_design" required>
                    <option>Select Theme</option>
                    <option value="js puns">Theme - JS Puns</option>
                    <option value="heart js">Theme - I &#9829; JS</option>
                </select>
            </div>

            <div id="colors-js-puns" className="color">
                <label htmlFor="color">Color:</label>
                <select onChange={(e) => { setSelectedColor(e.target.value) }} id="color">
                    <option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
                    <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>
                    <option value="gold">Gold (JS Puns shirt only)</option>
                    <option value="tomato">Tomato (I &#9829; JS shirt only)</option>
                    <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>
                    <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>
                </select>
            </div>
        </fieldset>
    )
}
