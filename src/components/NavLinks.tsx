import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScreenSize } from '../hooks/useScreenSize';
import { useTheme } from '../components/Theme/ThemeContext';
import { NavLinksProps } from '../types';

const NavLinks: React.FC<NavLinksProps> = ({ activeSection, onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { isMobile } = useScreenSize();

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
  ];

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              className="text-accent font-bold text-xl focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background rounded-md"
              onClick={() => onSectionChange('home')}
              onKeyDown={(e) => handleKeyDown(e, () => onSectionChange('home'))}
              aria-label="Go to home section"
            >
              AJ
            </button>
          </div>

          {isMobile ? (
            <div className="flex items-center space-x-2">
              <button
                className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent"
                onClick={toggleTheme}
                onKeyDown={(e) => handleKeyDown(e, toggleTheme)}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? '🌞' : '🌙'}
              </button>
              <button
                className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                onKeyDown={(e) => handleKeyDown(e, () => setIsMenuOpen(!isMenuOpen))}
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-4 md:space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-white bg-accent'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                  onClick={() => onSectionChange(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, () => onSectionChange(item.id))}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                download
                className="px-3 py-2 rounded-md text-sm font-medium text-white bg-accent hover:bg-accent/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
                aria-label="Download resume"
              >
                Resume
              </a>
              <button
                className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent"
                onClick={toggleTheme}
                onKeyDown={(e) => handleKeyDown(e, toggleTheme)}
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? '🌞' : '🌙'}
              </button>
            </div>
          )}
        </div>
      </div>

      {isMobile && isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="w-full px-2 pt-2 pb-3 space-y-1 bg-background border-t border-gray-700/50"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                activeSection === item.id
                  ? 'text-white bg-accent'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
              onClick={() => {
                onSectionChange(item.id);
                setIsMenuOpen(false);
              }}
              onKeyDown={(e) => handleKeyDown(e, () => {
                onSectionChange(item.id);
                setIsMenuOpen(false);
              })}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-accent hover:bg-accent/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
            aria-label="Download resume"
          >
            Resume
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default NavLinks; 
