import { motion } from "framer-motion";
import * as React from "react";
import { FaEnvelope, FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";

import VisitorCounter from "./VisitorCounter";

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
      name: "Portfolio",
      url: "https://adityajanjanam.com",
      icon: <FaGlobe />,
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

  return (
    <footer
      className={`py-6 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 to-black text-gray-300 border-t border-gray-800"
          : "bg-gradient-to-br from-gray-50 to-white text-gray-700 border-t border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h3
              className={`text-xl font-bold mb-2 ${
                isDarkMode ? "text-cyan-400" : "text-blue-600"
              }`}
            >
              Aditya Janjanam
            </h3>
            <p
              className={`text-sm leading-relaxed mb-2 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Full Stack Developer & Mobile Application Developer passionate
              about creating innovative solutions. Specialized in React,
              Node.js, and mobile development with a focus on user experience
              and performance.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                    isDarkMode
                      ? "bg-gray-800 hover:bg-cyan-600 text-gray-300 hover:text-white"
                      : "bg-gray-200 hover:bg-blue-600 text-gray-600 hover:text-white"
                  }`}
                  title={link.name}
                >
                  <span className="text-lg">{link.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4
              className={`text-lg font-semibold mb-2 ${
                isDarkMode ? "text-cyan-300" : "text-blue-700"
              }`}
            >
              Quick Links
            </h4>
            <ul className="space-y-1">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveTab(link.tab)}
                    className={`text-sm bg-transparent border-none outline-none cursor-pointer hover:underline transition-colors duration-300 ${
                      activeTab === link.tab
                        ? isDarkMode
                          ? "text-cyan-400"
                          : "text-blue-600"
                        : isDarkMode
                          ? "text-gray-400 hover:text-cyan-400"
                          : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
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
          >
            <h4
              className={`text-lg font-semibold mb-2 ${
                isDarkMode ? "text-cyan-300" : "text-blue-700"
              }`}
            >
              Contact
            </h4>
            <div className="space-y-1 text-sm">
              <p
                className={`flex items-center gap-2 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <span>📧</span>
                <a
                  href="mailto:janjanamaditya@gmail.com"
                  className="hover:underline"
                >
                  janjanamaditya@gmail.com
                </a>
              </p>
              <p
                className={`flex items-center gap-2 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <span>📍</span>
                <span>
                  <a
                    href="https://www.google.com/maps/place/Waterloo,+ON"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Waterloo, Canada
                  </a>
                </span>
              </p>
              <p
                className={`flex items-center gap-2 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <span>💼</span>
                <span>Available for opportunities</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`pt-4 border-t ${
            isDarkMode ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p
              className={`text-sm ${
                isDarkMode ? "text-gray-500" : "text-gray-600"
              }`}
            >
              © {currentYear} Aditya Janjanam. All rights reserved.
            </p>
            <VisitorCounter isDarkMode={isDarkMode} />
            <p
              className={`text-sm mt-2 md:mt-0 ${
                isDarkMode ? "text-gray-500" : "text-gray-600"
              }`}
            >
              Built with ❤️ using React & Tailwind CSS
            </p>
            <p
              className={`text-xs mt-2 md:mt-0 ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}
            >
              Portfolio Version: <span className="font-semibold">V 1.1</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
