import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Type definitions
interface Technology {
  name: string;
  icon: string;
}

interface Technologies {
  [key: string]: Technology[];
}

interface Experience {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string[];
  skills: string[];
  logo: string;
}

interface Project {
  title: string;
  description: string;
  tech: string[];
  type: string;
  link: string;
  image: string;
  highlights: string[];
}

interface Education {
  program: string;
  institution: string;
  period: string;
  type: string;
  Grade?: string;
  courses: string[];
}

interface Greeting {
  text: string;
  variations?: string[];
  lang: string;
  country: string;
  region: string;
  color: string;
}

interface NavLinksProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (isDark: boolean) => void;
}

interface HomeProps {
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
}

interface ExperienceProps {
  isDarkMode: boolean;
}

interface ProjectsProps {
  isDarkMode: boolean;
}

interface EducationProps {
  isDarkMode: boolean;
}

interface ApplicationPackagingSectionProps {
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
}

interface ScrollToTopProps {
  isDarkMode: boolean;
}

// ... existing code ...

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, [setIsDarkMode]);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#080808] text-gray-200' : 'bg-white text-gray-800'}`}> 
      <NavLinks activeTab={activeTab} setActiveTab={setActiveTab} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      <main className="pt-16"> 
        {activeTab === 'home' && <Home setActiveTab={setActiveTab} isDarkMode={isDarkMode} />}
        {activeTab === 'experience' && <Experience isDarkMode={isDarkMode} />}
        {activeTab === 'projects' && <Projects isDarkMode={isDarkMode} />}
        {activeTab === 'education' && <Education isDarkMode={isDarkMode} />}
        {activeTab === 'application-packaging' && <ApplicationPackagingSection setActiveTab={setActiveTab} isDarkMode={isDarkMode} />}
      </main>
      <ScrollToTop isDarkMode={isDarkMode} />
    </div>
  );
};

export default App; 