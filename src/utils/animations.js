// Framer Motion Animation Variants Library
// Centralized animation configurations for consistent motion design

// Fade Animations
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
    }
};

export const fadeInDown = {
    hidden: { opacity: 0, y: -60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
    }
};

export const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
    }
};

export const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
    }
};

// Scale Animations
export const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    }
};

export const scaleUp = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20
        }
    }
};

// Stagger Container
export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const staggerFastContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1
        }
    }
};

// Slide Animations
export const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

export const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

// Page Transitions
export const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
            ease: "easeIn"
        }
    }
};

export const pageSlideTransition = {
    initial: { opacity: 0, x: 100 },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    },
    exit: {
        opacity: 0,
        x: -100,
        transition: {
            duration: 0.4,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    }
};

// Hover Animations
export const hoverScale = {
    scale: 1.05,
    transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
    }
};

export const hoverLift = {
    y: -8,
    transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
    }
};

// Tap Animation
export const tapScale = {
    scale: 0.95
};

// Spring Configurations
export const springConfig = {
    type: "spring",
    stiffness: 260,
    damping: 20
};

export const softSpring = {
    type: "spring",
    stiffness: 100,
    damping: 15
};

export const bouncySpring = {
    type: "spring",
    stiffness: 400,
    damping: 10
};

// Rotate Animations
export const rotateIn = {
    hidden: { opacity: 0, rotate: -180, scale: 0 },
    visible: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 15
        }
    }
};

// Flip Animations
export const flipIn = {
    hidden: { opacity: 0, rotateY: -90 },
    visible: {
        opacity: 1,
        rotateY: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

// Text Animations
export const textReveal = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

export const letterAnimation = {
    hidden: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0
    }
};

// Card Animations  
export const cardHover = {
    rest: {
        scale: 1,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    },
    hover: {
        scale: 1.02,
        y: -8,
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

// Menu Animations
export const menuSlide = {
    closed: {
        x: "100%",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    },
    open: {
        x: 0,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

export const menuItemVariants = {
    closed: {
        opacity: 0,
        x: 50
    },
    open: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            type: "spring",
            stiffness: 300,
            damping: 24
        }
    })
};

// Reveal Animation
export const revealFromBottom = {
    hidden: {
        opacity: 0,
        y: 100,
        clipPath: "inset(100% 0 0 0)"
    },
    visible: {
        opacity: 1,
        y: 0,
        clipPath: "inset(0% 0 0 0)",
        transition: {
            duration: 0.8,
            ease: [0.6, 0.05, 0.01, 0.9]
        }
    }
};

export const drawPath = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 0.5 }
        }
    }
};
