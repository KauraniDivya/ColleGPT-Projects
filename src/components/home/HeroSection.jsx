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
      value: "100+",
      label: "Hackathons",
      icon: <Target className="w-4 h-4 text-[#8B5CF6]" />,
      description: "Regular events throughout the year",
    },
    {
      value: "10,000+",
      label: "Participants",
      icon: <Users className="w-4 h-4 text-[#8B5CF6]" />,
      description: "Active community members",
    },
  ];

  // Key features for hackathon platform
  const features = [
    {
      icon: <Calendar className="w-5 h-5" />,
      text: "Stay updated with the latest hackathon events and deadlines",
    },
    {
      icon: <Target className="w-5 h-5" />,
      text: "Monitor your participation and achievements in real-time",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: "Compete and climb the ranks in our global leaderboard",
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
                stroke="rgba(139,92,246,0.07)"
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
              <stop offset="0%" stopColor="rgba(139,92,246,0.03)" />
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
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139,92,246,0.15) 0%, transparent 50%)`,
        }}
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Column: Hero Text & Buttons */}
          <motion.div
            className="lg:w-7/12 lg:pr-8 text-center lg:text-left"
            variants={containerVariants}
          >
            {/* Hackathon Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center rounded-full px-4 py-1.5 mb-6 text-sm bg-gradient-to-r from-[#8B5CF6]/10 to-[#A78BFA]/10 dark:from-[#8B5CF6]/20 dark:to-[#A78BFA]/20 backdrop-blur-sm border border-[#8B5CF6]/30 dark:border-[#8B5CF6]/20"
            >
              <Target className="w-4 h-4 mr-2 text-[#8B5CF6]" />
              <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent font-medium">
                Innovation Hub
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-inter relative"
            >
              <span className="block mb-2 tracking-tight">
                <span className="relative">
                  <span className="absolute -inset-1 blur-2xl bg-gradient-to-r from-[#8B5CF6]/20 to-[#A78BFA]/20 opacity-70 rounded-lg"></span>
                  <span className="relative text-slate-900 dark:text-white">
                    Build.
                  </span>
                </span>
                <span className="text-[#8B5CF6] dark:text-[#A78BFA]">
                  {" "}
                  Innovate.
                </span>
              </span>
              <span className="block text-xl md:text-2xl lg:text-3xl font-light text-slate-600 dark:text-slate-300 mt-4">
                Win Amazing Prizes
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="max-w-2xl mx-auto lg:mx-0 text-lg md:text-xl text-slate-600 dark:text-slate-400 my-8 leading-relaxed"
            >
              Join the ultimate platform for hackathon enthusiasts. Participate in
              exciting challenges, showcase your skills, and win amazing prizes.
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
                  <span className="text-[#8B5CF6] dark:text-[#A78BFA]">
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
              <button className="px-8 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white font-medium rounded-lg hover:shadow-lg transition-all">
                Find Hackathons
              </button>
              <button className="px-8 py-3 bg-white/10 text-white font-medium rounded-lg border border-white/10 hover:bg-white/20 transition-all">
                Learn More
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-300">
                        {stat.label}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {stat.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Robot */}
          <motion.div
            className="lg:w-5/12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto pt-4">
              {/* Loading state */}
              {!isRobotLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-t-2 border-b-2 border-[#8B5CF6] animate-spin mb-4"></div>
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
                    src="https://my.spline.design/robotfollowcursorforlandingpage-T77lkoiVqe2I4yDJDtZyuILC/"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    title="Interactive Robot"
                    onLoad={() => setIsRobotLoaded(true)}
                    className="absolute inset-0 w-full h-full"
                    style={{ zIndex: 1 }}
                  ></iframe>
                  
                  {/* Overlay to hide watermark with stylish text */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#070D19] z-2 flex items-center justify-center" style={{ zIndex: 2 }}>
                    <span className="text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent animate-pulse">
                      HACK
                    </span>
                    <span className="text-lg ml-2 text-slate-400 font-light">
                      your AI innovation companion
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
          </motion.div>
        </div>
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
            className="w-1 h-2 bg-[#8B5CF6]/70 rounded-full"
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
