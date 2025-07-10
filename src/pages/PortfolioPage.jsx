// src/pages/PortfolioPage.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Service from '../pages/Service';
import Contact from '../pages/Contact';
import Skill from '../pages/Skill';

const PortfolioPage = () => {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="services" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          <Route path="skill" element={<Skill />} />
        </Routes>
      </div>
    </>
  );
};

export default PortfolioPage;
