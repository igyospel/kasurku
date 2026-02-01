import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-bg-wrapper">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hero-video"
                    poster="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974"
                >
                    {/* Fallback image is handled by CSS if video fails or isn't present */}
                </video>
                <div className="hero-overlay"></div>
            </div>

            <div className="container hero-container-modern">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="hero-content-modern"
                >
                    <div className="glass-badge">
                        <div className="pulsing-dot"></div>
                        <span>Buka 24 Jam • Respon Cepat</span>
                    </div>

                    <h1 className="modern-hero-title">
                        Definisi Baru <br />
                        <span className="text-highlight">Mini Hotel</span>
                    </h1>

                    <p className="modern-hero-desc">
                        Nikmati kenyamanan autentik dengan sentuhan modern.
                        Smart TV, WiFi Ngebut, dan Kasur Empuk mulai dari <span className="price-tag">Rp 160rb</span>.
                    </p>

                    <div className="btn-group">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://wa.me/6281234567890"
                            className="btn-modern primary"
                        >
                            Pesan Sekarang <ArrowRight size={20} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#rooms"
                            className="btn-modern secondary-glass"
                        >
                            Lihat Kamar
                        </motion.a>
                    </div>

                    <div className="stats-row">
                        <div className="stat">
                            <strong>4.9/5</strong>
                            <span>Rating Google</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <strong>50+</strong>
                            <span>Total Kamar</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat">
                            <strong>15mnt</strong>
                            <span>Ke Stasiun</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
