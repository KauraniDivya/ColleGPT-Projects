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

// Success stories data for hackathon winners
const successStories = [
  {
    id: 1,
    name: "Priya Sharma",
    achievement: "1st Place Winner",
    hackathon: "AI Innovation Challenge 2024",
    prize: "$25,000",
    photo: "https://randomuser.me/api/portraits/women/45.jpg",
    background: "Full-Stack Developer, Startup",
    currentPosition: "CTO at TechStart",
    quote: "The mentorship and resources provided helped us build an award-winning AI solution in just 48 hours!",
    detailedStory: "Our team developed an AI-powered healthcare diagnostic tool that can predict diseases from symptoms with 94% accuracy. The hackathon experience was transformative.",
    projectDetails: "HealthAI - AI Diagnostic Tool",
    teamSize: "4 members",
    technologies: ["Python", "TensorFlow", "React", "AWS"],
    keyFeatures: [
      "Real-time symptom analysis",
      "Machine learning predictions", 
      "Doctor consultation integration",
      "Mobile-responsive design"
    ]
  },
];

const hackathonStats = [
  { value: "200+", label: "Winners", icon: Award },
  { value: "$2M+", label: "Total Prizes", icon: TrendingUp },
  { value: "95%", label: "Completion Rate", icon: Target },
  { value: "4.9/5", label: "Participant Rating", icon: Star },
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
        <div className="absolute top-0 left-0 w-[600px] h-[400px] bg-gradient-to-b from-[#8B5CF6]/5 to-transparent rounded-full filter blur-[80px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[500px] bg-gradient-to-tr from-[#A78BFA]/5 to-transparent rounded-full filter blur-[60px]"></div>
      </div>

      {/* Dynamic cursor light effect */}
      <div
        className="absolute inset-0 -z-5 overflow-hidden"
        style={{
          background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139,92,246,0.07), transparent 80%)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            <span className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent">
              Success Stories
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Inspiring stories from our community members who achieved their goals
          </motion.p>
        </div>

        {/* Success Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {successStories.map((story, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700 hover:border-[#8B5CF6] transition-all"
            >
              <div className="relative h-48">
                <img
                  src={story.photo}
                  alt={story.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {story.name}
                  </h3>
                  <p className="text-sm text-white/80">{story.background}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {story.detailedStory}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    {story.preparationTime}
                  </div>
                  <div className="text-[#8B5CF6] font-medium">
                    {story.currentPosition}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default SuccessStoriesSection;