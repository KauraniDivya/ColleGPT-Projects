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
  Github,
  ExternalLink,
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

  // Blog categories - updated for real development content
  const blogCategories = [
    { id: "all", name: "All Posts", count: 52 },
    { id: "ai-ml", name: "AI & Machine Learning", count: 18 },
    { id: "hackathons", name: "Hackathon Guides", count: 15 },
    { id: "open-source", name: "Open Source", count: 12 },
    { id: "trends", name: "Tech Trends 2025", count: 7 },
  ];

  // Real blog posts based on current trending topics
  const blogPosts = [
    {
      id: 1,
      title: "Building AI-Powered Applications: Lessons from Microsoft AI Classroom Hackathon Winners",
      excerpt: "Deep dive into winning strategies from the $12,000 Microsoft AI Classroom Hackathon featuring 3,700+ global participants and innovative educational AI solutions.",
      content: "The Microsoft AI Classroom Hackathon showcased cutting-edge educational AI applications...",
      author: {
        name: "Sarah Chen",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        designation: "AI Researcher & Microsoft MVP"
      },
      publishDate: "2025-01-15",
      readTime: "12 min read",
      category: "ai-ml",
      tags: ["AI", "Microsoft Azure", "Education", "Hackathon"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      featured: true,
      views: 34250,
      likes: 2891,
      shares: 567,
      sourceUrl: "https://www.microsoft.com/en-us/education/blog/2024/05/meet-the-winners-of-the-microsoft-ai-classroom-hackathon/"
    },
    {
      id: 2,
      title: "GitHub's Most Starred Repositories in 2025: What Developers Are Building",
      excerpt: "Analyzing the top trending GitHub repositories including Ollama (135k+ stars), React updates, and the rise of AI-powered development tools.",
      content: "GitHub continues to be the epicenter of open source innovation with over 420M repositories...",
      author: {
        name: "Alex Rodriguez",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        designation: "Open Source Advocate & GitHub Star"
      },
      publishDate: "2025-01-12",
      readTime: "8 min read",
      category: "open-source",
      tags: ["GitHub", "Open Source", "Trending", "Statistics"],
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=2076&auto=format&fit=crop",
      featured: false,
      views: 28790,
      likes: 1875,
      shares: 423,
      sourceUrl: "https://github.com/trending"
    },
    {
      id: 3,
      title: "DeveloperWeek 2025: Inside the Nation's Largest Hackathon Experience",
      excerpt: "Complete guide to DeveloperWeek 2025 Hackathon featuring 1000+ participants, real sponsor challenges, and $50,000+ in prizes.",
content: "DeveloperWeek 2025 represents the pinnacle of developer competitions with cutting-edge challenges from industry leaders...",
     author: {
       name: "Dr. Priya Sharma",
       avatar: "https://randomuser.me/api/portraits/women/68.jpg",
       designation: "Hackathon Judge & Tech Innovation Lead"
     },
     publishDate: "2025-01-10",
     readTime: "15 min read",
     category: "hackathons",
     tags: ["DeveloperWeek", "Hackathon", "Competition", "Prizes"],
     image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069&auto=format&fit=crop",
     featured: false,
     views: 22156,
     likes: 1543,
     shares: 298,
     sourceUrl: "https://www.developerweek.com/events/hackathon/"
   },
   {
     id: 4,
     title: "Smart India Hackathon 2024: How Students are Solving Real-World Problems",
     excerpt: "Exploring breakthrough innovations from India's premier nationwide hackathon initiative engaging thousands of students in practical problem-solving.",
     content: "Smart India Hackathon continues to bridge the gap between academic knowledge and practical application...",
     author: {
       name: "Rajesh Kumar",
       avatar: "https://randomuser.me/api/portraits/men/55.jpg",
       designation: "Innovation Strategist & SIH Mentor"
     },
     publishDate: "2025-01-08",
     readTime: "10 min read",
     category: "hackathons",
     tags: ["Smart India Hackathon", "Innovation", "Students", "Problem Solving"],
     image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
     featured: false,
     views: 19234,
     likes: 1256,
     shares: 187,
     sourceUrl: "https://sih.gov.in/"
   },
   {
     id: 5,
     title: "The Rise of AI Agents: From Ollama to OpenHands - 2025 Trend Analysis",
     excerpt: "Deep dive into the explosive growth of AI agent frameworks, local LLM deployment, and autonomous coding assistants reshaping development.",
     content: "2025 marks a pivotal year for AI agents with tools like Ollama reaching 135k+ GitHub stars...",
     author: {
       name: "Emma Zhang",
       avatar: "https://randomuser.me/api/portraits/women/42.jpg",
       designation: "AI Systems Architect"
     },
     publishDate: "2025-01-05",
     readTime: "11 min read",
     category: "ai-ml",
     tags: ["AI Agents", "Ollama", "LLM", "Automation"],
     image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2070&auto=format&fit=crop",
     featured: false,
     views: 26567,
     likes: 1892,
     shares: 445,
     sourceUrl: "https://github.com/ollama/ollama"
   },
   {
     id: 6,
     title: "Building Heat Stroke Prevention Systems: SAS Hackathon 2024 Winner Insights",
     excerpt: "Technical breakdown of the triple-category winning IoT solution from SAS Hackathon 2024, addressing climate change challenges for workers.",
     content: "The StaSASticians team's innovative approach to worker safety using SAS Viya and IoT sensors...",
     author: {
       name: "Michael Johnson",
       avatar: "https://randomuser.me/api/portraits/men/38.jpg",
       designation: "IoT Solutions Engineer"
     },
     publishDate: "2025-01-03",
     readTime: "9 min read",
     category: "ai-ml",
     tags: ["IoT", "SAS", "Health Tech", "Climate"],
     image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?q=80&w=2070&auto=format&fit=crop",
     featured: false,
     views: 15789,
     likes: 987,
     shares: 156,
     sourceUrl: "https://www.sas.com/en_us/news/press-releases/2024/november/2024-hackathon-winners.html"
   },
   {
     id: 7,
     title: "React 19 and Beyond: What's New in the Frontend Ecosystem",
     excerpt: "Comprehensive guide to React 19 features, concurrent rendering improvements, and the evolving landscape of modern web development.",
     content: "With React crossing 236k GitHub stars, the ecosystem continues to evolve rapidly...",
     author: {
       name: "Lisa Park",
       avatar: "https://randomuser.me/api/portraits/women/28.jpg",
       designation: "Frontend Architect & React Core Contributor"
     },
     publishDate: "2025-01-01",
     readTime: "13 min read",
     category: "trends",
     tags: ["React", "Frontend", "JavaScript", "Web Development"],
     image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
     featured: false,
     views: 31245,
     likes: 2156,
     shares: 478,
     sourceUrl: "https://github.com/facebook/react"
   }
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
         <div className="w-full h-full bg-[linear-gradient(transparent_39px,#F59E0B_1px),linear-gradient(90deg,transparent_39px,#F59E0B_1px)] bg-[length:40px_40px]"></div>
       </div>
       <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-amber-500/10 to-transparent blur-[80px]"></div>
       <div className="absolute bottom-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-yellow-400/10 to-transparent blur-[100px]"></div>
     </div>

     {/* Dynamic cursor light effect */}
     <div
       className="absolute inset-0 -z-5 overflow-hidden"
       style={{
         background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(245,158,11,0.07), transparent 80%)`,
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
           <span className="inline-block w-2 h-2 rounded-full bg-amber-600 mr-2 animate-pulse"></span>
           <span className="bg-gradient-to-r from-slate-700 dark:from-slate-100 to-slate-500 dark:to-slate-300 bg-clip-text text-transparent font-medium">
             Developer Insights & Guides
           </span>
         </span>

         <h2 className="text-5xl md:text-6xl font-bold mb-6 relative">
           <span className="bg-gradient-to-r from-slate-900 dark:from-white to-slate-600 dark:to-slate-300 bg-clip-text text-transparent relative z-10">
             Expert
           </span>
           <span className="text-amber-600 dark:text-yellow-400"> Resources</span>
         </h2>

         <motion.p
           className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
         >
           Stay ahead with the latest insights from major hackathons, trending GitHub projects, 
           AI innovations, and expert development strategies from global tech leaders.
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
                 ? "bg-gradient-to-r from-amber-600 to-yellow-500 text-white shadow-lg"
                 : "bg-white/70 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 border border-white/20 dark:border-slate-700/20 hover:border-amber-500/30"
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
           <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 dark:border-slate-700/50 shadow-xl hover:shadow-2xl hover:border-amber-500/30 transition-all group">
             <div className="flex flex-col lg:flex-row">
               {/* Image */}
               <div className="lg:w-1/2 relative overflow-hidden">
                 <div className="absolute top-4 left-4 z-10">
                   <span className="px-3 py-1 bg-gradient-to-r from-amber-600 to-yellow-500 text-white text-xs font-medium rounded-full">
                     Featured Article
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

                   <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-amber-600 dark:group-hover:text-yellow-400 transition-colors">
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
                         className="px-2 py-1 bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-yellow-400 text-xs rounded-md"
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

                   <div className="flex gap-3">
                     <button className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-amber-600 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-amber-500/25 flex items-center justify-center">
                       Read Full Article
                       <ArrowRight className="w-5 h-5 ml-2" />
                     </button>
                     <a
                       href={featuredPost.sourceUrl}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="px-4 py-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-lg transition-all flex items-center justify-center"
                     >
                       <ExternalLink className="w-5 h-5" />
                     </a>
                   </div>
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
             className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl hover:border-amber-500/30 transition-all group"
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
                   post.category === "ai-ml" ? "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-yellow-400" :
                   post.category === "hackathons" ? "bg-yellow-500/10 text-yellow-600 dark:bg-yellow-500/20 dark:text-amber-400" :
                   post.category === "open-source" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300" :
                   post.category === "trends" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" :
                   "bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-yellow-400"
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

               <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-yellow-400 transition-colors line-clamp-2">
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
               <div className="flex gap-2">
                 <button className="flex-1 px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-amber-500/10 dark:hover:bg-amber-500/20 text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-yellow-400 font-medium rounded-lg transition-colors flex items-center justify-center text-sm">
                   Read More
                   <ChevronRight className="w-4 h-4 ml-1" />
                 </button>
                 <a
                   href={post.sourceUrl}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="px-3 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-lg transition-all flex items-center justify-center"
                 >
                   <ExternalLink className="w-4 h-4" />
                 </a>
               </div>
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
         <div className="bg-gradient-to-r from-amber-600 to-yellow-500 rounded-2xl p-8 text-white relative overflow-hidden mb-8">
           <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
           <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
           
           <div className="relative">
             <Github className="w-12 h-12 mx-auto mb-4 opacity-80" />
             <h3 className="text-2xl md:text-3xl font-bold mb-4">
               Stay Updated with Developer Trends
             </h3>
             <p className="text-white/80 max-w-2xl mx-auto mb-6">
               Get weekly insights on trending GitHub projects, hackathon opportunities, 
               AI innovations, and expert development strategies delivered to your inbox.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
               <input
                 type="email"
                 placeholder="Enter your email"
                 className="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
               />
               <button className="px-6 py-3 bg-white text-amber-600 hover:bg-gray-100 font-medium rounded-lg transition-colors">
                 Subscribe
               </button>
             </div>
           </div>
         </div>

       
       </motion.div>
     </div>
   </section>
 );
});

export default BlogsSection;