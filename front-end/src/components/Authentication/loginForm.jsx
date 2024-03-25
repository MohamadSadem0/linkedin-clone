import React from "react";
import "./../../Styles/utilities.css";
import "./../../Styles/Authentication.css";
import "./../../Styles/utilities.css";
import linkedinlogo from "./../../assets/linkedin-logo.svg";
import article from "./../../assets/article.svg";
import bag from "./../../assets/bag.svg";
import laptop from "./../../assets/laptop.svg";
import learning from "./../../assets/learning.svg";
import peoples from "./../../assets/people.svg";
import loginImg from "./../../assets/login-image.svg";

const loginComponent = ({ signup, setSignup }) => {
  return (
    <>
      <div className="nav flex .flex-row">
        <div className="nav-logo flex ">
          <img src={linkedinlogo} alt="linkedin" />
        </div>
        <div className="tov-nav-menu">
          <ul className="flex gap-50 ">
            <li>
              <img src={article} alt="" />
              Articles
            </li>
            <li>
              <img src={peoples} alt="" />
              People
            </li>
            <li>
              <img src={learning} alt="" />
              Learning
            </li>
            <li>
              <img src={bag} alt="" />
              Jobs
            </li>
            <li>
              <img src={laptop} alt="" />
              Get the app
            </li>
          </ul>
        </div>
        <button className="nav__cta-container"> Join now </button>
      </div>
      <div className="section-1 pt-5 flex flex-row ">
        <div className="leftSide">
          <div className="text-1">Welcome to your professional community</div>
          <div className="loginForm">
            <div className="username mt-2">
              <div className="text-2">Email or phone</div>
              <input className="inp"></input>
            </div>
            <div className="password mt-2  ">
              <div className="text-2">Password</div>
              <div className="flex flex-row pass-input">
                <input className="pass-inp" type="password" />
                <button>Show </button>
              </div>
            </div>
          </div>
          <div className="text-3 pt-3">Forgot password?</div>
          <button class="log">Login</button>
        </div>
        <img src={loginImg} alt="" />
      </div>
    </>
  );
};

export default loginComponent;
