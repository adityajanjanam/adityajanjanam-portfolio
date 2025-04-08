import React, { useState, useEffect } from 'react';

export const ThemeToggle = () => {
  const [mode, setMode] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.classList.remove('dark', 'contrast');
    
    switch (mode) {
      case 'light':
        localStorage.theme = 'light';
        break;
      case 'contrast':
        localStorage.theme = 'contrast';
        document.documentElement.classList.add('contrast');
        break;
      default: // dark
        localStorage.theme = 'dark';
        document.documentElement.classList.add('dark');
        break;
    }
  }, [mode]);

  const cycleMode = () => {
    setMode(current => {
      switch (current) {
        case 'dark': return 'light';
        case 'light': return 'contrast';
        default: return 'dark';
      }
    });
  };

  return (
    <button
      onClick={cycleMode}
      className={`p-2 rounded-lg transition-all duration-300 ${
        mode === 'light' 
          ? 'bg-light-card text-light-accent shadow-light hover:bg-gray-50' 
          : mode === 'contrast'
          ? 'bg-contrast-card text-contrast-accent shadow-contrast hover:bg-zinc-800'
          : 'bg-card text-accent hover:bg-card-hover'
      }`}
      aria-label="Toggle theme"
      title={`Current theme: ${mode}`}
    >
      {mode === 'dark' ? (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ) : mode === 'light' ? (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )}
    </button>
  );
}; 