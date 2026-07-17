import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import BlurText from './BlurText';
import heroTxt from '../assets/Images/HeroTxt.webp';

const Footer = () => {
    const sectionRef = useRef(null);

    // Track scroll to animate the slanted reveal.
    // Completes when the top of the footer hits the center of the viewport, ensuring full animation before reaching page bottom.
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "center center"]
    });

    const clipPath = useTransform(
        scrollYProgress,
        [0, 1],
        [
            'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
            'polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)'
        ]
    );

    return (
        <section ref={sectionRef} className="relative z-50 w-full bg-[#0d0d0d] text-white pt-16 md:pt-24 pb-8">

            {/* The Slanted Top Transition protruding upwards over the previous section */}
            <motion.div
                className="absolute left-0 w-full h-[20vw] bg-[#0d0d0d] origin-bottom"
                style={{ top: "-19.5vw", clipPath }}
            ></motion.div>

            <div className="container-custom relative mx-auto max-w-[1440px] px-[24px]">

                {/* Top Row: Let's work together & Links */}
                <div className="w-full flex flex-col md:flex-row justify-between items-start pt-4 md:pt-[4vw]">

                    {/* Left Side */}
                    <div className="flex flex-col">
                        <div className="text-[44px] md:text-[70px] lg:text-[90px] font-[500] leading-[1.05] tracking-tight">
                            <BlurText
                                text="Let's work together"
                                delay={20}
                                animateBy="words"
                                direction="bottom"
                                className="text-[#888] block"
                            />
                            <BlurText
                                text="trevonkastudios@gmail.com"
                                delay={20}
                                animateBy="words"
                                direction="bottom"
                                className="text-white block tracking-tighter mt-1 text-[20px] xs:text-[24px] sm:text-[36px] md:text-[60px] lg:text-[75px] xl:text-[90px]"
                            />
                        </div>
                        <Link to="/contact" className="flex flex-col group w-[180px] mt-12 md:mt-20">
                            <div className="flex items-center justify-between pb-3 border-b border-white/20 group-hover:border-white transition-colors relative">
                                <span className="text-white font-[600] text-[15px] tracking-tight">Contact Now</span>
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                    <path d="M7 7h10v10M17 7L7 17" />
                                </svg>
                            </div>
                        </Link>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col w-full md:w-[320px] mt-16 md:mt-0 pt-2 md:pt-6">
                        {[
                            { n: '01', l: 'Home', p: '/' },
                            { n: '02', l: 'Portfolio', p: '/portfolio' },
                            { n: '03', l: 'About', p: '/about' },
                            { n: '04', l: 'Contact', p: '/contact' }
                        ].map((item, i) => (
                            <Link key={i} to={item.p} className={`flex justify-between items-center py-5 text-[14px] font-[500] text-white cursor-pointer hover:opacity-70 transition-opacity ${i !== 0 ? 'border-t border-white/10' : ''}`}>
                                <span>{item.l}</span>
                                <span className="text-white/40 text-[11px] font-normal">{item.n}</span>
                            </Link>
                        ))}
                    </div>

                </div>

                {/* Middle Crosshairs */}
                <div className="w-full flex justify-between items-center py-[24px] md:py-[32px] opacity-40 text-[14px] font-light">
                    <span>+</span>
                    <span>+</span>
                    <span>+</span>
                </div>

                {/* Bottom Logo Image */}
                <div className="w-full flex flex-col relative mt-4 md:mt-6">
                    <div className="w-full">
                        <img
                            src={heroTxt}
                            alt="TRAVONKA Logo"
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    <div className="absolute bottom-[2vw] md:bottom-[3vw] right-0 md:right-[1vw] flex items-center gap-4 md:gap-6 text-[12px] md:text-[13px] font-[500] text-white">
                        <span>© 2025</span>
                        <div className="flex gap-[3px] opacity-50">
                            {[...Array(11)].map((_, i) => (
                                <div key={i} className="w-[1px] h-[10px] md:h-[12px] bg-white"></div>
                            ))}
                        </div>
                        <span>19'</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Footer;
