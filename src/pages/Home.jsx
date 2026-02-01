import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Rooms from '../components/Rooms';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <>
            <div id="home"><Hero /></div>
            <div id="features"><Features /></div>
            <div id="rooms"><Rooms /></div>
        </>
    );
};

export default Home;
