import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScreenSize } from '../../hooks/useScreenSize';

const GreetingText = memo(({ text, color }) => (
  <span className={`bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
    {text}
  </span>
));

export const AnimatedGreeting = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isMobile, isTablet } = useScreenSize();

  const greetings = [
    { text: 'Hello!', color: 'from-blue-400 to-blue-600' },
    { text: 'Hi there!', color: 'from-green-400 to-green-600' },
    { text: 'Welcome!', color: 'from-purple-400 to-purple-600' },
  ];

  const cycleGreeting = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % greetings.length);
  }, [greetings.length]);

  useEffect(() => {
    const interval = setInterval(cycleGreeting, 1000);
    return () => clearInterval(interval);
  }, [cycleGreeting]);

  const fontSize = isMobile ? 'text-2xl' : isTablet ? 'text-3xl' : 'text-4xl';

  return (
    <div className="text-center mb-4 sm:mb-6 md:mb-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={`font-bold ${fontSize} mb-2`}
        >
          <GreetingText {...greetings[currentIndex]} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}; 