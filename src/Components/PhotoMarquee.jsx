import React from 'react';
import { motion } from 'framer-motion';

const photos = [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542206395-9feb3edaa68d?q=80&w=600&auto=format&fit=crop"
];

// Applying slight CSS filters to match the colorful tinted look of the screenshot
const tints = [
    "sepia(50%) hue-rotate(330deg) saturate(200%) contrast(120%)", // Orange/Warm
    "sepia(30%) hue-rotate(180deg) saturate(150%) contrast(110%)", // Cool/Teal
    "sepia(60%) hue-rotate(100deg) saturate(200%) contrast(130%)", // Green
    "sepia(40%) hue-rotate(280deg) saturate(180%) contrast(120%)", // Purple/Red
    "sepia(20%) hue-rotate(30deg) saturate(160%) contrast(110%)", // Natural warm
    "sepia(50%) hue-rotate(340deg) saturate(250%) contrast(140%)" // Deep Orange
];

const PhotoMarquee = () => {
    return (
        <section className="relative z-20 w-full bg-[#111] overflow-hidden pt-12 md:pt-16 pb-12 md:pb-16 border-y border-white/10">
            
            {/* Top Bar inside the dark section */}
            <div className="container-custom mx-auto max-w-[1440px] px-6 md:px-[5%] pb-8 flex justify-between text-[11px] font-bold tracking-widest text-white/50 uppercase">
                <span>(01)</span>
                <span>Team & Culture</span>
                <span>(025)</span>
            </div>

            <div className="w-full flex">
                <motion.div 
                    className="flex min-w-full"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                >
                    {/* Double the array for seamless infinite marquee */}
                    {[...photos, ...photos].map((photo, index) => (
                        <div key={index} className="w-[200px] md:w-[300px] lg:w-[16.666vw] aspect-[3/4] shrink-0 border-r border-white/10 relative group overflow-hidden">
                            <img 
                                src={photo} 
                                alt="Team Culture" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                style={{ filter: tints[index % tints.length] }}
                            />
                            {/* Dark overlay on hover */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                                <span className="text-white text-[10px] font-bold tracking-widest uppercase">View Profile</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

        </section>
    );
};

export default PhotoMarquee;
