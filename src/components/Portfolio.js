import React from 'react';
import './Portfolio.css';
import Project1Image from '../Images/project1.png'; 
import Project2Image from '../Images/project2.png';
import Project3Image from '../Images/project3.png';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {/* Featured Project Section */}
      <section className="featured-project">
        <h1>Featured Project</h1>
        <div className="featured-content">
          <img src={Project1Image} alt="Featured Project" />
          <div className="featured-details">
            <h2>We Build Design</h2>
            <p>
            We create better spaces for you to live + play. For over a decade, we've provided Fraser Valley homeowners like you with high-end, custom renovations and additions.
            </p>
            <a href="#project-link" className="cta-button">View Project</a>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="portfolio-grid">
        <h2>My Projects</h2>
        <div className="projects">
          <div className="project-card">
            <img src={Project2Image} alt="Project 2" />
            <div className="project-info">
              <h3>Burkett & Co</h3>
              <p>Burkett & Co. Chartered Professional Accountants is an accounting firm based in Victoria, British Columbia providing accounting, tax, and advisory services to business owners and their families.</p>
              <a href="#project-link" className="project-link">View Project</a>
            </div>
          </div>
          <div className="project-card">
            <img src={Project3Image} alt="Project 3" />
            <div className="project-info">
              <h3>GLC Solutions</h3>
              <p>Our seasoned team of technology experts works with you to provide technology solutions for all your business needs – both big and small. With proactive technology planning, sustainable enterprise-level solutions, and monthly system health checks, we deliver solutions that directly impact and improve your business.</p>
              <a href="#project-link" className="project-link">View Project</a>
            </div>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
