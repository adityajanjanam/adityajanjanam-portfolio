import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../types/skills';

interface SkillsChartProps {
  skills: Skill[];
  isDarkMode: boolean;
}

const SkillsChart: React.FC<SkillsChartProps> = ({ skills, isDarkMode }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`p-6 rounded-lg ${
            isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
          }`}
        >
          <h3 className={`text-xl font-semibold mb-2 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {skill.name}
          </h3>
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <span className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full ${
                isDarkMode ? 'text-blue-300 bg-blue-900/30' : 'text-blue-600 bg-blue-200'
              }`}>
                {skill.level}%
              </span>
            </div>
            <div className={`overflow-hidden h-2 mb-4 text-xs flex rounded ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
            }`}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${
                  isDarkMode ? 'bg-blue-500' : 'bg-blue-600'
                }`}
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsChart; 