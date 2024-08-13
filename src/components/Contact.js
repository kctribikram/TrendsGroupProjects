import React from 'react';
import './Contact.css'; // Make sure to create this file in the same folder as Contact.js

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Header Section */}
      <section className="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Whether you have a question or just want to say hello, feel free to reach out!</p>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" placeholder="Write your message" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      {/* Social Media Section */}
      <section className="contact-social">
        <h2>Connect with Us</h2>
        <div className="social-icons">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map">
        <h2>Find Us</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.191779249778!2d144.95373531513715!3d-37.81621717975142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f09ef23d%3A0x8a4af31c9e6e3a0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sau!4v1629598570145!5m2!1sen!2sau"
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
