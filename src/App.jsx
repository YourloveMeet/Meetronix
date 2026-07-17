import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Footer from './Components/Footer';
import ScrollToTop from './Components/Common/ScrollToTop';
import CustomCursor from './Components/Common/CustomCursor';
import Navbar from './Components/Navbar';
import Preloader from './Components/Common/Preloader';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const LeadershipPage = lazy(() => import('./pages/LeadershipPage'));
const Contact = lazy(() => import('./pages/Contact'));
// const Services = lazy(() => import('./pages/Services'));
// const Blog = lazy(() => import('./pages/Blog'));
// const BlogPost = lazy(() => import('./pages/BlogPost'));

// Loading component
const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-[#0d0d0d]">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
    </div>
);

const SmoothScroll = ({ children }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 3,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        window.lenis = lenis; // Expose globally for modals to pause scrolling

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            delete window.lenis;
        };
    }, []);

    return children;
};

function App() {
    const [loading, setLoading] = useState(true);

    return (
        <SmoothScroll>
            <AnimatePresence>
                {loading && <Preloader onComplete={() => setLoading(false)} />}
            </AnimatePresence>
            <CustomCursor />
            <Router>
                <div className="min-h-screen bg-[#0d0d0d] text-white relative selection:bg-[#b9ff66] selection:text-black">
                    
                    {/* Global Cinematic Film Noise Overlay */}
                    <div 
                        className="fixed inset-0 z-[100] opacity-[0.12] pointer-events-none mix-blend-overlay" 
                        style={{ 
                            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' 
                        }}>
                    </div>

                    <ScrollToTop />
                    <Navbar />
                    <main className="relative z-10">
                        <Suspense fallback={<PageLoader />}>
                            <AnimatePresence mode="wait">
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/about" element={<AboutPage />} />
                                    <Route path="/portfolio" element={<Portfolio />} />
                                    <Route path="/leadership" element={<LeadershipPage />} />
                                    <Route path="/contact" element={<Contact />} />
                                </Routes>
                            </AnimatePresence>
                        </Suspense>
                    </main>

                    {/* <Footer /> */}
                </div>
            </Router>
        </SmoothScroll>
    );
}

export default App;
