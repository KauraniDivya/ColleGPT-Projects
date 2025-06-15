import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  Target,
  Award,
  Clock,
  BookOpen,
  FileText,
  Code,
  Lightbulb,
  Trophy,
  TrendingUp,
} from "lucide-react";

const HackathonSection = () => {
  const [activeTab, setActiveTab] = useState("events");
  const [currentEvent, setCurrentEvent] = useState(0);

  // Hackathon events data
  const hackathonEvents = [
    {
      name: "AI Innovation Challenge",
      description: "Build innovative AI solutions for real-world problems",
      organization: "TechCorp",
      date: "June 15-17, 2024",
      prize: "$10,000",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Web3 Hackathon",
      description: "Create decentralized applications for the future",
      organization: "BlockChain Labs",
      date: "July 20-22, 2024",
      prize: "$15,000",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Mobile App Challenge",
      description: "Develop cutting-edge mobile applications",
      organization: "AppWorks",
      date: "August 10-12, 2024",
      prize: "$8,000",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  // Winning projects showcase
  const winningProjects = [
    {
      name: "AI Health Assistant",
      description: "An AI-powered healthcare solution that helps doctors diagnose diseases",
      team: "MedTech Innovators",
      prize: "1st Place",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      name: "Blockchain Voting System",
      description: "A secure and transparent voting system using blockchain technology",
      team: "CryptoVote",
      prize: "2nd Place",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  // Hackathon guides and resources
  const hackathonGuides = [
    {
      title: "Getting Started",
      description: "Essential tips for your first hackathon",
      icon: <Lightbulb className="w-6 h-6" />,
    },
    {
      title: "Team Formation",
      description: "How to build the perfect hackathon team",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Project Planning",
      description: "Strategies for successful project execution",
      icon: <Target className="w-6 h-6" />,
    },
  ];

  // Auto-rotate events
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % hackathonEvents.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">
              Hackathon Hub
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Join exciting hackathons, showcase your skills, and win amazing prizes
          </motion.p>
        </div>

        {/* Content Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700 p-1">
            {["events", "guides", "winners"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-[#8B5CF6] dark:hover:text-[#8B5CF6]"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
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
          {activeTab === "events" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hackathonEvents.map((event, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700 hover:border-[#8B5CF6] transition-all"
                >
                  <div className="relative h-48">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {event.name}
                      </h3>
                      <p className="text-sm text-white/80">{event.organization}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {event.description}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="text-[#8B5CF6] font-medium">
                        Prize: {event.prize}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "guides" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {hackathonGuides.map((guide, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:border-[#8B5CF6] transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center mb-4">
                    {guide.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {guide.description}
                  </p>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === "winners" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {winningProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700 hover:border-[#8B5CF6] transition-all"
                >
                  <div className="relative h-64">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#8B5CF6] text-white text-sm mb-2">
                        {project.prize}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {project.name}
                      </h3>
                      <p className="text-sm text-white/80">by {project.team}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HackathonSection; 