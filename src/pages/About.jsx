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
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Story */}
                    <div className="space-y-10">
                        <RevealOnScroll>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display leading-[1.1] text-text-primary tracking-tighter">
                                Full-Stack Engineer <br />
                                <span className="text-text-secondary font-sans font-light text-[0.4em] uppercase tracking-[0.4em] mt-4 block opacity-60">Building for the next billion</span>
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
                    <RevealOnScroll>
                        <div className="space-y-8 lg:sticky lg:top-32 font-sans">
                            {/* Status Card */}
                            <div className="glass-card bg-warm-white/40 p-8 relative overflow-hidden group border border-border/20 rounded-3xl shadow-sm">
                                <div className="absolute top-0 right-0 p-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                </div>
                                <span className="text-[9px] uppercase tracking-[0.25em] text-terracotta font-bold mb-3 block">Currently Operating</span>
                                <h3 className="text-2xl font-display text-text-primary mb-2 tracking-tight">
                                    At {currentJob.company}
                                </h3>
                                <p className="text-sm font-light text-text-secondary leading-relaxed">
                                    Developing production {currentJob.tech[0]} systems and premium digital experiences as a {currentJob.role}.
                                </p>
                            </div>

                            {/* Stats Row */}
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

                            {/* Skills List */}
                            <div className="glass-card bg-warm-white p-8 space-y-8 border border-border/20 rounded-3xl shadow-sm">
                                <span className="text-[9px] uppercase tracking-[0.25em] text-text-muted font-bold block mb-4 underline decoration-terracotta/20 underline-offset-4">Technical Stack</span>
                                <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                                    {flatSkills.map((skill, idx) => (
                                        <div key={idx} className="relative group">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-[11px] font-bold uppercase tracking-widest text-text-primary group-hover:text-terracotta transition-colors">{skill}</span>
                                            </div>
                                            <div className="w-full h-[1px] bg-border relative overflow-hidden">
                                                <div className="absolute inset-0 bg-terracotta/40 w-full" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>

                <div className="mt-32 pt-16 border-t border-border/10">
                    <div className="max-w-xl mb-12">
                        <h2 className="text-3xl md:text-5xl font-display text-text-primary mb-3 tracking-tight">Career Journey</h2>
                        <p className="text-base font-sans font-light text-text-secondary leading-relaxed">The evolution of a self-taught engineer building production-grade systems.</p>
                    </div>

                    <div className="relative pl-12 border-l-2 border-border/10 ml-4 space-y-12">
                        {timelineData.map((item, index) => (
                            <div
                                key={index}
                                className="relative pb-4"
                            >
                                {/* Year Indicator Dot */}
                                <div className="absolute -left-[54.5px] top-1.5 flex items-center justify-center">
                                    <div className="w-[12px] h-[12px] rounded-full bg-terracotta ring-4 ring-cream shadow-sm" />
                                </div>
                                
                                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-10 mb-2">
                                    <span className="text-terracotta font-display text-2xl tracking-tight leading-none min-w-[65px]">{item.year}</span>
                                    <h3 className="text-[13px] font-bold uppercase tracking-[0.1em] text-text-primary leading-none">{item.title}</h3>
                                </div>
                                <p className="text-[15px] font-sans font-light text-text-secondary leading-relaxed max-w-2xl opacity-90">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Quote */}
                <RevealOnScroll>
                    <div className="mt-32 text-center py-20 border-t border-border/20 relative">
                        <div className="max-w-4xl mx-auto space-y-8">
                            <Sparkles className="mx-auto text-terracotta opacity-20" size={32} />
                            <h3 className="text-xl md:text-3xl font-display text-text-primary leading-relaxed tracking-tight px-4 opacity-80">
                                "Obsessed with the intersection of performant code and intentional design."
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
