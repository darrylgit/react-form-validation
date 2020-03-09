import React from 'react';

export default function PayInfo({ 
    nextStep, prevStep, selectedPayMethod, 
    setSelectedPayMethod, validCC, 
    validZip, validCCV, validYear,
    setValidCC, handleChange, setValidCCV,
    setValidZip, setValidYear, ccNum,
    ccZip, ccv,
}) {
    console.log("pay info rendered");

    function isValidCC(number) {
        let valid = /^\d{13,16}$/.test(number);
        return valid ? setValidCC(true) : setValidCC(false)
    };

    function isValidZip(number) {
        let valid = /(^\d{5}$)/.test(number);
        return valid ? setValidZip(true) : setValidZip(false)
    };

    function isValidCCV(number) {
        let valid = /^\d{3}$/.test(number);
        return valid ? setValidCCV(true) : setValidCCV(false)
    };

    function isValidCardYear(value) {
        let currentYear = new Date().getFullYear();
        return (value < currentYear || value === "Select a year") 
            ? setValidYear(false)
            : setValidYear(true);
    };

    return (
        <fieldset className="pay-info">
            <legend>Payment Info</legend>
            <label htmlFor="payment">I'm going to pay with:</label>
            <select id="mySelect" name="user_payment" onChange={handleChange("selectedPayMethod")}>
                <option value="cc">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bitcoin">Bitcoin</option>
            </select>

            {selectedPayMethod === "cc" &&
                <div id="credit-card" className="credit-card">
                    <div className="col-6 col">
                        <label htmlFor="cc-num">Card Number: {validCC === false && ("Must be 13-16 digits")}</label>
                        <input onBlur={(e) => isValidCC(e.target.value)} 
                            onChange={handleChange("ccNum")}
                            value={ccNum || ''} id="cc-num" name="user_cc-num" type="text" required />
                    </div>

                    <div className="col-3 col">
                        <label htmlFor="zip">Zip Code: {validZip === false && ("5 digits")}</label>
                        <input onChange={handleChange("ccZip")}
                            value={ccZip || ''} id="zip" name="user_zip" type="text" onBlur={(e) => { isValidZip(e.target.value) }} required />
                    </div>

                    <div className="col-3 col">
                        <label htmlFor="ccv">CCV: {validCCV === false && ("3 digits")}</label>
                        <input onChange={handleChange("ccv")}
                            value={ccv || ''} onBlur={(e) => { isValidCCV(e.target.value)}} id="ccv" name="user_ccv" type="text" required />
                    </div>

                    <label htmlFor="exp-month">Expiration Date:</label>
                    <select id="exp-month" name="user_exp-month">
                        <option value="0">January</option>
                        <option value="1">February</option>
                        <option value="2">March</option>
                        <option value="3">April</option>
                        <option value="4">May</option>
                        <option value="5">June</option>
                        <option value="6">July</option>
                        <option value="7">August</option>
                        <option value="8">September</option>
                        <option value="9">October</option>
                        <option value="10">November</option>
                        <option value="11">December</option>
                    </select>

                    <label htmlFor="exp-year">Expiration Year:</label>
                    <select id="exp-year" name="user_exp-year" onChange={(e) => { isValidCardYear(e.target.value) }}>
                        <option value="Select a year">Select a year</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </select>
                    {validYear === false && (<span>Card Date is invalid</span>)}
                </div>
            }

            {selectedPayMethod === "paypal" &&
                <div className="paypal">
                    <p id='paypal'>If you selected the PayPal option we'll take you to Paypal's site to set up your billing information, when you click “Register” below.</p>
                </div>
            }

            {selectedPayMethod === "bitcoin" &&
                <div className="bitcoin">
                    <p id='bitcoin'>If you selected the Bitcoin option we'll take you to the Coinbase site to set up your billing information. Due to the nature of exchanging Bitcoin, all Bitcoin transactions will be final.</p>
                </div>
            }

            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
        </fieldset>
    )
}
