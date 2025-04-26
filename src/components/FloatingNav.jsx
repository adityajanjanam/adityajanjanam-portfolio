import React from 'react';
import { motion } from 'framer-motion';

const FloatingNav = ({ activeTab, setActiveTab, isDarkMode }) => {
  const tabs = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'application-packaging', label: 'App Packaging' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      } rounded-full shadow-lg`}
    >
      <div className="flex space-x-1 p-2">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? isDarkMode
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-500 text-white'
                : isDarkMode
                ? 'text-gray-300 hover:bg-gray-700'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export default FloatingNav; 