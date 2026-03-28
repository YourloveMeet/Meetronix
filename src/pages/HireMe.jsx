import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight, Sparkles, CheckCircle, Globe, ShieldCheck } from 'lucide-react';
import RevealOnScroll from '../Components/Common/RevealOnScroll';
import { personalData } from '../data/personalData';

const HireMe = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        projectType: 'Web Development',
        budget: 'Flexible',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, projectType, budget, message } = formData;
        const subject = `Inquiry: ${projectType} from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\nBudget: ${budget}\n\nMessage:\n${message}`;
        const mailtoLink = `mailto:${personalData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    const benefits = [
        { title: "Direct Communication", description: "Work directly with the engineer, no middleman delay." },
        { title: "Scalable Architecture", description: "Built with the future in mind, using the best modern stacks." },
        { title: "Design-Driven Code", description: "Aesthetics are never an afterthought. Every pixel matters." },
        { title: "Rapid Turnaround", description: "Leveraging agentic tools to ship high-quality products fast." }
    ];

    return (
        <div className="min-h-screen pt-40 pb-24 bg-cream overflow-hidden selection:bg-terracotta selection:text-white">
            <div className="container-custom">
                {/* Header Section */}
                <header className="mb-24 lg:mb-32">
                    <RevealOnScroll>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-[10px] uppercase tracking-[.4em] font-bold text-terracotta">Partnerships</span>
                            <div className="w-12 h-[1px] bg-border" />
                        </div>
                        <h1 className="text-6xl md:text-8xl font-display leading-[0.9] text-text-primary tracking-tighter mb-12">
                            Hire the<br/>
                            <span className="text-terracotta font-normal italic">Extraordinary.</span>
                        </h1>
                        <p className="text-lg md:text-xl font-sans font-light text-text-secondary leading-relaxed max-w-2xl">
                            Looking to transform your vision into a premium digital reality? I'm currently accepting select projects for international brands and forward-thinking founders.
                        </p>
                    </RevealOnScroll>
                </header>

                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Left Column: Benefits & Trust */}
                    <div className="lg:col-span-5 space-y-16">
                        <div className="space-y-10">
                            <RevealOnScroll>
                                <h2 className="text-3xl font-display text-text-primary tracking-tight mb-8">Why collaborate?</h2>
                                <div className="space-y-8">
                                    {benefits.map((benefit, i) => (
                                        <div key={i} className="flex gap-6 group">
                                            <div className="p-3 bg-cream-dark h-fit rounded-xl text-terracotta/40 group-hover:text-terracotta group-hover:bg-terracotta/10 transition-all">
                                                <CheckCircle size={20} />
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="text-[11px] font-bold uppercase tracking-widest text-text-primary">{benefit.title}</h4>
                                                <p className="text-sm font-sans font-light text-text-secondary">{benefit.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </RevealOnScroll>
                        </div>

                        {/* Direct Contact Card */}
                        <RevealOnScroll>
                            <div className="bg-charcoal p-10 rounded-3xl text-white relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Sparkles size={100} />
                                </div>
                                <h3 className="text-2xl font-display mb-6">Direct Line</h3>
                                <div className="space-y-4">
                                    <a href={`mailto:${personalData.email}`} className="flex items-center gap-3 text-sm text-white/60 hover:text-terracotta transition-colors">
                                        <Mail size={16} /> {personalData.email}
                                    </a>
                                    <a href={`tel:${personalData.phone}`} className="flex items-center gap-3 text-sm text-white/60 hover:text-terracotta transition-colors">
                                        <Phone size={16} /> {personalData.phone}
                                    </a>
                                    <div className="flex items-center gap-3 text-sm text-white/60">
                                        <Globe size={16} /> {personalData.locationShort} — Remote Worldwide
                                    </div>
                                </div>
                                <div className="mt-10 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Available for immediate kickoff</span>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>

                    {/* Right Column: Project Inquiry Form */}
                    <div className="lg:col-span-7">
                        <RevealOnScroll>
                            <div className="bg-warm-white p-10 lg:p-14 rounded-3xl border border-border/20 shadow-xl shadow-terracotta/[0.02]">
                                <form className="space-y-10" onSubmit={handleSubmit}>
                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div className="space-y-2 group">
                                            <label className="text-[9px] font-bold uppercase tracking-[.4em] text-text-muted transition-colors group-focus-within:text-terracotta">Name</label>
                                            <input 
                                                type="text" 
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-transparent border-b border-border/40 py-3 focus:outline-none focus:border-terracotta transition-all font-display text-xl text-text-primary placeholder:text-text-muted/20"
                                                placeholder="Who are you?"
                                            />
                                        </div>
                                        <div className="space-y-2 group">
                                            <label className="text-[9px] font-bold uppercase tracking-[.4em] text-text-muted transition-colors group-focus-within:text-terracotta">Email</label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full bg-transparent border-b border-border/40 py-3 focus:outline-none focus:border-terracotta transition-all font-display text-xl text-text-primary placeholder:text-text-muted/20"
                                                placeholder="email@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div className="space-y-2 group">
                                            <label className="text-[9px] font-bold uppercase tracking-[.4em] text-text-muted">Inquiry Type</label>
                                            <select 
                                                name="projectType"
                                                value={formData.projectType}
                                                onChange={handleChange}
                                                className="w-full bg-transparent border-b border-border/40 py-3 focus:outline-none focus:border-terracotta transition-all font-display text-lg text-text-primary appearance-none cursor-pointer"
                                            >
                                                <option value="Web Development">Web Development</option>
                                                <option value="SaaS Platform">SaaS Platform</option>
                                                <option value="E-commerce">E-commerce</option>
                                                <option value="Brand Design">Brand Design</option>
                                                <option value="AI Integration">AI Integration</option>
                                            </select>
                                        </div>
                                        <div className="space-y-2 group">
                                            <label className="text-[9px] font-bold uppercase tracking-[.4em] text-text-muted">Budget Range</label>
                                            <select 
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                className="w-full bg-transparent border-b border-border/40 py-3 focus:outline-none focus:border-terracotta transition-all font-display text-lg text-text-primary appearance-none cursor-pointer"
                                            >
                                                <option value="Flexible">Flexible</option>
                                                <option value="$1k - $3k">$1k - $3k</option>
                                                <option value="$3k - $10k">$3k - $10k</option>
                                                <option value="$10k+">$10k+</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2 group">
                                        <label className="text-[9px] font-bold uppercase tracking-[.4em] text-text-muted transition-colors group-focus-within:text-terracotta">Project Vision</label>
                                        <textarea 
                                            rows="4" 
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-transparent border-b border-border/40 py-3 focus:outline-none focus:border-terracotta transition-all font-sans font-light text-text-secondary placeholder:text-text-muted/20 resize-none leading-relaxed text-base"
                                            placeholder="Tell me about the extraordinary thing we're building..."
                                        ></textarea>
                                    </div>

                                    <div className="pt-4 flex flex-col gap-6">
                                        <button 
                                            type="submit"
                                            className="bg-terracotta text-white px-12 py-5 rounded-full font-bold text-xs uppercase tracking-[.3em] hover:bg-terra-dark transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-terracotta/20 flex items-center justify-center gap-4 group"
                                        >
                                            Submit Request <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        
                                        <div className="flex items-center justify-center gap-4 text-text-muted">
                                            <ShieldCheck size={14} />
                                            <span className="text-[9px] font-bold uppercase tracking-widest">Privacy guaranteed. No spam, ever.</span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HireMe;
