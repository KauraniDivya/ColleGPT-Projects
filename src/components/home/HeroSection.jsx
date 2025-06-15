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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
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

  // Stats with GATE-focused data
  const stats = [
    {
      value: "150+",
      label: "Study Hours",
      icon: <Clock className="w-4 h-4 text-green-500" />,
      description: "Structured content for complete preparation",
    },
    {
      value: "50+",
      label: "Mock Tests",
      icon: <Target className="w-4 h-4 text-green-500" />,
      description: "Full-length tests with performance analytics",
    },
  ];

  // Key features for GATE preparation
  const features = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      text: "Comprehensive study materials for CS & DA",
    },
    {
      icon: <Target className="w-5 h-5" />,
      text: "Previous year questions with solutions",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: "Progress tracking & performance analytics",
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
      className="relative min-h-[90vh] flex items-center py-16 md:py-4 overflow-hidden mt-4 md:mt-4"
      onMouseMove={handleMouseMove}
    >
      {/* Premium Grid Background */}
      <div className="absolute inset-0 -z-10">
        <svg
          className="w-full h-full opacity-8 dark:opacity-15"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 800 800"
          preserveAspectRatio="none"
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
                stroke="rgba(34,197,94,0.07)"
                strokeWidth="0.5"
              />
            </pattern>
            <radialGradient
              id="spotlight"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="0%" stopColor="rgba(34,197,94,0.03)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>
          </defs>

          <g transform="scale(1, 0.5) rotate(-30) translate(100, 100)">
            <rect
              width="2000"
              height="2000"
              fill="url(#grid)"
              transform="translate(-500, -500)"
            />
          </g>

          <rect width="100%" height="100%" fill="url(#grid)" opacity="0.5" />
        </svg>
      </div>

      {/* Dynamic cursor light effect */}
      <div
        className="absolute inset-0 -z-5 overflow-hidden"
        style={{
          background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(34,197,94,0.08), transparent 80%)`,
        }}
      />

      {/* Ambient gradients */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-green-500/5 to-green-500/0 blur-[120px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-emerald-500/5 to-emerald-500/0 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 z-10">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column: Hero Text & Buttons */}
            <motion.div
              className="lg:w-7/12 lg:pr-8 text-center lg:text-left"
              variants={containerVariants}
            >
              {/* GATE 2026 Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center rounded-full px-4 py-1.5 mb-6 text-sm bg-gradient-to-r from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20 backdrop-blur-sm border border-green-200/30 dark:border-green-700/20"
              >
                <Target className="w-4 h-4 mr-2 text-green-600 dark:text-green-400" />
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent font-medium">
                  GATE 2026 Preparation Hub
                </span>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-bold font-inter relative"
              >
                <span className="block mb-2 tracking-tight">
                  <span className="relative">
                    <span className="absolute -inset-1 blur-2xl bg-gradient-to-r from-green-600/20 to-emerald-400/20 opacity-70 rounded-lg"></span>
                    <span className="relative text-slate-900 dark:text-white">
                      Master
                    </span>
                  </span>
                  <span className="text-green-600 dark:text-green-400">
                    {" "}
                    GATE
                  </span>
                </span>
                <span className="block text-xl md:text-2xl lg:text-3xl font-light text-slate-600 dark:text-slate-300 mt-4">
                  Computer Science & Data Science
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-slate-600 dark:text-slate-400 my-8 leading-relaxed"
              >
                Your complete preparation platform for GATE CS & DA
                examinations. Study with expertly crafted materials, track
                progress, and join thousands of successful candidates.
              </motion.p>

              {/* Key Features */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm border border-white/10 dark:border-slate-700/20"
                  >
                    <span className="text-green-600 dark:text-green-400">
                      {feature.icon}
                    </span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12"
              >
                <motion.button
                  className="relative group px-8 py-4 rounded-lg overflow-hidden bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    materialsRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 skew-x-[45deg] transform -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>

                  <span className="relative z-10 text-white font-medium flex items-center">
                    Start Preparation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </span>
                </motion.button>

                <motion.button
                  className="relative group px-8 py-4 rounded-lg overflow-hidden bg-white/10 dark:bg-slate-800/20 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20 hover:bg-white/20 dark:hover:bg-slate-800/30 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 text-slate-700 dark:text-slate-300 font-medium flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Exam Schedule
                  </span>
                </motion.button>
              </motion.div>

              {/* Animated Stats */}
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-4"
              >
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="group relative"
                  >
                    <div className="relative bg-gradient-to-br from-white/5 to-white/10 dark:from-slate-800/40 dark:to-slate-800/20 backdrop-blur-md rounded-xl border border-white/10 dark:border-slate-700/20 overflow-hidden p-4 md:p-6 hover:shadow-lg transition-all">
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-green-500/5 to-emerald-500/5"
                        animate={{
                          opacity: currentStat === idx ? [0, 0.2, 0] : 0,
                          scale: currentStat === idx ? [1, 1.05, 1] : 1,
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />

                      <div className="flex items-center justify-center mb-2">
                        {stat.icon}
                        <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-700 dark:from-white to-slate-500 dark:to-slate-300 bg-clip-text text-transparent ml-2">
                          {stat.value}
                        </span>
                      </div>

                      <div className="text-sm md:text-base text-center text-slate-500 dark:text-slate-400 font-medium">
                        {stat.label}
                      </div>

                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                        {stat.description}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-slate-100"></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column: Robot Animation */}
            <motion.div
              className="hidden md:block lg:block lg:w-5/12 mt-12 lg:mt-0"
              variants={itemVariants}
            >
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto pt-4">
                {/* Loading state */}
                {!isRobotLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-t-2 border-b-2 border-green-500 animate-spin mb-4"></div>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      Loading interactive robot...
                    </p>
                  </div>
                )}

                {/* Robot animation using custom iframe with removed watermark */}
                <div
                  className={`w-full h-full transition-opacity duration-700 ${
                    isRobotLoaded ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {/* Custom iframe wrapper to handle the Spline watermark */}
                  <div className="relative w-full h-full">
                    <iframe
                      src="https://my.spline.design/robotfollowcursorforlandingpage-T77lkoiVqe2I4yDJDtZyuILC/"                      frameBorder="0"
                      width="100%"
                      height="100%"
                      title="Interactive Robot"
                      onLoad={() => setIsRobotLoaded(true)}
                      className="absolute inset-0 w-full h-full"
                      style={{ zIndex: 1 }}
                    ></iframe>
                    
                    {/* Overlay to hide watermark with stylish text */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#070D19] z-2 flex items-center justify-center" style={{ zIndex: 2 }}>
                      <div className="relative">
                        <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent animate-pulse">
                          GATE
                        </span>
                        <span className="text-lg ml-2 text-slate-400 font-light">
                          your AI learning companion
                        </span>
                        {/* Animated dots */}
                        <span className="inline-block text-slate-400">
                          <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            .
                          </motion.span>
                          <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                          >
                            .
                          </motion.span>
                          <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                          >
                            .
                          </motion.span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Fallback animation if Spline fails to load */}
                {!isRobotLoaded && (
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="aspect-[4/5] max-w-md mx-auto relative">
                      {/* Main graphic - circular layers */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* Rotating rings */}
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute border border-green-500/20 rounded-full"
                            style={{
                              width: `${80 - i * 15}%`,
                              height: `${80 - i * 15}%`,
                            }}
                            animate={{
                              rotate: 360,
                              borderColor: [
                                "rgba(34,197,94,0.2)",
                                "rgba(16,163,77,0.2)",
                                "rgba(34,197,94,0.2)",
                              ],
                            }}
                            transition={{
                              duration: 20 + i * 5,
                              ease: "linear",
                              repeat: Infinity,
                              borderColor: { duration: 3, repeat: Infinity },
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.5, 1, 0.5],
          y: [0, 5, 0],
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
        <div className="w-5 h-10 rounded-full border-2 border-slate-300/30 dark:border-slate-700/30 flex justify-center p-1">
          <motion.div
            className="w-1 h-2 bg-green-500/70 rounded-full"
            animate={{ y: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        <span className="text-xs text-slate-500 dark:text-slate-400 mt-2">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
});

export default HeroSection;
