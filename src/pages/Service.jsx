// src/pages/Services.jsx
import React from 'react';

const serviceLines = [
  "💻 Front-End Web Development",
  "I build responsive and user-friendly websites using clean HTML, CSS, and JavaScript.",
  "Whether it's a simple landing page or a complex e-commerce layout, I focus on",
  "performance, accessibility, and design consistency.",
  "",
  "📱 Mobile App Interface Design",
  "I design intuitive mobile app interfaces that provide smooth user experiences.",
  "My focus is on user-centered design, responsive layouts, and seamless navigation across devices.",
  "",
  "🧩 Game UI & Prototyping",
  "I develop and prototype simple 2D games, especially platformers and puzzle games,",
  "with attention to animation, interaction, and visual style. Ideal for",
  "learning experiences or lightweight mobile projects."
];

const Services = () => (
  <div className="service-container">
    <h2 className="service-title">Services</h2>
    <div className="service-content">
      {serviceLines.map((line, index) => (
        <p
          key={index}
          className="service-line slide-in-line"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {line}
        </p>
      ))}
    </div>
  </div>
);

export default Services;
