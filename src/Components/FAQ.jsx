import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import faqBg from '../assets/Images/faq-bg.png';

const faqs = [
    {
        q: "What distinguishes us from other agencies?",
        a: "We blend high-level strategy with precise execution. Our focus is on delivering structured, premium visual systems rather than generic templates."
    },
    {
        q: "Why not hire an in-house designer or freelancer?",
        a: "Hiring in-house means overhead, benefits, and managing bandwidth. We provide an entire team's worth of senior-level design and engineering at a fraction of the complexity."
    },
    {
        q: "Are creative requests truly unlimited?",
        a: "Yes. Once subscribed, you can add as many requests to your queue as you'd like, and they will be delivered one by one."
    },
    {
        q: "How fast will I receive my work?",
        a: "Most requests are completed in just 2 days or less. However, more complex requests can take longer."
    },
    {
        q: "What if I have a single project?",
        a: "That's completely fine. We offer flexible arrangements tailored to single-project needs as well as ongoing partnerships."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative z-40 w-full bg-white text-black">
            <div className="container-custom relative mx-auto max-w-[1440px] px-[24px] pt-[24px] pb-[160px] flex flex-col gap-[60px] md:gap-[100px]">
                
                {/* Header Bar */}
                <div className="w-full flex justify-between items-center text-[12px] md:text-[13px] font-normal tracking-normal border-t border-black/20 pt-4 relative">
                    <span className="flex items-center gap-1.5"><span className="text-[10px]">•</span> (09)</span>
                    <span className="absolute left-1/2 transform -translate-x-1/2">(Frequently Asked Questions)</span>
                </div>

                <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-24 xl:gap-32 items-start mt-8">
                    
                    {/* Left: Thumbnail & Showreel */}
                    <div className="w-full lg:w-[35%] xl:w-[30%] flex flex-col">
                        <div className="w-full aspect-[3/4] bg-[#f4f4f4] overflow-hidden relative">
                            <img 
                                src={faqBg} 
                                alt="Build with us" 
                                className="w-full h-full object-cover"
                            />
                            
                            {/* Randomly placed aesthetic plus icons */}
                            <svg className="absolute top-[12%] left-[18%] w-4 h-4 text-white/60 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4v16M4 12h16"/></svg>
                            <svg className="absolute top-[28%] right-[15%] w-3 h-3 text-white/40 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4v16M4 12h16"/></svg>
                            <svg className="absolute bottom-[22%] left-[20%] w-5 h-5 text-white/70 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4v16M4 12h16"/></svg>
                            <svg className="absolute bottom-[15%] right-[25%] w-4 h-4 text-white/50 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4v16M4 12h16"/></svg>
                            <svg className="absolute top-[60%] right-[8%] w-3 h-3 text-white/30 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4v16M4 12h16"/></svg>
                        </div>
                        <div className="w-full flex justify-between items-center bg-[#F7F7F7] px-5 py-4 text-[12px] md:text-[13px] font-[500] text-black">
                            <span className="flex items-center gap-2 cursor-pointer hover:opacity-60 transition-opacity">
                                Build with us
                            </span>
                        </div>
                    </div>

                    {/* Right: Accordion */}
                    <div className="w-full lg:w-[65%] xl:w-[70%] flex flex-col border-t border-black/10">
                        {faqs.map((faq, i) => (
                            <div key={i} className="flex flex-col border-b border-black/10">
                                <div 
                                    className="w-full flex justify-between items-center py-7 md:py-8 cursor-pointer group"
                                    onClick={() => toggle(i)}
                                >
                                    <h4 className="text-[15px] md:text-[17px] font-[500] tracking-tight text-black group-hover:opacity-70 transition-opacity pr-8">
                                        {faq.q}
                                    </h4>
                                    <svg 
                                        width="16" 
                                        height="16" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="1.5" 
                                        className={`transform transition-transform duration-300 ease-out flex-shrink-0 ${openIndex === i ? 'rotate-45' : 'rotate-0'}`}
                                    >
                                        <path d="M12 4v16M4 12h16" />
                                    </svg>
                                </div>
                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-[14px] md:text-[15px] text-[#666] font-[400] pb-8 leading-relaxed max-w-[90%] md:max-w-[80%]">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQ;
