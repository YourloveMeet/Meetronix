import { Globe, Gamepad2, Smartphone, Database } from 'lucide-react';

export const skillCategories = [
    {
        category: "Website Development",
        icon: Globe,
        skills: [
            { name: "React & Next.js", focus: "Premium Architectures", status: "Master", metric: "40+ Builds" },
            { name: "TypeScript", focus: "Type Safety", status: "Core", metric: "Daily Ops" },
            { name: "Tailwind CSS", focus: "Precision Styling", status: "Core", metric: "High Volume" },
            { name: "Node.js", focus: "Runtime Efficiency", status: "Core", metric: "30+ Systems" }
        ]
    },
    {
        category: "Game Development",
        icon: Gamepad2,
        skills: [
            { name: "Unity", focus: "Real-time Interaction", status: "Master", metric: "3+ Years" },
            { name: "C#", focus: "Game Logic", status: "Core", metric: "Daily Ops" },
            { name: "Blender", focus: "3D Modeling", status: "Core", metric: "Creative Work" },
            { name: "Shader Graph", focus: "Visual Effects", status: "Specialist", metric: "Advanced" }
        ]
    },
    {
        category: "App Development",
        icon: Smartphone,
        skills: [
            { name: "React Native", focus: "Cross-Platform", status: "Core", metric: "Enterprise" },
            { name: "Firebase", focus: "BaaS Solutions", status: "Core", metric: "Production" },
            { name: "Redux", focus: "State Architecture", status: "Specialist", metric: "Complex Apps" },
            { name: "Native Modules", focus: "Deep Integration", status: "Core", metric: "Advanced" }
        ]
    },
    {
        category: "Backend & Database",
        icon: Database,
        skills: [
            { name: "Node.js & Express", focus: "API Resilience", status: "Master", metric: "Production" },
            { name: "MongoDB", focus: "NoSQL Architectures", status: "Master", metric: "Cloud Scale" },
            { name: "PostgreSQL", focus: "Relational Logic", status: "Core", metric: "Data Integrity" },
            { name: "GraphQL", focus: "Query Optimization", status: "Specialist", metric: "Microservices" }
        ]
    }
];

export const complementaryTools = [
    "Docker", "AWS EC2", "Git", "Figma",
    "Photoshop", "VS Code", "Postman", "Jest", "Cursor"
];

export const designSkills = [
    "Figma (UI/UX Design)",
    "Design Systems",
    "Glassmorphism & Motion UI",
    "Responsive Design",
    "Luxury & Brand-Driven Design",
];
