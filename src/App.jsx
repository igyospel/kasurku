import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import Conference from './pages/Conference';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/conference-room" element={<Conference />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
