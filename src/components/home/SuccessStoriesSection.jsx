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

  // Success stories data
  const successStories = [
    {
      id: 1,
      name: "Priya Sharma",
      rank: "AIR 23",
      year: "GATE 2024",
      score: 891,
      photo: "https://randomuser.me/api/portraits/women/45.jpg",
      background: "BTech CSE, Tier-3 College",
      currentPosition: "MS at IIT Bombay",
      quote: "The structured approach and community support helped me achieve my dream rank. The mock tests were exactly like the real exam!",
      detailedStory: "Starting from a Tier-3 college, I thought IIT was just a dream. But with consistent preparation using this platform's resources and the amazing community support, I could crack GATE with AIR 23.",
      preparationTime: "14 months",
      studyHours: "8-10 hours/day",
      keyTips: [
        "Focus on understanding concepts rather than memorizing",
        "Solve PYQs multiple times and analyze mistakes",
        "Join study groups for motivation and doubt clearing",
        "Take regular mock tests to build exam temperament"
      ],
      subjectsStrong: ["Data Structures", "Algorithms", "DBMS"],
      subjectsWeak: ["Computer Networks", "Theory of Computation"],
      videoTestimonial: true
    },
    {
      id: 2,
      name: "Rahul Kumar",
      rank: "AIR 45",
      year: "GATE 2024",
      score: 867,
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      background: "BTech IT, Working Professional",
      currentPosition: "Research Scientist at ISRO",
      quote: "Balancing job and GATE preparation was challenging, but the flexible study plans and weekend intensive sessions made it possible.",
      detailedStory: "As a working professional with 2 years of experience, preparing for GATE seemed impossible. The flexible study schedules and weekend crash courses helped me manage both work and preparation effectively.",
      preparationTime: "18 months",
      studyHours: "4-5 hours/day",
      keyTips: [
        "Create a realistic study schedule that fits your work",
        "Utilize commute time for revision",
        "Focus on high-weightage topics first",
        "Weekend intensive study sessions are crucial"
      ],
      subjectsStrong: ["Operating Systems", "Computer Organization"],
      subjectsWeak: ["Discrete Mathematics", "Compiler Design"],
      videoTestimonial: false
    },
    {
      id: 3,
      name: "Ananya Singh",
      rank: "AIR 67",
      year: "GATE 2024",
      score: 845,
      photo: "https://randomuser.me/api/portraits/women/68.jpg",
      background: "BTech ECE (Branch Change)",
      currentPosition: "MTech at IIT Delhi",
      quote: "Switching from ECE to CS seemed impossible, but the comprehensive basic concepts coverage helped me build a strong foundation.",
      detailedStory: "Coming from an ECE background, I had to start CS preparation from scratch. The beginner-friendly resources and step-by-step learning path helped me transition smoothly and achieve a great rank.",
      preparationTime: "20 months",
      studyHours: "10-12 hours/day",
      keyTips: [
        "Start with basic concepts if you're from a different branch",
        "Don't skip foundational topics",
        "Practice coding regularly",
        "Connect with mentors from similar backgrounds"
      ],
      subjectsStrong: ["Programming", "Digital Logic"],
      subjectsWeak: ["Theory of Computation", "Compiler Design"],
      videoTestimonial: true
    },
    {
      id: 4,
      name: "Arjun Patel",
      rank: "AIR 89",
      year: "GATE 2024",
      score: 832,
      photo: "https://randomuser.me/api/portraits/men/55.jpg",
      background: "3rd Attempt",
      currentPosition: "PSU Job (BHEL)",
      quote: "After two unsuccessful attempts, I was about to give up. The personalized study plan and motivation from the community kept me going.",
      detailedStory: "My third attempt was make-or-break. The detailed analysis of my previous attempts and personalized weak area improvement plan finally helped me crack GATE with a decent rank.",
      preparationTime: "10 months (3rd attempt)",
      studyHours: "6-8 hours/day",
      keyTips: [
        "Analyze your previous attempts thoroughly",
        "Focus on weak areas identified in analysis",
        "Don't lose hope - persistence pays off",
        "Join support groups for motivation"
      ],
      subjectsStrong: ["Algorithms", "Programming"],
      subjectsWeak: ["Mathematics", "Aptitude"],
      videoTestimonial: false
    }
  ];

  // Statistics about success stories
  const successStats = [
    { value: "500+", label: "Success Stories", icon: Award },
    { value: "Top 100", label: "Average Rank", icon: TrendingUp },
    { value: "89%", label: "Success Rate", icon: Target },
    { value: "4.9/5", label: "Student Rating", icon: Star },
  ];

  // Common preparation strategies
  const preparationStrategies = [
    {
      title: "Structured Study Plan",
      description: "Follow a well-organized curriculum covering all topics systematically",
      icon: BookOpen,
      percentage: 92
    },
    {
      title: "Regular Mock Tests",
      description: "Take weekly mock tests to build exam temperament and identify weak areas",
      icon: Target,
      percentage: 88
    },
    {
      title: "PYQ Analysis",
      description: "Solve and analyze previous year questions to understand exam patterns",
      icon: TrendingUp,
      percentage: 94
    },
    {
      title: "Community Support",
      description: "Join study groups and discussion forums for doubt clearing and motivation",
      icon: Users,
      percentage: 85
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
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-gradient-to-b from-green-500/5 to-transparent rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[500px] bg-gradient-to-tr from-emerald-500/5 to-transparent rounded-full filter blur-[60px]"></div>
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
              Inspiring Success Stories
            </span>
          </span>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 relative">
            <span className="bg-gradient-to-r from-slate-900 dark:from-white to-slate-600 dark:to-slate-300 bg-clip-text text-transparent relative z-10">
              Success
            </span>
            <span className="text-green-600 dark:text-green-400"> Stories</span>
          </h2>

          <motion.p
            className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Real stories from GATE toppers who achieved their dreams with determination, 
            smart preparation strategies, and community support.
          </motion.p>
        </motion.div>

        {/* Success Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {successStats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm border border-white/20 dark:border-slate-700/20 rounded-xl p-6 text-center hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Success Story Display */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Story Card */}
          <motion.div
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-white/80 to-white/60 dark:from-slate-800/80 dark:to-slate-800/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/30 dark:border-slate-700/30 shadow-2xl">
              {/* Story Header */}
              <div className="relative p-8 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white/30 shadow-lg">
                      <img
                        src={currentStory.photo}
                        alt={currentStory.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold">{currentStory.name}</h3>
                      <p className="text-white/80">{currentStory.background}</p>
                      <p className="text-white/80 text-sm">{currentStory.currentPosition}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-3xl font-bold">{currentStory.rank}</div>
                    <div className="text-white/80 text-sm">{currentStory.year}</div>
                    <div className="text-white/80 text-sm">Score: {currentStory.score}</div>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-white/30 absolute -top-2 -left-2" />
                  <p className="text-lg italic pl-6">{currentStory.quote}</p>
                </div>

                {/* Navigation */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={prevStory}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextStory}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Story Details */}
              <div className="p-8">
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  {currentStory.detailedStory}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50 dark:bg-slate-700/30 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Preparation Time</span>
                    </div>
                    <div className="font-semibold text-slate-900 dark:text-white">{currentStory.preparationTime}</div>
                  </div>
                  
                  <div className="bg-slate-50 dark:bg-slate-700/30 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <BookOpen className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Daily Study</span>
                    </div>
                    <div className="font-semibold text-slate-900 dark:text-white">{currentStory.studyHours}</div>
                  </div>
                </div>

                {/* Strong/Weak Subjects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Strong Subjects
                    </h4>
                    <div className="space-y-2">
                      {currentStory.subjectsStrong.map((subject, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          <span className="text-slate-600 dark:text-slate-400">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                      <Target className="w-4 h-4 text-orange-600 mr-2" />
                      Improved Areas
                    </h4>
                    <div className="space-y-2">
                      {currentStory.subjectsWeak.map((subject, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                          <span className="text-slate-600 dark:text-slate-400">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Video Testimonial */}
                {currentStory.videoTestimonial && (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-4 border border-green-200/30 dark:border-green-700/30">
                    <button className="w-full flex items-center justify-center gap-3 text-green-700 dark:text-green-300 font-medium hover:text-green-800 dark:hover:text-green-200 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white">
                        <Play className="w-4 h-4 ml-0.5" />
                      </div>
                      Watch Video Testimonial
                    </button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Key Tips */}
          <motion.div
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <Award className="w-6 h-6 text-green-600 mr-2" />
                Key Success Tips
              </h3>
              
              <div className="space-y-4">
                {currentStory.keyTips.map((tip, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-green-600 dark:text-green-400 text-sm font-semibold">{idx + 1}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{tip}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Story Navigation */}
            <div className="mt-6 flex justify-center">
              <div className="flex gap-2">
                {successStories.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-3 h-3 rounded-full transition-all ${
                      activeStory === idx
                        ? "bg-green-600 w-8"
                        : "bg-slate-300 dark:bg-slate-600"
                    }`}
                    onClick={() => setActiveStory(idx)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Preparation Strategies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Common Success Strategies
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Based on analysis of 500+ success stories, here are the most effective preparation strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preparationStrategies.map((strategy, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-slate-700/20 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                  <strategy.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {strategy.title}
                </h4>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                  {strategy.description}
                </p>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Success Rate</span>
                  <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {strategy.percentage}%
                  </span>
                </div>
                
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mt-2">
                  <motion.div
                    className="h-2 rounded-full bg-green-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${strategy.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white relative overflow-hidden">
           {/* Background decorations */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
           <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
           
           <div className="relative">
             <h3 className="text-2xl md:text-3xl font-bold mb-4">
               Ready to Write Your Success Story?
             </h3>
             <p className="text-white/80 max-w-2xl mx-auto mb-6">
               Join thousands of successful GATE aspirants who achieved their dreams with our 
               comprehensive preparation platform and supportive community.
             </p>
             
             <button className="px-8 py-4 bg-white text-green-600 hover:bg-gray-100 font-semibold rounded-lg shadow-lg inline-flex items-center transition-all transform hover:scale-105">
               Start Your GATE Journey
               <ArrowRight className="w-5 h-5 ml-2" />
             </button>
           </div>
         </div>
       </motion.div>
     </div>
   </section>
 );
});

export default SuccessStoriesSection;