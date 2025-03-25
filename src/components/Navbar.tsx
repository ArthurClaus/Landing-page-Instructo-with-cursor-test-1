import { useState, useEffect } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const handleScroll = (id: string) => {
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links data
  const navLinks = [
    { id: "features", label: "Fonctionnalités" },
    { id: "testimonials", label: "Témoignages" },
    { id: "pricing", label: "Tarifs" },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} aria-label="Navigation principale">
      <div className="container navbar-container">
        <div className="navbar-logo">
          <a href="#" onClick={scrollToTop}>
            <img 
              src="/Instructo_logo.svg" 
              alt="Instructo"
              className="logo-image"
            />
          </a>
        </div>

        {/* Menu pour mobile */}
        <div className="navbar-mobile-controls">
          <button 
            className="navbar-toggle" 
            onClick={toggleMenu} 
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>

        {/* Navigation links */}
        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={`#${link.id}`}
              className="navbar-link"
              onClick={(e) => {
                e.preventDefault();
                handleScroll(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
          
          <a 
            href="https://chat.Instructo.be" 
            className="btn btn-primary navbar-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Commencer
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 