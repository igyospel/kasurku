import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId, e) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location.pathname === '/') {
      // Just scroll if already on home
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home with hash
      navigate(`/#${sectionId}`);
    }
  };

  const handlePageNav = (path) => {
    setMobileMenuOpen(false);
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <nav className={`navbar ${scrolled || location.pathname !== '/' ? 'scrolled' : ''}`}>
      <div className="container nav-container">

        {/* Logo Section */}
        <div className="logo">
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="logo-link">
            <img src={logo} alt="Kasurku Mini Hotel" className="logo-image" />
          </Link>
        </div>

        {/* Navigation Links (Pill Shaped) */}
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#home" onClick={(e) => handleNavClick('home', e)}>Beranda</a>
          </li>
          <li>
            <a href="#features" onClick={(e) => handleNavClick('features', e)}>Fasilitas</a>
          </li>
          <li>
            <a href="#rooms" onClick={(e) => handleNavClick('rooms', e)}>Pilihan Kamar</a>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); handlePageNav('/conference-room'); }}>Meeting Room</a>
          </li>
          {/* CTA Button */}
          <li>
            <button onClick={() => handlePageNav('/contact-us')} className="nav-cta-btn">
              Hubungi Kami
            </button>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span className="bar" style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></span>
          <span className="bar" style={{ opacity: mobileMenuOpen ? 0 : 1 }}></span>
          <span className="bar" style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
