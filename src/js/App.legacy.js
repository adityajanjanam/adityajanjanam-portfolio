import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import Education from "./components/Education/Education";
import { projects } from "./data/constants";

const technologies = {
  fullStack: [
    { name: "React.js", icon: "⚛️" },
    { name: "Node.js", icon: "🌐" },
    { name: "Express", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "EJS", icon: "📝" },
  ],
  desktop: [
    { name: ".NET", icon: "🎯" },
    { name: "C#", icon: "🔷" },
    { name: "WPF", icon: "🖥️" },
    { name: "WinForms", icon: "🪟" },
  ],
  mobile: [
    { name: "Flutter", icon: "📱" },
    { name: "React Native", icon: "⚛️" },
    { name: "Android/Kotlin", icon: "🤖" },
    { name: "iOS/Swift", icon: "🍎" },
  ],
  web: [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "📜" },
  ],
  testing: [
    { name: "Manual Testing", icon: "🔍" },
    { name: "Selenium", icon: "🧪" },
    { name: "Java", icon: "☕" },
    { name: "Postman", icon: "📮" },
  ],
  applicationPackaging: [
    { name: "MSI/MSIX", icon: "📦" },
    { name: "PowerShell", icon: "💻" },
    { name: "SCCM/MECM", icon: "🔄" },
    { name: "Intune", icon: "☁️" },
  ],
};

// eslint-disable-next-line no-unused-vars
const experiences = [
  {
    title: "Systems Engineer",
    company: "Atos Global",
    date: "Jun 2021 – Aug 2023",
    location: "Chennai, India",
    description: [
      "Led application packaging and testing initiatives using PowerShell, Admin Studio, and InstallShield",
      "Automated deployment processes reducing manual effort by 40%",
      "Managed enterprise software distribution using SCCM/MECM",
      "Collaborated with cross-functional teams for seamless application delivery",
      "Implemented quality assurance protocols improving package success rate by 25%",
    ],
    skills: [
      "PowerShell",
      "SCCM",
      "Admin Studio",
      "InstallShield",
      "Application Packaging",
      "Software Testing",
    ],
    logo: "🏢",
  },
  {
    title: "Software Engineer Intern",
    company: "Capgemini",
    date: "Sep 2020 – Dec 2020",
    location: "Bengaluru, India",
    description: [
      "Conducted manual and automated testing using Selenium and Java",
      "Developed test scripts improving test coverage by 30%",
      "Utilized Jira for project tracking and bug reporting",
      "Participated in agile development processes and sprint planning",
      "Collaborated with development teams to resolve software defects",
    ],
    skills: [
      "Selenium",
      "Java",
      "Manual Testing",
      "Jira",
      "Agile",
      "Test Automation",
    ],
    logo: "💻",
  },
];

// NavLinks component without router links
const NavLinks = ({ activeTab, setActiveTab, isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Set initial theme
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Save preference to localStorage
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
  };

  // Check for saved theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, [setIsDarkMode]);

  const navItems = [
    { name: "Home", path: "home" },
    { name: "Experience", path: "experience" },
    { name: "Projects", path: "projects" },
    { name: "Education", path: "education" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`w-full ${
          isDarkMode
            ? "bg-gradient-to-r from-gray-900 to-black border-dark-primary-700"
            : "bg-gradient-to-r from-white to-gray-50 border-light-primary-200 shadow-lg"
        } 
        border-b backdrop-blur-sm`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <button
                onClick={() => setActiveTab("home")}
                className={`text-xl font-bold transition-all duration-300 ${
                  isDarkMode
                    ? "text-dark-primary-300 hover:text-dark-primary-200"
                    : "text-light-primary-700 hover:text-light-primary-600"
                }`}
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block"
                >
                  AJ
                </motion.span>
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => setActiveTab(item.path)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                             ${
                               activeTab === item.path
                                 ? isDarkMode
                                   ? "text-dark-primary-300"
                                   : "text-light-primary-600"
                                 : isDarkMode
                                   ? "text-gray-300 hover:text-dark-primary-400"
                                   : "text-gray-700 hover:text-light-primary-700"
                             }`}
                >
                  {item.name}
                  {activeTab === item.path && (
                    <motion.span
                      layoutId="activeTabIndicator"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                        isDarkMode
                          ? "bg-gradient-to-r from-dark-primary-400 to-dark-secondary-500"
                          : "bg-gradient-to-r from-light-primary-500 to-light-secondary-500"
                      }`}
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ rotate: 15, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  isDarkMode
                    ? "bg-dark-primary-900/50 text-dark-primary-300 hover:bg-dark-primary-800 hover:text-dark-primary-200"
                    : "bg-light-primary-50 text-light-primary-600 hover:bg-light-primary-100 hover:text-light-primary-700"
                }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </motion.button>
              <motion.a
                href="/Aditya_Janjanam_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Aditya_Janjanam_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`ml-4 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                         flex items-center gap-2 shadow-lg
                         ${
                           isDarkMode
                             ? "text-black bg-gradient-to-r from-dark-primary-300 to-dark-secondary-400 hover:from-dark-primary-200 hover:to-dark-secondary-300 shadow-dark-primary-500/20"
                             : "text-white bg-gradient-to-r from-light-primary-600 to-light-secondary-700 hover:from-light-primary-500 hover:to-light-secondary-600 shadow-light-primary-500/20"
                         }`}
              >
                Resume
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full ${
                  isDarkMode
                    ? "bg-dark-primary-800 text-dark-primary-300 hover:bg-dark-primary-700"
                    : "bg-light-primary-100 text-light-primary-700 hover:bg-light-primary-200"
                }`}
              >
                {isMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden py-3 space-y-2"
            >
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveTab(item.path);
                  }}
                  whileHover={{ x: 5 }}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg transition-colors duration-200 ${
                    activeTab === item.path
                      ? isDarkMode
                        ? "bg-dark-primary-800 text-dark-primary-300"
                        : "bg-light-primary-100 text-light-primary-700"
                      : isDarkMode
                        ? "text-gray-300 hover:bg-dark-primary-900 hover:text-dark-primary-400"
                        : "text-gray-700 hover:bg-light-primary-50 hover:text-light-primary-600"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
              <div className="flex justify-between items-center px-4 pt-2">
                <motion.button
                  onClick={toggleTheme}
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-full ${
                    isDarkMode
                      ? "bg-dark-primary-800 text-dark-primary-300"
                      : "bg-light-primary-100 text-light-primary-600"
                  }`}
                >
                  {isDarkMode ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  )}
                </motion.button>

                <motion.a
                  href="/Aditya_Janjanam_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Aditya_Janjanam_Resume.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
                           flex items-center gap-2
                           ${
                             isDarkMode
                               ? "text-black bg-gradient-to-r from-dark-primary-300 to-dark-secondary-400"
                               : "text-white bg-gradient-to-r from-light-primary-600 to-light-secondary-700"
                           }`}
                >
                  Resume
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

