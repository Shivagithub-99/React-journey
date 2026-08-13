import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div style={{backgroundColor: "orange"}}>Home</div>
        <Link to="/about">About page</Link><br></br>
        <Link to="/login">Login page</Link><br></br>
        <Link to="/profile">Profile page</Link><br></br>
        <Link to="/signup">Signup page</Link><br></br>
    </>
    
  )
}

export default Home