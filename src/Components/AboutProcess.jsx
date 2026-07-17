import React from 'react';
import { motion } from 'framer-motion';

const processData = [
    {
        id: "01",
        title: "Research",
        desc: "As true strategy transcends standard UX, we blend quantitative data with real-world scenarios to deliver systems of scale and depth.",
        includes: ["Market Analysis & Audit", "User Research Iterations", "Architectural Wireframes"]
    },
    {
        id: "02",
        title: "Experiment",
        desc: "We build test environments outside standard toolsets. Our engineers experiment in browser-native technologies to craft unique interactive patterns.",
        includes: ["Prototyping", "WebGL & 3D Prototyping", "Interactive Motion Studies"]
    },
    {
        id: "03",
        title: "Refinement",
        desc: "Testing against real users ensures stability under extreme conditions. We refine code, polish motion curves, and ship robust digital experiences.",
        includes: ["Performance Optimization", "QA & Stress Testing", "Production Deployment"]
    }
];

const AboutProcess = () => {
    return (
        <section className="relative z-20 w-full bg-white text-black pb-24 md:pb-32">
            <div className="container-custom relative mx-auto w-full max-w-[1440px] px-6 md:px-[5%]">
                
                <div className="w-full flex flex-col pt-10">
                    {processData.map((item, index) => (
                        <div key={index} className="w-full flex flex-col md:flex-row items-start md:items-center py-12 md:py-16 border-t border-black/10 group cursor-default">
                            
                            {/* Number */}
                            <div className="w-12 md:w-24 text-[12px] font-medium tracking-tight mb-4 md:mb-0">
                                0{item.id}
                            </div>

                            {/* Title */}
                            <div className="w-full md:w-1/3 mb-6 md:mb-0">
                                <h3 className="text-[32px] md:text-[40px] lg:text-[50px] tracking-[-0.03em] font-medium transition-transform transform group-hover:translate-x-2 duration-500">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Description & List */}
                            <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                                <p className="text-[14px] md:text-[15px] leading-[1.5] text-[#666] font-medium max-w-[320px]">
                                    {item.desc}
                                </p>

                                <div className="flex flex-col gap-2">
                                    <span className="text-[12px] font-bold tracking-tight text-black mb-2">Work includes</span>
                                    {item.includes.map((inc, i) => (
                                        <span key={i} className="text-[14px] text-[#888]">{inc}</span>
                                    ))}
                                </div>
                            </div>
                            
                        </div>
                    ))}
                    <div className="w-full h-[1px] bg-black/10"></div>
                </div>

            </div>
        </section>
    );
};

export default AboutProcess;
