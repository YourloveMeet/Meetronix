import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Tag, Search, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import RevealOnScroll from '../Components/Common/RevealOnScroll';
import { blogPosts, blogCategories } from '../data/blogData';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredBlogs = blogPosts.filter(blog => {
        const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredPost = blogPosts[0];
    const secondaryPosts = filteredBlogs.slice(1);

    return (
        <div className="min-h-screen pt-40 pb-24 bg-cream selection:bg-terracotta selection:text-white overflow-hidden">
            <div className="container-custom">
                {/* Header */}
                <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <RevealOnScroll>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-[10px] uppercase tracking-[.4em] font-bold text-terracotta">Journal & Insights</span>
                            <div className="w-12 h-[1px] bg-border" />
                        </div>
                        <h1 className="text-6xl md:text-8xl font-display leading-[0.9] text-text-primary tracking-tighter">
                            Technical Journal
                        </h1>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <div className="relative w-full max-w-sm group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-text-muted transition-colors group-focus-within:text-terracotta" size={16} />
                            <input
                                type="text"
                                placeholder="Search archive..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-warm-white border border-border/20 rounded-full pl-14 pr-6 py-4 text-[10px] font-bold uppercase tracking-widest outline-none focus:border-terracotta/40 transition-all font-sans shadow-sm"
                            />
                        </div>
                    </RevealOnScroll>
                </header>

                {/* Featured Area */}
                {!searchTerm && selectedCategory === 'All' && featuredPost && (
                    <RevealOnScroll>
                        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 pb-20 mb-20 items-center group cursor-pointer border-b border-border/10">
                            <div className="aspect-video bg-cream-dark overflow-hidden relative rounded-3xl shadow-md border border-border/10">
                                <img 
                                    src={featuredPost.image || "/blog-placeholder.jpg"} 
                                    alt={featuredPost.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                                    style={{ willChange: 'transform' }}
                                />
                                <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-transparent transition-colors" />
                            </div>
                            <div className="space-y-8">
                                <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-terracotta">
                                    <Sparkles size={12} /> Spotlight Insight
                                </div>
                                <h2 className="text-4xl md:text-6xl font-display text-text-primary leading-tight tracking-tight group-hover:text-terracotta transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-lg font-sans font-light text-text-secondary leading-relaxed max-w-xl">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center gap-8 pt-2 text-[9px] uppercase tracking-[.3em] font-bold text-text-muted">
                                    <span>{featuredPost.date}</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-border" />
                                    <span>{featuredPost.readTime}</span>
                                </div>
                                <div className="pt-4">
                                    <button className="btn-primary group-hover:scale-105 transition-transform">
                                        Read Full Article
                                    </button>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                )}

                {/* Categories */}
                <div className="flex flex-wrap gap-3 md:gap-4 mb-20 border-b border-border/10 pb-6">
                    {blogCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`relative px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 rounded-full ${
                                selectedCategory === category
                                    ? "bg-terracotta text-white shadow-lg shadow-terracotta/20"
                                    : "text-text-muted hover:text-text-primary bg-warm-white border border-border/20"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <AnimatePresence mode="popLayout">
                        {(searchTerm || selectedCategory !== 'All' ? filteredBlogs : secondaryPosts).map((blog, index) => (
                            <motion.div
                                key={blog.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-video bg-cream-dark mb-6 overflow-hidden relative rounded-3xl border border-border/10 shadow-sm">
                                    <img 
                                        src={blog.image || "/blog-placeholder.jpg"} 
                                        alt={blog.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                                        style={{ willChange: 'transform' }}
                                    />
                                    <div className="absolute top-4 left-4">
                                         <span className="px-4 py-1.5 glass-card bg-white/80 backdrop-blur-xl text-[9px] font-bold uppercase tracking-widest text-text-primary rounded-full border border-white/40">
                                            {blog.category}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="space-y-3 px-2">
                                    <div className="flex items-center gap-6 text-[9px] font-bold uppercase tracking-[.25em] text-text-muted">
                                        <span>{blog.date}</span>
                                        <div className="w-1.5 h-1.5 rounded-full bg-border" />
                                        <span>{blog.readTime}</span>
                                    </div>
                                    <h3 className="text-2xl font-display text-text-primary group-hover:text-terracotta transition-colors leading-snug tracking-tight">
                                        {blog.title}
                                    </h3>
                                    <div className="pt-2 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.3em] text-terracotta opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                                        Read More <ArrowRight size={14} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {filteredBlogs.length === 0 && (
                    <div className="text-center py-24 bg-warm-white/40 rounded-3xl border border-dashed border-border/40">
                        <p className="text-text-muted font-display text-2xl tracking-tight">No results matched your search criteria.</p>
                        <button onClick={() => setSearchTerm('')} className="mt-4 text-xs font-bold uppercase tracking-widest text-terracotta underline underline-offset-4">Reset archive</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;
