import React from "react";
import "./checkout.css";
import {Link} from 'react-router-dom'

function Checkout() {
  return (

      <div className="wrapper">
        <h2>Payment Form</h2>
        <form method="POST">
          <h4>Account</h4>
          <div className="wrapper__input-group">
            <div className="wrapper__input-box">
              <input type="text" placeholder="Full Name" required className="wrapper__name" />
              <i className="fa fa-user icon"></i>
            </div>
            <div className="wrapper__input-box">
              <input type="text" placeholder="Nick Name" required className="wrapper__name" />
              <i className="fa fa-user icon"></i>
            </div>
          </div>
          <div className="wrapper__input-group">
            <div className="wrapper__input-box">
              <input type="email" placeholder="Email Address" required className="wrapper__name" />
              <i className="fa fa-envelope icon"></i>
            </div>
          </div>
          <div className="wrapper__input-group">
            <div className="wrapper__input-box">
              <h4>Date of Birth</h4>
              <input type="text" placeholder="DD" className="wrapper__dob" />
              <input type="text" placeholder="MM" className="wrapper__dob" />
              <input type="text" placeholder="YYYY" className="wrapper__dob" />
            </div>
            <div className="wrapper__input-box">
              <h4>Gender</h4>
              <input type="radio" id="b1" name="gendar" checked className="wrapper__radio" />
              <label for="b1">Male</label>
              <input type="radio" id="b2" name="gendar" className="wrapper__radio" />
              <label for="b2">Female</label>
            </div>
          </div>
          <div className="wrapper__input-group">
            <div className="wrapper__input-box">
              <h4>Payment Details</h4>
              <input type="radio" name="pay" id="bc1" checked className="wrapper__radio" />
              <label for="bc1">
                <span>
                  <i className="fa fa-cc-visa"></i> Credit Card
                </span>
              </label>
              <input type="radio" name="pay" id="bc1" checked className="wrapper__radio" />
              <label for="bc2">
                <span>
                  <i className="fa fa-cc-visa"></i> Debit Card
                </span>
              </label>
              <input type="radio" name="pay" id="bc2" className="wrapper__radio" />
              <label for="bc3">
                <span>
                  <i className="fa fa-cc-paypal"></i> Net Banking
                </span>
              </label>
            </div>
          </div>
          <div className="wrapper__input-group">
            <div className="wrapper__input-box">
              <input
                type="tel"
                placeholder="Card Number"
                required
                className="wrapper__name"
              />
              <i className="fa fa-credit-card icon"></i>
            </div>
          </div>
          <div className="wrapper__input-group">
            <div className="wrapper__input-box">
              <input type="tel" placeholder="Card CVC" required className="wrapper__name" />
              <i className="fa fa-user icon"></i>
            </div>
            <div className="wrapper__input-box">
              <select>
                <option>01 jun</option>
                <option>02 jun</option>
                <option>03 jun</option>
              </select>
              <select>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
              </select>
            </div>
          </div>
          <div className="wrapper__input-group">
            <div className="wrapper__input-box">
              <Link to="/thankyou"><button type="submit" className="wrapper__button">PAY NOW</button></Link>
            </div>
          </div>
        </form>
      </div>

  );
}

export default Checkout;
