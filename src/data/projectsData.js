import img1 from '../assets/Images/sc1V1.png';
import img2 from '../assets/Images/Sc2V2.png';
import img2Hero from '../assets/Images/Sc2_1.png';
import img2_2 from '../assets/Images/Sc2_2.png';
import img2_3 from '../assets/Images/Sc2_3.png';
import img2_4 from '../assets/Images/Sc2_4.png';
import img2_5 from '../assets/Images/Sc2_5.png';
import img3 from '../assets/Images/Sc3V3.png';
import img3Hero from '../assets/Images/Sc3_1.png';
import img3_2 from '../assets/Images/Sc3_2.png';
import img3_3 from '../assets/Images/Sc3_3.png';
import img3_4 from '../assets/Images/Sc3_4.png';
import img4 from '../assets/Images/Sc4V4.png';
import img4Hero from '../assets/Images/fauna-rituals.png';
import img4_2 from '../assets/Images/Screenshot 2026-07-16 231841.png';
import img4_3 from '../assets/Images/Screenshot 2026-07-16 231905.png';
import img4_4 from '../assets/Images/Screenshot 2026-07-16 231915.png';
import img4_5 from '../assets/Images/Screenshot 2026-07-16 231938.png';
import img4_6 from '../assets/Images/Screenshot 2026-07-16 232101.png';
import img5 from '../assets/Images/Sc5V5.png';
import img5Hero from '../assets/Images/Screenshot 2026-07-05 225317.png';
import img5_2 from '../assets/Images/Screenshot 2026-07-05 225406.png';
import img5_3 from '../assets/Images/Screenshot 2026-07-05 225418.png';
import img5_4 from '../assets/Images/Screenshot 2026-07-05 225429.png';
import img5_5 from '../assets/Images/Screenshot 2026-07-05 225441.png';
import img5_6 from '../assets/Images/Screenshot 2026-07-05 225500.png';
import img5_7 from '../assets/Images/Screenshot 2026-07-05 225526.png';
import img5_8 from '../assets/Images/Screenshot 2026-07-05 225546.png';
import img5_9 from '../assets/Images/Screenshot 2026-07-05 225636.png';
import img6 from '../assets/Images/Sc6V6.png';
import img6Hero from '../assets/Images/Screenshot 2026-07-17 080717.png';
import img6_2 from '../assets/Images/screenshot-2026-07-05-224033.png';
import img6_3 from '../assets/Images/screenshot-2026-07-05-224058.png';
import img6_4 from '../assets/Images/screenshot-2026-07-05-224117.png';
import img6_5 from '../assets/Images/screenshot-2026-07-05-224127.png';
import img1Interface from '../assets/Images/sc1_interface.png';
import img1Components from '../assets/Images/sc1_2.png';

