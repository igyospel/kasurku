import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="contact-page">
            <div className="contact-hero">
                <h1>Hubungi Kami</h1>
                <p>Kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami.</p>
            </div>

            <div className="container contact-container">
                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info-card">
                        <h2>Informasi Kontak</h2>
                        <div className="info-item">
                            <div className="icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <div>
                                <h3>Alamat</h3>
                                <p>Ruko Sentra Niaga No. 5-6, Jalan Jendral Ahmad Yani, RT.006/RW.011, Kayuringin Jaya, Kec. Bekasi Sel., Kota Jakarta Timur, Jawa Barat 17144</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div>
                                <h3>Email</h3>
                                <p>kasurkubks@gmail.com</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <div className="icon-box">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div>
                                <h3>WhatsApp</h3>
                                <p>+62 812-3456-7890</p>
                                <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="wa-link">Chat Sekarang &rarr;</a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-card">
                        <h2>Kirim Pesan</h2>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>Nama Lengkap</label>
                                <input type="text" placeholder="Nama Anda" />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" placeholder="email@contoh.com" />
                            </div>
                            <div className="form-group">
                                <label>Pesan</label>
                                <textarea rows="4" placeholder="Tulis pesan Anda di sini..."></textarea>
                            </div>
                            <button type="submit" className="btn-submit">Kirim Pesan</button>
                        </form>
                    </div>
                </div>

                {/* Map - Full Width */}
                <div className="contact-map-card">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1953765184284!2d106.9942663749905!3d-6.237961993750383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c253d537fbd%3A0x6b80153835016e39!2sKasurku%20Mini%20Hotel!5e0!3m2!1sen!2sid!4v1706859123456!5m2!1sen!2sid"
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: '400px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                {/* FAQ Section */}
                <div className="faq-section">
                    <div className="section-header text-center">
                        <h2>Pertanyaan Umum</h2>
                        <p>Jawaban cepat untuk pertanyaan Anda.</p>
                    </div>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h4>Apakah ada parkir?</h4>
                            <p>Ya, kami menyediakan area parkir luas untuk motor dan mobil yang dijaga 24 jam.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Berapa jam check-in/out?</h4>
                            <p>Check-in mulai pukul 14:00 WIB dan Check-out maksimal pukul 12:00 WIB.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Apakah ada Wi-Fi?</h4>
                            <p>Tentu, kami menyediakan Wi-Fi berkecepatan tinggi gratis di seluruh area hotel.</p>
                        </div>
                        <div className="faq-item">
                            <h4>Bisa pesan untuk acara?</h4>
                            <p>Bisa! Silakan hubungi kami untuk booking Meeting Room atau acara privat lainnya.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;
