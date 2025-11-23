import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import RevealOnScroll from '../Components/Common/RevealOnScroll';
import { servicesData, processStages } from '../data/servicesData';
import { fadeInUp, staggerContainer, scaleIn, cardHover } from '../utils/animations';

const Services = () => {
    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="text-center mb-20"
                >
                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-bold mb-6 gradient-text-animated"
                    >
                        Services & Expertise
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-xl text-slate-400 max-w-3xl mx-auto"
                    >
                        Comprehensive development services to bring your ideas to life
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {servicesData.map((service, index) => (
                        <RevealOnScroll key={service.id}>
                            <motion.div
                                variants={cardHover}
                                initial="rest"
                                whileHover="hover"
                                className="glass-card p-8 rounded-3xl border border-white/10 hover:border-accent/30 transition-all h-full"
                            >
                                {/* Icon & Title */}
                                <div className="text-5xl mb-4">{service.icon}</div>
                                <h3 className="text-2xl font-bold mb-4 gradient-text">{service.title}</h3>
                                <p className="text-slate-400 mb-6">{service.description}</p>

                                {/* Features List */}
                                <ul className="space-y-3 mb-6">
                                    {service.features.map((feature, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-start gap-2 text-slate-300"
                                        >
                                            <Check size={20} className="text-accent mt-0.5 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {service.technologies.slice(0, 4).map((tech, i) => (
                                        <span
                                            key={i}
                                            className={`px-3 py-1 bg-gradient-to-r ${service.color} bg-opacity-10 text-xs rounded-full border border-white/10`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </RevealOnScroll>
                    ))}
                </div>

                {/* Process Section */}
                <RevealOnScroll>
                    <div className="mb-32">
                        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text-animated">
                            My Development Process
                        </h2>
                        <p className="text-center text-slate-400 mb-16 text-lg">
                            A proven methodology to deliver excellence
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {processStages.map((stage, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="relative glass-card p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-all"
                                >
                                    {/* Number Badge */}
                                    <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg shadow-accent/30">
                                        {stage.number}
                                    </div>

                                    {/* Icon */}
                                    <div className="text-5xl mb-4">{stage.icon}</div>

                                    {/* Title & Description */}
                                    <h3 className="text-2xl font-bold mb-3 gradient-text">{stage.title}</h3>
                                    <p className="text-slate-300 leading-relaxed">{stage.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>

                {/* CTA Section */}
                <RevealOnScroll>
                    <motion.div
                        variants={scaleIn}
                        className="text-center glass-card p-12 md:p-16 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text-animated">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            Let's discuss how I can help you achieve your goals with cutting-edge technology
                            and best development practices.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-2xl shadow-accent/50 transition-all"
                            >
                                Get Started Now
                            </motion.a>

                            <motion.a
                                href="#portfolio"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-5 glass text-white font-bold rounded-full border-2 border-white/20 hover:bg-white/10 transition-all"
                            >
                                View My Work
                            </motion.a>
                        </div>
                    </motion.div>
                </RevealOnScroll>
            </div>
        </div>
    );
};

export default Services;
