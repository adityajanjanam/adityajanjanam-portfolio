import { motion } from "framer-motion";
import * as React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import { trackSocialClick } from "../utils/analytics";

import LinktreeIcon from "./LinktreeIcon";
import { VisitorCounter } from "./VisitorCounter";

const Footer = ({ isDarkMode, setActiveTab, activeTab }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/adityajanjanam",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/janjanamaditya",
      icon: <FaLinkedin />,
    },
    {
      name: "Email",
      url: "mailto:janjanamaditya@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      name: "Linktree",
      url: "https://linktr.ee/adityajanjanam",
      icon: <LinktreeIcon />,
    },
  ];

  // Use tab names for navigation
  const quickLinks = [
    { name: "Home", tab: "home" },
    { name: "Experience", tab: "experience" },
    { name: "Projects", tab: "projects" },
    { name: "Education", tab: "education" },
    { name: "Certifications", tab: "certifications" },
    { name: "Honors & Awards", tab: "honors-awards" },
    { name: "Volunteering", tab: "volunteering" },
  ];

  const handleQuickLinkClick = (tabId) => {
    // Scroll to top immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Change the tab
    setActiveTab(tabId);
  };

  return (
    <footer
      className={`relative w-full min-h-[320px] md:min-h-[360px] py-10 md:py-12 border-t ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-700"
      } ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
        <div className={`absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-10 ${
          isDarkMode ? "bg-cyan-500" : "bg-blue-400"
        }`}></div>
        <div className={`absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-3xl opacity-10 ${
          isDarkMode ? "bg-purple-500" : "bg-purple-400"
        }`}></div>
      </div>

      

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <motion.h3
              className={`text-2xl font-bold mb-2 bg-clip-text text-transparent ${
                isDarkMode 
                  ? "bg-gradient-to-r from-cyan-400 to-blue-500" 
                  : "bg-gradient-to-r from-blue-600 to-purple-600"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              Aditya Janjanam
            </motion.h3>
            <p
              className={`text-sm leading-relaxed mb-3 max-w-md ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Full Stack Developer & Mobile Application Developer passionate
              about creating innovative solutions. Specialized in React,
              Node.js, and mobile development with a focus on user experience
              and performance.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackSocialClick(link.name)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative p-2.5 rounded-xl transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gray-800/50 hover:bg-gradient-to-br hover:from-cyan-600 hover:to-blue-600 text-gray-300 hover:text-white backdrop-blur-sm border border-gray-700 hover:border-cyan-500"
                      : "bg-white/70 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 text-gray-600 hover:text-white backdrop-blur-sm border border-gray-200 hover:border-blue-500 shadow-sm hover:shadow-lg"
                  }`}
                  title={link.name}
                >
                  <span className="text-lg relative z-10">{link.icon}</span>
                  {/* Tooltip */}
                  <span className={`absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${
                    isDarkMode ? "bg-gray-700 text-gray-200" : "bg-gray-800 text-white"
                  }`}>
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`p-5 rounded-2xl backdrop-blur-sm ${
              isDarkMode 
                ? "bg-gray-800/30 border border-gray-700/50" 
                : "bg-white/50 border border-gray-200/50 shadow-sm"
            }`}
          >
            <h4
              className={`text-lg font-bold mb-4 flex items-center gap-2 ${
                isDarkMode ? "text-cyan-300" : "text-blue-700"
              }`}
            >
              <span className="text-xl">🔗</span>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <button
                    type="button"
                    onClick={() => handleQuickLinkClick(link.tab)}
                    className={`group flex items-center gap-2 text-sm bg-transparent border-none outline-none cursor-pointer transition-all duration-300 ${
                      activeTab === link.tab
                        ? isDarkMode
                          ? "text-cyan-400 font-semibold"
                          : "text-blue-600 font-semibold"
                        : isDarkMode
                          ? "text-gray-400 hover:text-cyan-400"
                          : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    <span className={`transition-transform group-hover:translate-x-1 ${
                      activeTab === link.tab ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}>→</span>
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`p-5 rounded-2xl backdrop-blur-sm ${
              isDarkMode 
                ? "bg-gray-800/30 border border-gray-700/50" 
                : "bg-white/50 border border-gray-200/50 shadow-sm"
            }`}
          >
            <h4
              className={`text-lg font-bold mb-4 flex items-center gap-2 ${
                isDarkMode ? "text-cyan-300" : "text-blue-700"
              }`}
            >
              <span className="text-xl">💬</span>
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <motion.p
                whileHover={{ x: 5 }}
                className={`flex items-center gap-3 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <span className="text-lg">📧</span>
                <a
                  href="mailto:janjanamaditya@gmail.com"
                  className={`hover:underline transition-colors ${
                    isDarkMode ? "hover:text-cyan-400" : "hover:text-blue-600"
                  }`}
                >
                  janjanamaditya@gmail.com
                </a>
              </motion.p>
              <motion.p
                whileHover={{ x: 5 }}
                className={`flex items-center gap-3 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <span className="text-lg">📍</span>
                <a
                  href="https://www.google.com/maps/place/Waterloo,+ON"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:underline transition-colors ${
                    isDarkMode ? "hover:text-cyan-400" : "hover:text-blue-600"
                  }`}
                >
                  Waterloo, Canada
                </a>
              </motion.p>
              <motion.p
                whileHover={{ x: 5 }}
                className={`flex items-center gap-3 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <span className="text-lg">💼</span>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  isDarkMode 
                    ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                    : "bg-green-100 text-green-700 border border-green-200"
                }`}>
                  Available for opportunities
                </span>
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`pt-6 border-t ${
            isDarkMode ? "border-gray-700/50" : "border-gray-300/50"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              whileHover={{ scale: 1.02 }}
              className={`text-sm flex items-center gap-2 ${
                isDarkMode ? "text-gray-500" : "text-gray-600"
              }`}
            >
              <span className="text-base">©</span>
              {currentYear} Aditya Janjanam. All rights reserved.
            </motion.p>
            
            <VisitorCounter isDarkMode={isDarkMode} />
            
            <motion.p
              whileHover={{ scale: 1.02 }}
              className={`text-sm flex items-center gap-2 flex-wrap justify-center ${
                isDarkMode ? "text-gray-500" : "text-gray-600"
              }`}
            >
              <span>Built with</span>
              <motion.span 
                className="text-red-500 text-base"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
              >
                ❤️
              </motion.span>
              <span>using</span>
              <span className={`px-2 py-1 rounded-md text-xs font-semibold ${
                isDarkMode 
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" 
                  : "bg-blue-100 text-blue-700 border border-blue-200"
              }`}>
                React
              </span>
              <span>&</span>
              <span className={`px-2 py-1 rounded-md text-xs font-semibold ${
                isDarkMode 
                  ? "bg-purple-500/20 text-purple-400 border border-purple-500/30" 
                  : "bg-purple-100 text-purple-700 border border-purple-200"
              }`}>
                Tailwind CSS
              </span>
            </motion.p>
            
            <motion.p
              whileHover={{ scale: 1.05 }}
              className={`text-xs flex items-center gap-2 ${
                isDarkMode ? "text-gray-500" : "text-gray-600"
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${
                isDarkMode ? "bg-green-400" : "bg-green-500"
              } animate-pulse`}></span>
              Version <span className={`font-bold ${
                isDarkMode ? "text-cyan-400" : "text-blue-600"
              }`}>1.2</span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
