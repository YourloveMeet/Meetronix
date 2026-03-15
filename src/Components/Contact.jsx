import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight, Instagram, Linkedin, Twitter, Github } from 'lucide-react';
import RevealOnScroll from './Common/RevealOnScroll';
import { personalData } from '../data/personalData';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
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
        const { name, email, subject, message } = formData;
        const mailtoLink = `mailto:${personalData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <section className="section-padding bg-cream" id="contact">
            <div className="container-custom">
                <RevealOnScroll>
                    <div className="mb-20">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-[10px] uppercase tracking-[.4em] font-bold text-terracotta">Global Inquiries</span>
                            <div className="w-12 h-[1px] bg-border" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-display text-text-primary leading-tight tracking-tight mb-8">
                            Get In Touch
                        </h2>
                        <p className="text-lg font-sans font-light text-text-secondary max-w-2xl leading-relaxed">
                            Currently open for strategic partnerships and high-impact digital engineering.
                        </p>
                    </div>
                </RevealOnScroll>

                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Left Side: Info */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-10">
                            <div className="group cursor-pointer">
                                <span className="text-[9px] font-bold uppercase tracking-[.4em] text-text-muted mb-3 block group-hover:text-terracotta transition-colors">Direct Mail</span>
                                <h4 className="text-2xl font-display text-text-primary border-b border-border/20 pb-4 group-hover:border-terracotta/40 transition-all">{personalData.email}</h4>
                            </div>
                            
                            <div className="group cursor-pointer">
                                <span className="text-[9px] font-bold uppercase tracking-[.4em] text-text-muted mb-3 block group-hover:text-terracotta transition-colors">Coordinates</span>
                                <h4 className="text-2xl font-display text-text-primary border-b border-border/20 pb-4 group-hover:border-terracotta/40 transition-all">{personalData.location}</h4>
                            </div>

                            <div className="flex items-center gap-4 pt-4">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-xs font-bold uppercase tracking-widest text-text-primary underline decoration-terracotta decoration-2 underline-offset-4">Worldwide Availability</span>
                            </div>
                        </div>

                        {/* Social Sphere */}
                        <div className="flex flex-wrap gap-x-8 gap-y-4 pt-10 border-t border-border/20">
                            {[
                                { name: 'Instagram', link: personalData.instagram },
                                { name: 'LinkedIn', link: personalData.linkedin },
                                { name: 'GitHub', link: personalData.github }
                            ].map((social, i) => (
                                <a key={i} href={social.link} target="_blank" rel="noreferrer" className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted hover:text-terracotta transition-colors flex items-center gap-2 group">
                                    {social.name} <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="lg:col-span-7">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-warm-white p-10 lg:p-14 rounded-3xl shadow-xl shadow-terracotta/[0.02] border border-border/20"
                        >
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
                                            placeholder="Meet Patel"
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
                                            placeholder="meet@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2 group">
                                    <label className="text-[9px] font-bold uppercase tracking-[.4em] text-text-muted transition-colors group-focus-within:text-terracotta">Subject</label>
                                    <input 
                                        type="text" 
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border-b border-border/40 py-3 focus:outline-none focus:border-terracotta transition-all font-display text-xl text-text-primary placeholder:text-text-muted/20"
                                        placeholder="Project Collaboration"
                                    />
                                </div>

                                <div className="space-y-2 group">
                                    <label className="text-[9px] font-bold uppercase tracking-[.4em] text-text-muted transition-colors group-focus-within:text-terracotta">Briefing</label>
                                    <textarea 
                                        rows="3" 
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border-b border-border/40 py-3 focus:outline-none focus:border-terracotta transition-all font-sans font-light text-text-secondary placeholder:text-text-muted/20 resize-none leading-relaxed text-base"
                                        placeholder="Discussing your vision..."
                                    ></textarea>
                                </div>

                                <div className="pt-4">
                                    <button 
                                        type="submit"
                                        className="btn-primary w-full flex items-center justify-center gap-4"
                                    >
                                        Send Message <ArrowRight size={16} />
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
