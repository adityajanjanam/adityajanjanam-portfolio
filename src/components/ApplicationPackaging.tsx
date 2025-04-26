import React from 'react';
import { motion } from 'framer-motion';
import { technologies } from '../data/constants';
import { useTheme } from './Theme/ThemeContext';

interface ApplicationPackagingProps {
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
}

const ApplicationPackaging: React.FC<ApplicationPackagingProps> = ({ setActiveTab, isDarkMode }) => {
  const { isDarkMode: themeIsDark } = useTheme();
  const currentMode = isDarkMode ?? themeIsDark;
  const appPackagingTech = technologies.applicationPackaging;

  return (
    <div className={`max-w-full mx-auto px-6 sm:px-8 lg:px-12 py-16 ${currentMode ? 'bg-[#080808] text-gray-200' : 'bg-white text-gray-900'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className={`text-3xl sm:text-4xl font-bold ${currentMode ? 'text-yellow-400' : 'text-yellow-600'} mb-3`}>
          Application Packaging
        </h2>
        <p className={`text-lg ${currentMode ? 'text-gray-400' : 'text-gray-700'}`}>
          Enterprise software deployment and management expertise
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {appPackagingTech.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative p-6 rounded-2xl overflow-hidden group
                     ${currentMode 
                       ? 'bg-[#1a1a1a] border-gray-700' 
                       : 'bg-white border-gray-200 shadow-lg'}
                     hover:border-gray-600 transition-all duration-300`}
          >
            {/* Background gradient effect */}
            <div className={`absolute inset-0 bg-gradient-to-br 
                          ${currentMode 
                            ? 'from-yellow-400/5 via-transparent to-transparent' 
                            : 'from-yellow-400/10 via-transparent to-transparent'}
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            <div className="relative z-10 flex items-center gap-4">
              <span className="text-4xl">{tech.icon}</span>
              <div>
                <h3 className={`text-xl font-semibold ${currentMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                  {tech.name}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        onClick={() => setActiveTab('experience')}
        className={`mt-12 mx-auto block px-6 py-3 rounded-lg text-sm font-medium
                 ${currentMode
                   ? 'bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20'
                   : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'}
                 transition-all duration-300`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        View Full Experience
      </motion.button>
    </div>
  );
};

export default ApplicationPackaging; 