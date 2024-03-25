import React from "react";
import linkedinlogo from "./../../assets/linkedin-logo.svg";
import "./../../Styles/utilities.css";
import "./../../Styles/signup.css";

const signupForm = () => {
  return (
    <>
      <img className="logo" src={linkedinlogo} alt="" />
      <div className="flex flex-col justify-center ">
        <div className="text-0 ">Make the most of your professional life</div>
        <div className="signup">
          <div className=" flex flex-col align-center">
            <div className="username mt-2">
              <div className="text-2">Email </div>
              <input className="inp"></input>
            </div>
            <div className="password mt-2  ">
              <div className="text-2">Password (6+ characters)</div>
              <div className="flex flex-row pass-input">
                <input className="pass-inp" type="password" />
                <button>Show </button>
              </div>
            </div>
            <div className="policy mt-4">
              By clicking Agree & Join or Continue, you agree to the LinkedIn
              <div></div>
              User Agreement, Privacy Policy, and Cookie Policy.
            </div>
            <button class="log">Agree&Join</button>
            <div>
              Already have an account <a href=""> Sign In</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default signupForm;
