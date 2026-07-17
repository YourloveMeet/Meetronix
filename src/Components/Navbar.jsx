import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import meetImg from '../assets/Images/meet-patel.jpg';
import krishImg from '../assets/Images/krish-patel.jpg';

const navLinks = [
    { label: 'Home', num: '01', path: '/' },
    { label: 'Portfolio', num: '02', path: '/portfolio' },
    { label: 'About', num: '03', path: '/about' },
    { label: 'Contact', num: '04', path: '/contact' }
];

const Navbar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);

    React.useEffect(() => {
        const checkSize = () => setIsDesktop(window.innerWidth >= 768);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        checkSize();
        handleScroll();

        window.addEventListener('resize', checkSize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', checkSize);
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            {/* Blending Layer: Text and Icons that invert on bright backgrounds */}
            <nav id="global-navbar" className="fixed top-6 left-6 right-6 z-40 flex justify-between items-start pointer-events-none mix-blend-difference text-white transition-opacity duration-300">
                <div className="w-full flex justify-between items-start pointer-events-auto relative">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 pt-2 z-[60]">
                        <img src="/favicon.png" alt="Trevonka Logo" className="object-contain flex-shrink-0" style={{ width: '24px', height: '24px', minWidth: '24px' }} />
                        <span className="text-lg md:text-2xl font-black tracking-widest uppercase font-sans">
                            TREVONKA
                        </span>
                    </Link>

                    {/* Desktop Nav Links (Animate into the center when scrolled) */}
                    <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-20 pt-2 z-50">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.label}
                                initial={false}
                                animate={{
                                    x: isScrolled ? (1.5 - index) * 120 : 0,
                                    y: isScrolled ? 10 : 0,
                                    opacity: isScrolled ? 0 : 1,
                                    scale: isScrolled ? 0.5 : 1,
                                    filter: isScrolled ? "blur(10px)" : "blur(0px)"
                                }}
                                transition={{
                                    duration: 0.8,
                                    ease: [0.16, 1, 0.3, 1], // snappy Apple-like ease
                                }}
                                className={isScrolled ? 'pointer-events-none' : 'pointer-events-auto'}
                            >
                                <Link
                                    to={link.path}
                                    className={`text-[15px] font-medium transition-colors duration-300 relative group flex items-start text-white`}
                                >
                                    <span className="tracking-tight">{link.label}</span>
                                    <span className="text-[10px] opacity-70 ml-1 leading-none pt-0.5">{link.num}</span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Placeholder for Meet the CEO Box to maintain layout on desktop */}
                    <div className={`${isScrolled ? 'hidden' : 'hidden md:block'} w-64`}></div>

                    {/* Mobile Menu Button (Visible on mobile always, visible and centered on desktop when scrolled) */}
                    {!isMobileMenuOpen && (
                        <motion.button 
                            initial={false}
                            animate={{
                                opacity: (isDesktop && !isScrolled) ? 0 : 1,
                                scale: isDesktop ? (isScrolled ? 1.8 : 0.5) : 1,
                                filter: (isDesktop && !isScrolled) ? "blur(10px)" : "blur(0px)",
                            }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className={`${isDesktop && !isScrolled ? 'pointer-events-none' : 'pointer-events-auto'} flex pt-2 pr-2 md:pr-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-2 z-[60] focus:outline-none origin-center`}
                            onClick={() => setIsMobileMenuOpen(true)}
                            aria-label="Open Menu"
                            whileHover={{ scale: isDesktop ? 2.1 : 1.1 }}
                        >
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M4 9h16M4 15h16" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </motion.button>
                    )}
                </div>
            </nav>

            {/* Non-Blending Layer: Solid elements that shouldn't invert */}
            {/* Meet the Leadership Box (Desktop) */}
            <Link to="/leadership" id="global-navbar-solid" className={`fixed top-6 right-6 z-50 ${isScrolled ? 'opacity-0 pointer-events-none translate-y-[-10px]' : 'opacity-100 translate-y-0'} hidden md:flex bg-[#f4f4f4] text-black rounded-lg p-2 items-center gap-2 w-64 shadow-xl border border-white/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer pointer-events-auto transition-all duration-500`}>
                <div className="flex -space-x-3 pl-1">
                    <img
                        src={meetImg}
                        alt="Meet Patel"
                        className="w-11 h-11 rounded-full border-[2.5px] border-[#f4f4f4] object-cover grayscale relative z-10"
                    />
                    <img
                        src={krishImg}
                        alt="Krish Patel"
                        className="w-11 h-11 rounded-full border-[2.5px] border-[#f4f4f4] object-cover grayscale relative z-0"
                    />
                </div>
                <div className="flex flex-col flex-grow ml-1">
                    <div className="flex justify-between items-center w-full">
                        <span className="text-[13px] font-bold tracking-tight">Our Leadership</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-black transform -rotate-45">
                            <path d="M7 17l9.2-9.2M17 17V7H7" />
                        </svg>
                    </div>
                    <div className="flex flex-col mt-0.5">
                        <span className="text-[11px] font-medium text-gray-800">Meet & Krish</span>
                        <span className="text-[9px] font-semibold text-gray-500 tracking-wider">CO-FOUNDERS</span>
                    </div>
                </div>
            </Link>

            {/* Full Screen Immersive Mobile Menu */}
            <div className="relative z-[100] pointer-events-auto">
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ y: "-100%" }}
                            animate={{ 
                                y: 0, 
                                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
                            }}
                            exit={{ 
                                y: "-100%", 
                                transition: { delay: 0.4, duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
                            }}
                            className="fixed inset-0 bg-black flex flex-col items-center justify-center overflow-hidden"
                        >
                            {/* Close Button (Top Center) */}
                            <motion.button
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0, transition: { duration: 0.5, delay: 0.2 } }}
                                exit={{ opacity: 0, rotate: 90, transition: { duration: 0.3, delay: 0.4 } }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="absolute top-8 text-white focus:outline-none z-20"
                            >
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                                    <path d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </motion.button>

                            {/* Animated Vertical Line */}
                            <motion.div
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 } }}
                                exit={{ scaleY: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 } }}
                                className="absolute left-1/2 top-24 bottom-24 w-[1px] bg-white origin-top -translate-x-1/2 z-0"
                            />

                            {/* Menu Links */}
                            <div className="flex flex-col items-center justify-center z-10 w-full relative">
                                {navLinks.map((link, i) => (
                                    <div key={link.label} className="bg-black px-6 py-2 sm:py-4 flex items-center justify-center w-full">
                                        {/* The exact mask box with no padding */}
                                        <div className="overflow-hidden flex items-center justify-center">
                                            <motion.div
                                                initial={{ y: "100%" }}
                                                animate={{ 
                                                    y: 0, 
                                                    transition: { duration: 0.8, delay: 0.5 + (i * 0.1), ease: [0.22, 1, 0.36, 1] } 
                                                }}
                                                exit={{ 
                                                    y: "100%", 
                                                    transition: { duration: 0.6, delay: (navLinks.length - 1 - i) * 0.1, ease: [0.22, 1, 0.36, 1] } 
                                                }}
                                                className="w-full text-center"
                                            >
                                                <Link
                                                    to={link.path}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className={`inline-block text-[65px] sm:text-[80px] md:text-[100px] font-serif tracking-tight transition-all duration-500 leading-[1.05]
                                                        ${isActive(link.path) ? 'italic text-white/30' : 'text-white hover:italic hover:text-white/30'}`}
                                                >
                                                    {link.label}
                                                </Link>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Logo */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } }}
                                exit={{ opacity: 0, y: 20, transition: { duration: 0.3, delay: 0 } }}
                                className="absolute bottom-10 z-10 bg-black px-6 py-2 flex items-center gap-3"
                            >
                                <img src="/favicon.png" alt="Trevonka Logo" className="object-contain flex-shrink-0" style={{ width: '32px', height: '32px', minWidth: '32px' }} />
                                <span className="text-2xl sm:text-3xl font-black tracking-widest uppercase text-white font-sans">
                                    TREVONKA
                                </span>
                            </motion.div>
                            
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default Navbar;
