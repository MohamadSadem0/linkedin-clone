import React from "react";
import SignupForm from "./../components/Authentication/signupForm";
import Login from "./../components/Authentication/loginForm";
import { useState } from "react";
import axios from "axios";

const Authentication = () => {
  const [signup, setSignup] = useState(true);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const baseurl = "http://localhost:3000/";

  const login = async (email, password) => {
    const response = await axios.post(baseurl + "login", {
      email: email,
      password: password,
    });
    return response;
  };

  return (
    <div className="page-container white-bg flex">
      {signup ? (
        <Login signup={signup} setSignup={setSignup} />
      ) : (
        <SignupForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          setError={setError}
          signup={signup}
          setSignup={setSignup}
          login={login}
        />
      )}
    </div>
  );
};

export default Authentication;
