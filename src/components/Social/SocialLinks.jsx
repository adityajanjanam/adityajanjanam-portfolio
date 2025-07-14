import React from 'react';
import { motion } from 'framer-motion';

export const SocialLinks = () => {
  const socialLinks = [
    // ... your social links data
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="hidden md:flex fixed left-6 bottom-0 flex-col items-center space-y-3 z-50 bg-gray-900/70 border border-gray-800 shadow-xl rounded-2xl p-2"
    >
      <div className="flex flex-col space-y-2">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, x: 5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index }}
            className={`text-gray-400 ${social.color} transition-all duration-300 
              bg-gray-900/50 backdrop-blur-sm p-2 rounded-lg 
              hover:bg-gray-800/80 hover:shadow-xl hover:scale-110 hover:brightness-125 hover:ring-2 hover:ring-purple-500/30
              group relative focus:outline-none focus:ring-2 focus:ring-purple-500/50`}
            title={social.name}
          >
            {React.cloneElement(social.icon, { className: 'w-7 h-7' })}
            <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-xs rounded-md
              opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {social.name}
            </span>
          </motion.a>
        ))}
      </div>
      <motion.div 
        className="w-[2px] h-24 bg-gradient-to-b from-purple-500/50 to-transparent"
        initial={{ height: 0 }}
        animate={{ height: 96 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </motion.div>
  );
}; 