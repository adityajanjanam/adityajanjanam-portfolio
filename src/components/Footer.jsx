/* eslint-disable */
import { motion } from "framer-motion";
import * as React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import { trackSocialClick } from "../utils/analytics";

import LinktreeIcon from "./LinktreeIcon";

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
      className={`relative py-20 overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-300"
          : "bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 text-gray-800"
      }`}
    >
      {/* Modern Curved Top Wave */}
      <div className="absolute top-0 left-0 w-full h-32 z-0 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,60 C360,0 720,120 1440,60 L1440,0 L0,0 Z"
            fill={isDarkMode ? 'url(#footerWaveDark)' : 'url(#footerWaveLight)'}
            opacity="0.7"
          />
          <defs>
            <linearGradient id="footerWaveDark" x1="0" y1="0" x2="1440" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" />
              <stop offset="0.5" stopColor="#1D4ED8" />
              <stop offset="1" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient id="footerWaveLight" x1="0" y1="0" x2="1440" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60A5FA" />
              <stop offset="0.5" stopColor="#3B82F6" />
              <stop offset="1" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className={`absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-gradient-to-br from-blue-500 to-cyan-500" : "bg-gradient-to-br from-blue-400 to-cyan-400"
          }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className={`absolute -bottom-20 -left-20 w-[450px] h-[450px] rounded-full blur-3xl opacity-15 ${
            isDarkMode ? "bg-gradient-to-br from-cyan-500 to-blue-600" : "bg-gradient-to-br from-blue-400 to-indigo-500"
          }`}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section with Modern Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className={`p-8 rounded-3xl backdrop-blur-xl border shadow-2xl ${
              isDarkMode 
                ? "bg-gradient-to-br from-blue-900/30 via-gray-900/50 to-gray-900/30 border-blue-500/30" 
                : "bg-gradient-to-br from-white/90 via-blue-50/70 to-white/90 border-blue-300/40"
            }`}>
              <motion.div
                className="mb-5"
                whileHover={{ scale: 1.02 }}
              >
                <h3
                  className={`text-3xl font-extrabold ${isDarkMode ? '' : 'text-blue-900'}`}
                  style={isDarkMode ? {
                    background: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 50%, #06B6D4 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent',
                    WebkitTextFillColor: 'transparent',
                  } : {}}
                >
                  Aditya Janjanam
                </h3>
              </motion.div>
              <p
                className={`text-sm leading-relaxed mb-6 font-medium ${
                  isDarkMode ? "text-gray-200" : "text-gray-700"
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
                    whileHover={{ scale: 1.15, rotate: 5, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative p-3 rounded-xl transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gray-800/50 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-600 text-gray-300 hover:text-white backdrop-blur-md border border-gray-700/50 hover:border-blue-400 shadow-lg hover:shadow-blue-500/50"
                        : "bg-white/80 hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-600 text-gray-700 hover:text-white backdrop-blur-md border border-gray-300 hover:border-blue-400 shadow-md hover:shadow-blue-500/40"
                    }`}
                    title={link.name}
                  >
                    <span className="text-xl relative z-10">{link.icon}</span>
                    <span className={`absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${
                      isDarkMode ? "bg-gray-700 text-gray-200" : "bg-gray-800 text-white"
                    }`}>
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links - Modern Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`p-7 rounded-3xl backdrop-blur-xl shadow-2xl border ${
              isDarkMode 
                ? "bg-gradient-to-br from-gray-900/60 via-purple-900/20 to-gray-900/60 border-purple-500/30 hover:border-purple-400/50" 
                : "bg-gradient-to-br from-white/90 via-purple-50/50 to-white/90 border-purple-300/40 hover:border-purple-400/60"
            } transition-all duration-300 hover:scale-[1.02]`}
          >
            <h4
              className={`text-xl font-extrabold mb-5 flex items-center gap-3 ${
                isDarkMode ? "text-purple-200" : "text-purple-900"
              }`}
              style={{
                textShadow: isDarkMode ? '0 2px 10px rgba(192, 132, 252, 0.4)' : 'none',
              }}
            >
              <span className="text-2xl">🔗</span>
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
                    className={`group flex items-center gap-2 text-sm font-medium bg-transparent border-none outline-none cursor-pointer transition-all duration-300 ${
                      activeTab === link.tab
                        ? isDarkMode
                          ? "text-blue-200 font-bold"
                          : "text-blue-900 font-bold"
                        : isDarkMode
                          ? "text-gray-100 hover:text-blue-200"
                          : "text-gray-700 hover:text-blue-900"
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

          {/* Contact Info - Modern Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`p-7 rounded-3xl backdrop-blur-xl shadow-2xl border ${
              isDarkMode 
                ? "bg-gradient-to-br from-gray-900/60 via-purple-900/20 to-gray-900/60 border-purple-500/30 hover:border-purple-400/50" 
                : "bg-gradient-to-br from-white/90 via-purple-50/50 to-white/90 border-purple-300/40 hover:border-purple-400/60"
            } transition-all duration-300 hover:scale-[1.02]`}
          >
            <h4
              className={`text-xl font-extrabold mb-5 flex items-center gap-3 ${
                isDarkMode ? "text-purple-200" : "text-purple-900"
              }`}
              style={{
                textShadow: isDarkMode ? '0 2px 10px rgba(192, 132, 252, 0.4)' : 'none',
              }}
            >
              <span className="text-2xl">💬</span>
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <motion.p
                whileHover={{ x: 5 }}
                className={`flex items-center gap-3 font-medium ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                <span className="text-lg">📧</span>
                <a
                  href="mailto:janjanamaditya@gmail.com"
                  className={`hover:underline transition-colors ${
                    isDarkMode ? "hover:text-purple-400" : "hover:text-purple-600"
                  }`}
                >
                  janjanamaditya@gmail.com
                </a>
              </motion.p>
              <motion.p
                whileHover={{ x: 5 }}
                className={`flex items-center gap-3 font-medium ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
                }`}
              >
                <span className="text-lg">📍</span>
                <a
                  href="https://www.google.com/maps/place/Canada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:underline transition-colors ${
                    isDarkMode ? "hover:text-purple-400" : "hover:text-purple-600"
                  }`}
                >
                  Canada
                </a>
              </motion.p>
              <motion.p
                whileHover={{ x: 5 }}
                className={`flex items-center gap-3 font-medium ${
                  isDarkMode ? "text-gray-100" : "text-gray-900"
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

        {/* Modern Bottom Bar with Gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`pt-10 mt-10 border-t-2 ${
            isDarkMode ? "border-purple-500/30" : "border-purple-300/40"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.p
              whileHover={{ scale: 1.02 }}
              className={`text-sm flex items-center gap-2 font-medium ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              <span className="text-base">©</span>
              {currentYear} Aditya Janjanam. All rights reserved.
            </motion.p>
            
            {/* Visitor counter removed per request */}
            
            <motion.p
              whileHover={{ scale: 1.02 }}
              className={`text-sm flex items-center gap-2 flex-wrap justify-center font-medium ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
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
                  ? "bg-purple-500/20 text-purple-400 border border-purple-500/30" 
                  : "bg-purple-100 text-purple-700 border border-purple-200"
              }`}>
                React
              </span>
              <span>&</span>
              <span className={`px-2 py-1 rounded-md text-xs font-semibold ${
                isDarkMode 
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" 
                  : "bg-cyan-100 text-cyan-700 border border-cyan-200"
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
              Version <span className={`font-bold text-lg ${
                isDarkMode ? "text-purple-200" : "text-purple-900"
              }`}>2.0</span>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
