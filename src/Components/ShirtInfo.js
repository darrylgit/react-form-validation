import React from 'react'

export default function ShirtInfo({ setSelectedShirt, setSelectedDesign, setSelectedColor }) {
    const shirtSizes = ["Small", "Medium", "Large", "X-Large"];

    let selectShirt = (e) => {
        setSelectedShirt(e.target.value);
    }

    let selectDesign = (e) => {
        return e.target.value ? setSelectedDesign(e.target.value) : "";
    }

    let selectColor = (e) => {
        setSelectedColor(e.target.value);
    }

    return (
        <fieldset className="shirt">
            <legend>T-Shirt Info</legend>

            <div>
                <label htmlFor="size">Size:</label>
                <select onChange={(e) => {selectShirt(e)}} id="size" name="user_size">
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
                <select onChange={(e) => { selectDesign(e) }} id="design" name="user_design">
                    <option>Select Theme</option>
                    <option value="js puns">Theme - JS Puns</option>
                    <option value="heart js">Theme - I &#9829; JS</option>
                </select>
            </div>

            <div id="colors-js-puns" className="color">
                <label htmlFor="color">Color:</label>
                <select onChange={(e) => { selectColor(e) }} id="color">
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
