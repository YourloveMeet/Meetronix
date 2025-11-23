// Sample project data with detailed information
export const projectsData = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        category: 'web',
        description: 'A full-stack e-commerce platform with real-time inventory management, payment integration, and admin dashboard.',
        longDescription: 'Built a comprehensive e-commerce solution featuring real-time inventory tracking, secure payment processing via Stripe, advanced product filtering, shopping cart functionality, order management system, and a powerful admin dashboard for managing products, orders, and customers.',
        image: '/projects/ecommerce.jpg',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'AWS'],
        liveUrl: 'https://example.com',
        githubUrl: 'https://github.com',
        featured: true,
        challenge: 'Implementing real-time inventory updates across multiple concurrent users while maintaining data consistency.',
        solution: 'Used Redis for caching and WebSocket connections for real-time updates, with optimistic locking in MongoDB to prevent race conditions.',
        results: ['99.9% uptime', '2s average load time', '500+ daily active users']
    },
    {
        id: 2,
        title: 'Adventure RPG Game',
        category: 'game',
        description: '3D adventure game built with Unity featuring procedural terrain generation and AI-driven NPCs.',
        longDescription: 'Developed an immersive 3D RPG with procedural terrain generation, dynamic weather system, sophisticated AI for NPCs using behavior trees, quest system, inventory management, and custom shaders for stylized graphics.',
        image: '/projects/rpg-game.jpg',
        technologies: ['Unity', 'C#', 'Blender', 'Photon', 'PlayFab'],
        liveUrl: 'https://game-demo.com',
        githubUrl: 'https://github.com',
        featured: true,
        challenge: 'Optimizing performance for procedural terrain generation while maintaining visual quality.',
        solution: 'Implemented LOD system, chunk-based loading, and GPU-based terrain generation with compute shaders.',
        results: ['60 FPS on mid-range devices', '10,000+ downloads', '4.5★ rating']
    },
    {
        id: 3,
        title: 'Fitness Tracking App',
        category: 'mobile',
        description: 'Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social features.',
        longDescription: 'Created a comprehensive fitness tracking application with workout logging, nutrition tracking, progress analytics, social feed for sharing achievements, personalized workout recommendations, and integration with wearable devices.',
        image: '/projects/fitness-app.jpg',
        technologies: ['React Native', 'Firebase', 'Redux', 'HealthKit', 'Google Fit'],
        liveUrl: 'https://app-store-link.com',
        githubUrl: 'https://github.com',
        featured: true,
        challenge: 'Integrating with various health APIs while maintaining battery efficiency.',
        solution: 'Implemented background sync with exponential backoff and batch API requests to minimize battery drain.',
        results: ['50,000+ downloads', '4.7★ rating', '85% user retention']
    },
    {
        id: 4,
        title: 'AI-Powered Dashboard',
        category: 'web',
        description: 'Analytics dashboard with AI-driven insights and predictive analytics for business intelligence.',
        longDescription: 'Built an advanced business intelligence dashboard featuring real-time data visualization, machine learning-powered trend analysis, predictive analytics, custom report generation, and collaborative features for team insights.',
        image: '/projects/dashboard.jpg',
        technologies: ['Next.js', 'Python', 'TensorFlow', 'D3.js', 'PostgreSQL'],
        liveUrl: 'https://dashboard-demo.com',
        githubUrl: 'https://github.com',
        featured: false,
        challenge: 'Processing large datasets in real-time for responsive visualizations.',
        solution: 'Implemented data streaming with WebSockets, server-side data aggregation, and canvas-based rendering for performance.',
        results: ['Handle 1M+ data points', '100ms query response', '95% accuracy in predictions']
    },
    {
        id: 5,
        title: 'Multiplayer Racing Game',
        category: 'game',
        description: 'Fast-paced multiplayer racing game with realistic physics and customizable vehicles.',
        longDescription: 'Developed a high-performance multiplayer racing game featuring realistic vehicle physics, networked multiplayer for up to 8 players, vehicle customization system, multiple tracks, power-ups, and leaderboards.',
        image: '/projects/racing-game.jpg',
        technologies: ['Unity', 'C#', 'Photon', 'PlayFab', 'Blender'],
        liveUrl: 'https://racing-demo.com',
        githubUrl: 'https://github.com',
        featured: false,
        challenge: 'Maintaining synchronized gameplay across players with varying network conditions.',
        solution: 'Implemented client-side prediction, server reconciliation, and lag compensation techniques.',
        results: ['20ms average latency', '8-player support', '100+ custom vehicles']
    },
    {
        id: 6,
        title: 'Social Media App',
        category: 'mobile',
        description: 'Feature-rich social networking app with real-time messaging and content sharing.',
        longDescription: 'Created a modern social media platform with real-time chat, photo/video sharing, stories feature, likes and comments, user profiles, explore page with recommendations, and push notifications.',
        image: '/projects/social-app.jpg',
        technologies: ['React Native', 'Node.js', 'Socket.io', 'MongoDB', 'AWS S3'],
        liveUrl: 'https://social-app.com',
        githubUrl: 'https://github.com',
        featured: false,
        challenge: 'Handling real-time messaging at scale with message delivery guarantees.',
        solution: 'Built a message queue system with Redis, implemented offline message caching, and used Socket.io for real-time delivery.',
        results: ['100,000+ users', '1M+ messages/day', '99.9% delivery rate']
    }
];

// Filter projects by category
export const getProjectsByCategory = (category) => {
    if (category === 'all') return projectsData;
    return projectsData.filter(project => project.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
    return projectsData.filter(project => project.featured);
};

// Get project by ID
export const getProjectById = (id) => {
    return projectsData.find(project => project.id === parseInt(id));
};

// Categories
export const categories = [
    { id: 'all', name: 'All Projects', icon: '🚀' },
    { id: 'web', name: 'Web Development', icon: '🌐' },
    { id: 'game', name: 'Game Development', icon: '🎮' },
    { id: 'mobile', name: 'Mobile Apps', icon: '📱' }
];
