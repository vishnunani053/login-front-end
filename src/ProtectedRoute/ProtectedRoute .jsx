import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const secureToken = localStorage.getItem("token");

  if (location.pathname === "/welcome") {
    if (secureToken) {
      return children;
    } else {
      return <Navigate to="/" />;
    }
  }
  if (location.pathname === "/") {
    if (secureToken) {
      return <Navigate to="/welcom" />;
    } else {
        return children;
    }
  }
//   return <Navigate to="/" />;
};

export default ProtectedRoute;
