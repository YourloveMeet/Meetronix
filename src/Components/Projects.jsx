import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import RevealOnScroll from './Common/RevealOnScroll';

const Projects = () => {
    // Show only the top 3 featured projects on Home
    const featuredProjects = projectsData.slice(0, 3);

    return (
        <section className="section-padding bg-cream overflow-hidden" id="projects">
            <div className="container-custom">
                <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <RevealOnScroll>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-[10px] uppercase tracking-[.4em] font-bold text-terracotta">Selected Works</span>
                            <div className="w-12 h-[1px] bg-border" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-display text-text-primary leading-tight tracking-tight">
                            Elite Showcase
                        </h2>
                    </RevealOnScroll>
                    
                    <RevealOnScroll>
                        <Link to="/portfolio" className="group flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.4em] text-text-primary hover:text-terracotta transition-colors">
                            View Full Archive <div className="w-10 h-[1px] bg-text-primary group-hover:bg-terracotta group-hover:w-14 transition-all" />
                        </Link>
                    </RevealOnScroll>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            onClick={() => {
                                if (project.liveUrl) {
                                    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                                }
                            }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-video bg-cream-dark overflow-hidden rounded-3xl mb-6 shadow-sm border border-border/20">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    style={{ willChange: 'transform' }}
                                />
                                <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-transparent transition-colors duration-700" />
                                
                                <div className="absolute bottom-6 left-6 right-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="glass-card p-4 bg-white/90 backdrop-blur-2xl border-white/20 rounded-2xl">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-text-primary">
                                                {project.liveUrl ? 'Launch Project' : 'View Case Study'}
                                            </span>
                                            <ArrowRight size={16} className="text-terracotta" />
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-6 left-6">
                                    <div className="px-4 py-1.5 glass-card bg-warm-white/60 backdrop-blur-xl text-[9px] font-bold tracking-[.3em] uppercase text-text-primary rounded-full border border-white/40">
                                        {project.category}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 px-2">
                                <div className="flex items-center gap-2">
                                    <Sparkles size={14} className="text-terracotta opacity-40" />
                                    <h3 className="text-2xl font-display text-text-primary tracking-tight">{project.title}</h3>
                                </div>
                                <p className="text-sm font-sans font-light text-text-secondary leading-relaxed line-clamp-2">
                                    {project.subtitle || project.description}
                                </p>
                                <div className="flex flex-wrap gap-3 pt-2">
                                    {project.technologies.slice(0, 3).map((tech, i) => (
                                        <span key={i} className="text-[9px] uppercase tracking-widest text-text-muted font-bold px-3 py-1 bg-cream-dark rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
