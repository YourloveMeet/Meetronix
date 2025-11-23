import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Components/Navbar';
import ScrollProgress from './Components/Common/ScrollProgress';
import AnimatedBackground from './Components/Common/AnimatedBackground';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Services = lazy(() => import('./pages/Services'));
const Blog = lazy(() => import('./pages/Blog'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="spinner" />
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark text-white relative overflow-hidden">
        {/* Animated Background */}
        <AnimatedBackground />

        {/* Scroll Progress */}
        <ScrollProgress />

        {/* Navigation */}
        <Navbar />

        {/* Main Content with Page Transitions */}
        <main className="relative z-10">
          <Suspense fallback={<PageLoader />}>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/services" element={<Services />} />
                <Route path="/blog" element={<Blog />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </main>

        {/* Footer */}
        <footer className="relative z-10 py-12 text-center glass border-t border-white/10 mt-20">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold gradient-text mb-4">Meetronix</h3>
                <p className="text-slate-400">
                  Crafting digital experiences that inspire and innovate.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
                <div className="space-y-2">
                  {['About', 'Portfolio', 'Services', 'Blog'].map((link) => (
                    <a
                      key={link}
                      href={`/${link.toLowerCase()}`}
                      className="block text-slate-400 hover:text-accent transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-accent">Connect</h4>
                <div className="space-y-2 text-slate-400">
                  <p>Email: contact@meetronix.com</p>
                  <p>Location: Remote / Worldwide</p>
                </div>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8">
              <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} Meetronix. All rights reserved. Built with ❤️ and React
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;


