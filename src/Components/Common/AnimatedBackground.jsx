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
                    x: [0, 15, 0],
                    y: [0, -15, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -top-[5%] -right-[5%] w-[40%] h-[40%] rounded-full bg-terracotta/[0.03] blur-[100px]"
                style={{ willChange: 'transform' }}
            />

            {/* Bottom Left Blob */}
            <motion.div
                animate={{
                    x: [0, -10, 0],
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute -bottom-[5%] -left-[5%] w-[50%] h-[50%] rounded-full bg-terra-muted/[0.05] blur-[120px]"
                style={{ willChange: 'transform' }}
            />
        </div>
    );
});

AnimatedBackground.displayName = 'AnimatedBackground';

export default AnimatedBackground;
