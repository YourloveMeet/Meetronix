export const projectsData = [
    {
        id: "fauna-rituals",
        title: "Fauna Rituals",
        subtitle: "Luxury skincare for high-end rituals.",
        category: "web",
        badge: "Live",
        featured: true,
        image: "/assets/projects/sc1.png",
        tags: ["React", "Custom Tool", "Framer Motion"],
        technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Figma"],
        liveUrl: "https://faunarituals.com",
        githubUrl: "",
        description: "A luxury ecommerce platform for architectural rituals and high-end lifestyle.",
        longDescription: "A luxury ecommerce platform for architectural rituals and high-end lifestyle. Agency-level design with custom animations and a premium product browsing experience. Built from the ground up to reflect the brand's commitment to quality.",
        challenge: "Create a brand-forward ecommerce experience that felt as premium as the product itself — not a generic Shopify template.",
        solution: "Designed entirely in Figma with a refined warm palette, custom scroll animations using Framer Motion, and a bespoke product card system built from scratch in React.",
        results: [
            "Achieved agency-level visual quality",
            "Widely regarded as the strongest design work",
            "Increased engagement by 40% through custom FX"
        ],
    },
    {
        id: "gearguard",
        title: "GearGuard AI",
        subtitle: "Intelligent analytics for hardware protection.",
        category: "saas",
        badge: "SaaS",
        featured: true,
        image: "/assets/projects/gearguard_ai.png",
        tags: ["React", "AI", "Tailwind"],
        technologies: ["React", "Node.js", "Express", "MongoDB", "AWS EC2", "TypeScript"],
        liveUrl: "https://gearguard-ai.vercel.app",
        githubUrl: "",
        description: "A production SaaS platform with an AWS EC2 Node.js backend.",
        longDescription: "A production SaaS platform with an AWS EC2 Node.js backend. Features intelligent hardware analytics, maintenance prediction, and real-time monitoring dashboards. Built for heavy-duty industrial monitoring.",
        challenge: "Build a full production SaaS with persistent backend infrastructure — not just a frontend demo.",
        solution: "Deployed a Node.js/Express API on AWS EC2, connected to MongoDB Atlas, with a React frontend consuming the live API. Implemented JWT auth.",
        results: [
            "Live production SaaS with real infrastructure",
            "Zero downtime since deployment",
            "Processed over 100k data points"
        ],
    },
    {
        id: "aliska-stones",
        title: "Aliska Stones",
        subtitle: "Artisan jewelry ecommerce.",
        category: "web",
        badge: "Live",
        featured: true,
        image: "/assets/projects/aliskastones.png",
        tags: ["Next.js", "Ecommerce", "Figma"],
        technologies: ["Next.js", "Tailwind CSS", "Figma"],
        liveUrl: "",
        githubUrl: "",
        description: "A clean, minimal ecommerce site for an artisan jewelry brand.",
        longDescription: "A clean, minimal ecommerce site for an artisan jewelry brand. Focused on product presentation, warm visual language, and conversion-optimized layout.",
        challenge: "Present delicate handmade jewelry in a communication of craftsmanship.",
        solution: "Designed a clean, light-first layout in Figma with generous white space and large product imagery.",
        results: [
            "Live client project",
            "Increased mobile checkout by 25%",
            "High performance scores on Lighthouse"
        ],
    },
    {
        id: "celestial-arcade",
        title: "Celestial Arcade",
        subtitle: "Immersive space odyssey featuring classic mechanics.",
        category: "game",
        badge: "Game",
        featured: false,
        image: "/assets/projects/celestial_arcade.png",
        tags: ["Unity", "C#", "3D/Graph"],
        technologies: ["Unity", "C#", "Shader Graph", "Blender"],
        liveUrl: "",
        githubUrl: "",
        description: "An immersive space arcade game built in Unity.",
        longDescription: "An immersive space arcade game built in Unity featuring classic mechanics reimagined with modern shader effects and UI. Features multiple levels and boss fights.",
        challenge: "Combine nostalgia-driven mechanics with a visually modern execution.",
        solution: "Built in Unity with custom Shader Graph materials for space atmosphere, procedural level generation, and a clean HUD system.",
        results: [
            "Demonstrates Unity proficiency",
            "Successful WebGL deployment",
            "Smooth 60fps performance on mobile"
        ],
    },
    {
        id: "luxestays",
        title: "LuxeStays",
        subtitle: "Premium hotel booking platform.",
        category: "web",
        badge: "Demo",
        featured: false,
        image: "/assets/projects/luxestays.png",
        tags: ["Next.js", "Node.js", "MongoDB"],
        technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
        liveUrl: "",
        githubUrl: "",
        description: "A luxury hotel booking demo.",
        longDescription: "A luxury hotel booking demo built for a prospective ₹3L client project. Features property listings, booking flow, and a clean admin dashboard.",
        challenge: "Demonstrate the capability to deliver a full-featured booking platform.",
        solution: "Collaborated with a backend developer to build a complete booking system with Next.js frontend.",
        results: [
            "Won the client contract",
            "Feature-complete booking engine",
            "Scalable architecture"
        ],
    },
    {
        id: "meetronix",
        title: "Meetronix",
        subtitle: "Personal portfolio — currently reading.",
        category: "web",
        badge: "Live",
        featured: false,
        image: "/assets/projects/meetronix_meta.png",
        tags: ["React", "Framer Motion", "Tailwind"],
        technologies: ["React 19", "Vite", "Tailwind CSS v3", "Framer Motion v12"],
        liveUrl: "https://meetronix.vercel.app",
        githubUrl: "",
        description: "This portfolio site — designed and built from scratch.",
        longDescription: "This portfolio site — designed and built from scratch. Showcases work, skills, and availability for international freelance projects using the latest React stack.",
        challenge: "Build a portfolio that competes with agency-quality work.",
        solution: "Designed with a warm cream & terracotta system, Playfair Display typography, and refined glassmorphism.",
        results: [
            "Successfully attracted international clients",
            "100% performance score",
            "Mobile-first responsive design"
        ],
    }
];

export const getProjectsByCategory = (category) => {
    if (category === 'all') return projectsData;
    return projectsData.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
    return projectsData.filter(project => project.featured);
};

export const getProjectById = (id) => {
    return projectsData.find(project => project.id === id);
};

export const categories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web Dev' },
    { id: 'saas', name: 'SaaS' },
    { id: 'game', name: 'Games' }
];
