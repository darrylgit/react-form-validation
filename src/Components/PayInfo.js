import React, {useState} from 'react';

export default function PayInfo({ setPayInfoComplete }) {
    let [selectedPayMethod, setSelectedPayMethod] = useState("cc");
    let [validCC, setValidCC] = useState({cc: null, zip: null, ccv: null, year: null});

    function isValidCC(number) {
        let valid = /^\d{13,16}$/.test(number);
        valid ? setValidCC({ cc: true, }) : setValidCC({ cc: false, })
        return valid; 
    };

    function isValidZip(number) {
        let valid = /(^\d{5}$)/.test(number);
        valid ? setValidCC({ zip: true, }) : setValidCC({ zip: false, })
        return valid;
    };

    function isValidCVC(number) {
        let valid = /^\d{3}$/.test(number);
        valid ? setValidCC({ ccv: true, }) : setValidCC({ ccv: false, })
        return valid;
    };

    function isValidCardYear(value) {
        let currentYear = new Date().getFullYear();
        return (value < currentYear || value === "Select a year") 
            ? setValidCC({ year: false })
            : setValidCC({ year: true });
    };

    let paymentMethodIsGoodToGo = 
        validCC.cc === true 
        && validCC.zip === true
        && validCC.ccv === true
        && validCC.year === true;
    //should be updated when whole section is complete
  
    return (
        <fieldset className="pay-info">
            <legend>Payment Info</legend>
            <label htmlFor="payment">I'm going to pay with:</label>
            <select id="mySelect" name="user_payment" onChange={(e) => { setSelectedPayMethod(e.target.value) }}>
                <option value="cc">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bitcoin">Bitcoin</option>
            </select>

            {(selectedPayMethod !== "paypal" || selectedPayMethod !== "bitcoin") && selectedPayMethod === "cc"
                ? (
                    <>
                        <div id="credit-card" className="credit-card">
                            <div className="col-6 col">
                                <label htmlFor="cc-num">Card Number:</label>
                                <input onBlur={(e) => isValidCC(e.target.value)} id="cc-num" name="user_cc-num" type="text" required/>
                                {validCC.cc === false && validCC.cc !== "" ? (<span> Must be 13-16 digits </span>) : ("")}
                            </div>

                            <div className="col-3 col">
                                <label htmlFor="zip">Zip Code:</label>
                                <input id="zip" name="user_zip" type="text" onBlur={(e) => { isValidZip(e.target.value) }} required/>
                                {validCC.zip === false && validCC.zip !== "" ? (<span> 5 digits </span>) : ("")}
                            </div>

                            <div className="col-3 col">
                                <label htmlFor="cvv">CVV:</label>
                                <input onBlur={(e) => { isValidCVC(e.target.value)}} id="cvv" name="user_cvv" type="text" required/>
                                {validCC.ccv === false && validCC.ccv !== "" ? (<span> 3 digits </span>) : ("")}
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
                            {validCC.year === false ? (<span>Card Date is invalid</span>) : ("")}
                        </div>
                        {console.log(paymentMethodIsGoodToGo)}
                        {paymentMethodIsGoodToGo ? setPayInfoComplete(true) : setPayInfoComplete(false)}
                    </>
                )
                : ("")
            }

            {selectedPayMethod === "paypal"
                ? (
                    <>
                        {setPayInfoComplete(true)}
                        <div className="paypal">
                            <p id='paypal'>If you selected the PayPal option we'll take you to Paypal's site to set up your billing information, when you click “Register” below.</p>
                        </div>
                    </>
                )
                : ("")
            }

            {selectedPayMethod === "bitcoin" 
                ? (
                    <>
                        {setPayInfoComplete(true)}
                        <div className="bitcoin">
                            <p id='bitcoin'>If you selected the Bitcoin option we'll take you to the Coinbase site to set up your billing information. Due to the nature of exchanging Bitcoin, all Bitcoin transactions will be final.</p>
                        </div>
                    </>
                )
                : ("")
            }

        </fieldset>
    )
}
