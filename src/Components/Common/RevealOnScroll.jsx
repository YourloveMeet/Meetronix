import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { fadeInUp } from '../../utils/animations';

/**
 * Reveal On Scroll Component
 * Triggers animations when element enters viewport
 */
const RevealOnScroll = ({
    children,
    variant = fadeInUp,
    threshold = 0.1,
    triggerOnce = true,
    className = ''
}) => {
    const [ref, inView] = useInView({
        threshold,
        triggerOnce
    });

    return (
        <motion.div
            ref={ref}
            variants={variant}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default RevealOnScroll;
