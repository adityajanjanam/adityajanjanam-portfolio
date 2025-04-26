import React, { useState } from 'react';
import { ThemeProvider } from './components/Theme/ThemeContext';
import Skills from './components/Skills/Skills';
import NavLinks from './components/NavLinks';
import Home from './components/Home';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education/Education';
import ApplicationPackaging from './components/ApplicationPackaging';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/i18n';
import LanguageSwitcher from './components/LanguageSwitcher';
import BlogList from './components/Blog/BlogList';
import BlogDetail from './components/Blog/BlogDetail';
import Testimonials from './components/Testimonials/Testimonials';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-[#080808] text-gray-800 dark:text-gray-200 m-0 p-0"> 
          <LanguageSwitcher />
          <NavLinks activeSection={activeSection} onSectionChange={setActiveSection} />
          
          <main className="pt-16"> 
            <Skills setActiveTab={setActiveSection} />
            {activeSection === 'home' && (
              <>
                <Home setActiveTab={setActiveSection} isDarkMode={false} />
                <Testimonials />
                <BlogList />
              </>
            )}
            {activeSection === 'experience' && <Experience isDarkMode={false} />}
            {activeSection === 'projects' && <Projects isDarkMode={false} />}
            {activeSection === 'education' && <Education isDarkMode={false} />}
            {activeSection === 'application-packaging' && <ApplicationPackaging setActiveTab={setActiveSection} isDarkMode={false} />}
          </main>
          <ScrollToTop />
        </div>
      </ThemeProvider>
      <Routes>
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
};

export default App; 