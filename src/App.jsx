import React from "react";
import SignupForm from "./signup/SignupForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./signup/Login";
import Home from "./signup/Home";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute ";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={ 
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
