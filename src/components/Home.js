import React from 'react';
import './Home.css'; // Make sure to create this file in the same folder as Home.js
import HeroImage from '../Images/hero-background.avif'; // Add a background image in the 'src/images' folder

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to My World</h1>
          <p>Crafting beautiful web experiences one pixel at a time.</p>
          <a href="#about" className="hero-button">Explore More</a>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="introduction-section">
        <h2>About Me</h2>
        <p>
          I am a passionate web developer who specializes in creating dynamic, responsive, and user-friendly web applications. 
          My goal is to deliver web experiences that are not only functional but also visually stunning.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>What I Do</h2>
        <div className="services-grid">
          <div className="service-card">
            <i className="fas fa-code"></i>
            <h3>Web Development</h3>
            <p>Building responsive and dynamic websites using modern technologies.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-paint-brush"></i>
            <h3>UI/UX Design</h3>
            <p>Designing intuitive and user-friendly interfaces that enhance user experience.</p>
          </div>
          <div className="service-card">
            <i className="fas fa-mobile-alt"></i>
            <h3>Responsive Design</h3>
            <p>Ensuring your website looks great on any device, big or small.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
