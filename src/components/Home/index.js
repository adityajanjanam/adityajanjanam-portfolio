import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedGreeting } from '../Greetings/AnimatedGreeting';
import { technologies } from '../../data/constants';

export const Home = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
  >
    <AnimatedGreeting />
    
    <motion.h1 
      className="text-6xl md:text-7xl font-bold mb-6"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <span className="gradient-text">I am Aditya!</span>
    </motion.h1>

    <motion.div
      className="text-xl text-gray-400 mb-8"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <p>Full Stack Developer | Mobile App Developer | Software Engineer</p>
    </motion.div>

    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 w-full max-w-6xl"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      {Object.entries(technologies).map(([area, techs], index) => (
        <motion.div
          key={area}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 }
          }}
          className="p-4 rounded-xl bg-gradient-to-br from-purple-900/30 to-transparent
                     backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 
                     transition-all duration-300"
        >
          <h3 className="text-lg font-semibold text-purple-400 mb-3">
            {area === 'fullStack' ? '🌐 Full Stack' :
             area === 'desktop' ? '🖥️ Desktop' :
             area === 'mobile' ? '📱 Mobile' :
             area === 'web' ? '🌍 Web' :
             area === 'testing' ? '🧪 Testing' :
             '📦 DevOps'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {techs.map(tech => (
              <span key={tech.name} 
                    className="px-3 py-1 text-sm bg-purple-900/30 rounded-full text-gray-300
                             hover:bg-purple-800/40 transition-colors duration-300">
                {tech.name}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
); 