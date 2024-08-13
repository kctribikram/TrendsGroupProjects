import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>Discover my work, skills, and projects.</p>
          <a href="/portfolio" className="cta-button">View My Work</a>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="introduction">
        <h2>About Me</h2>
        <p>
          I am a passionate web developer with experience in creating
          responsive and user-friendly web applications. My goal is to build
          solutions that are both functional and visually appealing.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>What I Do</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Web Development</h3>
            <p>Building responsive and dynamic websites using modern technologies.</p>
          </div>
          <div className="feature-item">
            <h3>UI/UX Design</h3>
            <p>Designing intuitive and user-friendly interfaces that enhance user experience.</p>
          </div>
          <div className="feature-item">
            <h3>Project Management</h3>
            <p>Overseeing projects from concept to completion, ensuring quality and timeliness.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
