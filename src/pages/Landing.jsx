import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  BookOpen, 
  Brain, 
  Target, 
  Trophy, 
  Clock, 
  Users, 
  TrendingUp,
  CheckCircle,
  Star,
  Award,
  Zap,
  BarChart3,
  FileText,
  Play,
  Download
} from 'lucide-react';

const GateLanding = () => {
  useEffect(() => {
    // Handle dark mode if you have the function
    // handledarkmode();
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800">
      
      {/* Hero Section - Mac inspired */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10 dark:from-orange-500/5 dark:to-amber-500/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-medium mb-6">
              <Trophy className="w-4 h-4 mr-2" />
              Your GATE Success Starts Here
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 dark:from-orange-400 dark:via-amber-400 dark:to-orange-400 mb-6">
              Crack GATE 2025
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Master the Graduate Aptitude Test in Engineering with AI-powered preparation, 
              comprehensive study materials, and personalized learning paths.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/gate-placement"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-2xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/gate-placement"
                className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 text-orange-600 dark:text-orange-400 font-semibold rounded-2xl border-2 border-orange-200 dark:border-orange-800 hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { number: "50K+", label: "Success Stories", icon: <Trophy className="w-6 h-6" /> },
              { number: "95%", label: "Success Rate", icon: <Target className="w-6 h-6" /> },
              { number: "25+", label: "Engineering Streams", icon: <BookOpen className="w-6 h-6" /> },
              { number: "1000+", label: "Practice Questions", icon: <Brain className="w-6 h-6" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-xl mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section - Mac Cards Style */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose ColleGPT for GATE?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Experience the future of GATE preparation with our comprehensive AI-powered platform
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "AI-Powered Learning",
                description: "Personalized study plans adapted to your learning style and progress",
                gradient: "from-orange-500 to-amber-500"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Performance Analytics",
                description: "Detailed insights into your strengths and areas for improvement",
                gradient: "from-amber-500 to-yellow-500"
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Previous Year Papers",
                description: "Comprehensive collection of GATE papers from 2000-2024",
                gradient: "from-orange-600 to-red-500"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Timed Mock Tests",
                description: "Practice with real exam conditions and time constraints",
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Mentorship",
                description: "Get guidance from GATE toppers and industry experts",
                gradient: "from-amber-600 to-orange-600"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Instant Doubt Clearing",
                description: "24/7 AI assistance for immediate problem-solving",
                gradient: "from-orange-500 to-amber-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-orange-100 dark:border-gray-700"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Subject-wise Preparation */}
      <section className="py-20 bg-white/30 dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Master Every Subject
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Comprehensive preparation for all GATE engineering streams
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { code: "CS", name: "Computer Science", topics: "DSA, OS, CN, DBMS", color: "from-blue-500 to-cyan-500" },
              { code: "EC", name: "Electronics & Comm", topics: "Signals, Networks, Digital", color: "from-green-500 to-emerald-500" },
              { code: "ME", name: "Mechanical", topics: "Thermodynamics, Mechanics", color: "from-purple-500 to-violet-500" },
              { code: "EE", name: "Electrical", topics: "Power, Machines, Control", color: "from-orange-500 to-red-500" },
              { code: "CE", name: "Civil", topics: "Structures, Fluid Mechanics", color: "from-indigo-500 to-blue-500" },
              { code: "CH", name: "Chemical", topics: "Process, Thermodynamics", color: "from-pink-500 to-rose-500" },
              { code: "IN", name: "Instrumentation", topics: "Control, Measurements", color: "from-teal-500 to-cyan-500" },
              { code: "BT", name: "Biotechnology", topics: "Biology, Engineering", color: "from-lime-500 to-green-500" }
            ].map((subject, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <Link
                  to="/gate-placement"
                  className="block p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${subject.color} text-white rounded-xl mb-4 font-bold text-lg`}>
                    {subject.code}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{subject.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{subject.topics}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Real students, real results, real success
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: "Rahul Sharma",
                rank: "AIR 15",
                stream: "Computer Science",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
                quote: "ColleGPT's AI-powered doubt solving helped me crack the toughest problems."
              },
              {
                name: "Priya Patel",
                rank: "AIR 42",
                stream: "Electronics",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
                quote: "The personalized study plan made all the difference in my preparation."
              },
              {
                name: "Arjun Kumar",
                rank: "AIR 28",
                stream: "Mechanical",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
                quote: "Mock tests with detailed analytics boosted my confidence significantly."
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{story.name}</div>
                    <div className="text-orange-600 dark:text-orange-400 font-semibold">{story.rank}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{story.stream}</div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">"{story.quote}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Preparation Roadmap */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Your GATE Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Follow our proven roadmap to GATE success
            </p>
          </motion.div>

          <motion.div 
            className="relative"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 to-amber-500 hidden md:block"></div>

            {[
              {
                phase: "Phase 1",
                title: "Foundation Building",
                duration: "3-4 Months",
                description: "Master fundamental concepts and build strong basics",
                icon: <BookOpen className="w-6 h-6" />
              },
              {
                phase: "Phase 2", 
                title: "Concept Mastery",
                duration: "4-5 Months",
                description: "Deep dive into advanced topics and problem-solving",
                icon: <Brain className="w-6 h-6" />
              },
              {
                phase: "Phase 3",
                title: "Practice & Mock Tests",
                duration: "2-3 Months",
                description: "Intensive practice with previous year papers and mocks",
                icon: <Target className="w-6 h-6" />
              },
              {
                phase: "Phase 4",
                title: "Final Revision",
                duration: "1 Month",
                description: "Quick revision, formula sheets, and confidence building",
                icon: <Award className="w-6 h-6" />
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white dark:border-gray-800 z-10 hidden md:block"></div>
                
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl mr-4">
                        {step.icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-orange-600 dark:text-orange-400">{step.phase}</div>
                        <div className="text-lg font-bold text-gray-900 dark:text-white">{step.title}</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">{step.duration}</div>
                    <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Comprehensive Resources
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Everything you need for GATE success in one place
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Video Lectures",
                count: "500+",
                description: "HD quality lectures by top educators",
                icon: <Play className="w-8 h-8" />,
                color: "from-red-500 to-pink-500"
              },
              {
                title: "Practice Questions",
                count: "10,000+",
                description: "Topic-wise solved problems",
                icon: <FileText className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Mock Tests",
                count: "100+",
                description: "Full-length and sectional tests",
                icon: <Clock className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Formula Sheets",
                count: "25+",
                description: "Quick reference materials",
                icon: <Download className="w-8 h-8" />,
                color: "from-purple-500 to-violet-500"
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
              >
                <Link
                  to="/gate-placement"
                  className="block p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${resource.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform`}>
                    {resource.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{resource.count}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{resource.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{resource.description}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-amber-500 dark:from-orange-600 dark:to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Crack GATE 2025?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Join thousands of successful GATE aspirants who achieved their dreams with ColleGPT
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/gate-placement"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-2xl hover:bg-orange-50 transition-colors shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/gate-placement"
                className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-2xl border-2 border-white hover:bg-white hover:text-orange-600 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GateLanding;