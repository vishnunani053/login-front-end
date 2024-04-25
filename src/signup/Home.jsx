import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    const handleLogout = ()=>{
        localStorage.removeItem('token')
        navigate('/login')
    }
  return (
    <div>
        <h1>welcome page</h1><br /><br />
        <button onClick={handleLogout}>logout</button>
    </div>
  )
}

export default Home