/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const ScrollProgressBar = ({ isDarkMode }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 w-full z-50 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background track */}
      <div className={`absolute inset-0 ${isDarkMode ? "bg-gray-900/20" : "bg-gray-200/20"}`} />
      
      {/* Progress bar with gradient */}
      <motion.div
        className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 shadow-lg"
        style={{ width: `${progress}%` }}
        transition={{ width: { type: "spring", damping: 25, stiffness: 100 } }}
      />

      {/* Glow effect on the progress bar edge */}
      <motion.div
        className="absolute top-0 right-0 w-6 h-1 bg-gradient-to-r from-transparent via-white to-transparent blur-sm opacity-0"
        style={{ width: `${Math.max(progress - 2, 0)}%`, opacity: progress > 0 ? 0.6 : 0 }}
        transition={{ width: { type: "spring", damping: 25, stiffness: 100 } }}
      />
    </motion.div>
  );
};

export default ScrollProgressBar;
