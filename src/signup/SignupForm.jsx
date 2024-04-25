import React, { useState } from "react";
import { Link } from "react-router-dom";

const api_url = " http://localhost:4000/signup";

const SignupForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const payload = {
        userName: formData.get("userName"),
        password: formData.get("password"),
        email: formData.get("email"),
        mobile: formData.get("mobile"),
      };
      const response = await fetch(api_url, {
        method: "POST",
        headers: {
          "Content-Type": "Application/Json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        return console.log("failed to submit the data")
      }
      const body = await response.json();
      alert('user create sucessfully')
      console.log("body",body)
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <div className="mt-5 m-5">
      <h2>Sign up page</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="user name"  name="userName"/><br /><br />
        <input type="password" placeholder="password"  name="password"/><br /><br />
        <input type="text" placeholder="email" name="email"/><br /><br />
        <input type="text" placeholder="mobile" name="mobile"/><br /><br />
        <button type="submit">submit</button>
      </form>
      <Link to='/login'>Login</Link>
    </div>
  );
};

export default SignupForm;
