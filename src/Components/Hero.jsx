import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalData } from '../data/personalData';
import { projectsData } from '../data/projectsData';

const Hero = () => {
    const featuredProject = projectsData.find(p => p.id === 'fauna-rituals') || projectsData[0];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 lg:pt-28 pb-12 overflow-hidden bg-cream selection:bg-terracotta selection:text-white">
            {/* Background Texture & Blobs */}
            <div className="absolute inset-0 noise-texture pointer-events-none opacity-[0.03]" />
            <div className="absolute top-[-5%] right-[-5%] w-[450px] h-[450px] bg-terracotta opacity-[0.02] blur-[150px] rounded-full" />
            <div className="absolute bottom-[10%] left-[-5%] w-[350px] h-[350px] bg-terra-muted opacity-[0.05] blur-[120px] rounded-full" />

            <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

                {/* Left Content */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Availability Badge */}
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center gap-2.5 px-6 py-2 rounded-full bg-terra-muted/20 border border-terracotta/10 mb-8"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
                        <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-terra-dark">
                            {personalData.availability}
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-[52px] md:text-[80px] lg:text-[92px] font-display leading-[1] text-text-primary mb-6 tracking-tight"
                    >
                        Building premium digital <span className="text-terracotta font-normal">experiences.</span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        variants={itemVariants}
                        className="text-[18px] md:text-[20px] font-sans font-light text-text-secondary mb-10 max-w-[540px] leading-relaxed"
                    >
                        {personalData.subtagline}
                    </motion.p>

                    {/* CTA Row */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap gap-4"
                    >
                        <Link to="/portfolio">
                            <button className="btn-primary flex items-center gap-3">
                                Explore Works <ArrowRight size={18} />
                            </button>
                        </Link>
                        <Link to="/hire-me">
                            <button className="btn-secondary">
                                Get In Touch
                            </button>
                        </Link>
                    </motion.div>

                    {/* Meta Stats Row */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 pt-8 border-t border-border/20 flex gap-10"
                    >
                        <div className="flex flex-col">
                            <span className="text-2xl font-display text-text-primary tracking-tight">37+</span>
                            <span className="text-[9px] font-bold uppercase tracking-widest text-text-muted">Projects</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-display text-text-primary tracking-tight">4.7yr</span>
                            <span className="text-[9px] font-bold uppercase tracking-widest text-text-muted">Industry Hub</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-display text-text-primary tracking-tight">5★</span>
                            <span className="text-[9px] font-bold uppercase tracking-widest text-text-muted">Satisfaction</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Floating Card */}
                <motion.div
                    initial={{ opacity: 0, x: 40, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: 0.6, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative hidden lg:block group"
                >
                    <a 
                        href={featuredProject.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block cursor-pointer"
                    >
                        {/* Main Card */}
                        <div className="relative z-10 p-5 glass-card bg-warm-white/20 backdrop-blur-3xl border-white/20 transition-all duration-700 shadow-2xl rounded-[32px] overflow-hidden group-hover:shadow-terracotta/10">
                            <div className="aspect-[16/10] rounded-[24px] overflow-hidden relative border border-white/10 mb-6">
                                <img 
                                    src={featuredProject.image} 
                                    alt={featuredProject.title}
                                    loading="eager"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    style={{ willChange: 'transform' }}
                                />
                                {/* Sophisticated Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-80" />
                                
                                {/* Metadata Badge */}
                                <div className="absolute top-4 right-4">
                                    <div className="px-3 py-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-[8px] font-bold tracking-[.3em] uppercase text-white/80">
                                        Project Ref. 001
                                    </div>
                                </div>
                            </div>

                            {/* Card Content Cluster */}
                            <div className="px-2 pb-2">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-6 h-[1px] bg-terracotta/40" />
                                    <div className="flex items-center gap-2">
                                        <Sparkles size={12} className="text-terracotta font-bold" />
                                        <span className="text-[10px] uppercase tracking-[0.35em] text-terracotta font-bold">Latest Case Study</span>
                                    </div>
                                </div>
                                
                                <div className="flex items-center justify-between gap-6">
                                    <h3 className="text-3xl font-display text-text-primary tracking-tight leading-none group-hover:text-terracotta transition-colors duration-500">
                                        {featuredProject.title}
                                    </h3>
                                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-terracotta text-white transition-all duration-500 shadow-lg shadow-terracotta/20 group-hover:scale-110">
                                        <ArrowRight size={20} />
                                    </div>
                                </div>
                            </div>

                            {/* Subtle Reflection Layer */}
                            <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        </div>
                    </a>
                    
                    {/* Ambient Glow Elements */}
                    <div className="absolute -top-12 -right-12 w-44 h-44 bg-terracotta/10 rounded-full blur-[90px] animate-blob" />
                    <div className="absolute -bottom-12 -left-12 w-52 h-52 bg-terra-muted/10 rounded-full blur-[110px] animate-blob" style={{ animationDelay: '3s' }} />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
