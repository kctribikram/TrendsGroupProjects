import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Introduction Section */}
      <section className="about-intro">
        <h1>About Me</h1>
        <p>
          Hi, I'm Tribikram KC, a passionate web developer with expertise in creating dynamic
          and responsive web applications. With a strong background in Frontend Development,
          I have honed my skills in React, Javascript, Php and Laravel, and I am committed to
          delivering high-quality, user-centered solutions.
        </p>
      </section>

      {/* Skills Section */}
      <section className="about-skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <i className="fas fa-code"></i>
            <h3>Web Development</h3>
            <p>Proficient in JavaScript, React.js, and modern web technologies.</p>
          </div>
          <div className="skill-card">
            <i className="fas fa-paint-brush"></i>
            <h3>UI/UX Design</h3>
            <p>Designing intuitive and aesthetically pleasing user interfaces.</p>
          </div>
          <div className="skill-card">
            <i className="fas fa-mobile-alt"></i>
            <h3>Responsive Design</h3>
            <p>Creating responsive designs that work seamlessly on all devices.</p>
          </div>
          <div className="skill-card">
            <i className="fas fa-git-alt"></i>
            <h3>Version Control</h3>
            <p>Experienced with Git, GitHub, and collaborative coding practices.</p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="about-education">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Bachelor of Science in Computer Science</h3>
          <p>University of XYZ, 2015 - 2019</p>
          <p>Graduated with Honors, focusing on web development and software engineering.</p>
        </div>
        <div className="education-item">
          <h3>Certified UX Designer</h3>
          <p>Design Institute, 2020</p>
          <p>Completed a comprehensive UX design course with practical projects.</p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="about-experience">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Web Developer at XYZ Company</h3>
          <p>Jan 2021 - Present</p>
          <p>
            Developed and maintained various web applications, ensuring they met the needs
            of clients. Specialized in front-end development using React, contributing to
            several successful projects.
          </p>
        </div>
        <div className="experience-item">
          <h3>Freelance Web Developer</h3>
          <p>Jun 2019 - Dec 2020</p>
          <p>
            Worked with clients from various industries to create websites and applications
            tailored to their specific needs, focusing on high-quality, user-friendly solutions.
          </p>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="about-certifications">
        <h2>Certifications</h2>
        <div className="certification-item">
          <h3>React Developer Certification</h3>
          <p>Issued by XYZ Institute, 2022</p>
        </div>
        <div className="certification-item">
          <h3>Advanced JavaScript Certification</h3>
          <p>Issued by ABC Academy, 2021</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="about-testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-card">
          <p>
            "Working with [Your Name] was a pleasure. They delivered exceptional quality and
            truly understood our needs. Highly recommended!"
          </p>
          <p>- Client Name, Company</p>
        </div>
        <div className="testimonial-card">
          <p>
            "[Your Name] is a top-notch developer with a keen eye for detail. Their work
            exceeded our expectations."
          </p>
          <p>- Client Name, Company</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="about-contact">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to reach out via email or connect with me on LinkedIn.</p>
        <p>Email: your.email@example.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a></p>
      </section>
    </div>
  );
};

export default About;
