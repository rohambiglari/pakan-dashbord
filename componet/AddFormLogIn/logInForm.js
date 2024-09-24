"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../input/input";
import Api from "../../componet/api";
// import Cookie from "js-cookie";
import logInUser from "./serverSidePreventLogIn";
// import { cookies } from "next/headers";
import HandleSuccessLogIn from "./handleSuccessLogIn";
const LogIn = () => {
  const [formData, setFormData] = useState({
    password: "",
    username: "",
  });

  const [state, setState] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLog = () => {
    const bodyLogIn = {
      username: formData.username,
      password: formData.password,
    };

    Api.logIn(bodyLogIn)
      .then((res) => {
        const token = res.data.token;
        setState(token);
        console.log("token: ", token);

        document.cookie = `token=${token}; path=/;`;
      })
      .catch((err) => {
        const error = err?.response?.data?.message;
        alert(error);
      });
  };

  const handleLogInForm = () => (
    <div>
      <Input
        showErr=""
        classLabel="sec-label"
        title="username"
        classInput="second-input"
        name="username"
        placeholder="Enter your name"
        value={formData.username}
        change={handleChange}
      />
      <Input
        showErr=""
        classLabel="sec-label"
        title="password"
        classInput="second-input"
        name="password"
        placeholder="Enter your password"
        value={formData.password}
        change={handleChange}
      />
      <div className="style-button">
        <div onClick={handleLog} className="button-send-verification">
          <p>enter button</p>
        </div>
      </div>
    </div>
  );

  // return <>{state ? <HandleSuccessLogIn /> : handleLogInForm()}</>;
  return <>{<HandleSuccessLogIn />}</>;
};

export default LogIn;
