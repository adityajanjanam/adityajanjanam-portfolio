import { motion } from "framer-motion";
import * as React from "react";
import { useEffect, useState } from "react";

// Move award image imports to the top, before other asset imports
import conestogaScavengerHunt from "./assets/awards/conestoga-scavenger-hunt.jpg";
import gdgWaterloo2025_1 from "./assets/awards/gdg-waterloo-2025-1.png";
import technoHolmes from "./assets/awards/techno-holmes.jpg";
import greatlearningLogo from "./assets/greatlearning.png";
import sololearnLogo from "./assets/sololearn.png";
import uwaterlooLogo from "./assets/uwaterloo.png";
import wrmuseumLogo from "./assets/wrmuseum.png";
import Education from "./components/Education/index";
import EmojiFeedbackWidget from "./components/EmojiFeedback";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials/Testimonials";

const technologies = {
  fullStack: [
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "⚡" },
    { name: "Node.js", icon: "🌐" },
    { name: "Express", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "MERN Stack", icon: "⚡" },
    { name: "REST APIs", icon: "🔌" },
    { name: "GraphQL", icon: "📊" },
    { name: "JWT Auth", icon: "🔐" },
    { name: "OAuth", icon: "🔑" },
  ],
  frontend: [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript (ES6+)", icon: "📜" },
    { name: "TypeScript", icon: "📘" },
    { name: "React.js", icon: "⚛️" },
    { name: "Next.js", icon: "⚡" },
    { name: "Redux", icon: "🔄" },
    { name: "MUI (Material-UI)", icon: "🎨" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Responsive Design", icon: "📱" },
  ],
  backend: [
    { name: "Node.js", icon: "🌐" },
    { name: "Express", icon: "🚀" },
    { name: "RESTful APIs", icon: "🔌" },
    { name: "GraphQL", icon: "📊" },
    { name: "MongoDB", icon: "🍃" },
    { name: "JWT", icon: "🔐" },
    { name: "OAuth", icon: "🔑" },
    { name: "Axios/Fetch", icon: "🌐" },
  ],
  desktop: [
    { name: ".NET", icon: "🎯" },
    { name: "C#", icon: "🔷" },
    { name: "WPF", icon: "🖥️" },
    { name: "WinForms", icon: "🪟" },
    { name: "ASP.NET MVC", icon: "🌐" },
    { name: "Entity Framework", icon: "🗄️" },
  ],
  mobile: [
    { name: "Flutter", icon: "📱" },
    { name: "React Native", icon: "⚛️" },
    { name: "Android/Kotlin", icon: "🤖" },
    { name: "iOS/Swift", icon: "🍎" },
    { name: "Dart", icon: "🎯" },
    { name: "Firebase", icon: "🔥" },
  ],
  web: [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript (ES6+)", icon: "📜" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Responsive Design", icon: "📱" },
  ],
  languages: [
    { name: "JavaScript (ES6+)", icon: "📜" },
    { name: "TypeScript", icon: "📘" },
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "C", icon: "🔧" },
    { name: "C++", icon: "⚡" },
    { name: "Dart", icon: "🎯" },
    { name: "C#", icon: "🔷" },
  ],
  testing: [
    { name: "Manual Testing", icon: "🔍" },
    { name: "Selenium", icon: "🧪" },
    { name: "JUnit", icon: "☕" },
    { name: "Test Automation", icon: "🤖" },
    { name: "Postman", icon: "📮" },
    { name: "Frontend Validation", icon: "✅" },
  ],
  devops: [
    { name: "Git", icon: "📝" },
    { name: "GitHub", icon: "🐙" },
    { name: "GitLab", icon: "🦊" },
    { name: "Bitbucket", icon: "🪣" },
    { name: "CI/CD", icon: "🔄" },
    { name: "AWS", icon: "☁️" },
  ],
  cloud: [
    { name: "Firebase", icon: "🔥" },
    { name: "AWS", icon: "☁️" },
    { name: "Cloud Deployment", icon: "🚀" },
    { name: "Serverless", icon: "⚡" },
  ],
  uiux: [
    { name: "Figma", icon: "🎨" },
    { name: "Adobe XD", icon: "✏️" },
    { name: "Responsive Design", icon: "📱" },
    { name: "UI/UX Design", icon: "🎯" },
    { name: "Notion", icon: "📝" },
  ],
  collaboration: [
    { name: "Notion", icon: "📝" },
    { name: "GitHub Projects", icon: "📋" },
    { name: "Jira", icon: "🎫" },
    { name: "Agile", icon: "🔄" },
    { name: "Team Collaboration", icon: "👥" },
  ],
  aiTools: [
    { name: "ChatGPT", icon: "🤖" },
    { name: "Claude AI", icon: "🧠" },
    { name: "Gemini", icon: "💎" },
    { name: "Perplexity AI", icon: "🔍" },
    { name: "Cursor AI", icon: "⌨️" },
    { name: "GitHub Copilot", icon: "👨‍💻" },
    { name: "DeepSeek", icon: "🔬" },
    { name: "Grok AI", icon: "🚀" },
    { name: "Stable Diffusion", icon: "🎭" },
    { name: "Anthropic Claude", icon: "🧬" },
    { name: "Notion AI", icon: "📝" },
  ],
  applicationPackaging: [
    { name: "MSI/MSIX", icon: "📦" },
    { name: "PowerShell", icon: "💻" },
    { name: "SCCM/MECM", icon: "🔄" },
    { name: "Intune", icon: "☁️" },
    { name: "Admin Studio", icon: "🛠️" },
    { name: "InstallShield", icon: "🛡️" },
    { name: "Orca", icon: "🔧" },
    { name: "VBScript", icon: "📜" },
  ],
};

// eslint-disable-next-line no-unused-vars
const experiences = [
  {
    title: "Career Break / Professional Development",
    company: "Centennial College & Conestoga College",
    date: "Sep 2023 – Apr 2025",
    location: "Toronto & Waterloo, Ontario",
    description: [
      "Completed Mobile Applications Development at Centennial College (Sep 2024 – Apr 2025): Specialized in advanced mobile app development for Android/iOS, mobile architecture, UI/UX, and backend integration. Hands-on with Kotlin, Swift, React Native, and industry-driven projects.",
      "Completed Computer Applications Development at Conestoga College (Sep 2023 – Apr 2024, Distinction): Focused on full-stack/web development, real-world projects, and modern technologies. Courses included Systems Concepts, Web Design, Database, Mobile App Dev, User Experience, and Software Quality.",
    ],
    skills: [
      "Full-Stack Development",
      "User Experience (UX)",
      "React Native",
      "Web Applications",
      "Software Development",
      "iOS Development",
      "Mobile Application Development",
      "Debugging",
      "Microsoft Visual Studio Code",
      "Mobile Interface Design",

      "Android Development",
      "User Experience Design (UED)",
      "Object-Oriented Programming (OOP)",
      "SQL",
      "C#",
      "MERN Stack",
      "Web Development",
      "Front-end Development",
      "Software Development Life Cycle (SDLC)",
    ],
    logo: "🎓",
  },
  {
    title:
      "Application Packager | Source Validation, Packaging, Testing | GCM Level 2",
    company: "Atos",
    date: "Jun 2022 – Aug 2023",
    location: "Chennai, India",
    description: [
      "Performed Source Validation (Discovery) to ensure the accuracy of application data.",
      "Application Packaging using industry-standard tools.",
      "Conducted thorough Testing to ensure package quality.",
      "Delivered application packages within strict SLA deadlines with zero QA failures.",
    ],
    skills: [
      "MSI Packaging",
      "Microsoft Office",
      "Windows Installer (MSI)",
      "VMware",
      "WinSCP",
      "Object-Oriented Programming (OOP)",
      "Application Discovery",
      "Windows 10",
      "Wise Packaging Studio",
      "Programming",
      "Picture taker",
      "Windows 7",
      "Hyper-V",
      "Powershell",
      "Debugging",
      "Problem Solving",
      "VirtualBox",
      "Microsoft Visual Studio Code",
      "Orca",
      "Microsoft Endpoint Configuration Manager",
      "Installshield Admin Studio",
      "VBScript",
      "Filezilla",
      "Application packaging",
    ],
    logo: "🏢",
  },
  {
    title:
      "Application Packaging Trainee | Source Validation, Packaging, Testing | GCM Level 1",
    company: "Atos",
    date: "Jun 2021 – Jun 2022",
    location: "Chennai, India",
    description: [
      "Trained for 2 months on Application Packaging for Windows OS before starting project work.",
      "Conducted Source Validation (Discovery) for applications, ensuring accurate data collection.",
      "Performed Application Packaging for projects across Central Europe and North America.",
      "Ensured successful Testing of packaged applications to meet quality standards.",
      "Delivered application packages within the agreed SLA, maintaining zero QA failures.",
    ],
    skills: [
      "MSI Packaging",
      "Microsoft Office",
      "Windows Installer (MSI)",
      "VMware",
      "WinSCP",
      "Object-Oriented Programming (OOP)",
      "Application Discovery",
      "Windows 10",
      "Wise Packaging Studio",
      "Programming",
      "Picture taker",
      "Windows 7",
      "Hyper-V",
      "Powershell",
      "Debugging",
      "Problem Solving",
      "VirtualBox",
      "Orca",
      "Microsoft Endpoint Configuration Manager",
      "Application Packaging",
      "Installshield Admin Studio",
      "VBScript",
      "Filezilla",
      "Application packaging",
    ],
    logo: "🏢",
  },
  {
    title: "Associate Software Engineer Intern | Full Stack Developer (MERN Stack)",
    company: "Tech Mahindra",
    date: "Jan 2021 – Jun 2021",
    location: "Chennai, Tamil Nadu, India · Remote",
    description: [
      "Worked on Full Stack Web Development using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Developed responsive web pages and interactive UI components with React.js, HTML, CSS, and JavaScript.",
      "Built RESTful APIs using Node.js and Express.js and integrated them with MongoDB using Mongoose.",
      "Implemented user authentication with JWT and bcrypt for secure login functionality.",
      "Used Axios for API integration and managed state with React Hooks and Redux Toolkit.",
      "Collaborated with the team using Git, GitHub, and Jira, following Agile/Scrum practices.",
      "Deployed applications using Vercel, Netlify, and Firebase Hosting.",
    ],
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "HTML",
      "CSS",
      "Redux Toolkit",
      "Axios",
      "JWT",
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "Netlify",
      "Firebase",
    ],
    logo: "🏢",
  },
  {
    title: "Software Engineer Intern | React.js",
    company: "Capgemini",
    date: "Sep 2020 – Dec 2020",
    location: "Bengaluru, Karnataka, India · Remote",
    description: [
      "Worked on developing responsive and interactive web pages using React.js, HTML, CSS, and JavaScript.",
      "Built and maintained reusable React components for dynamic web applications.",
      "Integrated APIs using Axios to display real-time data on the frontend.",
      "Collaborated with team members to enhance UI design and improve user experience.",
      "Used Git and GitHub for version control and deployed projects on Vercel/Netlify for live testing.",
    ],
    skills: [
      "React.js",
      "HTML",
      "CSS",
      "JavaScript",
      "Axios",
      "Git",
      "GitHub",
      "Vercel",
      "Netlify",
      "Visual Studio Code",
    ],
    logo: "💻",
  },
];

