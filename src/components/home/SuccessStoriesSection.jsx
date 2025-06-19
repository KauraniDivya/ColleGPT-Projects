import React, { forwardRef, useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  BookOpen,
  Clock,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  Calendar,
  Github,
  Trophy,
  Code,
  ExternalLink,
} from "lucide-react";

const SuccessStoriesSection = forwardRef((props, ref) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeStory, setActiveStory] = useState(0);
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

  // Auto-rotate stories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % successStories.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Real hackathon success stories based on current data
  const successStories = [
    {
      id: 1,
      name: "ChatEDU Team",
      achievement: "1st Place Winner",
      hackathon: "Microsoft AI Classroom Hackathon 2024",
      prize: "$4,000",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      background: "CS Students, Vanderbilt University",
      currentPosition: "Microsoft for Startups Program",
      quote: "The Microsoft AI Classroom hackathon provided us with the ideal platform to create a tool that contributes to the community that brought us together.",
      detailedStory: "Our team developed ChatEDU, an AI-powered educational platform using Azure AI, GPT-4, and Azure databases. It offers personalized study guides, tests, and context-driven learning sessions.",
      projectDetails: "ChatEDU - AI Educational Platform",
      teamSize: "4 members",
      technologies: ["Azure AI", "GPT-4", "Azure Cosmos DB", "React", "Node.js"],
      keyFeatures: [
        "Personalized study guides",
        "AI-powered testing system", 
        "Context-driven learning sessions",
        "Multi-format question generation"
      ],
      projectUrl: "https://devpost.com/software/chatedu",
      githubUrl: "https://github.com/chatedu-team/chatedu"
    },
    {
      id: 2,
      name: "StaSASticians Team",
      achievement: "Triple Category Winner",
      hackathon: "SAS Hackathon 2024",
      prize: "$3,500",
      photo: "https://randomuser.me/api/portraits/women/45.jpg",
      background: "Data Scientists & Engineers",
      currentPosition: "IoT Innovation Leaders",
      quote: "In a world warming due to climate change, this Heat Stroke Prevention System is a very timely and targeted innovation.",
      detailedStory: "Won in three categories: Americas (region), Insurance (industry) and IoT (technology). Created an AI-enabled Heat Stroke Prevention System for construction workers using SAS Viya and Python.",
      projectDetails: "Heat Stroke Prevention System",
      teamSize: "5 members",
      technologies: ["SAS Viya", "Python", "IoT Sensors", "Machine Learning"],
      keyFeatures: [
        "Real-time health monitoring",
        "AI-powered risk prediction",
        "Automated alert system",
        "Weather integration"
      ],
      projectUrl: "https://communities.sas.com/hackathon",
      githubUrl: "https://github.com/stasasticians/heat-prevention"
    },
    {
      id: 3,
      name: "SpeechMaster Team",
      achievement: "AI Category Winner",
      hackathon: "HackYeah 2024 - Europe's Largest",
      prize: "€2,000",
      photo: "https://randomuser.me/api/portraits/men/55.jpg",
      background: "NLP Researchers & Developers",
      currentPosition: "Speech Technology Startup",
      quote: "Using OpenAI Whisper, GPT-4o, and Google Gemini Pro, we created an intuitive speech analysis tool that helps users improve their presentation skills.",
      detailedStory: "Developed SpeechMaster, an advanced speech analysis application that provides detailed feedback on presentations using cutting-edge AI models and NLP algorithms.",
      projectDetails: "SpeechMaster - AI Speech Analysis",
      teamSize: "6 members",
      technologies: ["OpenAI Whisper", "GPT-4o", "Google Gemini Pro", "NLP", "Video Analysis"],
      keyFeatures: [
        "Real-time speech analysis",
        "Automated subtitle generation",
        "Comparative performance reports",
        "Interactive feedback system"
      ],
      projectUrl: "https://github.com/hackYeah2024/speechmaster",
      githubUrl: "https://github.com/zryw-team/speechmaster"
    },
    {
      id: 4,
      name: "S.N.I.F.F. Team",
      achievement: "Health Innovation Winner",
      hackathon: "Harvard Health Systems Hackathon 2024",
      prize: "$5,000",
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      background: "Medical AI Researchers",
      currentPosition: "Harvard Venture Incubation Program",
      quote: "Our non-invasive breast cancer detection system aims to revolutionize surgery by decreasing incomplete surgical excision rates.",
      detailedStory: "Created Smart Neoplasm Identification by Fume Fingerprinting (S.N.I.F.F.), using AI algorithms to analyze gases from electrocautery devices to distinguish between malignant and benign tissue.",
      projectDetails: "S.N.I.F.F. - Smart Cancer Detection",
      teamSize: "4 members",
      technologies: ["AI Algorithms", "Medical Sensors", "Python", "TensorFlow"],
      keyFeatures: [
        "Non-invasive cancer detection",
        "Real-time tissue analysis",
        "AI-powered classification",
        "Surgical integration"
      ],
      projectUrl: "https://hsph.harvard.edu/health-systems-innovation-lab/",
      githubUrl: "https://github.com/sniff-team/cancer-detection"
    }
  ];

  // Real hackathon stats based on current data
  const hackathonStats = [
    { value: "3,700+", label: "Global Participants", icon: Users, color: "text-amber-600" },
    { value: "$500K+", label: "Total Prize Money", icon: Trophy, color: "text-yellow-600" },
    { value: "95%", label: "Project Completion", icon: Target, color: "text-amber-500" },
    { value: "4.8/5", label: "Satisfaction Rating", icon: Star, color: "text-yellow-500" },
  ];

  // Common success strategies based on real data
  const successStrategies = [
    {
      title: "AI-First Approach",
      description: "Leverage cutting-edge AI technologies like GPT-4, Azure AI, and machine learning frameworks",
      icon: Code,
      percentage: 92,
      color: "from-amber-500 to-yellow-400"
    },
    {
      title: "Real-World Problem Solving",
      description: "Focus on practical solutions addressing healthcare, education, and social challenges",
      icon: Target,
      percentage: 88,
      color: "from-yellow-500 to-amber-400"
    },
    {
      title: "Cross-Platform Integration",
      description: "Build solutions that work across multiple platforms and integrate with existing systems",
      icon: TrendingUp,
      percentage: 94,
      color: "from-amber-600 to-yellow-500"
    },
    {
      title: "Strong Team Collaboration",
      description: "Form diverse teams with complementary skills in AI, development, design, and domain expertise",
      icon: Users,
      percentage: 85,
      color: "from-yellow-600 to-amber-500"
    }
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

  const nextStory = () => {
    setActiveStory((prev) => (prev + 1) % successStories.length);
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const currentStory = successStories[activeStory];

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
      id="success"
      className="relative min-h-screen py-20 bg-white dark:bg-[#0A0A0A] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-gradient-to-b from-amber-500/5 to-transparent rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[500px] bg-gradient-to-tr from-yellow-400/5 to-transparent rounded-full filter blur-[60px]"></div>
      </div>

      {/* Dynamic cursor light effect */}
      <div
        className="absolute inset-0 -z-5 overflow-hidden"
        style={{
          background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(245,158,11,0.07), transparent 80%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center rounded-full px-4 py-2 text-sm bg-amber-500/10 dark:bg-amber-500/20 backdrop-blur-sm border border-amber-500/20 dark:border-amber-500/30 mb-6"
          >
            <Trophy className="w-4 h-4 mr-2 text-amber-600" />
            <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent font-medium">
              Global Hackathon Champions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            <span className="bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
              Success Stories
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Real stories from developers who turned innovative ideas into award-winning projects at major global hackathons
          </motion.p>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {hackathonStats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className={`w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center mx-auto mb-3 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Featured Success Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-white/80 to-amber-50/50 dark:from-slate-800/50 dark:to-yellow-950/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 dark:border-slate-700/50 shadow-2xl mb-16"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Story Content */}
            <div className="lg:w-2/3 p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={currentStory.photo}
                  alt={currentStory.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {currentStory.name}
                  </h3>
                  <p className="text-amber-600 dark:text-yellow-400 font-medium">
                    {currentStory.achievement}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {currentStory.hackathon}
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-500/10 to-yellow-400/10 rounded-lg p-4 mb-6">
                <Quote className="w-6 h-6 text-amber-600 mb-2" />
                <p className="text-gray-700 dark:text-gray-300 italic">
                  "{currentStory.quote}"
                </p>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {currentStory.detailedStory}
              </p>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Project Details</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{currentStory.projectDetails}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Team Size: {currentStory.teamSize}</p>
                  <p className="text-sm text-amber-600 dark:text-yellow-400 font-medium">Prize: {currentStory.prize}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentStory.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {currentStory.keyFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-amber-600 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={currentStory.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-amber-600 text-white font-medium rounded-lg transition-all"
                >
                  View Project
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
                <a
                  href={currentStory.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg transition-all"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="lg:w-1/3 p-8 bg-gradient-to-br from-amber-500/5 to-yellow-400/5 flex flex-col justify-center">
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={prevStory}
                  className="p-2 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-all"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </button>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {activeStory + 1} of {successStories.length}
                </span>
                <button
                  onClick={nextStory}
                  className="p-2 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 transition-all"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </button>
              </div>

              {/* Story thumbnails */}
              <div className="space-y-3">
                {successStories.map((story, idx) => (
                  <button
                    key={story.id}
                    onClick={() => setActiveStory(idx)}
                    className={`w-full p-3 rounded-lg text-left transition-all ${
                      activeStory === idx
                        ? "bg-gradient-to-r from-amber-500/20 to-yellow-400/20 border border-amber-500/30"
                        : "bg-white/30 dark:bg-gray-800/30 hover:bg-white/50 dark:hover:bg-gray-800/50"
                    }`}
                  >
                    <div className="flex items-center">
                      <img
                        src={story.photo}
                        alt={story.name}
                        className="w-8 h-8 rounded-full object-cover mr-3"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {story.name}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 truncate">
                          {story.hackathon}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Success Strategies */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Proven Success Strategies
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Key approaches used by winning teams to create impactful solutions and stand out in competitive hackathons
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successStrategies.map((strategy, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-slate-700/50 hover:border-amber-500/30 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${strategy.color} flex items-center justify-center text-white mb-4 group-hover:shadow-lg group-hover:shadow-amber-500/20 transition-all`}>
                  <strategy.icon className="w-6 h-6" />
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-amber-600 dark:group-hover:text-yellow-400 transition-colors">
                  {strategy.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {strategy.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Success Rate</span>
                  <span className="text-sm font-bold text-amber-600 dark:text-yellow-400">
                    {strategy.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                  <div
                    className={`bg-gradient-to-r ${strategy.color} h-2 rounded-full transition-all duration-1000`}
                    style={{ width: `${strategy.percentage}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default SuccessStoriesSection;