import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlurText from './BlurText';
import leeJaeHoImg from '../assets/Images/lee-jae-ho.png';
import kohMinJooImg from '../assets/Images/koh-min-joo.webp';
import hyunWooImg from '../assets/Images/1781580442946.jpg';

const testimonials = [
    {
        id: 1,
        quote: "      Travonka delivered with clarity. Their structured workflow and fast turnaround made our Brands launch seamless. They’ve become our trusted partner for every major creative push.”",
        name: "Lee Jae Ho",
        role: "CEO and Founder",
        company: "Korea Asia Business Advisory",
        image: leeJaeHoImg,
        logoText: "KAMAA.",
        stats: [
            { value: "122+", label: "Success Rate", sub: "Reliable execution" },
            { value: "99%", label: "Client Satisfaction", sub: "Seamless delivery" }
        ]
    },
    {
        id: 2,
        quote: "     “TREVONKA completely transformed our digital presence. The new platform is not only visually stunning but also highly scalable. Our engagement skyrocketed within weeks.”",
        name: "Koh Min-joo",
        role: "President, MJ World Beauty Academy",
        company: "MJ World",
        image: kohMinJooImg,
        logoText: "mjwba.",
        stats: [
            { value: "200%", label: "User Engagement", sub: "Post-launch metrics" },
            { value: "100%", label: "Uptime", sub: "Robust infrastructure" }
        ]
    },
    {
        id: 3,
        quote: "     “A truly premium experience from start to finish. Their design-first approach combined with deep engineering expertise gave us a product that stands out in a crowded market.”",
        name: "Hyun-Woo",
        role: "CEO and Chairwoman",
        company: "DR.UH foundation",
        image: hyunWooImg,
        stats: [
            { value: "Top 1%", label: "Industry Rating", sub: "Premium quality" },
            { value: "2x", label: "Time to Market", sub: "Accelerated process" }
        ]
    }
];

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const current = testimonials[currentIndex];

    return (
        <section className="relative z-40 w-full bg-white text-black overflow-hidden">

            {/* Main Container */}
            <div className="container-custom relative mx-auto max-w-[1440px] px-[24px] pt-[24px] pb-[160px] flex flex-col gap-[100px]">

                {/* 1. Header Bar */}
                <div className="w-full flex justify-between items-center text-[12px] md:text-[13px] font-normal tracking-normal border-t border-black/20 pt-4 relative">
                    <span className="flex items-center gap-1.5"><span className="text-[10px]">•</span> (05)</span>
                    <span className="absolute left-1/2 transform -translate-x-1/2">(Testimonial)</span>
                    <span>© 2025</span>
                </div>

                {/* 2. Content Layout: Left (Image+Controls) and Right (Quote+Stats) */}
                <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-[60px] lg:gap-[100px]">

                    {/* Left Column (Image & Buttons) */}
                    <div className="w-full lg:w-[212px] flex flex-col justify-between flex-shrink-0">

                        {/* Image+Logo */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="w-[212px] aspect-[0.7] rounded-[5px] overflow-hidden mb-12 lg:mb-0 bg-[#f4f4f4] relative mx-auto lg:mx-0"
                            >
                                <img
                                    src={current.image}
                                    alt={current.name}
                                    className="w-full h-full object-cover grayscale-[20%]"
                                />
                                {/* Logo overlay */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-white font-bold tracking-widest text-xl">{current.logoText}</span>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Pagination Controls */}
                        <div className="hidden lg:flex gap-4">
                            <button onClick={handlePrev} className="w-12 h-12 flex items-center justify-center bg-[#f7f7f7] hover:bg-[#eaeaea] transition-colors rounded-[5px]">
                                <svg width="12" height="18" viewBox="0 0 8 14" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 13L1 7l6-6" />
                                </svg>
                            </button>
                            <button onClick={handleNext} className="w-12 h-12 flex items-center justify-center bg-[#f7f7f7] hover:bg-[#eaeaea] transition-colors rounded-[5px]">
                                <svg width="12" height="18" viewBox="0 0 8 14" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M1 13l6-6-6-6" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Column (Text & Details) */}
                    <div className="flex-1 flex flex-col justify-between">

                        {/* Quote Text */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="w-full"
                            >
                                <BlurText
                                    text={current.quote}
                                    delay={20}
                                    animateBy="words"
                                    direction="bottom"
                                    className="text-[36px] md:text-[56px] font-[500] leading-[1] md:leading-[56px] tracking-[-1.7px] text-black"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Bottom Block (Divider + Profile + Stats) */}
                        <div className="flex flex-col mt-16 lg:mt-16">

                            {/* Divider Line */}
                            <div className="w-full h-px bg-black/10 mb-8"></div>

                            {/* Details (User & Stats) */}
                            <div className="w-full flex flex-col xl:flex-row items-start xl:items-center justify-between gap-10 xl:gap-4">

                                {/* User Block */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={current.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="flex items-center gap-4 bg-[#f7f7f7] rounded-[5px] p-2 pr-8"
                                    >
                                        <img
                                            src={current.image}
                                            alt={current.name}
                                            className="w-[66px] h-[66px] rounded-[2.5px] object-cover"
                                        />
                                        <div className="flex flex-col justify-center">
                                            <span className="text-[15px] font-[500] text-black mb-0.5">{current.name}</span>
                                            <span className="text-[15px] text-black/50">{current.company} / {current.role}</span>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Stats Container */}
                                <div className="flex items-center gap-16 md:gap-24">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={current.id + '-s1'}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className="flex flex-col"
                                        >
                                            <span className="text-[40px] md:text-[48px] font-[500] leading-none mb-3 text-black">{current.stats[0].value}</span>
                                            <span className="text-[15px] text-black font-[500] mb-0.5">{current.stats[0].label}</span>
                                            <span className="text-[15px] text-black/50">{current.stats[0].sub}</span>
                                        </motion.div>
                                    </AnimatePresence>

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={current.id + '-s2'}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className="flex flex-col"
                                        >
                                            <span className="text-[40px] md:text-[48px] font-[500] leading-none mb-3 text-black">{current.stats[1].value}</span>
                                            <span className="text-[15px] text-black font-[500] mb-0.5">{current.stats[1].label}</span>
                                            <span className="text-[15px] text-black/50">{current.stats[1].sub}</span>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>

                                {/* Mobile Pagination Controls */}
                                <div className="flex lg:hidden gap-4 mt-4">
                                    <button onClick={handlePrev} className="w-12 h-12 flex items-center justify-center bg-[#f7f7f7] hover:bg-[#eaeaea] transition-colors rounded-[5px]">
                                        <svg width="12" height="18" viewBox="0 0 8 14" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M7 13L1 7l6-6" />
                                        </svg>
                                    </button>
                                    <button onClick={handleNext} className="w-12 h-12 flex items-center justify-center bg-[#f7f7f7] hover:bg-[#eaeaea] transition-colors rounded-[5px]">
                                        <svg width="12" height="18" viewBox="0 0 8 14" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M1 13l6-6-6-6" />
                                        </svg>
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonial;
