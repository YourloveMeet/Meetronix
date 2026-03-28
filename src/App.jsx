import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AnimatedBackground from './Components/Common/AnimatedBackground';
import ScrollToTop from './Components/Common/ScrollToTop';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Services = lazy(() => import('./pages/Services'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const HireMe = lazy(() => import('./pages/HireMe'));

// Loading component
const PageLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="w-8 h-8 border-2 border-terracotta/20 border-t-terracotta rounded-full animate-spin" />
    </div>
);

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-cream text-text-primary relative overflow-hidden selection:bg-terracotta selection:text-white">
                <ScrollToTop />
                <AnimatedBackground />
                <Navbar />

                <main className="relative z-10">
                    <Suspense fallback={<PageLoader />}>
                        <AnimatePresence mode="wait">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/portfolio" element={<Portfolio />} />
                                <Route path="/services" element={<Services />} />
                                <Route path="/blog" element={<Blog />} />
                                <Route path="/blog/:slug" element={<BlogPost />} />
                                <Route path="/hire-me" element={<HireMe />} />
                            </Routes>
                        </AnimatePresence>
                    </Suspense>
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
