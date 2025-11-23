// Services and capabilities data
export const servicesData = [
    {
        id: 1,
        title: 'Web Development',
        icon: '🌐',
        description: 'Full-stack web applications with modern frameworks and best practices.',
        features: [
            'Responsive design across all devices',
            'Performance optimization',
            'SEO-friendly architecture',
            'Progressive Web Apps (PWA)',
            'API development & integration',
            'Database design & optimization'
        ],
        technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL'],
        color: 'from-blue-500 to-cyan-500'
    },
    {
        id: 2,
        title: 'Game Development',
        icon: '🎮',
        description: 'Engaging games for PC, mobile, and web platforms using Unity.',
        features: [
            '2D and 3D game development',
            'Physics & animation systems',
            'Multiplayer networking',
            'In-app purchases & monetization',
            'Cross-platform deployment',
            'Performance optimization'
        ],
        technologies: ['Unity', 'C#', 'Photon', 'PlayFab', 'Blender', 'Shader Graph'],
        color: 'from-purple-500 to-pink-500'
    },
    {
        id: 3,
        title: 'Mobile App Development',
        icon: '📱',
        description: 'Native-quality mobile apps for iOS and Android using React Native.',
        features: [
            'Cross-platform development',
            'Native module integration',
            'Push notifications',
            'Offline-first architecture',
            'App Store deployment',
            'Analytics & crash reporting'
        ],
        technologies: ['React Native', 'Firebase', 'Redux', 'Native Modules', 'React Navigation'],
        color: 'from-green-500 to-emerald-500'
    },
    {
        id: 4,
        title: 'UI/UX Design',
        icon: '🎨',
        description: 'Beautiful, intuitive interfaces that enhance user experience.',
        features: [
            'User research & personas',
            'Wireframing & prototyping',
            'Visual design systems',
            'Interaction design',
            'Usability testing',
            'Accessibility compliance'
        ],
        technologies: ['Figma', 'Adobe XD', 'Sketch', 'Framer', 'Principle'],
        color: 'from-orange-500 to-red-500'
    },
    {
        id: 5,
        title: 'API Development',
        icon: '⚡',
        description: 'Robust and scalable APIs for your applications.',
        features: [
            'RESTful API design',
            'GraphQL implementation',
            'Authentication & authorization',
            'Rate limiting & caching',
            'API documentation',
            'Microservices architecture'
        ],
        technologies: ['Node.js', 'Express', 'GraphQL', 'JWT', 'Redis', 'Docker'],
        color: 'from-yellow-500 to-orange-500'
    },
    {
        id: 6,
        title: 'DevOps & Deployment',
        icon: '🚀',
        description: 'Seamless deployment and continuous integration pipelines.',
        features: [
            'CI/CD pipeline setup',
            'Cloud infrastructure (AWS, GCP)',
            'Container orchestration',
            'Monitoring & logging',
            'Automated testing',
            'Performance optimization'
        ],
        technologies: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions', 'Terraform'],
        color: 'from-indigo-500 to-purple-500'
    }
];

// Process stages
export const processStages = [
    {
        number: '01',
        title: 'Discovery',
        description: 'Understanding your goals, target audience, and project requirements through detailed consultation.',
        icon: '🔍'
    },
    {
        number: '02',
        title: 'Planning',
        description: 'Creating a comprehensive roadmap with timelines, milestones, and technical specifications.',
        icon: '📋'
    },
    {
        number: '03',
        title: 'Design',
        description: 'Crafting intuitive interfaces and user experiences with modern design principles.',
        icon: '🎨'
    },
    {
        number: '04',
        title: 'Development',
        description: 'Building your solution with clean code, best practices, and agile methodology.',
        icon: '💻'
    },
    {
        number: '05',
        title: 'Testing',
        description: 'Rigorous quality assurance to ensure reliability, performance, and security.',
        icon: '✅'
    },
    {
        number: '06',
        title: 'Delivery',
        description: 'Smooth deployment, documentation, and ongoing support for your success.',
        icon: '🚀'
    }
];

// Testimonials (optional)
export const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'CEO, TechStart',
        content: 'Outstanding work! The website exceeded our expectations and was delivered ahead of schedule.',
        rating: 5,
        avatar: '/testimonials/sarah.jpg'
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Product Manager, GameCo',
        content: 'Incredible game development skills. The final product was polished and performant.',
        rating: 5,
        avatar: '/testimonials/michael.jpg'
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        role: 'Founder, FitLife',
        content: 'The mobile app development was seamless. Highly professional and responsive throughout.',
        rating: 5,
        avatar: '/testimonials/emily.jpg'
    }
];
