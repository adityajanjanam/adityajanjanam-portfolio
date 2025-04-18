import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScreenSize } from '../../hooks/useScreenSize';

export const NavLinks = () => {
  const { isMobile } = useScreenSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Home', 'Experience', 'Education', 'Projects'];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full px-4 sm:px-6 py-3 sm:py-4 bg-[#121212]/80 backdrop-blur-sm z-50 border-b border-purple-500/20"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {isMobile ? (
          <MobileMenu items={navItems} isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        ) : (
          <DesktopMenu items={navItems} />
        )}
        <ResumeButton />
      </div>
    </motion.nav>
  );
}; 