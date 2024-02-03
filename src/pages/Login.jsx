import React from 'react'
import "./login.css"

const Login = ({setIsLoggedIn, loggedIn}) => {

  const handleClick = () => {
    setIsLoggedIn(!loggedIn);
  }

  return (
      <main>
        <div className="login-container">
          <h2>{loggedIn ? "You can access dashboard !!!" : "You cannot access dashboard !!! Log In First"}</h2>
          <button onClick={handleClick}>{loggedIn ? "Log Out" : "Log In"}</button>
        </div>
      </main>
  )
}
export default Login 