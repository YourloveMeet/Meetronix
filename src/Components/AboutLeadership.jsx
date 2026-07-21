import React from 'react';
import { motion } from 'framer-motion';
import meetImg from '../assets/Images/meet-patel.jpg';
import krishImg from '../assets/Images/krish-patel.jpg';

const AboutLeadership = () => {
    return (
        <section className="relative z-40 bg-white w-full px-5 sm:px-6 md:px-[5%] py-24 md:py-32 flex flex-col items-center justify-center border-t border-black/10">
            <div className="w-full flex flex-col gap-12 max-w-[1440px]">
                <div className="flex flex-col gap-2">
                    <h2 className="text-[20px] md:text-[28px] font-bold tracking-tight text-black">Leadership</h2>
                    <p className="text-[14px] md:text-[16px] text-[#666] font-medium max-w-[400px]">
                        The visionaries behind Trevonka's creative engineering and strategic growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 lg:gap-16 w-full max-w-[1000px] mx-auto">
                    {/* Meet Patel */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-5 group cursor-pointer"
                    >
                        <div className="w-full aspect-[4/5] bg-[#e5e5e5] rounded-[5px] overflow-hidden relative">
                            <img
                                src={meetImg}
                                alt="Meet Patel"
                                className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                            />
                        </div>
                        <div className="flex flex-col border-t border-black/20 pt-4">
                            <h3 className="text-[16px] md:text-[18px] font-bold tracking-tight text-black">Meet Patel</h3>
                            <p className="text-[13px] md:text-[14px] text-black font-semibold mt-1">Co-Founder & Technical Director</p>
                            <p className="text-[14px] text-[#666] tracking-tight font-medium mt-3 leading-relaxed">
                                Meet leads the engineering and architectural vision at Trevonka. With a deep focus on scalable infrastructure and seamless digital integration, he ensures that every bespoke experience is built on a foundation of technical excellence and resilience.
                            </p>
                        </div>
                    </motion.div>

                    {/* Krish Patel */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-5 group cursor-pointer"
                    >
                        <div className="w-full aspect-[4/5] bg-[#e5e5e5] rounded-[5px] overflow-hidden relative">
                            <img
                                src={krishImg}
                                alt="Krish Patel"
                                className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                            />
                        </div>
                        <div className="flex flex-col border-t border-black/20 pt-4">
                            <h3 className="text-[16px] md:text-[18px] font-bold tracking-tight text-black">Krish Patel</h3>
                            <p className="text-[13px] md:text-[14px] text-black font-semibold mt-1">Co-Founder & CTO</p>
                            <p className="text-[14px] text-[#666] tracking-tight font-medium mt-3 leading-relaxed">
                                Krish drives the creative strategy and visual identity of Trevonka. Blending modern aesthetics with highly intentional design, he crafts the unique digital narratives and premium interactions that elevate and define our clients' brands.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutLeadership;