// Social Links Component
const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/janjanamaditya",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    bgColor: "bg-[#0A66C2]",
    hoverBgColor: "hover:bg-[#0077B5]",
    textColor: "text-white",
  },
  {
    name: "GitHub",
    url: "https://github.com/adityajanjanam",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.239 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    bgColor: "bg-[#24292F]",
    hoverBgColor: "hover:bg-[#2B3137]",
    textColor: "text-white",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/adityajanjanam",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
    bgColor: "bg-[#FFA116]",
    hoverBgColor: "hover:bg-[#FFB800]",
    textColor: "text-[#1A1A1A]",
  },
  {
    name: "Email",
    url: "mailto:janjanamaditya@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20,4H4C2.9,4,2,4.9,2,6l0,12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,8l-8,5L4,8V6l8,5l8-5V8z" />
      </svg>
    ),
    bgColor: "bg-[#EA4335]",
    hoverBgColor: "hover:bg-[#D93025]",
    textColor: "text-white",
  },
  {
    name: "Linktree",
    url: "https://linktr.ee/adityajanjanam",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 80 97.7" fill="currentColor">
        <path
          d="M0.2,33.1h24.2L7.1,16.7l9.5-9.6L33,23.8V0h14.2v23.8L63.6,7.1l9.5,9.6L55.8,33H80v13.5H55.7l17.3,16.7l-9.5,9.4L40,49.1
        L16.5,72.7L7,63.2l17.3-16.7H0V33.1H0.2z M33.1,65.8h14.2v32H33.1V65.8z"
        />
      </svg>
    ),
    bgColor: "bg-black",
    hoverBgColor: "hover:bg-[#18181B]",
    textColor: "text-[#26CF5F]",
  },
];

