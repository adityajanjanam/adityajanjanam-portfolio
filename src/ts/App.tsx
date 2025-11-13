import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./i18n";
import ApplicationPackaging from "./components/ApplicationPackaging/index";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/index";
import Home from "./components/Home/index";
import LanguageSwitcher from "./components/LanguageSwitcher";
import NavLinks from "./components/NavLinks";
import Projects from "./components/Projects/Projects";
import ScrollToTop from "./components/ScrollToTop/index";
// import Skills from "./components/Skills/Skills";
// import Testimonials from "./components/Testimonials/Testimonials";
import { ThemeProvider } from "./components/Theme/ThemeContext";

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  return (
    <Router>
      <ThemeProvider>
        <div>
          <LanguageSwitcher />
          <NavLinks
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />

          <main className="pt-28">
            {/* <Skills /> */}
            {activeSection === "home" && (
              <>
                <Home />
                {/* <Testimonials /> */}
              </>
            )}
            {activeSection === "experience" && <Experience />}
            {activeSection === "projects" && <Projects />}
            {activeSection === "education" && <Education />}
            {activeSection === "application-packaging" && (
              <ApplicationPackaging />
            )}
            {activeSection === "contact" && <Contact />}
          </main>
          <ScrollToTop />
        </div>
      </ThemeProvider>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
