import React from 'react';
import { motion } from 'framer-motion';

/**
 * Animated Background Component
 * Optimized gradient orbs with minimal performance impact
 */
const AnimatedBackground = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            {/* Main Gradient Orbs - Reduced to 3 for performance */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px]"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[120px]"
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />

            <motion.div
                className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-indigo-500/20 rounded-full blur-[120px]"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.25, 0.15]
                }}
                transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4
                }}
            />

            {/* Grid pattern overlay - Static for better performance */}
            <div className="absolute inset-0 grid-pattern opacity-20" />
        </div>
    );
};

export default AnimatedBackground;
