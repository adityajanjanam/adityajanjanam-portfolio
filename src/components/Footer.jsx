import React from 'react';
import { motion } from 'framer-motion';

const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <p className="text-sm">
              © {currentYear} Aditya Janjanam. All rights reserved.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            <a
              href="https://github.com/adityajanjanam"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-blue-500 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/adityajanjanam"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:text-blue-500 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              LinkedIn
            </a>
            <a
              href="mailto:adityajanjanam@gmail.com"
              className={`hover:text-blue-500 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Email
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 