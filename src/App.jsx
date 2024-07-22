// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import LoginRegister from './pages/loginregister/LoginRegister';
import Dashboard from './pages/SuperAdmin/Dashboard/Dashboard';



// Fake authentication function
const isAuthenticated = () => {
  // Replace this with actual authentication logic
  return true;
};

// Protected Route Component
const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<LoginRegister />} />
        <Route path="/dashboard/*" element={<ProtectedRoute element={<Dashboard />} />} />
        
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
