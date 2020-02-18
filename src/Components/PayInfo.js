import React from 'react'

export default function PayInfo() {
    return (
        <fieldset className="pay-info">
            <legend>Payment Info</legend>

            <label htmlFor="payment">I'm going to pay with:</label>
            <select id="mySelect" name="user_payment">
                <option value="select_method">Select Payment Method</option>
                <option value="cc">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bitcoin">Bitcoin</option>
            </select>

            <div id="credit-card" className="credit-card">
                <div className="col-6 col">
                    <label htmlFor="cc-num">Card Number:</label>
                    <input id="cc-num" name="user_cc-num" type="text" />
                    <span> Must be 13-16 digits </span>
                </div>

                <div className="col-3 col">
                    <label htmlFor="zip">Zip Code:</label>
                    <input id="zip" name="user_zip" type="text" />
                    <span> 5 digits </span>
                </div>

                <div className="col-3 col">
                    <label htmlFor="cvv">CVV:</label>
                    <input id="cvv" name="user_cvv" type="text" />
                    <span> 3 digits </span>
                </div>

                <label htmlFor="exp-month">Expiration Date:</label>
                <select id="exp-month" name="user_exp-month">
                    <option value="1">1 - January</option>
                    <option value="2">2 - February</option>
                    <option value="3">3 - March</option>
                    <option value="4">4 - April</option>
                    <option value="5">5 - May</option>
                    <option value="6">6 - June</option>
                    <option value="7">7 - July</option>
                    <option value="8">8 - August</option>
                    <option value="9">9 - September</option>
                    <option value="10">10 - October</option>
                    <option value="11">11 - November</option>
                    <option value="12">12 - December</option>
                </select>

                <label htmlFor="exp-year">Expiration Year:</label>
                <select id="exp-year" name="user_exp-year">
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                </select>
            </div>

            <div className="paypal">
                <p id='paypal'>If you selected the PayPal option we'll take you to Paypal's site to set up your billing information, when you click “Register” below.</p>
            </div>

            <div className="bitcoin">
                <p id='bitcoin'>If you selected the Bitcoin option we'll take you to the Coinbase site to set up your billing information. Due to the nature of exchanging Bitcoin, all Bitcoin transactions will be final.</p>
            </div>

        </fieldset>
    )
}
