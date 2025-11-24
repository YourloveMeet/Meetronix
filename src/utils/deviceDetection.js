import { useState, useEffect } from 'react';

/**
 * Device Detection Utilities
 * Helps optimize performance based on device capabilities
 */

// Check if user is on a mobile or tablet device
export const isMobileDevice = () => {
    if (typeof window === 'undefined') return false;

    // Check user agent
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;

    // Also check screen width and touch capability
    const hasSmallScreen = window.innerWidth <= 768;
    const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    return mobileRegex.test(userAgent.toLowerCase()) || (hasSmallScreen && hasTouchScreen);
};

// Check if user prefers reduced motion
export const shouldReduceMotion = () => {
    if (typeof window === 'undefined') return false;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    return mediaQuery.matches;
};

// Detect low-end devices based on hardware concurrency
export const isLowEndDevice = () => {
    if (typeof window === 'undefined') return false;

    // Check CPU cores (less than 4 cores = low-end)
    const cores = navigator.hardwareConcurrency || 4;

    // Check device memory if available (less than 4GB = low-end)
    const memory = navigator.deviceMemory || 4;

    return cores < 4 || memory < 4;
};

// React hook for device type detection
export const useDeviceType = () => {
    const [deviceType, setDeviceType] = useState({
        isMobile: false,
        reduceMotion: false,
        isLowEnd: false,
        initialized: false
    });

    useEffect(() => {
        const updateDeviceType = () => {
            setDeviceType({
                isMobile: isMobileDevice(),
                reduceMotion: shouldReduceMotion(),
                isLowEnd: isLowEndDevice(),
                initialized: true
            });
        };

        // Initial check
        updateDeviceType();

        // Listen for resize to update mobile status
        window.addEventListener('resize', updateDeviceType);

        // Listen for reduced motion preference changes
        const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (motionQuery.addEventListener) {
            motionQuery.addEventListener('change', updateDeviceType);
        }

        return () => {
            window.removeEventListener('resize', updateDeviceType);
            if (motionQuery.removeEventListener) {
                motionQuery.removeEventListener('change', updateDeviceType);
            }
        };
    }, []);

    return deviceType;
};

// Get optimal animation settings based on device
export const getAnimationSettings = () => {
    const isMobile = isMobileDevice();
    const reducedMotion = shouldReduceMotion();
    const lowEnd = isLowEndDevice();

    return {
        // Disable animations entirely if reduced motion is preferred
        disableAnimations: reducedMotion,

        // Use simpler animations on mobile/low-end devices
        useSimpleAnimations: isMobile || lowEnd,

        // Reduce blur effects on mobile
        blurAmount: isMobile ? 'blur-[60px]' : 'blur-[120px]',

        // Increase animation duration on mobile (slower = less CPU intensive)
        durationMultiplier: isMobile || lowEnd ? 1.5 : 1,

        // Reduce number of animated elements
        maxAnimatedElements: isMobile || lowEnd ? 2 : 3,
    };
};
