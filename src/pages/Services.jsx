import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShoppingBag, LayoutDashboard, Palette, Layers, Cpu, Zap, Globe, Rocket } from 'lucide-react';
import RevealOnScroll from '../Components/Common/RevealOnScroll';
import { servicesData, processStages } from '../data/servicesData';

const Services = () => {
    const iconMap = {
        ShoppingBag: <ShoppingBag size={24} />,
        Layout: <LayoutDashboard size={24} />,
        Palette: <Palette size={24} />,
        Layers: <Layers size={24} />,
        Code: <Cpu size={24} />,
        Zap: <Zap size={24} />,
        Globe: <Globe size={24} />,
        Rocket: <Rocket size={24} />
    };

    return (
        <div className="min-h-screen pt-40 pb-24 bg-cream selection:bg-terracotta selection:text-white overflow-hidden">
            <div className="container-custom">
                {/* Header */}
                <header className="mb-20">
                    <RevealOnScroll>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-[10px] uppercase tracking-[.4em] font-bold text-terracotta">Excellence Layers</span>
                            <div className="w-12 h-[1px] bg-border" />
                        </div>
                        <h1 className="text-6xl md:text-8xl font-display leading-[0.9] text-text-primary tracking-tighter mb-8">
                            Premium Offerings
                        </h1>
                        <p className="text-[18px] md:text-xl font-sans font-light text-text-secondary leading-relaxed max-w-2xl">
                            Specialized in bridging the gap between high-end aesthetics and core engineering resilience. I build products that function as beautifully as they look.
                        </p>
                    </RevealOnScroll>
                </header>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {servicesData.map((service, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.05 }}
                            className="bg-warm-white group p-10 lg:p-12 rounded-3xl border border-border/20 shadow-sm hover:shadow-xl hover:shadow-terracotta/[0.02] transition-all duration-500 relative overflow-hidden"
                        >
                            {/* Decorative number */}
                            <span className="absolute top-8 right-8 text-[60px] font-display text-terracotta/[0.03] select-none group-hover:text-terracotta/[0.08] transition-colors leading-none">
                                0{idx + 1}
                            </span>

                            <div className="relative z-10 space-y-8">
                                <div className="p-3 bg-cream-dark w-fit rounded-2xl text-terracotta group-hover:bg-terracotta group-hover:text-white transition-all duration-500">
                                    {iconMap[service.iconName] || <Layers size={24} />}
                                </div>
                                
                                <h3 className="text-2xl font-display text-text-primary tracking-tight">
                                    {service.title}
                                </h3>
                                
                                <p className="text-sm font-sans font-light text-text-secondary leading-relaxed">
                                    {service.description}
                                </p>

                                <ul className="space-y-4 pt-4 border-t border-border/10">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-text-muted">
                                            <div className="w-1.5 h-1.5 rounded-full bg-terracotta/40" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4 flex items-center justify-between">
                                    <span className="text-[10px] font-bold uppercase tracking-[.25em] text-text-muted group-hover:text-terracotta transition-colors">Start Conversation</span>
                                    <ArrowRight size={16} className="text-terracotta opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Methodology / Process */}
                <div className="pt-24 border-t border-border/20">
                    <RevealOnScroll>
                        <div className="max-w-xl mb-24">
                            <h2 className="text-4xl md:text-6xl font-display text-text-primary tracking-tight mb-6">
                                Engineering Process
                            </h2>
                            <p className="text-lg font-sans font-light text-text-secondary">A transparent, results-driven methodology designed for speed and uncompromising quality.</p>
                        </div>
                    </RevealOnScroll>

                    <div className="grid md:grid-cols-4 gap-10">
                        {processStages.map((stage, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                className="space-y-6 p-8 bg-warm-white rounded-3xl border border-border/10 relative shadow-sm"
                            >
                                <span className="text-terracotta font-display text-3xl tracking-tight opacity-40">
                                    0{stage.step}
                                </span>
                                <h4 className="text-[13px] font-bold uppercase tracking-widest text-text-primary leading-tight">
                                    {stage.title}
                                </h4>
                                <p className="text-xs font-sans font-light text-text-secondary leading-relaxed">
                                    {stage.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <RevealOnScroll>
                    <div className="mt-32 bg-charcoal p-16 md:p-24 rounded-3xl text-center relative overflow-hidden group shadow-2xl">
                        <div className="absolute inset-0 bg-terracotta/[0.08] -z-10" />
                        <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta opacity-10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
                        
                        <Sparkles className="mx-auto text-terracotta opacity-40 mb-10" size={40} />
                        <h2 className="text-4xl md:text-6xl font-display text-white mb-10 tracking-tighter leading-tight max-w-3xl mx-auto">
                            Ready to evolve your digital presence?
                        </h2>
                        <a href="#contact" className="inline-flex items-center gap-4 px-12 py-5 bg-terracotta text-white rounded-full font-bold text-xs uppercase tracking-[.3em] hover:bg-terra-dark transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-terracotta/20">
                            Start Project <ArrowRight size={16} />
                        </a>
                    </div>
                </RevealOnScroll>
            </div>
        </div>
    );
};

export default Services;
