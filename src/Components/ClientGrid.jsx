import React from 'react';
import { motion } from 'framer-motion';

const ClientGrid = () => {
    const clients = [
        {
            id: 'oslo',
            element: <span className="text-[25px] md:text-[30px] font-[900] tracking-tighter text-black font-sans lowercase">oslo.</span>
        },
        {
            id: 'savannah',
            element: <span className="text-[18px] md:text-[22px] font-[900] tracking-[0.05em] text-black font-sans uppercase">SAVANNAH</span>
        },
        {
            id: 'basel',
            element: (
                <div className="flex items-center gap-2 md:gap-3">
                    <div className="flex items-center justify-center w-[20px] h-[20px] md:w-[24px] md:h-[24px] bg-black text-white rounded-[4px]">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </div>
                    <span className="text-[20px] md:text-[26px] font-[800] tracking-tight text-black font-sans">Basel</span>
                </div>
            )
        },
        {
            id: 'manila',
            element: <span className="text-[21px] md:text-[28px] font-[900] tracking-tight text-black font-sans">Manila.</span>
        },
        {
            id: 'monaco',
            element: (
                <div className="flex items-center gap-2 md:gap-3">
                    <div className="text-black">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/>
                        </svg>
                    </div>
                    <span className="text-[20px] md:text-[26px] font-[800] tracking-tight text-black font-sans lowercase">monaco</span>
                </div>
            )
        },
        {
            id: 'prologis',
            element: (
                <div className="flex items-center gap-2">
                    <span className="text-[24px] md:text-[32px] font-bold tracking-tight text-black font-serif italic">Prologis</span>
                </div>
            )
        }
    ];

    return (
        <section className="relative z-20 w-full bg-white text-black pb-24 md:pb-32">
            <div className="container-custom relative mx-auto w-full max-w-[1440px] px-6 md:px-[5%]">
                
                {/* Header Bar */}
                <div className="w-full flex justify-between items-center text-[12px] md:text-[13px] font-normal tracking-normal border-t border-black/20 pt-4 mb-16 relative">
                    <span className="flex items-center gap-1.5"><span className="text-[10px]">•</span> (05)</span>
                    <span className="absolute left-1/2 transform -translate-x-1/2">(Selected Clients)</span>
                    <span>© 2025</span>
                </div>

                {/* Grid */}
                <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-0 border border-black/10 rounded-[8px] overflow-hidden bg-[#fafafa]">
                    {clients.map((client, index) => (
                        <div 
                            key={client.id} 
                            className={`flex items-center justify-center py-16 md:py-24 bg-[#fafafa] border-black/10 ${index < 3 ? 'border-b' : ''} ${index % 3 !== 2 ? 'md:border-r' : ''} ${(index % 2 === 0) ? 'max-md:border-r' : ''}`}
                        >
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group cursor-default"
                            >
                                <div className="transition-transform duration-300 group-hover:scale-110">
                                    {client.element}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ClientGrid;
