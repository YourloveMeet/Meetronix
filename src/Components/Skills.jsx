import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code, Gamepad2, Smartphone, Database, Globe, Cpu, Zap, Palette } from 'lucide-react';
import RevealOnScroll from './Common/RevealOnScroll';

const skillsData = [
    {
        category: "Web Development",
        icon: Globe,
        skills: [
            { name: "React & Next.js", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "Tailwind CSS", level: 92 },
            { name: "Node.js", level: 88 }
        ],
        color: "from-blue-400 to-cyan-400",
        bgColor: "from-blue-500/20 to-cyan-500/20"
    },
    {
        category: "Game Development",
        icon: Gamepad2,
        skills: [
            { name: "Unity", level: 90 },
            { name: "C#", level: 88 },
            { name: "Blender", level: 75 },
            { name: "Shader Graph", level: 80 }
        ],
        color: "from-purple-400 to-pink-400",
        bgColor: "from-purple-500/20 to-pink-500/20"
    },
    {
        category: "App Development",
        icon: Smartphone,
        skills: [
            { name: "React Native", level: 90 },
            { name: "Firebase", level: 85 },
            { name: "Redux", level: 87 },
            { name: "Native Modules", level: 80 }
        ],
        color: "from-green-400 to-emerald-400",
        bgColor: "from-green-500/20 to-emerald-500/20"
    },
    {
        category: "Backend & Database",
        icon: Database,
        skills: [
            { name: "Node.js & Express", level: 90 },
            { name: "MongoDB", level: 85 },
            { name: "PostgreSQL", level: 82 },
            { name: "GraphQL", level: 78 }
        ],
        color: "from-yellow-400 to-orange-400",
        bgColor: "from-yellow-500/20 to-orange-500/20"
    }
];

const SkillCard = ({ skill, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const Icon = skill.icon;

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="glass-card p-8 rounded-3xl relative overflow-hidden group cursor-pointer"
        >
            {/* Top gradient line */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${skill.color}`}></div>

            {/* Background glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${skill.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

            {/* Icon */}
            <motion.div
                className={`relative mb-6 inline-flex p-5 rounded-2xl bg-gradient-to-br ${skill.color} shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                style={{ transformStyle: "preserve-3d", transform: "translateZ(50px)" }}
            >
                <Icon size={32} className="text-white" />
            </motion.div>

            {/* Category Title */}
            <h3 className="text-2xl font-bold mb-6 relative" style={{ transform: "translateZ(40px)" }}>
                {skill.category}
            </h3>

            {/* Skills with Progress */}
            <div className="space-y-4 relative" style={{ transform: "translateZ(30px)" }}>
                {skill.skills.map((item, i) => (
                    <div key={i}>
                        <div className="flex justify-between mb-2">
                            <span className="text-sm text-slate-300">{item.name}</span>
                            <span className="text-sm font-semibold text-accent">{item.level}%</span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${item.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: i * 0.1 + index * 0.1 }}
                                className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                    animate={{ x: ['-100%', '200%'] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                                />
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Floating orb */}
            <motion.div
                className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${skill.color} opacity-20 blur-3xl rounded-full`}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity }}
            />
        </motion.div>
    );
};

const Skills = () => {
    return (
        <div className="container-custom">
            <RevealOnScroll>
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Technical <span className="gradient-text-animated">Arsenal</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-400 max-w-3xl mx-auto"
                    >
                        A diverse set of cutting-edge tools and technologies I master to bring creative ideas to life across different platforms.
                    </motion.p>
                </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
                {skillsData.map((skill, index) => (
                    <SkillCard key={index} skill={skill} index={index} />
                ))}
            </div>

            {/* Additional Tech Stack */}
            <RevealOnScroll>
                <div className="mt-20 text-center">
                    <h3 className="text-2xl font-bold mb-8 gradient-text">Also Proficient In</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Docker', 'AWS', 'Git', 'Figma', 'Photoshop', 'VS Code', 'Postman', 'Jest'].map((tech, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="px-6 py-3 glass rounded-full border border-white/10 hover:border-accent/30 transition-all cursor-pointer"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </RevealOnScroll>
        </div>
    );
};

export default Skills;

