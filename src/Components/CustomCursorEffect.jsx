import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const CustomCursorEffect = () => {
    const mouseX = useMotionValue(-1000);
    const mouseY = useMotionValue(-1000);
    const velocityX = useMotionValue(0);
    const velocityY = useMotionValue(0);

    // Extremely smooth spring physics for the cursor container
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        let lastTime = performance.now();
        let lastX = -1000;
        let lastY = -1000;

        const handleMouseMove = (e) => {
            const now = performance.now();
            const dt = Math.max(1, now - lastTime);
            
            // Calculate velocity for pupil movement
            if (lastX !== -1000) {
                const vx = ((e.clientX - lastX) / dt) * 10;
                const vy = ((e.clientY - lastY) / dt) * 10;
                velocityX.set(vx);
                velocityY.set(vy);
            }

            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            
            lastX = e.clientX;
            lastY = e.clientY;
            lastTime = now;
        };
        
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        
        // Decay velocity back to 0 when mouse stops
        const interval = setInterval(() => {
            velocityX.set(velocityX.get() * 0.8);
            velocityY.set(velocityY.get() * 0.8);
        }, 16);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(interval);
        };
    }, [mouseX, mouseY, velocityX, velocityY]);

    // Spring physics for the pupil to smoothly follow velocity
    const pupilXSpring = useSpring(velocityX, { damping: 15, stiffness: 200 });
    const pupilYSpring = useSpring(velocityY, { damping: 15, stiffness: 200 });

    // Limit pupil movement range (max 10px in any direction)
    const pupilX = useTransform(pupilXSpring, [-50, 50], [-10, 10]);
    const pupilY = useTransform(pupilYSpring, [-50, 50], [-6, 6]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
            <motion.div 
                className="absolute top-0 left-0 flex items-center justify-center rounded-full"
                style={{ 
                    x: cursorX, 
                    y: cursorY,
                    // Center the 120px cursor precisely on the mouse
                    translateX: "-50%",
                    translateY: "-50%",
                    width: "120px",
                    height: "120px",
                    // Glassy purple lens effect matching the screenshot
                    backgroundColor: "rgba(169, 145, 196, 0.4)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.1)"
                }}
            >
                {/* The Eye SVG */}
                <div className="relative w-[60px] h-[36px]">
                    <svg viewBox="0 0 100 60" className="w-full h-full overflow-visible">
                        <defs>
                            <clipPath id="eye-clip">
                                <path d="M 0 30 Q 50 -10 100 30 Q 50 70 0 30 Z" />
                            </clipPath>
                        </defs>
                        
                        {/* Outer eye shape (Almond) */}
                        <path 
                            d="M 0 30 Q 50 -10 100 30 Q 50 70 0 30 Z" 
                            fill="none" 
                            stroke="#1a1a1a" 
                            strokeWidth="4"
                            strokeLinejoin="round"
                        />
                        
                        {/* Iris (Green circle clipped by the eye shape) */}
                        <g clipPath="url(#eye-clip)">
                            <motion.circle 
                                cx="50" 
                                cy="30" 
                                r="22" 
                                fill="#748f5a" 
                                stroke="#1a1a1a"
                                strokeWidth="3"
                                style={{ x: pupilX, y: pupilY }}
                            />
                            {/* Inner pupil (Transparent hole matching lens color) */}
                            <motion.circle 
                                cx="50" 
                                cy="30" 
                                r="10" 
                                fill="rgba(169, 145, 196, 0.8)" 
                                stroke="#1a1a1a"
                                strokeWidth="3"
                                style={{ x: pupilX, y: pupilY }}
                            />
                        </g>
                    </svg>
                </div>
            </motion.div>
        </div>
    );
};

export default CustomCursorEffect;
