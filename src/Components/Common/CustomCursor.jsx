import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isTouchDevice, setIsTouchDevice] = useState(true);

    useEffect(() => {
        const checkTouch = () => ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
        setIsTouchDevice(checkTouch());
        
        if (!checkTouch()) {
            const style = document.createElement('style');
            style.innerHTML = `* { cursor: none !important; }`;
            document.head.appendChild(style);
            return () => document.head.removeChild(style);
        }
    }, []);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Super smooth buttery spring physics
    const springConfig = { damping: 28, stiffness: 200, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (isTouchDevice) return;

        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            // Find if the target or its parents are clickable elements
            const isClickable = e.target.closest('a, button, input, textarea, select, [role="button"], .clickable, [tabindex="0"]');
            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [isTouchDevice, cursorX, cursorY]);

    if (isTouchDevice) return null;

    return (
        <>
            {/* Outer trailing premium glowing orb */}
            <motion.div
                className="fixed top-0 left-0 w-20 h-20 rounded-full pointer-events-none z-[9999] flex items-center justify-center"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                    background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.25), rgba(153, 27, 27, 0.25))',
                    backdropFilter: 'blur(5px)',
                    WebkitBackdropFilter: 'blur(5px)',
                    border: '1px solid rgba(220, 38, 38, 0.5)',
                    boxShadow: '0 0 30px rgba(185, 28, 28, 0.25)'
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    background: isHovering 
                        ? 'linear-gradient(135deg, rgba(220, 38, 38, 0.6), rgba(153, 27, 27, 0.6))' 
                        : 'linear-gradient(135deg, rgba(220, 38, 38, 0.25), rgba(153, 27, 27, 0.25))',
                    borderColor: isHovering ? 'rgba(220, 38, 38, 0.9)' : 'rgba(220, 38, 38, 0.5)',
                    boxShadow: isHovering ? '0 0 50px rgba(220, 38, 38, 0.5)' : '0 0 30px rgba(185, 28, 28, 0.25)'
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
            />
            {/* Inner responsive sharp gradient dot */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[10000]"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                    background: 'linear-gradient(135deg, #dc2626, #991b1b)',
                    boxShadow: '0 0 12px rgba(220, 38, 38, 0.9)'
                }}
                animate={{
                    scale: isHovering ? 0 : 1,
                    opacity: isHovering ? 0 : 1,
                }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
            />
        </>
    );
};

export default CustomCursor;
