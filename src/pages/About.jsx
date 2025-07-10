// src/pages/About.jsx
import React from 'react';
import logo from '../images/Ajay.jpg';

const About = () => (
  <div className="about-container">
    <b><h2 className="title slide-in">About Me</h2></b>
    <div className="content">
      <img src={logo} alt="Ajay" className="about-image slide-in" />
      <p className="about-text slide-in" style={{fontSize:'25px'}}>
        <b>
          I'm a third-year Computer Technology student with a passion for building clean, functional, and user-friendly
          applications. I specialize in front-end development and enjoy turning ideas into interactive digital
          experiences. My current focus is on mobile and web app design, where I combine technical skills with an eye
          for aesthetics.<br /><br />

          In addition to my academic projects, I've been working on real-world applications to strengthen my skills
          and build a solid foundation in modern development tools and frameworks. I'm always excited to learn new
          technologies and take on creative challenges that push my abilities further.<br /><br />

          Whether it's a sleek portfolio site or a fully functional e-commerce platform, I aim to create digital products
          that not only work well but look great too.<br />
        </b>
      </p>
    </div>
  </div>
);

export default About;
