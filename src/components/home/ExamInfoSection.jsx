import React, { forwardRef, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Calendar,
  Clock,
  FileText,
  Users,
  Award,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Target,
  GraduationCap,
  TrendingUp,
  Building,
} from "lucide-react";

const ExamInfoSection = forwardRef((props, ref) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("schedule");
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

  // Exam info tabs
  const examTabs = [
    { id: "schedule", name: "Exam Schedule", icon: Calendar },
    { id: "pattern", name: "Exam Pattern", icon: FileText },
    { id: "syllabus", name: "Syllabus", icon: BookOpen },
    { id: "institutes", name: "Participating IITs", icon: Building },
  ];

  // GATE 2026 important dates
  const importantDates = [
    {
      event: "Online Application Opens",
      date: "Last week of August 2025",
      status: "upcoming",
      description:
        "GATE Online Application Processing System (GOAPS) website opens",
    },
    {
      event: "Application Deadline",
      date: "Last week of October 2025",
      status: "upcoming",
      description: "Last date for regular online registration/application",
    },
    {
      event: "Extended Registration",
      date: "2nd Week of October 2025",
      status: "upcoming",
      description: "Extended period for online registration with late fee",
    },
    {
      event: "Admit Card Release",
      date: "2nd Week of January 2026",
      status: "upcoming",
      description: "Availability of GATE Admit cards for download",
    },
    {
      event: "GATE 2026 Exam",
      date: "1st-2nd Week of February 2026",
      status: "exam",
      description: "GATE 2026 examination dates for CS and DA papers",
    },
    {
      event: "Results Declaration",
      date: "19th March 2026",
      status: "result",
      description: "Announcement of GATE 2026 Results on the website",
    },
    {
      event: "Score Card Download",
      date: "28th March 2026",
      status: "result",
      description: "Availability of GATE Score Card for download",
    },
  ];

  // Exam pattern for CS and DA
  const examPattern = {
    CS: {
      duration: "3 Hours",
      totalMarks: 100,
      sections: [
        { name: "General Aptitude", marks: 15, questions: "10" },
        { name: "Engineering Mathematics", marks: 13, questions: "7" },
        { name: "Computer Science & IT", marks: 72, questions: "48" },
      ],
      questionTypes: ["MCQ", "MSQ", "NAT"],
      negativeMarking: "Yes (for MCQ only)",
    },
    DA: {
      duration: "3 Hours",
      totalMarks: 100,
      sections: [
        { name: "General Aptitude", marks: 15, questions: "10" },
        { name: "Data Science & AI", marks: 85, questions: "55" },
      ],
      questionTypes: ["MCQ", "MSQ", "NAT"],
      negativeMarking: "Yes (for MCQ only)",
    },
  };

  // CS Syllabus topics
  const csSyllabus = [
    {
      section: "Engineering Mathematics",
      topics: [
        "Discrete Mathematics",
        "Linear Algebra",
        "Calculus",
        "Complex Variables",
        "Probability and Statistics",
      ],
    },
    {
      section: "Digital Logic",
      topics: [
        "Boolean algebra",
        "Combinational and sequential circuits",
        "Minimization",
        "Number representations",
      ],
    },
    {
      section: "Computer Organization and Architecture",
      topics: [
        "Machine instructions and addressing modes",
        "ALU, data-path and control unit",
        "Instruction pipelining",
        "Memory hierarchy",
      ],
    },
    {
      section: "Programming and Data Structures",
      topics: [
        "Programming in C",
        "Recursion",
        "Arrays, stacks, queues",
        "Trees, binary search trees, graphs",
      ],
    },
    {
      section: "Algorithms",
      topics: [
        "Searching and sorting",
        "Asymptotic complexity",
        "Greedy, dynamic programming",
        "Graph traversals, shortest paths",
      ],
    },
    {
      section: "Theory of Computation",
      topics: [
        "Regular expressions and finite automata",
        "Context-free grammars",
        "Turing machines",
        "Undecidability",
      ],
    },
  ];

  // Participating IITs data
  const participatingIITs = [
    {
      name: "IIT Roorkee",
      year: "2025",
      status: "current",
      location: "Roorkee, Uttarakhand",
      established: 1847,
    },
    {
      name: "IISc Bangalore",
      year: "2024",
      status: "previous",
      location: "Bangalore, Karnataka",
      established: 1909,
    },
    {
      name: "IIT Kanpur",
      year: "2023",
      status: "previous",
      location: "Kanpur, Uttar Pradesh",
      established: 1959,
    },
    {
      name: "IIT Kharagpur",
      year: "2022",
      status: "previous",
      location: "Kharagpur, West Bengal",
      established: 1951,
    },
    {
      name: "IIT Bombay",
      year: "2021",
      status: "previous",
      location: "Mumbai, Maharashtra",
      established: 1958,
    },
    {
      name: "IIT Delhi",
      year: "2020",
      status: "previous",
      location: "New Delhi, Delhi",
      established: 1961,
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
      case "schedule":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Timeline */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">
                  GATE 2026 Important Dates
                </h3>
                <div className="space-y-4">
                  {importantDates.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex items-start space-x-4 p-4 rounded-lg bg-white/50 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20"
                    >
                      <div className="flex-shrink-0">
                        {item.status === "upcoming" ? (
                          <Clock className="w-5 h-5 text-blue-500" />
                        ) : item.status === "exam" ? (
                          <AlertCircle className="w-5 h-5 text-orange-500" />
                        ) : (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900 dark:text-white">
                          {item.event}
                        </h4>
                        <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                          {item.date}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "pattern":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* CS Pattern */}
              <div className="bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-slate-700/20">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-green-600" />
                  Computer Science (CS)
                </h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500 dark:text-slate-400">
                        Duration:
                      </span>
                      <span className="text-slate-700 dark:text-slate-300 font-medium ml-2">
                        {examPattern.CS.duration}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400">
                        Total Marks:
                      </span>
                      <span className="text-slate-700 dark:text-slate-300 font-medium ml-2">
                        {examPattern.CS.totalMarks}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                      Sections:
                    </h4>
                    <div className="space-y-2">
                      {examPattern.CS.sections.map((section, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center text-sm"
                        >
                          <span className="text-slate-600 dark:text-slate-400">
                            {section.name}
                          </span>
                          <div className="flex gap-4">
                            <span className="text-slate-700 dark:text-slate-300">
                              {section.marks} marks
                            </span>
                            <span className="text-slate-500 dark:text-slate-400">
                              {section.questions} qs
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                      Question Types:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {examPattern.CS.questionTypes.map((type, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-md"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-sm">
                    <span className="text-slate-500 dark:text-slate-400">
                      Negative Marking:
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium ml-2">
                      {examPattern.CS.negativeMarking}
                    </span>
                  </div>
                </div>
              </div>

              {/* DA Pattern */}
              <div className="bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-slate-700/20">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                  Data Science & AI (DA)
                </h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500 dark:text-slate-400">
                        Duration:
                      </span>
                      <span className="text-slate-700 dark:text-slate-300 font-medium ml-2">
                        {examPattern.DA.duration}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400">
                        Total Marks:
                      </span>
                      <span className="text-slate-700 dark:text-slate-300 font-medium ml-2">
                        {examPattern.DA.totalMarks}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                      Sections:
                    </h4>
                    <div className="space-y-2">
                      {examPattern.DA.sections.map((section, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center text-sm"
                        >
                          <span className="text-slate-600 dark:text-slate-400">
                            {section.name}
                          </span>
                          <div className="flex gap-4">
                            <span className="text-slate-700 dark:text-slate-300">
                              {section.marks} marks
                            </span>
                            <span className="text-slate-500 dark:text-slate-400">
                              {section.questions} qs
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2">
                      Question Types:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {examPattern.DA.questionTypes.map((type, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-md"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-sm">
                    <span className="text-slate-500 dark:text-slate-400">
                      Negative Marking:
                    </span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium ml-2">
                      {examPattern.DA.negativeMarking}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200/30 dark:border-green-700/30">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                New Changes in GATE 2026
              </h4>
              <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                <li>• Eligibility relaxed from 10+2+4 to 10+2+3 (ongoing)</li>
                <li>
                  • Students can now opt for two different papers from
                  prescribed combinations
                </li>
                <li>• All test papers will be entirely objective type</li>
                <li>
                  • Two new subjects added: Geomatics Engineering (GE) and Naval
                  Architecture (NM)
                </li>
              </ul>
            </div>
          </div>
        );

      case "syllabus":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {csSyllabus.map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-slate-700/20"
                >
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-green-600" />
                    {section.section}
                  </h3>
                  <ul className="space-y-2">
                    {section.topics.map((topic, topicIdx) => (
                      <li key={topicIdx} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 dark:text-slate-400">
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Download Syllabus CTA */}
            <div className="text-center">
              <button className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-medium rounded-lg inline-flex items-center transition-all shadow-lg">
                Download Complete Syllabus
                <ExternalLink className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        );

      case "institutes":
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {participatingIITs.map((institute, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border transition-all ${
                    institute.status === "current"
                      ? "border-green-300 dark:border-green-700 bg-green-50/50 dark:bg-green-900/20"
                      : "border-white/20 dark:border-slate-700/20"
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white flex items-center">
                        <Building className="w-5 h-5 mr-2 text-green-600" />
                        {institute.name}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {institute.location}
                      </p>
                    </div>
                    {institute.status === "current" && (
                      <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium rounded-md">
                        Organizing 2025
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-500 dark:text-slate-400">
                        Year:
                      </span>
                      <span className="text-slate-700 dark:text-slate-300 font-medium ml-2">
                        {institute.year}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 dark:text-slate-400">
                        Established:
                      </span>
                      <span className="text-slate-700 dark:text-slate-300 font-medium ml-2">
                        {institute.established}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Rotation Info */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200/30 dark:border-blue-700/30">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                GATE Organizing Institute Rotation
              </h4>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                GATE is jointly conducted by IIT Bombay, IIT Delhi, IIT
                Guwahati, IIT Kanpur, IIT Kharagpur, IIT Madras, IIT Roorkee,
                and IISc Bangalore on a rotational basis. Each institute takes
                turns organizing the examination every few years.
              </p>
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
      id="examinfo"
      className="relative min-h-screen py-20 bg-slate-50 dark:bg-[#0C0C20] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="w-full h-full bg-[linear-gradient(transparent_39px,#22c55e_1px),linear-gradient(90deg,transparent_39px,#22c55e_1px)] bg-[length:40px_40px]"></div>
        </div>
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-green-500/10 to-transparent blur-[80px]"></div>
        <div className="absolute bottom-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-emerald-500/10 to-transparent blur-[100px]"></div>
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
              GATE 2026 Information
            </span>
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-slate-900 dark:from-white to-slate-600 dark:to-slate-300 bg-clip-text text-transparent relative z-10">
              Exam
            </span>
            <span className="text-green-600 dark:text-green-400">
              {" "}
              Information
            </span>
          </h2>

          <motion.p
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Complete information about GATE 2026 including exam dates, pattern,
            syllabus, and participating institutes. Stay updated with the latest
            changes.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side: Key Highlights */}
          <motion.div
            className="w-full lg:w-2/5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                GATE 2026
                <span className="block text-green-600 dark:text-green-400">
                  Key Updates
                </span>
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Important changes and updates for GATE 2026 that every CS & DA
                aspirant should know.
              </p>
            </motion.div>

            {/* Key highlights */}
            <motion.div variants={containerVariants} className="space-y-6">
              {[
                {
                  icon: GraduationCap,
                  title: "Relaxed Eligibility",
                  description:
                    "Minimum eligibility changed from 10+2+4 to 10+2+3 (ongoing)",
                  color: "from-green-500 to-emerald-400",
                },
                {
                  icon: FileText,
                  title: "Two Papers Allowed",
                  description:
                    "Students can now opt for two different papers from prescribed combinations",
                  color: "from-blue-500 to-cyan-400",
                },
                {
                  icon: Building,
                  title: "IIT Roorkee Organizing",
                  description:
                    "IIT Roorkee is the organizing institute for GATE 2025",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  icon: Target,
                  title: "30 Subjects Available",
                  description:
                    "Total 30 subjects including new additions: GE and NM",
                  color: "from-orange-500 to-red-500",
                },
              ].map((highlight, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm border border-white/20 dark:border-slate-700/20 hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all"
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${highlight.color} flex items-center justify-center shadow-lg`}
                  >
                    <highlight.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              {[
                { value: "30", label: "Total Subjects" },
                { value: "3hrs", label: "Exam Duration" },
                { value: "100", label: "Total Marks" },
                { value: "Feb", label: "Exam Month" },
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

          {/* Right Side: Tabbed Information */}
          <motion.div
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Information Dashboard */}
            <div className="bg-white/30 dark:bg-slate-900/30 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/30 dark:border-slate-700/30 shadow-xl">
              {/* Tab Navigation */}
              <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50 flex gap-2 overflow-x-auto">
                {examTabs.map((tab) => (
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
                        layoutId="activeTabExam"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                    <tab.icon className="w-4 h-4 mr-2" />
                    {tab.name}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6 h-[600px] overflow-auto">
                <AnimatePresence mode="wait">
                  {renderTabContent()}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default ExamInfoSection;
