import React from 'react';
import PropTypes from 'prop-types';
import { Route, Navigate } from 'react-router-dom';
import { useLoginContext, LoginProvider } from './context/LoginContext';


const PrivateRoute = ({ children }) => {
  const { authToken } = useLoginContext();
  if (authToken === undefined || authToken === null || authToken === "")
  {
    return <Navigate to="/login" />
  }
  return children
};

export default PrivateRoute;