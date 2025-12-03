import React from 'react';

/**
 * Animated Background Component
 * Modern dot matrix background inspired by Aceternity UI
 */
const AnimatedBackground = React.memo(() => {
    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none bg-slate-950 will-change-transform">
            {/* Dot grid pattern */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `radial-gradient(circle, rgba(139, 92, 246, 0.15) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Radial gradient overlay - center glow */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)'
                }}
            />
        </div>
    );
});

AnimatedBackground.displayName = 'AnimatedBackground';

export default AnimatedBackground;
