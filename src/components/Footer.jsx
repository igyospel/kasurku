import React from 'react';
import './Footer.css';
import { Phone, MapPin, Instagram, Facebook, Mail } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (sectionId, e) => {
        e.preventDefault();
        if (location.pathname === '/') {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(`/#${sectionId}`);
        }
    };

    return (
        <footer className="footer" id="contact-footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <img src={logo} alt="Kasurku Mini Hotel" className="footer-logo" />
                    <p>Kenyamanan autentik, fasilitas modern. Pilihan mini hotel terbaik di Bekasi Utara.</p>
                </div>

                <div className="footer-links">
                    <h3>Tautan Cepat</h3>
                    <ul>
                        <li><a href="#home" onClick={(e) => handleNavClick('home', e)}>Beranda</a></li>
                        <li><a href="#rooms" onClick={(e) => handleNavClick('rooms', e)}>Pilihan Kamar</a></li>
                        <li><a href="#features" onClick={(e) => handleNavClick('features', e)}>Fasilitas</a></li>
                        <li><Link to="/conference-room">Meeting Room</Link></li>
                        <li><Link to="/contact-us">Hubungi Kami</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Kontak</h3>
                    <p><MapPin size={18} /> Jl. Kaliabang, Bekasi Utara</p>
                    <p><Phone size={18} /> +62 812-3456-7890</p>
                    <p><Mail size={18} /> kasurkubks@gmail.com</p>
                </div>

                <div className="footer-social">
                    <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                    <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Kasurku Mini Hotel. Hak Cipta Dilindungi.</p>
            </div>
        </footer>
    );
};

export default Footer;
