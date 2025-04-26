import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/constants';
import { useTheme } from './Theme/ThemeContext';

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
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
          Projects
        </h2>
        <p className={`text-lg ${currentMode ? 'text-gray-400' : 'text-gray-700'}`}>
          Showcasing my technical expertise and creativity
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
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
          >
            {/* Background gradient effect */}
            <div className={`absolute inset-0 bg-gradient-to-br 
                          ${currentMode 
                            ? 'from-yellow-400/5 via-transparent to-transparent' 
                            : 'from-yellow-400/10 via-transparent to-transparent'}
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className={`text-2xl font-bold ${currentMode ? 'text-yellow-400' : 'text-yellow-600'} mb-2`}>
                    {project.title}
                  </h3>
                  <p className={`text-sm ${currentMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.type}
                  </p>
                </div>
                <span className={`text-4xl ${currentMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.image}
                </span>
              </div>

              <p className={`${currentMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className={`text-lg font-semibold ${currentMode ? 'text-gray-300' : 'text-gray-700'} mb-3`}>
                  Key Features
                </h4>
                <div className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.2) + (idx * 0.1) }}
                      className="flex items-center gap-2"
                    >
                      <span className={`${currentMode ? 'text-yellow-400' : 'text-yellow-600'}`}>•</span>
                      <span className={`${currentMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {highlight}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className={`text-lg font-semibold ${currentMode ? 'text-gray-300' : 'text-gray-700'} mb-3`}>
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
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
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-block px-4 py-2 rounded-lg text-sm font-medium
                         ${currentMode
                           ? 'bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20'
                           : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'}
                         transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 