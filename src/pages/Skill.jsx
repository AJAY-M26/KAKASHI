import React from 'react';

const Skills = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React JS", "Bootstrap",
    "Express JS", "Node", "MySQL", "MongoDB", "GitHub",
    "Java", "RDBMS", "C++", "C", "PhotoShop", "Canva"
  ];

  return (
    <div className="skills-container">
      <h1 className="skills-heading">SKILLS</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card slide-in-card"
            style={{ animationDelay: `${index * 0.1}s` }} // stagger animation
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
