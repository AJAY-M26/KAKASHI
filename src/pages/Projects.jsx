// src/pages/Projects.jsx
import React from 'react';

const projectLines = [
  "🗂 Portfolio Website",
  "Role: Full-Stack Developer",
  "I developed a personal portfolio website to showcase my projects, technical skills, and professional background.",
  "The site is built with a clean, responsive design that works smoothly across desktops and mobile devices.",
  "Tech Stack: HTML, CSS, JavaScript",
  "Key Highlights:",
  "• Smooth scroll animations and interactive UI components",
  "• Custom sections: About Me, Projects, Skills, and Contact",
  "• Responsive design using modern CSS techniques",
  "• Deployed and maintained via GitHub Pages"
];

const Projects = () => (
  <div className="project-container">
    <h2 className="project-title">My Projects</h2>

    <div className="project-card">
      {projectLines.map((line, index) => (
        <p
          key={index}
          className="project-line slide-in-line"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {line}
        </p>
      ))}
    </div>
  </div>
);

export default Projects;
