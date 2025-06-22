// Replace the entire ProjectSection with amber theme and real data:

import React, { forwardRef, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
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
  GitBranch,
  Folder,
  Star,
  PlayCircle,
  PauseCircle,
  Plus,
  Filter,
  Github,
  ExternalLink,
  Download,
  Lightbulb,
} from "lucide-react";

const ProjectSection = forwardRef((props, ref) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("showcase");
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

  // Project tabs
  const projectTabs = [
    { id: "showcase", name: "Showcase", fullName: "Project Showcase", icon: Star },
    { id: "templates", name: "Templates", fullName: "Code Templates", icon: Code },
    { id: "resources", name: "Resources", fullName: "Learning Resources", icon: BookOpen },
  ];

  // Updated Featured projects with real data
  const featuredProjects = [
    {
      title: "Saarthi",
      description: "Alumni Engagement Platform that bridges the gap between students and alumni through mentorship, networking, and career opportunities",
      image: "https://i.ibb.co/d4d4pkF6/image.png",
      tags: ["React.js", "Node.js", "MongoDB", "Socket.io"],
      stars: 125,
      demo: "https://saarthi-alumni.vercel.app",
      github: "https://github.com/mayankyadav1711/Saarthi-Alumni-Platform"
    },
    {
      title: "Unite-Bharat", 
      description: "SIH Finalist project - Dynamic project repository platform showcasing innovations from across India",
      image: "https://i.ibb.co/wFjMJc1M/image.png",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
      stars: 89,
      demo: "https://unite-bharat.vercel.app/",
      github: "https://github.com/mayankyadav1711/Unite-Bharat"
    },
    {
      title: "Nivesh AI",
      description: "Smart digital assistant for retail investors offering real-time stock market insights and personalized investment guidance",
      image: "https://i.ibb.co/35qBmfSp/image.png", 
      tags: ["React.js", "AI APIs", "Financial APIs", "Chart.js"],
      stars: 67,
      demo: "https://niveshai.vercel.app/",
      github: "https://github.com/mayankyadav1711/Nivesh-AI"
    },
  ];

  // Updated Code templates with real project-based templates
  const codeTemplates = [
    {
      title: "Alumni Platform Starter",
      description: "Complete MERN stack boilerplate with authentication, messaging, and mentorship matching features",
      downloads: "2.5K",
      category: "Full-Stack",
      lastUpdated: "2 days ago"
    },
    {
      title: "Innovation Repository Kit",
      description: "Project showcase platform with real-time uploads, search functionality, and collaboration features", 
      downloads: "1.8K",
      category: "Frontend",
      lastUpdated: "1 week ago"
    },
    {
      title: "AI Financial Assistant Template",
      description: "Financial AI chatbot template with market data integration and portfolio analysis",
      downloads: "1.2K", 
      category: "AI/ML",
      lastUpdated: "3 days ago"
    },
    {
      title: "Educational Platform Base",
      description: "Educational platform foundation with user management, course structure, and progress tracking",
      downloads: "3.1K",
      category: "Full-Stack", 
      lastUpdated: "5 days ago"
    },
  ];

  // Updated Learning resources based on real projects
  const learningResources = [
    {
      title: "Building Alumni Platforms",
      type: "Tutorial Series",
      lessons: 18,
      duration: "5 hours",
      difficulty: "Intermediate",
      rating: 4.8
    },
    {
      title: "AI Integration in Web Apps",
      type: "Course",
      lessons: 15,
      duration: "6 hours", 
      difficulty: "Advanced",
      rating: 4.9
    },
    {
      title: "Real-time Features with Socket.io",
      type: "Workshop",
      lessons: 10,
      duration: "3 hours",
      difficulty: "Intermediate", 
      rating: 4.7
    },
  ];

  // Render tab content
  const renderTabContent = () => {
    switch (activeTab) {
      case "showcase":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 dark:border-slate-700/20 shadow-lg hover:shadow-xl hover:border-[#D97706]/30 transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-800/90 px-2 py-1 rounded-full flex items-center">
                    <Star className="w-3 h-3 text-[#D97706] mr-1" />
                    <span className="text-xs font-medium">{project.stars}</span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-[#D97706] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-[#D97706]/10 text-[#D97706] text-xs rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-[#D97706] transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-[#D97706] text-white text-sm rounded-lg hover:bg-[#F59E0B] transition-colors flex items-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case "templates":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {codeTemplates.map((template, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-slate-700/20 hover:border-[#D97706]/30 transition-all"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    {template.title}
                  </h3>
                  <span className="px-2 py-1 bg-[#D97706]/10 text-[#D97706] text-xs rounded-md">
                    {template.category}
                  </span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {template.description}
                </p>
                
                <div className="flex justify-between items-center mb-4 text-sm text-slate-500 dark:text-slate-400">
                  <div className="flex items-center">
                    <Download className="w-4 h-4 mr-1" />
                    {template.downloads} downloads
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {template.lastUpdated}
                  </div>
                </div>
                
                <button className="w-full px-4 py-2 bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2" />
                  Get Template
                </button>
              </motion.div>
            ))}
          </div>
        );

      case "resources":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningResources.map((resource, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-slate-700/20 hover:border-[#D97706]/30 transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#D97706]/10 flex items-center justify-center mr-3">
                    <BookOpen className="w-5 h-5 text-[#D97706]" />
                  </div>
                  <span className="px-2 py-1 bg-[#F59E0B]/10 text-[#F59E0B] text-xs rounded-md">
                    {resource.type}
                  </span>
                </div>
                
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                  {resource.title}
                </h3>
                
                <div className="space-y-2 mb-4 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex justify-between">
                    <span>Lessons:</span>
                    <span>{resource.lessons}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>{resource.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Level:</span>
                    <span>{resource.difficulty}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-[#D97706] mr-1" />
                    <span className="text-sm font-medium">{resource.rating}</span>
                  </div>
                  <button className="px-4 py-2 bg-[#D97706] text-white text-sm rounded-lg hover:bg-[#F59E0B] transition-colors">
                    Start Learning
                  </button>
                </div>
              </motion.div>
            ))}
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
      id="projects"
      className="relative min-h-screen py-12 sm:py-16 md:py-20 bg-slate-50 dark:bg-[#0C0C20] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="w-full h-full bg-[linear-gradient(transparent_9px,#D97706_1px),linear-gradient(90deg,transparent_9px,#D97706_1px)] bg-[length:50px_50px] sm:bg-[length:75px_75px] md:bg-[length:100px_100px]"></div>
        </div>
        <div className="absolute top-[10%] sm:top-[20%] left-[5%] sm:left-[10%] w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] rounded-full bg-gradient-to-br from-[#D97706]/10 to-transparent blur-[40px] sm:blur-[60px] md:blur-[80px]"></div>
        <div className="absolute bottom-[5%] sm:bottom-[10%] right-[5%] sm:right-[15%] w-[250px] sm:w-[400px] md:w-[500px] h-[250px] sm:h-[400px] md:h-[500px] rounded-full bg-gradient-to-br from-[#F59E0B]/10 to-transparent blur-[60px] sm:blur-[80px] md:blur-[100px]"></div>
      </div>

      {/* Dynamic cursor light effect */}
      <div
        className="absolute inset-0 -z-5 overflow-hidden hidden sm:block"
        style={{
          background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(217,119,6,0.07), transparent 80%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-12 sm:mb-16 text-center"
        >
          <span className="inline-flex items-center rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm border border-white/10 dark:border-slate-700/20 mb-4 sm:mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-[#D97706] mr-2 animate-pulse"></span>
            <span className="bg-gradient-to-r from-slate-700 dark:from-slate-100 to-slate-500 dark:to-slate-300 bg-clip-text text-transparent font-medium">
             <span className="inline-flex items-center rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm border border-white/10 dark:border-slate-700/20 mb-4 sm:mb-6">
               Creative Project Hub
            </span>
          </span>
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 relative">
            <span className="bg-gradient-to-r from-slate-900 dark:from-white to-slate-600 dark:to-slate-300 bg-clip-text text-transparent relative z-10">
              Project 
            </span>
            <span className="text-[#D97706] dark:text-[#F59E0B]"> Gallery</span>
            <motion.span
              className="absolute -z-10 inset-0 text-[#D97706]/5 dark:text-[#F59E0B]/10 blur-lg"
              animate={{ opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Project Gallery
            </motion.span>
          </h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover real-world projects, download code templates, and accelerate your development with our curated resources from successful student innovations.
          </motion.p>
        </motion.div>

        {/* Project Tabs */}
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-12">
          <div className="inline-flex rounded-lg bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700 p-1">
            {projectTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-2 rounded-md text-sm font-medium transition-all flex items-center ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-[#D97706] dark:hover:text-[#F59E0B]"
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
          transition={{ duration: 0.3 }}
        >
          {renderTabContent()}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Button container */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/projects">
              <motion.button
                className="group px-8 py-4 rounded-lg overflow-hidden bg-gradient-to-r from-[#D97706] to-[#F59E0B] relative"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated light effect */}
                <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 skew-x-[45deg] transform -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                </div>

                <span className="relative z-10 text-white font-medium text-lg flex items-center">
                  Explore All Projects & Templates
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>

            {/* GitHub themed Contribute button */}
            <a href="https://github.com/mayankyadav1711/ColleGPT-Projects" target="_blank" rel="noopener noreferrer">
              <motion.button
                className="group px-6 py-3 bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 border border-slate-700 dark:border-slate-600 rounded-lg overflow-hidden relative shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* GitHub button hover effect */}
                <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 skew-x-[45deg] transform -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700"></div>
                </div>

                <span className="relative z-10 text-white font-medium flex items-center">
                  <Github className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Contribute to Projects
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </a>
          </div>
          
          <p className="mt-4 text-slate-500 dark:text-slate-400">
            Join our community of innovative student developers
          </p>
        </motion.div>
      </div>
    </section>
  );
});

export default ProjectSection;