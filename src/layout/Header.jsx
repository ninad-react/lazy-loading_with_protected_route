import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

const Header = ({loggedIn}) => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/login">{loggedIn ? "Log Out" : "Log In"}</Link>
        <Link to="/dashboard">Dashboard</Link>
    </nav>
  )
}

export default Header