// Update the social links section in the Home component
const SocialLinks = ({ isDarkMode }) => (
  <motion.div
    id="social-links"
    className="flex items-center gap-4 mt-8"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
  >
    {socialLinks.map((link) => (
      <motion.a
        key={link.name}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{
          scale: 1.1,
          rotate: [0, -3, 3, -3, 0],
          boxShadow: isDarkMode
            ? "0 10px 20px -10px rgba(14, 165, 233, 0.3)"
            : "0 10px 20px -10px rgba(56, 189, 248, 0.5)",
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
            rotate: {
              repeat: 0,
              duration: 0.5,
              ease: "easeInOut",
            },
          },
        }}
        whileTap={{ scale: 0.95 }}
        className={`p-3 rounded-xl shadow-lg transition-all duration-300 
                   hover:shadow-xl flex items-center justify-center
                   min-w-[44px] min-h-[44px]
                   ${
                     link.name === "LinkedIn"
                       ? `${isDarkMode ? "bg-[#0A66C2]" : "bg-[#0077B5]"} text-white`
                       : link.name === "GitHub"
                         ? `${isDarkMode ? "bg-[#1F2328]" : "bg-[#24292F]"} text-white`
                         : link.name === "LeetCode"
                           ? `${isDarkMode ? "bg-[#FFB800]" : "bg-[#FFA116]"} text-[#1A1A1A]`
                           : link.name === "Email"
                             ? `${isDarkMode ? "bg-[#D93025]" : "bg-[#EA4335]"} text-white`
                             : link.name === "Linktree"
                               ? `${isDarkMode ? "bg-black" : "bg-[#18181B]"} text-[#26CF5F]`
                               : ""
                   }`}
        title={link.name}
      >
        <div className={`${link.name === "Linktree" ? "scale-110" : ""}`}>
          {link.icon}
        </div>
      </motion.a>
    ))}
  </motion.div>
);

// Update the CTASection component
const CTASection = ({ contrast = false }) => {
  const [showContactModal, setShowContactModal] = useState(false);

  // Define contrast styles
  const buttonPrimaryContrast = "bg-yellow-400 text-black hover:bg-yellow-300";
  const buttonSecondaryContrast =
    "bg-purple-600 text-white hover:bg-purple-700";

  return (
    <div className="flex flex-col items-start gap-5">
      {/* Buttons */}
      <div className="flex gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${buttonPrimaryContrast}`}
          onClick={() => setShowContactModal(true)}
        >
          Contact Me
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m-7-7H3"
            />
          </svg>
        </motion.button>
        <a
          href="/Aditya_Janjanam_Resume.pdf"
          target="_blank"
          className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${buttonSecondaryContrast}`}
        >
          Resume
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </a>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={(e) =>
            e.target === e.currentTarget && setShowContactModal(false)
          }
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className={`rounded-xl p-6 max-w-lg w-full border ${contrast ? "bg-black border-gray-700" : "bg-[#1a1a1a] border-purple-500/20"}`}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Quick Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <a
                href="https://calendly.com/adityajanjanam"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-4 rounded-lg border transition-all duration-300 ${contrast ? "bg-gray-800 border-gray-700 hover:bg-gray-700" : "bg-purple-500/10 border-purple-500/20 hover:bg-purple-500/20"}`}
              >
                <div
                  className={`p-2 rounded-lg ${contrast ? "bg-gray-700" : "bg-purple-500/20"}`}
                >
                  <svg
                    className={`w-6 h-6 ${contrast ? "text-cyan-400" : "text-purple-400"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className={`font-medium ${contrast ? "text-white" : "text-white"}`}
                  >
                    Schedule a Call
                  </h3>
                  <p
                    className={`text-sm ${contrast ? "text-gray-400" : "text-gray-400"}`}
                  >
                    Book a time slot
                  </p>
                </div>
              </a>

              <a
                href="mailto:janjanamaditya@gmail.com"
                className={`flex items-center gap-3 p-4 rounded-lg border transition-all duration-300 ${contrast ? "bg-gray-800 border-gray-700 hover:bg-gray-700" : "bg-purple-500/10 border-purple-500/20 hover:bg-purple-500/20"}`}
              >
                <div
                  className={`p-2 rounded-lg ${contrast ? "bg-gray-700" : "bg-purple-500/20"}`}
                >
                  <svg
                    className={`w-6 h-6 ${contrast ? "text-cyan-400" : "text-purple-400"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className={`font-medium ${contrast ? "text-white" : "text-white"}`}
                  >
                    Email Me
                  </h3>
                  <p
                    className={`text-sm ${contrast ? "text-gray-400" : "text-gray-400"}`}
                  >
                    Get in touch directly
                  </p>
                </div>
              </a>
            </div>

            {/* Contact Form */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-black/20 border border-purple-500/20 
                             text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-black/20 border border-purple-500/20 
                             text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-black/20 border border-purple-500/20 
                           text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 
                           resize-none"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${contrast ? "bg-cyan-500 text-black hover:bg-cyan-400" : "bg-purple-500 text-white hover:bg-purple-600"}`}
              >
                Send Message
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

// First, add this to your index.css
const styleSheet = `
@keyframes fadeInOut {
  0%, 100% { opacity: 0; }
  20%, 80% { opacity: 1; }
}

@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.greeting-animation {
  animation: fadeInOut 4s ease-in-out infinite;
}
.gradient-text {
  background: linear-gradient(45deg, #9333EA, #EC4899, #8B5CF6, #6366F1);
  background-size: 300% 300%;
  animation: gradientFlow 8s ease infinite;
  -webkit-background-clip: text;
  background-clip: text;
}
  color: transparent;
}
`;

// Add this to your document head
const style = document.createElement("style");
style.textContent = styleSheet;
document.head.appendChild(style);

// Type definitions and validation functions
const isValidGreeting = (greeting) => {
  const requiredFields = ["text", "lang", "country", "region", "color"];
  const validColorFormat = /^from-\w+-\d+(\s+to-\w+-\d+)+$/;

  try {
    // Check if all required fields exist
    if (
      !requiredFields.every((field) =>
        Object.prototype.hasOwnProperty.call(greeting, field)
      )
    ) {
      console.warn(`Missing required field in greeting: ${greeting.lang}`);
      return false;
    }

    // Validate text
    if (
      typeof greeting.text !== "string" ||
      greeting.text.trim().length === 0
    ) {
      console.warn(`Invalid text in greeting: ${greeting.lang}`);
      return false;
    }

    // Validate variations if they exist
    if (greeting.variations) {
      if (
        !Array.isArray(greeting.variations) ||
        !greeting.variations.every(
          (v) => typeof v === "string" && v.trim().length > 0
        )
      ) {
        console.warn(`Invalid variations in greeting: ${greeting.lang}`);
        return false;
      }
    }

    // Validate color format
    if (!validColorFormat.test(greeting.color)) {
      console.warn(`Invalid color format in greeting: ${greeting.lang}`);
      return false;
    }

    // Simplified emoji validation
    if (typeof greeting.country !== "string" || greeting.country.length !== 4) {
      console.warn(`Invalid country flag emoji in greeting: ${greeting.lang}`);
      return false;
    }
    return true;
  } catch (error) {
    console.error(`Validation error for greeting: ${greeting?.lang}`, error);
    return false;
  }
};

// Validated greetings array with error handling
const greetings = [
  // South Indian Languages (Given priority placement)
  {
    text: "నమస్కారం!",
    variations: ["నమస్కారము", "నమస్తే", "వందనాలు", "శుభోదయం"],
    lang: "Telugu",
    country: "🇮🇳",
    region: "తెలుగు",
    color: "from-yellow-400 to-orange-500",
  },
  {
    text: "வணக்கம்!",
    variations: ["நமஸ்காரம்", "வாழ்க", "நல்வரவு", "காலை வணக்கம்"],
    lang: "Tamil",
    country: "🇮🇳",
    region: "தமிழ்",
    color: "from-red-400 to-pink-500",
  },
  {
    text: "ನಮಸ್ಕಾರ!",
    variations: ["ಶುಭಾಶಯಗಳು", "ನಮಸ್ತೆ", "ಸ್ವಾಗತ", "ಶುಭೋದಯ"],
    lang: "Kannada",
    country: "🇮🇳",
    region: "ಕನ್ನಡ",
    color: "from-red-500 to-yellow-500",
  },
  {
    text: "നമസ്കാരം!",
    variations: ["സ്വാഗതം", "നമസ്തേ", "ആശംസകൾ", "സുപ്രഭാതം"],
    lang: "Malayalam",
    country: "🇮🇳",
    region: "മലയാളം",
    color: "from-green-400 to-emerald-500",
  },
  // Hindi (National Language)
  {
    text: "नमस्ते!",
    variations: ["नमस्कार", "प्रणाम", "सुप्रभात", "शुभ प्रभात"],
    lang: "Hindi",
    country: "🇮🇳",
    region: "हिंदी",
    color: "from-orange-500 to-red-500",
  },
  // Asian Languages
  {
    text: "안녕하세요!",
    variations: ["반갑습니다", "안녕", "좋은 아침"],
    lang: "Korean",
    country: "🇰🇷",
    region: "한국어",
    color: "from-blue-400 to-red-400",
  },
  {
    text: "你好!",
    variations: ["早安", "您好", "嗨"],
    lang: "Chinese",
    country: "🇨🇳",
    region: "中文",
    color: "from-red-500 to-yellow-400",
  },
  {
    text: "こんにちは!",
    variations: ["おはよう", "やあ", "どうも"],
    lang: "Japanese",
    country: "🇯🇵",
    region: "日本語",
    color: "from-pink-400 to-red-500",
  },
  // European Languages
  {
    text: "Hello!",
    variations: ["Hi", "Hey", "Good morning", "Greetings"],
    lang: "English",
    country: "🇬🇧",
    region: "English",
    color: "from-blue-500 to-red-500",
  },
  {
    text: "Bonjour!",
    variations: ["Salut", "Bonsoir", "Coucou"],
    lang: "French",
    country: "🇫🇷",
    region: "Français",
    color: "from-blue-400 to-white to-red-400",
  },
  {
    text: "¡Hola!",
    variations: ["Buenos días", "¿Qué tal?", "Saludos"],
    lang: "Spanish",
    country: "🇪🇸",
    region: "Español",
    color: "from-red-500 to-yellow-500",
  },
  {
    text: "Hallo!",
    variations: ["Guten Tag", "Grüß Gott", "Servus"],
    lang: "German",
    country: "🇩🇪",
    region: "Deutsch",
    color: "from-black to-red-500 to-yellow-400",
  },
  // Middle Eastern Languages
  {
    text: "مرحباً!",
    variations: ["السلام عليكم", "صباح الخير", "أهلاً"],
    lang: "Arabic",
    country: "🇸🇦",
    region: "العربية",
    color: "from-green-500 to-white",
  },
  {
    text: "שָׁלוֹם!",
    variations: ["בוקר טוב", "היי", "ברוך הבא"],
    lang: "Hebrew",
    country: "🇮🇱",
    region: "עברית",
    color: "from-blue-400 to-white",
  },
  // Other Asian Languages
  {
    text: "Xin chào!",
    variations: ["Chào", "Chào buổi sáng", "Xin chào bạn"],
    lang: "Vietnamese",
    country: "🇻🇳",
    region: "Tiếng Việt",
    color: "from-red-500 to-yellow-400",
  },
  {
    text: "สวัสดี!",
    variations: ["หวัดดี", "อรุณสวัสดิ์", "สวัสดีครับ/ค่ะ"],
    lang: "Thai",
    country: "🇹🇭",
    region: "ไทย",
    color: "from-blue-500 to-red-500 to-white",
  },
].filter(isValidGreeting);

// --- Home Component (Corrected Structure) ---
const Home = ({ setActiveTab, isDarkMode }) => {
  return (
    // Main component div - Should fill width and height if needed (min-h-full added)
    <div
      className={`relative min-h-full ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200"
          : "bg-gradient-to-br from-white via-gray-50 to-white text-gray-800"
      } pt-12 pb-12`}
    >
      {/* Inner container for main content (two columns) - Centered with max-width and padding */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-x-16 gap-y-12">
          {/* --- Left Column: Text Content --- */}
          <div className="lg:w-3/5 w-full flex flex-col">
            <AnimatedMultilingualGreeting isDarkMode={isDarkMode} />
            <div className="mb-10">
              <h1
                className={`text-3xl lg:text-4xl font-bold mb-2 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <span
                  className={`${
                    isDarkMode ? "text-gray-400" : "text-gray-700"
                  } mr-2`}
                >
                  I am
                </span>
                <span
                  className={
                    isDarkMode
                      ? "bg-clip-text text-transparent bg-gradient-to-r from-dark-primary-300 to-dark-secondary-400"
                      : "bg-clip-text text-transparent bg-gradient-to-r from-light-primary-600 to-light-secondary-700"
                  }
                >
                  Aditya Janjanam!
                </span>
              </h1>
              <p
                className={`text-base lg:text-lg ${
                  isDarkMode ? "text-gray-400" : "text-gray-700"
                }`}
              >
                Full Stack Developer | Mobile App Developer | Software Engineer
              </p>
            </div>
            <div className="flex flex-wrap gap-x-10 gap-y-4 mb-10">
              <div className="text-center">
                <div
                  className={`text-3xl lg:text-4xl font-bold ${
                    isDarkMode
                      ? "text-dark-primary-300"
                      : "text-light-primary-700"
                  }`}
                >
                  3
                </div>
                <div
                  className={`text-xs lg:text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-700"
                  } mt-1 uppercase tracking-wider`}
                >
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`text-3xl lg:text-4xl font-bold ${
                    isDarkMode
                      ? "text-dark-primary-300"
                      : "text-light-primary-700"
                  }`}
                >
                  15+
                </div>
                <div
                  className={`text-xs lg:text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-700"
                  } mt-1 uppercase tracking-wider`}
                >
                  Projects
                </div>
              </div>
            </div>
            <div className="mb-10">
              <BriefSummary isDarkMode={isDarkMode} />
            </div>
            <div className="mt-auto pt-6">
              <CTASection isDarkMode={isDarkMode} />
            </div>
          </div>

          {/* --- Right Column: Photo and Social Links --- */}
          <div className="lg:w-2/5 w-full max-w-sm mx-auto lg:mx-0 flex flex-col items-center lg:items-start h-full">
            {/* Photo Section */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: 0.1,
              }}
            >
              <div className="relative group">
                {/* Background Card Element */}
                <div
                  className={`absolute -inset-1.5 rounded-xl
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md z-0 ${
                                isDarkMode
                                  ? "bg-gradient-to-br from-dark-primary-400/50 via-dark-primary-500/10 to-transparent"
                                  : "bg-gradient-to-br from-light-primary-400/50 via-light-primary-500/10 to-transparent"
                              }`}
                ></div>
                {/* Main Photo Container */}
                <motion.div
                  className={`relative aspect-[3/4] rounded-xl overflow-hidden z-10 
                             ${
                               isDarkMode
                                 ? "bg-gradient-to-br from-gray-900 to-black border-dark-primary-800"
                                 : "bg-gradient-to-br from-white to-gray-50 border-light-primary-200"
                             }
                             border shadow-xl ${
                               isDarkMode
                                 ? "shadow-dark-primary-900/30"
                                 : "shadow-light-primary-500/20"
                             }
                             transition-all duration-300 ease-out`}
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  {/* Image */}
                  <motion.img
                    src="/profile.png"
                    alt="Aditya Janjanam"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  />

                  {/* Status Indicator */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className={`absolute top-3 right-3 flex items-center gap-1.5 
                               ${
                                 isDarkMode
                                   ? "bg-black/60 backdrop-blur-sm border-dark-primary-800"
                                   : "bg-white/90 backdrop-blur-sm border-light-primary-200"
                               } 
                               px-2.5 py-1 rounded-full border shadow-md z-30`}
                  >
                    <div className="w-2 h-2 bg-success-400 rounded-full" />
                    <span
                      className={`text-xs font-medium ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Available for hire
                    </span>
                  </motion.div>

                  {/* Bottom Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className={`absolute bottom-0 inset-x-0 pt-10 pb-3 px-3.5  
                               ${
                                 isDarkMode
                                   ? "bg-gradient-to-t from-black/75 via-black/50 to-transparent"
                                   : "bg-gradient-to-t from-white/90 via-white/70 to-transparent"
                               } 
                               pointer-events-none z-30`}
                  >
                    <h3
                      className={`${
                        isDarkMode ? "text-white" : "text-gray-900"
                      } text-lg font-semibold`}
                    >
                      Aditya Janjanam
                    </h3>
                    <p
                      className={`${
                        isDarkMode ? "text-gray-200" : "text-gray-700"
                      } text-sm mt-0.5`}
                    >
                      Full Stack Developer
                    </p>
                  </motion.div>
                </motion.div>{" "}
                {/* End of Main Photo Container */}
              </div>{" "}
              {/* End of Relative Group */}
            </motion.div>{" "}
            {/* End of Outer Motion Div */}
            {/* Social Links */}
            <div className="mt-2 flex justify-center lg:justify-start w-full">
              <SocialLinks isDarkMode={isDarkMode} />
            </div>
          </div>
          {/* --- End of Right Column --- */}
        </div>{" "}
        {/* End of two-column flex container */}
      </div>{" "}
      {/* End of inner container for main content */}
      {/* Tech Grid container - Centered with max-width and padding */}
      <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TechGrid setActiveTab={setActiveTab} isDarkMode={isDarkMode} />
      </div>
      {/* Footer remains outside inner containers */}
      <Footer isDarkMode={isDarkMode} />
    </div> // End of main component div
  );
};

// Update the BriefSummary component
const BriefSummary = ({ isDarkMode }) => (
  <motion.div
    className={`mt-8 p-6 rounded-xl border ${
      isDarkMode
        ? "bg-gradient-to-br from-gray-900 to-black border-dark-primary-800 shadow-lg shadow-dark-primary-900/20"
        : "bg-gradient-to-br from-white to-gray-50 border-light-primary-200 shadow-lg shadow-light-primary-500/10"
    } sm:p-8`}
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <h3
      className={`text-2xl font-bold mb-6 ${
        isDarkMode ? "text-dark-primary-300" : "text-light-primary-700"
      } sm:text-3xl`}
    >
      💼 Professional Summary
    </h3>
    <p
      className={`text-base ${
        isDarkMode ? "text-gray-300" : "text-gray-700"
      } leading-relaxed sm:text-lg text-justify`}
    >
      I am a passionate and results-driven IT professional with over 3 years of
      experience in software development, mobile applications, and systems
      engineering, including a solid 2-year tenure at Atos as a Systems
      Engineer. My core expertise lies in Application Packaging, Testing, and
      Automation, where I've streamlined software deployment processes,
      optimized enterprise application performance, and delivered reliable,
      scalable solutions.
    </p>
    <p
      className={`mt-4 text-base ${
        isDarkMode ? "text-gray-300" : "text-gray-700"
      } leading-relaxed sm:text-lg text-justify`}
    >
      I hold a Graduate Certificate in Mobile Applications Development from
      Centennial College, Toronto, and a postgraduate credential in Computer
      Applications Development from Conestoga College, Waterloo, both of which
      have fortified my foundation in modern development practices.
    </p>
    <p
      className={`mt-4 text-base ${
        isDarkMode ? "text-gray-300" : "text-gray-700"
      } leading-relaxed sm:text-lg text-justify`}
    >
      With a strong command of Mobile, Web, and Full-Stack Development, I
      specialize in building intuitive, performant applications using
      technologies like Flutter, React Native, Android, iOS, Node.js, MongoDB,
      and Express.js. Additionally, I bring robust scripting expertise with
      PowerShell and VBScript, enabling efficient automation and system-level
      customization.
    </p>
    <p
      className={`mt-4 text-base ${
        isDarkMode ? "text-gray-300" : "text-gray-700"
      } leading-relaxed sm:text-lg text-justify`}
    >
      Currently, I am actively seeking full-time opportunities in Mobile
      Application Development (Flutter, React Native, Android/iOS), Full-Stack
      Development (MERN/JavaScript/Node.js/.NET), Software Testing & Automation,
      Application Packaging & Deployment, and UI/UX Development and Frontend
      Engineering.
    </p>
    <p
      className={`mt-4 text-base ${
        isDarkMode ? "text-gray-300" : "text-gray-700"
      } leading-relaxed sm:text-lg text-justify`}
    >
      My work is driven by a deep enthusiasm for delivering high-quality digital
      experiences and collaborating within agile, innovative teams. I'm
      especially motivated to contribute to organizations that value clean code,
      product impact, and user-centric design.
    </p>

    <div className="mt-8">
      <h4
        className={`text-xl font-semibold mb-4 ${
          isDarkMode ? "text-dark-primary-300" : "text-light-primary-700"
        }`}
      >
        🔑 Key Skills
      </h4>
      <div className="flex flex-wrap gap-3">
        {[
          "Mobile Development",
          "Full Stack Development",
          "Web Development",
          "UI/UX Design",
          "Software Testing",
          "Application Packaging",
          "Flutter",
          "React Native",
          "Node.js",
          "MongoDB",
          "PowerShell",
          "Automation",
        ].map((skill) => (
          <motion.span
            key={skill}
            className={`px-3 py-1.5 text-sm rounded-full ${
              isDarkMode
                ? "bg-dark-primary-900/60 text-dark-primary-300 border border-dark-primary-700"
                : "bg-light-primary-50 text-light-primary-700 border border-light-primary-200"
            }`}
            whileHover={{
              scale: 1.05,
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Experience = ({ isDarkMode }) => {
  return (
    <div
      className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 ${isDarkMode ? "bg-[#080808] text-gray-200" : "bg-white text-gray-900"}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2
          className={`text-3xl sm:text-4xl font-bold ${isDarkMode ? "text-dark-primary-400" : "text-light-primary-600"} mb-3`}
        >
          Professional Experience
        </h2>
        <p
          className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}
        >
          Building enterprise solutions and delivering quality software
        </p>
      </motion.div>

      <div className="relative space-y-10">
        <div
          className={`absolute left-4 top-2 bottom-2 w-0.5 ${isDarkMode ? "bg-dark-primary-700" : "bg-light-primary-200"} hidden md:block`}
        />

        {experiences.map((exp) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0 }}
            className="relative group"
          >
            <div
              className={`absolute left-[10px] top-1 w-4 h-4 rounded-full ${isDarkMode ? "bg-dark-primary-400 border-gray-800" : "bg-light-primary-500 border-gray-200"} border-2 hidden md:block
                          group-hover:scale-125 transition-transform duration-300`}
            />

            <div
              className={`ml-0 md:ml-10 p-6 rounded-lg ${
                isDarkMode
                  ? "bg-gradient-to-br from-gray-900 to-black border-dark-primary-800"
                  : "bg-gradient-to-br from-white to-gray-50 border-light-primary-200 shadow-lg"
              } border
                          hover:border-gray-600 transition-colors duration-300`}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                <div>
                  <h3
                    className={`text-xl font-semibold ${isDarkMode ? "text-dark-primary-300" : "text-light-primary-700"} flex items-center gap-2`}
                  >
                    <span>{exp.logo}</span>
                    {exp.title} @ {exp.company}
                  </h3>
                  <p
                    className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"} mt-1`}
                  >
                    {exp.date}
                  </p>
                </div>
                <span
                  className={`mt-2 sm:mt-0 px-3 py-1 text-sm ${
                    isDarkMode
                      ? "bg-dark-secondary-900/40 text-dark-secondary-300"
                      : "bg-light-secondary-100 text-light-secondary-700"
                  } rounded-full`}
                >
                  {exp.location}
                </span>
              </div>

              <ul
                className={`space-y-2 mb-4 list-disc list-inside ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                {exp.description.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} hover:${isDarkMode ? "text-gray-300" : "text-gray-700"} transition-colors`}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className={`px-3 py-1 text-sm rounded-full ${
                      isDarkMode
                        ? "bg-dark-secondary-900/40 text-dark-secondary-300 hover:bg-dark-secondary-800/40"
                        : "bg-light-secondary-100 text-light-secondary-700 hover:bg-light-secondary-200"
                    } transition-all duration-300`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Projects = ({ isDarkMode }) => {
  return (
    // Apply full width and padding
    <div
      className={`w-full px-4 py-16 ${isDarkMode ? "bg-background text-gray-200" : "bg-gray-100 text-gray-900"}`}
    >
      {/* Container for centering content */}
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          {/* Use yellow for header in dark mode */}
          <h2
            className={`text-3xl sm:text-4xl font-bold ${isDarkMode ? "text-yellow-400" : "text-indigo-600"} mb-4`}
          >
            Featured Projects
          </h2>
          <p
            className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}
          >
            Showcasing my technical expertise and creative problem-solving
          </p>
        </motion.div>

        {/* Projects Grid - Ensure it maps over the GLOBAL projects constant */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map over the correct global 'projects' array */}
          {projects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="group relative h-full" // Added h-full for consistent height
            >
              {/* Use theme colors and yellow hover border */}
              <div
                className={`h-full p-6 rounded-xl border
                           ${
                             isDarkMode
                               ? "bg-card-bg border-gray-700 hover:border-yellow-400"
                               : "bg-white border-gray-200 shadow-lg hover:border-indigo-500"
                           }
                           transition-all duration-300 flex flex-col`}
              >
                {" "}
                {/* Added flex flex-col */}
                {/* Top Section: Icon, Title, Type, Link */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{project.image}</span>
                    <div>
                      {/* Use yellow for title in dark mode */}
                      <h3
                        className={`text-xl font-bold ${isDarkMode ? "text-yellow-400" : "text-indigo-600"}`}
                      >
                        {project.title}
                      </h3>
                      {/* Use yellow for type badge in dark mode */}
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full font-medium
                                   ${isDarkMode ? "bg-yellow-400/10 text-yellow-300" : "bg-indigo-100 text-indigo-700"}`}
                      >
                        {project.type}
                      </span>
                    </div>
                  </div>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    // Use yellow for icon button in dark mode
                    className={`p-2 rounded-full transition-colors duration-300
                             ${isDarkMode ? "bg-gray-700/50 hover:bg-gray-700/80 text-yellow-400" : "bg-gray-100 hover:bg-gray-200 text-indigo-600"}`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </motion.a>
                </div>
                {/* Description */}
                <p
                  className={`mb-4 ${isDarkMode ? "text-gray-400" : "text-gray-600"} text-sm leading-relaxed flex-grow`}
                >
                  {" "}
                  {/* Added flex-grow */}
                  {project.description}
                </p>
                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="mb-4">
                    <h4
                      className={`text-sm font-semibold ${isDarkMode ? "text-yellow-400" : "text-indigo-600"} mb-2`}
                    >
                      Key Highlights
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className={`flex items-center gap-2 text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                        >
                          <svg
                            className={`w-3 h-3 flex-shrink-0 ${isDarkMode ? "text-yellow-400" : "text-indigo-500"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {/* Tech Stack */}
                <div className="mt-auto pt-4">
                  {" "}
                  {/* Ensure tech stack is at the bottom */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2.5 py-1 text-xs rounded-full font-medium
                                 ${isDarkMode ? "bg-gray-700/50 text-gray-300" : "bg-gray-100 text-gray-700"}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Update the ApplicationPackagingSection component with adjusted padding and spacing
const ApplicationPackagingSection = ({ setActiveTab, isDarkMode }) => {
  const tools = [
    {
      name: "MSI/MSIX",
      icon: "📦",
      description: "Enterprise Package Creation",
    },
    { name: "PowerShell", icon: "💻", description: "Automation & Scripting" },
    { name: "SCCM/MECM", icon: "🔄", description: "Enterprise Deployment" },
    { name: "Intune", icon: "☁️", description: "Cloud Management" },
  ];

  const additionalTools = [
    { name: "AdminStudio", icon: "🛠️", description: "Package Engineering" },
    { name: "InstallShield", icon: "🔨", description: "MSI Authoring" },
    { name: "PSADT", icon: "📜", description: "Deployment Toolkit" },
    { name: "Process Monitor", icon: "🔍", description: "System Analysis" },
  ];

  return (
    <div
      className={`w-full max-w-6xl mx-auto py-8 ${isDarkMode ? "bg-[#080808] text-gray-200" : "bg-white text-gray-900"}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-center"
      >
        <h2
          className={`text-3xl font-bold ${isDarkMode ? "text-yellow-400" : "text-yellow-600"} mb-3`}
        >
          Application Packaging
        </h2>
        <p
          className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}
        >
          Enterprise Software Deployment Solutions
        </p>
      </motion.div>

      {/* Core Tools */}
      <div className="mb-8">
        <h3
          className={`text-xl font-semibold ${isDarkMode ? "text-yellow-400" : "text-yellow-600"} mb-4`}
        >
          Core Technologies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-xl border ${
                isDarkMode
                  ? "bg-[#1a1a1a] border-gray-700"
                  : "bg-white border-gray-200 shadow-lg"
              }
                hover:border-gray-600 transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{tool.icon}</span>
                <h4
                  className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  {tool.name}
                </h4>
              </div>
              <p
                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Tools */}
      <div>
        <h3
          className={`text-xl font-semibold ${isDarkMode ? "text-yellow-400" : "text-yellow-600"} mb-4`}
        >
          Supporting Tools
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {additionalTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className={`p-4 rounded-xl border ${
                isDarkMode
                  ? "bg-[#1a1a1a] border-gray-700"
                  : "bg-white border-gray-200 shadow-lg"
              }
                hover:border-gray-600 transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{tool.icon}</span>
                <h4
                  className={`font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  {tool.name}
                </h4>
              </div>
              <p
                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                {tool.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <motion.button
        onClick={() => setActiveTab("home")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className={`mt-8 ${isDarkMode ? "text-yellow-400" : "text-yellow-600"} hover:${isDarkMode ? "text-yellow-300" : "text-yellow-500"} transition-colors flex items-center gap-2`}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Home
      </motion.button>
    </div>
  );
};

const ScrollToTop = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <motion.button
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-yellow-400 text-black
                 hover:bg-yellow-300 transition-all duration-200 shadow-lg
                 hover:shadow-yellow-400/20 hover:scale-110`}
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
      transition={{ duration: 0.2 }}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </motion.button>
  );
};

// --- App Component (Keep Main Padding Matching Header Height) ---
const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, [setIsDarkMode]);

  return (
    <div
      className={`min-h-screen flex flex-col ${isDarkMode ? "bg-[#080808] text-gray-200" : "bg-white text-gray-800"}`}
    >
      <NavLinks
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Add flex-grow here */}
      <main className="pt-16 flex-grow">
        {activeTab === "home" && (
          <Home setActiveTab={setActiveTab} isDarkMode={isDarkMode} />
        )}
        {activeTab === "experience" && <Experience isDarkMode={isDarkMode} />}
        {activeTab === "projects" && <Projects isDarkMode={isDarkMode} />}
        {activeTab === "education" && <Education isDarkMode={isDarkMode} />}
        {activeTab === "application-packaging" && (
          <ApplicationPackagingSection
            setActiveTab={setActiveTab}
            isDarkMode={isDarkMode}
          />
        )}
      </main>
      <ScrollToTop isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
