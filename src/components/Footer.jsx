import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  BookOpen, 
  Target, 
  Users, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'College Notes', path: '/courses' },
    { name: 'GATE Prep', path: '/gate-placement' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const resources = [
    { name: 'Study Materials', path: '/gate-placement' },
    { name: 'Mock Tests', path: '/gate-placement' },
    { name: 'Previous Papers', path: '/gate-placement' },
    { name: 'Roadmaps', path: '/gate-placement' },
    { name: 'Cheat Sheets', path: '/gate-placement' },
  ];

  const subjects = [
    { name: 'Computer Science', path: '/gate-placement' },
    { name: 'Electronics', path: '/gate-placement' },
    { name: 'Mechanical', path: '/gate-placement' },
    { name: 'Electrical', path: '/gate-placement' },
    { name: 'Civil', path: '/gate-placement' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'GitHub', icon: Github, url: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-t border-orange-200 dark:border-gray-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="flex items-center group mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-orange-500/25 transition-all duration-300 mr-3">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 dark:from-orange-400 dark:via-amber-400 dark:to-orange-400">
                ColleGPT
              </span>
            </Link>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Empowering students with AI-driven learning solutions. Your gateway to academic excellence and career success.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail className="w-5 h-5 text-orange-500 mr-3" />
                <span>support@collegpt.com</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone className="w-5 h-5 text-orange-500 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5 text-orange-500 mr-3" />
                <span>123 AI Street, Tech City</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <BookOpen className="w-5 h-5 text-orange-500 mr-2" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 mr-2" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Target className="w-5 h-5 text-orange-500 mr-2" />
              Resources
            </h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    to={resource.path}
                    className="text-gray-600 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 mr-2" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{resource.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* GATE Subjects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Users className="w-5 h-5 text-orange-500 mr-2" />
              GATE Subjects
            </h3>
            <ul className="space-y-3">
              {subjects.map((subject) => (
                <li key={subject.name}>
                  <Link
                    to={subject.path}
                    className="text-gray-600 hover:text-orange-500 dark:text-gray-300 dark:hover:text-orange-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 mr-2" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{subject.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="mt-12 pt-8 border-t border-orange-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Stay Updated</h3>
              <p className="text-gray-600 dark:text-gray-400">Get the latest GATE updates and study tips directly in your inbox.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl border border-orange-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>

        {/* Social Links & Copyright */}
        <motion.div
          className="mt-8 pt-8 border-t border-orange-200 dark:border-gray-700 flex flex-col sm:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500 dark:text-gray-400 dark:hover:text-white transition-all duration-300 transform hover:scale-110 border border-orange-200 dark:border-gray-700"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          <div className="text-center text-gray-500 dark:text-gray-400">
            <p>© {currentYear} ColleGPT. All rights reserved. Made with ❤️ for students.</p>
          </div>
      </motion.div>
      </div>

    </footer>
  );
};

export default Footer;