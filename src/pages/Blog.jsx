import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Tag, Search } from 'lucide-react';
import RevealOnScroll from '../Components/Common/RevealOnScroll';
import { blogData, blogCategories } from '../data/blogData';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredBlogs = blogData.filter(blog => {
        const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen pt-24 pb-12">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="text-center mb-16"
                >
                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-bold mb-6 gradient-text-animated"
                    >
                        Blog & Insights
                    </motion.h1>
                    <motion.p
                        variants={fadeInUp}
                        className="text-xl text-slate-400 max-w-3xl mx-auto"
                    >
                        Sharing knowledge, experiences, and best practices in web, game, and mobile development
                    </motion.p>
                </motion.div>

                {/* Search & Filter */}
                <div className="mb-12 flex flex-col md:flex-row gap-6">
                    {/* Search */}
                    <div className="flex-1 relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full glass pl-12 pr-4 py-4 rounded-2xl border border-white/10 focus:border-accent/50 outline-none transition-all text-white placeholder-slate-500"
                        />
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2">
                        {blogCategories.map((category) => (
                            <motion.button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-6 py-4 rounded-2xl font-semibold transition-all ${selectedCategory === category
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-accent/30'
                                        : 'glass border border-white/10 text-slate-300 hover:border-accent/30'
                                    }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Featured Post */}
                {selectedCategory === 'All' && !searchTerm && (
                    <RevealOnScroll>
                        <motion.div
                            whileHover={{ y: -8 }}
                            className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-accent/30 transition-all mb-16 cursor-pointer"
                        >
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-6xl">
                                    📝
                                </div>
                                <div className="p-8 flex flex-col justify-center">
                                    <span className="text-accent font-semibold mb-4 flex items-center gap-2">
                                        <Tag size={16} /> Featured Article
                                    </span>
                                    <h2 className="text-4xl font-bold mb-4 gradient-text">
                                        {blogData[0].title}
                                    </h2>
                                    <p className="text-slate-300 mb-6 text-lg">{blogData[0].excerpt}</p>
                                    <div className="flex items-center gap-6 text-sm text-slate-400">
                                        <span className="flex items-center gap-2">
                                            <Clock size={16} />
                                            {blogData[0].readTime}
                                        </span>
                                        <span>{blogData[0].date}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-6">
                                        {blogData[0].tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </RevealOnScroll>
                )}

                {/* Blog Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="wait">
                        {filteredBlogs.map((blog, index) => (
                            <motion.div
                                key={blog.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -10 }}
                                className="glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-accent/30 transition-all cursor-pointer group"
                            >
                                {/* Blog Image */}
                                <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-50">
                                        📝
                                    </div>
                                    <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs border border-white/10">
                                        {blog.category}
                                    </div>
                                </div>

                                {/* Blog Info */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-3 gradient-text group-hover:text-accent transition-colors">
                                        {blog.title}
                                    </h3>
                                    <p className="text-slate-400 mb-4 line-clamp-3">{blog.excerpt}</p>

                                    {/* Meta Info */}
                                    <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                                        <span className="flex items-center gap-1">
                                            <Clock size={14} />
                                            {blog.readTime}
                                        </span>
                                        <span>{blog.date}</span>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {blog.tags.slice(0, 2).map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* No Results */}
                {filteredBlogs.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-2xl text-slate-400">No articles found matching your criteria</p>
                    </motion.div>
                )}

                {/* CTA Section */}
                <RevealOnScroll>
                    <motion.div
                        className="mt-20 text-center glass-card p-12 rounded-3xl border border-white/10"
                    >
                        <h2 className="text-3xl font-bold mb-4 gradient-text-animated">
                            Want to stay updated?
                        </h2>
                        <p className="text-slate-300 mb-8">
                            Get the latest articles and insights delivered to your inbox
                        </p>
                        <div className="flex gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 glass px-4 py-3 rounded-full border border-white/10 focus:border-accent/50 outline-none text-white placeholder-slate-500"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold shadow-lg shadow-accent/30"
                            >
                                Subscribe
                            </motion.button>
                        </div>
                    </motion.div>
                </RevealOnScroll>
            </div>
        </div>
    );
};

export default Blog;
