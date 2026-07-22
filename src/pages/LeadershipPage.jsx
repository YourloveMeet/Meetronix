import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import meetImg from '../assets/Images/meet-patel.jpg';
import krishImg from '../assets/Images/krish-patel.jpg';
import Footer from '../Components/Footer';

const LeadershipPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="relative min-h-screen bg-[#050505] text-white overflow-hidden font-sans">

            {/* Hero Section */}
            <section className="relative h-[100svh] w-full flex items-center justify-center overflow-hidden">
                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-white/50 text-[10px] md:text-[14px] font-medium tracking-[0.6em] uppercase mb-6 text-center">
                            The Visionaries Behind Trevonka
                        </span>

                        <div className="flex flex-col items-center overflow-hidden pb-4 px-4 text-center">
                            <div className="flex">
                                {"OUR".split("").map((char, i) => (
                                    <motion.span
                                        key={`our-${i}`}
                                        initial={{ y: "100%", opacity: 0 }}
                                        animate={{ y: "0%", opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.4 + (i * 0.05), ease: [0.76, 0, 0.24, 1] }}
                                        className="text-[12vw] md:text-[10vw] font-['Outfit'] font-light uppercase leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] bg-clip-text text-transparent"
                                        style={{
                                            backgroundImage: "linear-gradient(110deg, rgba(255,255,255,0.5) 30%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.5) 70%)",
                                            backgroundSize: "200% auto",
                                            animation: "shine 4s linear infinite"
                                        }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </div>
                            <div className="flex">
                                {"LEADERSHIP".split("").map((char, i) => (
                                    <motion.span
                                        key={`lead-${i}`}
                                        initial={{ y: "100%", opacity: 0 }}
                                        animate={{ y: "0%", opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.6 + (i * 0.05), ease: [0.76, 0, 0.24, 1] }}
                                        className="text-[12vw] md:text-[10vw] font-['Outfit'] font-bold uppercase leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] bg-clip-text text-transparent"
                                        style={{
                                            backgroundImage: "linear-gradient(110deg, rgba(255,255,255,0.5) 30%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.5) 70%)",
                                            backgroundSize: "200% auto",
                                            animation: "shine 4s linear infinite reverse"
                                        }}
                                    >
                                        {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="absolute bottom-12 flex flex-col items-center gap-4"
                    >
                        <span className="text-[10px] tracking-[0.3em] uppercase text-white/40">Scroll to explore</span>
                        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
                            <motion.div
                                animate={{ y: ["-100%", "100%"] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 left-0 w-full h-full bg-white"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Meet Patel Section */}
            <section className="relative w-full py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start border-b border-white/10">

                <div className="md:col-span-4 flex flex-col gap-8 md:sticky md:top-32">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        src={meetImg}
                        alt="Meet Patel"
                        className="w-full aspect-[3/4] object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                    />
                    <div className="flex flex-col gap-2">
                        <h3 className="text-[20px] font-bold tracking-tight">Meet Patel</h3>
                        <p className="text-[14px] text-white/50 tracking-wider uppercase">Founder & CEO</p>
                    </div>
                </div>

                <div className="md:col-span-8 flex flex-col gap-12 md:pl-16 pt-0 md:pt-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-[28px] md:text-[44px] font-light leading-[1.3] tracking-[-0.02em] font-['Outfit']"
                    >
                        "At Trevonka, we don't just build websites; we engineer digital ecosystems that redefine how brands interact with the world."
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-8 text-[16px] md:text-[18px] text-white/60 leading-relaxed font-light"
                    >
                        <p>
                            As the CEO and Technical Director, my vision has always been to bridge the gap between stunning aesthetic design and robust, scalable engineering. Every project we undertake is a testament to this philosophy.
                        </p>
                        <p>
                            I believe that a truly premium digital experience requires a meticulous attention to detail. From the microscopic interactions—like how a button feels when hovered—to the macroscopic architecture that ensures lightning-fast load times across the globe.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Krish Patel Section */}
            <section className="relative w-full py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">

                <div className="md:col-span-8 flex flex-col gap-12 md:pr-16 pt-0 md:pt-12 md:order-1 order-2 text-right">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-[28px] md:text-[44px] font-light leading-[1.3] tracking-[-0.02em] font-['Outfit']"
                    >
                        "Design is not just how it looks; it's the emotional connection it creates. We craft interactions that resonate and endure."
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col gap-8 text-[16px] md:text-[18px] text-white/60 leading-relaxed font-light ml-auto"
                    >
                        <p>
                            As the CTO , my mandate is to ensure that every pixel we push serves a distinct purpose. Beautiful design is meaningless if it doesn't solve a problem or tell a compelling story.
                        </p>
                        <p>
                            We approach digital experiences like modern art installations. It requires a harmony of typography, motion, and spatial awareness. By obsessing over the micro-interactions, we build a macro-experience that feels uniquely tailored and intensely premium.
                        </p>
                    </motion.div>
                </div>

                <div className="md:col-span-4 flex flex-col gap-8 md:sticky md:top-32 md:order-2 order-1 items-end">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        src={krishImg}
                        alt="Krish Patel"
                        className="w-full aspect-[3/4] object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                    />
                    <div className="flex flex-col gap-2 text-right w-full">
                        <h3 className="text-[20px] font-bold tracking-tight">Krish Patel</h3>
                        <p className="text-[14px] text-white/50 tracking-wider uppercase">Founder & CTO</p>
                    </div>
                </div>

            </section>

            {/* Close it off nicely */}
            <div className="mt-12 bg-white text-black py-20 px-6 text-center flex flex-col items-center relative z-10">
                <h2 className="text-[32px] md:text-[50px] font-['Outfit'] font-bold tracking-tight mb-4">Ready to start a project?</h2>
                <p className="text-[16px] text-gray-600 mb-8 max-w-[500px]">Let's collaborate to build something extraordinary for your brand.</p>
                <button className="px-8 py-4 bg-black text-white text-[14px] font-bold tracking-widest uppercase hover:bg-black/80 transition-colors rounded">
                    Contact Us
                </button>
            </div>

            {/* Inline style for the shine animation used in the hero text */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes shine {
                    0% { background-position: 200% center; }
                    100% { background-position: -200% center; }
                }
            `}} />
        </div>
    );
};

export default LeadershipPage;
