import React from "react";
import LoginPage from "./login-page/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KycDetails from "./kyc/KycDetails";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute ";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpForm from "./SignUp-Form/SignUp";
import LoginForm from "./Login-form/LoginForm";
import WelcomePage from "./WelcomePage/WelcomePage";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              // <ProtectedRoute>
                <LoginForm />
              //  </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/"
            element={
              // <ProtectedRoute>
                <SignUpForm />
              // </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/welcome"
            element={
              <ProtectedRoute>
                <WelcomePage />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
