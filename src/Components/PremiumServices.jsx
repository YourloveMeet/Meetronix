import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BlurText from './BlurText';
import premiumVideo from '../assets/Videos/CAsyrD25uh5PsGlkAL0HEIdpq0.mp4';
import premiumImg1 from '../assets/Images/premium-1.jpg';
import premiumImg2 from '../assets/Images/premium-2.jpg';
import premiumImg3 from '../assets/Images/premium-3.png';

const servicesList = [
    {
        number: "01",
        title: "Strategy",
        subtitle: "The Foundation",
        desc: "We define what makes you unique—your vision, your story, your impact. From core positioning to market approach, we build strategies that feel intentional and clear.",
        image: premiumImg1
    },
    {
        number: "02",
        title: "Design",
        subtitle: "Beyond Aesthetics",
        desc: "We bring your brand to life with visuals that feel intentional and considered. From identity systems to digital interfaces, we design spaces that reflect clarity and purpose.",
        image: premiumImg2
    },
    {
        number: "03",
        title: "Engineering",
        subtitle: "Ideas into Reality",
        desc: "We bring concepts to life with clean, functional code. From responsive web platforms to tailored digital solutions, we build with clarity, precision, and attention to detail.",
        image: premiumImg3
    }
];

const ParallaxImage = ({ src, alt }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax effect: moves opposite to scroll direction
    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-[360px] lg:w-[500px] xl:w-[540px] aspect-[16/10] rounded-[5px] overflow-hidden flex-shrink-0 relative bg-[#222]"
        >
            <motion.img
                src={src}
                alt={alt}
                className="absolute left-0 w-full h-[130%] object-cover grayscale-[20%]"
                style={{ y, top: "-15%" }}
            />
        </motion.div>
    );
};

const PremiumServices = () => {
    const sectionRef = useRef(null);

    // Track scroll to animate the slant
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "start start"]
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
        <section ref={sectionRef} className="relative z-30 w-full bg-[#0d0d0d] text-white">

            {/* The Slanted Top Transition */}
            <motion.div
                className="absolute top-0 left-0 w-full h-[20vw] bg-[#0d0d0d] transform -translate-y-[99%] origin-bottom"
                style={{ clipPath }}
            ></motion.div>

            {/* Main Container - Flex Column with exactly 100px gap matching Framer CSS */}
            <div className="container-custom relative mx-auto max-w-[1440px] px-[24px] pt-[24px] pb-[160px] flex flex-col gap-[100px]">

                {/* 1. Header Bar */}
                <div className="w-full flex justify-between items-center text-[12px] md:text-[13px] font-normal tracking-normal border-t border-white/20 pt-4 relative">
                    <span className="flex items-center gap-1.5"><span className="text-[10px]">•</span> (03)</span>
                    <span className="absolute left-1/2 transform -translate-x-1/2">(Premium Services)</span>
                    <span>© 2025</span>
                </div>

                {/* 2. Content Area - Inline Block Wrapper for Video */}
                <div className="w-full pt-8 md:pt-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[36px] md:text-[56px] lg:text-[70px] leading-[1] tracking-[-2.1px] font-[500]"
                    >
                        {/* 
                          Inline-block wrapper takes exactly the height of one line (0.85em) 
                          and sits on the baseline. The width is now smaller to create a 
                          vertical rectangle (portrait) aspect ratio when combined with a tall height.
                        */}
                        <span className="inline-block relative w-[70px] md:w-[100px] lg:w-[130px] h-[0.85em] mr-4 md:mr-6 lg:mr-8 align-baseline">
                            <video
                                src={premiumVideo}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute bottom-0 left-0 w-full h-[280%] object-cover rounded-[12px] md:rounded-[16px]"
                            />
                        </span>

                        <BlurText
                            text="TREVONKA is a Independent studio shaping timeless brands, scalable products,"
                            delay={30}
                            animateBy="words"
                            direction="bottom"
                            className="inline text-white"
                        />
                        <BlurText
                            text=" and modern websites through design & engineering®"
                            delay={30}
                            animateBy="words"
                            direction="bottom"
                            className="inline text-white/50"
                        />
                    </motion.h2>
                </div>

                {/* 3. Bottom Row */}
                <div className="w-full flex items-center justify-between">
                    <a href="#" className="flex flex-col group w-[200px]">
                        <div className="flex items-center justify-between pb-3 border-b border-white/20 group-hover:border-white transition-colors">
                            <span className="text-white font-[500] text-[15px] tracking-tight">Explore More</span>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                                <path d="M7 7h10v10M17 7L7 17" />
                            </svg>
                        </div>
                    </a>

                    <div className="flex-1 flex justify-end gap-16 md:gap-32 opacity-50 text-[14px] pr-10">
                        <span>+</span>
                        <span>+</span>
                        <span>+</span>
                    </div>
                </div>

                {/* 4. Service List Items - Flex Column with exactly 100px gap matching Framer CSS */}
                <div className="w-full flex flex-col gap-[100px]">
                    {servicesList.map((item, index) => (
                        <React.Fragment key={index}>
                            {/* Separator line only BETWEEN items */}
                            {index !== 0 && (
                                <div className="w-full h-px bg-white/10"></div>
                            )}

                            {/* Row Container - Top Aligned, Justified Between Left (Number) and Right (Image+Text) */}
                            <div className="w-full flex flex-col md:flex-row items-start justify-between">

                                {/* Left - Number */}
                                <div className="flex-shrink-0 mb-8 md:mb-0">
                                    <div className="text-[100px] md:text-[140px] lg:text-[160px] font-medium leading-[0.8] tracking-tighter">
                                        <BlurText
                                            text={item.number}
                                            delay={20}
                                            animateBy="words"
                                            direction="bottom"
                                        />
                                    </div>
                                </div>

                                {/* Right - Image & Text (Stretched to equal height) */}
                                <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-[60px] xl:gap-[100px]">

                                    {/* Image with Parallax Hologram Effect */}
                                    <ParallaxImage
                                        src={item.image}
                                        alt={item.title}
                                    />

                                    {/* Details - Justified between top (Title) and bottom (Desc) to align with image */}
                                    <div className="flex flex-col justify-between items-start w-full md:w-[340px] lg:w-[380px] flex-shrink-0 py-1">
                                        <div className="text-[40px] md:text-[48px] lg:text-[52px] font-medium tracking-tight leading-none">
                                            <BlurText
                                                text={item.title}
                                                delay={20}
                                                animateBy="words"
                                                direction="bottom"
                                            />
                                        </div>

                                        <div className="mt-8 lg:mt-0">
                                            <BlurText
                                                text={item.subtitle}
                                                delay={20}
                                                animateBy="words"
                                                direction="bottom"
                                                className="text-[14px] md:text-[15px] font-bold text-white mb-2"
                                            />
                                            <BlurText
                                                text={item.desc}
                                                delay={20}
                                                animateBy="words"
                                                direction="bottom"
                                                className="text-[#888888] text-[14px] md:text-[15px] leading-[1.6]"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </React.Fragment>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PremiumServices;
