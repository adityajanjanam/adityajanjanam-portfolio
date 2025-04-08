import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ThemeSwitcher = () => {
  const themes = [
    { name: 'purple', primary: 'from-purple-400 via-pink-500 to-purple-600' },
    { name: 'blue', primary: 'from-blue-400 via-indigo-500 to-blue-600' },
    { name: 'green', primary: 'from-green-400 via-emerald-500 to-green-600' },
    { name: 'orange', primary: 'from-orange-400 via-amber-500 to-orange-600' }
  ];

  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed right-6 bottom-6 flex gap-2"
    >
      {themes.map((theme) => (
        <motion.button
          key={theme.name}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentTheme(theme)}
          className={`w-8 h-8 rounded-full bg-gradient-to-r ${theme.primary}
                     ${currentTheme.name === theme.name ? 'ring-2 ring-white' : ''}`}
        />
      ))}
    </motion.div>
  );
};

export default ThemeSwitcher; 