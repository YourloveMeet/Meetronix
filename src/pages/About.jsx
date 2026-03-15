import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import RevealOnScroll from '../Components/Common/RevealOnScroll';
import { personalData, statsData, bioData } from '../data/personalData';
import { skillCategories } from '../data/skillsData';
import { timelineData, experienceData } from '../data/timelineData';

const About = () => {
    const currentJob = experienceData[0];

    // Flatten skills for the editorial display section
    const flatSkills = [
        "React", "Next.js", "Node.js", "TypeScript",
        "AWS EC2", "MongoDB", "Figma", "Unity"
    ];

    return (
        <div className="min-h-screen pt-40 pb-20 bg-cream overflow-hidden selection:bg-terracotta selection:text-white">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Column: Story */}
                    <div className="space-y-10">
                        <RevealOnScroll>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-tight text-text-primary tracking-tighter">
                                Engineer. Designer.<br />
                                <span className="text-terracotta font-normal">Builder.</span>
                            </h1>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="space-y-6 text-[18px] font-sans font-light text-text-secondary leading-relaxed max-w-xl">
                                <p>
                                    I'm Meet — a 19-year-old full-stack engineer and designer based in Ahmedabad, India. I write this not to impress, but to be honest about where I'm coming from and where I'm going.
                                </p>
                                <p>
                                    Today I work across the entire stack — React, Next.js, Node.js, MongoDB, AWS EC2, TypeScript — and I design everything in Figma first. My long-term goal is to build SaaS and AI products for international markets.
                                </p>
                            </div>
                        </RevealOnScroll>

                        {/* Social Links */}
                        <RevealOnScroll>
                            <div className="flex flex-wrap items-center gap-x-10 gap-y-4 pt-4">
                                <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-muted hover:text-terracotta transition-colors group">
                                    GitHub <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                                <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-muted hover:text-terracotta transition-colors group">
                                    LinkedIn <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                                <a href={`mailto:${personalData.email}`} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-muted hover:text-terracotta transition-colors group">
                                    Email <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Right Column: Interactive Cards */}
                    <div className="space-y-8 lg:sticky lg:top-32 font-sans">

                        {/* Status Card */}
                        <RevealOnScroll>
                            <div className="glass-card bg-warm-white/40 p-8 relative overflow-hidden group border border-border/20 rounded-3xl shadow-sm">
                                <div className="absolute top-0 right-0 p-4">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                </div>
                                <span className="text-[9px] uppercase tracking-[0.25em] text-terracotta font-bold mb-3 block">Currently Operating</span>
                                <h3 className="text-2xl font-display text-text-primary mb-2 tracking-tight">
                                    At {currentJob.company}
                                </h3>
                                <p className="text-sm font-light text-text-secondary leading-relaxed">
                                    Developing production {currentJob.tech[0]} systems and premium digital experiences as a {currentJob.role}.
                                </p>
                            </div>
                        </RevealOnScroll>

                        {/* Stats Row */}
                        <RevealOnScroll>
                            <div className="grid grid-cols-3 gap-4">
                                {statsData.slice(0, 3).map((stat, idx) => (
                                    <div key={idx} className="glass-card bg-warm-white/40 p-6 text-center group hover:bg-warm-white/70 transition-all border border-border/20 rounded-3xl">
                                        <div className="text-3xl font-display text-text-primary mb-1 tracking-tight group-hover:text-terracotta transition-colors">
                                            {stat.number}
                                        </div>
                                        <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-text-muted">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </RevealOnScroll>

                        {/* Skills List */}
                        <RevealOnScroll>
                            <div className="glass-card bg-warm-white p-8 space-y-8 border border-border/20 rounded-3xl shadow-sm">
                                <span className="text-[9px] uppercase tracking-[0.25em] text-text-muted font-bold block mb-4 underline decoration-terracotta/20 underline-offset-4">Technical Stack</span>
                                <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                                    {flatSkills.map((skill, idx) => (
                                        <div key={idx} className="relative group">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-[11px] font-bold uppercase tracking-widest text-text-primary group-hover:text-terracotta transition-colors">{skill}</span>
                                            </div>
                                            <div className="w-full h-[1px] bg-border relative overflow-hidden">
                                                <motion.div
                                                    initial={{ x: "-100%" }}
                                                    whileInView={{ x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.8, delay: idx * 0.05 }}
                                                    className="absolute inset-0 bg-terracotta/40"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>

                {/* Career Journey */}
                <div className="mt-32 pt-16 border-t border-border/20">
                    <RevealOnScroll>
                        <div className="max-w-xl mb-16">
                            <h2 className="text-4xl md:text-5xl font-display text-text-primary mb-4 tracking-tight">Career Journey</h2>
                            <p className="text-lg font-sans font-light text-text-secondary">A timeline of self-taught growth and building production systems.</p>
                        </div>
                    </RevealOnScroll>

                    <div className="relative pl-10 md:pl-0">
                        {/* Vertical Line */}
                        <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-[1px] bg-border opacity-20" />

                        <div className="space-y-20">
                            {timelineData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`relative flex flex-col md:flex-row items-center justify-between gap-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Content Container */}
                                    <div className="w-full md:w-[42%] text-left">
                                        <div className={`p-8 bg-warm-white border border-border/10 rounded-3xl shadow-sm hover:shadow-md transition-all ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                            <span className="text-terracotta font-display text-2xl mb-1 block tracking-tight">{item.year}</span>
                                            <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-text-primary mb-3">{item.title}</h3>
                                            <p className="text-sm font-sans font-light text-text-secondary leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Middle Circle */}
                                    <div className="absolute left-[39px] md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                                        <div className="w-8 h-8 rounded-full border border-border bg-cream flex items-center justify-center z-10 shadow-sm">
                                            <div className="w-2 h-2 rounded-full bg-terracotta" />
                                        </div>
                                    </div>

                                    {/* Spacer */}
                                    <div className="hidden md:block w-[42%]" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Quote */}
                <RevealOnScroll>
                    <div className="mt-32 text-center py-20 border-t border-border/20 relative">
                        <div className="max-w-4xl mx-auto space-y-8">
                            <Sparkles className="mx-auto text-terracotta opacity-20" size={32} />
                            <h3 className="text-2xl md:text-4xl font-display text-text-primary leading-relaxed tracking-tight px-4">
                                "Precision in design. Depth in engineering. Built for brands that don't settle"
                            </h3>
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-terracotta mb-1">Meet Patel</p>
                                <p className="text-[9px] uppercase tracking-[0.3em] font-bold text-text-muted">Ahmedabad, India / Remote</p>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>
        </div>
    );
};

export default About;
