// Blog posts data
export const blogData = [
    {
        id: 1,
        title: 'Building Performant React Applications',
        slug: 'building-performant-react-applications',
        excerpt: 'Learn advanced techniques for optimizing React applications including code splitting, lazy loading, and memoization.',
        content: `
# Building Performant React Applications

Performance is crucial for modern web applications. In this guide, we'll explore advanced techniques for building lightning-fast React applications.

## Key Topics

### 1. Code Splitting
Using React.lazy() and Suspense to split your code into smaller chunks...

### 2. Memoization
Leveraging useMemo and useCallback to prevent unnecessary re-renders...

### 3. Virtual Scrolling
Implementing windowing for long lists with react-window...

## Conclusion
By implementing these techniques, you can significantly improve your application's performance.
    `,
        category: 'Web Development',
        date: '2024-01-15',
        readTime: '8 min read',
        image: '/blog/react-performance.jpg',
        tags: ['React', 'Performance', 'JavaScript'],
        featured: true
    },
    {
        id: 2,
        title: 'Unity Game Optimization Tips',
        slug: 'unity-game-optimization-tips',
        excerpt: 'Comprehensive guide to optimizing Unity games for better performance across all platforms.',
        content: `
# Unity Game Optimization Tips

Game optimization is an art. Here are proven techniques to boost your Unity game's performance.

## Optimization Strategies

### 1. Asset Optimization
Properly compress textures and optimize mesh complexity...

### 2. Draw Call Batching
Reduce draw calls through static and dynamic batching...

### 3. Object Pooling
Implement object pooling for frequently instantiated objects...

## Conclusion
Optimization is an ongoing process that significantly impacts player experience.
    `,
        category: 'Game Development',
        date: '2024-01-10',
        readTime: '10 min read',
        image: '/blog/unity-optimization.jpg',
        tags: ['Unity', 'Game Dev', 'Performance'],
        featured: true
    },
    {
        id: 3,
        title: 'React Native Best Practices',
        slug: 'react-native-best-practices',
        excerpt: 'Essential best practices for building production-ready React Native applications.',
        content: `
# React Native Best Practices

Building mobile apps requires attention to detail. Follow these best practices for success.

## Best Practices

### 1. State Management
Choose the right state management solution...

### 2. Navigation
Implement smooth navigation with React Navigation...

### 3. Performance
Optimize FlatList rendering and avoid unnecessary re-renders...

## Conclusion
Following these practices will lead to better, more maintainable apps.
    `,
        category: 'Mobile Development',
        date: '2024-01-05',
        readTime: '12 min read',
        image: '/blog/react-native.jpg',
        tags: ['React Native', 'Mobile', 'Best Practices'],
        featured: false
    },
    {
        id: 4,
        title: 'Modern CSS Animations',
        slug: 'modern-css-animations',
        excerpt: 'Create stunning animations using CSS keyframes, transitions, and the Web Animations API.',
        content: `
# Modern CSS Animations

Animations bring interfaces to life. Learn how to create smooth, performant CSS animations.

## Animation Techniques

### 1. CSS Keyframes
Create complex animations with @keyframes...

### 2. Transitions
Smooth state changes with CSS transitions...

### 3. Web Animations API
Programmatic control over animations...

## Conclusion
Great animations enhance user experience when used thoughtfully.
    `,
        category: 'Web Development',
        date: '2023-12-28',
        readTime: '7 min read',
        image: '/blog/css-animations.jpg',
        tags: ['CSS', 'Animations', 'Web Design'],
        featured: false
    },
    {
        id: 5,
        title: 'Building Multiplayer Games',
        slug: 'building-multiplayer-games',
        excerpt: 'A deep dive into networking, synchronization, and creating engaging multiplayer experiences.',
        content: `
# Building Multiplayer Games

Multiplayer games present unique challenges. Here's how to tackle networking and synchronization.

## Multiplayer Concepts

### 1. Client-Server Architecture
Understanding the roles of clients and authoritative servers...

### 2. State Synchronization
Keeping game state consistent across all clients...

### 3. Lag Compensation
Techniques for smooth gameplay despite network latency...

## Conclusion
Multiplayer development is complex but incredibly rewarding.
    `,
        category: 'Game Development',
        date: '2023-12-20',
        readTime: '15 min read',
        image: '/blog/multiplayer.jpg',
        tags: ['Game Dev', 'Networking', 'Unity'],
        featured: true
    },
    {
        id: 6,
        title: 'TypeScript for React Developers',
        slug: 'typescript-for-react-developers',
        excerpt: 'Level up your React development with TypeScript for better type safety and developer experience.',
        content: `
# TypeScript for React Developers

TypeScript adds type safety to your React applications. Learn how to get started.

## TypeScript Basics

### 1. Setting Up
Configure TypeScript in your React project...

### 2. Typing Components
Properly type props and state...

### 3. Custom Hooks
Create type-safe custom hooks...

## Conclusion
TypeScript improves code quality and catches bugs early.
    `,
        category: 'Web Development',
        date: '2023-12-15',
        readTime: '9 min read',
        image: '/blog/typescript.jpg',
        tags: ['TypeScript', 'React', 'JavaScript'],
        featured: false
    }
];

// Get blog posts by category
export const getBlogsByCategory = (category) => {
    if (category === 'all') return blogData;
    return blogData.filter(post => post.category === category);
};

// Get featured blog posts
export const getFeaturedBlogs = () => {
    return blogData.filter(post => post.featured);
};

// Get blog post by slug
export const getBlogBySlug = (slug) => {
    return blogData.find(post => post.slug === slug);
};

// Get blog post by ID
export const getBlogById = (id) => {
    return blogData.find(post => post.id === parseInt(id));
};

// Blog categories
export const blogCategories = [
    'All',
    'Web Development',
    'Game Development',
    'Mobile Development',
    'Design'
];

// All unique tags
export const allTags = [...new Set(blogData.flatMap(post => post.tags))];
