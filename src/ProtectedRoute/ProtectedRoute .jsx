// import React from "react";
// import { Navigate, useLocation } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const location = useLocation();
//   const secureToken = localStorage.getItem("token");
//   if (location.pathname === "/dashboard") {
//     if (secureToken) {
//       return children;
//     } else {
//       return <Navigate to={'/'} />;
//     }
//   }else{
//     return <Navigate to={'/'}/>
//   }
// };

// export default ProtectedRoute;



import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const fallbackRoutes = ["/signup", "/"];

const ProtectedRoute = ({ path, element }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token')
    if(token && fallbackRoutes.includes(path)){
      navigate("/dashboard");
    } else if (!token && !fallbackRoutes.includes(path)) {

      navigate("/");
    }
  }, []);

  return element;
};


export default ProtectedRoute;
