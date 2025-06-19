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
  Lightbulb,
  GitBranch,
  Folder,
} from "lucide-react";

const PlannerSection = forwardRef((props, ref) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("roadmap");
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

  // Project planner tabs
  const plannerTabs = [
    { id: "roadmap", name: "Roadmap", fullName: "Project Roadmap", icon: Calendar },
    { id: "skills", name: "Skills", fullName: "Tech Skills", icon: TrendingUp },
    { id: "milestones", name: "Goals", fullName: "Project Goals", icon: Target },
    { id: "insights", name: "Analytics", fullName: "Project Analytics", icon: BarChart3 },
  ];

  // Project roadmap data
  const projectRoadmap = [
    {
      time: "Week 1-2: Planning",
      shortTime: "W1-2: Plan",
      activity: "Research & Planning",
      task: "Market research, user requirements, and technical planning",
      status: "completed",
      priority: "high"
    },
    {
      time: "Week 3-4: Development",
      shortTime: "W3-4: Dev",
      activity: "Core Development",
      task: "Build MVP with essential features and functionality",
      status: "in-progress",
      priority: "high"
    },
    {
      time: "Week 5-6: Testing",
      shortTime: "W5-6: Test",
      activity: "Testing & Refinement",
      task: "User testing, bug fixes, and performance optimization",
      status: "upcoming",
      priority: "high"
    },
    {
      time: "Week 7: Launch",
      shortTime: "W7: Launch",
      activity: "Deployment & Launch",
      task: "Production deployment and marketing launch",
      status: "upcoming",
      priority: "medium"
    },
  ];

  // Tech skills progress
  const techSkillProgress = [
    { skill: "React Development", shortSkill: "React", completed: 85, total: 100, color: "bg-amber-500" },
    { skill: "Node.js Backend", shortSkill: "Node.js", completed: 72, total: 100, color: "bg-yellow-500" },
    { skill: "Database Design", shortSkill: "Database", completed: 68, total: 100, color: "bg-orange-500" },
    { skill: "UI/UX Design", shortSkill: "UI/UX", completed: 54, total: 100, color: "bg-amber-600" },
    { skill: "DevOps & Cloud", shortSkill: "DevOps", completed: 61, total: 100, color: "bg-yellow-600" },
    { skill: "Mobile Development", shortSkill: "Mobile", completed: 45, total: 100, color: "bg-orange-600" },
  ];

  // Weekly development stats
  const weeklyDevStats = [
    { day: "Mon", shortDay: "M", hours: 6, target: 8 },
    { day: "Tue", shortDay: "T", hours: 7, target: 8 },
    { day: "Wed", shortDay: "W", hours: 9, target: 8 },
    { day: "Thu", shortDay: "T", hours: 8, target: 8 },
    { day: "Fri", shortDay: "F", hours: 10, target: 8 },
    { day: "Sat", shortDay: "S", hours: 12, target: 10 },
    { day: "Sun", shortDay: "S", hours: 8, target: 6 },
  ];

  // Project goals
  const projectGoals = [
    {
      title: "Launch E-commerce Platform",
      deadline: "July 20, 2025",
      shortDeadline: "Jul 20",
      progress: 65,
      priority: "high",
      status: "on-track"
    },
    {
      title: "Master GraphQL APIs",
      deadline: "August 1, 2025",
      shortDeadline: "Aug 1",
      progress: 40,
      total: 100,
      priority: "medium",
      status: "on-track"
    },
    {
      title: "Complete 10 Open Source Projects",
      shortTitle: "10 OS Projects",
      deadline: "Dec 31, 2025",
      shortDeadline: "Dec 31",
      progress: 3,
      total: 10,
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
      case "roadmap":
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Project Timeline */}
              <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-slate-700 hover:border-[#D97706] transition-all">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                  <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#D97706] flex-shrink-0" />
                  <span className="truncate">Project Timeline</span>
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {projectRoadmap.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 sm:space-x-3">
                      <div className="flex-shrink-0 mt-0.5">
                        {item.status === "completed" ? (
                          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#D97706]" />
                        ) : item.status === "in-progress" ? (
                          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#F59E0B]" />
                        ) : (
                          <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2">
                          <div className="min-w-0 flex-1">
                            <p className="font-medium text-gray-900 dark:text-white text-sm sm:text-base truncate">
                              {item.activity}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                              {item.task}
                            </p>
                          </div>
                          <span className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0 self-start">
                            <span className="hidden sm:inline">{item.time}</span>
                            <span className="sm:hidden">{item.shortTime}</span>
                          </span>
                        </div>
                        <div className="flex items-center mt-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.priority === "high" ? "bg-[#D97706]/10 text-[#D97706]" :
                              item.priority === "medium" ? "bg-[#F59E0B]/10 text-[#F59E0B]" :
                                "bg-[#D97706]/20 text-[#D97706]"
                            }`}>
                            {item.priority}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Calendar */}
              <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-slate-700 hover:border-[#D97706] transition-all">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#D97706] flex-shrink-0" />
                  June 2025
                </h3>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-1 text-center">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day, idx) => (
                    <div key={idx} className="text-xs font-medium text-gray-500 dark:text-gray-400 py-1 sm:py-2">
                      {day}
                    </div>
                  ))}

                  {Array.from({ length: 35 }, (_, i) => {
                    const day = i + 1;
                    const isCurrentMonth = day > 0 && day <= 30;
                    const isToday = day === 15;
                    const hasDeadline = [7, 14, 21, 28].includes(day);

                    return (
                      <div
                        key={i}
                        className={`text-xs rounded-md sm:rounded-lg aspect-square flex items-center justify-center cursor-pointer transition-colors ${isCurrentMonth
                            ? isToday
                              ? "bg-[#D97706] text-white font-bold"
                              : hasDeadline
                                ? "bg-[#D97706]/10 text-[#D97706] font-medium"
                                : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
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

      case "skills":
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Tech Skills Progress */}
              <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-slate-700 hover:border-[#D97706] transition-all">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#D97706] flex-shrink-0" />
                  Tech Skills Progress
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {techSkillProgress.map((item, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate mr-2">
                          <span className="hidden sm:inline">{item.skill}</span>
                          <span className="sm:hidden">{item.shortSkill}</span>
                        </span>
                        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex-shrink-0">
                          {item.completed}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                        <div
                          className="bg-[#D97706] h-1.5 sm:h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item.completed}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Development Hours */}
              <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-slate-700 hover:border-[#D97706] transition-all">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                  <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#D97706] flex-shrink-0" />
                  <span className="hidden sm:inline">Weekly Development Hours</span>
                  <span className="sm:hidden">Weekly Hours</span>
                </h3>
                <div className="flex items-end justify-between h-20 sm:h-32">
                  {weeklyDevStats.map((stat, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <div className="relative w-4 sm:w-6 h-12 sm:h-24 bg-gray-100 dark:bg-gray-700 rounded-full mb-1 sm:mb-2">
                        <div
                          className="absolute bottom-0 left-0 right-0 bg-[#D97706] rounded-full transition-all duration-500"
                          style={{ height: `${Math.min((stat.hours / stat.target) * 100, 100)}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                        <span className="hidden sm:inline">{stat.day}</span>
                        <span className="sm:hidden">{stat.shortDay}</span>
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

      case "milestones":
        return (
          <div className="space-y-4 sm:space-y-6">
            {projectGoals.map((goal, idx) => (
              <div key={idx} className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-slate-700 hover:border-[#D97706] transition-all">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 sm:mb-4 gap-2 sm:gap-4">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      <span className="hidden sm:inline">{goal.title}</span>
                      <span className="sm:hidden">{goal.shortTitle || goal.title}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      Deadline: <span className="hidden sm:inline">{goal.deadline}</span>
                      <span className="sm:hidden">{goal.shortDeadline}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${goal.priority === "high" ? "bg-[#D97706]/10 text-[#D97706]" :
                        "bg-[#F59E0B]/10 text-[#F59E0B]"
                      }`}>
                      {goal.priority}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs text-white font-medium ${goal.status === "on-track" ? "bg-[#D97706]" : "bg-[#F59E0B]"
                      }`}>
                      {goal.status}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Progress</span>
                    <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                      {goal.total ? `${goal.progress}/${goal.total}` : `${goal.progress}%`}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                    <div
                      className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 ${goal.status === "on-track" ? "bg-[#D97706]" : "bg-[#F59E0B]"
                        }`}
                      style={{ width: `${(goal.progress / (goal.total || 100)) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Add New Goal Form */}
            <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-slate-700 hover:border-[#D97706] transition-all">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#D97706] flex-shrink-0" />
                <span className="hidden sm:inline">Set New Project Goal</span>
                <span className="sm:hidden">New Goal</span>
              </h3>
              <form className="space-y-3 sm:space-y-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Goal Title
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 sm:px-4 py-2 rounded-md sm:rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#D97706] focus:border-transparent text-sm sm:text-base"
                    placeholder="e.g., Build a Portfolio Website"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Deadline
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 sm:px-4 py-2 rounded-md sm:rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#D97706] focus:border-transparent text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Priority
                    </label>
                    <select className="w-full px-3 sm:px-4 py-2 rounded-md sm:rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#D97706] focus:border-transparent text-sm sm:text-base">
                      <option value="high">High Priority</option>
                      <option value="medium">Medium Priority</option>
                      <option value="low">Low Priority</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full px-3 sm:px-4 py-2 bg-[#D97706] text-white rounded-md sm:rounded-lg hover:bg-[#F59E0B] transition-colors flex items-center justify-center text-sm sm:text-base font-medium"
                >
                  <Target className="w-4 h-4 mr-2" />
                  Add Goal
                </button>
              </form>
            </div>
          </div>
        );

      case "insights":
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {/* Analytics Cards */}
              {[
                {
                  title: "Active Projects",
                  shortTitle: "Projects",
                  value: "5",
                  shortValue: "5",
                  icon: Folder,
                  color: "text-amber-600",
                  trend: "2 launched this month",
                  shortTrend: "2 launched"
                },
                {
                  title: "Code Commits",
                  shortTitle: "Commits",
                  value: "247",
                  icon: GitBranch,
                  color: "text-orange-600",
                  trend: "+35% this week",
                  shortTrend: "+35%"
                },
                {
                  title: "GitHub Stars",
                  shortTitle: "Stars",
                  value: "89",
                  icon: Award,
                  color: "text-yellow-600",
                  trend: "Last: React Components",
                  shortTrend: "React Comp"
                },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-slate-700 hover:border-[#D97706] transition-all text-center">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center mx-auto mb-3 sm:mb-4 ${stat.color}`}>
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                    <span className="hidden sm:inline">{stat.value}</span>
                    <span className="sm:hidden">{stat.shortValue || stat.value}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <span className="hidden sm:inline">{stat.title}</span>
                    <span className="sm:hidden">{stat.shortTitle}</span>
                  </p>
                  <p className="text-xs text-[#D97706] dark:text-[#F59E0B]">
                    <span className="hidden sm:inline">{stat.trend}</span>
                    <span className="sm:hidden">{stat.shortTrend}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Technology Usage & Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-slate-700 hover:border-[#D97706] transition-all">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                  <Code className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#D97706] flex-shrink-0" />
                  <span className="hidden sm:inline">Technology Stack</span>
                  <span className="sm:hidden">Tech Stack</span>
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    { tech: "JavaScript", usage: 85, icon: Code },
                    { tech: "React.js", usage: 70, icon: Database },
                    { tech: "Python", usage: 60, icon: Brain },
                    { tech: "Docker", shortTech: "Docker", usage: 45, icon: Smartphone },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center min-w-0 flex-1 mr-2">
                        <item.icon className="w-3 h-3 sm:w-4 sm:h-4 text-[#D97706] mr-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate">
                          <span className="hidden sm:inline">{item.tech}</span>
                          <span className="sm:hidden">{item.shortTech || item.tech}</span>
                        </span>
                      </div>
                      <div className="flex items-center flex-shrink-0">
                        <div className="w-12 sm:w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2 mr-2">
                          <div
                            className="bg-[#D97706] h-1.5 sm:h-2 rounded-full transition-all duration-500"
                            style={{ width: `${item.usage}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 w-8 text-right">
                          {item.usage}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Project Activities */}
              <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-slate-700 hover:border-[#D97706] transition-all">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-[#D97706] flex-shrink-0" />
                  <span className="hidden sm:inline">Recent Activities</span>
                  <span className="sm:hidden">Activities</span>
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {[
                    { activity: "Launched Portfolio Website", shortActivity: "Portfolio Launch", date: "June 10", shortDate: "Jun 10", badge: "🚀" },
{ activity: "Completed React Tutorial", shortActivity: "React Tutorial", date: "June 5", shortDate: "Jun 5", badge: "📚" },
                   { activity: "Fixed Critical Bug", shortActivity: "Bug Fix", date: "May 28", shortDate: "May 28", badge: "🐛" },
                   { activity: "Added Dark Mode Feature", shortActivity: "Dark Mode", date: "May 20", shortDate: "May 20", badge: "🌙" },
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-center justify-between py-1 sm:py-2">
                     <div className="flex items-center min-w-0 flex-1">
                       <span className="text-base sm:text-lg mr-2 sm:mr-3 flex-shrink-0">{item.badge}</span>
                       <div className="min-w-0 flex-1">
                         <p className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate">
                           <span className="hidden sm:inline">{item.activity}</span>
                           <span className="sm:hidden">{item.shortActivity}</span>
                         </p>
                         <p className="text-xs text-gray-500 dark:text-gray-400">
                           <span className="hidden sm:inline">{item.date}</span>
                           <span className="sm:hidden">{item.shortDate}</span>
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
     className="relative min-h-screen py-12 sm:py-16 md:py-20 bg-white dark:bg-[#0A0A0A] overflow-hidden"
     onMouseMove={handleMouseMove}
   >
     {/* Background Elements */}
     <div className="absolute inset-0 -z-10">
       <div className="absolute top-0 left-0 w-[300px] sm:w-[500px] md:w-[600px] h-[200px] sm:h-[300px] md:h-[400px] bg-gradient-to-b from-[#D97706]/5 to-transparent rounded-full filter blur-[40px] sm:blur-[60px] md:blur-[80px]"></div>
       <div className="absolute bottom-0 right-0 w-[200px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[400px] md:h-[500px] bg-gradient-to-tr from-[#F59E0B]/5 to-transparent rounded-full filter blur-[30px] sm:blur-[50px] md:blur-[60px]"></div>
     </div>

     {/* Dynamic cursor light effect - disabled on mobile for performance */}
     <div
       className="absolute inset-0 -z-5 overflow-hidden hidden sm:block"
       style={{
         background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(217,119,6,0.07), transparent 80%)`,
       }}
     />

     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* Section Header */}
       <div className="text-center mb-8 sm:mb-12 md:mb-16">
         <motion.h2
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4"
         >
           <span className="bg-gradient-to-r from-[#D97706] to-[#F59E0B] bg-clip-text text-transparent">
             Project Workspace
           </span>
         </motion.h2>
         <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1 }}
           className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0"
         >
           Organize your development projects with smart planning and tracking tools
         </motion.p>
       </div>

       {/* Planner Tabs */}
       <div className="flex justify-center mb-6 sm:mb-8 md:mb-12">
         <div className="inline-flex rounded-lg bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700 p-1 overflow-x-auto">
           <div className="flex space-x-1">
             {plannerTabs.map((tab) => (
               <button
                 key={tab.id}
                 onClick={() => setActiveTab(tab.id)}
                 className={`px-3 sm:px-4 md:px-6 py-2 rounded-md text-xs sm:text-sm font-medium transition-all flex items-center whitespace-nowrap ${activeTab === tab.id
                     ? "bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-white"
                     : "text-gray-600 dark:text-gray-300 hover:text-[#D97706] dark:hover:text-[#D97706]"
                   }`}
               >
                 <tab.icon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 flex-shrink-0" />
                 <span className="hidden sm:inline">{tab.fullName}</span>
                 <span className="sm:hidden">{tab.name}</span>
               </button>
             ))}
           </div>
         </div>
       </div>

       {/* Tab Content */}
       <motion.div
         key={activeTab}
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -20 }}
         transition={{ duration: 0.3 }}
         className="mt-4 sm:mt-6 md:mt-8"
       >
         {renderTabContent()}
       </motion.div>
     </div>
   </section>
 );
});

export default PlannerSection;