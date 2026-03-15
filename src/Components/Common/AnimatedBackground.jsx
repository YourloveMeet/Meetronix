import React from 'react';
import { motion } from 'framer-motion';

/**
 * Animated Background Component
 * Warm cream base with subtle terracotta blobs and paper texture
 */
const AnimatedBackground = React.memo(() => {
    return (
        <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none bg-cream noise-texture">
            {/* Top Right Blob */}
            <motion.div
                animate={{
                    x: [0, 30, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-[5%] -right-[5%] w-[40%] h-[40%] rounded-full bg-terracotta/[0.04] blur-[80px]"
            />

            {/* Bottom Left Blob */}
            <motion.div
                animate={{
                    x: [0, -20, 0],
                    y: [0, 20, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -bottom-[5%] -left-[5%] w-[50%] h-[50%] rounded-full bg-terra-muted/[0.08] blur-[90px]"
            />
        </div>
    );
});

AnimatedBackground.displayName = 'AnimatedBackground';

export default AnimatedBackground;
