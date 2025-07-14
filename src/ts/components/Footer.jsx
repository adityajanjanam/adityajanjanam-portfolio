import React from "react";
import { motion } from "framer-motion";

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`py-8 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <p className="text-sm">© {currentYear} All rights reserved.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6"
          >
            <a
              href="#contact"
              className={`hover:text-yellow-400 transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              Contact
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-yellow-400 transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              Resume
            </a>
            <a
              href="#top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={`hover:text-yellow-400 transition-colors duration-300 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              Back to top
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
