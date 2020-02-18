import React from 'react'

export default function ActivitiesInfo() {
    return (
        <fieldset className="activities">
            <legend>Register for Activities</legend>
            <label><input type="checkbox" name="all" /> Main Conference — $200</label>
            <label><input type="checkbox" name="js-frameworks" /> JavaScript Frameworks Workshop — Tuesday 9am-12pm, $100</label>
            <label><input type="checkbox" name="js-libs" /> JavaScript Libraries Workshop — Tuesday 1pm-4pm, $100</label>
            <label><input type="checkbox" name="express" /> Express Workshop — Tuesday 9am-12pm, $100</label>
            <label><input type="checkbox" name="node" /> Node.js Workshop — Tuesday 1pm-4pm, $100</label>
            <label><input type="checkbox" name="build-tools" /> Build tools Workshop — Wednesday 9am-12pm, $100</label>
            <label><input type="checkbox" name="npm" /> npm Workshop — Wednesday 1pm-4pm, $100</label>
            <span>Must select at least one option</span>
        </fieldset>
    )
}
