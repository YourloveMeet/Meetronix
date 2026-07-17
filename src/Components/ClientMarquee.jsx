import React from 'react';
import { motion } from 'framer-motion';

const ClientMarquee = () => {
    const clients = [
        {
            id: 'oslo',
            element: <span className="text-[25px] font-[900] tracking-tighter text-black font-sans lowercase">oslo.</span>
        },
        {
            id: 'savannah',
            element: <span className="text-[18px] font-[900] tracking-[0.05em] text-black font-sans uppercase">SAVANNAH</span>
        },
        {
            id: 'basel',
            element: (
                <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-[18px] h-[18px] bg-black text-white rounded-[3px]">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </div>
                    <span className="text-[20px] font-[800] tracking-tight text-black font-sans">Basel</span>
                </div>
            )
        },
        {
            id: 'manila',
            element: <span className="text-[21px] font-[900] tracking-tight text-black font-sans">Manila.</span>
        },
        {
            id: 'monaco',
            element: (
                <div className="flex items-center gap-2">
                    <div className="text-black">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
                        </svg>
                    </div>
                    <span className="text-[20px] font-[800] tracking-tight text-black font-sans lowercase">monaco</span>
                </div>
            )
        }
    ];

    // Double the list for infinite scrolling
    const doubleClients = [...clients, ...clients, ...clients, ...clients];

    return (
        <section className="relative z-20 w-full bg-[#f4f4f4] py-12 md:py-16 overflow-hidden flex items-center justify-center" style={{ perspective: "1200px" }}>
            
            {/* Gradient Fades for Smooth Edges */}
            <div className="absolute top-0 left-0 w-[15%] md:w-[25%] h-full bg-gradient-to-r from-[#f4f4f4] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[15%] md:w-[25%] h-full bg-gradient-to-l from-[#f4f4f4] to-transparent z-10 pointer-events-none"></div>

            {/* 3D Tilted Container */}
            <div className="w-full flex" style={{ transform: "rotateX(20deg)", transformStyle: "preserve-3d" }}>
                <motion.div 
                    className="flex items-center gap-6 md:gap-8 px-4"
                    animate={{ x: [0, -1360] }} // 5 items * (240px + 32px gap) = 1360px
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 25
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {doubleClients.map((client, index) => (
                        <div 
                            key={`${client.id}-${index}`} 
                            className="flex items-center justify-center bg-white w-[240px] h-[160px] rounded-[16px] shadow-[0_20px_40px_rgba(0,0,0,0.06)] border border-black/5 select-none shrink-0 transition-transform hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] duration-500"
                        >
                            {client.element}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ClientMarquee;
