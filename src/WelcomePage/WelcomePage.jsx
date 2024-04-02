import React from 'react'
import { useNavigate } from "react-router-dom";


const WelcomePage = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
      };
  return (
    <div className='text-center'>
        <h1>Welcome to this page</h1>
     <button onClick={() => handleLogout()} className="btn-primary">Logout</button>
    </div>
  )
}

export default WelcomePage