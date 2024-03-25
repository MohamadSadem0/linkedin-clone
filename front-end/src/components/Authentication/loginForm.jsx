import React, { useState, useEffect } from "react";
import axios from "axios";
import "./../../Styles/utilities.css";
import "./../../Styles/Authentication.css";
import linkedinlogo from "./../../assets/linkedin-logo.svg";
import article from "./../../assets/article.svg";
import bag from "./../../assets/bag.svg";
import laptop from "./../../assets/laptop.svg";
import learning from "./../../assets/learning.svg";
import peoples from "./../../assets/people.svg";
import loginImg from "./../../assets/login-image.svg";

const LoginComponent = () => {
  const [emailPhone, setEmailPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginSignupSwitch = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("", {
        emailPhone,
        password,
        isLogin,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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

        <button
          className="nav__cta-container"
          onClick={handleLoginSignupSwitch}
        >
          {isLogin ? "Sign Up" : "Log In"}
        </button>
      </div>
      <div className="section-1 pt-5 flex flex-row ">
        <div className="leftSide">
          <div className="text-1">
            {isLogin ? "Log In to your account" : "Sign Up for an account"}
          </div>
          <div className="loginForm">
            <div className="username mt-2">
              <div className="text-2">Email or phone</div>
              <input
                className="inp"
                value={emailPhone}
                onChange={(e) => setEmailPhone(e.target.value)}
              />
            </div>
            <div className="password mt-2  ">
              <div className="text-2">Password</div>
              <div className="flex flex-row pass-input">
                <input
                  className="pass-inp"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button>Show</button>
              </div>
            </div>
          </div>
          {isLogin && <div className="text-3 pt-3">Forgot password?</div>}
          <button onClick={handleSubmit} className="loginBtn">
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </div>
        <img src={loginImg} alt="login" />
      </div>
    </>
  );
};

export default LoginComponent;
