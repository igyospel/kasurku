import React from 'react';
import './Conference.css';
import rooftopImg from '../assets/rooftop_terrace.jpg';
import confTheatreImg from '../assets/conference_theatre.jpg';
import confUShapeImg from '../assets/conference_u_shape.jpg';

const Conference = () => {
    return (
        <div className="conference-page">
            {/* Hero Section */}
            <div className="conference-hero">
                <div className="hero-overlay"></div>
                <div className="container conference-hero-content">
                    <h1>Ruang Meeting & Konferensi</h1>
                    <p>Solusi profesional untuk pertemuan bisnis, seminar, dan acara privat Anda di lokasi strategis Bekasi.</p>
                    <a href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20tanya%20ketersediaan%20Conference%20Room" target="_blank" rel="noreferrer" className="btn-book-wa">
                        Cek Ketersediaan
                    </a>
                </div>
            </div>

            {/* Promo Banner Section */}
            <div className="container promo-section">
                <div className="promo-banner">
                    <div className="promo-popular-ribbon">POPULAR</div>
                    <div className="promo-header">
                        <h4>CONFERENCE ROOM</h4>
                        <h2>JANUARY DEALS!</h2>
                    </div>

                    <div className="promo-body">
                        <div className="promo-price">
                            <span className="price-strike">750</span>
                            <span className="price-main">250K</span>
                            <span className="price-unit">/Hour</span>
                        </div>

                        <ul className="promo-features">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Standard Room System & Cable Mic
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Board + Marker + Standard Screen
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="check-icon"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                Free Internet access (Wi-Fi)
                            </li>
                        </ul>

                        <a href="https://wa.me/6281234567890?text=Halo,%20saya%20mau%20booking%20promo%20January%20Deals%20250K" target="_blank" rel="noreferrer" className="btn-promo">
                            Cek Ketersediaan
                        </a>

                        <p className="promo-note">(MINIMAL RENT 4 HOURS)</p>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="container conference-features">
                <div className="section-header">
                    <h2>Fasilitas Lengkap</h2>
                    <p>Kami menyediakan perlengkapan standar industri untuk memastikan kelancaran acara Anda.</p>
                </div>

                <div className="conf-feature-grid">
                    <div className="conf-card">
                        <div className="icon-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></svg>
                        </div>
                        <h3>Audio System Profesional</h3>
                        <p>Standard room system dengan mic kabel berkualitas untuk suara jernih.</p>
                    </div>

                    <div className="conf-card">
                        <div className="icon-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="14" x="3" y="3" rx="2" /><path d="M7 21h10" /><path d="M15 21v-4" /><path d="M9 21v-4" /></svg>
                        </div>
                        <h3>Presentasi Visual</h3>
                        <p>Whiteboard, spidol, dan layar standar (Standard Screen) siap pakai.</p>
                    </div>

                    <div className="conf-card">
                        <div className="icon-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1="12" x2="12.01" y1="20" y2="20" /></svg>
                        </div>
                        <h3>Koneksi Kecepatan Tinggi</h3>
                        <p>Akses internet Wi-Fi gratis dan stabil untuk seluruh peserta meeting.</p>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section - New "Cooler" Section */}
            <div className="container why-choose-us-section">
                <div className="section-header text-center">
                    <h2>Mengapa Memilih Kami?</h2>
                    <p>Tempat yang tepat untuk ide-ide besar Anda.</p>
                </div>
                <div className="why-grid">
                    <div className="why-item">
                        <div className="why-number">01</div>
                        <h3>Lokasi Strategis</h3>
                        <p>Mudah diakses dari pusat kota Bekasi, bebas macet, dan parkir luas.</p>
                    </div>
                    <div className="why-item">
                        <div className="why-number">02</div>
                        <h3>Fasilitas Premium</h3>
                        <p>AC dingin, kursi ergonomis, dan pencahayaan yang mendukung produktivitas.</p>
                    </div>
                    <div className="why-item">
                        <div className="why-number">03</div>
                        <h3>Harga Kompetitif</h3>
                        <p>Paket meeting terjangkau dengan kualitas pelayanan hotel berbintang.</p>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="conf-testimonials">
                <div className="container">
                    <div className="testimonial-card">
                        <div className="quote-icon">❝</div>
                        <p className="testimonial-text">"Sangat puas mengadakan meeting di sini. Ruangannya bersih, pelayanannya ramah, dan fasilitasnya lengkap. Klien saya sangat terkesan!"</p>
                        <div className="testimonial-author">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" alt="User" />
                            <div>
                                <h4>Budi Santoso</h4>
                                <span>CEO, StartUp Bekasi</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery / Visual Section */}
            <div className="container conf-visuals">
                <div className="visual-block">
                    <div className="visual-card main">
                        <img src={rooftopImg} alt="Rooftop Terrace Area" />
                        <div className="visual-caption">Rooftop Terrace Area</div>
                    </div>
                </div>
                <div className="visual-row">
                    <div className="visual-card">
                        <img src={confTheatreImg} alt="Conference Theatre Layout" />
                        <div className="visual-caption">Theater Layout</div>
                    </div>
                    <div className="visual-card">
                        <img src={confUShapeImg} alt="Conference U-Shape Layout" />
                        <div className="visual-caption">U-Shape Layout</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Conference;
