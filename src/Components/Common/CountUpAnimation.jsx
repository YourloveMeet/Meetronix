import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

/**
 * Count Up Animation Component
 * Animates numbers from 0 to target value
 */
const CountUpAnimation = ({
    end = 100,
    duration = 2,
    suffix = '',
    prefix = '',
    decimals = 0,
    className = ''
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const count = useSpring(0, { duration: duration * 1000 });
    const rounded = useTransform(count, (latest) =>
        (prefix + latest.toFixed(decimals) + suffix)
    );

    useEffect(() => {
        if (isVisible) {
            count.set(end);
        }
    }, [isVisible, end, count]);

    useEffect(() => {
        // Trigger animation on mount
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.span className={className}>
            {rounded}
        </motion.span>
    );
};

export default CountUpAnimation;
