import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({children, loggedIn}) => {
  return (
    <div>
        {loggedIn ? <Outlet /> : <Navigate to="/login" />}
    </div>
  )
}

export default ProtectedRoute