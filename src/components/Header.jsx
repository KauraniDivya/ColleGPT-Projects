import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor, ChevronDown, Menu, X, BookOpen, Trophy, Target, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const themeMenuRef = useRef(null);
  const servicesMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (themeMenuRef.current && !themeMenuRef.current.contains(event.target)) {
        setIsThemeMenuOpen(false);
      }
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'College Notes', path: '/courses' },
    { name: 'GATE Prep', path: '/gate-placement' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceItems = [
    { 
      name: 'College Notes', 
      path: '/courses',
      description: 'Comprehensive study materials',
      icon: <BookOpen className="w-5 h-5" />
    },
    { 
      name: 'GATE Preparation', 
      path: '/gate-placement',
      description: 'Crack GATE with AI guidance',
      icon: <Trophy className="w-5 h-5" />
    },
    { 
      name: 'Mock Tests', 
      path: '/gate-placement',
      description: 'Practice with real exam patterns',
      icon: <Target className="w-5 h-5" />
    },
    { 
      name: 'Study Groups', 
      path: '/gate-placement',
      description: 'Collaborative learning',
      icon: <Users className="w-5 h-5" />
    },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-orange-200/30 dark:border-orange-800/30 shadow-lg shadow-orange-500/10'
          : 'bg-gradient-to-r from-orange-50/90 to-amber-50/90 dark:from-gray-900/90 dark:to-gray-800/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 dark:from-orange-400 dark:via-amber-400 dark:to-orange-400">
                ColleGPT
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-orange-600 dark:text-orange-400 bg-orange-100/80 dark:bg-orange-900/30'
                    : 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-xl border border-orange-200 dark:border-orange-800"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative" ref={servicesMenuRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 rounded-xl transition-all duration-300"
              >
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-80 rounded-2xl bg-white dark:bg-gray-800 shadow-2xl shadow-orange-500/10 border border-orange-100 dark:border-orange-800/30 overflow-hidden backdrop-blur-xl"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {serviceItems.map((service) => (
                          <Link
                            key={service.name}
                            to={service.path}
                            className="flex items-start p-3 rounded-xl hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors group"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                              {service.icon}
                            </div>
                            <div className="ml-3">
                              <div className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400">
                                {service.name}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">
                                {service.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* Theme Switcher */}
            <div className="relative" ref={themeMenuRef}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
                className="p-2.5 rounded-xl bg-white/80 dark:bg-gray-800/80 hover:bg-orange-50 dark:hover:bg-orange-900/30 transition-all duration-300 shadow-lg shadow-orange-500/10 border border-orange-100 dark:border-orange-800/30"
              >
                {theme === 'dark' ? (
                  <Moon className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                ) : (
                  <Sun className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                )}
              </motion.button>

              <AnimatePresence>
                {isThemeMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 rounded-2xl bg-white dark:bg-gray-800 shadow-2xl shadow-orange-500/10 border border-orange-100 dark:border-orange-800/30 overflow-hidden backdrop-blur-xl"
                  >
                    <div className="py-2">
                      {[
                        { key: 'light', icon: Sun, label: 'Light' },
                        { key: 'dark', icon: Moon, label: 'Dark' },
                        { key: 'system', icon: Monitor, label: 'System' }
                      ].map(({ key, icon: Icon, label }) => (
                        <button
                          key={key}
                          onClick={() => {
                            toggleTheme(key);
                            setIsThemeMenuOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left text-sm flex items-center space-x-3 transition-all duration-200 ${
                            theme === key
                              ? 'bg-gradient-to-r from-orange-500/10 to-amber-500/10 text-orange-600 dark:text-orange-400 border-r-2 border-orange-500'
                              : 'text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                          <span className="font-medium">{label}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Get Started Button - Desktop */}
            <Link
              to="/gate-placement"
              className="hidden md:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl shadow-orange-500/25"
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-white/80 dark:bg-gray-800/80 hover:bg-orange-50 dark:hover:bg-orange-900/30 transition-all duration-300 shadow-lg shadow-orange-500/10 border border-orange-100 dark:border-orange-800/30"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              ) : (
                <Menu className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-orange-200/30 dark:border-orange-800/30"
          >
            <div className="px-4 py-6 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-orange-500/10 to-amber-500/10 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div className="pt-4 border-t border-orange-200/30 dark:border-orange-800/30">
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 px-4 mb-3">Services</div>
                {serviceItems.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="flex items-center p-3 rounded-xl hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center text-white mr-3">
                      {service.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{service.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{service.description}</div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4">
                <Link
                  to="/gate-placement"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl text-center hover:from-orange-600 hover:to-amber-600 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;