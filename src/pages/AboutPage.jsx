import React from 'react';
import AboutHero from '../Components/AboutHero';
import AboutText from '../Components/AboutText';
import AboutProcess from '../Components/AboutProcess';
import Testimonial from '../Components/Testimonial';
import PhotoMarquee from '../Components/PhotoMarquee';
import AboutLeadership from '../Components/AboutLeadership';
import Archive from '../Components/Archive';
import ClientGrid from '../Components/ClientGrid';
import Stats from '../Components/Stats';
import Articles from '../Components/Articles';
import Footer from '../Components/Footer';

const AboutPage = () => {
    return (
        <div className="bg-white min-h-screen">
            <AboutHero />
            <AboutText />
            <AboutProcess />
            <Testimonial />
            <PhotoMarquee />
            <AboutLeadership />
            <Archive />
            <ClientGrid />
            <Stats />
            <Articles />
            <Footer />
        </div>
    );
};

export default AboutPage;
