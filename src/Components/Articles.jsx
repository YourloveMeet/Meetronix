import React from 'react';
import { motion } from 'framer-motion';

const articlesData = [
    {
        id: "001",
        title: "Velocity Becomes",
        category: "Art Direction",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop",
        aspect: "aspect-[4/5]"
    },
    {
        id: "002",
        title: "Way To Clearance",
        category: "Books",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop",
        aspect: "aspect-[4/3]"
    },
    {
        id: "003",
        title: "All Grapples",
        category: "Automotive",
        image: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1000&auto=format&fit=crop",
        aspect: "aspect-[4/5]"
    },
    {
        id: "004",
        title: "Flowers Love",
        category: "Gardening",
        image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?q=80&w=1000&auto=format&fit=crop",
        aspect: "aspect-[4/3]"
    }
];

const Articles = () => {
    return (
        <section className="relative z-40 w-full bg-white text-black">
            <div className="container-custom relative mx-auto max-w-[1440px] px-[24px] pt-[24px] pb-[160px] flex flex-col gap-[80px]">
                
                {/* Header Bar */}
                <div className="w-full flex justify-between items-center text-[12px] md:text-[13px] font-normal tracking-normal border-t border-black/20 pt-4 relative">
                    <span className="flex items-center gap-1.5"><span className="text-[10px]">•</span> (08)</span>
                    <span className="absolute left-1/2 transform -translate-x-1/2">(Article)</span>
                    <span>© 2025</span>
                </div>

                {/* Grid */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
                    {articlesData.map((article, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex flex-col w-full group cursor-pointer"
                        >
                            {/* Image Container with alternating aspect ratios */}
                            <div className={`w-full overflow-hidden rounded-[5px] ${article.aspect}`}>
                                <img 
                                    src={article.image} 
                                    alt={article.title} 
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Details (Immediately below image) */}
                            <div className="w-full flex items-start justify-between mt-4">
                                <span className="text-[11px] font-[600] text-black w-8">{article.id}</span>
                                
                                <div className="flex-1 flex flex-col items-start px-2">
                                    <h4 className="text-[11px] md:text-[12px] font-[600] text-black tracking-tight mb-0.5">{article.title}</h4>
                                    <span className="text-[11px] text-[#888]">{article.category}</span>
                                </div>

                                <span className="text-[11px] font-[600] text-black text-right w-12">© 2025</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Articles;
