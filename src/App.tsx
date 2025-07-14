import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

// Component imports - only import files that actually exist
import CustomCursor from "./components/CustomCursor.jsx";
import Education from "./components/Education/Education";
import FloatingNav from "./components/FloatingNav.jsx";
import Footer from "./components/Footer.jsx";
import { Home } from "./components/Home/index.jsx";
import LoadingScreen from "./components/LoadingScreen";
import ParticleBackground from "./components/ParticleBackground.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Skills from "./components/Skills/Skills";
import TechGrid from "./components/TechGrid.jsx";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Check system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDark);
    }

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Update theme in localStorage
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    // Update document class
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <ParticleBackground isDarkMode={isDarkMode} />
      <CustomCursor />
      <FloatingNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDarkMode={isDarkMode}
      />

      <main className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <Home setActiveTab={setActiveTab} isDarkMode={isDarkMode} />
          )}
          {activeTab === "education" && <Education />}
          {activeTab === "skills" && (
            <TechGrid setActiveTab={setActiveTab} isDarkMode={isDarkMode} />
          )}
        </AnimatePresence>
      </main>

      <Footer isDarkMode={isDarkMode} />
      <ScrollToTop isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
