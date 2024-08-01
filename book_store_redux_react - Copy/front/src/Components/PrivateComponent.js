import React from 'react'
import { Navigate, Outlet } from "react-router-dom"
const PrivateComponent = () => {
  const auth = localStorage.getItem('user');
  return auth ? <Outlet /> : <Navigate to="/signup" />
  //   user jo hai sinup kar chuka hoga tab outlet show hoga matlab baki ke option par signup nhi hua hoga toh signup option hi show hoga
}

export default PrivateComponent
