import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const ProjectDetailGallery = ({ project, onClose }) => {
    const modalRef = useRef(null);
    const containerRef = useRef(null);
    const [zoomComplete, setZoomComplete] = useState(false);
    const [isReversing, setIsReversing] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const checkSize = () => setIsDesktop(window.innerWidth >= 768);
        checkSize();
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
    }, []);

    const handleClose = () => {
        setIsReversing(true);
    };

    const handleReverseComplete = () => {
        setZoomComplete(false);
        // Small delay to ensure the DOM image renders before Framer Motion grabs it for the layoutId shrink
        setTimeout(() => {
            onClose();
        }, 50);
    };

    const { scrollYProgress } = useScroll({
        container: modalRef
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 70,
        damping: 20,
        restDelta: 0.001
    });

    const x = useTransform(smoothProgress, [0, 1], ["0%", project.scrollDist || "-72%"]);

    // Dynamic typography colors for light vs dark themes
    const tColor = project.darkText ? 'text-[#1a1a1a]' : 'text-white';
    const tColor70 = project.darkText ? 'text-[#1a1a1a]/70' : 'text-white/70';
    const tColor40 = project.darkText ? 'text-[#1a1a1a]/40' : 'text-white/40';
    const tColor90 = project.darkText ? 'text-[#1a1a1a]/90' : 'text-white/90';
    const bColor10 = project.darkText ? 'border-black/10' : 'border-white/10';
    const pBg = project.darkText ? 'bg-black/5' : 'bg-white/5';
    const btnBg = project.darkText ? 'bg-[#1a1a1a] text-white' : 'bg-white text-black';

    useEffect(() => {
        // Prevent background body from scrolling
        document.body.style.overflow = 'hidden';
        document.body.classList.add('hide-navbar');
        return () => {
            document.body.style.overflow = 'unset';
            document.body.classList.remove('hide-navbar');
        };
    }, []);

    // Build the horizontal gallery slides dynamically
    const gallerySlides = [];

    // 1. Hero Presentation
    gallerySlides.push({
        type: 'media',
        key: 'hero',
        image: project.heroImage || project.image,
        width: project.heroAspect ? 'w-[90vw] md:w-auto' : 'w-[90vw] md:w-[55vw]',
        height: project.heroAspect ? 'h-auto md:h-[70vh]' : 'h-[55vh] md:h-[70vh]',
        aspect: project.heroAspect || 'aspect-[55/70]',
        isHanzoHero: project.title === 'Hanzo'
    });

    // 2. Challenge
    gallerySlides.push({
        type: 'text',
        key: 'challenge',
        title: 'The Challenge',
        content: project.challenge,
        width: 'w-[90vw] md:w-[45vw]',
        height: 'h-[55vh] md:h-[70vh]'
    });

    // 3. Gallery Images (Alternating with solution text)
    if (project.galleryImages && project.galleryImages.length > 0) {
        project.galleryImages.forEach((imgObj, index) => {
            const img = typeof imgObj === 'string' ? imgObj : imgObj.src;
            const aspect = typeof imgObj === 'string' ? null : imgObj.aspect;
            const isVertical = typeof imgObj === 'string' ? false : imgObj.isVertical;

            let widthClass = 'w-[90vw] md:w-auto';
            let heightClass = isVertical ? 'h-[55vh] md:h-[74vh]' : 'h-auto md:h-[70vh]';
            let aspectClass = aspect || (isVertical ? 'aspect-[48/74]' : 'aspect-video md:aspect-[55/70]');

            gallerySlides.push({
                type: 'media',
                key: `gallery-${index}`,
                image: img,
                width: widthClass,
                height: heightClass,
                aspect: aspectClass
            });

            // Insert the Solution card after the first media slide
            if (index === 0) {
                gallerySlides.push({
                    type: 'text',
                    key: 'solution',
                    title: 'The Solution',
                    content: project.solution,
                    width: 'w-[90vw] md:w-[45vw]',
                    height: 'h-[55vh] md:h-[70vh]'
                });
            }

            // Insert the Approach card after the second media slide (index 1)
            if (index === 1 && project.approachText) {
                gallerySlides.push({
                    type: 'text',
                    key: 'approach',
                    title: 'The Approach',
                    content: project.approachText,
                    width: 'w-[90vw] md:w-[45vw]',
                    height: 'h-[55vh] md:h-[70vh]'
                });
            }

            // Insert the Results card after the third media slide (index 2)
            if (index === 2 && project.resultsText) {
                gallerySlides.push({
                    type: 'text',
                    key: 'results',
                    title: 'The Results',
                    content: project.resultsText,
                    width: 'w-[90vw] md:w-[45vw]',
                    height: 'h-[55vh] md:h-[70vh]'
                });
            }
        });
    } else {
        // Fallback placeholders if no gallery images are defined
        gallerySlides.push({
            type: 'placeholder',
            key: 'placeholder-1',
            label: 'Interface Detail',
            width: 'w-[90vw] md:w-[48vw]',
            height: 'h-[55vh] md:h-[74vh]'
        });
        gallerySlides.push({
            type: 'text',
            key: 'solution',
            title: 'The Solution',
            content: project.solution,
            width: 'w-[90vw] md:w-[45vw]',
            height: 'h-[55vh] md:h-[70vh]'
        });
        gallerySlides.push({
            type: 'placeholder',
            key: 'placeholder-2',
            label: 'Component Library',
            width: 'w-[90vw] md:w-[55vw]',
            height: 'h-[55vh] md:h-[70vh]'
        });
    }

    // 4. Call To Action (Work with us)
    gallerySlides.push({
        type: 'cta',
        key: 'cta',
        width: 'w-[90vw] md:w-[40vw]',
        height: 'h-[55vh] md:h-[74vh]'
    });

    return (
        <div 
            ref={modalRef}
            data-lenis-prevent="true"
            className="fixed inset-0 z-[100] overflow-y-auto overflow-x-hidden"
        >
            {/* Force the scroll height instantly on mount so useSpring doesn't glitch (Desktop only) */}
            {isDesktop && <div className="absolute top-0 left-0 w-full h-[600vh] pointer-events-none opacity-0" />}

            {/* 0. Independent Background Layer (Forces AnimatePresence to keep component alive during exit) */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.8 } }}
                exit={{ opacity: 0, transition: { duration: 0.8 } }} // Matches the 0.8s layoutId duration!
                className="fixed inset-0 z-0 pointer-events-none"
                style={{ 
                    backgroundImage: project.bgGradient || 'none',
                    backgroundColor: project.bgColor || '#0d0d0d',
                    backgroundSize: project.bgGradient ? '200% 200%' : 'auto',
                    animation: project.bgGradient ? 'animated-gradient 15s ease infinite' : 'none'
                }}
            />

            {/* 1. DOM Image Layer (Handles layout zoom, shrink, and fly-through) */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <motion.div 
                    layoutId={`project-card-${project.id}`}
                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    onLayoutAnimationComplete={() => {
                        if (!isReversing) {
                            setZoomComplete(true);
                        }
                    }}
                    className="w-full h-full overflow-hidden flex items-center justify-center"
                    style={{ 
                        backgroundImage: project.bgGradient || 'none',
                        backgroundColor: project.bgColor || '#0d0d0d',
                        backgroundSize: project.bgGradient ? '200% 200%' : 'auto',
                        animation: project.bgGradient ? 'animated-gradient 15s ease infinite' : 'none'
                    }}
                >
                    <motion.img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                        initial={{ filter: "blur(12px)", scale: 1.1, opacity: 1 }}
                        animate={
                            zoomComplete && !isReversing
                            ? { scale: 2.5, opacity: 0, filter: "blur(30px)" } // Fly-through
                            : { filter: "blur(0px)", scale: 1, opacity: 1 }    // Normal full screen
                        }
                        transition={{ 
                            duration: zoomComplete ? 1.5 : 0.8, 
                            ease: [0.25, 1, 0.5, 1]
                        }}
                        onAnimationComplete={() => {
                            if (isReversing && zoomComplete) {
                                handleReverseComplete();
                            }
                        }}
                    />
                </motion.div>
            </div>

            {/* 2. Text & Content Layer (Only appears when zoom is done) */}
            <AnimatePresence>
                {zoomComplete && !isReversing && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.8 } }}
                        exit={{ opacity: 0, transition: { duration: 0.4 } }}
                        className="w-full relative z-10"
                    >

            {/* Top Navigation (fades in) */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.8 } }}
                exit={{ opacity: 0 }}
                className="fixed top-0 left-0 w-full p-6 md:p-10 flex justify-end items-center z-50 pointer-events-none"
            >
                <button 
                    onClick={handleClose}
                    className={`pointer-events-auto mt-16 md:mt-0 px-6 py-2.5 rounded-full font-bold text-[13px] flex items-center gap-2 hover:opacity-80 transition-opacity ${btnBg}`}
                >
                    <ArrowLeft size={16} />
                    BACK
                </button>
            </motion.div>

            {/* 3. The Gallery Content (sits on top of the dark overlay and fades in) */}
            <div className={`relative ${isDesktop ? 'h-[600vh]' : 'h-auto pb-32'} z-20 ${tColor}`}>
                
                {/* Sticky section that holds the gallery */}
                <div className={isDesktop ? "sticky top-0 h-screen w-full overflow-hidden flex items-center" : "w-full pt-32 flex flex-col gap-12 overflow-x-hidden"}>
                    
                    <motion.div 
                        className={isDesktop ? "flex flex-nowrap h-full items-center pl-[10vw]" : "flex flex-col w-full px-6 gap-16 items-center pb-20"}
                        style={isDesktop ? { x } : {}}
                    >
                        {/* Slide 1: Main Info Column (Compact, pinned to left of track) */}
                        <motion.div 
                            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] } }}
                            exit={{ opacity: 0 }}
                            className={`${isDesktop ? 'w-[90vw] md:w-[40vw] shrink-0 pr-10 md:pr-20' : 'w-full'} flex flex-col justify-center gap-12 pointer-events-auto`}
                        >
                            <div>
                                <h4 
                                    className="text-[12px] md:text-[14px] font-bold tracking-[0.3em] uppercase mb-6"
                                    style={{ color: project.color }}
                                >
                                    {project.category} / {project.badge}
                                </h4>
                                <h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter mb-8 leading-none">{project.title}</h1>
                                <p className={`text-[16px] md:text-[18px] leading-relaxed max-w-lg font-light ${tColor70}`}>
                                    {project.longDescription}
                                </p>
                            </div>
                            
                            <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 border-t pt-10 ${bColor10}`}>
                                <div>
                                    <h4 
                                        className="text-[11px] font-bold tracking-widest uppercase mb-4"
                                        style={{ color: project.color }}
                                    >
                                        Services / Technologies
                                    </h4>
                                    <div className="flex flex-col gap-2">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className={`text-[13px] font-medium ${tColor90}`}>{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="flex items-start md:justify-end">
                                    {project.liveUrl && (
                                        <a 
                                            href={project.liveUrl} 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            className="inline-flex items-center justify-center text-white px-8 py-4 rounded-full text-[13px] tracking-widest font-bold hover:scale-105 transition-transform"
                                            style={{ backgroundColor: project.color }}
                                        >
                                            VISIT PROJECT
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>

                        {/* Dynamically Rendered Gallery Slides */}
                        {gallerySlides.map((slide) => {
                            if (slide.type === 'media') {
                                return (
                                    <motion.div 
                                        key={slide.key}
                                        initial={{ opacity: 0, y: 120, scale: 0.75, filter: "blur(20px)" }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                                        viewport={{ once: true, amount: 0.15 }}
                                        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                                        className={`${isDesktop ? slide.width : 'w-full'} ${slide.aspect || ''} shrink-0 ${isDesktop ? slide.height : (slide.isVertical ? 'h-[74vh]' : 'aspect-square h-auto')} rounded-[32px] md:rounded-[40px] relative shadow-2xl ${isDesktop ? 'mr-10 md:mr-20' : 'mb-0'} z-10 ${slide.isHanzoHero ? 'p-[3px] animated-gradient-glow' : 'overflow-hidden'}`}
                                    >
                                        <div className={`w-full h-full relative overflow-hidden flex items-center justify-center ${slide.isHanzoHero ? 'rounded-[29px] md:rounded-[37px] bg-white' : 'bg-[#1a1a1a]'}`}>
                                            <div 
                                                className="w-full h-full bg-cover bg-center" 
                                                style={{ backgroundImage: `url(${slide.image})` }} 
                                            />
                                        </div>
                                    </motion.div>
                                );
                            }

                            if (slide.type === 'text') {
                                const hasDetail = typeof slide.content === 'object';
                                return (
                                    <motion.div 
                                        key={slide.key}
                                        initial={{ opacity: 0, x: 100, scale: 0.9, filter: "blur(20px)" }}
                                        whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                        className={`${isDesktop ? slide.width : 'w-full'} shrink-0 ${isDesktop ? slide.height : 'h-auto py-16'} rounded-[32px] md:rounded-[40px] flex flex-col justify-center p-8 md:p-12 lg:p-20 ${isDesktop ? 'mr-10 md:mr-20' : 'mb-0'} ${pBg}`}
                                    >
                                        <h4 
                                            className="text-[12px] font-bold tracking-widest uppercase mb-6"
                                            style={{ color: project.color }}
                                        >
                                            {slide.title}
                                        </h4>
                                        <h2 className="text-2xl md:text-4xl font-medium tracking-tight leading-snug mb-4">
                                            {hasDetail ? slide.content.headline : slide.content}
                                        </h2>
                                        {hasDetail && (
                                            <p className={`text-[14px] md:text-[15px] leading-relaxed max-w-sm ${project.darkText ? 'text-black/60' : 'text-white/60'}`}>
                                                {slide.content.description}
                                            </p>
                                        )}
                                    </motion.div>
                                );
                            }

                            if (slide.type === 'placeholder') {
                                return (
                                    <div 
                                        key={slide.key}
                                        className={`${isDesktop ? slide.width : 'w-full'} shrink-0 ${isDesktop ? slide.height : 'aspect-square h-auto'} rounded-[32px] md:rounded-[40px] overflow-hidden flex items-center justify-center relative ${isDesktop ? 'mr-10 md:mr-20' : 'mb-0'} ${pBg}`}
                                    >
                                        <span className={`font-bold tracking-widest uppercase ${tColor40}`}>{slide.label}</span>
                                        <div className={`absolute bottom-10 left-10 text-sm ${tColor40}`}>Will be replaced by client later</div>
                                    </div>
                                );
                            }

                            if (slide.type === 'cta') {
                                return (
                                    <motion.div 
                                        key={slide.key}
                                        initial={{ opacity: 0, scale: 0.85, filter: "blur(15px)" }}
                                        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                        className={`${isDesktop ? slide.width : 'w-full'} shrink-0 ${isDesktop ? slide.height : 'h-auto py-16'} rounded-[32px] md:rounded-[40px] flex flex-col justify-between gap-12 md:gap-0 p-8 md:p-12 lg:p-16 ${isDesktop ? 'mr-10 md:mr-20' : 'mb-0'} relative overflow-hidden shadow-2xl text-white`}
                                        style={{ 
                                            border: '1px solid rgba(255, 255, 255, 0.1)',
                                            background: 'linear-gradient(135deg, #09090b 0%, #1e1e24 100%)'
                                        }}
                                    >
                                        <div 
                                            className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full blur-[90px] opacity-40 pointer-events-none"
                                            style={{ 
                                                background: `radial-gradient(circle, ${project.color} 0%, transparent 70%)` 
                                            }}
                                        />

                                        <div className="flex flex-col gap-6 relative z-10">
                                            <h4 
                                                className="text-[12px] font-bold tracking-widest uppercase"
                                                style={{ color: project.color }}
                                            >
                                                Next Steps
                                            </h4>
                                            <h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-tight">
                                                Ready to build something legendary?
                                            </h2>
                                            <p className="text-[15px] md:text-[16px] leading-relaxed max-w-sm font-light text-white/70">
                                                Let's combine design precision with technical excellence. We partner with forward-thinking startups and brands to design, build, and scale premium digital products. Get in touch to discuss your upcoming project.
                                            </p>
                                        </div>

                                        <div className="relative z-10 flex flex-col gap-4">
                                            <a 
                                                href="mailto:hello@meetronix.com"
                                                className="inline-flex items-center justify-center px-8 py-5 rounded-full text-[13px] tracking-widest font-bold hover:scale-[1.03] transition-transform w-full md:w-auto self-start"
                                                style={{ 
                                                    backgroundColor: project.color,
                                                    color: '#000000' 
                                                }}
                                            >
                                                WORK WITH US
                                            </a>
                                        </div>
                                    </motion.div>
                                );
                            }

                            return null;
                        })}

                    </motion.div>
                </div>
                
                <AnimatePresence>
                    {isDesktop && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.8 } }}
                            exit={{ opacity: 0 }}
                            className={`fixed bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest font-bold pointer-events-none ${tColor40}`}
                        >
                            SCROLL TO EXPLORE
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ProjectDetailGallery;