export const projectsData = [
    {
        id: "hanzo",
        title: "Hanzo",
        subtitle: "Unlimited Design for Solid Startups.",
        category: "saas",
        badge: "SaaS",
        featured: true,
        color: "#f04225", // Vibrant Red
        bgColor: "#d1d5db", // Light Gray requested
        bgGradient: "linear-gradient(135deg, #f9fafb 0%, #d1d5db 50%, #9ca3af 100%)", // High-contrast silver/gray gradient
        darkText: true,
        image: img1,
        heroAspect: "aspect-[16/10]",
        galleryImages: [
            { src: img1Interface, aspect: "aspect-[3/4]", isVertical: true },
            { src: img1Components, aspect: "aspect-[16/10]", isVertical: false }
        ],
        scrollDist: "-72%",
        tags: ["React", "Design", "Figma"],
        technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
        liveUrl: "https://portfolio-temp-trevonka.framer.website/",
        githubUrl: "",
        description: "A design subscription service for startups.",
        longDescription: "Hanzo provides unlimited design for solid startups. Developed and designed by TREVONKA STUDIOS. It offers subscription-based plans to access high-quality designs for websites, apps, and branding.",
        challenge: {
            headline: "Designing a high-ticket design subscription experience.",
            description: "Startups need design services but face scaling bottlenecks. The challenge was building an experience that clearly communicates value, simplifies subscription mechanics, and maintains high trust from high-ticket prospects."
        },
        solution: {
            headline: "Fluid interactions paired with a conversion-first structure.",
            description: "We implemented an immersive design layout with sleek CSS grids, custom mouse cursors, and interactive pricing toggles. This layout reduces friction, letting founders immediately see high-quality mockups and subscribe in under 2 minutes."
        },
        results: [
            "Increased conversion rate",
            "Positive feedback from users",
            "Seamless subscription flow"
        ],
    },
    {
        id: "mcbb",
        title: "MCBB",
        subtitle: "Notre inspiration c'est VOUS.",
        category: "web",
        badge: "Ecommerce",
        featured: true,
        color: "#c29b76", // Elegant Gold/Beige
        bgColor: "#1a1410", // Deep Espresso Brown
        bgGradient: "linear-gradient(135deg, #2b1f17 0%, #150f0b 50%, #080605 100%)", // Rich warm espresso gradient
        image: img2,
        heroImage: img2Hero,
        heroAspect: "aspect-[16/9]",
        galleryImages: [
            { src: img2_2, aspect: "aspect-[16/9]", isVertical: false },
            { src: img2_3, aspect: "aspect-[4/3]", isVertical: true },
            { src: img2_4, aspect: "aspect-[16/9]", isVertical: false },
            { src: img2_5, aspect: "aspect-[4/3]", isVertical: true }
        ],
        scrollDist: "-81%",
        tags: ["E-commerce", "Framer", "React"],
        technologies: ["Framer", "React", "Tailwind CSS"],
        liveUrl: "https://mcbb-salon.framer.website/",
        githubUrl: "",
        description: "A premium hair care and beauty boutique.",
        longDescription: "MCBB is a French boutique focusing on hair care and beauty. The platform offers a seamless shopping experience for premium products and booking services, encapsulating their motto: 'Sublimez vos cheveux, révélez votre signature'.",
        challenge: {
            headline: "Bridging French beauty heritage with modern e-commerce.",
            description: "The boutique wanted to digitalize their bespoke haircare services. We had to create a sophisticated interface that reflects the premium physical atmosphere of the salon while driving product sales and online bookings."
        },
        solution: {
            headline: "Soft minimalist aesthetics and immersive prototyping.",
            description: "We designed a warm, neutral color scheme using HSL gradients, custom booking widgets, and rich animations built in Framer. The experience feels as smooth as visiting the Parisian salon in person."
        },
        results: [
            "Launched successfully in France",
            "High engagement on mobile",
            "Increased online bookings"
        ],
    },
    {
        id: "visual-narratives",
        title: "Visual Narratives",
        subtitle: "Creating Visual Narratives that Speak to Brands.",
        category: "web",
        badge: "Demo",
        featured: false,
        color: "#3b82f6", // Vibrant Blue
        bgColor: "#0a0f1a", // Deep Navy Blue
        bgGradient: "linear-gradient(135deg, #10182e 0%, #04070d 100%)", // Navy depth gradient
        image: img3,
        heroImage: img3Hero,
        heroAspect: "aspect-[16/9]",
        galleryImages: [
            { src: img3_2, aspect: "aspect-[16/9]", isVertical: false },
            { src: img3_3, aspect: "aspect-[16/9]", isVertical: false },
            { src: img3_4, aspect: "aspect-[16/9]", isVertical: false }
        ],
        scrollDist: "-77%",
        tags: ["Portfolio", "Dark Mode", "Animation"],
        technologies: ["Next.js", "GSAP", "Tailwind CSS"],
        liveUrl: "https://demo2-trevonka.framer.website/",
        githubUrl: "",
        description: "A bold, dark-themed portfolio demonstration.",
        longDescription: "A dark-themed portfolio demo designed by TREVONKA. It showcases bold typography, striking imagery, and smooth animations to present visual narratives powerfully and elegantly.",
        challenge: {
            headline: "Standing out in a crowded space of digital portfolios.",
            description: "As a demonstration showcase, this project needed to push the boundaries of digital layouts. The challenge was creating a memorable narrative structure that feels bold and interactive without distracting from the works."
        },
        solution: {
            headline: "High-contrast dark mode with GSAP text reveals.",
            description: "We utilized a dark-mode first design system, huge oversized typography, and smooth GSAP page transition effects. This combination directs the viewer's focus to key case studies while showing off creative flair."
        },
        results: [
            "Standout visual identity",
            "Used as a base for multiple client sites",
            "Award-winning typography"
        ],
    },
    {
        id: "fauna-rituals",
        title: "Fauna Rituals",
        subtitle: "Timeless Beauty, Perfected.",
        category: "web",
        badge: "Live",
        featured: true,
        color: "#10b981", // Emerald Green
        bgColor: "#04150f", // Deep Forest Green
        bgGradient: "linear-gradient(135deg, #07231a 0%, #010705 100%)", // Forest depth gradient
        image: img4,
        heroImage: img4Hero,
        heroAspect: "aspect-[16/9]",
        galleryImages: [
            { src: img4_2, aspect: "aspect-[16/9]", isVertical: false },
            { src: img4_3, aspect: "aspect-[16/9]", isVertical: false },
            { src: img4_4, aspect: "aspect-[16/9]", isVertical: false },
            { src: img4_5, aspect: "aspect-[16/9]", isVertical: false },
            { src: img4_6, aspect: "aspect-[16/9]", isVertical: false }
        ],
        scrollDist: "-84%",
        tags: ["Ecommerce", "Luxury", "React"],
        technologies: ["React", "Next.js", "Tailwind CSS"],
        liveUrl: "https://fauna-rituals-meetronix.vercel.app",
        githubUrl: "",
        description: "Elevating your skincare routine with luxurious, porcelain-inspired products.",
        longDescription: "Fauna Rituals offers a premium skincare collection, highlighting the 'Porcelain Skin Gift Set'. The e-commerce site is designed to reflect the luxury and elegance of the products, with a deep green and gold color scheme.",
        challenge: {
            headline: "Conveying the physical tactile luxury of skincare online.",
            description: "Fauna's skincare line is defined by premium ingredients and porcelain packaging. The challenge was representing these tactile qualities through a screen, ensuring the digital store feels as premium as the physical products."
        },
        solution: {
            headline: "Bespoke layout with rich tones and gold accents.",
            description: "We crafted an immersive digital boutique using deep forest greens and soft gold highlights. High-resolution imagery is paired with layout grids that present ingredients and benefits clearly and beautifully."
        },
        results: [
            "Increased premium product sales",
            "Award-winning design",
            "High customer retention"
        ],
    },
    {
        id: "druh-foundation",
        title: "DR.UH Foundation",
        subtitle: "Science-based research organization.",
        category: "saas",
        badge: "Research",
        featured: true,
        color: "#06b6d4", // Cyan
        bgColor: "#ffe4eb", // Proper Pastel Pink
        bgGradient: "linear-gradient(135deg, #ffffff 0%, #ffd6e0 50%, #ffb3c6 100%)", // Vibrant whitish to pink gradient
        darkText: true,
        image: img5,
        heroImage: img5Hero,
        heroAspect: "aspect-[16/9]",
        galleryImages: [
            { src: img5_2, aspect: "aspect-[16/9]", isVertical: false },
            { src: img5_3, aspect: "aspect-[16/9]", isVertical: false },
            { src: img5_4, aspect: "aspect-[16/9]", isVertical: false },
            { src: img5_5, aspect: "aspect-[16/9]", isVertical: false },
            { src: img5_7, aspect: "aspect-[16/9]", isVertical: false },
            { src: img5_9, aspect: "aspect-[16/9]", isVertical: false }
        ],
        scrollDist: "-90%",
        tags: ["Corporate", "Web3", "Science"],
        technologies: ["React", "Three.js", "Tailwind CSS"],
        liveUrl: "https://www.druhfoundation.com/en",
        githubUrl: "",
        description: "Fusing traditional herbal medicine with modern microbial fermentation.",
        resultsText: {
            headline: "Validating bio-technology and securing key partnerships.",
            description: "The redesigned digital presence successfully communicated clinical validations to stakeholders. This directly led to securing three new institutional research partnerships and boosted international inquiry volume by 45% in the first quarter."
        },
        longDescription: "DR.UH FOUNDATION is a science-based research organization that fuses traditional herbal medicine materials with modern microbial fermentation technology to develop highly functional biomaterials and products.",
        challenge: {
            headline: "Explaining bio-conversion science in a simple layout.",
            description: "The foundation merges traditional herbal medicine with microbial fermentation. We had to present complex biological data and clinical results in a way that remains approachable for corporate stakeholders and laymen."
        },
        solution: {
            headline: "Three.js interactive models and structured data cards.",
            description: "We integrated lightweight 3D interactive models to visualize microbial fermentation alongside clean grid components displaying clinical research metrics. The layout balances science with clean corporate branding."
        },
        results: [
            "Secured new research partnerships",
            "Improved stakeholder communication",
            "Clear technical documentation"
        ],
    },
    {
        id: "kamaa",
        title: "KAMAA",
        subtitle: "Technology in Korea, Growth in Asia.",
        category: "web",
        badge: "Corporate",
        featured: false,
        color: "#6366f1", // Indigo
        bgColor: "#0b0a1a", // Deep Indigo
        bgGradient: "linear-gradient(135deg, #11102b 0%, #03030b 100%)", // Indigo depth gradient
        image: img6,
        heroImage: img6Hero,
        heroAspect: "aspect-[16/9]",
        galleryImages: [
            { src: img6_2, aspect: "aspect-[16/9]", isVertical: false },
            { src: img6_3, aspect: "aspect-[16/9]", isVertical: false },
            { src: img6_4, aspect: "aspect-[16/9]", isVertical: false },
            { src: img6_5, aspect: "aspect-[16/9]", isVertical: false }
        ],
        scrollDist: "-87%",
        tags: ["Advisory", "Finance", "React"],
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        liveUrl: "https://www.kamaa.group/en",
        githubUrl: "",
        description: "Korea Asia M&A Advisory.",
        longDescription: "KAMAA is a trusted advisory firm focused on cross-border M&A and capital advisory between Korea and Asia. Delivering strategic insights, deal execution, and long-term value for investors and businesses.",
        challenge: {
            headline: "Establishing cross-border credibility and trust.",
            description: "Financial advisory requires an iron-clad reputation. The challenge was creating a digital headquarters that conveys institutional trust and cross-border M&A advisory expertise to Korean and Asian enterprise clients."
        },
        solution: {
            headline: "Clean international typography and absolute structural grid.",
            description: "We focused on a clean, professional corporate design. We utilized high-end sans-serif fonts, structured content tables, and clear visual summaries of completed transactions to quickly convey credibility."
        },
        approachText: {
            headline: "Strategic institutional architecture.",
            description: "We structured the data hierarchy to mirror a high-tier investment bank, emphasizing data clarity, market insights, and executive summaries for fast decision-making by international investors."
        },
        resultsText: {
            headline: "Expanding advisory footprint across the Asian market.",
            description: "The elevated corporate platform significantly enhanced KAMAA's institutional authority, establishing strong digital presence and streamlining the consultation process."
        }
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

