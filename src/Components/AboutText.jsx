import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import premiumImg from '../assets/Images/premium-3.png';

const AboutText = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax 3D effect: image moves contrary to scroll
    const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    return (
        <section className="relative z-20 w-full bg-white text-black pb-24 md:pb-32">

            <div className="container-custom relative mx-auto w-full max-w-[1440px] px-6 md:px-[5%] pt-16 md:pt-24">

                {/* Header Bar */}
                <div className="w-full flex justify-between items-center text-[12px] md:text-[13px] font-normal tracking-normal border-t border-black/20 pt-4 mb-[80px] md:mb-[120px]">
                    <span className="flex items-center gap-1.5"><span className="text-[10px]">+</span></span>
                    <span className="absolute left-1/2 transform -translate-x-1/2">+</span>
                    <span>+</span>
                </div>

                {/* Large Text */}
                <div className="w-full flex justify-center mb-16 md:mb-24 px-4">
                    <p className="text-center text-[36px] md:text-[60px] lg:text-[75px] leading-[1.05] tracking-[-0.03em] font-[525] text-black w-full max-w-[1200px]">
                        Design-driven expression blends structured clarity and modern 3D visual systems with Swiss digital ideas, shaped by aesthetics®.
                    </p>
                </div>

                {/* Large Landscape Image */}
                <motion.div
                    ref={containerRef}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full h-[60vh] md:h-[85vh] overflow-hidden rounded-[8px] bg-[#f4f4f4] relative"
                >
                    <motion.div 
                        className="absolute inset-0 w-full h-[130%] top-[-15%]"
                        style={{ y: imageY }}
                    >
                        <img
                            src={premiumImg}
                            alt="About Us Lifestyle"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
};

export default AboutText;
