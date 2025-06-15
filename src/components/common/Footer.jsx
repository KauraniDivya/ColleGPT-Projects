import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  Send,
  Code,
  Target,
  Users,
  Calendar,
  Github,
  Globe,
  TrendingUp,
  Lightbulb,
  ArrowRight,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX / innerWidth - 0.5) * 2,
      y: (clientY / innerHeight - 0.5) * 2,
    });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    toast.success("Thanks for subscribing to Hackathon updates!");
    setEmail("");
  };

  const footerLinks = {
    "Dev Resources": [
      {
        name: "Code Templates",
        href: "/templates",
        icon: <Code className="w-4 h-4" />,
      },
      {
        name: "API Collections",
        href: "/apis",
        icon: <Zap className="w-4 h-4" />,
      },
      {
        name: "Project Tracker",
        href: "/progress",
        icon: <TrendingUp className="w-4 h-4" />,
      },
      {
        name: "Hackathon Planner",
        href: "/planner",
        icon: <Calendar className="w-4 h-4" />,
      },
    ],
    Community: [
      { name: "Developer Forum", href: "/community" },
      { name: "Winner Stories", href: "/success-stories" },
      { name: "Team Formation", href: "/teams" },
      { name: "Mentor Network", href: "/mentors" },
    ],
    Hackathons: [
      { name: "Upcoming Events", href: "/hackathons" },
      { name: "Event Guidelines", href: "/guidelines" },
      { name: "Judging Criteria", href: "/criteria" },
      { name: "Prize Structure", href: "/prizes" },
    ],
  };

  const currentDate = new Date();

  return (
    <footer
      className="relative bg-gradient-to-b from-slate-50 via-slate-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 border-t border-gray-200/20 dark:border-gray-800/20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"></div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-50 to-transparent dark:from-gray-900 dark:to-transparent"></div>

      {/* Floating element with parallax effect */}
      <div className="absolute right-[5%] bottom-[10%] md:bottom-[15%] lg:bottom-[20%] w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 select-none pointer-events-none z-10">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0, -5, 0],
            x: mousePosition.x * -10,
          }}
          transition={{
            y: {
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
            rotate: {
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
          className="w-full h-full relative"
        >
          <img
            src="https://i.ibb.co/4Z2VV9Zp/image.png"
            alt="Floating Developer"
            className="w-full h-full object-contain p-4"
          />
          
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20 h-6 bg-black/20 dark:bg-black/30 rounded-full blur-md"
            animate={{
              width: [50, 80, 50],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-10">
            <Link to="/" className="flex items-center">
              <span className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 flex items-center group">
                C
                <img
                  src="/logo.svg"
                  className="inline-block h-8 w-8 mt-1 transform transition-transform group-hover:rotate-12"
                  alt="ColleGPT Logo"
                />
                LLEGPT
                <div className="flex items-center ml-2">
                  <span className="text-sm font-medium text-gray-400 dark:text-gray-500">/</span>
                  <span className="text-sm font-semibold bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] bg-clip-text text-transparent px-1">
                    HACK
                  </span>
                </div>
              </span>
            </Link>

            <div className="space-y-6">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                Comprehensive collection of development resources, tools, and learning materials to help you excel in hackathons and build innovative projects.
              </p>

              <div className="flex gap-4">
                <SocialLink
                  href="https://www.github.com/hackathon-platform"
                  icon={<Github />}
                  label="GitHub"
                  className="bg-gray-900 text-white hover:bg-gray-700"
                />
                <SocialLink
                  href="https://www.linkedin.com/company/hackathon-platform"
                  icon={<Linkedin />}
                  label="LinkedIn"
                  className="bg-[#0077B5] text-white hover:bg-blue-700"
                />
                <SocialLink
                  href="https://twitter.com/hackathonplatform"
                  icon={<Twitter />}
                  label="Twitter"
                  className="bg-[#1DA1F2] text-white hover:bg-blue-500"
                />
                <SocialLink
                  href="https://www.instagram.com/hackathonplatform"
                  icon={<Instagram />}
                  label="Instagram"
                  className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FFDC80] text-white"
                />
                <SocialLink
                  href="https://hackathonplatform.com"
                  icon={<Globe />}
                  label="Website"
                  className="bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white"
                />
              </div>
            </div>

            {/* Newsletter */}
            <div className="rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-xl dark:shadow-gray-900/20 backdrop-blur-xl border border-gray-100 dark:border-gray-700/50">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2 flex items-center">
                <Lightbulb className="w-5 h-5 mr-2 text-[#8B5CF6]" />
                Stay Updated with Hackathon Events
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mb-4 text-sm">
                Get the latest hackathon announcements, developer resources, and winning project insights delivered to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 
                    bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-slate-900 dark:text-white
                    focus:ring-2 focus:ring-[#8B5CF6] dark:focus:ring-[#A78BFA] outline-none
                    placeholder-slate-500 dark:placeholder-slate-400 transition-all"
                    required
                  />
                  <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]
                  hover:from-[#7C3AED] hover:to-[#8B5CF6]
                  dark:from-[#8B5CF6] dark:to-[#A78BFA] dark:hover:from-[#7C3AED] dark:hover:to-[#8B5CF6] 
                  text-white font-medium transition-all shadow-lg shadow-[#8B5CF6]/20 dark:shadow-[#8B5CF6]/10 
                  flex items-center justify-center gap-2"
                >
                  Subscribe to Updates
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </div>
          </div>

          {/* Right Columns - Links */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 relative inline-flex items-center">
                    {category}
                    <motion.span
                      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] dark:from-[#A78BFA] dark:to-[#8B5CF6] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </h3>
                  <motion.ul
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                  >
                    {links.map((link) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Link
                          to={link.href}
                          className="group flex items-center text-slate-600 dark:text-slate-300 
                          hover:text-[#8B5CF6] dark:hover:text-[#A78BFA] transition-all"
                        >
                          {link.icon && (
                            <span
                              className="mr-3 text-slate-400 dark:text-slate-500 
                              group-hover:text-[#8B5CF6] dark:group-hover:text-[#A78BFA] transition-colors"
                            >
                              {link.icon}
                            </span>
                          )}
                          <span className="inline-flex items-center space-x-1 transform transition-all group-hover:translate-x-1">
                            <span>{link.name}</span>
                            <motion.span
                              className="opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0"
                              transition={{ duration: 0.3 }}
                            >
                              <ArrowRight className="w-3 h-3 text-[#8B5CF6]" />
                            </motion.span>
                          </span>
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 dark:border-gray-700/50 pt-10 mt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              &copy; {currentDate.getFullYear()} Hackathon Platform by ColleGPT.
              All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
              <Link
                to="/privacy"
                className="hover:text-[#8B5CF6] dark:hover:text-[#A78BFA] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-[#8B5CF6] dark:hover:text-[#A78BFA] transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/contact"
                className="hover:text-[#8B5CF6] dark:hover:text-[#A78BFA] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Enhanced Social Link Component
const SocialLink = ({ href, icon, label, className }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    whileHover={{ scale: 1.1, y: -5 }}
    whileTap={{ scale: 0.95 }}
    className={`w-10 h-10 flex items-center justify-center rounded-xl
    shadow-lg transition-all ${className}`}
    aria-label={label}
  >
    {icon}
  </motion.a>
);

export default Footer;