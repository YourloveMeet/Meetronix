import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import ClientMarquee from '../Components/ClientMarquee';
import PortfolioStack from '../Components/PortfolioStack';
import PremiumServices from '../Components/PremiumServices';
import Pricing from '../Components/Pricing';
import Testimonial from '../Components/Testimonial';
import Archive from '../Components/Archive';
import CTA from '../Components/CTA';
import Stats from '../Components/Stats';
import Articles from '../Components/Articles';
import FAQ from '../Components/FAQ';
import Footer from '../Components/Footer';
// import ClientSection from '../Components/ClientSection';
// import Portfolio from '../Components/Portfolio';
// import Services from '../Components/Services';

const Home = () => {
    return (
        <div className="bg-[#0d0d0d] min-h-screen text-white relative">
            <Hero />
            <About />
            <ClientMarquee />
            <PortfolioStack />
            <PremiumServices />
            <Pricing />
            <Testimonial />
            <Archive />
            <CTA />
            <Stats />
            <Articles />
            <FAQ />
            <Footer />
            {/* 
            <ClientSection />
            <Portfolio />
            ... 
            */}
        </div>
    );
};

export default Home;
