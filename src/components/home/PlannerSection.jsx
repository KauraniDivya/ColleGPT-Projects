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
    { id: "calendar", name: "Study Calendar", icon: Calendar },
    { id: "progress", name: "Progress Tracker", icon: TrendingUp },
    { id: "goals", name: "Goal Setting", icon: Target },
    { id: "analytics", name: "Analytics", icon: BarChart3 },
  ];

  // Study schedule data
  const studySchedule = [
    {
      time: "06:00 - 08:00",
      subject: "Data Structures",
      topic: "Trees and Graphs",
      status: "completed",
      difficulty: "medium"
    },
    {
      time: "08:30 - 10:30",
      subject: "Algorithms",
      topic: "Dynamic Programming",
      status: "in-progress",
      difficulty: "hard"
    },
    {
      time: "11:00 - 12:30",
      subject: "Operating Systems",
      topic: "Process Management",
      status: "upcoming",
      difficulty: "medium"
    },
    {
      time: "14:00 - 16:00",
      subject: "Computer Networks",
      topic: "TCP/IP Protocol",
      status: "upcoming",
      difficulty: "easy"
    },
  ];

  // Progress data
  const progressData = [
    { subject: "Data Structures", completed: 85, total: 100, color: "bg-green-500" },
    { subject: "Algorithms", completed: 72, total: 100, color: "bg-blue-500" },
    { subject: "Operating Systems", completed: 68, total: 100, color: "bg-purple-500" },
    { subject: "Computer Networks", completed: 54, total: 100, color: "bg-orange-500" },
    { subject: "Database Systems", completed: 61, total: 100, color: "bg-pink-500" },
    { subject: "Theory of Computation", completed: 45, total: 100, color: "bg-indigo-500" },
  ];

  // Weekly study stats
  const weeklyStats = [
    { day: "Mon", hours: 8, target: 8 },
    { day: "Tue", hours: 6, target: 8 },
    { day: "Wed", hours: 9, target: 8 },
    { day: "Thu", hours: 7, target: 8 },
    { day: "Fri", hours: 8, target: 8 },
    { day: "Sat", hours: 10, target: 10 },
    { day: "Sun", hours: 5, target: 6 },
  ];

  // Goals data
  const goals = [
    {
      title: "Complete Data Structures",
      deadline: "Feb 15, 2026",
      progress: 85,
      priority: "high",
      status: "on-track"
    },
    {
      title: "Solve 500 PYQ Questions",
      deadline: "Mar 1, 2026",
      progress: 320,
      total: 500,
      priority: "high",
      status: "on-track"
    },
    {
      title: "Take 10 Mock Tests",
      deadline: "Feb 28, 2026",
      progress: 6,
      total: 10,
      priority: "medium",
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
              <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-slate-700/50">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-green-600" />
                  Today's Schedule
                </h3>
                <div className="space-y-4">
                  {studySchedule.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        {item.status === "completed" ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : item.status === "in-progress" ? (
                          <Clock className="w-5 h-5 text-blue-500" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-slate-900 dark:text-white">
                              {item.subject}
                            </p>
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              {item.topic}
                            </p>
                          </div>
                          <span className="text-xs text-slate-500 dark:text-slate-400">
                            {item.time}
                          </span>
                        </div>
                        <div className="flex items-center mt-2">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            item.difficulty === "easy" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" :
                            item.difficulty === "medium" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" :
                            "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                          }`}>
                            {item.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mini Calendar */}
              <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-slate-700/50">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-green-600" />
                  January 2026
                </h3>
                
                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 text-center">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day, idx) => (
                    <div key={idx} className="text-xs font-medium text-slate-500 dark:text-slate-400 py-2">
                      {day}
                    </div>
                  ))}
                  
                  {Array.from({ length: 35 }, (_, i) => {
                    const day = i - 2; // Start calendar layout
                    const isCurrentMonth = day > 0 && day <= 31;
                    const isToday = day === 15;
                    const hasStudy = [5, 8, 12, 15, 19, 22, 26, 29].includes(day);
                    
                    return (
                      <div
                        key={i}
                        className={`text-xs rounded-lg aspect-square flex items-center justify-center cursor-pointer transition-colors ${
                          isCurrentMonth
                            ? isToday
                              ? "bg-green-600 text-white font-bold"
                              : hasStudy
                              ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 font-medium"
                              : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                            : "text-slate-400 dark:text-slate-600"
                        }`}
                      >
                        {isCurrentMonth ? day : day <= 0 ? 31 + day : day - 31}
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
              {/* Subject Progress */}
              <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-slate-700/50">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Subject-wise Progress
                </h3>
                <div className="space-y-4">
                  {progressData.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          {item.subject}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {item.completed}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${item.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${item.completed}%` }}
                          transition={{ duration: 1, delay: idx * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Study Hours */}
              <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-slate-700/50">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                  Weekly Study Hours
                </h3>
                <div className="flex items-end justify-between h-32">
                  {weeklyStats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="relative w-6 h-24 bg-slate-200 dark:bg-slate-700 rounded-full mb-2">
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 bg-green-500 rounded-full"
                          initial={{ height: 0 }}
                          animate={{ height: `${(stat.hours / stat.target) * 100}%` }}
                          transition={{ duration: 0.8, delay: idx * 0.1 }}
                        />
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                        {stat.day}
                      </span>
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
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
            {goals.map((goal, idx) => (
              <div key={idx} className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-slate-700/50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {goal.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Deadline: {goal.deadline}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      goal.priority === "high" ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300" :
                      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                    }`}>
                      {goal.priority} priority
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      goal.status === "on-track" ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300" :
                      "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300"
                    }`}>
                      {goal.status}
                    </span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600 dark:text-slate-400">Progress</span>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {goal.total ? `${goal.progress}/${goal.total}` : `${goal.progress}%`}
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <motion.div
                      className="h-2 rounded-full bg-green-500"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: goal.total ? `${(goal.progress / goal.total) * 100}%` : `${goal.progress}%` 
                      }}
                      transition={{ duration: 1, delay: idx * 0.2 }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "analytics":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Analytics Cards */}
              {[
                { title: "Average Study Time", value: "7.2 hrs/day", icon: Clock, color: "text-blue-600" },
                { title: "Topics Completed", value: "147/200", icon: BookOpen, color: "text-green-600" },
                { title: "Mock Test Average", value: "78.5%", icon: Award, color: "text-purple-600" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-slate-700/50 text-center">
                  <div className={`w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center mx-auto mb-4 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.title}
                  </p>
                </div>
              ))}
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
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-gradient-to-b from-green-500/5 to-transparent rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[500px] bg-gradient-to-tr from-emerald-500/5 to-transparent rounded-full filter blur-[60px]"></div>
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
              Smart Study Planning
            </span>
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-slate-900 dark:from-white to-slate-600 dark:to-slate-300 bg-clip-text text-transparent relative z-10">
              Study
            </span>
            <span className="text-green-600 dark:text-green-400"> Planner</span>
          </h2>

          <motion.p
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Organize your GATE preparation with AI-powered study plans, progress tracking, 
            and personalized analytics to maximize your productivity and success.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side: Features & Benefits */}
          <motion.div
            className="w-full lg:w-2/5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Personalized
                <span className="block text-green-600 dark:text-green-400">
                  Study Experience
                </span>
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Our AI-powered planner adapts to your learning pace, strengths, and weaknesses 
                to create the most effective study schedule for your GATE preparation.
              </p>
            </motion.div>

            {/* Feature highlights */}
            <motion.div variants={containerVariants} className="space-y-6">
              {[
                {
                  icon: Brain,
                  title: "AI-Powered Scheduling",
                  description: "Smart algorithms create optimal study schedules based on your performance and preferences",
                  color: "from-blue-500 to-cyan-400"
                },
                {
                  icon: Target,
                  title: "Goal-Oriented Planning",
                  description: "Set and track specific goals with milestone-based progress monitoring",
                  color: "from-green-500 to-emerald-400"
                },
                {
                  icon: TrendingUp,
                  title: "Progress Analytics",
                  description: "Detailed insights into your study patterns and performance trends",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: Zap,
                  title: "Adaptive Learning",
                  description: "Plans automatically adjust based on your progress and changing priorities",
                  color: "from-orange-500 to-red-500"
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm border border-white/20 dark:border-slate-700/20 hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all"
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants} className="mt-8">
              <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium rounded-lg inline-flex items-center transition-all shadow-lg">
                Create Your Study Plan
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Side: Interactive Planner Interface */}
          <motion.div
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Planner Dashboard */}
            <div className="bg-white/30 dark:bg-slate-900/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/30 dark:border-slate-700/30 shadow-xl">
              {/* Tab Navigation */}
              <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50 flex gap-2 overflow-x-auto">
                {plannerTabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center whitespace-nowrap ${
                      activeTab === tab.id
                        ? "text-white"
                        : "text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-800/50"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {activeTab === tab.id && (
                      <motion.span
                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 -z-10"
                        layoutId="activeTabPlanner"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                    <tab.icon className="w-4 h-4 mr-2" />
                    {tab.name}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6 h-[500px] overflow-auto">
                {renderTabContent()}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default PlannerSection;