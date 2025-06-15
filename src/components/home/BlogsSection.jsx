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

  // Blog categories
  const blogCategories = [
    { id: "all", name: "All Posts", count: 45 },
    { id: "preparation", name: "Preparation Tips", count: 18 },
    { id: "technical", name: "Technical Concepts", count: 12 },
    { id: "motivation", name: "Motivation", count: 8 },
    { id: "updates", name: "GATE Updates", count: 7 },
  ];

  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Complete GATE 2026 Preparation Roadmap: Month-by-Month Guide",
      excerpt: "A comprehensive month-by-month preparation strategy covering all subjects with realistic timelines and milestone targets for GATE CS & DA.",
      content: "Preparing for GATE requires a systematic approach. This detailed roadmap breaks down the entire preparation journey into manageable monthly goals...",
      author: {
        name: "Dr. Priya Sharma",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        designation: "GATE Mentor & IIT Professor"
      },
      publishDate: "2025-01-10",
      readTime: "12 min read",
      category: "preparation",
      tags: ["roadmap", "strategy", "planning"],
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
      featured: true,
      views: 15420,
      likes: 892,
      shares: 156
    },
    {
      id: 2,
      title: "Top 10 Mistakes to Avoid in GATE Preparation",
      excerpt: "Learn from the common pitfalls that prevent students from achieving their target scores. Expert insights on what NOT to do during preparation.",
      content: "Based on analyzing thousands of GATE attempts, we've identified the most common mistakes that cost students valuable marks...",
      author: {
        name: "Rahul Kumar",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        designation: "GATE Topper (AIR 23)"
      },
      publishDate: "2025-01-08",
      readTime: "8 min read",
      category: "preparation",
      tags: ["mistakes", "tips", "strategy"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      featured: false,
      views: 12890,
      likes: 675,
      shares: 234
    },
    {
      id: 3,
      title: "Dynamic Programming Mastery: From Basics to GATE Level",
      excerpt: "Master one of the most challenging topics in algorithms with step-by-step explanations, patterns, and GATE-specific problem-solving techniques.",
      content: "Dynamic Programming often intimidates GATE aspirants, but with the right approach and understanding of patterns...",
      author: {
        name: "Ananya Singh",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        designation: "Algorithm Expert & Mentor"
      },
      publishDate: "2025-01-05",
      readTime: "15 min read",
      category: "technical",
      tags: ["algorithms", "dp", "coding"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      featured: false,
      views: 9876,
      likes: 543,
      shares: 87
    },
    {
      id: 4,
      title: "How to Stay Motivated During Long GATE Preparation",
      excerpt: "Psychological strategies and practical tips to maintain motivation, overcome burnout, and stay focused during the challenging preparation period.",
      content: "GATE preparation is a marathon, not a sprint. Maintaining motivation over 12-18 months requires specific strategies...",
      author: {
        name: "Dr. Arjun Patel",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg",
        designation: "Educational Psychologist"
      },
      publishDate: "2025-01-03",
      readTime: "10 min read",
      category: "motivation",
      tags: ["motivation", "psychology", "mindset"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
      featured: false,
      views: 8234,
      likes: 456,
      shares: 123
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
          <div className="w-full h-full bg-[linear-gradient(transparent_39px,#22c55e_1px),linear-gradient(90deg,transparent_39px,#22c55e_1px)] bg-[length:40px_40px]"></div>
        </div>
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-green-500/10 to-transparent blur-[80px]"></div>
        <div className="absolute bottom-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-emerald-500/10 to-transparent blur-[100px]"></div>
      </div>

      {/* Dynamic cursor light effect */}
      <div
        className="absolute inset-0 -z-5 overflow-hidden"
        style={{
          background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(34,197,94,0.07), transparent 80%)`,
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
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            <span className="bg-gradient-to-r from-slate-700 dark:from-slate-100 to-slate-500 dark:to-slate-300 bg-clip-text text-transparent font-medium">
              Expert Insights & Tips
            </span>
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-slate-900 dark:from-white to-slate-600 dark:to-slate-300 bg-clip-text text-transparent relative z-10">
              Blogs &
            </span>
            <span className="text-green-600 dark:text-green-400"> Resources</span>
          </h2>

          <motion.p
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Stay updated with the latest preparation strategies, technical concepts, 
            and motivational content from GATE experts and successful candidates.
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
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-white/70 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 border border-white/20 dark:border-slate-700/20"
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
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl transition-all group">
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-green-600 text-white text-xs font-medium rounded-full">
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

                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
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
                          className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-md"
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

                    <button className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center">
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
              className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all group"
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
                    post.category === "preparation" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" :
                    post.category === "technical" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300" :
                    post.category === "motivation" ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300" :
                    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
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

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2">
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
                <button className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-green-50 dark:hover:bg-green-900/30 text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 font-medium rounded-lg transition-colors flex items-center justify-center text-sm">
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
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white relative overflow-hidden mb-8">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
            
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Never Miss an Update
              </h3>
              <p className="text-white/80 max-w-2xl mx-auto mb-6">
                Subscribe to our newsletter and get the latest GATE preparation tips, 
                technical insights, and motivational content delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="px-6 py-3 bg-white text-green-600 hover:bg-gray-100 font-medium rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <button className="px-8 py-4 bg-white/70 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium rounded-lg border border-white/20 dark:border-slate-700/20 transition-all shadow-lg">
            Load More Articles
          </button>
        </motion.div>
      </div>
    </section>
  );
});

export default BlogsSection;