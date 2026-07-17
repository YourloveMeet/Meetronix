import React, { useRef, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BlurText from './BlurText';
import LiquidHover from './LiquidHover';

import meetImg from '../assets/Images/meet-patel.jpg';
import krishImg from '../assets/Images/krish-patel.jpg';

const About = () => {
    const sectionRef = useRef(null);

    // Track the scroll progress of this section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "start start"]
    });

    // Animate the slant: at start (0), it's completely flat.
    // At end (1), the right side rises up to create a moderate 20vw slant!
    const clipPath = useTransform(
        scrollYProgress,
        [0, 1],
        [
            'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
            'polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)'
        ]
    );

    // For a subtle parallax effect on the image
    const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    return (
        <section ref={sectionRef} className="relative z-20 w-full bg-white text-black pb-32 mt-[12vw]">

            {/* The Dynamic Scroll-Linked Slanted Top Transition */}
            {/* Height is 20vw to create an accurate, moderate slope (not too lean, not too steep) */}
            <motion.div
                className="absolute top-0 left-0 w-full h-[20vw] bg-white transform -translate-y-[99%] origin-bottom"
                style={{ clipPath }}
            ></motion.div>

            <div className="container-custom relative mx-auto max-w-[1440px] px-6 md:px-[5%] pt-16 md:pt-24">

                {/* Header Bar */}
                <div className="w-full flex justify-between items-center text-[13px] md:text-[14px] font-normal tracking-normal border-t border-black/20 pt-4 mb-[110px]">
                    <span className="flex items-center gap-1.5"><span className="text-[10px]">•</span> (01)</span>
                    <span>(Who we are)</span>
                    <span>© 2025</span>
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-left text-[32px] md:text-[52px] lg:text-[72px] leading-[1.08] tracking-[-0.03em] font-[525] text-black w-full"
                    style={{ textIndent: '20%' }}
                >
                    Where thoughtful design meets precision engineering. We create premium websites, products, and brands that leave a lasting impression through clarity, craftsmanship, and uncompromising attention to detail.
                </motion.h2>
                <div className="w-full mb-[100px] md:mb-[140px]"></div>

                {/* Bottom Section: Left Image, Right Text */}
                <div className="w-full flex flex-col md:flex-row gap-16 md:gap-20 items-start">

                    {/* Left Side: Parallax Image container */}
                    <div className="w-full md:w-[40%] flex justify-center md:justify-start">
                        <div className="w-full max-w-[360px] h-[480px] overflow-hidden rounded-[5px] relative bg-[#f4f4f4]">
                            <motion.div
                                style={{ y: imageY, top: "-15%" }}
                                className="absolute left-0 w-full h-[130%]"
                            >
                                <Suspense fallback={<div className="w-full h-full bg-[#e0e0e0]" />}>
                                    <LiquidHover
                                        image="https://framerusercontent.com/images/4lJy6CZV8T9kSyNv3RKwekdOjnU.png"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </Suspense>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side: Details list */}
                    <div className="w-full md:w-[60%] flex flex-col gap-16 md:gap-20 mt-10 md:mt-0">

                        {/* Detail 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col md:flex-row gap-4 md:gap-32 w-full"
                        >
                            <h3 className="text-[14px] md:text-[15px] font-bold tracking-tight text-black whitespace-nowrap min-w-[80px]">(Discovery)</h3>
                            <p className="text-[15px] md:text-[16px] leading-[1.4] tracking-[-0.01em] text-[#666666] font-medium max-w-[420px]">
                                Every collaboration begins with understanding—not assumptions. We uncover the vision, challenge conventional thinking, and establish a clear direction before a single pixel is designed or a single line of code is written.
                            </p>
                        </motion.div>

                        {/* Detail 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex flex-col md:flex-row gap-4 md:gap-32 w-full"
                        >
                            <h3 className="text-[14px] md:text-[15px] font-bold tracking-tight text-black whitespace-nowrap min-w-[80px]">(+Creation)</h3>
                            <p className="text-[15px] md:text-[16px] leading-[1.4] tracking-[-0.01em] text-[#666666] font-medium max-w-[420px]">
                                Design and engineering move together from day one. Every decision is deliberate, every detail refined, creating products that are visually distinctive, technically resilient, and built to evolve.
                            </p>
                        </motion.div>

                        {/* Detail 3 (Results) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-col md:flex-row gap-4 md:gap-32 w-full"
                        >
                            <h3 className="text-[14px] md:text-[15px] font-bold tracking-tight text-black whitespace-nowrap min-w-[80px]">(=Outcome)</h3>
                            <div className="flex flex-col w-full max-w-[420px]">

                                <div className="flex justify-between items-center py-2.5 border-b border-black/10 text-[14px] md:text-[15px] font-[600] tracking-tight text-black">
                                    <span>Projects Delivered</span>
                                    <span>25+</span>
                                </div>

                                <div className="flex justify-between items-center py-2.5 border-b border-black/10 text-[14px] md:text-[15px] font-[600] tracking-tight text-black mb-12">
                                    <span>Client Retention</span>
                                    <span>98%</span>
                                </div>

                                <a href="#" className="flex flex-col group w-max">
                                    <div className="flex items-center justify-between w-[180px] pb-2 border-b border-black/20 group-hover:border-black transition-colors relative">
                                        <span className="text-black font-[600] text-[14px] tracking-tight">Explore Now</span>
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" className="transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform">
                                            <path d="M7 7h10v10M17 7L7 17" />
                                        </svg>
                                        <div className="absolute right-0 bottom-0 w-[1px] h-[4px] bg-black/20 group-hover:bg-black transition-colors"></div>
                                    </div>
                                </a>
                            </div>
                        </motion.div>

                    </div>

                </div>



            </div>
        </section>
    );
};

export default About;
