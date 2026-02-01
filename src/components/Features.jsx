import React from 'react';
import './Features.css';
import { motion } from 'framer-motion';
import { Wifi, Tv, Coffee, ShieldCheck, MapPin, Zap } from 'lucide-react';

const Features = () => {
    return (
        <section className="section-padding features-section" id="features">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-lg"
                >
                    <h2 className="display-title">Kenapa Pilih Kasurku?</h2>
                    <p className="display-subtitle">Fasilitas kelas atas bikin istirahat makin nyaman dan tenang.</p>
                </motion.div>

                <div className="bento-grid">
                    {/* Large Item - Entertainment */}
                    <motion.div
                        className="bento-item bento-large entertainment"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="bento-content">
                            <Tv size={40} className="bento-icon" />
                            <h3>Netflix & Chill</h3>
                            <p>Smart TV di setiap kamar. Gratis akses Netflix & Disney+ sepuasnya.</p>
                        </div>
                        <div className="bento-bg-glow red"></div>
                    </motion.div>

                    {/* Medium - Speed */}
                    <motion.div
                        className="bento-item speed"
                        whileHover={{ scale: 1.02 }}
                    >
                        <Zap size={32} className="bento-icon" />
                        <h3>WiFi Kencang</h3>
                        <p>Koneksi fiber optic stabil, cocok buat kerja atau streaming.</p>
                    </motion.div>

                    {/* Medium - Location */}
                    <motion.div
                        className="bento-item location"
                        whileHover={{ scale: 1.02 }}
                    >
                        <MapPin size={32} className="bento-icon" />
                        <h3>Lokasi Strategis</h3>
                        <p>Akses mudah ke pusat kuliner dan bisnis Bekasi.</p>
                    </motion.div>

                    {/* Wide - Hygiene */}
                    <motion.div
                        className="bento-item bento-wide hygiene"
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="bento-content-row">
                            <ShieldCheck size={40} className="bento-icon" />
                            <div>
                                <h3>Pasti Bersih</h3>
                                <p>Sprei diganti setiap tamu checkout. Standar kebersihan no. 1.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Features;
