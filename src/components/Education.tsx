import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/constants';

interface EducationProps {
  isDarkMode: boolean;
}

export const Education: React.FC<EducationProps> = ({ isDarkMode }) => {
  return (
    <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 ${isDarkMode ? 'bg-[#080808] text-gray-200' : 'bg-white text-gray-900'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className={`text-3xl sm:text-4xl font-bold ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'} mb-3`}>
          Education
        </h2>
        <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
          Academic journey and professional development
        </p>
      </motion.div>

      <div className="space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`relative p-6 rounded-2xl overflow-hidden group
                     ${isDarkMode 
                       ? 'bg-[#1a1a1a] border-gray-700' 
                       : 'bg-white border-gray-200 shadow-lg'}
                     hover:border-gray-600 transition-all duration-300`}
            role="article"
            aria-label={`${edu.program} at ${edu.institution}`}
          >
            {/* Background gradient effect */}
            <div className={`absolute inset-0 bg-gradient-to-br 
                          ${isDarkMode 
                            ? 'from-yellow-400/5 via-transparent to-transparent' 
                            : 'from-yellow-400/10 via-transparent to-transparent'}
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'} mb-2`}>
                    {edu.program}
                  </h3>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {edu.institution}
                  </p>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {edu.period} • {edu.type}
                  </p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  {edu.Grade && (
                    <p className={`${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'} font-semibold text-sm mt-1`}>
                      Grade: {edu.Grade}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                  Key Courses
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {edu.courses.map((course, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.2) + (idx * 0.1) }}
                      className={`flex items-center gap-2 p-3 rounded-lg
                               ${isDarkMode 
                                 ? 'bg-gray-900 border-gray-700' 
                                 : 'bg-gray-50 border-gray-200'}
                               hover:border-gray-600 transition-all duration-300`}
                      role="listitem"
                    >
                      <span className={`${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>•</span>
                      <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>
                        {course}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}; 