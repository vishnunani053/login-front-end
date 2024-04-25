import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const secureToken = localStorage.getItem("token");
  if (location.pathname === "/home") {
    if (secureToken) {
      return children;
    } else {
      return <Navigate to={"/login"} />;
    }
  }else{
    return <Navigate to={'/'}/>
  }
};

export default ProtectedRoute;
