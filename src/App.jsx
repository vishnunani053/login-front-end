import React from "react";
import SignupForm from "./signup/SignupForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./signup/Login";
import Home from "./signup/Home";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute ";
import Dashboard from "./dashboard/Dashboard";
import TodoList from "./dashboard/TodoList";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/todolist"
            element={
              <ProtectedRoute>
                <TodoList />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
