// src/PrivateRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const token = Cookies.get('jwt'); // Adjust the cookie name if needed
    const userToken = Cookies.get('user'); // Adjust the cookie name if needed

    // If no JWT or user token, redirect to login page
    if (!token || !userToken) {
        return <Navigate to="/Login" state={{ from: location }} />;
    }

    return children;
};

export default PrivateRoute;
