import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';

const projectsData = [
    {
        id: 1,
        title: "Neon Cyber City",
        category: "Game",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "A cyberpunk-themed open world RPG built with Unity and C#.",
        tags: ["Unity", "C#", "3D Modeling"],
        links: { demo: "#", code: "#" }
    },
    {
        id: 2,
        title: "E-Commerce Dashboard",
        category: "Web",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "A comprehensive analytics dashboard for online retailers.",
        tags: ["React", "Tailwind", "Recharts"],
        links: { demo: "#", code: "#" }
    },
    {
        id: 3,
        title: "Fitness Tracker Pro",
        category: "App",
        image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Cross-platform mobile app for tracking workouts and nutrition.",
        tags: ["React Native", "Firebase", "Expo"],
        links: { demo: "#", code: "#" }
    },
    {
        id: 4,
        title: "Portfolio V1",
        category: "Web",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Previous version of my personal portfolio website.",
        tags: ["HTML/CSS", "JavaScript"],
        links: { demo: "#", code: "#" }
    },
    {
        id: 5,
        title: "Space Shooter",
        category: "Game",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Classic arcade style space shooter with modern graphics.",
        tags: ["Unity", "C#", "VFX Graph"],
        links: { demo: "#", code: "#" }
    },
    {
        id: 6,
        title: "Social Connect",
        category: "App",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        description: "Social networking app focused on professional connections.",
        tags: ["React Native", "Node.js", "Socket.io"],
        links: { demo: "#", code: "#" }
    }
];

const Projects = () => {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? projectsData
        : projectsData.filter(project => project.category === filter);

    return (
        <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-accent">Projects</span></h2>
                <p className="text-slate-400 max-w-2xl mx-auto mb-8">
                    A selection of my best work across web, game, and mobile application development.
                </p>

                <div className="flex justify-center gap-4 flex-wrap">
                    {["All", "Web", "Game", "App"].map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-6 py-2 rounded-full transition-all ${filter === category
                                    ? "bg-accent text-dark font-bold shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                                    : "glass text-slate-300 hover:bg-white/10"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </motion.div>

            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={project.id}
                            className="glass-card rounded-xl overflow-hidden group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <a href={project.links.demo} className="p-3 bg-accent text-dark rounded-full hover:scale-110 transition-transform">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.links.code} className="p-3 bg-white text-dark rounded-full hover:scale-110 transition-transform">
                                        <Github size={20} />
                                    </a>
                                </div>
                                <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-bold text-white border border-white/10">
                                    {project.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-md">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default Projects;
