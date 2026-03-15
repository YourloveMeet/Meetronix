import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ArrowRight, Sparkles } from 'lucide-react';
import { projectsData, categories } from '../data/projectsData';
import RevealOnScroll from '../Components/Common/RevealOnScroll';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = selectedCategory === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === selectedCategory);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedProject]);

    return (
        <div className="min-h-screen pt-40 pb-40 bg-cream overflow-hidden">
            <div className="container-custom">
                {/* Page Header */}
                <header className="mb-20">
                    <RevealOnScroll>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-[10px] uppercase tracking-[.4em] font-bold text-terracotta">Excellence Archive</span>
                            <div className="w-12 h-[1px] bg-border" />
                        </div>
                        <h1 className="text-6xl md:text-8xl font-display leading-[0.9] text-text-primary tracking-tighter mb-12">
                            Curated Works
                        </h1>
                    </RevealOnScroll>
                    
                    {/* Filter Tabs */}
                    <RevealOnScroll>
                        <div className="flex flex-wrap gap-2 md:gap-3 border-b border-border/20 pb-8">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`relative px-8 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 rounded-full ${
                                        selectedCategory === cat.id
                                        ? 'text-white'
                                        : 'text-text-muted hover:text-text-primary'
                                    }`}
                                >
                                    {selectedCategory === cat.id && (
                                        <motion.div 
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-terracotta rounded-full -z-10 shadow-lg shadow-terracotta/20"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </RevealOnScroll>
                </header>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                onClick={() => setSelectedProject(project)}
                                className="group cursor-pointer"
                            >
                                <div className="relative overflow-hidden aspect-[16/10] bg-cream-dark rounded-3xl shadow-sm border border-border/20">
                                    <img 
                                        src={project.image} 
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-transparent transition-colors duration-700" />
                                    
                                    <div className="absolute top-6 left-6">
                                        <div className="px-4 py-1.5 glass-card bg-warm-white/60 backdrop-blur-xl border-white/40 text-[9px] font-bold tracking-[.3em] uppercase text-text-primary rounded-full">
                                            {project.category}
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                        <div className="glass-card p-6 bg-white/95 backdrop-blur-2xl border-white/20 rounded-2xl">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-xl font-display text-text-primary">Expand Case Study</h3>
                                                <ArrowRight size={20} className="text-terracotta" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 space-y-2 px-2">
                                    <h2 className="text-3xl font-display text-text-primary tracking-tight">{project.title}</h2>
                                    <p className="text-sm font-sans font-light text-text-secondary leading-relaxed line-clamp-2">
                                        {project.subtitle || project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-3 pt-2">
                                        {project.technologies.slice(0, 4).map((tech, i) => (
                                            <span key={i} className="text-[9px] font-bold uppercase tracking-widest text-text-muted bg-warm-white px-3 py-1 rounded-full border border-border/40">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Project Modal Portal */}
                {ReactDOM.createPortal(
                    <AnimatePresence mode="wait">
                        {selectedProject && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-charcoal/80 backdrop-blur-xl z-[100] flex items-center justify-center p-4 md:p-8"
                                onClick={() => setSelectedProject(null)}
                            >
                                <motion.div
                                    initial={{ y: "100%", scale: 0.95 }}
                                    animate={{ y: 0, scale: 1 }}
                                    exit={{ y: "100%", scale: 0.95 }}
                                    transition={{ type: "spring", damping: 30, stiffness: 200 }}
                                    onClick={(e) => e.stopPropagation()}
                                    className="bg-cream w-full max-w-6xl h-full max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative border border-border/40 selection:bg-terracotta selection:text-white"
                                >
                                    <div className="sticky top-0 bg-cream/90 backdrop-blur-md z-30 px-6 py-4 border-b border-border/10 flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <span className="text-[10px] font-bold uppercase tracking-[.3em] text-terracotta">{selectedProject.category}</span>
                                            <div className="w-8 h-[1px] bg-border" />
                                            <span className="text-[10px] font-bold uppercase tracking-[.3em] text-text-muted">{selectedProject.title}</span>
                                        </div>
                                        <button 
                                            onClick={() => setSelectedProject(null)}
                                            className="p-2.5 rounded-full hover:bg-cream-dark transition-colors"
                                        >
                                            <X size={20} className="text-text-primary" />
                                        </button>
                                    </div>

                                    <div className="px-6 py-12 md:px-12 md:py-20 lg:py-24 max-w-5xl mx-auto">
                                        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
                                            <div className="space-y-8">
                                                <h2 className="text-5xl md:text-7xl font-display text-text-primary tracking-tighter">
                                                    {selectedProject.title}
                                                </h2>
                                                <p className="text-lg font-sans font-light text-text-secondary leading-relaxed">
                                                    {selectedProject.longDescription}
                                                </p>
                                                <div className="flex flex-wrap items-center gap-8 pt-4">
                                                    <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-widest text-terracotta hover:text-terra-dark transition-colors group">
                                                        Launch Project <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                                    </a>
                                                    {selectedProject.githubUrl && (
                                                        <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors group">
                                                            GitHub Source <Github size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="bg-warm-white p-10 rounded-3xl border border-border/20 shadow-sm">
                                                <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold block mb-8 underline decoration-terracotta/30 underline-offset-8">Tech Stack</span>
                                                <div className="flex flex-wrap gap-3">
                                                    {selectedProject.technologies.map((tech, i) => (
                                                        <div key={i} className="px-4 py-2 bg-cream-dark rounded-full text-[11px] font-bold text-text-primary">
                                                            {tech}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="aspect-video mb-20 rounded-3xl overflow-hidden shadow-xl">
                                            <img src={selectedProject.image} alt={project.title} className="w-full h-full object-cover" />
                                        </div>

                                        <div className="grid md:grid-cols-3 gap-8 mb-20">
                                            {[
                                                { label: "Challenge", text: selectedProject.challenge },
                                                { label: "Execution", text: selectedProject.solution },
                                                { label: "Impact", list: selectedProject.results }
                                            ].map((block, i) => (
                                                <div key={i} className="space-y-4 p-8 bg-warm-white rounded-3xl border border-border/20">
                                                    <h4 className="text-[10px] font-bold uppercase tracking-[.4em] text-terracotta">{block.label}</h4>
                                                    {block.text && <p className="text-sm font-sans font-light text-text-secondary leading-relaxed">{block.text}</p>}
                                                    {block.list && (
                                                        <ul className="space-y-3">
                                                            {block.list.map((item, j) => (
                                                                <li key={j} className="text-sm font-sans font-light text-text-secondary flex items-start gap-2">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-terracotta mt-1.5 shrink-0" />
                                                                    {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
            </div>
        </div>
    );
};

export default Portfolio;
