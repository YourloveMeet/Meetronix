import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowUp, Instagram, Mail, Layout } from 'lucide-react';
import { personalData } from '../data/personalData';
import { navLinks, footerData } from '../data/navigationData';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-cream-dark pt-24 pb-12 border-t border-border/40 selection:bg-terracotta selection:text-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-terracotta opacity-[0.03] blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
            
            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 mb-20">
                    {/* Left: Branding & Tagline */}
                    <div className="space-y-10">
                        <div className="space-y-6">
                            <h2 className="text-5xl md:text-7xl font-display text-text-primary tracking-tighter">
                                Let's build the<br/>
                                <span className="text-terracotta font-normal">extraordinary.</span>
                            </h2>
                            <p className="text-lg font-sans font-light text-text-secondary leading-relaxed max-w-md">
                                Developing digital products for founders who value engineering resilience and modern aesthetics.
                            </p>
                        </div>
                        
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
                            <a href={`mailto:${personalData.email}`} className="group flex flex-col">
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted mb-1">Direct Communication</span>
                                <span className="text-lg font-display text-text-primary group-hover:text-terracotta transition-colors border-b-2 border-transparent group-hover:border-terracotta/20 pb-1">
                                    {personalData.email}
                                </span>
                            </a>
                            <a href={`tel:${personalData.phone}`} className="group flex flex-col">
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted mb-1">WhatsApp / Call</span>
                                <span className="text-lg font-display text-text-primary group-hover:text-terracotta transition-colors border-b-2 border-transparent group-hover:border-terracotta/20 pb-1">
                                    {personalData.phone}
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right: Navigation Links */}
                    <div className="grid grid-cols-2 gap-12 lg:pl-20">
                        <div className="space-y-8">
                            <h4 className="text-[11px] font-bold uppercase tracking-[.4em] text-text-muted underline decoration-terracotta/20 underline-offset-8">Explore</h4>
                            <ul className="space-y-4">
                                {navLinks.map((link, idx) => (
                                    <li key={idx}>
                                        <Link to={link.path} className="text-[12px] font-bold uppercase tracking-widest text-text-primary hover:text-terracotta transition-colors block py-1">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div className="space-y-8">
                            <h4 className="text-[11px] font-bold uppercase tracking-[.4em] text-text-muted underline decoration-terracotta/20 underline-offset-8">Social Connect</h4>
                            <ul className="space-y-4">
                                <li>
                                    <a href={personalData.github} target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-widest text-text-primary hover:text-terracotta transition-colors flex items-center gap-2">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a href={personalData.linkedin} target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-widest text-text-primary hover:text-terracotta transition-colors flex items-center gap-2">
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href={personalData.instagram} target="_blank" rel="noreferrer" className="text-sm font-bold uppercase tracking-widest text-text-primary hover:text-terracotta transition-colors flex items-center gap-2">
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-border/20 gap-8">
                    <div className="flex items-center gap-6">
                        <div className="px-4 py-1.5 bg-terracotta text-white rounded-full text-[9px] font-bold uppercase tracking-widest">
                            Established 2020
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-[.4em] text-text-muted">© {new Date().getFullYear()} Meetronix</span>
                    </div>

                    <button 
                        onClick={scrollToTop}
                        className="group flex items-center gap-4 text-[10px] font-bold uppercase tracking-[.4em] text-text-muted hover:text-terracotta transition-colors"
                    >
                        Back to Top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                    
                    <div className="text-[10px] font-bold uppercase tracking-[.4em] text-text-muted">
                        Ahmedabad / Remote / Worldwide
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
