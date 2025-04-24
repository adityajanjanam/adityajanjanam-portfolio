import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavLinksProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({
  activeTab,
  setActiveTab,
  isDarkMode,
  setIsDarkMode
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'Experience', path: 'experience' },
    { name: 'Projects', path: 'projects' },
    { name: 'Education', path: 'education' }
  ];

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, path: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setActiveTab(path);
    }
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={`w-full ${isDarkMode ? 'bg-[#111111] border-gray-700' : 'bg-white border-gray-200 shadow-lg'} border-b`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <button
                onClick={() => setActiveTab('home')}
                onKeyDown={(e) => handleKeyDown(e, 'home')}
                className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
                aria-label="Home"
              >
                AJ
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.path)}
                  onKeyDown={(e) => handleKeyDown(e, item.path)}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                             ${activeTab === item.path 
                               ? 'text-yellow-500'
                               : isDarkMode 
                                 ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                 : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}
                  aria-current={activeTab === item.path ? 'page' : undefined}
                  aria-label={item.name}
                >
                  {item.name}
                  {activeTab === item.path && (
                    <motion.span
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              ))}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    toggleTheme();
                  }
                }}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
                aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              {/* Resume Download */}
              <a 
                href="/Aditya_Janjanam_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Aditya_Janjanam_Resume.pdf"
                className={`ml-4 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                         flex items-center gap-2 hover:scale-105 hover:shadow-lg
                         ${isDarkMode 
                           ? 'text-black bg-yellow-400 hover:bg-yellow-300 shadow-md shadow-yellow-400/20'
                           : 'text-white bg-purple-600 hover:bg-purple-700 shadow-md shadow-purple-600/20'}`}
                aria-label="Download Resume"
              >
                Resume
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setIsMenuOpen(!isMenuOpen);
                  }
                }}
                className="p-2 text-gray-300 hover:text-white"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? 'X' : '☰'}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div 
              id="mobile-menu"
              className="md:hidden py-2"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="mobile-menu-button"
            >
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveTab(item.path);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setIsMenuOpen(false);
                      setActiveTab(item.path);
                    }
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                  role="menuitem"
                  aria-current={activeTab === item.path ? 'page' : undefined}
                >
                  {item.name}
                </button>
              ))}
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-3 mt-2 px-3 py-2 text-center text-black bg-yellow-400 hover:bg-yellow-300 rounded"
                role="menuitem"
              >
                Resume
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavLinks; 