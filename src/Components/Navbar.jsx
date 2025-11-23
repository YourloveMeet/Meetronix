import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, Settings, BookOpen } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'About', path: '/about', icon: User },
        { name: 'Portfolio', path: '/portfolio', icon: Briefcase },
        { name: 'Services', path: '/services', icon: Settings },
        { name: 'Blog', path: '/blog', icon: BookOpen },
    ];

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-3 glass shadow-2xl shadow-black/30 backdrop-blur-2xl' : 'py-6 bg-transparent'
            }`}>
            <div className="container-custom flex justify-between items-center">
                {/* Logo with Animation */}
                <Link to="/" className="group">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2"
                    >
                        <motion.div
                            animate={{
                                rotate: scrolled ? 0 : 360,
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-accent/30"
                        >
                            M
                        </motion.div>
                        <span className="text-2xl font-bold font-heading bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Meetronix
                        </span>
                    </motion.div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-2">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        const active = isActive(link.path);

                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                            >
                                <motion.div
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-6 py-3 rounded-full font-medium transition-all relative group flex items-center gap-2 ${active
                                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-accent/30'
                                            : 'text-slate-300 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    <Icon size={18} />
                                    {link.name}
                                    {!active && (
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                                    )}
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="lg:hidden glass p-3 rounded-xl border border-white/10"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-80 glass border-l border-white/10 lg:hidden backdrop-blur-2xl shadow-2xl"
                        >
                            <div className="flex flex-col p-8 h-full">
                                {/* Close Button */}
                                <div className="flex justify-between items-center mb-12">
                                    <span className="text-xl font-bold gradient-text">Menu</span>
                                    <motion.button
                                        whileHover={{ rotate: 90 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setIsOpen(false)}
                                        className="p-2 glass rounded-lg"
                                    >
                                        <X size={24} />
                                    </motion.button>
                                </div>

                                {/* Menu Links */}
                                <div className="flex flex-col space-y-2 flex-1">
                                    {navLinks.map((link, index) => {
                                        const Icon = link.icon;
                                        const active = isActive(link.path);

                                        return (
                                            <motion.div
                                                key={link.name}
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                            >
                                                <Link
                                                    to={link.path}
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    <motion.div
                                                        whileHover={{ x: 8 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        className={`flex items-center gap-4 p-4 rounded-xl font-medium transition-all ${active
                                                                ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                                                                : 'text-slate-300 hover:bg-white/5'
                                                            }`}
                                                    >
                                                        <Icon size={22} />
                                                        <span className="text-lg">{link.name}</span>
                                                    </motion.div>
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* Footer */}
                                <div className="pt-8 border-t border-white/10">
                                    <p className="text-sm text-slate-400 text-center">
                                        © 2024 Meetronix
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

