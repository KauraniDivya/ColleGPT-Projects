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
      setActiveCategory((prev) => (prev + 1) % materialCategories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Material categories for GATE CS & DA
  const materialCategories = [
    {
      title: "Core Computer Science",
      icon: Brain,
      description: "Fundamental CS concepts for GATE preparation",
      color: "from-green-500 to-emerald-400",
      subjects: ["Data Structures", "Algorithms", "Programming", "Discrete Mathematics"],
      stats: { notes: "450+", pyqs: "1200+", rating: "4.9" }
    },
    {
      title: "Systems & Networks",
      icon: Target,
      description: "Operating Systems, Computer Networks, and Database Systems",
      color: "from-blue-500 to-cyan-400",
      subjects: ["Operating Systems", "Computer Networks", "Database Systems", "Computer Organization"],
      stats: { notes: "380+", pyqs: "980+", rating: "4.8" }
    },
    {
      title: "Theory & Mathematics",
      icon: FileText,
      description: "Theory of Computation, Compiler Design, and Engineering Mathematics",
      color: "from-purple-500 to-pink-500",
      subjects: ["Theory of Computation", "Compiler Design", "Engineering Mathematics", "Linear Algebra"],
      stats: { notes: "320+", pyqs: "750+", rating: "4.7" }
    },
    {
      title: "Data Science & AI",
      icon: TrendingUp,
      description: "Machine Learning, Data Analytics, and AI fundamentals",
      color: "from-orange-500 to-red-500",
      subjects: ["Machine Learning", "Data Analytics", "Statistics", "Python Programming"],
      stats: { notes: "280+", pyqs: "450+", rating: "4.8" }
    },
  ];

  // Study materials with download stats
  const studyMaterials = [
    {
      title: "GATE CS Complete Notes 2026",
      type: "Comprehensive Study Package",
      subjects: 10,
      pages: 850,
      rating: 4.9,
      downloads: "25K+",
      premium: true,
      lastUpdated: "Jan 2025"
    },
    {
      title: "Previous Year Questions (2000-2025)",
      type: "Question Bank with Solutions",
      subjects: 10,
      pages: 650,
      rating: 4.8,
      downloads: "35K+",
      premium: false,
      lastUpdated: "Dec 2024"
    },
    {
      title: "Data Science for GATE DA",
      type: "Specialized DA Preparation",
      subjects: 8,
      pages: 480,
      rating: 4.7,
      downloads: "15K+",
      premium: true,
      lastUpdated: "Jan 2025"
    },
    {
      title: "Short Notes & Formulas",
      type: "Quick Revision Material",
      subjects: 10,
      pages: 120,
      rating: 4.9,
      downloads: "40K+",
      premium: false,
      lastUpdated: "Jan 2025"
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
          <div className="w-full h-full bg-[linear-gradient(transparent_9px,#22c55e_1px),linear-gradient(90deg,transparent_9px,#22c55e_1px)] bg-[length:100px_100px]"></div>
        </div>
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-green-500/10 to-transparent blur-[80px]"></div>
        <div className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-emerald-500/10 to-transparent blur-[100px]"></div>
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
              Comprehensive Study Resources
            </span>
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-slate-900 dark:from-white to-slate-600 dark:to-slate-300 bg-clip-text text-transparent relative z-10">
              Study
            </span>
            <span className="text-green-600 dark:text-green-400"> Materials</span>
            <motion.span
              className="absolute -z-10 inset-0 text-green-600/5 dark:text-green-400/10 blur-lg"
              animate={{ opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Study Materials
            </motion.span>
          </h2>

          <motion.p
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Expertly curated study materials covering the complete GATE CS & DA syllabus. 
            From fundamental concepts to advanced topics with comprehensive PYQ analysis.
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
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Organized by
                <span className="block text-green-600 dark:text-green-400">
                  Subject Categories
                </span>
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Navigate through our systematically organized study materials designed 
                specifically for GATE CS and DA preparation.
              </p>
            </motion.div>

            {/* Category Cards */}
            <motion.div variants={containerVariants} className="space-y-4">
              {materialCategories.map((category, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`p-5 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeCategory === idx
                      ? "bg-white dark:bg-slate-800/80 shadow-lg border border-green-200/50 dark:border-green-700/30"
                      : "bg-transparent hover:bg-white/50 dark:hover:bg-slate-800/50"
                  }`}
                  onClick={() => setActiveCategory(idx)}
                >
                  <div className="flex items-start">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4 shadow-lg`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl text-slate-900 dark:text-white mb-2">
                        {category.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                        {category.description}
                      </p>
                      
                      {/* Subject tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {category.subjects.slice(0, 2).map((subject, i) => (
                          <span 
                            key={i}
                            className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-md"
                          >
                            {subject}
                          </span>
                        ))}
                        {category.subjects.length > 2 && (
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs rounded-md">
                            +{category.subjects.length - 2} more
                          </span>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="flex gap-4 text-xs text-slate-500 dark:text-slate-400">
                        <span>{category.stats.notes} Notes</span>
                        <span>{category.stats.pyqs} PYQs</span>
                        <span className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-500 mr-1" />
                          {category.stats.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Summary */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 mt-8"
            >
              {[
                { value: "1400+", label: "Study Notes" },
                { value: "3500+", label: "PYQ Solutions" },
                { value: "95%", label: "Success Rate" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-xl p-4 bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm border border-white/10 dark:border-slate-700/20 shadow-sm text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side: Materials Preview */}
          <motion.div
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Materials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {studyMaterials.map((material, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="relative">
                    {/* Top accent line */}
                    <div className="h-1.5 bg-gradient-to-r from-green-600 to-emerald-500"></div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                          {material.title}
                        </h3>
                        {material.premium && (
                          <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium rounded-md flex items-center">
                            <Award className="w-3 h-3 mr-1" />
                            Premium
                          </span>
                        )}
                      </div>

                      <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
                        <FileText className="w-4 h-4 mr-2" />
                        <span>{material.type}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="text-slate-500 dark:text-slate-400">Subjects:</span>
                          <span className="text-slate-700 dark:text-slate-300 font-medium ml-1">
                            {material.subjects}
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-500 dark:text-slate-400">Pages:</span>
                          <span className="text-slate-700 dark:text-slate-300 font-medium ml-1">
                            {material.pages}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-4 h-4 ${
                                star <= Math.floor(material.rating)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-slate-300 dark:text-slate-600"
                              }`}
                            />
                          ))}
                          <span className="text-sm font-medium text-slate-600 dark:text-slate-300 ml-2">
                            {material.rating}
                          </span>
                        </div>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {material.downloads} downloads
                        </span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          Updated: {material.lastUpdated}
                        </span>
                        <button className="flex items-center text-sm font-medium text-green-600 dark:text-green-400 hover:underline">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Featured Material */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-0.5 shadow-lg"
            >
              <div className="bg-white/95 dark:bg-slate-800/95 rounded-[calc(0.75rem-1px)] p-6 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="rounded-lg bg-green-50 dark:bg-slate-700 p-4">
                    <BookOpen className="w-12 h-12 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-bold text-slate-900 dark:text-white text-xl mb-2">
                      Complete GATE 2026 Study Package
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                      All-in-one study material including notes, PYQs, mock tests, and 
                      progress tracking tools for comprehensive GATE preparation.
                    </p>
                    <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-lg text-white font-medium rounded-lg inline-flex items-center transition-all">
                      Explore Complete Package
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
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