import { useState } from 'react';
import '../App.css';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <span className="logo-text">Instructo</span>
            <span className="logo-dot">.</span>
          </a>
        </div>

        {/* Menu pour mobile */}
        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation links */}
        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#features" className="navbar-link">Fonctionnalités</a>
          <a href="#testimonials" className="navbar-link">Témoignages</a>
          <a href="#pricing" className="navbar-link">Tarifs</a>
          <a href="#contact" className="navbar-link">Contact</a>
          <a href="/login" className="navbar-link login">Se connecter</a>
          <a href="/signup" className="button navbar-button">S'inscrire</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 