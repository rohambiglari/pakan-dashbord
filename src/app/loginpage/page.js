"use client";
import React from "react";
import "./log in.css";
import LogIn from "../../../componet/AddFormLogIn/logInForm";
import Addfrom from "../AddForm/Addform";
import Cookie from "js-cookie";

const LoginComponent = () => {
  return (
    <div className="style-signIn">
      <div className="style-logo">
        <img className="logo" src="./logo.svg" alt="new is new logo" />
      </div>

      <div className="style-input-num">
        <LogIn />
      </div>

      <div className="style-reg-link">
        <p className="color1">
          Already have an account?
          <span className="color3"> Sign in</span>
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;
