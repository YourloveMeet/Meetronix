import React from 'react';
import DecryptedText from './DecryptedText';

const archiveData = [
    {
        year: "2025",
        name: "Outside",
        images: [
            "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=400&auto=format&fit=crop"
        ]
    },
    {
        year: "2024",
        name: "Juvede",
        images: [
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
        ]
    },
    {
        year: "2025",
        name: "Zaine",
        images: [
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
        ]
    },
    {
        year: "2024",
        name: "Wall Out",
        images: [
            "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=400&auto=format&fit=crop"
        ]
    },
    {
        year: "2019",
        name: "Geaton",
        images: [
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop"
        ]
    },
    {
        year: "2020",
        name: "Skate",
        images: [
            "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?q=80&w=400&auto=format&fit=crop"
        ]
    }
];

const Archive = () => {
    return (
        <section className="relative z-40 w-full bg-white text-black">
            
            <div className="container-custom relative mx-auto max-w-[1440px] px-[24px] pb-[160px] flex flex-col gap-[100px]">

                {/* 1. Header Bar */}
                <div className="w-full flex justify-between items-center text-[12px] md:text-[13px] font-normal tracking-normal border-t border-black/10 pt-4 relative">
                    <span className="flex items-center gap-1.5"><span className="text-[10px]">•</span> (06)</span>
                    <span className="absolute left-1/2 transform -translate-x-1/2">(Archive)</span>
                    <span>© 2025</span>
                </div>

                {/* 2. List Items */}
                <div className="w-full flex flex-col">
                    {archiveData.map((item, index) => (
                        <div key={index} className="w-full flex flex-col group cursor-pointer hover:bg-[#fafafa] transition-colors">
                            {/* Top Line */}
                            <div className="w-full h-px bg-black/10 transition-colors group-hover:bg-black/20"></div>
                            
                            {/* Row Content - Using same grid spacing as Testimonial */}
                            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-[60px] lg:gap-[100px] py-4 md:py-6">
                                
                                {/* Left Column: Year (width matches Testimonial's left column) */}
                                <div className="w-full lg:w-[212px] flex-shrink-0">
                                    <span className="text-[14px] md:text-[15px] font-[500] text-black">
                                        {item.year}
                                    </span>
                                </div>

                                {/* Right Column: Name + Images */}
                                <div className="flex-1 w-full flex items-center justify-between">
                                    <h3 className="text-[36px] md:text-[48px] lg:text-[56px] font-[500] tracking-[-1.7px] leading-none text-black transition-transform transform group-hover:translate-x-3">
                                        <DecryptedText 
                                            text={item.name}
                                            animateOn="inViewHover"
                                            speed={60}
                                            maxIterations={10}
                                            revealDirection="start"
                                            encryptedClassName="text-black/40 font-mono"
                                        />
                                    </h3>

                                    {/* Images */}
                                    <div className="flex items-center gap-2">
                                        {item.images.map((img, i) => (
                                            <img 
                                                key={i}
                                                src={img} 
                                                alt={`${item.name} ${i}`} 
                                                className="h-[40px] md:h-[50px] lg:h-[60px] w-auto rounded-[2.5px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" 
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Bottom Line for the last item */}
                    <div className="w-full h-px bg-black/10"></div>
                </div>

            </div>
        </section>
    );
};

export default Archive;
