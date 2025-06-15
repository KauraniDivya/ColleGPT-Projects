import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import {
  Sun,
  Moon,
  Menu,
  X,
  Monitor,
  Code,
  Target,
  Users,
  Calendar,
  TrendingUp,
  Trophy,
  Lightbulb,
  Zap,
} from "lucide-react";

const Header = () => {
  const { theme } = useAppContext();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation items - Updated for hackathon platform
  const navigationItems = [
    { name: "Home", path: "/", icon: <Target className="w-4 h-4" /> },
    {
      name: "Resources",
      path: "/resources",
      icon: <Code className="w-4 h-4" />,
    },
    {
      name: "Planner",
      path: "/planner",
      icon: <Calendar className="w-4 h-4" />,
    },
    {
      name: "Hackathons",
      path: "/hackathons",
      icon: <Trophy className="w-4 h-4" />,
    },
    {
      name: "Community",
      path: "/community",
      icon: <Users className="w-4 h-4" />,
    },
    { name: "Projects", path: "/projects", icon: <Lightbulb className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[99999999999] transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200/20 dark:border-gray-800/20"
          : "bg-white dark:bg-gray-950"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center">
            <div className="flex items-center gap-1 p-1.5 rounded-xl bg-gray-100/50 dark:bg-gray-900/50 backdrop-blur-lg">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                    location.pathname === item.path
                      ? "bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white shadow-sm"
                      : "text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-800/50 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA]"
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Theme Switcher */}
            <div className="hidden md:flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
              <button
                onClick={() => theme.setTheme("light")}
                className={`p-2 rounded-md transition-all ${
                  theme.current === "light"
                    ? "bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white shadow-md"
                    : "hover:bg-white/50 dark:hover:bg-gray-700/50"
                }`}
                aria-label="Light theme"
              >
                <Sun className="w-4 h-4" />
              </button>
              <button
                onClick={() => theme.setTheme("dark")}
                className={`p-2 rounded-md transition-all ${
                  theme.current === "dark"
                    ? "bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white shadow-md"
                    : "hover:bg-white/50 dark:hover:bg-gray-700/50"
                }`}
                aria-label="Dark theme"
              >
                <Moon className="w-4 h-4" />
              </button>
              <button
                onClick={() => theme.setTheme("system")}
                className={`p-2 rounded-md transition-all ${
                  theme.current === "system"
                    ? "bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white shadow-md"
                    : "hover:bg-white/50 dark:hover:bg-gray-700/50"
                }`}
                aria-label="System theme"
              >
                <Monitor className="w-4 h-4" />
              </button>
            </div>

           

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 md:hidden"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-y-0 left-0 z-[9999999] w-[280px] bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Logo and Close Button */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            <Link
              to="/"
              className="flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 flex items-center group">
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
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="py-4 px-2 overflow-y-auto h-full">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center p-3 rounded-lg transition-all ${
                    location.pathname === item.path
                      ? "bg-gradient-to-r from-[#8B5CF6]/10 to-[#A78BFA]/10 dark:from-[#8B5CF6]/20 dark:to-[#A78BFA]/20 text-[#8B5CF6] dark:text-[#A78BFA] font-medium border border-[#8B5CF6]/20"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#8B5CF6] dark:hover:text-[#A78BFA]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className={`p-1.5 rounded-md shadow-sm mr-3 ${
                    location.pathname === item.path
                      ? "bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white"
                      : "bg-white dark:bg-gray-800"
                  }`}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile CTA Button */}
            <div className="mt-6 px-3">
              <Link
                to="/hackathons"
                className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] hover:from-[#7C3AED] hover:to-[#8B5CF6] text-white font-medium rounded-lg shadow-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                <Zap className="w-4 h-4 mr-2" />
                Join Hackathon
              </Link>
            </div>

            {/* Theme Switcher */}
            <div className="mt-6 px-3">
              <h3 className="text-xs uppercase font-medium text-gray-500 dark:text-gray-400 mb-3 tracking-wider">
                Appearance
              </h3>
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center">
                <button
                  onClick={() => theme.setTheme("light")}
                  className={`flex-1 py-2 px-3 rounded-lg flex flex-col items-center transition-all ${
                    theme.current === "light"
                      ? "bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white shadow-sm"
                      : "hover:bg-white/50 dark:hover:bg-gray-700/50"
                  }`}
                >
                  <Sun className="w-5 h-5" />
                  <span className="text-xs mt-1">Light</span>
                </button>
                <button
                  onClick={() => theme.setTheme("dark")}
                  className={`flex-1 py-2 px-3 rounded-lg flex flex-col items-center transition-all ${
                    theme.current === "dark"
                      ? "bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white shadow-sm"
                      : "hover:bg-white/50 dark:hover:bg-gray-700/50"
                  }`}
                >
                  <Moon className="w-5 h-5" />
                  <span className="text-xs mt-1">Dark</span>
                </button>
                <button
                  onClick={() => theme.setTheme("system")}
                  className={`flex-1 py-2 px-3 rounded-lg flex flex-col items-center transition-all ${
                    theme.current === "system"
                      ? "bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white shadow-sm"
                      : "hover:bg-white/50 dark:hover:bg-gray-700/50"
                  }`}
                >
                  <Monitor className="w-5 h-5" />
                  <span className="text-xs mt-1">System</span>
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-6 px-3">
              <h3 className="text-xs uppercase font-medium text-gray-500 dark:text-gray-400 mb-3 tracking-wider">
                Quick Stats
              </h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Active Hackathons</span>
                  <span className="text-[#8B5CF6] dark:text-[#A78BFA] font-medium">12</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Online Developers</span>
                  <span className="text-[#8B5CF6] dark:text-[#A78BFA] font-medium">15.2K</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Total Projects</span>
                  <span className="text-[#8B5CF6] dark:text-[#A78BFA] font-medium">8.9K</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay when sidebar is open */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-[9999998] bg-black/20 dark:bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;