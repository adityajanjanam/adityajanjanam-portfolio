import React from 'react';
import { motion } from 'framer-motion';
import { experiences, Experience as ExperienceType } from '../data/constants';
import { useTheme } from './Theme/ThemeContext';

interface ExperienceProps {
  isDarkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ isDarkMode }) => {
  const { isDarkMode: themeIsDark } = useTheme();
  const currentMode = isDarkMode ?? themeIsDark;

  return (
    <div className={`max-w-full mx-auto px-6 sm:px-8 lg:px-12 py-16 ${currentMode ? 'bg-[#080808] text-gray-200' : 'bg-white text-gray-900'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className={`text-3xl sm:text-4xl font-bold ${currentMode ? 'text-yellow-400' : 'text-yellow-600'} mb-3`}>
          Experience
        </h2>
        <p className={`text-lg ${currentMode ? 'text-gray-400' : 'text-gray-700'}`}>
          Professional journey and achievements
        </p>
      </motion.div>

      <div className="space-y-8">
        {experiences.map((exp: ExperienceType, index: number) => (
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
            aria-label={`${exp.title} at ${exp.company}`}
          >
            {/* Background gradient effect */}
            <div className={`absolute inset-0 bg-gradient-to-br 
                          ${currentMode 
                            ? 'from-yellow-400/5 via-transparent to-transparent' 
                            : 'from-yellow-400/10 via-transparent to-transparent'}
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className={`text-2xl font-bold ${currentMode ? 'text-yellow-400' : 'text-yellow-600'} mb-2`}>
                    {exp.title}
                  </h3>
                  <p className={`text-lg ${currentMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {exp.company}
                  </p>
                  <p className={`${currentMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {exp.date} • {exp.location}
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className={`text-4xl ${currentMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {exp.logo}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <h4 className={`text-lg font-semibold ${currentMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                  Key Responsibilities & Achievements
                </h4>
                <div className="space-y-3">
                  {exp.description.map((desc: string, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.2) + (idx * 0.1) }}
                      className={`flex items-start gap-2 p-3 rounded-lg
                               ${currentMode
                                 ? 'bg-gray-900 border-gray-700 hover:bg-gray-800'
                                 : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}
                               transition-all duration-300`}
                    >
                      <span className={`${currentMode ? 'text-yellow-400' : 'text-yellow-600'} mt-1`}>•</span>
                      <span className={`${currentMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {desc}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6">
                  <h4 className={`text-lg font-semibold ${currentMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                    Skills Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill: string, idx: number) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (index * 0.2) + (idx * 0.1) }}
                        className={`px-3 py-1 rounded-full text-sm
                                ${currentMode
                                  ? 'bg-yellow-400/10 text-yellow-400'
                                  : 'bg-yellow-100 text-yellow-800'}
                                transition-all duration-300`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience; 