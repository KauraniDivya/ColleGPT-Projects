import React, { forwardRef, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Calendar,
  Clock,
  User,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Target,
  ChevronRight,
  Eye,
  ThumbsUp,
  Share2,
  Tag,
  Code,
  Trophy,
  Users,
} from "lucide-react";

const BlogsSection = forwardRef((props, ref) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Handle mouse movement
  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const bounds = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - bounds.left,
        y: e.clientY - bounds.top,
      });
    }
  };

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  // Blog categories - hackathon focused
  const blogCategories = [
    { id: "all", name: "All Posts", count: 45 },
    { id: "strategy", name: "Hackathon Strategy", count: 18 },
    { id: "technical", name: "Technical Guides", count: 12 },
    { id: "teamwork", name: "Team Building", count: 8 },
    { id: "trends", name: "Tech Trends", count: 7 },
  ];

  // Blog posts data - hackathon focused
  const blogPosts = [
    {
      id: 1,
      title: "Complete Hackathon Preparation Guide: From Idea to Prototype",
      excerpt: "A comprehensive guide covering ideation, team formation, technical execution, and presentation strategies for winning hackathons.",
      content: "Hackathons are intense innovation marathons. This detailed guide breaks down every phase from brainstorming to final pitch...",
      author: {
        name: "Alex Rodriguez",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        designation: "Senior Developer & Hackathon Mentor"
      },
      publishDate: "2025-01-10",
      readTime: "12 min read",
      category: "strategy",
      tags: ["preparation", "strategy", "winning"],
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069&auto=format&fit=crop",
      featured: true,
      views: 25420,
      likes: 1892,
      shares: 456
    },
    {
      id: 2,
      title: "Top 10 Mistakes That Kill Your Hackathon Chances",
      excerpt: "Learn from common pitfalls that prevent teams from succeeding. Expert insights on what NOT to do during hackathons.",
      content: "Based on judging hundreds of hackathons, we've identified the critical mistakes that cost teams their victory...",
      author: {
        name: "Sarah Chen",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        designation: "Hackathon Judge & Tech Lead"
      },
      publishDate: "2025-01-08",
      readTime: "8 min read",
      category: "strategy",
      tags: ["mistakes", "tips", "judgment"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      featured: false,
      views: 18890,
      likes: 1275,
      shares: 334
    },
    {
      id: 3,
      title: "Building AI-Powered Apps in 48 Hours: A Technical Deep Dive",
      excerpt: "Master rapid AI integration with practical frameworks, APIs, and deployment strategies perfect for hackathon timelines.",
      content: "Time constraints in hackathons demand smart technical choices. Here's how to leverage AI effectively under pressure...",
      author: {
        name: "Dr. Priya Sharma",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        designation: "AI Researcher & Innovation Lead"
      },
      publishDate: "2025-01-05",
      readTime: "15 min read",
      category: "technical",
      tags: ["AI", "development", "apis"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      featured: false,
      views: 16876,
      likes: 1043,
      shares: 287
    },
    {
      id: 4,
      title: "The Psychology of Winning Hackathon Teams",
      excerpt: "Understanding team dynamics, communication patterns, and psychological factors that separate winning teams from the rest.",
      content: "Successful hackathons aren't just about coding. Team psychology, communication, and collaboration are equally crucial...",
      author: {
        name: "Mike Johnson",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
        designation: "Team Building Expert"
      },
      publishDate: "2025-01-03",
      readTime: "10 min read",
      category: "teamwork",
      tags: ["psychology", "teamwork", "collaboration"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
      featured: false,
      views: 12234,
      likes: 756,
      shares: 193
    },
    {
      id: 5,
      title: "Web3 & Blockchain: The Future of Hackathon Innovation",
      excerpt: "Explore how Web3 technologies are reshaping hackathons with decentralized solutions, smart contracts, and tokenomics.",
      content: "The hackathon landscape is evolving with Web3. Learn about the latest trends and opportunities in blockchain hackathons...",
      author: {
        name: "James Kim",
        avatar: "https://randomuser.me/api/portraits/men/42.jpg",
        designation: "Blockchain Developer"
      },
      publishDate: "2025-01-01",
      readTime: "11 min read",
      category: "trends",
      tags: ["web3", "blockchain", "innovation"],
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2070&auto=format&fit=crop",
      featured: false,
      views: 14567,
      likes: 892,
      shares: 234
    },
   
  ];

  // Filter posts based on category
  const filteredPosts = activeCategory === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Get featured post
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Format numbers
  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
  };

  return (
    <section
      ref={(node) => {
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
        sectionRef.current = node;
      }}
      id="blogs"
      className="relative min-h-screen py-20 bg-slate-50 dark:bg-[#0C0C20] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="w-full h-full bg-[linear-gradient(transparent_39px,#8B5CF6_1px),linear-gradient(90deg,transparent_39px,#8B5CF6_1px)] bg-[length:40px_40px]"></div>
        </div>
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#8B5CF6]/10 to-transparent blur-[80px]"></div>
        <div className="absolute bottom-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#A78BFA]/10 to-transparent blur-[100px]"></div>
      </div>

      {/* Dynamic cursor light effect */}
      <div
        className="absolute inset-0 -z-5 overflow-hidden"
        style={{
          background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139,92,246,0.07), transparent 80%)`,
        }}
      />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm border border-white/10 dark:border-slate-700/20 mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-[#8B5CF6] mr-2 animate-pulse"></span>
            <span className="bg-gradient-to-r from-slate-700 dark:from-slate-100 to-slate-500 dark:to-slate-300 bg-clip-text text-transparent font-medium">
              Expert Insights & Tips
            </span>
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-slate-900 dark:from-white to-slate-600 dark:to-slate-300 bg-clip-text text-transparent relative z-10">
              Blogs &
            </span>
            <span className="text-[#8B5CF6] dark:text-[#A78BFA]"> Resources</span>
          </h2>

          <motion.p
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stay updated with the latest hackathon strategies, technical guides, 
            and innovation insights from industry experts and successful hackers.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {blogCategories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white shadow-lg"
                  : "bg-white/70 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 border border-white/20 dark:border-slate-700/20 hover:border-[#8B5CF6]/30"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
              <span className={`ml-2 px-1.5 py-0.5 rounded-full text-xs ${
                activeCategory === category.id
                  ? "bg-white/20 text-white"
                  : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400"
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Featured Post */}
        {featuredPost && activeCategory === "all" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl hover:border-[#8B5CF6]/30 transition-all group">
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white text-xs font-medium rounded-full">
                      Featured Post
                    </span>
                  </div>
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(featuredPost.publishDate)}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-[#8B5CF6] dark:group-hover:text-[#A78BFA] transition-colors">
                      {featuredPost.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex items-center mb-6">
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="w-12 h-12 rounded-full object-cover mr-3"
                      />
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white">
                          {featuredPost.author.name}
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          {featuredPost.author.designation}
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-[#8B5CF6]/10 dark:bg-[#8B5CF6]/20 text-[#8B5CF6] dark:text-[#A78BFA] text-xs rounded-md"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Post Meta & CTA */}
                  <div>
                    <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {formatNumber(featuredPost.views)}
                        </span>
                        <span className="flex items-center">
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          {formatNumber(featuredPost.likes)}
                        </span>
                        <span className="flex items-center">
                          <Share2 className="w-4 h-4 mr-1" />
                          {formatNumber(featuredPost.shares)}
                        </span>
                      </div>
                    </div>

                    <button className="w-full px-6 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] hover:from-[#7C3AED] hover:to-[#8B5CF6] text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-[#8B5CF6]/25 flex items-center justify-center">
                      Read Full Article
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {(activeCategory === "all" ? regularPosts : filteredPosts).map((post, idx) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl hover:border-[#8B5CF6]/30 transition-all group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    post.category === "strategy" ? "bg-[#8B5CF6]/10 text-[#8B5CF6] dark:bg-[#8B5CF6]/20 dark:text-[#A78BFA]" :
                    post.category === "technical" ? "bg-[#A78BFA]/10 text-[#A78BFA] dark:bg-[#A78BFA]/20 dark:text-[#8B5CF6]" :
                    post.category === "teamwork" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300" :
                    post.category === "trends" ? "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300" :
                    "bg-[#8B5CF6]/10 text-[#8B5CF6] dark:bg-[#8B5CF6]/20 dark:text-[#A78BFA]"
                  }`}>
                    {blogCategories.find(cat => cat.id === post.category)?.name || "General"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {formatDate(post.publishDate)}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#8B5CF6] dark:group-hover:text-[#A78BFA] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center mb-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover mr-2"
                  />
                  <div>
                    <div className="font-medium text-slate-900 dark:text-white text-sm">
                      {post.author.name}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {post.author.designation}
                    </div>
                  </div>
                </div>

                {/* Post Meta */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {formatNumber(post.views)}
                    </span>
                    <span className="flex items-center">
                      <ThumbsUp className="w-3 h-3 mr-1" />
                      {formatNumber(post.likes)}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-[#8B5CF6]/10 dark:hover:bg-[#8B5CF6]/20 text-slate-700 dark:text-slate-300 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA] font-medium rounded-lg transition-colors flex items-center justify-center text-sm">
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Load More & Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] rounded-2xl p-8 text-white relative overflow-hidden mb-8">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
            
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Never Miss an Innovation
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto mb-6">
                Subscribe to our newsletter and get the latest hackathon tips, 
                technical insights, and innovation trends delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="px-6 py-3 bg-white text-[#8B5CF6] hover:bg-gray-100 font-medium rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <button className="px-8 py-4 bg-white/70 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-[#8B5CF6]/30 font-medium rounded-lg border border-white/20 dark:border-slate-700/20 transition-all shadow-lg">
            Load More Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
});

export default BlogsSection;