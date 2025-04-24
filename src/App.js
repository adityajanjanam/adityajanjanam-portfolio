import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const technologies = {
  fullStack: [
    { name: 'React.js', icon: '⚛️' }, { name: 'Node.js', icon: '🌐' },
    { name: 'Express', icon: '🚀' }, { name: 'MongoDB', icon: '🍃' },
    { name: 'EJS', icon: '📝' }
  ],
  desktop: [
    { name: '.NET', icon: '🎯' }, { name: 'C#', icon: '🔷' },
    { name: 'WPF', icon: '🖥️' }, { name: 'WinForms', icon: '🪟' }
  ],
  mobile: [
    { name: 'Flutter', icon: '📱' }, { name: 'React Native', icon: '⚛️' },
    { name: 'Android/Kotlin', icon: '🤖' }, { name: 'iOS/Swift', icon: '🍎' }
  ],
  web: [
    { name: 'HTML', icon: '🌐' }, { name: 'CSS', icon: '🎨' },
    { name: 'JavaScript', icon: '📜' }, { name: 'ASP.NET MVC', icon: '🔷' }
  ],
  testing: [
    { name: 'Manual Testing', icon: '🔍' }, { name: 'Selenium', icon: '🧪' },
    { name: 'Java', icon: '☕' }, { name: 'Postman', icon: '📮' }
  ],
  applicationPackaging: [
    { name: 'MSI/MSIX', icon: '📦' },
    { name: 'PowerShell', icon: '💻' },
    { name: 'SCCM/MECM', icon: '🔄' },
    { name: 'Intune', icon: '☁️' }
  ]
};

// eslint-disable-next-line no-unused-vars
const experiences = [
  {
    title: 'Systems Engineer',
    company: 'Atos Global',
    date: 'Jun 2021 – Aug 2023',
    location: 'Chennai, India',
    description: [
      'Led application packaging and testing initiatives using PowerShell, Admin Studio, and InstallShield',
      'Automated deployment processes reducing manual effort by 40%',
      'Managed enterprise software distribution using SCCM/MECM',
      'Collaborated with cross-functional teams for seamless application delivery',
      'Implemented quality assurance protocols improving package success rate by 25%'
    ],
    skills: ['PowerShell', 'SCCM', 'Admin Studio', 'InstallShield', 'Application Packaging', 'Software Testing'],
    logo: '🏢'
  },
  {
    title: 'Software Engineer Intern',
    company: 'Capgemini',
    date: 'Sep 2020 – Dec 2020',
    location: 'Bengaluru, India',
    description: [
      'Conducted manual and automated testing using Selenium and Java',
      'Developed test scripts improving test coverage by 30%',
      'Utilized Jira for project tracking and bug reporting',
      'Participated in agile development processes and sprint planning',
      'Collaborated with development teams to resolve software defects'
    ],
    skills: ['Selenium', 'Java', 'Manual Testing', 'Jira', 'Agile', 'Test Automation'],
    logo: '💻'
  }
];

// eslint-disable-next-line no-unused-vars
const education = [
  {
    program: 'Mobile Applications Development',
    institution: 'Centennial College',
    period: '2024-2025',
    type: 'Graduate Certificate',
    courses: [
      'Samsung Android Application Development',
      'Web Technologies for Mobile Platforms',
      'Enterprise Technologies for Mobile Platforms',
      'iOS Development',
      'Mobile Application UI/UX Design',
      'Samsung Advanced Android Development',
      'Mobile Web Development',
      'Advanced iOS Development',
      'Emerging Technologies',
      'Mobile Application Development Project'
    ]
  },
  {
    program: 'Computer Applications Development',
    institution: 'Conestoga College',
    period: '2024-2025',
    type: 'Graduate Certificate',
    Grade: 'Distinction',
    courses: [
      'Systems Concepts, Analysis and Design',
      'Programming: Software Development Techniques',
      'Programming: Web Design and Development',
      'Programming: Database Management',
      'Web Foundations',
      'System Development Project',
      'Programming: Mobile Application Development',
      'Microsoft Web Technologies',
      'User Experience Design',
      'Software Quality'
    ]
  }
];

// eslint-disable-next-line no-unused-vars
const projects = [
  {
    title: 'HealthTrackPro',
    description: 'A comprehensive healthcare provider app built with React Native for tracking patient data. Features include QR sync, offline-first capability, clinical data management, and interactive charts.',
    tech: ['React Native', 'Node.js', 'MongoDB', 'REST API'],
    type: 'Healthcare App',
    link: 'https://github.com/adityajanjanam/HealthTrackPro',
    image: '🏥',
    highlights: [
      'Offline-first architecture',
      'Real-time data synchronization',
      'HIPAA compliant data handling',
      'Interactive medical charts'
    ]
  },
  {
    title: 'TrainWithTail',
    description: 'Pet training platform offering tailored programs, expert advice, and an integrated pet product shop for enhanced pet-owner relationships.',
    tech: ['Node.js', 'MongoDB', 'HTML5', 'CSS3', 'JavaScript'],
    type: 'Full Stack Web App',
    link: 'https://github.com/adityajanjanam/TrainWithTail',
    image: '🐕',
    highlights: [
      'Personalized training programs',
      'E-commerce integration',
      'Expert consultation system',
      'Progress tracking dashboard'
    ]
  },
  {
    title: 'PatientDataAPI',
    description: 'RESTful API for healthcare providers to manage and monitor patient clinical data. Built with Node.js and MongoDB, featuring Swagger documentation.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Swagger'],
    type: 'Backend API',
    link: 'https://github.com/adityajanjanam/PatientDataAPI',
    image: '🔌',
    highlights: [
      'RESTful architecture',
      'Comprehensive API documentation',
      'Secure data handling',
      'Scalable database design'
    ]
  },
  {
    title: 'Scientific Calculator',
    description: 'Modern scientific calculator app with advanced mathematical operations, built using React Native and Expo for cross-platform compatibility.',
    tech: ['React Native', 'Expo', 'JavaScript'],
    type: 'Mobile Utility App',
    link: 'https://github.com/adityajanjanam/ScientificCalculatorApp',
    image: '🧮',
    highlights: [
      'Cross-platform compatibility',
      'Advanced mathematical functions',
      'Intuitive user interface',
      'Offline functionality'
    ]
  },
  {
    title: 'MAPD721 Android Animations',
    description: 'Interactive Android app showcasing various Jetpack Compose animations, including animated transitions, infinite animations, and gesture-based interactions.',
    tech: ['Kotlin', 'Jetpack Compose', 'Material Design'],
    type: 'Android App',
    link: 'https://github.com/adityajanjanam/MAPD721_A3_Aditya',
    image: '📱',
    highlights: [
      'Custom animations',
      'Gesture interactions',
      'Material Design implementation',
      'Performance optimization'
    ]
  },
  {
    title: 'Text to PDF Converter',
    description: 'React-based utility for converting text documents to PDF format with customizable options and preview functionality.',
    tech: ['React', 'JavaScript', 'PDF.js'],
    type: 'Web Utility',
    link: 'https://github.com/adityajanjanam/TextToPDFConverter',
    image: '📄',
    highlights: [
      'PDF generation',
      'Custom formatting options',
      'Live preview',
      'Batch processing'
    ]
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather monitoring application with detailed forecasts, interactive maps, and severe weather alerts.',
    tech: ['React', 'OpenWeather API', 'Mapbox', 'TailwindCSS'],
    type: 'Web Application',
    link: 'https://github.com/adityajanjanam/WeatherDashboard',
    image: '🌤️',
    highlights: [
      'Real-time updates',
      'Interactive weather maps',
      'Location-based forecasts',
      'Severe weather alerts'
    ]
  },
  {
    title: 'Task Manager Pro',
    description: 'Full-featured task management application with team collaboration, progress tracking, and deadline management capabilities.',
    tech: ['React', 'Redux', 'Firebase', 'Material-UI'],
    type: 'Productivity App',
    link: 'https://github.com/adityajanjanam/TaskManagerPro',
    image: '📋',
    highlights: [
      'Team collaboration',
      'Real-time updates',
      'Progress analytics',
      'Deadline tracking'
    ]
  }
];

