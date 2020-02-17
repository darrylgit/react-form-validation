import React from 'react';
import '../styles/App.css';

export default function App() {
  return (
    <div className="container">
      <header>
        <span>Register for</span><h1>Full Stack Conf</h1>
      </header>

      <form action="index.html" method="post">
        <fieldset>
          <legend>Basic Info</legend>

          <label htmlFor="named">Full Name:</label>
          <input type="text" id="named" name="name" autoFocus />
          <span>Name cannot be blank</span>

          <label htmlFor="email">Email:</label>
          <input type="email" id="emailp" name="email" />
          <span>Must enter valid email address</span>

          <label htmlFor="title">Job Role</label>
          <select id="title" name="title">
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

          <fieldset className="shirt">
            <legend>T-Shirt Info</legend>

            <div>
              <label htmlFor="size">Size:</label>
              <select id="size" name="user_size">
                <option value="small">S</option>
                <option value="medium">M</option>
                <option value="large">L</option>
                <option value="extra large">XL</option>
              </select>
            </div>

            <div>
              <label htmlFor="design">Design:</label>
              <select id="design" name="user_design">
                <option>Select Theme</option>
                <option value="js puns">Theme - JS Puns</option>
                <option value="heart js">Theme - I &#9829; JS</option>
              </select>
            </div>

            <div id="colors-js-puns" className="">
              <label htmlFor="color">Color:</label>
              <select id="color">
                <option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
                <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option>
                <option value="gold">Gold (JS Puns shirt only)</option>
                <option value="tomato">Tomato (I &#9829; JS shirt only)</option>
                <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option>
                <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option>
              </select>
            </div>
          </fieldset>
        
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

            <div>
              <p id='paypal'>If you selected the PayPal option we'll take you to Paypal's site to set up your billing information, when you click “Register” below.</p>
            </div>

            <div>
              <p id='bitcoin'>If you selected the Bitcoin option we'll take you to the Coinbase site to set up your billing information. Due to the nature of exchanging Bitcoin, all Bitcoin transactions will be final.</p>
            </div>

          </fieldset>

        </fieldset>
      </form>
    </div>
  );
}
