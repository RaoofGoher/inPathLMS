import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'; // Import Navigate and Outlet for routing
import { useSelector } from 'react-redux'; // To access Redux state

const PrivateRoute = ({ allowedRoles }) => {
  const { token, role } = useSelector((state) => state.auth); // Get token and role from Redux store

  if (!token) {
    // If the user is not logged in, redirect to the login page
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    // If the user doesn't have the right role, redirect to a default page (or access denied page)
    return <Navigate to="/login" />;
  }

  return <Outlet />; // If everything is fine, render the protected route
};

export default PrivateRoute;
