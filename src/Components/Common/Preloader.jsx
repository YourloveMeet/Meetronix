import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [phase, setPhase] = useState('loading'); // 'loading', 'burst', 'revealing'

    useEffect(() => {
        if (window.lenis) window.lenis.stop();

        let start = null;
        const duration = 2800; 

        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            const progressRatio = Math.min(elapsed / duration, 1);

            const ease = progressRatio < 0.5
                ? 4 * progressRatio * progressRatio * progressRatio
                : 1 - Math.pow(-2 * progressRatio + 2, 3) / 2;

            setProgress(Math.floor(ease * 100));

            if (progressRatio < 1) {
                requestAnimationFrame(animate);
            } else {
                setPhase('burst');
                setTimeout(() => {
                    setPhase('revealing');
                    setTimeout(() => {
                        if (window.lenis) window.lenis.start();
                        onComplete();
                    }, 1400); // Time for the doors to open
                }, 2600); // Increased time for the brand text to sit and shine! (+1 second)
            }
        };

        requestAnimationFrame(animate);

        return () => {
            if (window.lenis) window.lenis.start();
        };
    }, [onComplete]);

    const brandName = "TREVONKA".split("");

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none pointer-events-auto overflow-hidden bg-transparent">
            
            {/* Split Screen Background Doors (Top & Bottom) */}
            <motion.div 
                animate={{ y: phase === 'revealing' ? '-100%' : '0%' }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                className="absolute top-0 left-0 right-0 h-1/2 bg-[#050505] -z-20"
            />
            <motion.div 
                animate={{ y: phase === 'revealing' ? '100%' : '0%' }}
                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#050505] -z-20"
            />

            <div className="relative flex items-center justify-center w-full h-full z-10">
                
                {/* Phase 1: The Eclipse / Ring Loader */}
                <AnimatePresence>
                    {phase === 'loading' && (
                        <motion.div 
                            key="loader-ring"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="absolute flex items-center justify-center"
                        >
                            {/* Glowing SVG Ring */}
                            <svg className="absolute w-[220px] h-[220px] md:w-[320px] md:h-[320px] -rotate-90" viewBox="0 0 100 100">
                                {/* Faint Track */}
                                <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                                {/* Progress Indicator */}
                                <motion.circle 
                                    cx="50" cy="50" r="48" fill="none" stroke="url(#glowGradient)" strokeWidth="0.8"
                                    strokeDasharray="301.59"
                                    strokeDashoffset={301.59 - (progress / 100) * 301.59}
                                    strokeLinecap="round"
                                    style={{ dropShadow: '0px 0px 8px rgba(255,255,255,0.5)' }}
                                />
                                <defs>
                                    <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.2" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            
                            {/* Inner Counter */}
                            <div className="text-white text-[28px] md:text-[42px] font-light tracking-[0.1em] font-['Outfit']">
                                {progress.toString().padStart(3, '0')}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Phase 2 & 3: The Cinematic Brand Reveal & Exit */}
                <AnimatePresence>
                    {(phase === 'burst' || phase === 'revealing') && (
                        <motion.div 
                            key="brand-reveal"
                            initial={{ opacity: 0 }}
                            animate={{ 
                                opacity: phase === 'revealing' ? 0 : 1, 
                                scale: phase === 'revealing' ? 1.1 : 1,
                                filter: phase === 'revealing' ? "blur(12px)" : "blur(0px)",
                            }}
                            transition={{ duration: phase === 'revealing' ? 1 : 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute flex flex-col items-center justify-center gap-6 md:gap-8"
                        >
                            {/* Staggered Letter Reveal with Shiny Sweep */}
                            <motion.div 
                                animate={{ 
                                    letterSpacing: phase === 'revealing' ? "0.6em" : "0.15em",
                                    backgroundPosition: ["200% center", "-200% center"]
                                }}
                                transition={{ 
                                    letterSpacing: { duration: phase === 'revealing' ? 1.2 : 1, ease: [0.16, 1, 0.3, 1] },
                                    backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" }
                                }}
                                className="flex items-center ml-[0.15em] bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: "linear-gradient(110deg, rgba(255,255,255,0.5) 30%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.5) 70%)",
                                    backgroundSize: "200% auto"
                                }}
                            >
                                {brandName.map((letter, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
                                        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                        transition={{ duration: 0.8, delay: i * 0.08, ease: [0.76, 0, 0.24, 1] }}
                                        className="text-[8vw] md:text-[6vw] font-['Outfit'] font-light uppercase leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </motion.div>
                            
                            {/* Subtitle */}
                            <motion.div 
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                                className="text-white/40 text-[10px] md:text-[12px] font-medium tracking-[0.4em] md:tracking-[0.6em] uppercase"
                            >
                                Creative Engineering
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
                
            </div>
        </div>
    );
};

export default Preloader;
