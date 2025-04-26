import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../../data/constants';
// import { useTheme } from '../Theme/ThemeContext'; // Uncomment if context is used

interface EducationProps {
  isDarkMode?: boolean;
}

const Education: React.FC<EducationProps> = ({ isDarkMode }) => {
  // const { isDarkMode: themeIsDark } = useTheme(); // Uncomment if context is used
  // const currentMode = isDarkMode ?? themeIsDark; // Uncomment if context is used
  const currentMode = isDarkMode ?? false;

  return (
    <div 
      data-testid="education-container"
      className={`max-w-full mx-auto px-6 sm:px-8 lg:px-12 py-16 ${currentMode ? 'bg-[#080808] text-gray-200' : 'bg-white text-gray-900'}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className={`text-3xl sm:text-4xl font-bold ${currentMode ? 'text-indigo-400' : 'text-indigo-600'} mb-3`}>
          Education
        </h2>
        <p className={`text-lg ${currentMode ? 'text-gray-400' : 'text-gray-700'}`}>
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
                     ${currentMode 
                       ? 'bg-[#1a1a1a] border-gray-700' 
                       : 'bg-white border-gray-200 shadow-lg'}
                     hover:border-gray-600 transition-all duration-300`}
            role="article"
            aria-label={`${edu.program} at ${edu.institution}`}
          >
            {/* Background gradient effect */}
            <div className={`absolute inset-0 bg-gradient-to-br 
                          ${currentMode 
                            ? 'from-yellow-400/5 via-transparent to-transparent' 
                            : 'from-yellow-400/10 via-transparent to-transparent'}
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            <motion.div className="relative z-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex items-center gap-3 mb-2 md:mb-0">
                  {/* Icon/Logo Avatar */}
                  {edu.logo && (
                    <span className={`flex items-center justify-center w-12 h-12 rounded-full shadow-lg ring-2 ${currentMode ? 'ring-indigo-400/60 bg-[#232323]' : 'ring-indigo-400/60 bg-gray-100'} text-3xl mr-2`}>
                      {edu.logo}
                    </span>
                  )}
                  <div>
                    <h3 className={`text-2xl font-bold ${currentMode ? 'text-indigo-400' : 'text-indigo-600'} mb-1`}>{edu.program}</h3>
                    <p className={`text-lg ${currentMode ? 'text-gray-300' : 'text-gray-700'}`}>{edu.institution}</p>
                    <p className={`text-sm ${currentMode ? 'text-gray-400' : 'text-gray-600'}`}>{edu.period} • {edu.type}</p>
                  </div>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  {edu.Grade && (
                    <p className={`${currentMode ? 'text-indigo-400' : 'text-indigo-600'} font-semibold text-sm mt-1`}>
                      Grade: {edu.Grade}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                {edu.courses && (
                  <>
                    <h4 className={`text-lg font-semibold ${currentMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>Key Courses</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 overflow-x-auto mb-2">
                      {edu.courses.map((course, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.2) + (idx * 0.1) }}
                          className={`flex items-center gap-2 p-3 rounded-lg border-l-4 ${currentMode ? 'bg-gray-900 border-gray-700 hover:bg-gray-800' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'} transition-all duration-300 max-w-full`}
                          role="listitem"
                        >
                          <span className={`${currentMode ? 'text-indigo-400' : 'text-indigo-600'} text-lg`}>📚</span>
                          <span className={`${currentMode ? 'text-gray-300' : 'text-gray-700'} text-sm max-w-full`}>
                            {course}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </>
                )}
                <ul className="list-disc pl-5 mb-2 space-y-1">
                  {edu.description.map((desc, i) => (
                    <li key={i} className={`text-base ${currentMode ? 'text-gray-300' : 'text-gray-700'}`}>{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${currentMode ? 'bg-indigo-400/10 text-indigo-400' : 'bg-indigo-100 text-indigo-800'}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education; 