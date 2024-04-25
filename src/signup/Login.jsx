import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const api_url = " http://localhost:4000/signin";

const Login = () => {
const [errMsg,setErrMsg]=useState('')
const navigate = useNavigate()
const notify=()=>toast("Login Sucessfull")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const payload = {
        userName: formData.get("userName"),
        password: formData.get("password"),
      };
      const response = await fetch(api_url, {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        console.log("failed to login");
      } else {
        const responseData = await response.json();
        if (responseData.token) {
          localStorage.setItem('token', responseData.token);
          notify()
          setTimeout(()=>{
            navigate('/home')
          },5000)
        } else {
          response.status(403);
          setErrMsg("password miss match")
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="m-5">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="user name" name="userName" />
        <br />
        <br />
        <input type="password" placeholder="password" name="password" />
        <br />
        <br />
        <button type="submit">login</button>
        <br />
        <br />
        <p>{errMsg}</p>
        <br />
        <Link to={"/"}>Sign up</Link>
      </form>
      <ToastContainer />

    </div>
  );
};

export default Login;
