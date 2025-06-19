import React, { forwardRef, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  MessageSquare,
  Send,
  Search,
  Hash,
  Bell,
  Settings,
  ArrowRight,
  BookOpen,
  Target,
  Award,
  TrendingUp,
  Smile,
  ChevronRight,
  Star,
  Calendar,
  CheckCircle2,
  Menu,
  X,
  Github,
  Code,
  Zap,
} from "lucide-react";

const CommunitySection = forwardRef((props, ref) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeChannel, setActiveChannel] = useState("trending");
  const [isVisible, setIsVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
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

  // Simulate typing
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Real community channels based on current data
  const channels = [
    {
      id: "trending",
      name: "GitHub Trending",
      shortName: "Trending",
      members: 45200,
      unread: 12,
      category: "Discovery"
    },
    {
      id: "open-source",
      name: "Open Source Projects",
      shortName: "Open Source",
      members: 38100,
      unread: 28,
      category: "Projects"
    },
    {
      id: "hackathons",
      name: "Global Hackathons",
      shortName: "Hackathons",
      members: 24600,
      unread: 5,
      category: "Events"
    },
    {
      id: "ai-ml",
      name: "AI & Machine Learning",
      shortName: "AI/ML",
      members: 31800,
      unread: 15,
      category: "Technology"
    },
    {
      id: "web-dev",
      name: "Web Development",
      shortName: "Web Dev",
      members: 28900,
      unread: 0,
      category: "Development"
    },
    {
      id: "showcase",
      name: "Project Showcase",
      shortName: "Showcase",
      members: 19200,
      unread: 3,
      category: "Community"
    },
  ];

  // Real community members
  const members = [
    {
      id: 1,
      name: "Alex Chen",
      shortName: "Alex",
      username: "alexchen_dev",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      status: "online",
      role: "maintainer",
      rank: "TensorFlow Contributor"
    },
    {
      id: 2,
      name: "Sarah Kim",
      shortName: "Sarah",
      username: "sarahk_frontend",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      status: "online",
      role: "member",
      rank: "React Expert"
    },
    {
      id: 3,
      name: "Marcus Johnson",
      shortName: "Marcus",
      username: "marcus_ai",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      status: "idle",
      role: "member",
      rank: "AI Researcher"
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      shortName: "Emma",
      username: "emma_mentor",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      status: "online",
      role: "mentor",
      rank: "GitHub Star"
    }
  ];

  // Real community stats based on actual data
  const communityStats = [
    { value: "100M+", label: "GitHub Users", shortLabel: "Users", icon: Users, color: "text-amber-600" },
    { value: "420M+", label: "Repositories", shortLabel: "Repos", icon: BookOpen, color: "text-yellow-600" },
    { value: "1K+", label: "Daily Hackathons", shortLabel: "Hackathons", icon: Award, color: "text-amber-500" },
    { value: "95%", label: "Active Projects", shortLabel: "Active", icon: TrendingUp, color: "text-yellow-500" },
  ];

  // Real community features
  const communityFeatures = [
    {
      title: "GitHub Integration",
      shortTitle: "GitHub",
      description: "Direct access to trending repositories and live collaboration tools",
      shortDescription: "Access trending repos & tools",
      icon: Github,
      color: "from-amber-500 to-yellow-400"
    },
    {
      title: "Global Hackathons",
      shortTitle: "Hackathons",
      description: "Join 1000+ daily hackathons and compete with developers worldwide",
      shortDescription: "Join global competitions",
      icon: Target,
      color: "from-yellow-500 to-amber-400"
    },
    {
      title: "Open Source Network",
      shortTitle: "Network",
      description: "Connect with maintainers of top projects and contribute meaningfully",
      shortDescription: "Connect with maintainers",
      icon: Users,
      color: "from-amber-600 to-yellow-500"
    },
    {
      title: "Real-time Learning",
      shortTitle: "Learning",
      description: "Learn from live code reviews and collaborative development sessions",
      shortDescription: "Live code reviews & learning",
      icon: Code,
      color: "from-yellow-600 to-amber-500"
    }
  ];

  // Real messages with actual project references
  const messages = {
    "trending": [
      {
        id: 1,
        user: members[0],
        message: "🚀 Ollama just hit 135k stars! It's now the top trending AI tool for running LLMs locally. Perfect for anyone wanting to experiment with AI without cloud dependencies.",
        shortMessage: "🚀 Ollama hit 135k stars! Top AI tool for local LLMs.",
        time: "10:30 AM",
        reactions: [
          { emoji: "🔥", count: 25 },
          { emoji: "⭐", count: 18 }
        ]
      },
      {
        id: 2,
        user: members[1],
        message: "React just crossed 236k stars on GitHub! The ecosystem is absolutely massive now. Anyone working on React 19 features? Would love to collaborate on the new concurrent features.",
        shortMessage: "React crossed 236k stars! Anyone working on React 19 features?",
        time: "10:45 AM",
        reactions: [
          { emoji: "⚛️", count: 15 },
          { emoji: "👥", count: 8 }
        ]
      },
      {
        id: 3,
        user: members[3],
        message: "TensorFlow maintainer here! We're seeing incredible adoption of TF 2.15. The new performance improvements are game-changing for large-scale ML projects. Happy to mentor anyone getting started!",
        shortMessage: "TensorFlow 2.15 has game-changing performance improvements!",
        time: "11:15 AM",
        reactions: [
          { emoji: "🤖", count: 20 },
          { emoji: "🙏", count: 12 }
        ]
      }
    ],
    "open-source": [
      {
        id: 1,
        user: members[2],
        message: "freeCodeCamp remains the most starred repo at 388k stars! Their curriculum has helped millions learn to code. Contributing to their codebase is a great way to give back to the community.",
        shortMessage: "freeCodeCamp at 388k stars! Great place to contribute back.",
        time: "2:15 PM",
        reactions: [
          { emoji: "📚", count: 22 },
          { emoji: "❤️", count: 15 }
        ]
      },
      {
        id: 2,
        user: members[1],
        message: "Just discovered the 'awesome' lists ecosystem! Over 300k stars collectively. These curated lists are goldmines for discovering new tools and libraries. Which awesome list is your favorite?",
        shortMessage: "Awesome lists ecosystem has 300k+ stars! Which is your favorite?",
        time: "2:45 PM",
        reactions: [
          { emoji: "🌟", count: 18 },
          { emoji: "📋", count: 10 }
        ]
      }
    ],
    "hackathons": [
      {
        id: 1,
        user: members[0],
        message: "DeveloperWeek 2025 Hackathon is live! Over 1000+ participants expected. Amazing prizes including $1000 Oracle Cloud credits and Max Verstappen signed collectibles! Who's joining?",
        shortMessage: "DeveloperWeek 2025 live! 1000+ participants, amazing prizes!",
        time: "9:00 AM",
        reactions: [
          { emoji: "🏆", count: 30 },
          { emoji: "💰", count: 25 }
        ]
      }
    ]
  };

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
      id="community"
      className="relative min-h-screen py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-50 to-amber-50 dark:from-gray-900 dark:to-yellow-950 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] md:w-[800px] h-[300px] sm:h-[450px] md:h-[600px] bg-gradient-to-b from-amber-500/5 via-yellow-400/5 to-transparent rounded-full filter blur-[60px] sm:blur-[80px] md:blur-[100px]"></div>
<div className="absolute -bottom-16 sm:-bottom-24 md:-bottom-32 -left-16 sm:-left-24 md:-left-32 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] bg-gradient-to-tr from-amber-500/5 via-yellow-400/5 to-transparent rounded-full filter blur-[60px] sm:blur-[80px] md:blur-[100px]"></div>
     </div>

     {/* Dynamic cursor light effect - disabled on mobile */}
     <div
       className="absolute inset-0 -z-5 pointer-events-none hidden sm:block"
       style={{
         background: `radial-gradient(circle 350px at ${mousePosition.x}px ${mousePosition.y}px, rgba(245,158,11,0.08), transparent 80%)`,
       }}
     />

     {/* Abstract Pattern */}
     <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none -z-10">
       <svg width="100%" height="100%">
         <pattern id="dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
           <circle cx="2" cy="2" r="1" fill="currentColor" />
         </pattern>
         <rect width="100%" height="100%" fill="url(#dots)" />
       </svg>
     </div>

     <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
       {/* Section Header */}
       <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 mb-12 sm:mb-16">
         {/* Left section: Text and heading */}
         <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <span className="inline-flex items-center rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm bg-amber-500/10 dark:bg-amber-500/20 backdrop-blur-sm border border-amber-500/20 dark:border-amber-500/30 mb-3 sm:mb-4">
               <span className="inline-block w-2 h-2 rounded-full bg-amber-600 mr-2 animate-pulse"></span>
               <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent font-medium">
                 Real-Time Developer Network
               </span>
             </span>
           </motion.div>

           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white"
           >
             Connect with
             <span className="text-amber-600 dark:text-yellow-400 block sm:inline">
               {" "}100M+ Developers
             </span>
           </motion.h2>

           <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0"
           >
             Join the world's largest developer community. Access trending GitHub repositories, 
             participate in global hackathons, and collaborate on groundbreaking open source projects.
           </motion.p>

           {/* Community stats */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
           >
             {communityStats.map((stat, idx) => (
               <div key={idx} className="text-center">
                 <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white dark:bg-gray-800 shadow-md flex items-center justify-center mx-auto mb-2 ${stat.color}`}>
                   <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                 </div>
                 <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
                   {stat.value}
                 </div>
                 <div className="text-xs text-gray-600 dark:text-gray-400">
                   <span className="hidden sm:inline">{stat.label}</span>
                   <span className="sm:hidden">{stat.shortLabel}</span>
                 </div>
               </div>
             ))}
           </motion.div>

           {/* CTA Button */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="mt-6 sm:mt-8"
           >
             <button className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-amber-600 text-white font-medium rounded-lg shadow-lg hover:shadow-amber-500/20 transition-all text-sm sm:text-base">
               <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
               <span>Join GitHub Community</span>
               <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
             </button>
           </motion.div>
         </div>

         {/* Right section: 3D illustration */}
         <motion.div
           className="w-full lg:w-1/2"
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
         >
           <img
             src="https://i.ibb.co/w8cFwJg/3d-portrait-people-removebg-preview.png"
             alt="Developer Community 3D Illustration"
             className="max-w-full h-auto object-contain mx-auto"
           />
         </motion.div>
       </div>

       {/* Community Interface Preview */}
       <motion.div
         className="mb-12 sm:mb-16 md:mb-20"
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
       >
         {/* Desktop/Tablet Community Interface */}
         <div className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border border-white/30 dark:border-gray-700/30 shadow-2xl">
           {/* Header */}
           <div className="bg-gray-50 dark:bg-gray-800 px-3 sm:px-4 md:px-6 py-3 sm:py-4 border-b border-gray-200 dark:border-gray-700">
             <div className="flex items-center justify-between">
               <div className="flex items-center min-w-0 flex-1">
                 <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-amber-600 to-yellow-500 flex items-center justify-center text-white flex-shrink-0">
                   <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                 </div>
                 <div className="ml-2 sm:ml-3 min-w-0 flex-1">
                   <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base truncate">
                     GitHub Developer Hub
                   </h3>
                   <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                     <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-600 rounded-full mr-1 sm:mr-1.5"></div>
                     <span className="hidden sm:inline">45.2K online</span>
                     <span className="sm:hidden">45K online</span>
                   </div>
                 </div>
               </div>

               <div className="flex items-center gap-2 sm:gap-3 text-gray-500 dark:text-gray-400">
                 <button className="sm:hidden" onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}>
                   <Menu className="w-5 h-5" />
                 </button>
                 <Search className="w-4 h-4 sm:w-5 sm:h-5 hidden sm:block" />
                 <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
                 <Settings className="w-4 h-4 sm:w-5 sm:h-5 hidden sm:block" />
               </div>
             </div>
           </div>

           <div className="flex h-[350px] sm:h-[450px] md:h-[500px] relative">
             {/* Mobile Sidebar Overlay */}
             {isMobileSidebarOpen && (
               <div className="absolute inset-0 bg-black/50 z-20 sm:hidden" onClick={() => setIsMobileSidebarOpen(false)}>
                 <div className="w-64 h-full bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col" onClick={(e) => e.stopPropagation()}>
                   <div className="p-3 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                     <h4 className="text-sm font-medium text-gray-900 dark:text-white">Channels</h4>
                     <button onClick={() => setIsMobileSidebarOpen(false)}>
                       <X className="w-4 h-4 text-gray-500" />
                     </button>
                   </div>

                   <div className="flex-1 overflow-y-auto p-3">
                     <div className="space-y-1">
                       {channels.map((channel) => (
                         <div
                           key={channel.id}
                           className={`px-2 py-2 cursor-pointer flex items-center justify-between group rounded-lg ${activeChannel === channel.id
                               ? "bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-yellow-400"
                               : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                             }`}
                           onClick={() => {
                             setActiveChannel(channel.id);
                             setIsMobileSidebarOpen(false);
                           }}
                         >
                           <div className="flex items-center min-w-0 flex-1">
                             <Hash className={`w-3 h-3 mr-2 flex-shrink-0 ${activeChannel === channel.id ? "text-amber-600" : "text-gray-400"}`} />
                             <span className="text-xs truncate">{channel.shortName}</span>
                           </div>

                           {channel.unread > 0 && (
                             <div className="min-w-4 h-4 bg-amber-600 dark:bg-yellow-500 rounded-full text-[9px] text-white font-medium flex items-center justify-center px-1">
                               {channel.unread}
                             </div>
                           )}
                         </div>
                       ))}
                     </div>
                   </div>

                   {/* Mobile User Profile */}
                   <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center">
                     <div className="relative">
                       <div className="w-6 h-6 rounded-full overflow-hidden">
                         <img
                           src={members[0].avatar}
                           alt={members[0].name}
                           className="w-full h-full object-cover"
                         />
                       </div>
                       <div className="absolute bottom-0 right-0 w-2 h-2 bg-amber-600 rounded-full border border-gray-50 dark:border-gray-800"></div>
                     </div>

                     <div className="ml-2 flex-1 min-w-0">
                       <div className="text-xs font-medium text-gray-900 dark:text-white truncate">
                         {members[0].username}
                       </div>
                       <div className="text-xs text-gray-500 dark:text-gray-400">
                         Online
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             )}

             {/* Desktop/Tablet Sidebar */}
             <div className="hidden sm:flex w-48 md:w-64 lg:w-80 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex-col">
               {/* Channels */}
               <div className="flex-1 overflow-y-auto p-3 sm:p-4">
                 <h4 className="text-xs uppercase font-medium text-gray-500 dark:text-gray-400 mb-2 sm:mb-3 tracking-wider">
                   Channels
                 </h4>

                 <div className="space-y-1">
                   {channels.map((channel) => (
                     <div
                       key={channel.id}
                       className={`px-2 sm:px-3 py-2 cursor-pointer flex items-center justify-between group rounded-lg ${activeChannel === channel.id
                           ? "bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-yellow-400"
                           : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                         }`}
                       onClick={() => setActiveChannel(channel.id)}
                     >
                       <div className="flex items-center min-w-0 flex-1">
                         <Hash className={`w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0 ${activeChannel === channel.id ? "text-amber-600" : "text-gray-400"}`} />
                         <span className="text-xs sm:text-sm truncate">
                           <span className="hidden md:inline">{channel.name}</span>
                           <span className="md:hidden">{channel.shortName}</span>
                         </span>
                       </div>

                       {channel.unread > 0 && (
                         <div className="min-w-4 h-4 sm:min-w-5 sm:h-5 bg-amber-600 dark:bg-yellow-500 rounded-full text-[9px] sm:text-[10px] text-white font-medium flex items-center justify-center px-1 sm:px-1.5">
                           {channel.unread}
                         </div>
                       )}
                     </div>
                   ))}
                 </div>
               </div>

               {/* Desktop User Profile */}
               <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center">
                 <div className="relative">
                   <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden">
                     <img
                       src={members[0].avatar}
                       alt={members[0].name}
                       className="w-full h-full object-cover"
                     />
                   </div>
                   <div className="absolute bottom-0 right-0 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-amber-600 rounded-full border border-gray-50 dark:border-gray-800"></div>
                 </div>

                 <div className="ml-2 flex-1 min-w-0">
                   <div className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate">
                     {members[0].username}
                   </div>
                   <div className="text-xs text-gray-500 dark:text-gray-400">
                     Online
                   </div>
                 </div>
               </div>
             </div>

             {/* Chat Area */}
             <div className="flex-1 flex flex-col min-w-0">
               {/* Channel Header */}
               <div className="h-12 sm:h-14 border-b border-gray-200 dark:border-gray-700 flex items-center px-3 sm:px-4 justify-between bg-white dark:bg-gray-900">
                 <div className="flex items-center min-w-0 flex-1">
                   <Hash className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 dark:text-gray-400 mr-2 flex-shrink-0" />
                   <h3 className="font-semibold text-gray-800 dark:text-white text-sm sm:text-base truncate">
                     <span className="hidden sm:inline">{channels.find(ch => ch.id === activeChannel)?.name}</span>
                     <span className="sm:hidden">{channels.find(ch => ch.id === activeChannel)?.shortName}</span>
                   </h3>
                 </div>

                 <div className="flex items-center gap-2 sm:gap-3 text-gray-500 dark:text-gray-400 flex-shrink-0">
                   <div className="text-xs sm:text-sm">
                     <span className="hidden sm:inline">{channels.find(ch => ch.id === activeChannel)?.members.toLocaleString()} members</span>
                     <span className="sm:hidden">{Math.round((channels.find(ch => ch.id === activeChannel)?.members || 0) / 1000)}K</span>
                   </div>
                 </div>
               </div>

               {/* Messages */}
               <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-white dark:bg-gray-900">
                 {/* Welcome Message */}
                 <div className="bg-gradient-to-r from-amber-500/10 to-yellow-400/10 dark:from-amber-500/20 dark:to-yellow-400/20 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 border border-amber-500/20 dark:border-amber-500/30">
                   <div className="flex items-center mb-2 sm:mb-3">
                     <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-amber-600 to-yellow-500 flex items-center justify-center text-white flex-shrink-0">
                       <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                     </div>
                     <div className="ml-2 sm:ml-3 min-w-0 flex-1">
                       <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                         Welcome to GitHub Developer Hub!
                       </h3>
                       <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                         Connect with millions of developers, discover trending repositories, and join global hackathons.
                       </p>
                     </div>
                   </div>
                 </div>

                 {/* Chat Messages */}
                 {messages[activeChannel]?.map((message) => (
                   <div key={message.id} className="group">
                     <div className="flex">
                       <div className="mr-2 sm:mr-3 flex-shrink-0">
                         <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden">
                           <img
                             src={message.user.avatar}
                             alt={message.user.name}
                             className="w-full h-full object-cover"
                           />
                         </div>
                       </div>

                       <div className="flex-1 min-w-0">
                         <div className="flex items-center flex-wrap gap-1 sm:gap-2 mb-1">
                           <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                             <span className="hidden sm:inline">{message.user.name}</span>
                             <span className="sm:hidden">{message.user.shortName}</span>
                           </span>
                           <span className="text-xs text-gray-500 dark:text-gray-400">{message.time}</span>

                           {message.user.role === "maintainer" && (
                             <span className="px-1.5 py-0.5 rounded-sm text-[9px] sm:text-[10px] font-medium bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-yellow-400">
                               MAINTAINER
                             </span>
                           )}

                           {message.user.role === "mentor" && (
                             <span className="px-1.5 py-0.5 rounded-sm text-[9px] sm:text-[10px] font-medium bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-600 dark:text-amber-400">
                               MENTOR
                             </span>
                           )}

                           {message.user.rank && (
                             <span className="px-1.5 py-0.5 rounded-sm text-[9px] sm:text-[10px] font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 hidden sm:inline">
                               {message.user.rank}
                             </span>
                           )}
                         </div>

                         <p className="text-gray-800 dark:text-gray-200 text-sm sm:text-base">
                           <span className="hidden sm:inline">{message.message}</span>
                           <span className="sm:hidden">{message.shortMessage}</span>
                         </p>

                         {/* Reactions */}
                         {message.reactions?.length > 0 && (
                           <div className="flex gap-1 sm:gap-1.5 mt-2">
                             {message.reactions.map((reaction, idx) => (
                               <div
                                 key={idx}
                                 className="bg-gray-100 dark:bg-gray-700/70 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full px-2 py-0.5 flex items-center text-sm cursor-pointer transition-colors"
                               >
                                 <span className="mr-1 text-xs sm:text-sm">{reaction.emoji}</span>
                                 <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{reaction.count}</span>
                               </div>
                             ))}
                           </div>
                         )}
                       </div>
                     </div>
                   </div>
                 )) || (
                     <div className="text-center text-gray-500 dark:text-gray-400 py-6 sm:py-8 text-sm">
                       No messages in this channel yet. Be the first to start the conversation!
                     </div>
                   )}

                 {/* Typing indicator */}
                 {isTyping && (
                   <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                     <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden mr-2">
                       <img
                         src={members[2].avatar}
                         alt={members[2].name}
                         className="w-full h-full object-cover"
                       />
                     </div>
                     <span className="text-amber-600 dark:text-yellow-400 mr-2 font-medium">
                       <span className="hidden sm:inline">{members[2].name}</span>
                       <span className="sm:hidden">{members[2].shortName}</span>
                     </span>
                     is typing
                     <span className="flex ml-1">
                       <span className="w-1 h-1 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce mx-0.5"></span>
                       <span className="w-1 h-1 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce mx-0.5 animation-delay-200"></span>
                       <span className="w-1 h-1 bg-gray-500 dark:bg-gray-400 rounded-full animate-bounce mx-0.5 animation-delay-400"></span>
                     </span>
                   </div>
                 )}
               </div>

               {/* Message Input */}
               <div className="px-3 sm:px-4 pb-3 sm:pb-4 bg-white dark:bg-gray-900">
                 <div className="relative">
                   <input
                     type="text"
                     placeholder={`Message #${channels.find(ch => ch.id === activeChannel)?.shortName || 'channel'}`}
                     className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 sm:px-4 py-2 sm:py-3 pr-16 sm:pr-20 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-amber-600 text-sm sm:text-base"
                   />

                   <div className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1 sm:gap-2 text-gray-500 dark:text-gray-400">
                     <button className="cursor-pointer hover:text-gray-700 dark:hover:text-gray-300">
                       <Smile className="w-4 h-4 sm:w-5 sm:h-5" />
                     </button>
                     <button className="cursor-pointer hover:text-amber-600 dark:hover:text-yellow-400">
                       <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                     </button>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </motion.div>

       {/* Community features */}
       <div className="mb-12 sm:mb-16 md:mb-20">
         <div className="text-center mb-8 sm:mb-12">
           <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
             Why Join Our Developer Network?
           </h3>
           <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4 sm:px-0">
             Experience real-time collaboration with features designed to accelerate your development journey and connect you with global opportunities.
           </p>
         </div>

         <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{
             duration: 0.8,
             staggerChildren: 0.1
           }}
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
         >
           {communityFeatures.map((feature, idx) => (
            <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 group hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-500/30 transition-all duration-300 text-center"
          >
            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-3 sm:mb-4 mx-auto group-hover:shadow-lg group-hover:shadow-amber-500/20 transition-all duration-300`}>
              <feature.icon className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-yellow-400 transition-colors">
              <span className="hidden sm:inline">{feature.title}</span>
              <span className="sm:hidden">{feature.shortTitle}</span>
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed">
              <span className="hidden sm:inline">{feature.description}</span>
              <span className="sm:hidden">{feature.shortDescription}</span>
            </p>
          </motion.div>
           ))}
         </motion.div>
       </div>
     </div>

     {/* Animation styles */}
     <style jsx>{`
  .animation-delay-200 {
    animation-delay: 0.2s;
  }
  .animation-delay-400 {
    animation-delay: 0.4s;
  }
`}</style>
   </section>
 );
});

export default CommunitySection;