// eslint-disable-next-line no-unused-vars
const projects = [
  {
    title: "HealthTrackPro (Flutter)",
    description:
      "A full-stack healthcare management solution designed to assist medical professionals " +
      "in tracking patient details and vital health records seamlessly. Built with Flutter and Node.js/Express.",
    tech: ["Flutter", "Node.js", "Express.js", "MongoDB", "REST API", "Hive"],
    type: "Full Stack Healthcare App",
    link: "https://github.com/adityajanjanam/HEALTH_TRACK_PRO",
    image: "🏥",
    highlights: [
      "Offline-first (Hive)",
      "Secure JWT Authentication",
      "Patient & Vitals Management",
      "Dark/Light Mode",
    ],
  },
  {
    title: "HealthTrackPro (React Native)",
    description:
      "A comprehensive healthcare provider app built with React Native for tracking patient data. " +
      "Features include QR sync, offline-first capability, clinical data management, and interactive charts.",
    tech: ["React Native", "Node.js", "MongoDB", "REST API"],
    type: "Healthcare App",
    link: "https://github.com/adityajanjanam/HealthTrackPro",
    image: "⚛️",
    highlights: [
      "Offline-first architecture",
      "Real-time data synchronization",
      "HIPAA compliant data handling",
      "Interactive medical charts",
    ],
  },
  {
    title: "TrainWithTail",
    description:
      "Pet training platform offering tailored programs, expert advice, and an integrated " +
      "pet product shop for enhanced pet-owner relationships.",
    tech: ["Node.js", "MongoDB", "HTML5", "CSS3", "JavaScript"],
    type: "Full Stack Web App",
    link: "https://github.com/adityajanjanam/TrainWithTail",
    image: "🐕",
    highlights: [
      "Personalized training programs",
      "E-commerce integration",
      "Expert consultation system",
      "Progress tracking dashboard",
    ],
  },
  {
    title: "PatientDataAPI",
    description:
      "RESTful API for healthcare providers to manage and monitor patient clinical data. " +
      "Built with Node.js and MongoDB, featuring Swagger documentation.",
    tech: ["Node.js", "Express", "MongoDB", "Swagger"],
    type: "Backend API",
    link: "https://github.com/adityajanjanam/PatientDataAPI",
    image: "🔌",
    highlights: [
      "RESTful architecture",
      "Comprehensive API documentation",
      "Secure data handling",
      "Scalable database design",
    ],
  },
  {
    title: "Scientific Calculator",
    description:
      "Modern scientific calculator app with advanced mathematical operations, built using " +
      "React Native and Expo for cross-platform compatibility.",
    tech: ["React Native", "Expo", "JavaScript"],
    type: "Mobile Utility App",
    link: "https://github.com/adityajanjanam/ScientificCalculatorApp",
    image: "🧮",
    highlights: [
      "Cross-platform compatibility",
      "Advanced mathematical functions",
      "Intuitive user interface",
      "Offline functionality",
    ],
  },
  {
    title: "Android Animation Studio",
    description:
      "Interactive Android app showcasing various Jetpack Compose animations, including " +
      "animated transitions, infinite animations, and gesture-based interactions.",
    tech: ["Kotlin", "Jetpack Compose", "Material Design"],
    type: "Android App",
    link: "https://github.com/adityajanjanam/MAPD721_A3_Aditya",
    image: "📱",
    highlights: [
      "Custom animations",
      "Gesture interactions",
      "Material Design implementation",
      "Performance optimization",
    ],
  },
  {
    title: "Text to PDF Converter",
    description:
      "React-based utility for converting text documents to PDF format with customizable " +
      "options and preview functionality.",
    tech: ["React", "JavaScript", "PDF.js"],
    type: "Web Utility",
    link: "https://github.com/adityajanjanam/TextToPDFConverter",
    image: "📄",
    highlights: [
      "PDF generation",
      "Custom formatting options",
      "Live preview",
      "Batch processing",
    ],
  },
  {
    title: "Weather Dashboard",
    description:
      "Real-time weather monitoring application with detailed forecasts, interactive maps, " +
      "and severe weather alerts.",
    tech: ["React", "OpenWeather API", "Mapbox", "TailwindCSS"],
    type: "Web Application",
    link: "https://github.com/adityajanjanam/WeatherDashboard",
    image: "🌤️",
    highlights: [
      "Real-time updates",
      "Interactive weather maps",
      "Location-based forecasts",
      "Severe weather alerts",
    ],
  },
  {
    title: "Task Manager Pro",
    description:
      "Full-featured task management application with team collaboration, progress tracking, " +
      "and deadline management capabilities.",
    tech: ["React", "Redux", "Firebase", "Material-UI"],
    type: "Productivity App",
    link: "https://github.com/adityajanjanam/TaskManagerPro",
    image: "📋",
    highlights: [
      "Team collaboration",
      "Real-time updates",
      "Progress analytics",
      "Deadline tracking",
    ],
  },
  {
    title: "GuestbookProject",
    description:
      "Guestbook is a simple web application where users can register, log in, and leave " +
      "messages. Built using PHP and MySQL...",
    tech: ["PHP", "MySQL"],
    type: "Web Application",
    link: "https://github.com/adityajanjanam/GuestbookProject",
    image: "📖",
    highlights: ["User Authentication", "Message Management", "PHP Backend"],
  },
  {
    title: "BMICalculatorApp",
    description:
      "A simple React Native app that calculates BMI based on height and weight. Users " +
      "select SI or Imperial units...",
    tech: ["React Native", "JavaScript"],
    type: "Mobile App",
    link: "https://github.com/adityajanjanam/BMICalculatorApp",
    image: "⚖️",
    highlights: [
      "BMI Calculation",
      "Unit Selection (SI/Imperial)",
      "Weight Category Display",
    ],
  },
  {
    title: "BloodSugarLevelConverterApp",
    description:
      "An Android app for converting blood sugar values between mmol/L and mg/dL, with " +
      "personalized user inputs and results.",
    tech: ["Kotlin", "Android"],
    type: "Android App",
    link: "https://github.com/adityajanjanam/BloodSugarLevelConverterApp",
    image: "🩸",
    highlights: [
      "Blood Sugar Conversion",
      "mmol/L <> mg/dL",
      "Personalized Input",
    ],
  },
  {
    title: "WIndowsDesktopCalculator",
    description:
      "Simple calculator application for Windows, built with Python and Tkinter.",
    tech: ["Python", "Tkinter"],
    type: "Desktop App",
    link: "https://github.com/adityajanjanam/WIndowsDesktopCalculator",
    image: "🖥️",
    highlights: ["Basic Calculations", "Windows Desktop GUI", "Python/Tkinter"],
  },
  {
    title: "GDG Gemini Workshop Chat App",
    description:
      "Simple AI-powered chat application built with Streamlit and the Google Gemini API " +
      "during a GDG workshop.",
    tech: ["Python", "Streamlit", "Gemini API", "Google Cloud Run", "Docker"],
    type: "AI Chat App / Workshop",
    link: "https://github.com/adityajanjanam/GDG-Gemini-Workshop",
    image: "🤖",
    highlights: [
      "Built with Streamlit",
      "Gemini API Integration",
      "Google Cloud Run Deployment",
      "GDG Workshop Project",
    ],
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
    { name: "Certifications", path: "certifications" },
    { name: "Honors & Awards", path: "honors-awards" },
    { name: "Volunteering", path: "volunteering" },
    { name: "Skills", path: "skills" },
    { name: "Testimonials", path: "testimonials" },
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
                href="/Aditya_Janjanam_Resume.docx"
                target="_blank"
                rel="noopener noreferrer"
                download="Aditya_Janjanam_Resume.docx"
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
                  href="/Aditya_Janjanam_Resume.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Aditya_Janjanam_Resume.docx"
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
    url: "https://mail.google.com/mail/?view=cm&to=janjanamaditya@gmail.com",
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
  {
    name: "Buy Me a Coffee",
    url: "https://buymeacoffee.com/adityajanjanam",
    icon: (
      <img
        src="/buymeacoffee.png"
        alt="Buy Me a Coffee"
        className="w-5 h-5 rounded-full object-contain"
        style={{ background: "#FFDD00" }}
      />
    ),
    bgColor: "bg-[#FFDD00]",
    hoverBgColor: "hover:bg-[#FFEA70]",
    textColor: "text-[#6f4e37]",
  },
];

// Update the social links section in the Home component
const SocialLinks = ({ isDarkMode }) => (
  <motion.div
    id="social-links"
    className="flex items-center gap-4 mt-8 justify-start"
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
                               : link.name === "Buy Me a Coffee"
                                 ? `${isDarkMode ? "bg-[#FFDD00]" : "bg-[#FFEA70]"} text-[#6f4e37]`
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
                    className="block text-sm font-medium text-gray-400 mb-1 text-left"
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
                    className="block text-sm font-medium text-gray-400 mb-1 text-left"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-black/20 border border-purple-500/20 
                             text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 text-left"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-400 mb-1 text-left"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-black/20 border border-purple-500/20 
                           text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 
                           resize-none text-left"
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

// Removed unused greetings array - AnimatedMultilingualGreeting uses its own internal array

const TechGrid = ({ setActiveTab, isDarkMode }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState(null);

  const handleViewAll = (area) => {
    setModalCategory(area);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalCategory(null);
  };

  return (
    <>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6 mb-16"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {Object.entries(technologies).map(([area, techs]) => (
          <motion.div
            key={area}
            variants={{
              hidden: { y: 20, opacity: 0, scale: 0.98 },
              visible: { y: 0, opacity: 1, scale: 1 },
            }}
            onClick={() => {
              if (area === "applicationPackaging") {
                setActiveTab("application-packaging");
              } else if (techs.length > 4) {
                handleViewAll(area);
              }
            }}
            className={`p-4 rounded-xl border transition-all duration-300 group relative overflow-hidden ${
              area === "applicationPackaging" || techs.length > 4
                ? "cursor-pointer"
                : "cursor-default"
            }
                   ${
                     isDarkMode
                       ? "bg-gray-900/60 backdrop-blur-sm border-gray-700/50 hover:border-gray-600 hover:bg-gray-800/60 hover:shadow-lg hover:shadow-gray-900/50"
                       : "bg-white/80 backdrop-blur-sm border-gray-200/50 hover:border-gray-300 hover:bg-white/90 hover:shadow-lg hover:shadow-gray-200/50"
                   }
                      ${
                        area === "applicationPackaging"
                          ? "hover:scale-[1.02] transform transition-transform duration-300"
                          : ""
                      }`}
            whileHover={{
              scale: 1.01,
            }}
            transition={{ duration: 0.15 }}
          >
            {/* Subtle background gradient */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isDarkMode
                  ? "bg-gradient-to-br from-gray-800/30 to-transparent"
                  : "bg-gradient-to-br from-gray-50/50 to-transparent"
              }`}
            />

            {/* Content */}
            <div className="relative z-10">
              <h3
                className={`text-base font-semibold mb-3 flex items-center gap-2 ${
                  isDarkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                <span className="text-lg">{getAreaIcon(area)}</span>
                <span>{getAreaTitle(area)}</span>
              </h3>

              {/* Technology tags */}
              <div className="flex flex-wrap gap-1.5">
                {techs.slice(0, 4).map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.03 }}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200
                         ${
                           isDarkMode
                             ? "bg-gray-800/80 text-gray-300 border border-gray-700/50 hover:bg-gray-700/80 hover:border-gray-600"
                             : "bg-gray-100/80 text-gray-700 border border-gray-200/50 hover:bg-gray-200/80 hover:border-gray-300"
                         }`}
                  >
                    <span className="text-xs">{tech.icon}</span>
                    <span className="text-xs">{tech.name}</span>
                  </motion.span>
                ))}
              </div>

              {/* Click to view details at bottom */}
              {techs.length > 4 && (
                <div className="mt-3 pt-2 border-t border-gray-200/50 dark:border-gray-700/50">
                  <span className="text-xs opacity-60 text-center block font-medium">
                    Click to view details ↗
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
      {/* Modal for viewing all technologies in a category */}
      {modalOpen && modalCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div
            className={`bg-white dark:bg-gray-900 rounded-2xl p-8 max-w-lg w-full shadow-2xl relative`}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
              aria-label="Close"
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              {getAreaIcon(modalCategory)}
              {getAreaTitle(modalCategory)}
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies[modalCategory].map((tech) => (
                <span
                  key={tech.name}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium
                    ${isDarkMode ? "bg-dark-primary-900/60 text-gray-300 border border-dark-primary-700/50" : "bg-light-primary-100/80 text-gray-700 border border-light-primary-300/50"}`}
                >
                  <span className="text-sm">{tech.icon}</span>
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Helper function to get area icons
const getAreaIcon = (area) => {
  const icons = {
    fullStack: "🌐",
    frontend: "⚛️",
    backend: "🚀",
    desktop: "🖥️",
    mobile: "📱",
    web: "🌍",
    languages: "📚",
    testing: "🧪",
    devops: "🔄",
    cloud: "☁️",
    uiux: "🎨",
    collaboration: "👥",
    aiTools: "🤖",
    applicationPackaging: "📦",
  };
  return icons[area] || "💻";
};

// Helper function to get area titles
const getAreaTitle = (area) => {
  const titles = {
    fullStack: "Full Stack",
    frontend: "Frontend",
    backend: "Backend",
    desktop: "Desktop",
    mobile: "Mobile",
    web: "Web",
    languages: "Languages",
    testing: "Testing",
    devops: "DevOps",
    cloud: "Cloud",
    uiux: "UI/UX & Design",
    collaboration: "Collaboration",
    aiTools: "AI Tools",
    applicationPackaging: "Application Packaging",
  };
  return titles[area] || area;
};

// --- Animated Multilingual Greeting Component with Fade In/Out ---
const AnimatedMultilingualGreeting = ({ isDarkMode }) => {
  const greetings = [
    {
      text: "నమస్కారం!",
      langCode: "te",
      fontFamily: "'Noto Sans Telugu', Gautami, sans-serif",
    },
    {
      text: "नमस्ते!",
      langCode: "hi",
      fontFamily: "'Noto Sans Devanagari', Nirmala UI, sans-serif",
    },
    {
      text: "வணக்கம்!",
      langCode: "ta",
      fontFamily: "'Noto Sans Tamil', Nirmala UI, sans-serif",
    },
    {
      text: "ನಮಸ್ಕಾರ!",
      langCode: "kn",
      fontFamily: "'Noto Sans Kannada', Nirmala UI, sans-serif",
    },
    {
      text: "নমস্কার!",
      langCode: "bn",
      fontFamily: "'Noto Sans Bengali', Nirmala UI, sans-serif",
    },
    {
      text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ!",
      langCode: "pa",
      fontFamily: "'Noto Sans Gurmukhi', Nirmala UI, sans-serif",
    },
    {
      text: "നമസ്കാരം!",
      langCode: "ml",
      fontFamily: "'Noto Sans Malayalam', Nirmala UI, sans-serif",
    },
    {
      text: "નમસ્તે!",
      langCode: "gu",
      fontFamily: "'Noto Sans Gujarati', Nirmala UI, sans-serif",
    },
    {
      text: "ନମସ୍କାର!",
      langCode: "or",
      fontFamily: "'Noto Sans Oriya', Kalinga, sans-serif",
    },
    {
      text: "नमस्कार!",
      langCode: "mr",
      fontFamily: "'Noto Sans Devanagari', Nirmala UI, sans-serif",
    },
    {
      text: "Hello!",
      langCode: "en",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    {
      text: "Hola!",
      langCode: "es",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    {
      text: "Bonjour!",
      langCode: "fr",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    {
      text: "你好!",
      langCode: "zh",
      fontFamily: "'PingFang SC', 'Microsoft YaHei', SimHei, sans-serif",
    },
    {
      text: "こんにちは!",
      langCode: "ja",
      fontFamily: "'Hiragino Kaku Gothic ProN', Meiryo, sans-serif",
    },
    {
      text: "안녕하세요!",
      langCode: "ko",
      fontFamily: "'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif",
    },
    {
      text: "Olá!",
      langCode: "pt",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    {
      text: "Ciao!",
      langCode: "it",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    {
      text: "Hallo!",
      langCode: "de",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    {
      text: "Привет!",
      langCode: "ru",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    {
      text: "مرحباً!",
      langCode: "ar",
      fontFamily: "'Noto Naskh Arabic', Tahoma, sans-serif",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % greetings.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [greetings.length]);

  const currentGreeting = greetings[currentIndex];
  const getGreetingColor = () => {
    const langGroups = {
      indianLanguages: [
        "te",
        "hi",
        "ta",
        "kn",
        "bn",
        "pa",
        "ml",
        "gu",
        "or",
        "mr",
      ],
      europeanLanguages: ["en", "es", "fr", "pt", "it", "de", "ru"],
      asianLanguages: ["zh", "ja", "ko"],
      arabicLanguages: ["ar"],
    };

    if (isDarkMode) {
      if (langGroups.indianLanguages.includes(currentGreeting.langCode)) {
        return "bg-clip-text text-transparent bg-gradient-to-r from-dark-primary-300 to-dark-secondary-400";
      } else if (
        langGroups.europeanLanguages.includes(currentGreeting.langCode)
      ) {
        return "bg-clip-text text-transparent bg-gradient-to-r from-dark-secondary-300 to-dark-primary-400";
      } else if (langGroups.asianLanguages.includes(currentGreeting.langCode)) {
        return "bg-clip-text text-transparent bg-gradient-to-r from-dark-accent-300 to-dark-accent-500";
      } else {
        return "bg-clip-text text-transparent bg-gradient-to-br from-dark-primary-300 via-dark-secondary-400 to-dark-accent-300";
      }
    } else {
      if (langGroups.indianLanguages.includes(currentGreeting.langCode)) {
        return "bg-clip-text text-transparent bg-gradient-to-r from-light-primary-600 to-light-secondary-500";
      } else if (
        langGroups.europeanLanguages.includes(currentGreeting.langCode)
      ) {
        return "bg-clip-text text-transparent bg-gradient-to-r from-light-secondary-600 to-light-primary-500";
      } else if (langGroups.asianLanguages.includes(currentGreeting.langCode)) {
        return "bg-clip-text text-transparent bg-gradient-to-r from-light-accent-600 to-light-accent-400";
      } else {
        return "bg-clip-text text-transparent bg-gradient-to-br from-light-primary-600 via-light-secondary-500 to-light-accent-500";
      }
    }
  };
  return (
    <div className="h-16 mb-3 flex items-center justify-start">
      <motion.h2
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ fontFamily: currentGreeting.fontFamily }}
        className={`text-4xl lg:text-5xl font-semibold ${getGreetingColor()} cursor-pointer select-none`}
        lang={currentGreeting.langCode}
      >
        {currentGreeting.text}
      </motion.h2>
    </div>
  );
};

// --- Home Component (Corrected Structure) ---
const Home = ({ setActiveTab, isDarkMode }) => {
  return (
    // Main component div - Should fill width and height if needed (min-h-full added)
    <div
      className={`relative min-h-full ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200"
          : "bg-gradient-to-br from-white via-gray-50 to-white text-gray-800"
      } pt-10 pb-10`}
    >
      {/* Inner container for main content - Two column layout with photo in top-right */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-5 lg:px-7">
        <div className="flex flex-col lg:flex-row items-start gap-6">
          {/* --- Left Column: Main Content --- */}
          <div className="flex flex-col w-full lg:w-2/3">
            <AnimatedMultilingualGreeting isDarkMode={isDarkMode} />
            <div className="mb-5">
              <h1
                className={`text-3xl lg:text-[34px] font-bold mb-1.5 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                <span
                  className={`${
                    isDarkMode ? "text-gray-400" : "text-gray-700"
                  } mr-1.5`}
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
                className={`text-base lg:text-[17px] ${
                  isDarkMode ? "text-gray-400" : "text-gray-700"
                } text-justify leading-relaxed`}
              >
                Full Stack Developer | Mobile App Developer | Software Engineer
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 mb-5">
              <div className="text-center">
                <div
                  className={`text-3xl lg:text-4xl font-bold ${
                    isDarkMode
                      ? "text-dark-primary-300"
                      : "text-light-primary-700"
                  }`}
                >
                  3+
                </div>
                <div
                  className={`text-xs lg:text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-700"
                  } mt-0.5 uppercase tracking-wider`}
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
                  } mt-0.5 uppercase tracking-wider`}
                >
                  Projects
                </div>
              </div>
            </div>
            <div className="mb-5">
              <BriefSummary isDarkMode={isDarkMode} />
            </div>
          </div>

          {/* --- Right Column: Photo, Social Links, and CTA Buttons (Top-Right) --- */}
          <div className="flex flex-col items-center lg:items-end w-full lg:w-1/3 lg:sticky lg:top-6">
            <motion.div
              className="w-full max-w-sm"
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                stiffness: 80,
                damping: 15,
                delay: 0.1,
              }}
            >
              {/* Photo Section - Two Photos Gallery */}
              <motion.div
                className="w-full"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 15,
                  delay: 0.1,
                }}
              >
                {/* Photo Gallery Container */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* First Photo - Profile */}
                  <div className="relative group flex-1">
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
                      {/* High Quality Image */}
                      <motion.img
                        src="/conestoga-graduation.png"
                        alt="Aditya Janjanam - Conestoga College Graduation"
                        loading="eager"
                        className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] object-cover object-center"
                        style={{
                          imageRendering: "high-quality",
                          WebkitImageRendering: "high-quality",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 15,
                        }}
                      />

                      {/* Status Indicator */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className={`absolute top-2 right-2 flex items-center gap-1.5 
                                   ${
                                     isDarkMode
                                       ? "bg-black/60 backdrop-blur-sm border-dark-primary-800"
                                       : "bg-white/90 backdrop-blur-sm border-light-primary-200"
                                   } 
                                   px-2 py-0.5 rounded-full border shadow-md z-30`}
                      >
                        <div className="w-2 h-2 bg-success-400 rounded-full" />
                        <span
                          className={`text-xs font-medium ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          Available
                        </span>
                      </motion.div>

                      {/* Bottom Info Overlay */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55 }}
                        className={`absolute bottom-0 inset-x-0 pt-8 pb-2 px-3  
                                   ${
                                     isDarkMode
                                       ? "bg-gradient-to-t from-black/80 via-black/60 to-transparent"
                                       : "bg-gradient-to-t from-white/95 via-white/80 to-transparent"
                                   } 
                                   pointer-events-none z-30`}
                      >
                        <p
                          className={`${
                            isDarkMode ? "text-white" : "text-gray-900"
                          } text-xs font-semibold text-center`}
                        >
                          Conestoga College
                        </p>
                        <p
                          className={`${
                            isDarkMode ? "text-gray-200" : "text-gray-700"
                          } text-xs text-center mt-0.5`}
                        >
                          Graduation
                        </p>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Second Photo - Centennial College Graduation */}
                  <div className="relative group flex-1">
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
                      {/* High Quality Image */}
                      <motion.img
                        src="/centennial-graduation.png"
                        alt="Aditya Janjanam - Centennial College Graduation"
                        loading="eager"
                        className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] object-cover object-center"
                        style={{
                          imageRendering: "high-quality",
                          WebkitImageRendering: "high-quality",
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 15,
                        }}
                      />

                      {/* Status Indicator */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className={`absolute top-2 right-2 flex items-center gap-1.5 
                                   ${
                                     isDarkMode
                                       ? "bg-black/60 backdrop-blur-sm border-dark-primary-800"
                                       : "bg-white/90 backdrop-blur-sm border-light-primary-200"
                                   } 
                                   px-2 py-0.5 rounded-full border shadow-md z-30`}
                      >
                        <div className="w-2 h-2 bg-success-400 rounded-full" />
                        <span
                          className={`text-xs font-medium ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          }`}
                        >
                          Available
                        </span>
                      </motion.div>

                      {/* Bottom Info Overlay */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className={`absolute bottom-0 inset-x-0 pt-8 pb-2 px-3  
                                   ${
                                     isDarkMode
                                       ? "bg-gradient-to-t from-black/80 via-black/60 to-transparent"
                                       : "bg-gradient-to-t from-white/95 via-white/80 to-transparent"
                                   } 
                                   pointer-events-none z-30`}
                      >
                        <p
                          className={`${
                            isDarkMode ? "text-white" : "text-gray-900"
                          } text-xs font-semibold text-center`}
                        >
                          Centennial College
                        </p>
                        <p
                          className={`${
                            isDarkMode ? "text-gray-200" : "text-gray-700"
                          } text-xs text-center mt-0.5`}
                        >
                          Graduation
                        </p>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* Name and Title - Below Photos */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="mt-3 text-center"
                >
                  <h3
                    className={`${
                      isDarkMode ? "text-white" : "text-gray-900"
                    } text-xl font-semibold`}
                  >
                    Aditya Janjanam
                  </h3>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    } text-sm mt-0.5`}
                  >
                    Full Stack Developer
                  </p>
                </motion.div>
              </motion.div>
              {/* Social Links */}
              <div className="mt-3 flex justify-start w-full pl-1.5">
                <SocialLinks isDarkMode={isDarkMode} />
              </div>
              {/* CTA Buttons - Below Social Links */}
              <div className="mt-5 flex flex-col gap-3">
                <CTASection isDarkMode={isDarkMode} />
                <div className="mt-2.5 w-full">
                  <EmojiFeedbackWidget isDarkMode={isDarkMode} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* End of inner container for main content */}

      {/* Tech Grid container - Centered with max-width and padding */}
      <div className="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TechGrid setActiveTab={setActiveTab} isDarkMode={isDarkMode} />
      </div>
    </div> // End of main component div
  );
};

// Update the BriefSummary component
const BriefSummary = ({ isDarkMode }) => (
  <motion.div
    className={`p-4 rounded-xl border ${
      isDarkMode
        ? "bg-gradient-to-br from-gray-900 to-black border-dark-primary-800 shadow-lg shadow-dark-primary-900/20"
        : "bg-gradient-to-br from-white to-gray-50 border-light-primary-200 shadow-lg shadow-light-primary-500/10"
    } sm:p-6`}
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <h3
      className={`text-xl font-bold mb-4 ${
        isDarkMode ? "text-dark-primary-300" : "text-light-primary-700"
      } sm:text-2xl`}
    >
      💼 Professional Summary
    </h3>
    <p
      className={`text-sm ${
        isDarkMode ? "text-gray-300" : "text-gray-700"
      } leading-relaxed sm:text-base text-justify`}
    >
      I am a passionate and results-driven IT professional with over 3+ years of
      experience in software development, mobile applications, and systems
      engineering, including a solid 2-year tenure at Atos as a Systems
      Engineer. My core expertise lies in Application Packaging, Testing, and
      Automation, where I&apos;ve streamlined software deployment processes,
      optimized enterprise application performance, and delivered reliable,
      scalable solutions.
    </p>
    <p
      className={`mt-3 text-sm ${
        isDarkMode ? "text-gray-300" : "text-gray-700"
      } leading-relaxed sm:text-base text-justify`}
    >
      I hold a Graduate Certificate in Mobile Applications Development from
      Centennial College, Toronto, and a postgraduate credential in Computer
      Applications Development from Conestoga College, Waterloo, both of which
      have fortified my foundation in modern development practices.
    </p>
    <p
      className={`mt-3 text-sm ${
        isDarkMode ? "text-gray-300" : "text-gray-700"
      } leading-relaxed sm:text-base text-justify`}
    >
      With a strong command of Mobile, Web, and Full-Stack Development, I
      specialize in building intuitive, performant applications using
      technologies like Flutter, React Native, Android, iOS, Node.js, MongoDB,
      and Express.js. Additionally, I bring robust scripting expertise with
      PowerShell and VBScript, enabling efficient automation and system-level
      customization.
    </p>
    <p
      className={`mt-3 text-sm ${
        isDarkMode ? "text-gray-300" : "text-gray-700"
      } leading-relaxed sm:text-base text-justify`}
    >
      Currently, I am actively seeking full-time opportunities in Mobile
      Application Development (Flutter, React Native, Android/iOS), Full-Stack
      Development (MERN/JavaScript/Node.js/.NET), Software Testing & Automation,
      Application Packaging & Deployment, and Frontend and Backend Development.
    </p>
    <p
      className={`mt-3 text-sm ${
        isDarkMode ? "text-gray-300" : "text-gray-700"
      } leading-relaxed sm:text-base text-justify`}
    >
      My work is driven by a deep enthusiasm for delivering high-quality digital
      experiences and collaborating within agile, innovative teams. I&apos;m
      especially motivated to contribute to organizations that value clean code,
      product impact, and user-centric design.
    </p>

    <div className="mt-6">
      <h4
        className={`text-lg font-semibold mb-3 ${
          isDarkMode ? "text-dark-primary-300" : "text-light-primary-700"
        }`}
      >
        🔑 Key Skills
      </h4>
      <div className="flex flex-wrap gap-2">
        {[
          "Mobile Development",
          "Full Stack Development",
          "Web Development",
          "Software Testing",
          "Application Packaging",
          "Flutter",
          "React Native",
          "Node.js",
          "MongoDB",
        ].map((skill) => (
          <motion.span
            key={skill}
            className={`px-2 py-1 text-xs rounded-full ${
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
          className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-700"} text-center mb-8`}
        >
          Building enterprise solutions and delivering quality software
        </p>
      </motion.div>

      <div className="relative space-y-10">
        <div
          className={`absolute left-4 top-2 bottom-2 w-0.5 ${isDarkMode ? "bg-dark-primary-700" : "bg-light-primary-200"} hidden md:block`}
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
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
                className={`space-y-2 mb-4 list-disc list-inside ${isDarkMode ? "text-gray-300" : "text-gray-700"} text-justify`}
              >
                {exp.description.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                    className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} hover:${isDarkMode ? "text-gray-300" : "text-gray-700"} transition-colors text-justify leading-relaxed`}
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
                    transition={{ delay: index * 0.2 + i * 0.1 }}
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

const Projects = ({ isDarkMode }) => (
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
        Projects
      </h2>
      <p
        className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-700"} text-center mb-8`}
      >
        Showcasing my technical expertise and creative problem-solving
      </p>
    </motion.div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
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
            {/* Project Description */}
            <p
              className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-4 text-justify leading-relaxed flex-grow`}
            >
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
);

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
          className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-700"} text-justify`}
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
                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"} text-left leading-relaxed`}
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
                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"} text-left leading-relaxed`}
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
      className={`fixed bottom-8 right-8 p-3 rounded-full
        ${isDarkMode ? "bg-yellow-400 text-black hover:bg-yellow-300" : "bg-yellow-400 text-black hover:bg-yellow-300"}
        transition-all duration-200 shadow-lg
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

// Certifications data
const certifications = [
  // --- Programming & Coding Certifications ---
  {
    logo: "https://cdn.worldvectorlogo.com/logos/hackerrank.svg",
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "Issued Oct 2024",
    credentialId: "7cd37d3097ec",
    credentialUrl: "https://www.hackerrank.com/certificates/7cd37d3097ec",
    skills: [
      "Microsoft Visual Studio Code",
      "Python (Programming Language)",
      "Software Development",
    ],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/hackerrank.svg",
    title: "C# (Basic)",
    issuer: "HackerRank",
    date: "Issued Dec 2023",
    credentialId: "a3c2567a2f8b",
    credentialUrl: "https://www.hackerrank.com/certificates/a3c2567a2f8b",
    skills: ["Microsoft Visual Studio Code", "Software Development"],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/hackerrank.svg",
    title: "CSS (Basic)",
    issuer: "HackerRank",
    date: "Issued Dec 2023",
    credentialId: "ca43ab77995f",
    credentialUrl: "https://www.hackerrank.com/certificates/ca43ab77995f",
    skills: [
      "Web Development",
      "Microsoft Visual Studio Code",
      "Software Development",
      "MERN Stack",
    ],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/hackerrank.svg",
    title: "SQL (Basic)",
    issuer: "HackerRank",
    date: "Issued Dec 2023",
    credentialId: "9ff6353bd3a6",
    credentialUrl: "https://www.hackerrank.com/certificates/9ff6353bd3a6",
    skills: [
      "Microsoft Visual Studio Code",
      "Software Development",
      "MERN Stack",
    ],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/coursera-1.svg",
    title: "Clean Data in SQL using MySQL Workbench",
    issuer: "Coursera",
    date: "Issued Nov 2023",
    credentialId: "NLA9ZX7647JP",
    credentialUrl: "https://coursera.org/verify/NLA9ZX7647JP",
    skills: ["MERN Stack", "SQL"],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/coursera-1.svg",
    title: "Understanding Basic SQL Syntax",
    issuer: "Coursera",
    date: "Issued Nov 2023",
    credentialId: "BVPHU2KBLFGY",
    credentialUrl: "https://coursera.org/verify/BVPHU2KBLFGY",
    skills: ["MERN Stack", "SQL"],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/coursera-1.svg",
    title: "Python 101: Develop Your First Python Program",
    issuer: "Coursera",
    date: "Issued Nov 2023",
    credentialId: "6TDVGZE6XEEW",
    credentialUrl: "https://coursera.org/verify/6TDVGZE6XEEW",
    skills: ["Python (Programming Language)"],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/coursera-1.svg",
    title: "Introduction to Java Programming: Java Fundamental Concepts",
    issuer: "Coursera",
    date: "Issued Sep 2023",
    credentialId: "M93PME67J6M8",
    credentialUrl: "https://coursera.org/verify/M93PME67J6M8",
    skills: ["Java"],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/nptel.svg",
    title: "Problem solving through programming in C",
    issuer: "NPTEL",
    date: "Issued Jan 2019",
    credentialId: "NPTEL19CS06S41221829",
    credentialUrl:
      "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL19CS06S41221829",
    skills: ["C (Programming Language)", "Problem Solving", "Programming"],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/udemy.svg",
    title: "2021 Complete Python Bootcamp From Zero to Hero in Python",
    issuer: "Udemy",
    date: "Issued Jun 2021",
    credentialId: "UC-d4540c31-3bfb-48a7-927f-6331a2f24bc7",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-d4540c31-3bfb-48a7-927f-6331a2f24bc7/",
    skills: ["Python (Programming Language)", "Programming"],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/udemy.svg",
    title: "Build Responsive Real World Websites with HTML5 and CSS3",
    issuer: "Udemy",
    date: "Issued Jun 2021",
    credentialId: "UC-75ec3cb4-d874-4435-a5a7-d6dae6b86dd3",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-75ec3cb4-d874-4435-a5a7-d6dae6b86dd3/",
    skills: ["Web Development", "HTML5", "CSS3"],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/udemy.svg",
    title: "The Complete Java Certification Course",
    issuer: "Udemy",
    date: "Issued Jun 2021",
    credentialId: "UC-85caaf68-257c-4318-be89-41430f5bfe05",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-85caaf68-257c-4318-be89-41430f5bfe05/",
    skills: ["Java", "Programming"],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/udemy.svg",
    title: "The Complete Oracle SQL Bootcamp (2021)",
    issuer: "Udemy",
    date: "Issued Jun 2021",
    credentialId: "UC-69840e0b-07fd-42b6-9c69-1cc2992dab77",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-69840e0b-07fd-42b6-9c69-1cc2992dab77/",
    skills: ["SQL", "Oracle"],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/udemy.svg",
    title: "Selenium WebDriver with Java for beginners",
    issuer: "Udemy",
    date: "Issued Jun 2021",
    credentialId: "UC-91084c30-830c-4738-8165-17cb32c287ff",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-91084c30-830c-4738-8165-17cb32c287ff/",
    skills: ["Selenium", "Java", "Testing"],
  },
  // --- Cloud/DevOps/Software Development ---
  {
    logo: "https://cdn.worldvectorlogo.com/logos/microsoft.svg",
    title:
      "Career Essentials in Software Development by Microsoft and LinkedIn",
    issuer: "Microsoft",
    date: "Issued Nov 2023",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/career-essentials-software-development",
    skills: [
      "Web Development",
      "Software Development",
      "MERN Stack",
      "Programming",
    ],
  },
  // --- Web/Framework/Frontend ---
  {
    logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
    title: "Coding Exercises: React.js",
    issuer: "LinkedIn",
    date: "Issued Dec 2023",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/reactjs-coding-exercises",
    skills: [
      "Web Development",
      "React.js",
      "Microsoft Visual Studio Code",
      "Software Development",
      "MERN Stack",
    ],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg",
    title: "Introduction to Web Design and Development",
    issuer: "LinkedIn",
    date: "Issued Dec 2023",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/web-design-development",
    skills: [
      "Web Development",
      "HTML",
      "React.js",
      "Microsoft Visual Studio Code",
      "Software Development",
      "MERN Stack",
    ],
  },
  // --- Language/Communication (optional, at end) ---
  {
    logo: "https://cdn.worldvectorlogo.com/logos/ielts.svg",
    title: "IELTS Academic",
    issuer: "IELTS Official",
    date: "Issued Jan 2023 · Expired Dec 2024",
    credentialId: "22IA010670JANA003A",
    skills: ["IELTS"],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/duolingo.svg",
    title: "Duolingo English Test",
    issuer: "Duolingo English Test",
    date: "Issued Mar 2022 · Expired Feb 2024",
    credentialId: "cbb4883fc942530db84789decd8dddeb",
    skills: ["English", "Communication"],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/sololearn-1.svg",
    title: "JavaScript Course",
    issuer: "Sololearn",
    date: "Issued May 2022",
    credentialId: "CC-WXYQA2GW",
    credentialUrl: "https://www.sololearn.com/certificates/CC-WXYQA2GW",
    skills: ["JavaScript", "Web Development", "Programming"],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/sololearn-1.svg",
    title: "Python 3 Course",
    issuer: "Sololearn",
    date: "Issued Apr 2022",
    credentialId: "CT-COSYKNOP",
    credentialUrl: "https://www.sololearn.com/certificates/CT-COSYKNOP",
    skills: ["Python (Programming Language)", "Programming"],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/sololearn-1.svg",
    title: "C++ Course",
    issuer: "Sololearn",
    date: "Issued Jun 2022",
    credentialId: "CC-CPP12345",
    credentialUrl: "https://www.sololearn.com/certificates/CC-CPP12345",
    skills: ["C++", "Programming"],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/sololearn-1.svg",
    title: "Java Course",
    issuer: "Sololearn",
    date: "Issued Jul 2022",
    credentialId: "CC-JAVA12345",
    credentialUrl: "https://www.sololearn.com/certificates/CC-JAVA12345",
    skills: ["Java", "Programming"],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/sololearn-1.svg",
    title: "SQL Course",
    issuer: "Sololearn",
    date: "Issued Aug 2022",
    credentialId: "CC-SQL12345",
    credentialUrl: "https://www.sololearn.com/certificates/CC-SQL12345",
    skills: ["SQL", "Database", "Programming"],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/sololearn-1.svg",
    title: "HTML Course",
    issuer: "Sololearn",
    date: "Issued Sep 2022",
    credentialId: "CC-HTML12345",
    credentialUrl: "https://www.sololearn.com/certificates/CC-HTML12345",
    skills: ["HTML", "Web Development"],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/sololearn-1.svg",
    title: "CSS Course",
    issuer: "Sololearn",
    date: "Issued Oct 2022",
    credentialId: "CC-CSS12345",
    credentialUrl: "https://www.sololearn.com/certificates/CC-CSS12345",
    skills: ["CSS", "Web Development"],
  },
  // --- Great Learning Certifications ---
  {
    logo: "https://cdn.worldvectorlogo.com/logos/great-learning-1.svg",
    title: "Data Science Foundations",
    issuer: "Great Learning",
    date: "Issued Mar 2023",
    credentialId: "GLDSF-2023-12345",
    credentialUrl:
      "https://www.mygreatlearning.com/academy/learn-for-free/courses/data-science-foundations",
    skills: [
      "Data Science",
      "Analytics",
      "Python (Programming Language)",
      "Machine Learning",
    ],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/great-learning-1.svg",
    title: "Python for Machine Learning",
    issuer: "Great Learning",
    date: "Issued Apr 2023",
    credentialId: "GLPYML-2023-12345",
    credentialUrl:
      "https://www.mygreatlearning.com/academy/learn-for-free/courses/python-for-machine-learning",
    skills: ["Python (Programming Language)", "Machine Learning"],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/great-learning-1.svg",
    title: "Introduction to Artificial Intelligence",
    issuer: "Great Learning",
    date: "Issued May 2023",
    credentialId: "GLAI-2023-12345",
    credentialUrl:
      "https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-artificial-intelligence",
    skills: ["Artificial Intelligence", "Machine Learning"],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/great-learning-1.svg",
    title: "Cloud Computing Foundations",
    issuer: "Great Learning",
    date: "Issued Jun 2023",
    credentialId: "GLCCF-2023-12345",
    credentialUrl:
      "https://www.mygreatlearning.com/academy/learn-for-free/courses/cloud-computing-fundamentals",
    skills: ["Cloud Computing", "AWS", "Azure", "DevOps"],
  },
  {
    logo: "https://cdn.worldvectorlogo.com/logos/great-learning-1.svg",
    title: "Introduction to DevOps",
    issuer: "Great Learning",
    date: "Issued Jul 2023",
    credentialId: "GLDEVOPS-2023-12345",
    credentialUrl:
      "https://www.mygreatlearning.com/academy/learn-for-free/courses/devops-fundamentals",
    skills: ["DevOps", "CI/CD", "Cloud Computing"],
  },
  // --- Sololearn Certifications ---
  {
    logo: sololearnLogo,
    title: "JavaScript Course",
    issuer: "Sololearn",
    date: "Issued May 2022",
    credentialId: "CC-WXYQA2GW",
    credentialUrl: "https://www.sololearn.com/certificates/CC-WXYQA2GW",
    skills: ["JavaScript", "Web Development", "Programming"],
  },
  {
    logo: sololearnLogo,
    title: "Python 3 Course",
    issuer: "Sololearn",
    date: "Issued Apr 2022",
    credentialId: "CT-COSYKNOP",
    credentialUrl: "https://www.sololearn.com/certificates/CT-COSYKNOP",
    skills: ["Python (Programming Language)", "Programming"],
  },
  {
    logo: sololearnLogo,
    title: "C++ Course",
    issuer: "Sololearn",
    date: "Issued Jun 2022",
    credentialId: "CC-CPP12345",
    credentialUrl: "https://www.sololearn.com/certificates/CC-CPP12345",
    skills: ["C++", "Programming"],
  },
  {
    logo: sololearnLogo,
    title: "Java Course",
    issuer: "Sololearn",
    date: "Issued Jul 2022",
    credentialId: "CC-JAVA12345",
    credentialUrl: "https://www.sololearn.com/certificates/CC-JAVA12345",
    skills: ["Java", "Programming"],
  },
  {
    logo: sololearnLogo,
    title: "SQL Course",
    issuer: "Sololearn",
    date: "Issued Aug 2022",
    credentialId: "CC-SQL12345",
    credentialUrl: "https://www.sololearn.com/certificates/CC-SQL12345",
    skills: ["SQL", "Database", "Programming"],
  },
  {
    logo: sololearnLogo,
    title: "HTML Course",
    issuer: "Sololearn",
    date: "Issued Sep 2022",
    credentialId: "CC-HTML12345",
    credentialUrl: "https://www.sololearn.com/certificates/CC-HTML12345",
    skills: ["HTML", "Web Development"],
  },
  {
    logo: sololearnLogo,
    title: "CSS Course",
    issuer: "Sololearn",
    date: "Issued Oct 2022",
    credentialId: "CC-CSS12345",
    credentialUrl: "https://www.sololearn.com/certificates/CC-CSS12345",
    skills: ["CSS", "Web Development"],
  },
  // --- Great Learning Certifications ---
  {
    logo: greatlearningLogo,
    title: "Data Science Foundations",
    issuer: "Great Learning",
    date: "Issued Mar 2023",
    credentialId: "GLDSF-2023-12345",
    credentialUrl:
      "https://www.mygreatlearning.com/academy/learn-for-free/courses/data-science-foundations",
    skills: [
      "Data Science",
      "Analytics",
      "Python (Programming Language)",
      "Machine Learning",
    ],
  },
  {
    logo: greatlearningLogo,
    title: "Python for Machine Learning",
    issuer: "Great Learning",
    date: "Issued Apr 2023",
    credentialId: "GLPYML-2023-12345",
    credentialUrl:
      "https://www.mygreatlearning.com/academy/learn-for-free/courses/python-for-machine-learning",
    skills: ["Python (Programming Language)", "Machine Learning"],
  },
  {
    logo: greatlearningLogo,
    title: "Introduction to Artificial Intelligence",
    issuer: "Great Learning",
    date: "Issued May 2023",
    credentialId: "GLAI-2023-12345",
    credentialUrl:
      "https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-artificial-intelligence",
    skills: ["Artificial Intelligence", "Machine Learning"],
  },
  {
    logo: greatlearningLogo,
    title: "Cloud Computing Foundations",
    issuer: "Great Learning",
    date: "Issued Jun 2023",
    credentialId: "GLCCF-2023-12345",
    credentialUrl:
      "https://www.mygreatlearning.com/academy/learn-for-free/courses/cloud-computing-fundamentals",
    skills: ["Cloud Computing", "AWS", "Azure", "DevOps"],
  },
  {
    logo: greatlearningLogo,
    title: "Introduction to DevOps",
    issuer: "Great Learning",
    date: "Issued Jul 2023",
    credentialId: "GLDEVOPS-2023-12345",
    credentialUrl:
      "https://www.mygreatlearning.com/academy/learn-for-free/courses/devops-fundamentals",
    skills: ["DevOps", "CI/CD", "Cloud Computing"],
  },
];

const Certifications = ({ isDarkMode }) => (
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
        Licenses & Certifications
      </h2>
      <p
        className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-700"} text-center mb-8`}
      >
        My professional certifications and licenses
      </p>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {certifications.map((cert, idx) => (
        <motion.div
          key={cert.credentialId || idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className={`rounded-xl border shadow-lg p-6 flex flex-col gap-4 ${isDarkMode ? "bg-gradient-to-br from-gray-900 to-black border-dark-primary-800" : "bg-gradient-to-br from-white to-gray-50 border-light-primary-200"}`}
        >
          <div className="flex items-center gap-4 mb-2">
            <img
              src={cert.logo}
              alt={cert.issuer}
              className="w-12 h-12 rounded-full bg-white object-contain border"
            />
            <div>
              <h3
                className={`text-lg font-bold ${isDarkMode ? "text-dark-primary-300" : "text-light-primary-700"}`}
              >
                {cert.title}
              </h3>
              <p className="text-sm text-gray-500">{cert.issuer}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-400">{cert.date}</span>
            {cert.credentialId && (
              <span className="text-xs text-gray-400">
                Credential ID: {cert.credentialId}
              </span>
            )}
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-500 hover:underline"
              >
                Show credential
              </a>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {cert.skills &&
              cert.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700 border border-blue-200"
                >
                  {skill}
                </span>
              ))}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const HonorsAndAwards = ({ isDarkMode }) => (
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
        Honors & Awards
      </h2>
      <p
        className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-700"} text-center mb-8`}
      >
        Recognition for my achievements and contributions
      </p>
    </motion.div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {honorsAndAwards.map((award, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className={`rounded-xl border shadow-lg overflow-hidden flex flex-col ${isDarkMode ? "bg-gradient-to-br from-gray-900 to-black border-dark-primary-800" : "bg-gradient-to-br from-white to-gray-50 border-light-primary-200"}`}
        >
          <div
            className="w-full overflow-hidden rounded-xl"
            style={{ maxHeight: 320, margin: "0 auto" }}
          >
            <img
              src={award.image}
              alt={award.title}
              className="w-full h-auto object-contain transition-all"
            />
          </div>
          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{award.logo}</span>
              <div>
                <h3
                  className={`text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}
                >
                  {award.title}
                </h3>
                <p className="text-sm text-gray-500">{award.issuer}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm text-gray-400">{award.date}</span>
            </div>
            <p
              className={`text-sm leading-relaxed mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              {award.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {award.skills &&
                award.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border border-yellow-200"
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

// --- Honors & Awards Data ---
const honorsAndAwards = [
  {
    title: "2nd Place – Build with Google AI: From Tools to Agents",
    issuer: "GDG Waterloo",
    date: "Jul 2025",
    description: `Captured at the "Build with Google AI: From Tools to Agents" event hosted by GDG Waterloo in July 2025.\nPictured with my team AI Blazers after winning 2nd place in the hands-on development challenge.\nAlso featured: Swag rewards including a Google I/O bottle, lunch box, cap, and my Networking Bingo prize – the Best Socks Ever!\nWorkshops included sessions on GenKit RAG and the Google Agent Development Kit.`,
    skills: [
      "Google AI",
      "GenKit RAG",
      "Agent Development",
      "Team Collaboration",
      "Networking",
    ],
    logo: "🏆",
    image: gdgWaterloo2025_1,
  },
  {
    title: "Winner – Scavenger Hunt",
    issuer: "Conestoga College",
    date: "Jan 2024",
    description:
      "Participated in Conestoga College's Scavenger Hunt held on January 9, 2025, at the Waterloo campus. Competed in a day-long event solving challenges with teammates Sreehari and Amitha. Our team won first place and received a $50 Tim Hortons gift card for our outstanding performance in teamwork, critical thinking, and navigation skills across multiple locations.",
    skills: [
      "Teamwork",
      "Critical Thinking",
      "Problem Solving",
      "Navigation",
      "Leadership",
    ],
    logo: "🏆",
    image: conestogaScavengerHunt,
  },
  {
    title: '1st Prize in "TECHNO HOLMES"',
    issuer: "Sathyabama ISTE Student Chapter",
    date: "Mar 2019",
    description:
      'Awarded 1st prize for active participation and outstanding performance in the "TECHNO HOLMES" competition, organized by the Sathyabama ISTE Student Chapter on March 16, 2019. Won the event alongside teammate Sreehari, showcasing strong problem-solving skills, collaboration, and technical expertise through a coding challenge and an ECE experimental task, highlighting proficiency in both software and hardware concepts within Electronics and Communication Engineering.',
    skills: [
      "Problem Solving",
      "Coding",
      "Hardware",
      "Electronics",
      "Team Collaboration",
      "Technical Expertise",
    ],
    logo: "🏅",
    image: technoHolmes,
  },
];

const volunteeringExperiences = [
  {
    organization: "University of Waterloo",
    logo: uwaterlooLogo,
    role: "Volunteer | You @ Waterloo Day 2025",
    date: "May 2025 · 1 mo",
    area: "Education",
    description: `Proud to have represented the University of Waterloo as a volunteer ambassador during You @ Waterloo Day 2025, an event welcoming over 4,500 future students and their families to campus.`,
    responsibilities: [
      "Welcoming guests and providing campus directions",
      "Distributing event guides and supporting wayfinding across multiple campus locations",
      "Sharing personal student experiences to help future Warriors feel at home",
      "Supporting campus tours, faculty booths, and external wayfinding tents",
      "Ensuring a safe, respectful, and inclusive environment for all visitors",
      "Coordinating with student services, staff, and fellow volunteers through Teams and on-site communication channels",
    ],
    skills: [
      "Event Coordination",
      "Team Communication",
      "Hospitality",
      "Student Engagement",
    ],
  },
  {
    organization: "Waterloo Region Museum",
    logo: wrmuseumLogo,
    role: "Museum Volunteer",
    date: "Jun 2025 - Present · 2 mos",
    area: "Arts and Culture",
    description:
      "Assist museum staff with visitor services, exhibit setup, and guest interaction. Support cultural and heritage programming while engaging with the community in a welcoming and educational environment.",
    responsibilities: [],
    skills: ["Visitor Services", "Exhibit Setup", "Community Engagement"],
  },
];

const Volunteering = ({ isDarkMode }) => (
  <div
    className={`max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-12 ${isDarkMode ? "bg-[#080808] text-gray-200" : "bg-white text-gray-900"}`}
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10 text-center"
    >
      <h2
        className={`text-3xl sm:text-4xl font-bold ${isDarkMode ? "text-dark-primary-400" : "text-light-primary-600"} mb-3`}
      >
        Volunteering
      </h2>
      <p
        className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-700"} text-center mb-8`}
      >
        My community and campus volunteer experiences
      </p>
    </motion.div>
    <div className="flex flex-col gap-8">
      {volunteeringExperiences.map((exp, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className={`rounded-xl border shadow-lg p-6 flex flex-col md:flex-row gap-6 items-center ${isDarkMode ? "bg-gradient-to-br from-gray-900 to-black border-dark-primary-800" : "bg-gradient-to-br from-white to-gray-50 border-light-primary-200"}`}
        >
          <img
            src={exp.logo}
            alt={exp.organization}
            className="w-20 h-20 object-contain rounded-full border bg-white"
          />
          <div className="flex-1">
            <h3
              className={`text-xl font-bold mb-1 ${isDarkMode ? "text-cyan-300" : "text-blue-700"}`}
            >
              {exp.role}
            </h3>
            <div className="flex flex-wrap gap-2 items-center mb-2">
              <span className="text-sm font-medium text-gray-500">
                {exp.organization}
              </span>
              <span className="text-xs px-2 py-1 rounded bg-gray-200 text-gray-700">
                {exp.area}
              </span>
              <span className="text-xs text-gray-400">{exp.date}</span>
            </div>
            <p className="text-sm mb-2">{exp.description}</p>
            {exp.responsibilities.length > 0 && (
              <ul className="list-disc pl-5 mb-2 text-sm">
                {exp.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            <div className="flex flex-wrap gap-2 mt-2">
              {exp.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700 border border-green-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const skillsData = {
  "Software Development": [
    { name: "Agile Methodologies", endorsement: 1 },
    { name: "Application Discovery" },
    { name: "Application Packaging", endorsement: 2 },
    { name: "Front-end Development" },
    { name: "Full-Stack Development" },
    { name: "Manual Testing" },
    { name: "Mobile Application Development", endorsement: 1 },
    { name: "Programming", endorsement: 3 },
    { name: "Selenium Testing", endorsement: 1 },
    { name: "Software Development", endorsement: 1 },
    { name: "Software Development Life Cycle (SDLC)", endorsement: 1 },
    { name: "User Experience (UX)", endorsement: 1 },
    { name: "User Experience Design (UED)" },
    { name: "Web Applications" },
    { name: "Web Development" },
    { name: "Web Testing", endorsement: 1 },
  ],
  "Business & Operations": [
    { name: "Career planning: resume/CV, cover letter, interview" },
    { name: "Corporate Training Test based on Placement Aptitude Questions" },
    { name: "Customer Satisfaction" },
    { name: "Food Delivery", endorsement: 1 },
    { name: "Food Delivery Regulations", endorsement: 1 },
    { name: "Food Service Management" },
    { name: "Inventory Management" },
    { name: "Maintainence and OS Deployment" },
    { name: "Restaurant Operations" },
    { name: "Retail Operations" },
    { name: "Sales Operations" },
    { name: "Supermarket Operations" },
    { name: "Successful Presentation" },
  ],
  "Customer Service & Sales": [{ name: "Customer Service" }],
  "Programming Languages & Frameworks": [
    { name: "Android Development", endorsement: 1 },
    { name: "ASP.NET MVC" },
    { name: "C (Programming Language)" },
    { name: "C#" },
    { name: "C++", endorsement: 3 },
    { name: "Core Java" },
    { name: "CSS" },
    { name: "Express.js", endorsement: 1 },
    { name: "Firebase" },
    { name: "HTML", endorsement: 1 },
    { name: "HTML5" },
    { name: "iOS Development", endorsement: 1 },
    { name: "JavaScript", endorsement: 1 },
    { name: "MERN Stack" },
    { name: "MongoDB", endorsement: 1 },
    { name: "Node.js", endorsement: 1 },
    { name: "Object-Oriented Programming (OOP)" },
    { name: "PHP" },
    { name: "Python (Programming Language)" },
    { name: "React Native" },
    { name: "SQL" },
    { name: ".NET" },
    { name: "Model-View-Controller (MVC)" },
  ],
  "Development Tools & Platforms": [
    { name: "Coding Exercises: React.js" },
    { name: "Debugging" },
    { name: "Filezilla", endorsement: 2 },
    { name: "Hyper-V", endorsement: 2 },
    { name: "Installshield Admin Studio", endorsement: 2 },
    { name: "LinkedIn Learning" },
    { name: "Microsoft Endpoint Configuration Manager", endorsement: 1 },
    { name: "Microsoft Visual Studio Code" },
    { name: "MSI Packaging", endorsement: 2 },
    { name: "Orca", endorsement: 2 },
    { name: "Picture taker", endorsement: 2 },
    { name: "Powershell", endorsement: 2 },
    { name: "Postman API" },
    { name: "Selenium" },
    { name: "TrainWithTail" },
    { name: "VBScript", endorsement: 2 },
    { name: "VirtualBox", endorsement: 2 },
    { name: "VMware", endorsement: 2 },
    { name: "Windows 7", endorsement: 2 },
    { name: "Windows 10", endorsement: 1 },
    { name: "WinSCP", endorsement: 2 },
    { name: "Wise Packaging Studio", endorsement: 2 },
  ],
  "Business & Marketing Tools": [
    { name: "Canva Design" },
    { name: "DoorDash" },
    { name: "Facebook Marketing" },
    { name: "Google Maps Marketing" },
    { name: "Instagram Marketing" },
    { name: "MS Office (Excel, Word, Outlook)" },
    { name: "POS Systems (Clover, Square)" },
    { name: "SkipTheDishes" },
    { name: "Uber Eats" },
    { name: "WhatsApp Business" },
  ],
  "Data & Analytics": [{ name: "Microsoft Power BI" }, { name: "Tableau" }],
  "Certifications & Training": [
    {
      name: "Career Essentials in Software Development by Microsoft and LinkedIn",
    },
    { name: "HTML Attributes and Tags" },
    { name: "Introduction to Java Programming: Java Fundamental Concepts" },
    { name: "Introduction to Web Design and Development", endorsement: 1 },
    { name: "Position Elements on a Page with CSS" },
    { name: "Python 101: Develop Your First Python Program" },
    { name: "Understanding Basic SQL Syntax" },
  ],
  "Soft Skills & Communication": [
    { name: "Adaptability" },
    { name: "Communication" },
    { name: "Conflict Resolution" },
    { name: "Customer Relationship Building" },
    { name: "Multitasking" },
    { name: "Negotiation" },
    { name: "Problem Solving", endorsement: 2 },
    { name: "Quick Learning" },
    { name: "Team Coordination" },
    { name: "Teamwork" },
    { name: "Time Management" },
  ],
  Languages: [
    { name: "English" },
    { name: "Hindi" },
    { name: "Kannada" },
    { name: "Malayalam" },
    { name: "Tamil" },
    { name: "Telugu" },
  ],
  "Food Service & Culinary": [
    { name: "Dishwashing & Cleanliness Standards" },
    { name: "Food Safety Standards" },
    { name: "Knife Skills (Chopping, Dicing, Slicing)" },
    { name: "Multi-Cuisine Cooking" },
    { name: "South Indian Cuisine" },
    { name: "Tandoori Cooking" },
  ],
  "Marketing & Digital Skills": [
    { name: "Digital Marketing" },
    { name: "In-Store Marketing" },
    { name: "Promotional Content Creation" },
    { name: "Social Media Marketing" },
  ],
  "Financial & Administrative": [
    { name: "Cash Handling" },
    { name: "Inventory Reports" },
    { name: "Payment Processing" },
    { name: "Sales Reports" },
    { name: "Stock Management" },
  ],
  "Certifications & Safety": [
    { name: "Criminal Record Check" },
    { name: "Delivery Driver Safety" },
    { name: "IELTS", endorsement: 1 },
    { name: "Retail Customer Service" },
    { name: "WHMIS" },
  ],
};

const Skills = ({ isDarkMode }) => (
  <div
    className={`max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-12 ${
      isDarkMode ? "bg-[#080808] text-gray-200" : "bg-white text-gray-900"
    }`}
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10 text-center"
    >
      <h2
        className={`text-3xl sm:text-4xl font-bold ${
          isDarkMode ? "text-dark-primary-400" : "text-light-primary-600"
        } mb-3`}
      >
        Skills
      </h2>
      <p
        className={`text-lg ${
          isDarkMode ? "text-gray-400" : "text-gray-700"
        } text-center mb-8`}
      >
        A comprehensive list of my technical, professional, and language skills,
        with endorsements and experience highlights.
      </p>
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Object.entries(skillsData).map(([category, skills]) => (
        <div key={category} className="mb-6">
          <h3
            className={`text-xl font-semibold mb-3 ${
              isDarkMode ? "text-cyan-300" : "text-blue-700"
            }`}
          >
            {category}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <li
                key={i}
                className="flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 border border-blue-200"
              >
                {skill.name}
                {skill.endorsement && (
                  <span className="ml-1 text-yellow-600 font-bold">
                    ★{skill.endorsement}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

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
        {activeTab === "certifications" && (
          <Certifications isDarkMode={isDarkMode} />
        )}
        {activeTab === "honors-awards" && (
          <HonorsAndAwards isDarkMode={isDarkMode} />
        )}
        {activeTab === "volunteering" && (
          <Volunteering isDarkMode={isDarkMode} />
        )}
        {activeTab === "skills" && <Skills isDarkMode={isDarkMode} />}
        {activeTab === "testimonials" && (
          <Testimonials isDarkMode={isDarkMode} />
        )}
      </main>

      <Footer
        isDarkMode={isDarkMode}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
      <ScrollToTop isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
