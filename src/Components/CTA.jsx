import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ctaBg from '../assets/Images/cta-bg.png';

const CTA = () => {
    const containerRef = useRef(null);

    // Track the scroll progress for this specific section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax Transforms
    // Background moves slightly slower than the scroll, creating depth
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
    
    // Foreground elements float in the opposite direction (upwards as we scroll down)
    const foregroundY = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);

    return (
        <section ref={containerRef} className="relative z-40 w-full h-[100vh] min-h-[700px] bg-white p-4 md:p-6 overflow-hidden">
            
            <div className="relative w-full h-full rounded-[12px] md:rounded-[16px] overflow-hidden flex items-center justify-center bg-[#0d0d0d]">
                
                {/* 1. Parallax Background Layer */}
                <motion.div 
                    className="absolute inset-0 w-full h-[130%]"
                    style={{ y: backgroundY, top: "-15%" }}
                >
                    <img 
                        src={ctaBg} 
                        alt="Architecture Background" 
                        className="w-full h-full object-cover opacity-60"
                    />
                </motion.div>

                {/* 2. Parallax Foreground Layer (Text Mask, Crosses, Image, Button) */}
                <motion.div 
                    className="relative z-20 flex flex-col items-center justify-center w-full h-full"
                    style={{ y: foregroundY }}
                >
                    
                    {/* The Bounding Box for the Hologram Text and Crosses */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] md:w-[600px] lg:w-[840px] h-[100px] md:h-[160px] lg:h-[200px]">
                        
                        {/* Continuous Marquee Text Clipped inside the Box with Fade Edges */}
                        <div 
                            className="absolute inset-0 overflow-hidden flex items-center pointer-events-none"
                            style={{ 
                                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' 
                            }}
                        >
                            <motion.div 
                                className="flex whitespace-nowrap"
                                animate={{ x: ["0%", "-50%"] }}
                                transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
                            >
                                <div className="flex gap-4 pr-4">
                                    <span className="text-white font-[500] text-[60px] md:text-[100px] lg:text-[140px] xl:text-[160px] tracking-tighter leading-none">
                                        Are Faster Better Are Faster Better
                                    </span>
                                </div>
                                <div className="flex gap-4 pr-4">
                                    <span className="text-white font-[500] text-[60px] md:text-[100px] lg:text-[140px] xl:text-[160px] tracking-tighter leading-none">
                                        Are Faster Better Are Faster Better
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                        {/* The 4 Framing Crosses exactly at the corners of the Text Mask (Bolded) */}
                        <svg className="absolute -top-3 -left-3 w-6 h-6 text-white/70 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20"/></svg>
                        <svg className="absolute -top-3 -right-3 w-6 h-6 text-white/70 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20"/></svg>
                        <svg className="absolute -bottom-3 -left-3 w-6 h-6 text-white/70 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20"/></svg>
                        <svg className="absolute -bottom-3 -right-3 w-6 h-6 text-white/70 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20"/></svg>

                    </div>

                    {/* Center Portrait Image (Overlaps the bounded text) */}
                    <div className="relative z-30 w-[180px] md:w-[260px] aspect-[3/4] rounded-[6px] overflow-hidden shadow-2xl">
                        <img 
                            src="https://framerusercontent.com/images/vSMr1Zfuh0b2i7lq2yOMx58uxs.png?scale-down-to=512" 
                            alt="Center Portrait" 
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Contact Link */}
                    <a href="#" className="relative z-30 w-[180px] md:w-[260px] mt-6 border-b border-white/30 pb-3 flex justify-between items-center text-white cursor-pointer group hover:border-white transition-colors">
                        <span className="font-[500] text-[13px] md:text-[14px] tracking-tight">Contact Now</span>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </a>

                </motion.div>

            </div>
        </section>
    );
};

export default CTA;
