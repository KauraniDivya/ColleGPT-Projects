import React, { forwardRef, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Target,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  BarChart3,
  BookOpen,
  Award,
  ArrowRight,
  Users,
  Zap,
  Brain,
  Code,
  Smartphone,
  Database,
} from "lucide-react";

const PlannerSection = forwardRef((props, ref) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("calendar");
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

  // Planner tabs
  const plannerTabs = [
    { id: "calendar", name: "Project Calendar", icon: Calendar },
    { id: "progress", name: "Skills Tracker", icon: TrendingUp },
    { id: "goals", name: "Hackathon Goals", icon: Target },
    { id: "analytics", name: "Performance", icon: BarChart3 },
  ];

  // Project schedule data for hackathons
  const projectSchedule = [
    {
      time: "Day 1: 09:00 - 12:00",
      activity: "Ideation & Planning",
      task: "Brainstorm ideas and create project roadmap",
      status: "completed",
      priority: "high"
    },
    {
      time: "Day 1: 13:00 - 18:00", 
      activity: "Setup & Architecture",
      task: "Setup development environment and design system architecture",
      status: "in-progress",
      priority: "high"
    },
    {
      time: "Day 2: 09:00 - 15:00",
      activity: "Core Development",
      task: "Implement main features and functionality",
      status: "upcoming",
      priority: "high"
    },
    {
      time: "Day 2: 16:00 - 20:00",
      activity: "Testing & Polish",
      task: "Bug fixes, testing, and UI improvements", 
      status: "upcoming",
      priority: "medium"
    },
  ];

  // Progress data for hackathon skills
  const skillProgress = [
    { skill: "Frontend Development", completed: 85, total: 100, color: "bg-green-500" },
    { skill: "Backend APIs", completed: 72, total: 100, color: "bg-blue-500" },
    { skill: "Database Design", completed: 68, total: 100, color: "bg-purple-500" },
    { skill: "UI/UX Design", completed: 54, total: 100, color: "bg-orange-500" },
    { skill: "DevOps & Deployment", completed: 61, total: 100, color: "bg-pink-500" },
    { skill: "AI/ML Integration", completed: 45, total: 100, color: "bg-indigo-500" },
  ];

  // Weekly development stats
  const weeklyStats = [
    { day: "Mon", hours: 6, target: 8 },
    { day: "Tue", hours: 7, target: 8 },
    { day: "Wed", hours: 9, target: 8 },
    { day: "Thu", hours: 8, target: 8 },
    { day: "Fri", hours: 10, target: 8 },
    { day: "Sat", hours: 12, target: 10 },
    { day: "Sun", hours: 8, target: 6 },
  ];

  // Hackathon goals
  const hackathonGoals = [
    {
      title: "Complete AI Project",
      deadline: "July 20, 2025",
      progress: 65,
      priority: "high",
      status: "on-track"
    },
    {
      title: "Learn React Native",
      deadline: "August 1, 2025", 
      progress: 40,
      total: 100,
      priority: "medium",
      status: "on-track"
    },
    {
      title: "Participate in 5 Hackathons",
      deadline: "Dec 31, 2025",
      progress: 2,
      total: 5,
      priority: "high",
      status: "behind"
    },
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

  // Render tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case "calendar":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Today's Schedule */}
              <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:border-[#8B5CF6] transition-all">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-[#8B5CF6]" />
                  Project Timeline
                </h3>
                <div className="space-y-4">
                  {projectSchedule.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        {item.status === "completed" ? (
                          <CheckCircle className="w-5 h-5 text-[#8B5CF6]" />
                        ) : item.status === "in-progress" ? (
                          <Clock className="w-5 h-5 text-[#A78BFA]" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {item.activity}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {item.task}
                            </p>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {item.time}
                          </span>
                        </div>
                        <div className="flex items-center mt-2">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            item.priority === "high" ? "bg-[#8B5CF6]/10 text-[#8B5CF6]" :
                            item.priority === "medium" ? "bg-[#A78BFA]/10 text-[#A78BFA]" :
                            "bg-[#8B5CF6]/20 text-[#8B5CF6]"
                          }`}>
                            {item.priority} priority
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mini Calendar */}
              <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:border-[#8B5CF6] transition-all">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-[#8B5CF6]" />
                  June 2025
                </h3>
                
                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 text-center">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day, idx) => (
                    <div key={idx} className="text-xs font-medium text-gray-500 dark:text-gray-400 py-2">
                      {day}
                    </div>
                  ))}
                  
                  {Array.from({ length: 35 }, (_, i) => {
                    const day = i + 1; // Start calendar layout
                    const isCurrentMonth = day > 0 && day <= 30;
                    const isToday = day === 15;
                    const hasHackathon = [7, 14, 21, 28].includes(day);
                    
                    return (
                      <div
                        key={i}
                        className={`text-xs rounded-lg aspect-square flex items-center justify-center cursor-pointer transition-colors ${
                          isCurrentMonth
                            ? isToday
                              ? "bg-[#8B5CF6] text-white font-bold"
                              : hasHackathon
                              ? "bg-[#8B5CF6]/10 text-[#8B5CF6] font-medium"
                              : "hover:bg-gray-100 dark:hover:bg-gray-800"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      >
                        {day > 0 && day <= 30 ? day : ""}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );

      case "progress":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Skills Progress */}
              <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:border-[#8B5CF6] transition-all">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-[#8B5CF6]" />
                  Skills Progress
                </h3>
                <div className="space-y-4">
                  {skillProgress.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {item.skill}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {item.completed}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-[#8B5CF6] h-2 rounded-full"
                          style={{ width: `${item.completed}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Development Hours */}
              <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:border-[#8B5CF6] transition-all">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-[#8B5CF6]" />
                  Weekly Development Hours
                </h3>
                <div className="flex items-end justify-between h-32">
                  {weeklyStats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="relative w-6 h-24 bg-gray-100 dark:bg-gray-700 rounded-full mb-2">
                        <div
                          className="absolute bottom-0 left-0 right-0 bg-[#8B5CF6] rounded-full"
                          style={{ height: `${(stat.hours / stat.target) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        {stat.day}
                      </span>
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                        {stat.hours}h
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "goals":
        return (
          <div className="space-y-6">
            {hackathonGoals.map((goal, idx) => (
              <div key={idx} className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:border-[#8B5CF6] transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {goal.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Deadline: {goal.deadline}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                     goal.priority === "high" ? "bg-[#8B5CF6]/10 text-[#8B5CF6]" :
                     "bg-[#A78BFA]/10 text-[#A78BFA]"
                   }`}>
                     {goal.priority} priority
                   </span>
                   <span className={`px-2 py-1 rounded-full text-xs text-white ${
                     goal.status === "on-track" ? "bg-[#8B5CF6]" : "bg-[#A78BFA]"
                   }`}>
                     {goal.status}
                   </span>
                 </div>
               </div>
               
               <div className="mb-4">
                 <div className="flex justify-between items-center mb-2">
                   <span className="text-sm text-gray-600 dark:text-gray-400">Progress</span>
                   <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                     {goal.total ? `${goal.progress}/${goal.total}` : `${goal.progress}%`}
                   </span>
                 </div>
                 <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                   <div
                     className={`h-2 rounded-full ${
                       goal.status === "on-track" ? "bg-[#8B5CF6]" : "bg-[#A78BFA]"
                     }`}
                     style={{ width: `${(goal.progress / (goal.total || 100)) * 100}%` }}
                   />
                 </div>
               </div>
             </div>
           ))}
           
           {/* Add New Goal Form */}
           <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:border-[#8B5CF6] transition-all">
             <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
               <Target className="w-5 h-5 mr-2 text-[#8B5CF6]" />
               Set New Hackathon Goal
             </h3>
             <form className="space-y-4">
               <div>
                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                   Goal Title
                 </label>
                 <input
                   type="text"
                   className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent"
                   placeholder="e.g., Build a Mobile App"
                 />
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div>
                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                     Deadline
                   </label>
                   <input
                     type="date"
                     className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent"
                   />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                     Priority
                   </label>
                   <select className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent">
                     <option value="high">High Priority</option>
                     <option value="medium">Medium Priority</option>
                     <option value="low">Low Priority</option>
                   </select>
                 </div>
               </div>
               <button
                 type="submit"
                 className="w-full px-4 py-2 bg-[#8B5CF6] text-white rounded-lg hover:bg-[#A78BFA] transition-colors flex items-center justify-center"
               >
                 <Target className="w-4 h-4 mr-2" />
                 Add Goal
               </button>
             </form>
           </div>
         </div>
       );

     case "analytics":
       return (
         <div className="space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {/* Performance Analytics Cards */}
             {[
               { 
                 title: "Average Dev Time", 
                 value: "8.2 hrs/day", 
                 icon: Clock, 
                 color: "text-blue-600",
                 trend: "+12% this week"
               },
               { 
                 title: "Projects Completed", 
                 value: "7/10", 
                 icon: CheckCircle, 
                 color: "text-green-600",
                 trend: "70% completion rate"
               },
               { 
                 title: "Hackathon Wins", 
                 value: "3", 
                 icon: Award, 
                 color: "text-purple-600",
                 trend: "Last win: AI Challenge"
               },
             ].map((stat, idx) => (
               <div key={idx} className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:border-[#8B5CF6] transition-all text-center">
                 <div className={`w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center mx-auto mb-4 ${stat.color}`}>
                   <stat.icon className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                   {stat.value}
                 </h3>
                 <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                   {stat.title}
                 </p>
                 <p className="text-xs text-[#8B5CF6] dark:text-[#A78BFA]">
                   {stat.trend}
                 </p>
               </div>
             ))}
           </div>

           {/* Technology Usage Chart */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:border-[#8B5CF6] transition-all">
               <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                 <Code className="w-5 h-5 mr-2 text-[#8B5CF6]" />
                 Technology Usage
               </h3>
               <div className="space-y-3">
                 {[
                   { tech: "React.js", usage: 85, icon: Code },
                   { tech: "Node.js", usage: 70, icon: Database },
                   { tech: "Python", usage: 60, icon: Brain },
                   { tech: "React Native", usage: 45, icon: Smartphone },
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-center justify-between">
                     <div className="flex items-center">
                       <item.icon className="w-4 h-4 text-[#8B5CF6] mr-2" />
                       <span className="text-sm font-medium text-gray-900 dark:text-white">
                         {item.tech}
                       </span>
                     </div>
                     <div className="flex items-center">
                       <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2 mr-2">
                         <div
                           className="bg-[#8B5CF6] h-2 rounded-full"
                           style={{ width: `${item.usage}%` }}
                         />
                       </div>
                       <span className="text-xs text-gray-500 dark:text-gray-400">
                         {item.usage}%
                       </span>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             {/* Recent Achievements */}
             <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:border-[#8B5CF6] transition-all">
               <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                 <Award className="w-5 h-5 mr-2 text-[#8B5CF6]" />
                 Recent Achievements
               </h3>
               <div className="space-y-3">
                 {[
                   { achievement: "Won AI Innovation Challenge", date: "June 10", badge: "🏆" },
                   { achievement: "Completed React Certification", date: "June 5", badge: "🎓" },
                   { achievement: "Built First Mobile App", date: "May 28", badge: "📱" },
                   { achievement: "5-Day Coding Streak", date: "May 20", badge: "🔥" },
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-center justify-between py-2">
                     <div className="flex items-center">
                       <span className="text-lg mr-3">{item.badge}</span>
                       <div>
                         <p className="text-sm font-medium text-gray-900 dark:text-white">
                           {item.achievement}
                         </p>
                         <p className="text-xs text-gray-500 dark:text-gray-400">
                           {item.date}
                         </p>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           </div>
         </div>
       );

     default:
       return null;
   }
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
     id="planner"
     className="relative min-h-screen py-20 bg-white dark:bg-[#0A0A0A] overflow-hidden"
     onMouseMove={handleMouseMove}
   >
     {/* Background Elements */}
     <div className="absolute inset-0 -z-10">
       <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-gradient-to-b from-[#8B5CF6]/5 to-transparent rounded-full filter blur-[80px]"></div>
       <div className="absolute bottom-0 right-0 w-[400px] h-[500px] bg-gradient-to-tr from-[#A78BFA]/5 to-transparent rounded-full filter blur-[60px]"></div>
     </div>

     {/* Dynamic cursor light effect */}
     <div
       className="absolute inset-0 -z-5 overflow-hidden"
       style={{
         background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139,92,246,0.07), transparent 80%)`,
       }}
     />

     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* Section Header */}
       <div className="text-center mb-16">
         <motion.h2
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
         >
           <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">
             Project Planner
           </span>
         </motion.h2>
         <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1 }}
           className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
         >
           Plan your hackathon participation with our smart project planner
         </motion.p>
       </div>

       {/* Planner Tabs */}
       <div className="flex justify-center mb-12">
         <div className="inline-flex rounded-lg bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700 p-1">
           {plannerTabs.map((tab) => (
             <button
               key={tab.id}
               onClick={() => setActiveTab(tab.id)}
               className={`px-6 py-2 rounded-md text-sm font-medium transition-all flex items-center ${
                 activeTab === tab.id
                   ? "bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white"
                   : "text-gray-600 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6]"
               }`}
             >
               <tab.icon className="w-4 h-4 mr-2" />
               {tab.name}
             </button>
           ))}
         </div>
       </div>

       {/* Tab Content */}
       <motion.div
         key={activeTab}
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -20 }}
         transition={{ duration: 0.3 }}
         className="mt-8"
       >
         {renderTabContent()}
       </motion.div>
     </div>
   </section>
 );
});

export default PlannerSection;