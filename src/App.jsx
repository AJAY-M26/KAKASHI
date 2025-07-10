// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import PortfolioPage from './pages/PortfolioPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/portfolio/*" element={<PortfolioPage />} />
      </Routes>
    </Router>
  );
};

export default App;
