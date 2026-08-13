import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <Link to="/" className='link'>Home</Link>
        <Link to="/about" className='link'>About</Link>
        <Link to="/profiles" className='link'>Profiles</Link>
        <Link to="/login" className='link'>Login</Link>
        <Link to="/Signup" className='link'>Sign up</Link>
    </div>
  )
}

export default Navbar