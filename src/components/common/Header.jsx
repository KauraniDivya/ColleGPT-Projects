import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import {
  Sun,
  Moon,
  Menu,
  X,
  Monitor,
  BookOpen,
  Target,
  Users,
  Calendar,
  TrendingUp,
  FileText,
} from "lucide-react";

const Header = () => {
  const { theme } = useAppContext();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation items
  const navigationItems = [
    { name: "Home", path: "/", icon: <Target className="w-4 h-4" /> },
    {
      name: "Materials",
      path: "/materials",
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      name: "Planner",
      path: "/planner",
      icon: <Calendar className="w-4 h-4" />,
    },
    {
      name: "Progress",
      path: "/progress",
      icon: <TrendingUp className="w-4 h-4" />,
    },
    {
      name: "Community",
      path: "/community",
      icon: <Users className="w-4 h-4" />,
    },
    { name: "Blogs", path: "/blogs", icon: <FileText className="w-4 h-4" /> },
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
                <span className="text-sm font-semibold bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent px-1">
                  GATE
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
                      ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm"
                      : "text-gray-600 dark:text-gray-300 hover:bg-white/50 dark:hover:bg-gray-800/50"
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
                    ? "bg-white dark:bg-gray-700 shadow-md"
                    : ""
                }`}
                aria-label="Light theme"
              >
                <Sun className="w-4 h-4 dark:text-white text-black" />
              </button>
              <button
                onClick={() => theme.setTheme("dark")}
                className={`p-2 rounded-md transition-all ${
                  theme.current === "dark"
                    ? "bg-white dark:bg-gray-700 shadow-md"
                    : ""
                }`}
                aria-label="Dark theme"
              >
                <Moon className="w-4 h-4 dark:text-white text-black" />
              </button>
              <button
                onClick={() => theme.setTheme("system")}
                className={`p-2 rounded-md transition-all ${
                  theme.current === "system"
                    ? "bg-white dark:bg-gray-700 shadow-md"
                    : ""
                }`}
                aria-label="System theme"
              >
                <Monitor className="w-4 h-4 dark:text-white text-black" />
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
                  <span className="text-sm font-semibold bg-gradient-to-r from-emerald-500 to-green-600 bg-clip-text text-transparent px-1">
                    GATE
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
                  className={`flex items-center p-3 rounded-lg ${
                    location.pathname === item.path
                      ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 font-medium"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="p-1 rounded-md bg-white dark:bg-gray-800 shadow-sm mr-3">
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Theme Switcher */}
            <div className="mt-6 px-3">
              <h3 className="text-xs uppercase font-medium text-gray-500 dark:text-gray-400 mb-3 tracking-wider">
                Appearance
              </h3>
              <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg flex items-center">
                <button
                  onClick={() => theme.setTheme("light")}
                  className={`flex-1 py-2 px-3 rounded-lg flex flex-col items-center ${
                    theme.current === "light"
                      ? "bg-white dark:bg-gray-700 shadow-sm"
                      : ""
                  }`}
                >
                  <Sun className="w-5 h-5 text-black dark:text-white" />
                  <span className="text-xs mt-1 text-black dark:text-white">
                    Light
                  </span>
                </button>
                <button
                  onClick={() => theme.setTheme("dark")}
                  className={`flex-1 py-2 px-3 rounded-lg flex flex-col items-center ${
                    theme.current === "dark"
                      ? "bg-white dark:bg-gray-700 shadow-sm"
                      : ""
                  }`}
                >
                  <Moon className="w-5 h-5 text-black dark:text-white" />
                  <span className="text-xs mt-1 text-black dark:text-white">
                    Dark
                  </span>
                </button>
                <button
                  onClick={() => theme.setTheme("system")}
                  className={`flex-1 py-2 px-3 rounded-lg flex flex-col items-center ${
                    theme.current === "system"
                      ? "bg-white dark:bg-gray-700 shadow-sm"
                      : ""
                  }`}
                >
                  <Monitor className="w-5 h-5 text-black dark:text-white" />
                  <span className="text-xs mt-1 text-black dark:text-white">
                    System
                  </span>
                </button>
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
