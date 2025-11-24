import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Magnetic Button Component
 * Button that follows the cursor with magnetic effect (desktop only)
 * Disabled on mobile for better performance
 */
const MagneticButton = ({ children, className = '', ...props }) => {
    const buttonRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile devices
    useEffect(() => {
        const checkMobile = () => {
            const mobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || window.innerWidth <= 768;
            setIsMobile(mobile);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMouseMove = (e) => {
        // Skip on mobile
        if (isMobile || !buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Magnetic effect strength (reduced for better performance)
        const strength = 0.2;
        setPosition({ x: x * strength, y: y * strength });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.button
            ref={buttonRef}
            className={`${isMobile ? '' : 'magnetic-button'} ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={isMobile ? {} : { x: position.x, y: position.y }}
            transition={isMobile ? {} : { type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
            whileHover={isMobile ? {} : { scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default MagneticButton;
