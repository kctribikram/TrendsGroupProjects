import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to create this file in the same folder as Navbar.js

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MyPortfolio</Link>
      </div>
      <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={toggleMobileMenu}>Home</Link>
        <Link to="/about" onClick={toggleMobileMenu}>About</Link>
        <Link to="/portfolio" onClick={toggleMobileMenu}>Portfolio</Link>
        <Link to="/contact" onClick={toggleMobileMenu}>Contact</Link>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? '✖' : '☰'}
      </div>
    </nav>
  );
};

export default Navbar;
