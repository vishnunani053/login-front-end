import React from "react";
import LoginPage from "./login-page/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KycDetails from "./kyc/KycDetails";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute ";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <LoginPage />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/kyc"
            element={
              <ProtectedRoute>
                <KycDetails />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
