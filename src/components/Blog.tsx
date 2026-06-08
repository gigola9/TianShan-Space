import { useState, useMemo, useEffect, MouseEvent } from 'react';
import { blogPosts, dictionary } from '../data';
import { BlogPost, Language } from '../types';
import { ArrowLeft, Calendar, Clock, Share2, ArrowRight, MessageSquare, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface BlogProps {
  language: Language;
  selectedBlogId: string | null;
  onSelectBlog: (id: string | null) => void;
  onContactClick: () => void;
  isArchiveView?: boolean;
  onOpenArchive?: () => void;
  onCloseArchive?: () => void;
}

export default function Blog({
  language,
  selectedBlogId,
  onSelectBlog,
  onContactClick,
  isArchiveView = false,
  onOpenArchive,
  onCloseArchive,
}: BlogProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'design' | 'dev' | 'insights'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Scroll to layout top only when a blog post is actually opened
  useEffect(() => {
    if (selectedBlogId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedBlogId]);

  // Scroll to top instantly only when entering the archive view
  useEffect(() => {
    if (isArchiveView && !selectedBlogId) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [isArchiveView, selectedBlogId]);

  const filteredPosts = useMemo(() => {
    let posts = blogPosts;

    // Apply category filter
    if (activeCategory !== 'all') {
      posts = posts.filter(post => post.category === activeCategory);
    }

    // Apply search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      posts = posts.filter(post => {
        const titleEn = post.title.en.toLowerCase();
        const titleGe = post.title.ge.toLowerCase();
        const excerptEn = post.excerpt.en.toLowerCase();
        const excerptGe = post.excerpt.ge.toLowerCase();
        return (
          titleEn.includes(query) ||
          titleGe.includes(query) ||
          excerptEn.includes(query) ||
          excerptGe.includes(query)
        );
      });
    }

    return posts;
  }, [activeCategory, searchQuery]);

  // If we are on landing view, limit posts to 3 for clean bento summary flow
  const displayedPosts = useMemo(() => {
    if (isArchiveView) return filteredPosts;
    return filteredPosts.slice(0, 3);
  }, [filteredPosts, isArchiveView]);

  const selectedPost = useMemo(() => {
    if (!selectedBlogId) return null;
    return blogPosts.find(post => post.id === selectedBlogId) || null;
  }, [selectedBlogId]);

  const handleShare = (post: BlogPost, e: MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}/blogs/${post.slug}`;
    navigator.clipboard.writeText(url);
    setCopiedId(post.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const categories: { id: 'all' | 'design' | 'dev' | 'insights'; label: Record<Language, string> }[] = [
    { id: 'all', label: { en: 'All Topics', ge: 'ყველა თემა' } },
    { id: 'design', label: { en: 'Design & UX', ge: 'დიზაინი & UX' } },
    { id: 'dev', label: { en: 'Development', ge: 'დეველოპმენტი' } },
    { id: 'insights', label: { en: 'Insights', ge: 'ანალიტიკა' } },
  ];

  return (
    <section id="blog" className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-white/[0.04]">
      {/* Premium backdrop glow systems */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle_at_center,rgba(42,82,190,0.04)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Archive Breadcrumb Back link */}
        {isArchiveView && !selectedPost && (
          <button
            onClick={onCloseArchive}
            className="group inline-flex items-center gap-2.5 text-slate-400 hover:text-white text-[11px] font-mono uppercase tracking-widest font-bold py-2.5 px-4 rounded-full border border-white/[0.05] hover:border-white/15 bg-white/[0.01] hover:bg-white/[0.05] transition-all duration-300 mb-8 focus:outline-none cursor-pointer"
            id="blog-back-to-home-btn"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            <span>{language === 'en' ? 'Back to Home' : 'მთავარზე დაბრუნება'}</span>
          </button>
        )}

        <AnimatePresence mode="wait">
          {!selectedPost ? (
            <motion.div
              key="list-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="font-mono text-[9px] tracking-[0.4em] text-artistic-primary/80 font-bold uppercase block mb-3">
                  {isArchiveView 
                    ? (language === 'en' ? 'THE STUDIO JOURNAL ARCHIVE' : 'ბლოგის სრული არქივი')
                    : (language === 'en' ? 'INSIGHTS & THEORY' : 'ცოდნის გაზიარება')
                  }
                </span>
                <h2 className="text-3xl sm:text-4xl font-sans font-black text-white uppercase tracking-wider mb-4">
                  {isArchiveView 
                    ? (language === 'en' ? 'All Publications' : 'ყველა პუბლიკაცია')
                    : dictionary.blogTitle[language]
                  }
                </h2>
                <p className="text-[#F5F5F4]/60 text-sm leading-relaxed">
                  {isArchiveView 
                    ? (language === 'en' ? 'Explore our research write-ups, deep software engineering concepts, and interface theory studies.' : dictionary.blogSubtitle[language])
                    : dictionary.blogSubtitle[language]
                  }
                </p>

                {/* Instant search input exclusive for search optimization inside Archive */}
                {isArchiveView && (
                  <div className="relative max-w-md mx-auto mt-8" id="blog-search-container">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                      <Search className="w-4 h-4 text-slate-500" />
                    </div>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={language === 'en' ? 'Filter publications...' : 'ჩაწერეთ საძიებო ტექსტი...'}
                      className="w-full bg-[#121212]/80 border border-white/[0.08] focus:border-artistic-primary/50 text-[#F5F5F4] text-[13px] rounded-full pl-11 pr-10 py-3 focus:outline-none transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute inset-y-0 right-4 flex items-center text-slate-500 hover:text-white transition-colors focus:outline-none cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                )}

                {/* Filter Categories with high contrast styling preset */}
                <div className="flex flex-wrap items-center justify-center gap-2 mt-8" id="blog-category-filters">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`text-[11px] font-mono font-bold tracking-wider uppercase px-4 py-1.5 rounded-full border transition-all duration-300 focus:outline-none cursor-pointer ${
                        activeCategory === cat.id
                          ? 'bg-artistic-primary border-artistic-primary text-white shadow-[0_4px_12px_rgba(42,82,190,0.25)]'
                          : 'border-white/[0.06] hover:border-white/15 text-[#F5F5F4]/60 hover:text-white bg-[#121212]/40'
                      }`}
                    >
                      {cat.label[language]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Zero search hits state representation */}
              {displayedPosts.length === 0 ? (
                <div className="text-center py-20 border border-white/[0.04] bg-[#121212]/30 rounded-2xl max-w-lg mx-auto" id="blog-no-results">
                  <p className="text-slate-400 text-sm font-medium mb-3">
                    {language === 'en' ? 'No articles matched your criteria.' : 'ბლოგები მითითებული ფილტრით ვერ მოიძებნა.'}
                  </p>
                  <button
                    onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                    className="text-[11px] font-mono text-artistic-primary hover:text-white transition-colors underline uppercase tracking-wider"
                  >
                    {language === 'en' ? 'Reset Filters' : 'ფილტრების გასუფთავება'}
                  </button>
                </div>
              ) : (
                <>
                  {/* Grid Layout of blogs */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="blog-posts-grid">
                    {displayedPosts.map((post, idx) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                        onClick={() => onSelectBlog(post.id)}
                        className="group flex flex-col h-full bg-[#121212]/80 hover:bg-[#161616] border border-white/[0.05] hover:border-artistic-primary/40 rounded-2xl overflow-hidden transition-all duration-400 hover:shadow-[0_15px_30px_rgba(0,0,0,0.55)] hover:-translate-y-1 block cursor-pointer relative"
                        id={`blog-card-${post.id}`}
                      >
                        {/* Direct lighting on hovering */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(42,82,190,0.06),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent pointer-events-none" />

                        {/* Image banner details */}
                        <div className="h-48 w-full bg-slate-900 overflow-hidden relative">
                          <img
                            src={post.image}
                            alt={post.title[language]}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
                          <span className="absolute bottom-4 left-4 text-[9px] font-mono text-white bg-artistic-primary/85 border border-artistic-primary/25 px-2.5 py-1 rounded-full uppercase font-bold tracking-wider">
                            {post.categoryLabel[language]}
                          </span>
                        </div>

                        {/* Text information metrics */}
                        <div className="p-6 flex flex-col justify-between flex-grow">
                          <div>
                            {/* Meta items */}
                            <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500 mb-3 font-semibold">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3 text-artistic-primary/70" />
                                {post.publishedDate[language]}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-artistic-primary/70" />
                                {post.readTime[language]}
                              </span>
                            </div>

                            <h3 className="text-base font-sans font-extrabold text-[#F5F5F4] group-hover:text-artistic-primary line-clamp-2 transition-colors duration-300 uppercase tracking-wide mb-3 leading-tight">
                              {post.title[language]}
                            </h3>
                            
                            <p className="text-slate-400 text-[13px] line-clamp-3 leading-relaxed mb-6 font-normal">
                              {post.excerpt[language]}
                            </p>
                          </div>

                          <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between">
                            {/* Author info mini block */}
                            <div className="flex items-center gap-2.5">
                              <img
                                src={post.author.avatar}
                                alt={post.author.name[language]}
                                className="w-6 h-6 rounded-full object-cover border border-white/10"
                                referrerPolicy="no-referrer"
                              />
                              <span className="text-[10px] font-semibold text-slate-300 capitalize">
                                {post.author.name[language]}
                              </span>
                            </div>

                            {/* Read Post */}
                            <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider text-artistic-primary group-hover:text-white transition-colors uppercase">
                              <span>{dictionary.blogReadMore[language]}</span>
                              <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                            </div>
                          </div>

                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Curated view "See More" action card triggers fullscreen Archive */}
                  {!isArchiveView && filteredPosts.length > 3 && (
                    <div className="flex justify-center mt-12" id="blog-explore-archive-panel">
                      <button
                        onClick={onOpenArchive}
                        className="group inline-flex items-center gap-3 bg-transparent hover:bg-white/[0.03] text-white text-[12px] font-mono font-bold uppercase tracking-wider py-3.5 px-8 rounded-full border border-white/10 hover:border-artistic-primary/40 transition-all duration-300 focus:outline-none cursor-pointer"
                        id="blog-see-more-action"
                      >
                        <span>{language === 'en' ? 'Explore Full Journal Archive' : 'ჟურნალის სრული არქივი'}</span>
                        <ArrowRight className="w-4 h-4 text-artistic-primary transition-transform duration-300 group-hover:translate-x-1.5" />
                      </button>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="post-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              {/* Back Button */}
              <button
                onClick={() => onSelectBlog(null)}
                className="group inline-flex items-center gap-2.5 text-slate-400 hover:text-white text-[11px] font-mono uppercase tracking-widest font-bold py-2 px-4 rounded-full border border-white/[0.05] hover:border-white/15 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 mb-10 focus:outline-none cursor-pointer"
                id="blog-back-btn"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                <span>{dictionary.blogBack[language]}</span>
              </button>

              {/* Title Header */}
              <div className="mb-8">
                <span className="text-[10px] font-mono text-white bg-artistic-primary border border-artistic-primary px-3 py-1 rounded-full uppercase font-bold tracking-wider inline-block mb-4">
                  {selectedPost.categoryLabel[language]}
                </span>
                <h1 className="text-2xl sm:text-4xl font-sans font-black text-white uppercase tracking-wide leading-tight mb-6">
                  {selectedPost.title[language]}
                </h1>

                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-6 text-[11px] font-mono text-slate-400 border-y border-white/[0.05] py-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-artistic-primary" />
                    <span>{dictionary.blogPublished[language]} {selectedPost.publishedDate[language]}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-artistic-primary" />
                    <span>{selectedPost.readTime[language]}</span>
                  </div>
                  
                  {/* Share option with Copy indicator */}
                  <button
                    onClick={(e) => handleShare(selectedPost, e)}
                    className="ml-auto flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer focus:outline-none"
                    id="blog-share-trigger"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>
                      {copiedId === selectedPost.id 
                        ? (language === 'en' ? 'Link Copied!' : 'ბმული კოპირებულია!') 
                        : dictionary.blogShare[language]}
                    </span>
                  </button>
                </div>
              </div>

              {/* Hero Image */}
              <div className="rounded-2xl overflow-hidden border border-white/[0.05] relative mb-10 h-64 sm:h-[400px] bg-slate-900">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title[language]}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Article Content Paragraphs with excellent spacing */}
              <div className="text-slate-200 text-[15.5px] leading-relaxed font-sans space-y-6 sm:space-y-8" id="blog-reading-body">
                {selectedPost.content.map((block, pIdx) => (
                  <p key={pIdx}>
                    {block[language]}
                  </p>
                ))}
              </div>

              {/* Author & CTA Row */}
              <div className="mt-16 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-6" id="blog-author-footer">
                
                {/* Author detailed card */}
                <div className="flex items-center gap-4 bg-white/[0.02] border border-white/[0.04] p-4 rounded-xl w-full sm:max-w-md">
                  <img
                    src={selectedPost.author.avatar}
                    alt={selectedPost.author.name[language]}
                    className="w-12 h-12 rounded-full object-cover border border-white/10 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white capitalize leading-none mb-1">
                      {selectedPost.author.name[language]}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-mono">
                      {selectedPost.author.role[language]}
                    </p>
                  </div>
                </div>

                {/* Talk CTA */}
                <button
                  onClick={onContactClick}
                  className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-[#2D4AA6] hover:bg-[#203a8c] text-white text-[12.5px] font-medium py-3.5 px-6 rounded-full transition-all duration-300 shadow-lg shadow-black/30 hover:shadow-black/50 focus:outline-none cursor-pointer"
                  id="blog-discuss-btn"
                >
                  <MessageSquare className="w-4 h-4 shrink-0 text-[#10B981] animate-pulse" />
                  <span className="font-sans font-medium">{language === 'en' ? 'Discuss This Article' : 'სტატიის გარჩევა'}</span>
                  <span className="text-white/60 group-hover:text-white transition-colors duration-200 ml-0.5">↗</span>
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
