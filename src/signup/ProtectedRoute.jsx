// import React from "react";
// import { Navigate, useLocation } from "react-router-dom";

// const ProtectedRoute = ({ children }) => { // Changed Children to children (lowercase)
//   const location = useLocation();
//   const secureToken = localStorage.getItem("token");

//   if (location.pathname === "/home") {
//     if (secureToken) {
//       return children; // Return the children if user is authenticated
//     } else {
//       return <Navigate to={"/login"} />; // Redirect to login if user is not authenticated
//     }
//   }  else {
//     return <Navigate to={"/"} />; // Redirect to home if the path is not "/home"
//   }

// };

// export default ProtectedRoute;
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
