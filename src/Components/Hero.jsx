import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';
import MagneticButton from './Common/MagneticButton';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = 'Building Digital Experiences';
    const [showCursor, setShowCursor] = useState(true);

    // Typewriter effect with cleanup
    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
                setShowCursor(false); // Hide cursor after typing is done
            }
        }, 80);

        return () => clearInterval(timer);
    }, []);

    // Simplified floating icons - reduced from 3 to 1 for better performance
    const floatingIcon = useMemo(() => ({
        Icon: Sparkles,
        delay: 0,
        duration: 4,
        x: -15,
        y: -25
    }), []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center relative z-10 px-4 py-20">
            {/* Single optimized floating icon */}
            <motion.div
                className="absolute pointer-events-none opacity-30"
                style={{
                    left: '15%',
                    top: '25%',
                }}
                animate={{
                    y: [0, floatingIcon.y, 0],
                    x: [0, floatingIcon.x, 0],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: floatingIcon.duration,
                    delay: floatingIcon.delay,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <floatingIcon.Icon size={32} className="text-accent" />
            </motion.div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="max-w-5xl mx-auto relative z-10"
            >
                {/* Badge - Fixed spacing */}
                <motion.span
                    variants={scaleIn}
                    className="inline-block px-6 py-3 rounded-full glass text-accent text-sm md:text-base font-medium mb-12 border border-accent/30 shadow-lg shadow-accent/20"
                >
                    <span className="mr-2">✨</span>
                    Full Stack Developer & Creative Technologist
                </motion.span>

                {/* Main Heading with optimized Typewriter Effect */}
                <motion.div variants={fadeInUp} className="mb-6">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="block mb-6"
                        >
                            {text}
                            {showCursor && <span className="text-accent">|</span>}
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 2, duration: 0.6, type: "spring", stiffness: 150 }}
                            className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                        >
                            That Inspire
                        </motion.span>
                    </h1>
                </motion.div>

                {/* Description */}
                <motion.p
                    variants={fadeInUp}
                    className="text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                    I craft{' '}
                    <span className="text-accent font-semibold">high-performance websites</span>,{' '}
                    <span className="text-purple-400 font-semibold">immersive games</span>, and{' '}
                    <span className="text-pink-400 font-semibold">cross-platform mobile apps</span>.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
                >
                    <MagneticButton
                        className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-accent/50 transition-all"
                    >
                        <a href="#projects" className="flex items-center gap-3">
                            View My Work
                            <ArrowRight size={20} />
                        </a>
                    </MagneticButton>

                    <MagneticButton
                        className="px-10 py-5 glass text-white font-bold rounded-full hover:bg-white/10 transition-all border-2 border-white/20 backdrop-blur-xl"
                    >
                        <a href="#contact">Let's Connect</a>
                    </MagneticButton>
                </motion.div>

                {/* Social Links - Simplified animations */}
                <motion.div
                    variants={fadeInUp}
                    className="flex justify-center gap-6 mb-16"
                >
                    {[
                        { Icon: Github, href: '#', label: 'GitHub' },
                        { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                        { Icon: Twitter, href: '#', label: 'Twitter' }
                    ].map(({ Icon, href, label }, index) => (
                        <motion.a
                            key={index}
                            href={href}
                            aria-label={label}
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-4 glass rounded-xl text-slate-400 hover:text-white transition-colors border border-white/10 hover:border-accent/50"
                        >
                            <Icon size={24} />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Stats - Optimized */}
                <motion.div
                    variants={fadeInUp}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
                >
                    {[
                        { number: '50+', label: 'Projects Completed' },
                        { number: '3+', label: 'Years Experience' },
                        { number: '100%', label: 'Client Satisfaction' }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.5 + index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass p-6 rounded-2xl border border-white/10 hover:border-accent/30 transition-all"
                        >
                            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                                {stat.number}
                            </div>
                            <div className="text-sm text-slate-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Simplified Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center p-2"
                >
                    <motion.div
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-accent rounded-full"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;


