// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { to: "/portfolio", label: "About" },
  { to: "/portfolio/skill", label: "Skill" },
  { to: "/portfolio/projects", label: "Projects" },
  { to: "/portfolio/services", label: "Services" },
  { to: "/portfolio/contact", label: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
      <Link className="navbar-brand slide-in-nav" style={{ animationDelay: '0s' }} to="/portfolio">
        AJAY V
      </Link>
      <div className="navbar-nav d-flex flex-row gap-3 ms-auto">
        {navItems.map((item, index) => (
          <Link
            key={item.to}
            className="nav-link slide-in-nav"
            to={item.to}
            style={{ animationDelay: `${(index + 1) * 0.2}s` }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
