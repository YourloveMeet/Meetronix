import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { pageTransition } from '../../utils/animations';

/**
 * Page Transition Wrapper Component
 * Wraps page content with smooth enter/exit animations
 */
const PageTransition = ({ children }) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                variants={pageTransition}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default PageTransition;
