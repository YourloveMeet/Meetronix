import React from 'react';

/**
 * Animated Background Component
 * Modern dot matrix background inspired by Aceternity UI
 */
const AnimatedBackground = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none bg-slate-950">
            {/* Dot grid pattern */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `radial-gradient(circle, rgba(139, 92, 246, 0.15) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Larger dot grid - creates depth */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.2) 2px, transparent 2px)`,
                    backgroundSize: '80px 80px'
                }}
            />

            {/* Radial gradient overlay - center glow */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)'
                }}
            />

            {/* Top gradient fade */}
            <div
                className="absolute top-0 left-0 w-full h-1/3"
                style={{
                    background: 'linear-gradient(to bottom, rgba(30, 27, 75, 0.5) 0%, transparent 100%)'
                }}
            />

            {/* Bottom gradient fade */}
            <div
                className="absolute bottom-0 left-0 w-full h-1/3"
                style={{
                    background: 'linear-gradient(to top, rgba(30, 27, 75, 0.5) 0%, transparent 100%)'
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
