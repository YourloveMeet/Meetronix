import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Database, Gamepad2, Layers, Cpu, Zap, ShieldCheck } from 'lucide-react';
import RevealOnScroll from './Common/RevealOnScroll';
import { skillCategories, complementaryTools } from '../data/skillsData';

const iconMap = {
    Globe: Globe,
    Smartphone: Smartphone,
    Database: Database,
    Gamepad2: Gamepad2,
    Layers: Layers,
    Cpu: Cpu,
    Zap: Zap,
    ShieldCheck: ShieldCheck
};

const SkillCard = React.memo(({ category, index }) => {
    const Icon = iconMap[category.iconName] || Globe;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.6 }}
            className="group relative bg-warm-white border border-border/40 p-10 rounded-3xl transition-all duration-500 hover:shadow-xl hover:shadow-terracotta/[0.03]"
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-10">
                <div className="flex items-center gap-5">
                    <div className="w-12 h-12 flex items-center justify-center bg-cream-dark rounded-2xl group-hover:bg-terracotta group-hover:text-white transition-all duration-500">
                        <Icon size={22} className="transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <h3 className="text-2xl font-display text-text-primary tracking-tight">{category.name}</h3>
                </div>
                <div className="text-[9px] uppercase tracking-[.4em] font-bold text-terracotta/40">
                    CORE.0{index + 1}
                </div>
            </div>

            {/* Technical Specification Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-border/20">
                            <th className="pb-4 text-[9px] uppercase tracking-[.4em] font-bold text-text-muted w-1/3">Tech</th>
                            <th className="pb-4 text-[9px] uppercase tracking-[.4em] font-bold text-text-muted hidden md:table-cell">Focus</th>
                            <th className="pb-4 text-[9px] uppercase tracking-[.4em] font-bold text-text-muted text-right">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border/10">
                        {category.skills.map((item, i) => (
                            <tr key={i} className="group/row">
                                <td className="py-4 pr-4">
                                    <span className="text-[11px] font-bold tracking-widest text-text-primary uppercase group-hover/row:text-terracotta transition-colors">
                                        {item.name}
                                    </span>
                                </td>
                                <td className="py-4 px-4 hidden md:table-cell">
                                    <span className="text-[12px] font-sans font-light text-text-secondary">
                                        {item.focus}
                                    </span>
                                </td>
                                <td className="py-4 pl-4 text-right">
                                    <span className="inline-flex items-center px-3 py-1 bg-terracotta/5 border border-terracotta/10 text-[9px] font-bold uppercase tracking-widest text-terracotta rounded-full">
                                        {item.metric}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </motion.div>
    );
});

SkillCard.displayName = 'SkillCard';

const Skills = () => {
    return (
        <section className="section-padding bg-cream" id="skills">
            <div className="container-custom">
                <RevealOnScroll>
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-[10px] uppercase tracking-[.4em] font-bold text-terracotta">Technical Intelligence</span>
                            <div className="w-12 h-[1px] bg-border" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-display text-text-primary leading-tight tracking-tight mb-8">
                            Core Expertise
                        </h2>
                        <p className="text-lg font-sans font-light text-text-secondary max-w-2xl leading-relaxed">
                            Engineering stacks mastered for high-performance interfaces and scalable foundations.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <SkillCard key={index} category={category} index={index} />
                    ))}
                </div>

                {/* Additional Tech Stack */}
                <RevealOnScroll>
                    <div className="mt-12 pt-10 border-t border-border/20">
                        <div className="grid lg:grid-cols-12 gap-10 items-center">
                            <div className="lg:col-span-4">
                                <h3 className="text-2xl font-display text-text-primary mb-2">Ecosystem</h3>
                                <p className="text-sm font-sans font-light text-text-secondary leading-relaxed">Frameworks that complete my production pipeline.</p>
                            </div>
                            <div className="lg:col-span-8 flex flex-wrap gap-2 lg:justify-end">
                                {complementaryTools.map((tech, i) => (
                                    <motion.span
                                        key={i}
                                        whileHover={{ y: -2 }}
                                        className="px-5 py-2.5 bg-warm-white border border-border/40 rounded-full text-[9px] font-bold uppercase tracking-[.2em] text-text-secondary hover:text-white hover:bg-terracotta hover:border-terracotta transition-all cursor-default"
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </section>
    );
};

export default Skills;
