import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const portfolioItems = projectsData.map((project, i) => ({
    ...project,
    id: i + 1,
    title: project.title,
    description: project.description,
    image: project.image,
}));

const CardContent = ({ item }) => (
    <div className="w-full flex flex-col md:flex-row bg-white gap-6 md:gap-16 pb-12 md:pb-[100px]">
        {/* Left Side: Details */}
        <div className="w-full md:w-[30%] flex flex-col text-black text-[13px] md:text-[14px] font-medium tracking-tight">
            <div className="text-black/60 pt-2 mb-8 md:mb-20">[{item.id.toString().padStart(2, '0')}]</div>

            <div className="flex flex-col gap-4 my-4 md:my-0">
                <h3 className="font-semibold text-[28px] md:text-[42px] tracking-[-0.03em] leading-[1.1]">{item.title}</h3>
                <p className="text-[#666666] font-normal text-[14px] md:text-[15px] leading-relaxed md:pr-4">
                    {item.description}
                </p>
            </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-[70%]">
            <div className="relative w-full aspect-[4/3] lg:aspect-[16/10] rounded-[24px] overflow-hidden border border-black/5 shadow-sm">
                <div
                    className="absolute inset-0 bg-cover bg-center blur-2xl opacity-55 scale-110"
                    style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center z-10 p-6 md:p-12">
                    <img src={item.image} alt={item.title} className="w-auto h-auto max-w-full max-h-full rounded-[12px] shadow-2xl object-contain" />
                </div>
            </div>
        </div>
    </div>
);

const PortfolioStack = () => {
    const navigate = useNavigate();
    const [isDesktop, setIsDesktop] = React.useState(true);

    React.useEffect(() => {
        const checkSize = () => setIsDesktop(window.innerWidth >= 768);
        checkSize();
        window.addEventListener('resize', checkSize);
        return () => window.removeEventListener('resize', checkSize);
    }, []);

    // One ref per card — used so each card can watch the NEXT card enter the viewport
    const r0 = useRef(null);
    const r1 = useRef(null);
    const r2 = useRef(null);
    const r3 = useRef(null);
    const r4 = useRef(null);
    const r5 = useRef(null);
    const r6 = useRef(null);
    const r7 = useRef(null);
    const r8 = useRef(null);
    const r9 = useRef(null);
    const cardRefs = [r0, r1, r2, r3, r4, r5, r6, r7, r8, r9];

    // From Framer data:
    // Cards 1-N: sticky, increasing top offset, shrink as next card scrolls in
    // Last Card: relative, stays full size
    const configs = portfolioItems.map((_, i) => ({
        stickyTop: i === portfolioItems.length - 1 ? null : 150 + i * 40,
        finalScale: 1 - ((portfolioItems.length - 1 - i) * 0.05),
        zIndex: i + 1
    }));

    return (
        <section className="relative z-20 w-full bg-white">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">

                {/* Header */}
                <div className="w-full flex justify-between items-center text-[12px] md:text-[13px] font-normal border-t border-black/10 pt-4 pb-10 text-black">
                    <span className="flex items-center gap-2">
                        <span className="text-[16px] mb-0.5">•</span>
                        <span>(02)</span>
                    </span>
                    <span>(Portfolio)</span>
                    <span>© 2025</span>
                </div>

                <div className="w-full">

                    {/* Cards */}
                    <div className="w-full mx-auto pb-[20vh]">
                        {portfolioItems.map((item, index) => (
                                <Card
                                    key={item.id}
                                    item={item}
                                    selfRef={cardRefs[index]}
                                    nextRef={index < portfolioItems.length - 1 ? cardRefs[index + 1] : null}
                                    config={configs[index]}
                                    onClick={() => navigate('/portfolio')}
                                    isDesktop={isDesktop}
                                />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

const Card = ({ item, selfRef, nextRef, config, onClick, isDesktop }) => {
    // Offset: start when the next card's top is near the bottom of the viewport (95%)
    // End when the next card's top reaches 250px from the top of the viewport (just before it sticks)
    const { scrollYProgress } = useScroll({
        target: nextRef,
        offset: ['start 95%', 'start 250px'],
    });

    const scale = useTransform(
        scrollYProgress,
        [0, 1],
        [1, config.finalScale]
    );

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        ['0px', '-100px']
    );

    const isSticky = isDesktop && config.stickyTop != null;

    return (
        // ref goes ON the sticky div — critical for both sticky to work AND for the next card to target this
        <div
            ref={selfRef}
            onClick={onClick}
            className="cursor-pointer group"
            style={{
                position: isSticky ? 'sticky' : 'relative',
                top: isSticky ? `${config.stickyTop}px` : undefined,
                zIndex: isDesktop ? config.zIndex : undefined,
            }}
        >
            <motion.div
                style={{
                    scale: (isDesktop && nextRef) ? scale : 1,
                    y: (isDesktop && nextRef) ? y : '0px',
                    transformOrigin: 'top center',
                }}
            >
                <CardContent item={item} />
            </motion.div>
        </div>
    );
};

export default PortfolioStack;