// NavLinks component without router links
const NavLinks = ({ activeTab, setActiveTab, isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    // Set initial theme
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
    // Save preference to localStorage
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  // Check for saved theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, [setIsDarkMode]);

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'Experience', path: 'experience' },
    { name: 'Projects', path: 'projects' },
    { name: 'Education', path: 'education' }
  ];
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50"> 
      <div className={`w-full ${isDarkMode ? 'bg-[#111111] border-gray-700' : 'bg-white border-gray-200 shadow-lg'} border-b`}> 
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16"> 
            <div className="flex-shrink-0">
              <button onClick={() => setActiveTab('home')} className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                AJ
              </button>
            </div>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.path)}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                             ${activeTab === item.path 
                               ? 'text-yellow-500'
                               : isDarkMode 
                                 ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                 : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}
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
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  isDarkMode 
                    ? 'text-gray-300 hover:bg-gray-700 hover:text-white' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
                aria-label="Toggle dark mode"
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
                className="p-2 text-gray-300 hover:text-white"
              >
                {isMenuOpen ? 'X' : '☰'}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden py-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveTab(item.path);
                  }}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  {item.name}
                </button>
              ))}
              <a 
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-3 mt-2 px-3 py-2 text-center text-black bg-yellow-400 hover:bg-yellow-300 rounded"
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

// Social Links Component
const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/janjanamaditya',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    bgColor: 'bg-[#0A66C2]',
    hoverBgColor: 'hover:bg-[#0077B5]',
    textColor: 'text-white'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/adityajanjanam',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.239 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    bgColor: 'bg-[#24292F]',
    hoverBgColor: 'hover:bg-[#2B3137]',
    textColor: 'text-white'
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/adityajanjanam',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
      </svg>
    ),
    bgColor: 'bg-[#FFA116]',
    hoverBgColor: 'hover:bg-[#FFB800]',
    textColor: 'text-[#1A1A1A]'
  },
  {
    name: 'Email',
    url: 'mailto:janjanamaditya@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20,4H4C2.9,4,2,4.9,2,6l0,12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,8l-8,5L4,8V6l8,5l8-5V8z"/>
      </svg>
    ),
    bgColor: 'bg-[#EA4335]',
    hoverBgColor: 'hover:bg-[#D93025]',
    textColor: 'text-white'
  },
  {
    name: 'Linktree',
    url: 'https://linktr.ee/adityajanjanam',
    icon: (
      <svg 
        className="w-5 h-5" 
        viewBox="0 0 80 97.7" 
        fill="currentColor"
      >
        <path d="M0.2,33.1h24.2L7.1,16.7l9.5-9.6L33,23.8V0h14.2v23.8L63.6,7.1l9.5,9.6L55.8,33H80v13.5H55.7l17.3,16.7l-9.5,9.4L40,49.1
        L16.5,72.7L7,63.2l17.3-16.7H0V33.1H0.2z M33.1,65.8h14.2v32H33.1V65.8z" />
      </svg>
    ),
    bgColor: 'bg-black',
    hoverBgColor: 'hover:bg-[#18181B]',
    textColor: 'text-[#26CF5F]'
  }
];

