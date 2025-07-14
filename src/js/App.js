import React, { useState } from "react";

import { ThemeProvider } from "../ts/components/Theme/ThemeContext";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ApplicationPackaging from "../ts/components/ApplicationPackaging";
import Education from "../ts/components/Education/Education";
import "../ts/i18n";
import Experience from "../ts/components/Experience";
import Home from "../ts/components/Home/index";
import LanguageSwitcher from "../ts/components/LanguageSwitcher";
import NavLinks from "../ts/components/NavLinks";
import Projects from "../ts/components/Projects";
import ScrollToTop from "../ts/components/ScrollToTop";
import Skills from "../ts/components/Skills/Skills";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-[#080808] text-gray-800 dark:text-gray-200 m-0 p-0">
          <LanguageSwitcher />
          <NavLinks
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />

          <main className="pt-16">
            <Skills setActiveTab={setActiveSection} />
            {activeSection === "home" && (
              <>
                <Home setActiveTab={setActiveSection} />
              </>
            )}
            {activeSection === "experience" && (
              <Experience isDarkMode={false} />
            )}
            {activeSection === "projects" && <Projects isDarkMode={false} />}
            {activeSection === "education" && <Education isDarkMode={false} />}
            {activeSection === "application-packaging" && (
              <ApplicationPackaging
                setActiveTab={setActiveSection}
                isDarkMode={false}
              />
            )}
          </main>
          <ScrollToTop />
        </div>
      </ThemeProvider>
      <Routes>{/* Routes removed */}</Routes>
    </Router>
  );
};

export default App;
