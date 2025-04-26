import React from 'react';
import { motion } from 'framer-motion';

const TechGrid = ({ setActiveTab, isDarkMode }) => {
  const technologies = {
    fullStack: [
      { name: 'React.js', icon: '⚛️' }, { name: 'Node.js', icon: '🌐' },
      { name: 'Express', icon: '🚀' }, { name: 'MongoDB', icon: '🍃' },
      { name: 'EJS', icon: '📝' }
    ],
    desktop: [
      { name: '.NET', icon: '🎯' }, { name: 'C#', icon: '🔷' },
      { name: 'WPF', icon: '🖥️' }, { name: 'WinForms', icon: '🪟' }
    ],
    mobile: [
      { name: 'Flutter', icon: '📱' }, { name: 'React Native', icon: '⚛️' },
      { name: 'Android/Kotlin', icon: '🤖' }, { name: 'iOS/Swift', icon: '🍎' }
    ],
    web: [
      { name: 'HTML', icon: '🌐' }, { name: 'CSS', icon: '🎨' },
      { name: 'JavaScript', icon: '📜' }, { name: 'ASP.NET MVC', icon: '🔷' }
    ],
    testing: [
      { name: 'Manual Testing', icon: '🔍' }, { name: 'Selenium', icon: '🧪' },
      { name: 'Java', icon: '☕' }, { name: 'Postman', icon: '📮' }
    ],
    applicationPackaging: [
      { name: 'MSI/MSIX', icon: '📦' },
      { name: 'PowerShell', icon: '💻' },
      { name: 'SCCM/MECM', icon: '🔄' },
      { name: 'Intune', icon: '☁️' }
    ]
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
      {Object.entries(technologies).map(([category, items]) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`p-6 rounded-lg shadow-lg ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}
        >
          <h3 className="text-xl font-bold mb-4 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
          <div className="grid grid-cols-2 gap-4">
            {items.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center space-x-2 p-2 rounded ${
                  isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <span className="text-2xl">{item.icon}</span>
                <span>{item.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechGrid; 