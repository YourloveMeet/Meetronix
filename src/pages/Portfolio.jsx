import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import RevealOnScroll from '../Components/Common/RevealOnScroll';
import { projectsData, categories } from '../data/projectsData';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

const Portfolio = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = selectedCategory === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === selectedCategory);

    // Lock body scroll when modal is open
    React.useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject]);

    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="text-center mb-16"
                >
                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-bold mb-6 gradient-text-animated"
                    >
                        My Portfolio
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-xl text-slate-400 max-w-3xl mx-auto"
                    >
                        A showcase of my best work across web, game, and mobile development
                    </motion.p>
                </motion.div>

                {/* Category Filter */}
                <RevealOnScroll>
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-3 rounded-full font-semibold transition-all ${selectedCategory === category.id
                                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-accent/30'
                                    : 'glass border border-white/10 text-slate-300 hover:border-accent/30'
                                    }`}
                            >
                                <span className="mr-2">{category.icon}</span>
                                {category.name}
                            </motion.button>
                        ))}
                    </div>
                </RevealOnScroll>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-accent/30 transition-all cursor-pointer group"
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Project Image */}
                                <div className="relative h-56 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50">
                                        {categories.find(c => c.id === project.category)?.icon}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="flex gap-2">
                                            <motion.a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                whileHover={{ scale: 1.1 }}
                                                className="p-2 bg-accent rounded-lg text-dark"
                                            >
                                                <ExternalLink size={20} />
                                            </motion.a>
                                            <motion.a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                whileHover={{ scale: 1.1 }}
                                                className="p-2 bg-slate-800 rounded-lg text-white"
                                            >
                                                <Github size={20} />
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2 gradient-text">{project.title}</h3>
                                    <p className="text-slate-400 mb-4 line-clamp-2">{project.description}</p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.slice(0, 3).map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-3 py-1 text-slate-400 text-xs">
                                                +{project.technologies.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Project Modal */}
                {ReactDOM.createPortal(
                    <AnimatePresence>
                        {selectedProject && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 overflow-y-auto"
                                onClick={() => setSelectedProject(null)}
                            >
                                <motion.div
                                    initial={{ scale: 0.9, y: 50, opacity: 0 }}
                                    animate={{ scale: 1, y: 0, opacity: 1 }}
                                    exit={{ scale: 0.95, y: 20, opacity: 0 }}
                                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                    onClick={(e) => e.stopPropagation()}
                                    className="glass-card max-w-4xl w-full my-8 rounded-3xl p-8 border border-white/20 max-h-[90vh] overflow-y-auto"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h2 className="text-4xl font-bold gradient-text-animated mb-2">
                                                {selectedProject.title}
                                            </h2>
                                            <div className="flex gap-4">
                                                <a
                                                    href={selectedProject.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-accent hover:underline flex items-center gap-1"
                                                >
                                                    <ExternalLink size={16} /> Live Demo
                                                </a>
                                                <a
                                                    href={selectedProject.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-slate-400 hover:text-white flex items-center gap-1"
                                                >
                                                    <Github size={16} /> Source Code
                                                </a>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setSelectedProject(null)}
                                            className="text-4xl text-slate-400 hover:text-white transition-colors"
                                        >
                                            ×
                                        </button>
                                    </div>

                                    <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                                        {selectedProject.longDescription}
                                    </p>

                                    {/* Challenge & Solution */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div className="glass p-6 rounded-xl border border-orange-500/20">
                                            <h3 className="text-xl font-bold text-orange-400 mb-3">Challenge</h3>
                                            <p className="text-slate-300">{selectedProject.challenge}</p>
                                        </div>
                                        <div className="glass p-6 rounded-xl border border-green-500/20">
                                            <h3 className="text-xl font-bold text-green-400 mb-3">Solution</h3>
                                            <p className="text-slate-300">{selectedProject.solution}</p>
                                        </div>
                                    </div>

                                    {/* Results */}
                                    <div className="mb-6">
                                        <h3 className="text-xl font-bold mb-3">Results</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {selectedProject.results.map((result, i) => (
                                                <div key={i} className="glass p-4 rounded-xl text-center border border-white/10">
                                                    <p className="text-accent font-semibold">{result}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <h3 className="text-xl font-bold mb-3">Technologies Used</h3>
                                        <div className="flex flex-wrap gap-3">
                                            {selectedProject.technologies.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-4 py-2 bg-accent/10 text-accent rounded-full border border-accent/30"
                                                >
                                                    {tech}
                                                </span>
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
