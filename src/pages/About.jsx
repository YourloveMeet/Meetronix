import React from 'react';
import { motion } from 'framer-motion';
import { Code, Gamepad, Smartphone, Award, Coffee, Zap } from 'lucide-react';
import RevealOnScroll from '../Components/Common/RevealOnScroll';
import CountUpAnimation from '../Components/Common/CountUpAnimation';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

const About = () => {
    const skills = [
        { name: 'React & Next.js', level: 95, icon: Code, color: 'from-blue-500 to-cyan-500' },
        { name: 'Unity & C#', level: 90, icon: Gamepad, color: 'from-purple-500 to-pink-500' },
        { name: 'React Native', level: 88, icon: Smartphone, color: 'from-green-500 to-emerald-500' },
        { name: 'Node.js & APIs', level: 92, icon: Zap, color: 'from-yellow-500 to-orange-500' }
    ];

    const timeline = [
        {
            year: '2024',
            title: 'Senior Full Stack Developer',
            company: 'Tech Innovations Inc.',
            description: 'Leading development of enterprise web applications and mentoring junior developers.',
            icon: '💼'
        },
        {
            year: '2022',
            title: 'Game Developer',
            company: 'GameStudio Pro',
            description: 'Developed multiplayer games using Unity with 100K+ downloads.',
            icon: '🎮'
        },
        {
            year: '2021',
            title: 'Mobile App Developer',
            company: 'AppWorks',
            description: 'Built cross-platform mobile applications with React Native CLI.',
            icon: '📱'
        },
        {
            year: '2020',
            title: 'Started Freelancing',
            company: 'Self-Employed',
            description: 'Began journey as an independent developer, building websites and apps for clients.',
            icon: '🚀'
        }
    ];

    const achievements = [
        { number: 50, suffix: '+', label: 'Projects Completed', icon: Award },
        { number: 100, suffix: 'K+', label: 'Lines of Code', icon: Code },
        { number: 30, suffix: '+', label: 'Happy Clients', icon: Coffee },
        { number: 4.9, decimals: 1, label: 'Client Rating', icon: Zap }
    ];

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
                        About Me
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-xl text-slate-400 max-w-3xl mx-auto"
                    >
                        Passionate developer crafting digital experiences that make a difference
                    </motion.p>
                </motion.div>

                {/* Introduction */}
                <RevealOnScroll>
                    <div className="grid md:grid-cols-2 gap-12 mb-32 items-center">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative"
                        >
                            <div className="glass-card p-8 rounded-3xl">
                                <h2 className="text-3xl font-bold mb-6">Hello! I'm a Full Stack Developer</h2>
                                <p className="text-slate-300 mb-4 leading-relaxed">
                                    With over 3 years of experience in web development, game development, and mobile app creation,
                                    I bring ideas to life through code. My journey started with a fascination for how things work,
                                    which led me to pursue software development.
                                </p>
                                <p className="text-slate-300 mb-4 leading-relaxed">
                                    I specialize in building high-performance web applications using React and Next.js,
                                    creating immersive games with Unity, and developing cross-platform mobile apps with React Native CLI.
                                </p>
                                <p className="text-slate-300 leading-relaxed">
                                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                                    or sharing knowledge with the developer community.
                                </p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-6">
                            {achievements.map((achievement, index) => (
                                <RevealOnScroll key={index}>
                                    <motion.div
                                        whileHover={{ y: -8, scale: 1.05 }}
                                        className="glass-card p-8 rounded-2xl text-center border border-white/10 hover:border-accent/30 transition-all"
                                    >
                                        <achievement.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
                                        <div className="text-4xl font-bold gradient-text mb-2">
                                            <CountUpAnimation
                                                end={achievement.number}
                                                suffix={achievement.suffix || ''}
                                                decimals={achievement.decimals || 0}
                                            />
                                        </div>
                                        <div className="text-sm text-slate-400">{achievement.label}</div>
                                    </motion.div>
                                </RevealOnScroll>
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Skills Section */}
                <RevealOnScroll>
                    <div className="mb-32">
                        <h2 className="text-4xl font-bold mb-12 text-center">Core Skills</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-card p-6 rounded-2xl border border-white/10 hover:border-accent/30 transition-all"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <skill.icon className="w-8 h-8 text-accent" />
                                            <h3 className="text-xl font-semibold">{skill.name}</h3>
                                        </div>
                                        <span className="text-2xl font-bold gradient-text">{skill.level}%</span>
                                    </div>
                                    <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Timeline */}
                <RevealOnScroll>
                    <div className="mb-32">
                        <h2 className="text-4xl font-bold mb-16 text-center">My Journey</h2>
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30 hidden md:block" />

                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className={`relative mb-12 md:mb-16 grid md:grid-cols-2 gap-8 md:gap-16 ${index % 2 === 0 ? '' : 'md:direction-rtl'
                                        }`}
                                >
                                    {/* Year Badge */}
                                    <div className={`hidden md:flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start md:order-2'}`}>
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="glass-card px-6 py-3 rounded-full border-2 border-accent/50 font-bold text-accent"
                                        >
                                            {item.year}
                                        </motion.div>
                                    </div>

                                    {/* Content Card */}
                                    <motion.div
                                        whileHover={{ scale: 1.03, y: -5 }}
                                        className={`glass-card p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-all ${index % 2 === 0 ? '' : 'md:order-1'
                                            }`}
                                    >
                                        <div className="text-4xl mb-4">{item.icon}</div>
                                        <div className="md:hidden text-accent font-bold mb-2">{item.year}</div>
                                        <h3 className="text-2xl font-bold mb-2 gradient-text">{item.title}</h3>
                                        <p className="text-accent font-semibold mb-3">{item.company}</p>
                                        <p className="text-slate-300 leading-relaxed">{item.description}</p>
                                    </motion.div>

                                    {/* Center Dot */}
                                    <div className="absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-dark hidden md:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Call to Action */}
                <RevealOnScroll>
                    <motion.div
                        variants={scaleIn}
                        className="text-center glass-card p-12 rounded-3xl border border-white/10"
                    >
                        <h2 className="text-4xl font-bold mb-6 gradient-text-animated">
                            Let's Build Something Amazing Together
                        </h2>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </p>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-accent/50 transition-all"
                        >
                            Get In Touch
                        </motion.a>
                    </motion.div>
                </RevealOnScroll>
            </div>
        </div>
    );
};

export default About;
