import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
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
        <section className="relative min-h-[90vh] flex items-center pt-20 pb-12 overflow-hidden bg-cream selection:bg-terracotta selection:text-white">
            {/* Background Texture & Blobs */}
            <div className="absolute inset-0 noise-texture pointer-events-none opacity-[0.03]" />
            <div className="absolute top-[-5%] right-[-5%] w-[450px] h-[450px] bg-terracotta animate-blob opacity-[0.05] blur-[120px] rounded-full" />
            <div className="absolute bottom-[10%] left-[-5%] w-[350px] h-[350px] bg-terra-muted animate-blob opacity-[0.12] blur-[100px] rounded-full" />

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
                        <span className="w-2 h-2 rounded-full bg-terracotta animate-pulse" />
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
                        <button className="btn-primary flex items-center gap-3">
                            Explore Works <ArrowRight size={18} />
                        </button>
                        <button className="btn-secondary">
                            Get In Touch
                        </button>
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
                    className="relative hidden lg:block"
                >
                    <div className="relative z-10 p-6 glass-card bg-warm-white/40 transition-all duration-700 group shadow-xl">
                        <div className="aspect-[16/10] rounded-2xl overflow-hidden relative border border-border/20">
                            <img 
                                src={featuredProject.image} 
                                alt={featuredProject.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-charcoal/5" />
                            
                            <div className="absolute inset-x-4 bottom-4 p-5 glass-card bg-white/95 backdrop-blur-2xl border-white/40 rounded-xl">
                                <div className="flex items-center gap-2 mb-2">
                                    <Sparkles size={12} className="text-terracotta" />
                                    <span className="text-[9px] uppercase tracking-[0.2em] text-terracotta font-bold">Latest Case Study</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-display text-text-primary">{featuredProject.title}</h3>
                                    <ArrowRight size={16} className="text-terracotta opacity-40 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Decorative Blobs */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-terracotta/5 rounded-full blur-3xl" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-terra-muted/10 rounded-full blur-3xl" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
