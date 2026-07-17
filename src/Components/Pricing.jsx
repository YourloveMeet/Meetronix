import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import BlurText from './BlurText';

const pricingList = [
    {
        tier: "Starter",
        desc: "Essential design support for new brands taking the first step.",
        price: "$699",
        features: [
            "Custom-crafted visual identity",
            "Responsive, modern website design",
            "High-quality imagery and production"
        ],
        dark: false
    },
    {
        tier: "Professional",
        desc: "Ideal for brands seeking refined systems and digital presence.",
        price: "$1299",
        features: [
            "Custom-crafted visual identity",
            "Responsive, modern website design",
            "High-quality imagery and production",
            "Structured layouts with clean typography",
            "Conversion-focused page strategy",
            "Fast, optimized performance setup"
        ],
        dark: false
    },
    {
        tier: "Elite",
        desc: "High-touch and a fully crafted brand designed by best designers in TREVONKA.",
        price: "$2800",
        features: [
            "Custom-crafted visual identity",
            "Responsive, modern website design",
            "High-quality imagery and production",
            "Structured layouts with clean typography",
            "Conversion-focused page strategy",
            "Fast, optimized performance setup",
            "Seamless CMS and organization"
        ],
        dark: true
    }
];

const Pricing = () => {
    const sectionRef = useRef(null);

    // Track scroll to animate the slant
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "start start"]
    });

    // The slant animation: starts flat, ends with a slope covering the dark section above
    // Since this is a white section coming from the bottom, we slant the top edge.
    const clipPath = useTransform(
        scrollYProgress,
        [0, 1],
        [
            'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
            'polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)' // Slants UP to the right
        ]
    );

    return (
        <section ref={sectionRef} className="relative z-40 w-full bg-white text-black pt-24 pb-32">

            {/* The Slanted Top Transition */}
            <motion.div
                className="absolute top-0 left-0 w-full h-[20vw] bg-white transform -translate-y-[99%] origin-bottom"
                style={{ clipPath }}
            ></motion.div>

            <div className="container-custom relative mx-auto max-w-[1440px] px-6 md:px-[5%] pt-16">

                {/* Header Bar */}
                <div className="w-full flex justify-between items-center text-[12px] md:text-[13px] font-normal tracking-normal border-t border-black/20 pt-4 mb-[80px] md:mb-[160px] relative">
                    <span className="flex items-center gap-1.5"><span className="text-[10px]">•</span> (04)</span>
                    <span className="absolute left-1/2 transform -translate-x-1/2">(Pricing)</span>
                    <span>© 2025</span>
                </div>

                {/* Pricing Cards */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pricingList.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`w-full p-8 md:p-12 rounded-[16px] flex flex-col h-full ${plan.dark ? 'bg-[#111111] text-white' : 'bg-[#f4f4f4] text-black'}`}
                        >
                            {/* Tier Header */}
                            <h3 className="text-[20px] md:text-[24px] font-medium tracking-tight mb-3">
                                {plan.tier}
                            </h3>
                            <p className={`text-[14px] md:text-[15px] leading-[1.5] max-w-[240px] mb-12 ${plan.dark ? 'text-white/60' : 'text-black/60'}`}>
                                {plan.desc}
                            </p>

                            {/* Price */}
                            <div className="flex items-baseline gap-1 mb-12">
                                <BlurText
                                    text={plan.price}
                                    delay={30}
                                    animateBy="words"
                                    direction="bottom"
                                    className="text-[48px] md:text-[64px] font-medium leading-none tracking-tighter"
                                />
                                <span className={`text-[14px] font-medium ${plan.dark ? 'text-white/60' : 'text-black/60'}`}>
                                    / Month
                                </span>
                            </div>

                            {/* Join Button */}
                            <Link to="/contact" className={`flex flex-col group w-full mb-12 ${plan.dark ? 'text-white' : 'text-black'}`}>
                                <div className={`flex items-center justify-between pb-3 border-b transition-colors relative ${plan.dark ? 'border-white/20 group-hover:border-white' : 'border-black/20 group-hover:border-black'}`}>
                                    <span className="font-[500] text-[15px] tracking-tight">Join Us Now</span>
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                                        <path d="M7 7h10v10M17 7L7 17" />
                                    </svg>
                                </div>
                            </Link>

                            {/* Features */}
                            <div className="flex flex-col gap-4 mt-auto">
                                <h4 className={`text-[14px] font-bold mb-2 ${plan.dark ? 'text-white' : 'text-black'}`}>
                                    What's included
                                </h4>
                                {plan.features.map((feature, fIndex) => (
                                    <div key={fIndex} className="flex items-start gap-3 text-[13px] md:text-[14px]">
                                        <span className={`font-bold mt-0.5 ${plan.dark ? 'text-white/40' : 'text-black/40'}`}>+</span>
                                        <span className={plan.dark ? 'text-white/60' : 'text-black/60'}>
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Pricing;
