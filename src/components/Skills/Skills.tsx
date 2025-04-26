import React from 'react';
import { motion } from 'framer-motion';
import SkillsChart from './SkillsChart';
import { useTheme } from '../Theme/ThemeContext';
import { BaseComponentProps } from '../../types';
import { Skill } from '../../types/skills';

const Skills: React.FC<BaseComponentProps> = ({ setActiveTab }) => {
  const { isDarkMode } = useTheme();

  const skills: Skill[] = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'SQL', level: 75 },
    { name: 'AWS', level: 65 },
    { name: 'Docker', level: 60 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Technical Skills
          </h2>
          <p className={`text-lg ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here's a visualization of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <SkillsChart skills={skills} isDarkMode={isDarkMode} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`p-6 rounded-lg ${
                isDarkMode
                  ? 'bg-gray-800 shadow-blue-500/20'
                  : 'bg-white shadow-lg'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {skill.name}
              </h3>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${
                      isDarkMode
                        ? 'text-blue-300 bg-blue-900/30'
                        : 'text-blue-600 bg-blue-200'
                    }`}>
                      {skill.level}%
                    </span>
                  </div>
                </div>
                <div className={`overflow-hidden h-2 mb-4 text-xs flex rounded ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                }`}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                      isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 