import React from 'react';
import './Rooms.css';
import { Wifi, Tv, Coffee, CheckCircle, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const rooms = [
    {
        floor: 'Lantai 1',
        type: 'Superior Queen',
        price: '160',
        image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop',
        features: ['Kasur Queen Size', 'Smart TV + Netflix', 'Kamar Mandi Dalam', 'AC Dingin']
    },
    {
        floor: 'Lantai 2',
        type: 'Deluxe Twin',
        price: '180',
        tag: 'Favorit',
        image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop',
        features: ['2 Kasur Single', 'Pemandangan Kota', 'Meja Kerja Luas', 'Snack Gratis']
    },
    {
        floor: 'Lantai 3',
        type: 'VIP Suite',
        price: '250',
        image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop',
        features: ['Kasur King Size', 'Mini Bar', 'Disney+ Premium', 'Balkon Pribadi']
    }
];

const Rooms = () => {
    return (
        <section className="section-padding rooms-modern" id="rooms">
            <div className="container">
                <div className="section-header mb-lg">
                    <h2 className="display-title">Pilih Ketenangan Anda</h2>
                    <p className="display-subtitle">Kamar bersih, nyaman, dan modern. Siap huni kapan saja.</p>
                </div>

                <div className="room-grid-modern">
                    {rooms.map((room, index) => (
                        <motion.div
                            className="room-card-modern"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="card-image-wrapper">
                                <img src={room.image} alt={room.type} loading="lazy" />
                                <div className="badge-floor">{room.floor}</div>
                                {room.tag && <div className="badge-tag">{room.tag}</div>}
                            </div>

                            <div className="card-body">
                                <div className="card-top">
                                    <h3>{room.type}</h3>
                                    <div className="price-lockup">
                                        <span className="currency">IDR</span>
                                        <span className="amount">{room.price}kb</span>
                                        <span className="period">/malam</span>
                                    </div>
                                </div>

                                <div className="divider"></div>

                                <ul className="modern-features">
                                    {room.features.map((feature, i) => (
                                        <li key={i}><CheckCircle size={16} className="feature-icon" /> {feature}</li>
                                    ))}
                                </ul>

                                <button className="btn-book-full">
                                    Pesan Kamar Ini
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Rooms;
