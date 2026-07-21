import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import LiquidHover from './LiquidHover';
import BlurText from './BlurText';
import heroBg from '../assets/Images/hero-bg.png';
import heroTxt from '../assets/Images/HeroTxt.webp';

import meetImg from '../assets/Images/meet-patel.jpg';
import krishImg from '../assets/Images/krish-patel.jpg';

const PlusIcon = ({ className }) => (
    <div className={`absolute w-3 h-3 md:w-4 md:h-4 flex items-center justify-center ${className}`}>
        <div className="absolute w-[2px] h-full bg-white/40 mix-blend-overlay"></div>
        <div className="absolute w-full h-[2px] bg-white/40 mix-blend-overlay"></div>
    </div>
);

const Hero = () => {
    return (
        <section className="relative z-10 w-full h-[100dvh] bg-[#0d0d0d] overflow-hidden sticky top-0">

            {/* Liquid Hover Background */}
            <div className="absolute inset-0 z-0">
                <Suspense fallback={<div className="w-full h-full bg-[#111]" />}>
                    <LiquidHover
                        image={heroBg}
                        className="w-full h-full object-cover"
                    />
                </Suspense>
            </div>

            {/* Gradient Overlay to ensure text readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-black/20 md:from-black/60 md:via-transparent to-transparent pointer-events-none"></div>

            <div className="relative z-10 w-full h-full max-w-[1440px] mx-auto pointer-events-none flex flex-col justify-between pt-[28vh] md:pt-[140px] lg:pt-[160px] pb-5 sm:pb-6 md:pb-8 px-5 sm:px-6 md:px-[5%]">

                {/* Top Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col items-start pointer-events-auto z-20 shrink-0"
                >
                    <div className="flex flex-col gap-4 md:gap-6">
                        <div className="text-[15px] sm:text-[16px] md:text-[24px] lg:text-[28px] font-medium leading-[1.5] md:leading-[1.4] text-white tracking-tight max-w-[280px] md:max-w-[420px] lg:max-w-[480px]">
                            <BlurText 
                                text="Pick a plan, submit a job request, and your イメージ will kickoff within 24 hours." 
                                initialDelay={2200}
                                delay={40} 
                                animateBy="words" 
                                direction="bottom" 
                            />
                        </div>
                        <div className="text-[13px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-white/60 font-normal leading-[1.6] max-w-[280px] md:max-w-[420px] lg:max-w-[480px]">
                            <BlurText 
                                text="We specialize in crafting premium digital experiences that elevate modern brands. Our bespoke approach ensures every interaction feels uniquely yours." 
                                initialDelay={2200}
                                delay={20} 
                                animateBy="words" 
                                direction="bottom" 
                            />
                        </div>
                    </div>

                    <button className="mt-6 md:mt-8 text-white font-semibold text-[15px] md:text-[16px] flex items-center gap-2 group relative overflow-hidden pb-1">
                        Explore Now
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="transform group-hover:translate-x-1 transition-transform">
                            <path d="M1 1H9V9M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                        </svg>
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/30"></div>
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>
                    </button>

                    {/* Mobile Leadership Pill */}
                    <Link to="/leadership" className="mt-8 md:hidden flex bg-[#f4f4f4]/90 backdrop-blur-sm text-black rounded-lg p-1.5 items-center gap-2 w-[180px] shadow-xl border border-white/20 active:scale-[0.98] transition-all">
                        <div className="flex -space-x-2.5 pl-0.5">
                            <img src={meetImg} alt="Meet Patel" className="w-8 h-8 rounded-full border-[2px] border-[#f4f4f4] object-cover grayscale relative z-10" />
                            <img src={krishImg} alt="Krish Patel" className="w-8 h-8 rounded-full border-[2px] border-[#f4f4f4] object-cover grayscale relative z-0" />
                        </div>
                        <div className="flex flex-col ml-1 justify-center">
                            <span className="text-[11px] font-bold tracking-tight leading-none mb-[2px]">Our Leadership</span>
                            <span className="text-[8px] font-semibold text-gray-500 tracking-widest leading-none uppercase">Meet & Krish</span>
                        </div>
                    </Link>
                </motion.div>

                {/* Crosshairs (Absolute inside the relative container) */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="absolute inset-0 pointer-events-none z-10">
                    <PlusIcon className="bottom-[323px] right-[889px] hidden xl:flex" />
                    <PlusIcon className="bottom-[323px] right-[653px] hidden lg:flex" />
                    <PlusIcon className="bottom-[323px] right-[417px] hidden md:flex" />
                    <PlusIcon className="bottom-[323px] right-[181px] hidden sm:flex" />
                    {/* Mobile PlusIcon */}
                    <PlusIcon className="top-[45%] right-[10%] sm:hidden" />
                </motion.div>

                {/* Bottom Section */}
                <div className="flex flex-col pointer-events-auto z-20 shrink-0 w-full">

                    {/* Services Text (Flows normally on mobile, absolute positioned on right for desktop) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mb-4 sm:mb-6 md:mb-0 md:absolute md:right-[5%] md:top-[140px] lg:top-[160px] flex flex-col md:items-end gap-1 text-[13px] md:text-[15px] font-bold tracking-tight text-white/90 w-[160px] md:w-[200px]"
                    >
                        <div className="flex items-center gap-1 border-b border-white/20 pb-1 md:pb-1.5 mb-1 md:mb-1.5 hover:text-white cursor-pointer transition-colors">
                            <span className="text-[#b9ff66] text-[9px] md:text-[10px] self-start mt-0.5">01/</span>
                            <span>Strategy</span>
                        </div>
                        <div className="border-b border-white/20 pb-1 md:pb-1.5 mb-1 md:mb-1.5 hover:text-white cursor-pointer transition-colors">
                            Designing
                        </div>
                        <div className="hover:text-white cursor-pointer transition-colors">
                            Branding
                        </div>
                    </motion.div>

                    {/* Logo and Year Details */}
                    <div className="w-full flex flex-col-reverse md:flex-row justify-between md:items-end gap-3 md:gap-4">

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="flex items-center gap-2 sm:gap-3 md:gap-4 text-white font-medium text-[10px] sm:text-[11px] md:text-[13px] tracking-widest pb-1 md:pb-2 whitespace-nowrap shrink-0"
                        >
                            <span>© 2025</span>
                            {/* Decorative Lines mimicking the soundbar/graph */}
                            <div className="flex items-end gap-[4px] md:gap-[3px] h-4 sm:h-6 md:h-10 pb-0.5 md:pb-1 opacity-50 md:opacity-100">
                                {[10, 10, 10, 10, 10, 24, 10, 10, 10, 10, 10].map((h, i) => (
                                    <div key={i} className="w-[1px] bg-white/50 md:bg-white/30" style={{ height: (h > 10 ? '100%' : '30%') }}></div>
                                ))}
                            </div>
                            <span className="text-[10px] sm:text-[11px] md:text-xl font-light">19'</span>
                        </motion.div>

                        {/* Huge FUEL X / TREVONKA Logo */}
                        <motion.div
                            initial={{ opacity: 0, y: 170 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 60, mass: 1, delay: 0.1 }}
                            className="w-full md:w-[75%] lg:w-[90%] h-[100px] sm:h-[120px] md:h-[180px] lg:h-[280px] xl:h-[340px] flex justify-start md:justify-end items-end"
                        >
                            <img
                                src={heroTxt}
                                alt="TRAVONKA"
                                className="w-full h-full object-contain object-left-bottom md:object-right-bottom"
                            />
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
