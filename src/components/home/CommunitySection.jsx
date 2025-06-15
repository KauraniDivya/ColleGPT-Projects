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
} from "lucide-react";

const CommunitySection = forwardRef((props, ref) => {
 const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
 const [activeChannel, setActiveChannel] = useState("general");
 const [isVisible, setIsVisible] = useState(false);
 const [isTyping, setIsTyping] = useState(false);
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

 // Community channels
 const channels = [
   {
     id: "general",
     name: "General Discussion",
     members: 2400,
     unread: 12,
     category: "Study"
   },
   {
     id: "gate-prep",
     name: "GATE Preparation",
     members: 3200,
     unread: 28,
     category: "Study"
   },
   {
     id: "doubt-solving",
     name: "Doubt Solving",
     members: 1800,
     unread: 5,
     category: "Study"
   },
   {
     id: "mock-tests",
     name: "Mock Test Discussion",
     members: 1500,
     unread: 0,
     category: "Practice"
   },
   {
     id: "career-guidance",
     name: "Career Guidance",
     members: 2100,
     unread: 15,
     category: "Career"
   },
   {
     id: "success-stories",
     name: "Success Stories",
     members: 2800,
     unread: 3,
     category: "Motivation"
   },
 ];

 // Sample community members
 const members = [
   {
     id: 1,
     name: "Priya Sharma",
     username: "priya_cs",
     avatar: "https://randomuser.me/api/portraits/women/45.jpg",
     status: "online",
     role: "moderator",
     rank: "AIR 45"
   },
   {
     id: 2,
     name: "Rahul Kumar",
     username: "rahul_gate",
     avatar: "https://randomuser.me/api/portraits/men/32.jpg",
     status: "online",
     role: "member",
     rank: "AIR 127"
   },
   {
     id: 3,
     name: "Ananya Singh",
     username: "ananya_cs",
     avatar: "https://randomuser.me/api/portraits/women/68.jpg",
     status: "idle",
     role: "member",
     rank: "Preparing"
   },
   {
     id: 4,
     name: "Arjun Patel",
     username: "arjun_da",
     avatar: "https://randomuser.me/api/portraits/men/55.jpg",
     status: "online",
     role: "mentor",
     rank: "AIR 23"
   }
 ];

 // Sample messages
 const messages = {
   "general": [
     {
       id: 1,
       user: members[0],
       message: "Welcome to our GATE CS community! Feel free to ask any questions about preparation strategies or specific topics.",
       time: "10:30 AM",
       reactions: [
         { emoji: "👋", count: 15 },
         { emoji: "❤️", count: 8 }
       ]
     },
     {
       id: 2,
       user: members[1],
       message: "Hi everyone! I'm struggling with Dynamic Programming concepts. Can someone suggest good resources or practice problems?",
       time: "10:45 AM",
       reactions: [
         { emoji: "🤔", count: 5 }
       ]
     },
     {
       id: 3,
       user: members[3],
       message: "For DP, I recommend starting with basic problems like Fibonacci, then move to LCS, LIS. GeeksforGeeks has a good practice section. Also, try solving GATE PYQs on DP - they follow a pattern!",
       time: "10:50 AM",
       reactions: [
         { emoji: "👍", count: 12 },
         { emoji: "🙏", count: 6 }
       ]
     },
     {
       id: 4,
       user: members[2],
       message: "Thanks @arjun_da! Your suggestion helped me a lot. I've solved 20+ DP problems this week and finally understanding the approach.",
       time: "11:15 AM",
       reactions: [
         { emoji: "🎉", count: 8 },
         { emoji: "💪", count: 4 }
       ]
     }
   ]
 };

 // Community stats
 const communityStats = [
   { value: "8.5K+", label: "Active Members", icon: Users, color: "text-green-600" },
   { value: "2.3K+", label: "Daily Messages", icon: MessageSquare, color: "text-blue-600" },
   { value: "150+", label: "Study Groups", icon: BookOpen, color: "text-purple-600" },
   { value: "95%", label: "Success Rate", icon: Award, color: "text-orange-600" },
 ];

 // Community features
 const communityFeatures = [
   {
     title: "Expert Mentorship",
     description: "Get guidance from GATE toppers and industry professionals",
     icon: Target,
     color: "from-green-500 to-emerald-400"
   },
   {
     title: "Doubt Resolution",
     description: "24/7 doubt solving with detailed explanations and multiple approaches",
     icon: MessageSquare,
     color: "from-blue-500 to-cyan-400"
   },
   {
     title: "Study Groups",
     description: "Join topic-wise study groups and collaborative learning sessions",
     icon: Users,
     color: "from-purple-500 to-violet-500"
   },
   {
     title: "Mock Test Discussions",
     description: "Analyze mock tests together and learn from mistakes",
     icon: TrendingUp,
     color: "from-orange-500 to-red-500"
   }
 ];

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
     className="relative min-h-screen py-20 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
     onMouseMove={handleMouseMove}
   >
     {/* Background Elements */}
     <div className="absolute inset-0 -z-10 overflow-hidden">
       <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-to-b from-green-500/5 via-emerald-500/5 to-transparent rounded-full filter blur-[100px]"></div>
       <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/5 via-green-500/5 to-transparent rounded-full filter blur-[100px]"></div>
     </div>

     {/* Dynamic cursor light effect */}
     <div
       className="absolute inset-0 -z-5 pointer-events-none"
       style={{
         background: `radial-gradient(circle 350px at ${mousePosition.x}px ${mousePosition.y}px, rgba(34,197,94,0.08), transparent 80%)`,
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

     <div className="container mx-auto px-4 md:px-6 relative">
       {/* Section Header */}
       <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
         {/* Left section: Text and heading */}
         <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <span className="inline-flex items-center rounded-full px-4 py-1.5 text-sm bg-green-50/80 dark:bg-green-900/30 backdrop-blur-sm border border-green-200/30 dark:border-green-800/30 mb-4">
               <span className="inline-block w-2 h-2 rounded-full bg-green-600 mr-2 animate-pulse"></span>
               <span className="bg-gradient-to-r from-green-700 dark:from-green-400 to-emerald-600 dark:to-emerald-300 bg-clip-text text-transparent font-medium">
                 Connect & Learn Together
               </span>
             </span>
           </motion.div>
           
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white"
           >
             Join Our Thriving
             <span className="text-green-600 dark:text-green-400 block md:inline">
               {" "}GATE Community
             </span>
           </motion.h2>
           
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0"
           >
             Connect with thousands of GATE aspirants, share knowledge, solve doubts together, 
             and accelerate your preparation with peer support and expert guidance.
           </motion.p>
           
           {/* Community stats */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.3 }}
             className="grid grid-cols-2 md:grid-cols-4 gap-4"
           >
             {communityStats.map((stat, idx) => (
               <div key={idx} className="text-center">
                 <div className={`w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-md flex items-center justify-center mx-auto mb-2 ${stat.color}`}>
                   <stat.icon className="w-6 h-6" />
                 </div>
                 <div className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent">
                   {stat.value}
                 </div>
                 <div className="text-xs text-gray-600 dark:text-gray-400">
                   {stat.label}
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
             className="mt-8"
           >
             <button className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-lg hover:shadow-green-500/20 transition-all">
               <Users className="w-5 h-5 mr-2" />
               <span>Join Community</span>
               <ArrowRight className="w-4 h-4 ml-2" />
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
             alt="Community 3D Illustration"
             className="max-w-full h-auto object-contain mx-auto"
           />
         </motion.div>
       </div>
       
       {/* Community Interface Preview */}
       <motion.div 
         className="mb-20"
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
       >
         {/* Desktop Community Interface */}
         <div className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/30 dark:border-gray-700/30 shadow-2xl">
           {/* Header */}
           <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700">
             <div className="flex items-center justify-between">
               <div className="flex items-center">
                 <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white">
                   <Users className="w-5 h-5" />
                 </div>
                 <div className="ml-3">
                   <h3 className="font-bold text-gray-900 dark:text-white">GATE CS Community</h3>
                   <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                     <div className="w-2 h-2 bg-green-500 rounded-full mr-1.5"></div>
                     8,520 online
                   </div>
                 </div>
               </div>
               
               <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                 <Search className="w-5 h-5" />
                 <Bell className="w-5 h-5" />
                 <Settings className="w-5 h-5" />
               </div>
             </div>
           </div>

           <div className="flex h-[500px]">
             {/* Sidebar */}
             <div className="w-80 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
               {/* Channels */}
               <div className="flex-1 overflow-y-auto p-4">
                 <h4 className="text-xs uppercase font-medium text-gray-500 dark:text-gray-400 mb-3 tracking-wider">
                   Channels
                 </h4>
                 
                 <div className="space-y-1">
                   {channels.map((channel) => (
                     <div
                       key={channel.id}
                       className={`px-3 py-2 cursor-pointer flex items-center justify-between group rounded-lg ${
                         activeChannel === channel.id 
                           ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                           : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                       }`}
                       onClick={() => setActiveChannel(channel.id)}
                     >
                       <div className="flex items-center min-w-0">
                         <Hash className={`w-4 h-4 mr-2 flex-shrink-0 ${activeChannel === channel.id ? "text-green-500" : "text-gray-400"}`} />
                         <span className="text-sm truncate">{channel.name}</span>
                       </div>
                       
                       {channel.unread > 0 && (
                         <div className="min-w-5 h-5 bg-green-500 dark:bg-green-600 rounded-full text-[10px] text-white font-medium flex items-center justify-center px-1.5">
                           {channel.unread}
                         </div>
                       )}
                     </div>
                   ))}
                 </div>
               </div>
               
               {/* User Profile */}
               <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex items-center">
                 <div className="relative">
                   <div className="w-8 h-8 rounded-full overflow-hidden">
                     <img 
                       src={members[0].avatar} 
                       alt={members[0].name} 
                       className="w-full h-full object-cover"
                     />
                   </div>
                   <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-gray-50 dark:border-gray-800"></div>
                 </div>
                 
                 <div className="ml-2 flex-1 min-w-0">
                   <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                     {members[0].username}
                   </div>
                   <div className="text-xs text-gray-500 dark:text-gray-400">
                     Online
                   </div>
                 </div>
               </div>
             </div>
             
             {/* Chat Area */}
             <div className="flex-1 flex flex-col">
               {/* Channel Header */}
               <div className="h-14 border-b border-gray-200 dark:border-gray-700 flex items-center px-4 justify-between bg-white dark:bg-gray-900">
                 <div className="flex items-center">
                   <Hash className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
                   <h3 className="font-semibold text-gray-800 dark:text-white">
                     {channels.find(ch => ch.id === activeChannel)?.name}
                   </h3>
                 </div>
                 
                 <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
                   <div className="text-sm">
                     {channels.find(ch => ch.id === activeChannel)?.members} members
                   </div>
                 </div>
               </div>
               
               {/* Messages */}
               <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white dark:bg-gray-900">
                 {/* Welcome Message */}
                 <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 mb-6 border border-green-100 dark:border-green-800/20">
                   <div className="flex items-center mb-3">
                     <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white">
                       <Users className="w-5 h-5" />
                     </div>
                     <div className="ml-3">
                       <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                         Welcome to GATE CS Community!
                       </h3>
                       <p className="text-gray-600 dark:text-gray-400 text-sm">
                         Connect, collaborate, and excel together in your GATE preparation.
                       </p>
                     </div>
                   </div>
                 </div>
                 
                 {/* Chat Messages */}
                 {messages[activeChannel]?.map((message) => (
                   <div key={message.id} className="group">
                     <div className="flex">
                       <div className="mr-3 flex-shrink-0">
                         <div className="w-10 h-10 rounded-full overflow-hidden">
                           <img 
                             src={message.user.avatar} 
                             alt={message.user.name} 
                             className="w-full h-full object-cover"
                           />
                         </div>
                       </div>
                       
                       <div className="flex-1">
                         <div className="flex items-center">
                           <span className="font-semibold text-gray-900 dark:text-white">{message.user.name}</span>
                           <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">{message.time}</span>
                           
                           {message.user.role === "moderator" && (
                             <span className="ml-2 px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                               MOD
                             </span>
                           )}
                           
                           {message.user.role === "mentor" && (
                             <span className="ml-2 px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">
                               MENTOR
                             </span>
                           )}

                           {message.user.rank && message.user.rank !== "Preparing" && (
                             <span className="ml-2 px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
                               {message.user.rank}
                             </span>
                           )}
                         </div>
                         
                         <p className="text-gray-800 dark:text-gray-200 mt-1">{message.message}</p>
                         
                         {/* Reactions */}
                         {message.reactions?.length > 0 && (
                           <div className="flex gap-1.5 mt-2">
                             {message.reactions.map((reaction, idx) => (
                               <div 
                                 key={idx} 
                                 className="bg-gray-100 dark:bg-gray-700/70 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full px-2 py-0.5 flex items-center text-sm cursor-pointer transition-colors"
                               >
                                 <span className="mr-1">{reaction.emoji}</span>
                                 <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{reaction.count}</span>
                               </div>
                             ))}
                           </div>
                         )}
                       </div>
                     </div>
                   </div>
                 )) || (
                   <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                     No messages in this channel yet. Be the first to start the conversation!
                   </div>
                 )}
                 
                 {/* Typing indicator */}
                 {isTyping && (
                   <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                     <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                       <img 
                         src={members[1].avatar} 
                         alt={members[1].name} 
                         className="w-full h-full object-cover"
                       />
                     </div>
                     <span className="text-green-600 dark:text-green-400 mr-2 font-medium">{members[1].name}</span>
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
               <div className="px-4 pb-4 bg-white dark:bg-gray-900">
                 <div className="relative">
                   <input
                     type="text"
                     placeholder={`Message #${channels.find(ch => ch.id === activeChannel)?.name.toLowerCase().replace(' ', '-')}`}
                     className="w-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-3 pr-20 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                   />
                   
                   <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2 text-gray-500 dark:text-gray-400">
                     <button className="cursor-pointer hover:text-gray-700 dark:hover:text-gray-300">
                       <Smile className="w-5 h-5" />
                     </button>
                     <button className="cursor-pointer hover:text-gray-700 dark:hover:text-gray-300">
                       <Send className="w-5 h-5" />
                     </button>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </motion.div>
       
       {/* Community features */}
       <div className="mb-20">
         <div className="text-center mb-12">
           <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
             Why Join Our Community?
           </h3>
           <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
             Experience collaborative learning with features designed to enhance your GATE preparation journey.
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
           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
         >
           {communityFeatures.map((feature, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: idx * 0.1 }}
               className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 group hover:shadow-xl transition-all duration-300"
             >
               <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 group-hover:shadow-lg transition-all duration-300`}>
                 <feature.icon className="w-7 h-7" />
               </div>
               
               <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                 {feature.title}
               </h3>
               
               <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                 {feature.description}
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