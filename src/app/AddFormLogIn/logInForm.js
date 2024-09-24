"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../input/input";
import Api from "../../api";
import Cookie from "js-cookie";
import logInUser from "./serverSidePreventLogIn";
// import { cookies } from "next/headers";
const LogIn = () => {
  const [formData, setFormData] = useState({
    password: "",
    remember: "",
    role: "",
    username: "",
  });

  const [state, setState] = useState(null);
  // const router = useRouter();

  // useEffect(() => {

  //   const token = document.cookie.split('; ')
  //   .find(row => row.startsWith('token='));
  //   console.log('token : ',token);

  //   if (token) {
  //     console.log('User is already logged in');
  //     router.push('/');
  //   }
  // }, []);

  // useEffect(() => {
  //   if (getToken) {
  //     console.log('log state in log in', state);
  //     router.push('/');
  //   }
  // }, [state, router]);

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
      remember: false,
      role: "customer",
    };

    Api.logIn(bodyLogIn)
      .then((res) => {
        // setState(res.data);
        const token = res.data.response.accessToken;
        setState(token);
        console.log("token: ", token);
        if(token){
          setTimeout(() => {
            logInUser()

          }, 3000);
        }
        document.cookie = `token=${token}; path=/;`;
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
      });
  };

  // const handleLogIn =async () => {
  //   await logInUser()
  // }

  // const handleButtonClick = () => {
  //  const token = Cookie.get('token')
  //   if (!token) {
  //     handleLog();
  //   } else if(token) {
  //     handleLogIn();
  //   }
  // };
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

  const handleSuccessLogIn = () => (
    <div>
      <p style={{ color: "white" }}>Your login was successful</p>
    </div>
  );

  return <>{state ? handleSuccessLogIn() : handleLogInForm()}</>;
};

export default LogIn;
