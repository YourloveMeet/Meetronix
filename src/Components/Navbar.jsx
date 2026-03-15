import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navLinks, navCTA } from '../data/navigationData';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-6 left-0 w-full z-50">
            <div className="container-custom">
                <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`flex items-center justify-between px-8 py-3.5 rounded-full transition-all duration-500 border ${
                        scrolled 
                        ? 'bg-glass-bg/90 backdrop-blur-[24px] border-glass-border shadow-[0_12px_40px_rgba(44,36,32,0.12)]' 
                        : 'bg-warm-white/70 backdrop-blur-md border-border/40'
                    }`}
                >
                    {/* Logo */}
                    <Link to="/" className="flex items-center group">
                        <span className="text-2xl font-display text-text-primary tracking-tight">
                            Meet<span className="text-terracotta group-hover:text-terra-dark transition-colors font-semibold">ronix</span>
                        </span>
                    </Link>

                    {/* Nav Links - Desktop */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                to={link.path}
                                className={`text-[12px] tracking-[0.2em] font-bold transition-colors duration-300 py-1 uppercase relative group ${
                                    isActive(link.path) ? 'text-terracotta' : 'text-text-secondary hover:text-text-primary'
                                }`}
                            >
                                {link.label}
                                <span className={`absolute -bottom-1 left-0 w-0 h-[2px] bg-terracotta transition-all duration-300 ${
                                    isActive(link.path) ? 'w-full' : 'group-hover:w-full'
                                }`} />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link to={navCTA.path}>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-terracotta text-white px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-terra-dark transition-all shadow-lg shadow-terracotta/20"
                            >
                                {navCTA.label}
                            </motion.button>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button 
                        className="md:hidden text-text-primary p-2 hover:bg-cream-dark/50 rounded-full transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? <X size={20} key="close" /> : <Menu size={20} key="menu" />}
                        </AnimatePresence>
                    </button>
                </motion.div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        className="container-custom absolute top-24 left-0 right-0 z-40 md:hidden"
                    >
                        <div className="bg-glass-bg/98 backdrop-blur-[32px] border border-glass-border shadow-2xl rounded-[32px] p-10 overflow-hidden">
                            <div className="flex flex-col gap-6">
                                {navLinks.map((link, idx) => (
                                    <motion.div
                                        key={link.label}
                                        initial={{ x: -10, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-3xl font-display flex items-center justify-between group ${
                                                isActive(link.path) ? 'text-terracotta' : 'text-text-primary hover:text-terracotta'
                                            } transition-colors tracking-tight`}
                                        >
                                            {link.label}
                                            <ArrowRight size={24} className={`opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all ${isActive(link.path) ? 'opacity-100 translate-x-0' : ''}`} />
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ y: 10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.25 }}
                                >
                                    <Link 
                                        to={navCTA.path}
                                        onClick={() => setIsOpen(false)}
                                        className="mt-6 block bg-terracotta text-white text-center py-5 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl shadow-terracotta/20"
                                    >
                                        {navCTA.label}
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
