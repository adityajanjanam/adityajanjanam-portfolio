import * as React from "react";
import { useEffect, useState } from "react";

// Component imports - only import files that actually exist
import ApplicationPackaging from "./components/ApplicationPackaging";
import Awards from "./components/Awards";
import Certifications from "./components/Certifications";
import { Contact } from "./components/Contact";
import CustomCursor from "./components/CustomCursor";
import Education from "./components/Education/Education";
import Experience from "./components/Experience";
import FloatingNav from "./components/FloatingNav";
import Footer from "./components/Footer";
import { Home } from "./components/Home/index";
import LoadingScreen from "./components/LoadingScreen";
import ParticleBackground from "./components/ParticleBackground";
import Projects from "./components/Projects";
import ScrollToTop from "./components/ScrollToTop";
import TechGrid from "./components/TechGrid";
import Testimonials from "./components/Testimonials";
import { initGA, trackPageView } from "./utils/analytics";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("home");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Initialize Google Analytics
    initGA();
    
    // Track initial page view
    trackPageView("/", "Home");
    
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

  // Track page views and scroll to top when tab changes
  useEffect(() => {
    // Scroll to top instantly when tab changes - multiple methods for compatibility
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Track page view
    trackPageView(`/${activeTab}`, activeTab.charAt(0).toUpperCase() + activeTab.slice(1));
  }, [activeTab]);

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
        {activeTab === "home" && (
          <Home key="home" setActiveTab={setActiveTab} isDarkMode={isDarkMode} />
        )}
        {activeTab === "experience" && (
          <Experience key="experience" isDarkMode={isDarkMode} />
        )}
        {activeTab === "education" && <Education key="education" />}
        {activeTab === "skills" && (
          <TechGrid key="skills" setActiveTab={setActiveTab} isDarkMode={isDarkMode} />
        )}
        {activeTab === "projects" && (
          <Projects key="projects" isDarkMode={isDarkMode} />
        )}
        {activeTab === "certifications" && (
          <Certifications key="certifications" />
        )}
        {activeTab === "awards" && (
          <Awards key="awards" />
        )}
        {activeTab === "testimonials" && (
          <Testimonials key="testimonials" isDarkMode={isDarkMode} />
        )}
        {activeTab === "application-packaging" && (
          <ApplicationPackaging key="application-packaging" setActiveTab={setActiveTab} isDarkMode={isDarkMode} />
        )}
        {activeTab === "contact" && (
          <Contact key="contact" isDarkMode={isDarkMode} />
        )}
      </main>

      <Footer isDarkMode={isDarkMode} setActiveTab={setActiveTab} activeTab={activeTab} />
      <ScrollToTop isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;

