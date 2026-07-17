import React from 'react';
import { motion } from 'framer-motion';
import BlurText from './BlurText';

const statsData = [
    {
        number: "120K",
        title: "Global Impressions",
        desc: "Trevonka moves beyond simple authenticity, creating refined systems that shape digital presence."
    },
    {
        number: "30K",
        title: "Community Reach",
        desc: "Elevating identity with structured clarity. Trevonka crafts experiences that extend far beyond visual form."
    },
    {
        number: "750+",
        title: "Creative Hours Logged",
        desc: "Through precision and intention, Trevonka transforms ideas into cohesive narratives that define brands."
    },
    {
        number: "27+",
        title: "Projects Completed",
        desc: "Blending modern aesthetics with functional design, Trevonka delivers refined solutions that push brands."
    }
];

const Stats = ({ data }) => {
    const displayData = data || statsData;

    return (
        <section className="relative z-40 w-full bg-white text-black">
            <div className="container-custom relative mx-auto max-w-[1440px] px-[24px] pt-[24px] pb-[160px] flex flex-col gap-[100px]">

                {/* Header Bar */}
                <div className="w-full flex justify-between items-center text-[12px] md:text-[13px] font-normal tracking-normal border-t border-black/20 pt-4 relative">
                    <span className="flex items-center gap-1.5"><span className="text-[10px]">•</span> (07)</span>
                    <span className="absolute left-1/2 transform -translate-x-1/2">(Stats)</span>
                    <span>© 2025</span>
                </div>

                {/* Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-[80px] lg:gap-x-[160px] gap-y-[100px] md:gap-y-[160px] mt-10">
                    {displayData.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col w-full group cursor-default"
                        >
                            {/* Top row: Number and arrow */}
                            <div className="w-full flex justify-between items-start pb-8 border-b border-black/10">
                                <BlurText
                                    text={stat.number}
                                    delay={30}
                                    animateBy="words"
                                    direction="bottom"
                                    className="text-[70px] md:text-[110px] lg:text-[130px] font-[500] leading-[0.85] tracking-[-3px] lg:tracking-[-5px] text-black"
                                />
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 mt-2">
                                    <path d="M7 7h10v10M17 7L7 17" />
                                </svg>
                            </div>

                            {/* Bottom row: Title and description */}
                            <div className="w-full flex flex-col mt-6">
                                <h4 className="text-[14px] md:text-[15px] font-[600] tracking-tight text-black mb-2">{stat.title}</h4>
                                <p className="text-[14px] leading-[1.6] text-[#777] font-[500] max-w-[380px]">
                                    {stat.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Stats;
