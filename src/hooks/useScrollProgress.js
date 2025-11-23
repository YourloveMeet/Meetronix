import { useState, useEffect } from 'react';

/**
 * Custom hook to track scroll progress
 * Returns a value between 0 and 1 representing scroll position
 */
export const useScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollPx = document.documentElement.scrollTop;
            const winHeightPx =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const scrolled = scrollPx / winHeightPx;

            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', updateScrollProgress); updateScrollProgress();

        return () => {
            window.removeEventListener('scroll', updateScrollProgress);
        };
    }, []);

    return scrollProgress;
};
