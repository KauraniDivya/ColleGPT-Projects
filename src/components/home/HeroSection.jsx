import React, { forwardRef, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target,
  BookOpen,
  TrendingUp,
  Users,
  Calendar,
  ArrowRight,
  CheckCircle,
  Award,
  Brain,
  Clock,
  Star,
  Code,
  Trophy,
  Zap,
} from "lucide-react";

const HeroSection = forwardRef(({ materialsRef }, ref) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const [isRobotLoaded, setIsRobotLoaded] = useState(false);
  const heroRef = useRef(null);

  // Handle mouse movement
  const handleMouseMove = (e) => {
    if (heroRef.current) {
      const bounds = heroRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - bounds.left,
        y: e.clientY - bounds.top,
      });
    }
  };

  // Handle intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref?.current || heroRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  // Auto-rotate stats
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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

  // Stats with hackathon-focused data
  const stats = [
    {
      value: "150+",
      label: "Active Hackathons",
      icon: <Trophy className="w-5 h-5 text-[#8B5CF6]" />,
      description: "Live events & competitions",
    },
    {
      value: "25K+",
      label: "Developers",
      icon: <Users className="w-5 h-5 text-[#8B5CF6]" />,
      description: "Global community members",
    },
    {
      value: "$2M+",
      label: "Prize Pool",
      icon: <Award className="w-5 h-5 text-[#8B5CF6]" />,
      description: "Total rewards distributed",
    },
    {
      value: "98%",
      label: "Success Rate",
      icon: <Target className="w-5 h-5 text-[#8B5CF6]" />,
      description: "Project completion rate",
    },
  ];

  // Key features for hackathon platform
  const features = [
    {
      icon: <Calendar className="w-4 h-4" />,
      text: "Track upcoming hackathons and deadlines",
      color: "text-[#8B5CF6]"
    },
    {
      icon: <Code className="w-4 h-4" />,
      text: "Access development resources and templates",
      color: "text-[#A78BFA]"
    },
    {
      icon: <Users className="w-4 h-4" />,
      text: "Connect with teams and find collaborators",
      color: "text-[#8B5CF6]"
    },
  ];

  return (
    <section
      id="hero"
      ref={(node) => {
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
        heroRef.current = node;
      }}
      className="relative min-h-screen flex items-center py-16 md:py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
      onMouseMove={handleMouseMove}
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#8B5CF6]/10 to-[#A78BFA]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[#A78BFA]/10 to-[#8B5CF6]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <svg
          className="w-full h-full opacity-[0.03] dark:opacity-[0.05]"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 800 800"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(139,92,246,0.3)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Dynamic cursor light effect */}
      <div
        className="absolute inset-0 pointer-events-none -z-5"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139,92,246,0.1) 0%, transparent 60%)`,
        }}
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Column: Hero Text & Buttons */}
          <motion.div
            className="lg:w-7/12 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Innovation Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center rounded-full px-4 py-2 mb-6 text-sm bg-gradient-to-r from-[#8B5CF6]/10 to-[#A78BFA]/10 dark:from-[#8B5CF6]/20 dark:to-[#A78BFA]/20 backdrop-blur-sm border border-[#8B5CF6]/20 dark:border-[#8B5CF6]/30"
            >
              <Zap className="w-4 h-4 mr-2 text-[#8B5CF6]" />
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent font-semibold">
                Innovation Hub 2025
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="block mb-2">
                <span className="relative">
                  <span className="absolute -inset-2 blur-2xl bg-gradient-to-r from-[#8B5CF6]/20 to-[#A78BFA]/20 opacity-70 rounded-lg"></span>
                  <span className="relative text-slate-900 dark:text-white">
                    Build.
                  </span>
                </span>
                {" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">
                  Innovate.
                </span>
              </span>
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-slate-600 dark:text-slate-300 mt-4">
                Win Amazing Prizes
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed"
            >
              Join the ultimate platform for hackathon enthusiasts. Participate in
              exciting challenges, showcase your innovative projects, and compete for amazing prizes.
            </motion.p>

            {/* Key Features */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm border border-white/20 dark:border-slate-700/20 hover:border-[#8B5CF6]/30 transition-all"
                >
                  <span className={feature.color}>
                    {feature.icon}
                  </span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {feature.text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] hover:from-[#7C3AED] hover:to-[#8B5CF6] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#8B5CF6]/25 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                <Trophy className="w-5 h-5" />
                Find Hackathons
              </button>
              <button className="px-8 py-4 bg-white/10 dark:bg-slate-800/50 text-slate-900 dark:text-white font-semibold rounded-xl border border-white/20 dark:border-slate-700/20 hover:bg-white/20 dark:hover:bg-slate-800/70 backdrop-blur-sm transition-all flex items-center justify-center gap-2">
                <Code className="w-5 h-5" />
                Explore Resources
              </button>
            </motion.div>

            {/* Stats Grid - Enhanced Responsiveness */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/60 dark:bg-slate-800/40 backdrop-blur-xl rounded-2xl p-4 lg:p-6 border border-white/30 dark:border-slate-700/30 hover:border-[#8B5CF6]/30 transition-all hover:transform hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#8B5CF6]/10 to-[#A78BFA]/10 flex items-center justify-center">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Robot - Enhanced Responsiveness */}
          <motion.div
            className="lg:w-5/12 w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full max-w-md lg:max-w-lg mx-auto aspect-square">
              {/* Loading state */}
              {!isRobotLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-t-2 border-b-2 border-[#8B5CF6] animate-spin mb-4"></div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm text-center">
                    Loading interactive companion...
                  </p>
                </div>
              )}

              {/* Robot animation */}
              <div
                className={`w-full h-full transition-opacity duration-700 ${
                  isRobotLoaded ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* Custom iframe wrapper to handle the Spline watermark */}
                <div className="relative w-full h-full">
                  <iframe
                    src="https://my.spline.design/robotfollowcursorforlandingpage-T77lkoiVqe2I4yDJDtZyuILC/"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    title="Interactive AI Companion"
                    onLoad={() => setIsRobotLoaded(true)}
                    className="absolute inset-0 w-full h-full"
                    style={{ zIndex: 1 }}
                  ></iframe>
                  
                  {/* Enhanced overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-900/90 to-transparent z-10 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent animate-pulse">
                        HACK
                      </span>
                      <span className="text-sm md:text-base ml-2 text-slate-300 font-light">
                        AI Innovation Companion
                      </span>
                      <div className="flex justify-center mt-1">
                        {[...Array(3)].map((_, i) => (
                          <motion.span
                            key={i}
                            className="w-1.5 h-1.5 bg-[#8B5CF6] rounded-full mx-0.5"
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity, 
                              delay: i * 0.2 
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.5, 1, 0.5],
          y: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={() =>
          materialsRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <div className="w-6 h-12 rounded-full border-2 border-[#8B5CF6]/30 dark:border-[#A78BFA]/30 flex justify-center p-1.5 bg-white/10 dark:bg-slate-800/10 backdrop-blur-sm">
          <motion.div
            className="w-1.5 h-3 bg-gradient-to-b from-[#8B5CF6] to-[#A78BFA] rounded-full"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <span className="text-xs text-slate-500 dark:text-slate-400 mt-3 font-medium">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
});

export default HeroSection;