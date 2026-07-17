import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import premiumImg from '../assets/Images/premium-1.jpg';
import BlurText from './BlurText';

const AboutHero = () => {
    const heroImage = premiumImg;

    return (
        <section className="relative z-10 w-full h-[100dvh] bg-[#0d0d0d] overflow-hidden sticky top-0 flex items-center justify-center">
            
            {/* Blurred Background */}
            <div className="absolute inset-0 z-0">
                <img 
                    src={heroImage} 
                    alt="About Hero Background" 
                    className="w-full h-full object-cover filter blur-[60px] scale-110 opacity-60"
                />
            </div>

            {/* Center Clear Box */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 w-[90%] md:w-[75%] lg:w-[1000px] xl:w-[1100px] aspect-[16/9] mt-16"
            >
                <img 
                    src={heroImage} 
                    alt="About Hero Center" 
                    className="w-full h-full object-cover rounded-sm shadow-2xl"
                />
                
                {/* Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h1 className="text-white text-4xl md:text-6xl lg:text-[80px] font-medium tracking-tight flex items-center gap-4">
                        <span className="text-white/50 text-2xl md:text-4xl">-</span>
                        <BlurText
                            text="We Are Here"
                            delay={30}
                            animateBy="words"
                            direction="bottom"
                            className="inline-block"
                        />
                        <span className="text-white/50 text-2xl md:text-4xl">-</span>
                    </h1>
                </div>

                {/* Bottom Left / Right Small text inside the clear box */}
                <div className="absolute bottom-4 left-6 flex items-center gap-2 text-white/70 text-[10px] md:text-[12px] font-bold tracking-widest uppercase">
                    (EST. 2025)
                </div>
                <div className="absolute bottom-4 right-6 flex items-center gap-2 text-white/70 text-[10px] md:text-[12px] font-bold tracking-widest uppercase">
                    SCROLL
                </div>
            </motion.div>

        </section>
    );
};

export default AboutHero;
