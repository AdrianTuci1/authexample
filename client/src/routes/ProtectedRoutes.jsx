import React from 'react';
import {  Navigate } from 'react-router-dom';


const ProtectedRoute = ({ children }) => {
  const login = window.localStorage.getItem("isLogedIn");

  if (!login) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }

  return children; // Render the component if authenticated
};

export default ProtectedRoute;
