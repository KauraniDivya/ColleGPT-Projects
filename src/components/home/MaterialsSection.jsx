import React, { useState, forwardRef, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  BookOpen,
  FileText,
  Clock,
  Download,
  CheckCircle,
  Star,
  ArrowRight,
  Target,
  Brain,
  TrendingUp,
  Award,
  Code,
  Database,
  Smartphone,
} from "lucide-react";

const MaterialsSection = forwardRef((props, ref) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  // Handle mouse movement for the glowing effect
  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const bounds = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - bounds.left,
        y: e.clientY - bounds.top,
      });
    }
  };

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
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
  }, [ref, controls]);

  // Auto-rotate through categories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % resourceCategories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Resource categories for hackathons
  const resourceCategories = [
    {
      title: "Frontend Development",
      icon: Brain,
      description: "Modern frontend frameworks and UI libraries",
      color: "from-green-500 to-emerald-400",
      subjects: ["React.js", "Vue.js", "Angular", "Tailwind CSS"],
      stats: { tools: "50+", tutorials: "200+", rating: "4.9" }
    },
    {
      title: "Backend & APIs",
      icon: Database,
      description: "Server-side development and API creation tools",
      color: "from-blue-500 to-cyan-400",
      subjects: ["Node.js", "Python Flask", "Express.js", "GraphQL"],
      stats: { tools: "40+", tutorials: "150+", rating: "4.8" }
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      description: "AI frameworks and machine learning libraries",
      color: "from-purple-500 to-pink-500",
      subjects: ["TensorFlow", "PyTorch", "OpenAI APIs", "Hugging Face"],
      stats: { tools: "35+", tutorials: "120+", rating: "4.7" }
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      description: "Cross-platform mobile app development tools",
      color: "from-orange-500 to-red-500",
      subjects: ["React Native", "Flutter", "Ionic", "Swift"],
      stats: { tools: "30+", tutorials: "80+", rating: "4.8" }
    },
  ];

  // Development resources with download stats
  const developmentResources = [
    {
      title: "Complete Frontend Toolkit 2025",
      type: "Development Package",
      subjects: 8,
      items: 150,
      rating: 4.9,
      downloads: "45K+",
      premium: true,
      lastUpdated: "June 2025"
    },
    {
      title: "AI & ML Implementation Guide",
      type: "Technical Documentation",
      subjects: 6,
      items: 200,
      rating: 4.8,
      downloads: "35K+",
      premium: false,
      lastUpdated: "May 2025"
    },
    {
      title: "Blockchain Development Starter Kit",
      type: "Code Templates & Tools",
      subjects: 5,
      items: 80,
      rating: 4.7,
      downloads: "25K+",
      premium: true,
      lastUpdated: "June 2025"
    },
    {
      title: "Hackathon Quick Reference",
      type: "Cheat Sheets & APIs",
      subjects: 12,
      items: 300,
      rating: 4.9,
      downloads: "60K+",
      premium: false,
      lastUpdated: "June 2025"
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
      id="materials"
      className="relative min-h-screen py-20 bg-slate-50 dark:bg-[#0C0C20] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="w-full h-full bg-[linear-gradient(transparent_9px,#8B5CF6_1px),linear-gradient(90deg,transparent_9px,#8B5CF6_1px)] bg-[length:100px_100px]"></div>
        </div>
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#8B5CF6]/10 to-transparent blur-[80px]"></div>
        <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#A78BFA]/10 to-transparent blur-[100px]"></div>
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
              Comprehensive Development Resources
            </span>
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-slate-900 dark:from-white to-slate-600 dark:to-slate-300 bg-clip-text text-transparent relative z-10">
              Developer 
            </span>
            <span className="text-[#8B5CF6] dark:text-[#A78BFA]"> Resources</span>
            <motion.span
              className="absolute -z-10 inset-0 text-[#8B5CF6]/5 dark:text-[#A78BFA]/10 blur-lg"
              animate={{ opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Developer Resources
            </motion.span>
          </h2>

          <motion.p
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive collection of development resources, tools, and learning materials to help you excel in hackathons.
          </motion.p>
        </motion.div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left Side: Categories */}
          <motion.div
            className="w-full lg:w-2/5"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <Code className="w-6 h-6 text-[#8B5CF6] mr-2" />
                  Tech Categories
                </h3>
                
                <div className="space-y-4">
                  {resourceCategories.map((category, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className={`flex items-center p-4 rounded-xl cursor-pointer transition-all ${
                        activeCategory === idx
                          ? "bg-[#8B5CF6]/10 border-[#8B5CF6]"
                          : "bg-slate-50 dark:bg-slate-700/30 border-transparent"
                      } border`}
                      onClick={() => setActiveCategory(idx)}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center mr-4`}>
                        <category.icon className="w-5 h-5 text-[#8B5CF6]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">
                          {category.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          {category.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Resources */}
          <motion.div
            className="w-full lg:w-3/5"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center">
                    <FileText className="w-6 h-6 text-[#8B5CF6] mr-2" />
                    {resourceCategories[activeCategory].title}
                  </h3>
                  <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                    <Clock className="w-4 h-4 mr-1" />
                    Last Updated: June 2025
                  </div>
                </div>

                <div className="space-y-4">
                  {developmentResources.map((resource, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="bg-slate-50 dark:bg-slate-700/30 rounded-xl p-4 border border-slate-200 dark:border-slate-600/30 hover:border-[#8B5CF6] transition-all"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                            {resource.title}
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            {resource.type}
                          </p>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-slate-600 dark:text-slate-400">
                              {resource.subjects} Technologies
                            </span>
                            <span className="text-slate-600 dark:text-slate-400">
                              {resource.items} Resources
                            </span>
                            <div className="flex items-center text-[#8B5CF6]">
                              <Star className="w-4 h-4 fill-current mr-1" />
                              {resource.rating}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="flex items-center text-sm text-slate-600 dark:text-slate-400 mb-2">
                            <Download className="w-4 h-4 mr-1" />
                            {resource.downloads}
                          </div>
                          <button className="px-4 py-2 bg-[#8B5CF6] text-white rounded-lg hover:bg-[#A78BFA] transition-colors flex items-center">
                            Access
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default MaterialsSection;