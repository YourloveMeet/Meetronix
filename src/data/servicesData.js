import { ShoppingBag, LayoutDashboard, Palette, Gamepad2, Layers, Cpu, Zap, ShieldCheck, Globe, Rocket } from 'lucide-react';

export const servicesData = [
    {
        id: "luxury-ecommerce",
        category: "Web Development",
        iconName: "ShoppingBag",
        title: "Luxury Ecommerce",
        description: "Custom ecommerce experiences built for premium brands. Not templates — bespoke storefronts designed to convert international buyers.",
        features: [
            "Custom product browsing",
            "Brand-forward visual design",
            "Mobile-first architecture",
            "Global payment integration",
        ],
        startingFrom: "$800",
        icon: ShoppingBag,
    },
    {
        id: "saas-development",
        category: "SaaS Development",
        iconName: "Layout",
        title: "SaaS Web Applications",
        description: "Full-stack SaaS products with real infrastructure. From dashboard design to API architecture — built to scale.",
        features: [
            "Next.js frontend architecture",
            "Node.js + Express backend",
            "Scalable Database design",
            "AWS EC2 deployment",
        ],
        startingFrom: "$1,500",
        icon: LayoutDashboard,
    },
    {
        id: "web-design-dev",
        category: "Editorial Design",
        iconName: "Palette",
        title: "Premium Web Design",
        description: "High-fidelity Figma designs brought to life in code. For agencies and founders that want something genuinely exceptional.",
        features: [
            "Figma design system",
            "Framer Motion animations",
            "Responsive across all devices",
            "Performance optimized",
        ],
        startingFrom: "$600",
        icon: Palette,
    }
];

export const processStages = [
    { step: 1, title: "Discovery",    description: "Understanding your goals and technical requirements." },
    { step: 2, title: "Design",       description: "High-fidelity Figma mockups and design system." },
    { step: 3, title: "Development",  description: "Clean, documented code with weekly updates." },
    { step: 4, title: "Handoff",      description: "Testing, deployment, and post-launch support." },
];