// Update the social links section in the Home component
const SocialLinks = () => (
  <motion.div 
    id="social-links"
    className="flex items-center gap-4 mt-8"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
  >
    {socialLinks.map((link, index) => (
      <motion.a
        key={link.name}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ 
          scale: 1.1,
          transition: { type: "spring", stiffness: 400, damping: 10 }
        }}
        whileTap={{ scale: 0.95 }}
        className={`p-3 ${link.bgColor} ${link.hoverBgColor} ${link.textColor} 
                   rounded-xl shadow-lg transition-all duration-300 
                   hover:shadow-xl flex items-center justify-center
                   min-w-[44px] min-h-[44px]
                   ${link.name === 'Linktree' ? 'hover:shadow-[#26CF5F]/20' : ''}`}
        title={link.name}
      >
        <div className={`${link.name === 'Linktree' ? 'scale-110' : ''}`}>
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
  const buttonSecondaryContrast = "bg-purple-600 text-white hover:bg-purple-700";

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
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.button>
        <a 
          href="/Aditya_Janjanam_Resume.pdf" 
          target="_blank"
          className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${buttonSecondaryContrast}`}
        >
          Resume
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
          onClick={(e) => e.target === e.currentTarget && setShowContactModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className={`rounded-xl p-6 max-w-lg w-full border ${contrast ? 'bg-black border-gray-700' : 'bg-[#1a1a1a] border-purple-500/20'}`}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-gray-500 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
        </div>

            {/* Quick Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <a
                href="https://calendly.com/adityajanjanam"
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-4 rounded-lg border transition-all duration-300 ${contrast ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-purple-500/10 border-purple-500/20 hover:bg-purple-500/20'}`}
              >
                <div className={`p-2 rounded-lg ${contrast ? 'bg-gray-700' : 'bg-purple-500/20'}`}>
                  <svg className={`w-6 h-6 ${contrast ? 'text-cyan-400' : 'text-purple-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
        </div>
                <div>
                  <h3 className={`font-medium ${contrast ? 'text-white' : 'text-white'}`}>Schedule a Call</h3>
                  <p className={`text-sm ${contrast ? 'text-gray-400' : 'text-gray-400'}`}>Book a time slot</p>
      </div>
              </a>

              <a
                href="mailto:adityajanjanam@gmail.com"
                className={`flex items-center gap-3 p-4 rounded-lg border transition-all duration-300 ${contrast ? 'bg-gray-800 border-gray-700 hover:bg-gray-700' : 'bg-purple-500/10 border-purple-500/20 hover:bg-purple-500/20'}`}
              >
                <div className={`p-2 rounded-lg ${contrast ? 'bg-gray-700' : 'bg-purple-500/20'}`}>
                  <svg className={`w-6 h-6 ${contrast ? 'text-cyan-400' : 'text-purple-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className={`font-medium ${contrast ? 'text-white' : 'text-white'}`}>Email Me</h3>
                  <p className={`text-sm ${contrast ? 'text-gray-400' : 'text-gray-400'}`}>Get in touch directly</p>
                </div>
              </a>
            </div>

            {/* Contact Form */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-black/20 border border-purple-500/20 
                             text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Message</label>
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
                className={`w-full py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${contrast ? 'bg-cyan-500 text-black hover:bg-cyan-400' : 'bg-purple-500 text-white hover:bg-purple-600'}`}
              >
                Send Message
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
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
  0%, 100% { opacity: 0; transform: translateY(10px); }
  20%, 80% { opacity: 1; transform: translateY(0); }
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
const style = document.createElement('style');
style.textContent = styleSheet;
document.head.appendChild(style);

// Type definitions and validation functions
const isValidGreeting = (greeting) => {
  const requiredFields = ['text', 'lang', 'country', 'region', 'color'];
  const validColorFormat = /^from-\w+-\d+(\s+to-\w+-\d+)+$/;
  
  try {
    // Check if all required fields exist
    if (!requiredFields.every((field) => greeting.hasOwnProperty(field))) {
      console.warn(`Missing required field in greeting: ${greeting.lang}`);
      return false;
    }

    // Validate text
    if (typeof greeting.text !== 'string' || greeting.text.trim().length === 0) {
      console.warn(`Invalid text in greeting: ${greeting.lang}`);
      return false;
    }

    // Validate variations if they exist
    if (greeting.variations) {
      if (!Array.isArray(greeting.variations) || 
          !greeting.variations.every(v => typeof v === 'string' && v.trim().length > 0)) {
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
    if (typeof greeting.country !== 'string' || greeting.country.length !== 4) {
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
    color: "from-yellow-400 to-orange-500"
  },
  { 
    text: "வணக்கம்!", 
    variations: ["நமஸ்காரம்", "வாழ்க", "நல்வரவு", "காலை வணக்கம்"],
    lang: "Tamil", 
    country: "🇮🇳", 
    region: "தமிழ்",
    color: "from-red-400 to-pink-500"
  },
  { 
    text: "ನಮಸ್ಕಾರ!", 
    variations: ["ಶುಭಾಶಯಗಳು", "ನಮಸ್ತೆ", "ಸ್ವಾಗತ", "ಶುಭೋದಯ"],
    lang: "Kannada", 
    country: "🇮🇳", 
    region: "ಕನ್ನಡ",
    color: "from-red-500 to-yellow-500"
  },
  { 
    text: "നമസ്കാരം!", 
    variations: ["സ്വാഗതം", "നമസ്തേ", "ആശംസകൾ", "സുപ്രഭാതം"],
    lang: "Malayalam", 
    country: "🇮🇳", 
    region: "മലയാളം",
    color: "from-green-400 to-emerald-500"
  },
  // Hindi (National Language)
  {
    text: "नमस्ते!", 
    variations: ["नमस्कार", "प्रणाम", "सुप्रभात", "शुभ प्रभात"],
    lang: "Hindi",
    country: "🇮🇳",
    region: "हिंदी",
    color: "from-orange-500 to-red-500"
  },
  // Asian Languages
  {
    text: "안녕하세요!",
    variations: ["반갑습니다", "안녕", "좋은 아침"],
    lang: "Korean",
    country: "🇰🇷",
    region: "한국어",
    color: "from-blue-400 to-red-400"
  },
  {
    text: "你好!",
    variations: ["早安", "您好", "嗨"],
    lang: "Chinese",
    country: "🇨🇳",
    region: "中文",
    color: "from-red-500 to-yellow-400"
  },
  {
    text: "こんにちは!",
    variations: ["おはよう", "やあ", "どうも"],
    lang: "Japanese",
    country: "🇯🇵",
    region: "日本語",
    color: "from-pink-400 to-red-500"
  },
  // European Languages
  {
    text: "Hello!",
    variations: ["Hi", "Hey", "Good morning", "Greetings"],
    lang: "English",
    country: "🇬🇧",
    region: "English",
    color: "from-blue-500 to-red-500"
  },
  {
    text: "Bonjour!",
    variations: ["Salut", "Bonsoir", "Coucou"],
    lang: "French",
    country: "🇫🇷",
    region: "Français",
    color: "from-blue-400 to-white to-red-400"
  },
  {
    text: "¡Hola!",
    variations: ["Buenos días", "¿Qué tal?", "Saludos"],
    lang: "Spanish",
    country: "🇪🇸",
    region: "Español",
    color: "from-red-500 to-yellow-500"
  },
  {
    text: "Hallo!",
    variations: ["Guten Tag", "Grüß Gott", "Servus"],
    lang: "German",
    country: "🇩🇪",
    region: "Deutsch",
    color: "from-black to-red-500 to-yellow-400"
  },
  // Middle Eastern Languages
  {
    text: "مرحباً!",
    variations: ["السلام عليكم", "صباح الخير", "أهلاً"],
    lang: "Arabic",
    country: "🇸🇦",
    region: "العربية",
    color: "from-green-500 to-white"
  },
  {
    text: "שָׁלוֹם!",
    variations: ["בוקר טוב", "היי", "ברוך הבא"],
    lang: "Hebrew",
    country: "🇮🇱",
    region: "עברית",
    color: "from-blue-400 to-white"
  },
  // Other Asian Languages
  {
    text: "Xin chào!",
    variations: ["Chào", "Chào buổi sáng", "Xin chào bạn"],
    lang: "Vietnamese",
    country: "🇻🇳",
    region: "Tiếng Việt",
    color: "from-red-500 to-yellow-400"
  },
  {
    text: "สวัสดี!",
    variations: ["หวัดดี", "อรุณสวัสดิ์", "สวัสดีครับ/ค่ะ"],
    lang: "Thai",
    country: "🇹🇭",
    region: "ไทย",
    color: "from-blue-500 to-red-500 to-white"
  }
].filter(isValidGreeting);

// Enhanced AnimatedGreeting component with error boundaries and validation
const AnimatedGreeting = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [variationIndex, setVariationIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [error, setError] = useState(null);

  // Validate greetings array
  useEffect(() => {
    if (greetings.length === 0) {
      setError("No valid greetings available");
      return;
    }
  }, []);

  // Safe index management
  const safeSetCurrentIndex = (newIndex) => {
    try {
      const validIndex = Math.max(0, Math.min(newIndex, greetings.length - 1));
      setCurrentIndex(validIndex);
    } catch (error) {
      console.error("Error updating current index:", error);
      setCurrentIndex(0);
    }
  };

  // Safe variation index management
  const safeSetVariationIndex = (greeting, newIndex) => {
    try {
      if (!greeting?.variations) {
        setVariationIndex(0);
        return;
      }
      const validIndex = Math.max(0, Math.min(newIndex, greeting.variations.length - 1));
      setVariationIndex(validIndex);
    } catch (error) {
      console.error("Error updating variation index:", error);
      setVariationIndex(0);
    }
  };

  // Main interval for cycling through greetings
  useEffect(() => {
    if (!isHovered && !error) {
      const interval = setInterval(() => {
        safeSetCurrentIndex((prev) => (prev + 1) % greetings.length);
        setVariationIndex(0);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered, error]);

  // Variation interval
  useEffect(() => {
    if (isHovered && !error) {
      const currentGreeting = greetings[currentIndex];
      if (currentGreeting?.variations?.length > 0) {
        const variationInterval = setInterval(() => {
          safeSetVariationIndex(currentGreeting, variationIndex + 1);
        }, 1000);
        return () => clearInterval(variationInterval);
      }
    }
  }, [isHovered, currentIndex, variationIndex, error]);

  // Error state rendering
  if (error) {
  return (
      <div className="text-red-500 p-4 rounded-lg bg-red-100">
        {error}
        </div>
    );
  }

  // Safe access to current greeting
  const currentGreeting = greetings[currentIndex] || greetings[0];
  if (!currentGreeting) {
    return null;
  }

  // Safe text display
  const getDisplayText = () => {
    try {
      if (isHovered && currentGreeting.variations?.length > 0) {
        return currentGreeting.variations[variationIndex] || currentGreeting.text;
      }
      return currentGreeting.text;
    } catch (error) {
      console.error("Error getting display text:", error);
      return currentGreeting.text;
    }
  };

  return (
    <motion.div 
      className="relative text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div 
        className="min-h-[120px] flex flex-col items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          key={`${currentIndex}-${variationIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`text-4xl font-bold bg-gradient-to-r ${currentGreeting.color} bg-clip-text text-transparent`}
        >
          {getDisplayText()}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-2 text-sm text-gray-400"
        >
          <span role="img" aria-label={`${currentGreeting.lang} flag`}>
            {currentGreeting.country}
          </span>
          {' '}
          <span>{currentGreeting.lang}</span>
          <span className="text-gray-500"> • {currentGreeting.region}</span>
        </motion.div>
        </div>
    </motion.div>
  );
}

// Error Boundary Component
class GreetingErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Greeting component error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
  return (
        <div className="text-center p-4">
          <p className="text-red-500">Something went wrong with the greetings display.</p>
          <button 
            onClick={() => this.setState({ hasError: false })}
            className="mt-2 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Wrap the AnimatedGreeting component with the error boundary
// eslint-disable-next-line no-unused-vars
const SafeAnimatedGreeting = () => (
  <GreetingErrorBoundary>
    <AnimatedGreeting />
  </GreetingErrorBoundary>
);

// eslint-disable-next-line no-unused-vars
const TabButton = ({ active, children, onClick }) => (
  <motion.button
    onClick={onClick}
    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
      active 
        ? 'bg-purple-500/20 text-purple-400 border-b-2 border-purple-500' 
        : 'text-gray-400 hover:text-purple-400 hover:bg-purple-500/10'
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.button>
);

const TechGrid = ({ setActiveTab, isDarkMode }) => (
  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 mb-24" 
    initial="hidden"
    animate="visible"
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.1
        }
      }
    }}
  >
    {Object.entries(technologies).map(([area, techs]) => (
      <motion.div
        key={area}
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        }}
        onClick={() => area === 'applicationPackaging' && setActiveTab('application-packaging')}
        className={`p-5 rounded-xl border transition-all duration-300 group
                   ${isDarkMode 
                     ? `bg-gray-900 border-gray-700 ${area === 'applicationPackaging' ? 'hover:border-cyan-400 hover:bg-gray-800 cursor-pointer' : 'hover:border-gray-600'}`
                     : `bg-white border-gray-200 shadow-lg ${area === 'applicationPackaging' ? 'hover:border-yellow-500 hover:bg-gray-50 cursor-pointer' : 'hover:border-gray-300'}`}
                   }`}
      >
        <h3 className={`text-lg font-semibold mb-3 flex items-center gap-2 ${isDarkMode ? 'text-cyan-400' : 'text-gray-900'}`}>
          {area === 'fullStack' ? '🌐 Full Stack' :
           area === 'desktop' ? '🖥️ Desktop' :
           area === 'mobile' ? '📱 Mobile' :
           area === 'web' ? '🌍 Web' :
           area === 'testing' ? '🧪 Testing' :
           area === 'applicationPackaging' ? (
             <div className="flex items-center gap-2">
               📦 Application Packaging
               <span className={`text-xs px-2 py-0.5 rounded-full ${isDarkMode ? 'text-cyan-300 bg-cyan-900/50' : 'text-yellow-600 bg-yellow-100'}`}>
                 Click to view details ↗
               </span>
             </div>
           ) : area}
        </h3>
        <div className="flex flex-wrap gap-2">
          {techs.map(tech => (
            <motion.span
              key={tech.name}
              whileHover={{ scale: 1.05 }}
              className={`px-2.5 py-1 text-sm rounded-full flex items-center gap-1.5 border hover:border-opacity-40 transition-colors duration-300
                         ${isDarkMode 
                           ? 'bg-gray-800 border-gray-700 text-gray-300 hover:border-cyan-400' 
                           : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-yellow-500 hover:bg-yellow-50'}`}
            >
              <span className="text-base">{tech.icon}</span>
              <span className="relative top-[0.5px]">{tech.name}</span>
            </motion.span>
          ))}
        </div>
      </motion.div>
    ))}
  </motion.div>
);

// Add a Footer component
const Footer = ({ contrast = false }) => (
  <footer className={`w-full py-8 px-4 mt-auto ${contrast ? 'bg-black' : 'bg-gradient-to-t from-black/40 to-transparent'}`}>
    <div className="container mx-auto text-center">
      <p className={`${contrast ? 'text-gray-300' : 'text-gray-700'} text-sm font-medium`}>
        © {new Date().getFullYear()} Aditya Janjanam. All rights reserved.
      </p>
    </div>
  </footer>
);

// --- Animated Multilingual Greeting Component ---
const AnimatedMultilingualGreeting = () => {
  const greetings = [
    { text: 'నమస్కారం!', langCode: 'te', fontFamily: "'Noto Sans Telugu', Gautami, sans-serif" }, 
    { text: 'नमस्ते!', langCode: 'hi', fontFamily: "'Noto Sans Devanagari', Nirmala UI, sans-serif" },
    { text: 'வணக்கம்!', langCode: 'ta', fontFamily: "'Noto Sans Tamil', Nirmala UI, sans-serif" },
    { text: 'ನಮಸ್ಕಾರ!', langCode: 'kn', fontFamily: "'Noto Sans Kannada', Nirmala UI, sans-serif" },
    { text: 'নমস্কার!', langCode: 'bn', fontFamily: "'Noto Sans Bengali', Nirmala UI, sans-serif" },
    { text: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ!', langCode: 'pa', fontFamily: "'Noto Sans Gurmukhi', Nirmala UI, sans-serif" },
    { text: 'നമസ്കാരം!', langCode: 'ml', fontFamily: "'Noto Sans Malayalam', Nirmala UI, sans-serif" },
    { text: 'નમસ્તે!', langCode: 'gu', fontFamily: "'Noto Sans Gujarati', Nirmala UI, sans-serif" },
    { text: 'ନମସ୍କାର!', langCode: 'or', fontFamily: "'Noto Sans Oriya', Kalinga, sans-serif" },
    { text: 'नमस्कार!', langCode: 'mr', fontFamily: "'Noto Sans Devanagari', Nirmala UI, sans-serif" },
    { text: 'Hello!', langCode: 'en', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" },
    { text: 'Hola!', langCode: 'es', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" },
    { text: 'Bonjour!', langCode: 'fr', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" },
    { text: '你好!', langCode: 'zh', fontFamily: "'PingFang SC', 'Microsoft YaHei', SimHei, sans-serif" },
    { text: 'こんにちは!', langCode: 'ja', fontFamily: "'Hiragino Kaku Gothic ProN', Meiryo, sans-serif" },
    { text: '안녕하세요!', langCode: 'ko', fontFamily: "'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif" },
    { text: 'Olá!', langCode: 'pt', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" },
    { text: 'Ciao!', langCode: 'it', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" },
    { text: 'Hallo!', langCode: 'de', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" },
    { text: 'Привет!', langCode: 'ru', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" },
    { text: 'مرحباً!', langCode: 'ar', fontFamily: "'Noto Naskh Arabic', Tahoma, sans-serif" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(intervalId);
  }, [greetings.length]);

  const currentGreeting = greetings[currentIndex];

  return (
    <div className="h-16 mb-4 flex items-center"> {/* Fixed height container */}
      <AnimatePresence mode="wait">
        <motion.h2
          key={currentIndex} 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }} 
          style={{ fontFamily: currentGreeting.fontFamily }}
          className="text-4xl lg:text-5xl font-semibold text-yellow-400" 
          lang={currentGreeting.langCode} 
        >
          {currentGreeting.text}
        </motion.h2>
      </AnimatePresence>
      </div>
  );
};

// --- Home Component (Further Reduced Footer Gap) ---
const Home = ({ setActiveTab, isDarkMode }) => {
  return (
    <div className={`relative ${isDarkMode ? 'bg-[#080808] text-gray-200' : 'bg-white text-gray-800'}`}> 
      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12 pt-12 pb-12"> 
        <div className="flex flex-col lg:flex-row items-start justify-between gap-x-16 gap-y-12"> 
          
          {/* --- Left Column: Text Content --- */}
          <div className="lg:w-3/5 w-full flex flex-col"> 
             {/* ... Greeting, Name/Role, Stats, Summary, CTA ... */}
             <AnimatedMultilingualGreeting /> 
             <div className="mb-10"> 
               <h1 className={`text-3xl lg:text-4xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}> 
                 <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-700'} mr-2`}>I am</span> 
                 <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>Aditya Janjanam!</span>
               </h1>
               <p className={`text-base lg:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}> 
                 Full Stack Developer | Mobile App Developer | Software Engineer
               </p>
             </div>
             <div className="flex flex-wrap gap-x-10 gap-y-4 mb-10"> 
               <div className="text-center">
                 <div className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>3</div> 
                 <div className={`text-xs lg:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'} mt-1 uppercase tracking-wider`}>Years Experience</div> 
               </div>
               <div className="text-center">
                 <div className={`text-3xl lg:text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>15+</div>
                 <div className={`text-xs lg:text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-700'} mt-1 uppercase tracking-wider`}>Projects</div> 
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
          <div className="lg:w-2/5 w-full max-w-sm mx-auto lg:mx-0 flex flex-col items-center lg:items-start"> 
            {/* Photo Section */}
            <motion.div 
              className="w-full" 
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.1 }}
            >
              <div className="relative group"> 
                {/* Background Card Element */}
                <div className="absolute -inset-1.5 bg-gradient-to-br from-yellow-400/50 via-yellow-400/10 to-transparent rounded-xl 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md z-0"></div> 

                {/* Main Photo Container */}
                <motion.div 
                  className={`relative aspect-[3/4] rounded-xl overflow-hidden z-10 
                             ${isDarkMode ? 'bg-[#1a1a1a] border-gray-700/80' : 'bg-white border-gray-200/80'} 
                             border shadow-xl ${isDarkMode ? 'shadow-gray-900/50' : 'shadow-gray-200/50'} 
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
                  
                  {/* Overlay Removed/Ignored as we add local backgrounds now */}
                  
                  {/* ===> Status Indicator (Enhanced Background) <=== */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.4 }} 
                    className={`absolute top-3 right-3 flex items-center gap-1.5 
                               ${isDarkMode ? 'bg-black/60' : 'bg-white/90'} backdrop-blur-sm px-2.5 py-1 rounded-full  
                               border ${isDarkMode ? 'border-white/15' : 'border-gray-200/50'} shadow-md z-30`}
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full" /> 
                    {/* Text remains white, background ensures visibility */}
                    <span className={`text-xs font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Available for hire</span> 
                  </motion.div>
                  
                  {/* ===> Bottom Info (with Localized Background) <=== */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 0.5 }} 
                    className={`absolute bottom-0 inset-x-0 pt-10 pb-3 px-3.5  
                               ${isDarkMode 
                                 ? 'bg-gradient-to-t from-black/75 via-black/50 to-transparent' 
                                 : 'bg-gradient-to-t from-white/90 via-white/70 to-transparent'} 
                               pointer-events-none z-30`}
                  >
                    {/* Text color remains white/light gray */}
                    <h3 className={`${isDarkMode ? 'text-white' : 'text-gray-900'} text-lg font-semibold`}>Aditya Janjanam</h3> 
                    <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-700'} text-sm mt-0.5`}>Full Stack Developer</p> 
                  </motion.div>
                </motion.div> {/* End of Main Photo Container */}
              </div> {/* End of Relative Group */}
            </motion.div> {/* End of Outer Motion Div */}

            {/* Social Links */}
            <div className="mt-6 flex justify-center lg:justify-start w-full"> 
              <SocialLinks isDarkMode={isDarkMode} />
            </div>
          </div> 
          {/* --- End of Right Column --- */}

        </div>

        {/* Tech Grid */}
        {/* ===> ADJUSTED MARGIN HERE <=== */}
        {/* Changed mt-20 to mt-12 */}
        <div className="mt-12"> 
           <TechGrid setActiveTab={setActiveTab} isDarkMode={isDarkMode} /> 
        </div>
      </div> 
      {/* Footer */}
      <Footer isDarkMode={isDarkMode} /> 
    </div>
  );
};

// Update the BriefSummary component
const BriefSummary = ({ isDarkMode }) => (
  <motion.div 
    className={`mt-8 p-6 rounded-xl border ${isDarkMode 
      ? 'bg-gray-900 border-gray-700 shadow-lg' 
      : 'bg-white border-gray-200 shadow-lg'} sm:p-8`}
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'} sm:text-3xl`}>About Me</h3>
    <p className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed sm:text-lg text-justify`}>
      As an international student, I am currently pursuing a Graduate Certificate in Mobile Applications Development at Centennial College in Toronto. Additionally, I hold a distinguished degree in Computer Applications Development from Conestoga College in Waterloo.
    </p>
    <p className={`mt-4 text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed sm:text-lg text-justify`}>
      With over 3 years of IT experience in software development and systems engineering, I have honed my skills through two years of professional engagement as a Systems Engineer at Atos. My specialization in Application Packaging and Testing has enabled me to streamline deployment processes, automate installations, and enhance application performance across diverse enterprise environments.
    </p>
    <p className={`mt-4 text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed sm:text-lg text-justify`}>
      My passion is centered on developing high-quality Mobile, Web, and Desktop Applications and Websites. I am proficient in a variety of technologies, including Android, iOS, Flutter, React Native, Node.js, and scripting languages such as PowerShell and VBScript. I am keen to apply my technical expertise and practical experience to contribute to innovative projects and thrive in dynamic team environments within the technology sector.
    </p>
  </motion.div>
);

const Experience = ({ isDarkMode }) => {
  return (
    <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 ${isDarkMode ? 'bg-[#080808] text-gray-200' : 'bg-white text-gray-900'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className={`text-3xl sm:text-4xl font-bold ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'} mb-3`}>
          Professional Experience
        </h2>
        <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
          Building enterprise solutions and delivering quality software
        </p>
      </motion.div>

      <div className="relative space-y-10">
        <div className={`absolute left-4 top-2 bottom-2 w-0.5 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} hidden md:block`} />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative group"
          >
            <div className={`absolute left-[10px] top-1 w-4 h-4 rounded-full ${isDarkMode ? 'bg-yellow-400 border-gray-800' : 'bg-yellow-500 border-gray-200'} border-2 hidden md:block
                          group-hover:scale-125 transition-transform duration-300`} />

            <div className={`ml-0 md:ml-10 p-6 rounded-lg ${isDarkMode 
              ? 'bg-[#1a1a1a] border-gray-700' 
              : 'bg-white border-gray-200 shadow-lg'} border
                          hover:border-gray-600 transition-colors duration-300`}>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                <div>
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'} flex items-center gap-2`}>
                    <span>{exp.logo}</span>
                    {exp.title} @ {exp.company}
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>{exp.date}</p>
                </div>
                <span className={`mt-2 sm:mt-0 px-3 py-1 text-sm ${isDarkMode 
                  ? 'bg-purple-500/20 text-purple-300' 
                  : 'bg-yellow-500/10 text-yellow-700'} rounded-full`}>
                  {exp.location}
                </span>
              </div>

              <ul className={`space-y-2 mb-4 list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {exp.description.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + (i * 0.1) }}
                    className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors`}
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
                    transition={{ delay: index * 0.2 + (i * 0.1) }}
                    className={`px-3 py-1 text-sm rounded-full ${isDarkMode 
                      ? 'bg-purple-500/10 text-purple-300 hover:bg-purple-500/20' 
                      : 'bg-yellow-500/10 text-yellow-700 hover:bg-yellow-500/20'} transition-all duration-300`}
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

const Education = ({ isDarkMode }) => {
  const educationData = [
    {
      program: 'Mobile Applications Development',
      institution: 'Centennial College',
      location: 'Toronto, ON',
      period: '2024-2025',
      type: 'Graduate Certificate',
      courses: [
        'Samsung Android Application Development',
        'Web Technologies for Mobile Platforms',
        'Enterprise Technologies for Mobile Platforms',
        'iOS Development',
        'Mobile Application UI/UX Design',
        'Samsung Advanced Android Development',
        'Mobile Web Development',
        'Advanced iOS Development',
        'Emerging Technologies',
        'Mobile Application Development Project'
      ]
    },
    {
      program: 'Computer Applications Development',
      institution: 'Conestoga College',
      location: 'Waterloo, ON',
      period: '2024-2025',
      type: 'Graduate Certificate',
      Grade: 'Distinction',
      courses: [
        'Systems Concepts, Analysis and Design',
        'Programming: Software Development Techniques',
        'Programming: Web Design and Development',
        'Programming: Database Management',
        'Web Foundations',
        'System Development Project',
        'Programming: Mobile Application Development',
        'Microsoft Web Technologies',
        'User Experience Design',
        'Software Quality'
      ]
    }
  ];

  return (
    <div className={`container mx-auto px-4 py-16 ${isDarkMode ? 'bg-[#080808] text-gray-200' : 'bg-white text-gray-900'}`}>
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent bg-clip-text">
        Education
      </h2>
      
      <div className="space-y-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`relative p-6 rounded-2xl overflow-hidden group
                     ${isDarkMode 
                       ? 'bg-[#1a1a1a] border-gray-700' 
                       : 'bg-white border-gray-200 shadow-lg'}
                     hover:border-gray-600 transition-all duration-300`}
          >
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className={`text-2xl font-bold ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'} mb-2`}>{edu.program}</h3>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{edu.institution}</p>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{edu.location}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{edu.period}</p>
                  <p className={`${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>{edu.type}</p>
                  {edu.Grade && (
                    <p className={`${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'} font-semibold text-sm mt-1`}>Grade: {edu.Grade}</p> 
                  )}
                  {edu.status && (
                    <p className={`${isDarkMode ? 'text-green-400' : 'text-green-600'} text-sm mt-1`}>{edu.status}</p>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>Key Courses</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {edu.courses.map((course, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.2) + (idx * 0.1) }}
                      className={`flex items-center gap-2 p-3 rounded-lg
                               ${isDarkMode 
                                 ? 'bg-gray-900 border-gray-700' 
                                 : 'bg-gray-50 border-gray-200'}
                               hover:border-gray-600 transition-all duration-300`}
                    >
                      <span className={`${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>•</span>
                      <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>{course}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Projects = ({ isDarkMode }) => {
  const projects = [
    {
      title: 'HealthTrackPro',
      description: 'A comprehensive healthcare provider app built with React Native for tracking patient data. Features include QR sync, offline-first capability, clinical data management, and interactive charts.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'REST API'],
      type: 'Healthcare App',
      link: 'https://github.com/adityajanjanam/HealthTrackPro',
      image: '🏥',
      highlights: [
        'Offline-first architecture',
        'Real-time data synchronization',
        'HIPAA compliant data handling',
        'Interactive medical charts'
      ]
    },
    {
      title: 'TrainWithTail',
      description: 'Pet training platform offering tailored programs, expert advice, and an integrated pet product shop for enhanced pet-owner relationships.',
      tech: ['Node.js', 'MongoDB', 'HTML5', 'CSS3', 'JavaScript'],
      type: 'Full Stack Web App',
      link: 'https://github.com/adityajanjanam/TrainWithTail',
      image: '🐕',
      highlights: [
        'Personalized training programs',
        'E-commerce integration',
        'Expert consultation system',
        'Progress tracking dashboard'
      ]
    },
    {
      title: 'PatientDataAPI',
      description: 'RESTful API for healthcare providers to manage and monitor patient clinical data. Built with Node.js and MongoDB, featuring Swagger documentation.',
      tech: ['Node.js', 'Express', 'MongoDB', 'Swagger'],
      type: 'Backend API',
      link: 'https://github.com/adityajanjanam/PatientDataAPI',
      image: '🔌',
      highlights: [
        'RESTful architecture',
        'Comprehensive API documentation',
        'Secure data handling',
        'Scalable database design'
      ]
    },
    {
      title: 'Scientific Calculator',
      description: 'Modern scientific calculator app with advanced mathematical operations, built using React Native and Expo for cross-platform compatibility.',
      tech: ['React Native', 'Expo', 'JavaScript'],
      type: 'Mobile Utility App',
      link: 'https://github.com/adityajanjanam/ScientificCalculatorApp',
      image: '🧮',
      highlights: [
        'Cross-platform compatibility',
        'Advanced mathematical functions',
        'Intuitive user interface',
        'Offline functionality'
      ]
    },
    {
      title: 'MAPD721 Android Animations',
      description: 'Interactive Android app showcasing various Jetpack Compose animations, including animated transitions, infinite animations, and gesture-based interactions.',
      tech: ['Kotlin', 'Jetpack Compose', 'Material Design'],
      type: 'Android App',
      link: 'https://github.com/adityajanjanam/MAPD721_A3_Aditya',
      image: '📱',
      highlights: [
        'Custom animations',
        'Gesture interactions',
        'Material Design implementation',
        'Performance optimization'
      ]
    },
    {
      title: 'Text to PDF Converter',
      description: 'React-based utility for converting text documents to PDF format with customizable options and preview functionality.',
      tech: ['React', 'JavaScript', 'PDF.js'],
      type: 'Web Utility',
      link: 'https://github.com/adityajanjanam/TextToPDFConverter',
      image: '📄',
      highlights: [
        'PDF generation',
        'Custom formatting options',
        'Live preview',
        'Batch processing'
      ]
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather monitoring application with detailed forecasts, interactive maps, and severe weather alerts.',
      tech: ['React', 'OpenWeather API', 'Mapbox', 'TailwindCSS'],
      type: 'Web Application',
      link: 'https://github.com/adityajanjanam/WeatherDashboard',
      image: '🌤️',
      highlights: [
        'Real-time updates',
        'Interactive weather maps',
        'Location-based forecasts',
        'Severe weather alerts'
      ]
    },
    {
      title: 'Task Manager Pro',
      description: 'Full-featured task management application with team collaboration, progress tracking, and deadline management capabilities.',
      tech: ['React', 'Redux', 'Firebase', 'Material-UI'],
      type: 'Productivity App',
      link: 'https://github.com/adityajanjanam/TaskManagerPro',
      image: '📋',
      highlights: [
        'Team collaboration',
        'Real-time updates',
        'Progress analytics',
        'Deadline tracking'
      ]
    }
  ];

  return (
    <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 ${isDarkMode ? 'bg-[#080808] text-gray-200' : 'bg-white text-gray-900'}`}>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent bg-clip-text mb-4">
          Featured Projects
        </h2>
        <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
          Showcasing my technical expertise and creative problem-solving
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <div className={`h-full p-6 rounded-xl ${isDarkMode 
              ? 'bg-[#1a1a1a] border-gray-700' 
              : 'bg-white border-gray-200 shadow-lg'} border
                          hover:border-gray-600 transition-all duration-500`}>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{project.image}</span>
                  <div>
                    <h3 className={`text-xl font-bold ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>{project.title}</h3>
                    <span className={`text-sm ${isDarkMode ? 'text-yellow-400/70 bg-yellow-500/10' : 'text-yellow-600/70 bg-yellow-500/10'} px-2 py-0.5 rounded-full`}>
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
                  className={`p-2 rounded-full ${isDarkMode 
                    ? 'bg-yellow-500/10 hover:bg-yellow-500/20' 
                    : 'bg-yellow-500/10 hover:bg-yellow-500/20'} 
                    transition-colors duration-300`}
                >
                  <svg className={`w-5 h-5 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
              </div>

              <p className={`mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} line-clamp-2 group-hover:line-clamp-none transition-all duration-300`}>
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'} mb-2`}>Key Highlights</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {project.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + (i * 0.1) }}
                      className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                      <svg className={`w-4 h-4 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + (i * 0.1) }}
                    className={`px-3 py-1 text-sm rounded-full ${isDarkMode 
                      ? 'bg-yellow-500/10 text-yellow-300 hover:bg-yellow-500/20' 
                      : 'bg-yellow-500/10 text-yellow-700 hover:bg-yellow-500/20'} transition-all duration-300`}
                  >
                    {tech}
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

// Update the ApplicationPackagingSection component with adjusted padding and spacing
const ApplicationPackagingSection = ({ setActiveTab, isDarkMode }) => {
  const tools = [
    { name: 'MSI/MSIX', icon: '📦', description: 'Enterprise Package Creation' },
    { name: 'PowerShell', icon: '💻', description: 'Automation & Scripting' },
    { name: 'SCCM/MECM', icon: '🔄', description: 'Enterprise Deployment' },
    { name: 'Intune', icon: '☁️', description: 'Cloud Management' }
  ];

  const additionalTools = [
    { name: 'AdminStudio', icon: '🛠️', description: 'Package Engineering' },
    { name: 'InstallShield', icon: '🔨', description: 'MSI Authoring' },
    { name: 'PSADT', icon: '📜', description: 'Deployment Toolkit' },
    { name: 'Process Monitor', icon: '🔍', description: 'System Analysis' }
  ];

  return (
    <div className={`w-full max-w-6xl mx-auto py-8 ${isDarkMode ? 'bg-[#080808] text-gray-200' : 'bg-white text-gray-900'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-center"
      >
        <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'} mb-3`}>Application Packaging</h2>
        <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>Enterprise Software Deployment Solutions</p>
      </motion.div>

      {/* Core Tools */}
      <div className="mb-8">
        <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'} mb-4`}>Core Technologies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-4 rounded-xl border ${isDarkMode 
                ? 'bg-[#1a1a1a] border-gray-700' 
                : 'bg-white border-gray-200 shadow-lg'}
                hover:border-gray-600 transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{tool.icon}</span>
                <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{tool.name}</h4>
              </div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{tool.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Tools */}
      <div>
        <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'} mb-4`}>Supporting Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {additionalTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (index * 0.1) }}
              className={`p-4 rounded-xl border ${isDarkMode 
                ? 'bg-[#1a1a1a] border-gray-700' 
                : 'bg-white border-gray-200 shadow-lg'}
                hover:border-gray-600 transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{tool.icon}</span>
                <h4 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{tool.name}</h4>
              </div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{tool.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <motion.button
        onClick={() => setActiveTab('home')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className={`mt-8 ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'} hover:${isDarkMode ? 'text-yellow-300' : 'text-yellow-500'} transition-colors flex items-center gap-2`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
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
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
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
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </motion.button>
  );
};

// --- App Component (Keep Main Padding Matching Header Height) ---
const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

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