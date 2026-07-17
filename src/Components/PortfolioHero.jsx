import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import BlurText from './BlurText';
import heroBg from '../assets/Images/portfolio-bg.avif';

const PortfolioHero = () => {
    return (
        <section className="relative z-10 w-full h-screen bg-[#0d0d0d] overflow-hidden sticky top-0">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={heroBg} 
                    alt="Portfolio Background" 
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Gradient Overlay for bottom text readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>

            {/* Gradient Overlay for top navbar readability (fixes mix-blend-difference muddy colors on bright backgrounds) */}
            <div className="absolute top-0 left-0 right-0 h-48 z-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none"></div>

            {/* Bottom Content */}
            <div className="absolute bottom-10 left-6 right-6 md:left-[5%] md:right-[5%] flex flex-col md:flex-row justify-between items-end md:items-end pointer-events-auto z-10">
                
                {/* Left: Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="text-white text-7xl md:text-[110px] font-bold leading-[0.9] tracking-tighter">
                        <span className="flex items-start">
                            <BlurText text="Latest" delay={30} animateBy="words" direction="bottom" />
                            <sup className="text-xl md:text-3xl font-medium tracking-normal -top-[0.6em] md:-top-[0.8em] relative text-white/80 ml-2">(07)</sup>
                        </span>
                        <BlurText text="Portfolio" delay={30} animateBy="words" direction="bottom" />
                    </div>
                </motion.div>

                {/* Center: Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bottom-2"
                >
                    <p className="text-white/80 text-[13px] md:text-[14px] leading-relaxed max-w-[240px]">
                        A curated collection of structured visuals and modern digital systems
                    </p>
                </motion.div>

                {/* Right: Copyright & Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex items-center gap-6 mt-8 md:mt-0"
                >
                    <span className="text-white font-semibold text-sm">© 2025</span>
                    <a href="#" className="bg-white text-black text-[12px] font-bold px-4 py-2.5 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 0L24 12H12V24L0 12H12V0Z" fill="currentColor"/>
                        </svg>
                        Made in Framer
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default PortfolioHero;
