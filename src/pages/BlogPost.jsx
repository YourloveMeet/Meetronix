import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Tag, Share2 } from 'lucide-react';
import { useBlogPost } from '../hooks/useBlog';
import API from '../config/api';
import RevealOnScroll from '../Components/Common/RevealOnScroll';

export default function BlogPost() {
    const { slug } = useParams();
    const { post, loading, error } = useBlogPost(slug);

    if (loading) return <BlogPostSkeleton />;
    if (error || !post) return <NotFound error={error} />;

    return (
        <div className="min-h-screen pt-40 pb-24 bg-cream selection:bg-terracotta selection:text-white">
            <div className="container-custom max-w-4xl">
                {/* Back Button */}
                <RevealOnScroll>
                    <Link 
                        to="/blog" 
                        className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted hover:text-terracotta transition-colors mb-12 group"
                    >
                        <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" /> Back to Journal
                    </Link>
                </RevealOnScroll>

                {/* Article Header */}
                <header className="mb-16">
                    <RevealOnScroll>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="px-4 py-1.5 glass-card bg-white/80 backdrop-blur-xl text-[9px] font-bold uppercase tracking-widest text-terracotta rounded-full border border-terracotta/20">
                                {post.category}
                            </span>
                            <div className="flex items-center gap-6 text-[9px] font-bold uppercase tracking-[.25em] text-text-muted">
                                <span className="flex items-center gap-1.5"><Calendar size={12} /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                <span className="flex items-center gap-1.5"><Clock size={12} /> {post.readTime}</span>
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display text-text-primary leading-[1.1] tracking-tighter mb-8">
                            {post.title}
                        </h1>
                        <p className="text-xl font-sans font-light text-text-secondary leading-relaxed italic border-l-2 border-terracotta/30 pl-6 py-2">
                            {post.excerpt}
                        </p>
                    </RevealOnScroll>
                </header>

                {/* Cover Image */}
                <RevealOnScroll>
                    <div className="aspect-[21/9] bg-cream-dark mb-16 overflow-hidden relative rounded-3xl border border-border/10 shadow-xl">
                        <img 
                            src={API.assets.image(post.coverImage)} 
                            alt={post.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.style.background = 
                                    post.category === 'Engineering' 
                                        ? 'linear-gradient(135deg, #C8D8E8, #A8C4D4)' 
                                        : 'linear-gradient(135deg, #F0D5C8, #E8C4A8)';
                            }}
                        />
                    </div>
                </RevealOnScroll>

                {/* Content */}
                <div className="grid lg:grid-cols-[1fr_200px] gap-16">
                    <RevealOnScroll>
                        <article 
                            className="prose max-w-none"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                        
                        {/* Tags */}
                        <div className="mt-16 pt-8 border-t border-border/10 flex flex-wrap gap-2">
                            {post.tags.map(tag => (
                                <span key={tag} className="px-4 py-2 bg-warm-white border border-border/20 rounded-full text-[9px] font-bold uppercase tracking-widest text-text-muted">
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </RevealOnScroll>

                    {/* Sidebar */}
                    <aside className="hidden lg:block space-y-12">
                        <RevealOnScroll>
                            <div className="sticky top-40 space-y-12">
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[.4em] font-bold text-terracotta mb-6">Share</h4>
                                    <div className="flex flex-col gap-4">
                                        <button className="w-10 h-10 rounded-full border border-border/20 flex items-center justify-center text-text-muted hover:bg-terracotta hover:text-white transition-all">
                                            <Share2 size={16} />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[.4em] font-bold text-terracotta mb-6">Author</h4>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-border/20" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Team Meetronix</span>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </aside>
                </div>
            </div>
        </div>
    );
}

function BlogPostSkeleton() {
    return (
        <div className="min-h-screen pt-40 pb-24 bg-cream animate-pulse">
            <div className="container-custom max-w-4xl">
                <div className="w-32 h-4 bg-border/20 mb-12" />
                <div className="space-y-4 mb-16">
                    <div className="w-24 h-6 bg-border/20 rounded-full" />
                    <div className="w-full h-20 bg-border/20 rounded-2xl" />
                    <div className="w-3/4 h-20 bg-border/20 rounded-2xl" />
                </div>
                <div className="aspect-[21/9] bg-border/20 rounded-3xl mb-16" />
                <div className="space-y-4">
                    <div className="w-full h-4 bg-border/20" />
                    <div className="w-full h-4 bg-border/20" />
                    <div className="w-2/3 h-4 bg-border/20" />
                </div>
            </div>
        </div>
    );
}

function NotFound({ error }) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cream">
            <div className="text-center space-y-6">
                <h2 className="text-4xl font-display text-text-primary">Journal Entry Not Found</h2>
                <p className="text-text-secondary font-sans max-w-md mx-auto">
                    The article you're looking for might have been moved or deleted.
                    {error && <span className="block mt-2 text-xs italic opacity-50">{error}</span>}
                </p>
                <Link to="/blog" className="btn-primary inline-block">Return to Journal</Link>
            </div>
        </div>
    );
}
