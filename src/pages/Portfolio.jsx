import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, Github, X, ArrowRight, Sparkles } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import PortfolioHero from '../Components/PortfolioHero';
import Footer from '../Components/Footer';
import ProjectDetailGallery from '../Components/ProjectDetailGallery';

const ProjectCard = ({ project, index, setSelectedProject }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["0 1.1", "1.1 0"]
    });

    // Add physical inertia (smoothness) to the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 60, // Lower stiffness for a more spacious, floating feel
        damping: 20,
        restDelta: 0.001
    });

    // Premium Concave (Inner) curve math: Cards wrap around you like the inside of a cylinder
    // At bottom (0): Top tilts away, bottom tilts towards -> positive rotateX
    // At top (1): Top tilts towards, bottom tilts away -> negative rotateX
    const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [25, 0, -25]);
    
    // Scale adds depth to the curve
    const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 0.8]); 
    
    // Fade elegantly
    const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    
    // Vertical travel makes it feel spacious
    const y = useTransform(smoothProgress, [0, 0.5, 1], [120, 0, -120]);
    
    // Z pushes the edges towards the user to emphasize the inner curve
    const z = useTransform(smoothProgress, [0, 0.5, 1], [150, 0, 150]); 
    
    // Removed the uneven alternating rotateY to ensure a clean, symmetrical grid

    return (
        <motion.div
            ref={cardRef}
            onClick={() => setSelectedProject(project)}
            style={{ 
                rotateX, 
                scale, 
                opacity,
                y,
                z,
                transformStyle: "preserve-3d" 
            }}
            className="group cursor-pointer flex flex-col gap-6"
        >
            <motion.div 
                layoutId={`project-card-${project.id}`}
                className="w-full relative aspect-[1.3/1] md:aspect-[1.4/1] overflow-hidden rounded-[16px] bg-[#111]"
            >
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                
                {/* Hover Overlay: Blur + Click Me Button */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 backdrop-blur-0 group-hover:backdrop-blur-md transition-all duration-500 flex items-center justify-center">
                    <div className="bg-[#f04225] text-white px-6 py-3 rounded-full font-bold text-[12px] uppercase tracking-[0.15em] transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2 shadow-2xl">
                        Click Me
                        <ArrowRight size={14} className="-rotate-45" strokeWidth={2.5} />
                    </div>
                </div>
            </motion.div>

            <div className="flex justify-between items-start text-black text-[14px] md:text-[15px] font-medium tracking-tight px-2">
                <span>(0{index + 1})</span>
                <div className="flex flex-col text-center">
                    <span className="text-[18px] mb-1">{project.title}</span>
                    <span className="text-[#666] font-normal">
                        {project.category === 'web' ? 'Art Direction' : project.category === 'saas' ? 'Product Design' : 'Photography'}
                    </span>
                </div>
                <span>© 2025</span>
            </div>
            
            {/* Minimalist Aesthetic Text (Bold title + small paragraph) */}
            <div className="flex flex-col items-start text-left mt-3 md:mt-4 px-2 gap-2 md:gap-3">
                <h4 className="text-[15px] md:text-[17px] font-bold text-black tracking-tight leading-[1.3]">
                    {project.subtitle}
                </h4>
                <p className="text-[13px] md:text-[14px] font-medium leading-[1.6] text-[#777] tracking-tight max-w-[95%] md:max-w-[75%]">
                    {project.longDescription}
                </p>
            </div>
        </motion.div>
    );
};

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const sectionRef = useRef(null);
    const displayProjects = projectsData;

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "start start"]
    });

    const clipPath = useTransform(
        scrollYProgress,
        [0, 1],
        [
            'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
            'polygon(0% 100%, 100% 0%, 100% 100%, 0% 100%)'
        ]
    );

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedProject]);

    return (
        <div className="bg-[#0d0d0d] relative">
            <PortfolioHero />
            
            <section ref={sectionRef} className="relative z-20 w-full bg-white text-black pb-32 mt-[12vw]">
                <motion.div
                    className="absolute top-0 left-0 w-full h-[20vw] bg-white transform -translate-y-[99%] origin-bottom"
                    style={{ clipPath }}
                ></motion.div>

                {/* Expanded container for massive cards like Lusion */}
                <div className="container-custom relative mx-auto w-full max-w-[1700px] px-6 md:px-12 pt-16 md:pt-24">
                    
                    <div className="w-full flex justify-between items-center text-[13px] md:text-[14px] font-normal tracking-normal border-t border-black/20 pt-4 mb-[80px] md:mb-[120px]">
                        <span className="flex items-center gap-1.5"><span className="text-[10px]">•</span> (01)</span>
                        <span>(Portfolio)</span>
                        <span>© 2025</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-6 md:gap-y-8" style={{ perspective: '2000px' }}>
                        {displayProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} setSelectedProject={setSelectedProject} />
                        ))}
                    </div>

                </div>
            </section>

            <Footer />

            <AnimatePresence mode="wait">
                {selectedProject && (
                    <ProjectDetailGallery 
                        key="gallery"
                        project={selectedProject} 
                        onClose={() => setSelectedProject(null)} 
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Portfolio;
