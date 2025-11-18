/* eslint-disable */
import { motion } from "framer-motion";
import * as React from "react";
import { useEffect, useState } from "react";

// Move award image imports to the top, before other asset imports
import conestogaScavengerHunt from "./assets/awards/conestoga-scavenger-hunt.jpg";
import gdgWaterloo2025_1 from "./assets/awards/gdg-waterloo-2025-1.png";
import technoHolmes from "./assets/awards/techno-holmes.jpg";
import greatlearningLogo from "./assets/greatlearning.png";
import defaultCertificationLogo from "./assets/logo.svg";
import sololearnLogo from "./assets/sololearn.png";
import jazzFestivalLogo from "./assets/uptown-jazz-festival.png";
import uwaterlooLogo from "./assets/uwaterloo.png";
import wrmuseumLogo from "./assets/wrmuseum.png";
import Education from "./components/Education/index";
import EmojiFeedbackWidget from "./components/EmojiFeedback";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials/Testimonials";

const technologies = {
  fullStack: [
    { name: "React.js", icon: "⚛️" },
    { name: "Vite", icon: "⚡" },
    { name: "Node.js", icon: "🌐" },
    { name: "Express", icon: "🚀" },
    { name: "MongoDB", icon: "🍃" },
    { name: "MERN Stack", icon: "⚡" },
    { name: "REST APIs", icon: "🔌" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "JWT Auth", icon: "🔐" },
    { name: "OAuth", icon: "🔑" },
  ],
  frontend: [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "JavaScript (ES6+)", icon: "📜" },
    { name: "React.js", icon: "⚛️" },
    { name: "Vite", icon: "⚡" },
    { name: "Redux", icon: "🔄" },
    { name: "MUI (Material-UI)", icon: "🎨" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Framer Motion", icon: "🎬" },
    { name: "Responsive Design", icon: "📱" },
  ],
  backend: [
    { name: "Node.js", icon: "🌐" },
    { name: "Express", icon: "🚀" },
    { name: "RESTful APIs", icon: "🔌" },
    { name: "MongoDB", icon: "🍃" },
    { name: "JWT", icon: "🔐" },
    { name: "Mongoose", icon: "🐭" },
    { name: "Docker", icon: "🐳" },
  ],
  desktop: [
    { name: ".NET", icon: "🎯" },
    { name: "C#", icon: "🔷" },
    { name: "Electron", icon: "⚛️" },
    { name: "Tauri", icon: "🦀" },
    { name: "ASP.NET Core", icon: "🌐" },
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
    { name: "C#", icon: "🔷" },
    { name: "C", icon: "🔧" },
    { name: "Dart", icon: "🎯" },
    { name: "SQL", icon: "💾" },
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
    { name: "Docker", icon: "🐳" },
    { name: "CI/CD", icon: "🔄" },
    { name: "Kubernetes", icon: "☸️" },
  ],
  cloud: [
    { name: "Firebase", icon: "🔥" },
    { name: "Vercel", icon: "⚫" },
    { name: "Netlify", icon: "🌀" },
    { name: "GitHub Pages", icon: "📄" },
    { name: "Railway", icon: "🚂" },
    { name: "Docker Hub", icon: "🐳" },
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
  {
    category: "Programming & Coding",
    logo: sololearnLogo,
    title: "JavaScript Intermediate Course",
    issuer: "Sololearn",
    date: "Issued Nov 2022",
    credentialId: "CC-OML7YQCI",
    credentialUrl: "https://www.sololearn.com/certificates/CC-OML7YQCI",
    skills: ["JavaScript", "Programming", "Problem Solving"],
  },
  {
    category: "Programming & Coding",
    logo: sololearnLogo,
    title: "Responsive Web Design",
    issuer: "Sololearn",
    date: "Issued Nov 2022",
    credentialId: "CT-0VOTLEEM",
    credentialUrl: "https://www.sololearn.com/certificates/CT-0VOTLEEM",
    skills: ["CSS", "Responsive Design", "HTML5"],
  },
  {
    category: "Programming & Coding",
    logo: sololearnLogo,
    title: "Bootstrap 4",
    issuer: "Sololearn",
    date: "Issued Nov 2022",
    credentialId: "CT-LSFLEFMI",
    credentialUrl: "https://www.sololearn.com/certificates/CT-LSFLEFMI",
    skills: ["Bootstrap", "Front-end", "CSS"],
  },
  {
    category: "Programming & Coding",
    logo: sololearnLogo,
    title: "jQuery",
    issuer: "Sololearn",
    date: "Issued Nov 2022",
    credentialId: "CT-NCW8BSUG",
    credentialUrl: "https://www.sololearn.com/certificates/CT-NCW8BSUG",
    skills: ["jQuery", "JavaScript", "DOM"],
  },
  {
    category: "Programming & Coding",
    logo: sololearnLogo,
    title: "PHP",
    issuer: "Sololearn",
    date: "Issued Nov 2022",
    credentialId: "CT-WV5R9K2F",
    credentialUrl: "https://www.sololearn.com/certificates/CT-WV5R9K2F",
    skills: ["PHP", "Back-end", "Web Development"],
  },
  {
    category: "Programming & Coding",
    logo: sololearnLogo,
    title: "SQL Intermediate Course",
    issuer: "Sololearn",
    date: "Issued Nov 2022",
    credentialId: "CT-W1DGCWMW",
    credentialUrl: "https://www.sololearn.com/certificates/CT-W1DGCWMW",
    skills: ["SQL", "Databases", "Data Analysis"],
  },
  {
    category: "Programming & Coding",
    logo: sololearnLogo,
    title: "Python Intermediate Course",
    issuer: "Sololearn",
    date: "Issued Nov 2022",
    credentialId: "CT-V6W5XVDF",
    credentialUrl: "https://www.sololearn.com/certificates/CT-V6W5XVDF",
    skills: ["Python", "Algorithms", "Problem Solving"],
  },
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
    location: "Ontario, canada",
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
    location: "Chennai, India ",
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
    location: "Bengaluru, India",
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
    title: "Health Track Pro (Flutter)",
    description:
      "A full-stack healthcare management solution designed to assist medical professionals " +
      "in tracking patient details and vital health records seamlessly. Built with Flutter and Node.js/Express.",
    tech: ["Flutter", "Node.js", "Express.js", "MongoDB", "REST API", "Hive"],
    type: "Full Stack Healthcare App",
    link: "https://github.com/adityajanjanam/HEALTH_TRACK_PRO",
    image: "🏥",
    highlights: [
      "Offline-first (Hive)",
      "Secure JWT authentication",
      "Patient & vitals management",
    ],
  },
  {
    title: "Aditya Janjanam Portfolio",
    description:
      "Personal portfolio website showcasing skills, experience, and projects with React, Tailwind CSS, and delightful motion design.",
    tech: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
    type: "Personal Website",
    link: "https://github.com/adityajanjanam/adityajanjanam-portfolio",
    image: "🌐",
    highlights: [
      "Multi-section SPA",
      "Interactive animations",
      "Dark/light theming",
    ],
  },
  {
    title: "HealthTrackPro (React Native)",
    description:
      "React Native mobile app tailored for healthcare providers to track patients, monitor vitals, and review clinical data with a polished experience.",
    tech: ["React Native", "JavaScript", "Expo"],
    type: "Mobile Healthcare App",
    link: "https://github.com/adityajanjanam/HealthTrackPro",
    image: "🩺",
    highlights: [
      "Cross-platform React Native build",
      "Patient record dashboards",
      "Clinical metrics tracking",
    ],
  },
  {
    title: "Train With Tail",
    description:
      "TrainWithTail enhances pet-owner relationships with tailored training programs, expert advice, and an integrated pet product shop for healthier bonds.",
    tech: ["Node.js", "Express.js", "MongoDB", "HTML5", "CSS3"],
    type: "Full Stack Pet Care Platform",
    link: "https://github.com/adityajanjanam/TrainWithTail",
    image: "🐾",
    highlights: [
      "Personalized training journeys",
      "Expert-backed resource library",
      "Integrated product storefront",
    ],
  },
  {
    title: "Patient Data API",
    description:
      "RESTful API that manages patient clinical data for healthcare providers, supporting secure storage and observability integrations.",
    tech: ["Node.js", "Express.js", "MongoDB", "Swagger"],
    type: "Healthcare API",
    link: "https://github.com/adityajanjanam/PatientDataAPI",
    image: "💊",
    highlights: [
      "Comprehensive REST endpoints",
      "Swagger-powered documentation",
      "Healthcare data modeling",
    ],
  },
  {
    title: "AI Quiz Generator",
    description:
      "AI-powered quiz generator built with React and Google Gemini AI that creates dynamic quizzes on any topic with interactive scoring.",
    tech: ["React", "TypeScript", "Gemini API"],
    type: "AI Web App",
    link: "https://github.com/adityajanjanam/ai-quiz-generator",
    image: "🧠",
    highlights: [
      "Google Gemini integration",
      "Dynamic quiz authoring",
      "Real-time scoring flow",
    ],
  },
  {
    title: "Sentiment Analyzer Streamlit",
    description:
      "Interactive Streamlit app that classifies text sentiment using AI and presents friendly visual feedback for rapid experimentation.",
    tech: ["Python", "Streamlit", "TextBlob"],
    type: "AI Utility",
    link: "https://github.com/adityajanjanam/sentiment-analyzer-streamlit",
    image: "😊",
    highlights: [
      "Instant sentiment analysis",
      "Streamlit-powered UI",
      "Experiment-friendly workflow",
    ],
  },
  {
    title: "Blog Grid CMS",
    description:
      "TypeScript-driven content management playground focused on grid-based publishing workflows and modular blog tooling.",
    tech: ["TypeScript", "React", "Tailwind CSS"],
    type: "Content Platform",
    link: "https://github.com/adityajanjanam/BlogGridCMS",
    image: "📰",
    highlights: [
      "TypeScript-first architecture",
      "Responsive grid authoring",
      "Modular content blocks",
    ],
  },
  {
    title: "TourVia Capstone",
    description:
      "Capstone travel planning experience that explores itinerary discovery, trip collaboration, and engaging tour storytelling.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    type: "Travel Web App",
    link: "https://github.com/adityajanjanam/TourVia_CapstoneProject",
    image: "✈️",
    highlights: [
      "Collaborative itinerary planning",
      "Destination research workflows",
      "Capstone-grade documentation",
    ],
  },
  {
    title: "Build with Google AI Workshop",
    description:
      "Hands-on workshop repository illustrating how to integrate Google AI services with TypeScript-based demos and starter kits.",
    tech: ["TypeScript", "Google AI SDK"],
    type: "Workshop Materials",
    link: "https://github.com/adityajanjanam/Build-with-Google-AI-Workshop",
    image: "🔬",
    highlights: [
      "Google AI API demos",
      "Step-by-step lab guides",
      "Reusable starter templates",
    ],
  },
  {
    title: "Python Snake Game",
    description:
      "Modern, feature-rich Snake game with vibrant UI, iconography, and customization options built using Python and Pygame.",
    tech: ["Python", "Pygame"],
    type: "Game",
    link: "https://github.com/adityajanjanam/python_snake_game",
    image: "🐍",
    highlights: [
      "Enhanced classic gameplay",
      "Customizable skins & speed",
      "Optimized Pygame loop",
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
    title: "To-Do List App",
    description:
      "Command-line to-do list app that allows adding, viewing, and deleting tasks with support for exporting executables.",
    tech: ["Python"],
    type: "CLI Utility",
    link: "https://github.com/adityajanjanam/ToDoListApp",
    image: "🗒️",
    highlights: [
      "Lightweight CLI workflow",
      "Task persistence",
      "Executable export support",
    ],
  },
  {
    title: "Pay Calculator",
    description:
      "Flutter application that calculates employee pay and tax based on hours worked and hourly rate, providing clear summaries.",
    tech: ["Flutter", "Dart"],
    type: "Mobile Utility",
    link: "https://github.com/adityajanjanam/Assignment1_PayCalculator",
    image: "💼",
    highlights: [
      "Hourly wage calculations",
      "Tax estimation logic",
      "Clean Flutter UI",
    ],
  },
  {
    title: "BMI Calculator App",
    description:
      "React Native BMI calculator that supports SI and Imperial units and communicates health categories instantly.",
    tech: ["React Native", "JavaScript"],
    type: "Mobile App",
    link: "https://github.com/adityajanjanam/BMICalculatorApp",
    image: "⚖️",
    highlights: [
      "BMI calculation",
      "Unit selection (SI/Imperial)",
      "Weight category feedback",
    ],
  },
  {
    title: "Windows Desktop BMI Calculator",
    description:
      "Windows application that computes BMI using metric and imperial units with user-friendly desktop visuals.",
    tech: ["Tcl", "Tk"],
    type: "Desktop App",
    link: "https://github.com/adityajanjanam/WindowsDesktopBMICalculator",
    image: "🖥️",
    highlights: [
      "Metric & imperial support",
      "BMI category feedback",
      "Desktop-friendly UI",
    ],
  },
  {
    title: "WIndows Desktop Calculator",
    description:
      "Simple calculator application for Windows, built with Python and Tkinter.",
    tech: ["Python", "Tkinter"],
    type: "Desktop App",
    link: "https://github.com/adityajanjanam/WIndowsDesktopCalculator",
    image: "🧮",
    highlights: [
      "Core arithmetic support",
      "Windows desktop GUI",
      "Python/Tkinter stack",
    ],
  },
  {
    title: "Blood Sugar Level Converter App",
    description:
      "Android application that converts blood sugar values between mmol/L and mg/dL, offering personalized input and instant results.",
    tech: ["Kotlin", "Android"],
    type: "Android App",
    link: "https://github.com/adityajanjanam/BloodSugarLevelConverterApp",
    image: "🩸",
    highlights: [
      "Accurate blood sugar conversion",
      "mmol/L ↔ mg/dL support",
      "Personalized inputs",
    ],
  },
  {
    title: "FitBuddy",
    description:
      "Kotlin-based fitness companion app featuring guided workouts, habit tracking, and progress insights for everyday athletes.",
    tech: ["Kotlin", "Android"],
    type: "Mobile Fitness App",
    link: "https://github.com/adityajanjanam/FitBuddy",
    image: "🏋️",
    highlights: [
      "Guided workout plans",
      "Progress tracking dashboards",
      "Material Design experience",
    ],
  },
  {
    title: "MAPD726 Group Capstone",
    description:
      "Collaborative MAPD726 capstone initiative applying mobile development practices from concept through delivery.",
    tech: ["Kotlin", "Firebase"],
    type: "Academic Project",
    link: "https://github.com/adityajanjanam/MAPD726_Group4_CapstoneProject",
    image: "🎓",
    highlights: [
      "Team-based agile delivery",
      "Mobile-first feature design",
      "Course documentation suite",
    ],
  },
  {
    title: "MAPD721 Assignment 2",
    description:
      "MAPD721 assignment focused on Jetpack Compose animations, navigation flows, and UI polish.",
    tech: ["Kotlin", "Jetpack Compose"],
    type: "Academic Project",
    link: "https://github.com/adityajanjanam/MAPD721-A2-AdityaJanjanam",
    image: "📚",
    highlights: [
      "Compose animation studies",
      "Navigation component usage",
      "Iterative UI refinement",
    ],
  },
  {
    title: "MAPD721 Assignment 1",
    description:
      "Entry MAPD721 assignment covering Compose fundamentals, state management, and theming.",
    tech: ["Kotlin", "Jetpack Compose"],
    type: "Academic Project",
    link: "https://github.com/adityajanjanam/MAPD721A1AdityaJanjanam",
    image: "📝",
    highlights: [
      "Compose basics",
      "State handling patterns",
      "Responsive layout experimentation",
    ],
  },
  {
    title: "Guest Book Project",
    description:
      "Guestbook web application enabling user registration, authentication, and message sharing built with PHP and MySQL.",
    tech: ["PHP", "MySQL"],
    type: "Web Application",
    link: "https://github.com/adityajanjanam/GuestbookProject",
    image: "📖",
    highlights: [
      "User authentication",
      "Message management",
      "PHP backend logic",
    ],
  },
  {
    title: "Issue Tracker Bot",
    description:
      "Automation experiments aimed at streamlining repository maintenance and triaging issues programmatically.",
    tech: ["Node.js", "GitHub API"],
    type: "Automation",
    link: "https://github.com/adityajanjanam/issue-tracker-bot",
    image: "🤖",
    highlights: [
      "Automated issue workflows",
      "Notification scaffolding",
      "Extensible bot architecture",
    ],
  },
  {
    title: "ShortenURL Telegram Bot",
    description:
      "Telegram bot that shortens URLs inside chat conversations, returning compact links instantly.",
    tech: ["Python", "Telegram Bot API"],
    type: "Automation Bot",
    link: "https://github.com/adityajanjanam/shortenurl_telegrambot",
    image: "🔗",
    highlights: [
      "Instant URL shortening",
      "Chat command support",
      "Deployable microservice",
    ],
  },
  {
    title: "Wifi Test",
    description:
      "WiFi testing tool designed to help users assess signal strength, speed, and reliability for diagnostics.",
    tech: ["Python"],
    type: "Diagnostics Tool",
    link: "https://github.com/adityajanjanam/WifiTest",
    image: "📶",
    highlights: [
      "Signal strength analysis",
      "Speed benchmarking",
      "Troubleshooting tips",
    ],
  },
  {
    title: "GDG Gemini Workshop Chat App",
    description:
      "Simple AI-powered chat application built with Streamlit and the Google Gemini API " +
      "during a GDG workshop.",
    tech: ["Python", "Streamlit", "Gemini API", "Google Cloud Run", "Docker"],
    type: "AI Chat App / Workshop",
    link: "https://github.com/adityajanjanam/GDG-Gemini-Workshop",
    image: "💬",
    highlights: [
      "Built with Streamlit",
      "Gemini API integration",
      "Google Cloud Run deployment",
      "GDG workshop project",
    ],
  },
];

const notionLinksRaw = [
  "https://www.notion.so/Mobile-App-Development-Project-Ideas-23f0f2a179aa800e982fc9d8fc1fca3b?source=copy_link",
  "https://www.notion.so/MERN-Stack-Project-Ideas-MongoDB-Express-js-React-js-Node-js-23f0f2a179aa8074ae90cc42c6588ca1?source=copy_link",
  "https://www.notion.so/Application-Packaging-Project-Ideas-23f0f2a179aa80908ee8e89a5fb2bf81?source=copy_link",
  "https://www.notion.so/How-to-Create-Chrome-Browser-Extension-Apps-23a0f2a179aa8038a1bdeea69a65406e?source=copy_link",
  "https://www.notion.so/Ways-to-Build-iOS-Apps-23a0f2a179aa80ca96a0ed28691bd8b2?source=copy_link",
  "https://leeward-banjo-312.notion.site/Ways-to-Build-Desktop-Applications-23a0f2a179aa80d2852ee7de8fec992e?source=copy_link",
  "https://leeward-banjo-312.notion.site/Ways-to-Build-Android-Apps-23a0f2a179aa8051afb0f0e37fb20c03?source=copy_link",
  "https://www.notion.so/MongoDB-Interview-Questions-with-Answer-Summary-2380f2a179aa8001baa6d7cb96181ec7?source=copy_link",
  "https://www.notion.so/React-Native-Interview-Questions-with-Answer-Summaries-2380f2a179aa807e9aaccc71666c3e45?source=copy_link",
  "https://leeward-banjo-312.notion.site/2ac0f2a179aa80d6ab4ec039d6b4045a?source=copy_link",
  "https://www.notion.so/SCCM-Intune-Interview-Questions-with-Answer-Summaries-2380f2a179aa8096b472d11ce93536c3?source=copy_link",
  "https://www.notion.so/Flutter-Interview-Questions-with-Answers-Summary-2360f2a179aa80d78f69f97c84f1fbd1?source=copy_link",
  "https://www.notion.so/Application-Packaging-Interview-Questions-2360f2a179aa80cd840fca03b64833d5?source=copy_link",
  "https://www.notion.so/MERN-Stack-Interview-Questions-with-Answers-22d0f2a179aa80809179eb44fce28fff?source=copy_link",
  "https://www.notion.so/Complete-Roadmap-to-Become-a-Developer-2025-Edition-22a0f2a179aa80d695dbf0126d238c1f?source=copy_link",
  "https://www.notion.so/ChatGPT-Prompt-Shortcuts-Cheat-Sheet-22d0f2a179aa80069b85f95087c526a9?source=copy_link",
  "https://www.notion.so/GitHub-Telegram-Bot-Notification-1bf0f2a179aa800c8e56cc25ff28ef8e?source=copy_link",
  "https://www.notion.so/Prompt-Engineering-for-AI-Free-Guide-2025-Edition-2260f2a179aa806e8df8e88dc66d2480?source=copy_link",
  "https://www.notion.so/NET-Developer-Roadmap-2025-2250f2a179aa800ca7c5fc2f61022f00?source=copy_link",
  "https://www.notion.so/Beginner-Friendly-AI-Tools-Projects-Curated-by-Aditya-Janjanam-2200f2a179aa80a1b6eeec24c61f9cb5?source=copy_link",
  "https://www.notion.so/AI-Tools-for-Android-Mobile-Developers-2025-2210f2a179aa80189bc3cdd0527574ec?source=copy_link",
  "https://www.notion.so/Git-Basics-to-Advanced-A-Complete-Guide-2210f2a179aa80459db3dda7866f1c9c?source=copy_link",
];

const uniqueNotionLinks = [...new Set(notionLinksRaw)];

const extractNotionTitle = (url) => {
  try {
    const { pathname } = new URL(url);
    const segments = pathname.split("/").filter(Boolean);
    const slug = segments.pop() || "";
    const withoutId = slug.replace(/-[0-9a-f]{32}$/i, "");
    const titleCandidate = decodeURIComponent(withoutId.replace(/-/g, " ")).trim();

    if (!titleCandidate || /^[0-9a-f]{32}$/i.test(titleCandidate)) {
      return "Notion Resource";
    }

    return titleCandidate;
  } catch (error) {
    return "Notion Resource";
  }
};

const categorizeNotionLink = (title) => {
  const lower = title.toLowerCase();
  if (lower.includes("project") || lower.includes("build")) {
    return "Project Ideas";
  }
  if (lower.includes("interview")) {
    return "Interview Prep";
  }
  if (lower.includes("roadmap")) {
    return "Roadmaps";
  }
  if (lower.includes("prompt") || lower.includes("ai") || lower.includes("bot")) {
    return "AI & Automation";
  }
  if (lower.includes("guide") || lower.includes("how to") || lower.includes("cheat sheet") || lower.includes("github")) {
    return "Guides & Tutorials";
  }
  return "Resources";
};

const blogResources = uniqueNotionLinks.map((url) => {
  const title = extractNotionTitle(url);
  const category = categorizeNotionLink(title);
  return { title, url, category };
});

const blogCategorySections = (() => {
  const grouped = new Map();
  blogResources.forEach((resource) => {
    if (!grouped.has(resource.category)) {
      grouped.set(resource.category, []);
    }
    grouped.get(resource.category).push(resource);
  });
  return Array.from(grouped, ([category, links]) => ({ category, links }));
})();

// NavLinks component without router links
const NavLinks = ({ activeTab, setActiveTab, isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
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
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
  };

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
    { name: "Blog", path: "blog" },
    { name: "Education", path: "education" },
    { name: "Certifications", path: "certifications" },
    { name: "Honors & Awards", path: "honors-awards" },
    { name: "Volunteering", path: "volunteering" },
    { name: "Skills", path: "skills" },
    { name: "Testimonials", path: "testimonials" },
  ];

  const handleMenuSelection = (path) => {
    setActiveTab(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`w-full border-b backdrop-blur-xl transition-colors duration-500 ${
          isDarkMode
            ? "bg-slate-950/85 border-blue-500/30"
            : "bg-white/90 border-blue-200/60 shadow-[0_10px_24px_rgba(59,130,246,0.12)]"
        }`}
      >
        <div className="flex items-center gap-3 w-full px-4 sm:px-8 lg:px-12 py-3">
          <div className="flex-shrink-0">
            <button onClick={() => handleMenuSelection("home")} className="group relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-blue-600/20 to-cyan-600/20 hover:from-blue-600/30 hover:to-cyan-600/30 border border-blue-500/30"
                    : "bg-gradient-to-r from-blue-100/50 to-cyan-100/50 hover:from-blue-200/60 hover:to-cyan-200/60 border border-blue-300/40"
                }`}
              >
                <span
                  className={`text-xl font-extrabold ${
                    isDarkMode
                      ? "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                      : "text-purple-700"
                  }`}
                >
                  AJ
                </span>
              </motion.div>
            </button>
          </div>

          <div className="hidden md:flex flex-1 items-center flex-wrap gap-2">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => setActiveTab(item.path)}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === item.path
                    ? isDarkMode
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-[0_12px_25px_rgba(56,189,248,0.25)] border border-blue-400/40"
                      : "bg-gradient-to-r from-blue-700 to-cyan-600 text-white shadow-[0_12px_25px_rgba(37,99,235,0.25)] border border-blue-300/40"
                    : isDarkMode
                      ? "text-gray-300 border border-slate-700/60 hover:border-blue-500/40 hover:text-blue-200"
                      : "text-slate-700 border border-blue-100 hover:bg-white/80 hover:border-blue-200 hover:text-blue-900 shadow-sm"
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ rotate: 180, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`p-2.5 rounded-full transition-all duration-300 border ${
                isDarkMode
                  ? "bg-gradient-to-br from-slate-900/60 to-slate-800/60 text-blue-300 hover:from-blue-600/30 hover:to-cyan-600/30 border-blue-500/40"
                  : "bg-gradient-to-br from-white/70 to-blue-50/70 text-blue-700 hover:from-blue-100/80 hover:to-sky-100/80 border-blue-200/60 shadow-sm"
              }`}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 shadow-lg ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-400 hover:to-cyan-400 shadow-blue-500/40 border border-blue-400/40"
                  : "bg-gradient-to-r from-blue-700 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-500 shadow-blue-500/30 border border-blue-400/40"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Resume
            </motion.a>
          </div>

          <div className="md:hidden ml-auto">
            <motion.button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                isDarkMode
                  ? "bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 border border-blue-500/30"
                  : "bg-blue-100/60 text-blue-700 hover:bg-blue-200/80 border border-blue-300/40"
              }`}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden py-4 space-y-2 border-b ${
            isDarkMode
              ? "bg-slate-950/95 border-blue-500/30"
              : "bg-white/95 border-blue-200/60 shadow-lg"
          }`}
        >
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => handleMenuSelection(item.path)}
              whileHover={{ x: 5 }}
              className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-300 mx-2 ${
                activeTab === item.path
                  ? isDarkMode
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-xl shadow-blue-500/50"
                    : "bg-gradient-to-r from-blue-700 to-cyan-700 text-white shadow-xl shadow-blue-600/60"
                  : isDarkMode
                    ? "text-gray-100 hover:bg-blue-500/20 hover:text-blue-200"
                    : "text-gray-900 hover:bg-blue-200/70 hover:text-blue-900"
              }`}
            >
              {item.name}
            </motion.button>
          ))}
          <div className="flex justify-between items-center px-4 pt-3 gap-3">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`p-3 rounded-xl flex-1 transition-all duration-300 ${
                isDarkMode
                  ? "bg-blue-600/20 text-blue-300 hover:bg-blue-600/30 border border-blue-500/30"
                  : "bg-blue-100/60 text-blue-700 hover:bg-blue-200/80 border border-blue-300/40"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                {isDarkMode ? (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span className="text-sm font-semibold">Light</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                    <span className="text-sm font-semibold">Dark</span>
                  </>
                )}
              </div>
            </motion.button>
            <motion.a
              href="/Aditya_Janjanam_Resume.docx"
              target="_blank"
              rel="noopener noreferrer"
              download="Aditya_Janjanam_Resume.docx"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 flex-1 shadow-xl ${
                isDarkMode
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-400 hover:to-cyan-400 shadow-blue-500/50 border border-blue-400/50"
                  : "bg-gradient-to-r from-blue-700 to-cyan-700 text-white hover:from-blue-600 hover:to-cyan-600 shadow-blue-600/60 border border-blue-500/50"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Resume
            </motion.a>
          </div>
        </motion.div>
      )}
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
            className={`rounded-xl p-6 max-w-lg w-full border ${contrast ? "bg-black border-gray-700" : "bg-[#1a1a1a] border-blue-500/20"}`}
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
                    className="w-full px-4 py-2 rounded-lg bg-black/20 border border-blue-500/20 
                             text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50"
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
                    className="w-full px-4 py-2 rounded-lg bg-black/20 border border-blue-500/20 
                             text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 text-left"
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
                  className="w-full px-4 py-2 rounded-lg bg-black/20 border border-blue-500/20 
                           text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 
                           resize-none text-left"
                  placeholder="Your message..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${contrast ? "bg-cyan-500 text-black hover:bg-cyan-400" : "bg-blue-500 text-white hover:bg-blue-600"}`}
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
    // Silver gradient in light mode, solid white in dark mode
    return isDarkMode
      ? "text-white"
      : "bg-gradient-to-r from-blue-900 via-indigo-600 to-sky-400 bg-clip-text text-transparent drop-shadow";
  };
  return (
    <motion.div
      className="h-16 mb-3 flex items-center justify-start"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        key={currentIndex}
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.9 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          fontFamily: currentGreeting.fontFamily,
          textShadow: isDarkMode
            ? "0 0 30px rgba(56, 189, 248, 0.45), 0 4px 10px rgba(0, 0, 0, 0.55)"
            : "0 2px 6px rgba(15, 23, 42, 0.35), 0 0 12px rgba(59, 130, 246, 0.35)",
        }}
        className={`text-4xl lg:text-5xl font-semibold ${getGreetingColor()} cursor-pointer select-none`}
        lang={currentGreeting.langCode}
        whileHover={{
          scale: 1.05,
          textShadow: isDarkMode
            ? "0 0 40px rgba(96, 165, 250, 0.6), 0 6px 15px rgba(0, 0, 0, 0.6)"
            : "0 0 30px rgba(59, 130, 246, 0.5), 0 6px 12px rgba(0, 0, 0, 0.15)",
        }}
      >
        {currentGreeting.text}
      </motion.h2>
    </motion.div>
  );
};

// --- Home Component (Corrected Structure) ---
const Home = ({ setActiveTab, isDarkMode }) => {
  return (
    // Main component div - Should fill width and height if needed (min-h-full added)
    <div
      className={`relative min-h-full overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-200"
          : "bg-gradient-to-br from-white via-gray-50 to-white text-gray-800"
      } pt-10 pb-10`}
    >
      {/* Modern Curved Header Background */}
      <div className="absolute top-0 left-0 w-full h-[340px] md:h-[400px] z-0 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,160 C480,320 960,0 1440,160 L1440,0 L0,0 Z"
            fill={isDarkMode ? 'url(#headerGradientDark)' : 'url(#headerGradientLight)'}
            opacity="0.9"
          />
          <defs>
            <linearGradient id="headerGradientDark" x1="0" y1="0" x2="1440" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" />
              <stop offset="0.5" stopColor="#1D4ED8" />
              <stop offset="1" stopColor="#1E293B" />
            </linearGradient>
            <linearGradient id="headerGradientLight" x1="0" y1="0" x2="1440" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60A5FA" />
              <stop offset="0.5" stopColor="#3B82F6" />
              <stop offset="1" stopColor="#DBEAFE" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Animated Background Orbs - More subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute top-20 -left-20 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 ${
            isDarkMode
              ? "bg-gradient-to-br from-purple-500 to-pink-500"
              : "bg-gradient-to-br from-purple-300 to-pink-300"
          }`}
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Inner container for main content - Two column layout with photo in top-right */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-5 lg:px-7 z-10">
        <div className="flex flex-col lg:flex-row items-start gap-6">
          {/* --- Left Column: Main Content --- */}
          <div className="flex flex-col w-full lg:w-2/3">
            <AnimatedMultilingualGreeting isDarkMode={isDarkMode} />
            
            {/* Modern Glassmorphism Header Card */}
            <motion.div
              className="mb-7 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            >
              <div
                className={`relative px-6 py-7 rounded-3xl shadow-2xl backdrop-blur-xl border overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-gray-900/70 via-blue-900/30 to-gray-900/70 border-blue-500/30' 
                    : 'bg-gradient-to-br from-white/80 via-blue-50/60 to-white/80 border-blue-300/40'
                }`}
                style={{
                  boxShadow: isDarkMode
                    ? '0 8px 32px 0 rgba(147, 51, 234, 0.25), inset 0 0 20px rgba(147, 51, 234, 0.1)' 
                    : '0 8px 32px 0 rgba(147, 51, 234, 0.15), inset 0 0 20px rgba(244, 114, 182, 0.08)',
                }}
              >
                <div className="mt-2">
                  <h1
                    className={`text-4xl lg:text-5xl font-extrabold mb-3 leading-tight ${
                      isDarkMode ? '' : 'text-blue-900'
                    }`}
                    style={isDarkMode ? {
                      background: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 50%, #06B6D4 100%)',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                      WebkitTextFillColor: 'transparent',
                    } : {}}
                  >
                    Aditya Janjanam
                  </h1>
                  <p
                    className={`text-base lg:text-lg font-bold ${
                      isDarkMode ? 'text-blue-100' : 'text-blue-900'
                    }`}
                    style={{
                      textShadow: isDarkMode
                        ? '0 2px 12px rgba(59, 130, 246, 0.5)'
                        : '0 2px 10px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    Full Stack Developer • Mobile App Developer • Software Engineer • Application Packager
                  </p>
                </div>
                
                {/* Subtle animated background gradient */}
                <motion.div 
                
                  className="absolute -right-20 -bottom-20 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-x-8 gap-y-3 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            >
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className={`text-3xl lg:text-4xl font-bold ${
                    isDarkMode
                      ? "text-blue-200"
                      : "text-blue-800"
                  }`}
                  style={{
                    textShadow: isDarkMode ? '0 2px 10px rgba(59, 130, 246, 0.5)' : '0 2px 8px rgba(30, 64, 175, 0.3)',
                  }}
                >
                  3+
                </div>
                <div
                  className={`text-xs lg:text-sm font-semibold ${
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  } mt-0.5 uppercase tracking-wider`}
                >
                  Years Experience
                </div>
              </motion.div>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className={`text-3xl lg:text-4xl font-bold ${
                    isDarkMode
                      ? "text-blue-200"
                      : "text-blue-800"
                  }`}
                  style={{
                    textShadow: isDarkMode ? '0 2px 10px rgba(59, 130, 246, 0.5)' : '0 2px 8px rgba(30, 64, 175, 0.3)',
                  }}
                >
                  15+
                </div>
                <div
                  className={`text-xs lg:text-sm font-semibold ${
                    isDarkMode ? "text-gray-200" : "text-gray-700"
                  } mt-0.5 uppercase tracking-wider`}
                >
                  Projects
                </div>
              </motion.div>
            </motion.div>
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
                    {/* Animated Glow Effect */}
                    <motion.div
                      className={`absolute -inset-2 rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 ${
                        isDarkMode
                          ? "bg-gradient-to-br from-dark-primary-400 via-dark-primary-500 to-dark-secondary-500"
                          : "bg-gradient-to-br from-light-primary-400 via-light-primary-500 to-light-secondary-400"
                      }`}
                      animate={{
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
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
                    {/* Animated Glow Effect */}
                    <motion.div
                      className={`absolute -inset-2 rounded-xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 ${
                        isDarkMode
                          ? "bg-gradient-to-br from-dark-secondary-400 via-dark-primary-500 to-dark-primary-400"
                          : "bg-gradient-to-br from-light-secondary-400 via-light-primary-500 to-light-primary-400"
                      }`}
                      animate={{
                        opacity: [0, 0.3, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5,
                      }}
                    />
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
                  {/* Name and Title removed as requested */}
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
    className={`relative p-4 rounded-xl border backdrop-blur-sm ${
      isDarkMode
        ? "bg-gradient-to-br from-gray-900/90 to-black/80 border-dark-primary-800 shadow-2xl shadow-dark-primary-900/30"
        : "bg-gradient-to-br from-white/95 to-gray-50/90 border-light-primary-200 shadow-2xl shadow-light-primary-500/20"
    } sm:p-6 overflow-hidden`}
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
  >
    {/* Decorative corner accent */}
    <div
      className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 ${
        isDarkMode
          ? "bg-gradient-to-bl from-dark-primary-400 to-transparent"
          : "bg-gradient-to-bl from-light-primary-400 to-transparent"
      }`}
    />
    
    <div className="relative z-10">
      <motion.h3
        className={`text-xl font-bold mb-4 ${
          isDarkMode ? "text-blue-200" : "text-blue-900"
        } sm:text-2xl flex items-center gap-2`}
        style={{
          textShadow: isDarkMode ? '0 2px 10px rgba(59, 130, 246, 0.4)' : 'none',
        }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <span>💼</span> Professional Summary
      </motion.h3>
      <motion.div
        className={`text-sm font-medium ${
          isDarkMode ? "text-gray-100" : "text-gray-800"
        } leading-relaxed sm:text-base text-left`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <b>Innovative Full Stack & Mobile Developer with 3+ years of hands-on experience</b> delivering robust, user-centric solutions across web, mobile, and desktop platforms. I blend deep expertise in React, Node.js, Flutter, and cloud technologies with a strong foundation in IT infrastructure and application packaging. A distinction in Computer Applications Development (Conestoga College, Waterloo), Mobile Applications Development (Centennial College, Toronto), and a Bachelor&apos;s Degree in Electronics & Communication Engineering (Sathyabama Institute of Science and Technology, Chennai, India) fuel my passion for building scalable, secure, and high-performance applications.<br /><br />
        At Atos, I engineered enterprise-grade deployments, mastering MSI/MSIX packaging, PowerShell automation, and SCCM/Intune for seamless software delivery in virtualized environments such as Citrix, VMware, and Hyper-V. My internships at Capgemini and Tech Mahindra sharpened my skills in the MERN stack, RESTful API design, and Agile collaboration, where I drove projects from concept to production with precision and creativity. I excel at bridging development and deployment, ensuring smooth transitions from code to production while crafting cross-platform apps that delight users and meet business goals.<br /><br />
        <b>Open to new opportunities in:</b> Full Stack Development, Mobile App Development (React Native, Flutter, iOS/Android), Desktop Apps (Electron), and Enterprise Application Packaging & Deployment. I&apos;m passionate about leveraging modern technologies to solve complex problems and deliver impactful solutions that drive business value.
      </motion.div>
    </div>

    <div className="mt-6">
      <motion.h4
        className={`text-lg font-bold mb-3 ${
          isDarkMode ? "text-blue-200" : "text-blue-900"
        } flex items-center gap-2`}
        style={{
          textShadow: isDarkMode ? '0 2px 10px rgba(59, 130, 246, 0.4)' : 'none',
        }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        <span>🔑</span> Key Skills
      </motion.h4>
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
        ].map((skill, index) => (
          <motion.span
            key={skill}
            className={`px-2 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${
              isDarkMode
                ? "bg-blue-600/40 text-blue-100 border border-blue-400/50 shadow-lg shadow-blue-500/30"
                : "bg-blue-100 text-blue-900 border border-blue-300 shadow-md shadow-blue-500/20"
            }`}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.7 + index * 0.05,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{
              scale: 1.08,
              y: -3,
              boxShadow: isDarkMode
                ? "0 10px 25px rgba(96, 165, 250, 0.3)"
                : "0 10px 25px rgba(59, 130, 246, 0.2)",
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
  const uniqueSkills = React.useMemo(() => {
    const skillSet = new Set();
    experiences.forEach((exp) => {
      exp.skills.forEach((skill) => skillSet.add(skill));
    });
    return Array.from(skillSet);
  }, []);

  const impactPoints = React.useMemo(
    () => experiences.reduce((total, exp) => total + exp.description.length, 0),
    []
  );

  const stats = React.useMemo(
    () => [
      {
        label: "Enterprise Tenures",
        value: experiences.length.toString(),
        hint: "Roles spanning enterprise packaging and full-stack delivery",
      },
      {
        label: "Impact Highlights",
        value: impactPoints.toString(),
        hint: "Documented automation, rollout, and UX wins",
      },
      {
        label: "Core Tools",
        value: `${uniqueSkills.length}+`,
        hint: "Packaging, automation, and product toolchain",
      },
    ],
    [impactPoints, uniqueSkills.length]
  );

  const spotlight = React.useMemo(
    () =>
      experiences.map((exp) => ({
        company: exp.company,
        headline: exp.description[0],
      })),
    []
  );

  return (
    <section
      className={`relative min-h-screen px-6 py-16 sm:px-8 lg:px-12 transition-colors duration-500 ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-950 via-[#050818] to-black text-slate-100"
          : "bg-gradient-to-b from-white via-slate-50 to-blue-50 text-slate-900"
      }`}
    >
      <div
        className="absolute inset-x-0 top-10 -z-10 mx-auto h-96 max-w-5xl rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-purple-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <span
            className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold tracking-wider ${
              isDarkMode ? "bg-white/5 text-cyan-200" : "bg-blue-100 text-blue-700"
            }`}
          >
            Career Journey
          </span>
          <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Professional Experience
          </h2>
          <p
            className={`mt-4 max-w-3xl text-base leading-relaxed sm:text-lg ${
              isDarkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Building enterprise solutions, elevating packaging operations, and shipping user-focused products. Each engagement emphasised measurable impact, cross-functional collaboration, and resilient release processes.
          </p>

          <div className="mt-8 grid w-full gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className={`rounded-2xl border px-5 py-6 text-left shadow-sm transition-colors duration-300 ${
                  isDarkMode ? "border-white/10 bg-white/5" : "border-blue-100 bg-white"
                }`}
              >
                <p
                  className={`text-3xl font-bold tracking-tight ${
                    isDarkMode ? "text-cyan-300" : "text-blue-600"
                  }`}
                >
                  {item.value}
                </p>
                <p
                  className={`mt-1 text-sm font-semibold ${
                    isDarkMode ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {item.label}
                </p>
                <p
                  className={`mt-2 text-xs leading-relaxed ${
                    isDarkMode ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  {item.hint}
                </p>
              </div>
            ))}
          </div>
        </motion.header>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.7fr),minmax(0,1fr)]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div
              className={`absolute left-6 top-0 bottom-0 hidden w-0.5 rounded-full md:block ${
                isDarkMode
                  ? "bg-gradient-to-b from-cyan-500/80 via-blue-500/30 to-purple-500/40"
                  : "bg-gradient-to-b from-blue-400 via-cyan-300 to-purple-300"
              }`}
              aria-hidden="true"
            />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.article
                  key={`${exp.company}-${exp.title}`}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`relative grid gap-4 rounded-2xl border px-6 py-6 pl-16 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:shadow-xl ${
                    isDarkMode
                      ? "border-white/10 bg-white/5 hover:border-cyan-400/60 hover:bg-white/7"
                      : "border-blue-100 bg-white hover:border-blue-300 hover:bg-blue-50/60"
                  }`}
                >
                  <div
                    className={`absolute left-0 top-6 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 text-2xl ${
                      isDarkMode
                        ? "border-gray-950 bg-gradient-to-br from-cyan-500 to-purple-500 shadow-[0_12px_30px_rgba(30,136,229,0.3)]"
                        : "border-blue-50 bg-gradient-to-br from-blue-500 to-purple-500 shadow-[0_12px_24px_rgba(59,130,246,0.25)]"
                    }`}
                    aria-hidden="true"
                  >
                    <span>{exp.logo}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide">
                    <span
                      className={`font-semibold ${
                        isDarkMode ? "text-cyan-300" : "text-blue-600"
                      }`}
                    >
                      {exp.company}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-current opacity-40" />
                    <span className="text-slate-400">{exp.date}</span>
                    <span className="h-1 w-1 rounded-full bg-current opacity-40" />
                    <span className="text-slate-400">{exp.location}</span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold leading-tight sm:text-2xl">
                      {exp.title}
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed sm:text-base">
                      {exp.description.map((desc) => (
                        <li key={desc} className="flex items-start gap-2">
                          <span
                            className={`mt-[6px] h-1.5 w-1.5 flex-shrink-0 rounded-full ${
                              isDarkMode ? "bg-cyan-400" : "bg-blue-500"
                            }`}
                          />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-3">
                    {exp.skills.map((skill) => (
                      <span
                        key={`${exp.company}-${skill}`}
                        className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${
                          isDarkMode
                            ? "bg-cyan-400/10 text-cyan-100 ring-1 ring-cyan-400/30"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className={`flex flex-col gap-8 rounded-3xl border p-6 shadow-lg ${
              isDarkMode ? "border-white/10 bg-white/5" : "border-blue-100 bg-white"
            }`}
          >
            <div>
              <h3 className={`text-lg font-semibold ${isDarkMode ? "text-cyan-200" : "text-blue-700"}`}>
                Spotlight Wins
              </h3>
              <p className={`mt-2 text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                Select outcomes that shaped delivery velocity, reliability, and user experience.
              </p>

              <div className="mt-5 space-y-4">
                {spotlight.map((item) => (
                  <div
                    key={`${item.company}-${item.headline}`}
                    className={`rounded-2xl border px-4 py-3 text-sm transition-colors ${
                      isDarkMode ? "border-white/10 bg-white/5" : "border-blue-50 bg-blue-50/60"
                    }`}
                  >
                    <p
                      className={`text-xs font-semibold uppercase tracking-wider ${
                        isDarkMode ? "text-cyan-300" : "text-blue-600"
                      }`}
                    >
                      {item.company}
                    </p>
                    <p className="mt-2 leading-relaxed">{item.headline}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className={`text-lg font-semibold ${isDarkMode ? "text-cyan-200" : "text-blue-700"}`}>
                Core Toolkit
              </h3>
              <p className={`mt-2 text-sm ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
                A sampling of the automation, packaging, and product technologies used across engagements.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {uniqueSkills.slice(0, 14).map((skill) => (
                  <span
                    key={`experience-skill-${skill}`}
                    className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide ${
                      isDarkMode
                        ? "bg-cyan-500/15 text-cyan-100 ring-1 ring-cyan-400/20"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {uniqueSkills.length > 14 && (
                <p className={`mt-3 text-xs italic ${isDarkMode ? "text-slate-500" : "text-slate-500"}`}>
                  +{uniqueSkills.length - 14} more tools and frameworks documented in project playbooks.
                </p>
              )}
            </div>

            <div
              className={`rounded-2xl border px-5 py-6 text-sm transition-colors ${
                isDarkMode
                  ? "border-white/10 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"
                  : "border-blue-100 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50"
              }`}
            >
              <h4 className={`text-base font-semibold ${isDarkMode ? "text-cyan-200" : "text-blue-700"}`}>
                Collaboration DNA
              </h4>
              <p className={`mt-2 leading-relaxed ${isDarkMode ? "text-slate-300" : "text-slate-600"}`}>
                Partnered with designers, PMs, infra, and security teams to accelerate rollouts. Facilitated knowledge sharing through playbooks, brown-bag sessions, and onboarding labs.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};

const Projects = ({ isDarkMode }) => {
  const [selectedType, setSelectedType] = useState("All");
  const [selectedTech, setSelectedTech] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("most-highlights");

  const typeFilters = React.useMemo(() => {
    const unique = Array.from(new Set(projects.map((project) => project.type))).sort((a, b) =>
      a.localeCompare(b)
    );
    return ["All", ...unique];
  }, []);

  const techFilters = React.useMemo(() => {
    const unique = Array.from(
      new Set(
        projects.flatMap((project) => (project.tech ? project.tech : []))
      )
    ).sort((a, b) => a.localeCompare(b));
    return ["All", ...unique];
  }, []);

  const stats = React.useMemo(() => {
    const total = projects.length;
    const typeCount = typeFilters.length - 1;
    const techCount = techFilters.length - 1;
    const highlightCount = projects.reduce(
      (accumulator, project) =>
        accumulator + (project.highlights ? project.highlights.length : 0),
      0
    );
    const averageHighlights = total > 0 ? Math.round(highlightCount / total) : 0;

    return { total, typeCount, techCount, highlightCount, averageHighlights };
  }, [techFilters.length, typeFilters.length]);

  const featuredCatalog = React.useMemo(
    () =>
      [...projects]
        .sort((a, b) => {
          const diff =
            (b.highlights ? b.highlights.length : 0) -
            (a.highlights ? a.highlights.length : 0);
          if (diff !== 0) {
            return diff;
          }
          return a.title.localeCompare(b.title);
        })
        .slice(0, 3),
    []
  );

  const featuredLookup = React.useMemo(
    () => new Set(featuredCatalog.map((project) => project.title)),
    [featuredCatalog]
  );

  const filteredProjects = React.useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return projects
      .filter((project) => {
        const matchesType =
          selectedType === "All" || project.type === selectedType;
        const matchesTech =
          selectedTech === "All" || project.tech.includes(selectedTech);

        if (!normalizedQuery) {
          return matchesType && matchesTech;
        }

        const haystack = [
          project.title,
          project.description,
          project.type,
          project.tech.join(" "),
          (project.highlights || []).join(" "),
        ]
          .join(" ")
          .toLowerCase();

        return matchesType && matchesTech && haystack.includes(normalizedQuery);
      })
      .sort((a, b) => {
        const ah = a.highlights ? a.highlights.length : 0;
        const bh = b.highlights ? b.highlights.length : 0;
        const at = a.tech ? a.tech.length : 0;
        const bt = b.tech ? b.tech.length : 0;
        switch (sortBy) {
          case "least-highlights":
            if (ah !== bh) return ah - bh;
            return a.title.localeCompare(b.title);
          case "title-asc":
            return a.title.localeCompare(b.title);
          case "title-desc":
            return b.title.localeCompare(a.title);
          case "type-asc":
            return (a.type || "").localeCompare(b.type || "");
          case "tech-desc":
            if (bt !== at) return bt - at;
            return a.title.localeCompare(b.title);
          case "most-highlights":
          default:
            if (bh !== ah) return bh - ah;
            return a.title.localeCompare(b.title);
        }
      });
  }, [searchQuery, selectedTech, selectedType, sortBy]);

  const featuredProjects = React.useMemo(
    () =>
      filteredProjects
        .filter((project) => featuredLookup.has(project.title))
        .slice(0, 2),
    [featuredLookup, filteredProjects]
  );

  const featuredTitles = React.useMemo(
    () => new Set(featuredProjects.map((project) => project.title)),
    [featuredProjects]
  );

  const remainingProjects = React.useMemo(
    () =>
      filteredProjects.filter((project) => !featuredTitles.has(project.title)),
    [featuredTitles, filteredProjects]
  );

  const groupedProjects = React.useMemo(() => {
    return remainingProjects.reduce((accumulator, project) => {
      const key = project.type || "Other";
      if (!accumulator[key]) {
        accumulator[key] = [];
      }
      accumulator[key].push(project);
      return accumulator;
    }, {});
  }, [remainingProjects]);

  const orderedGroups = React.useMemo(
    () =>
      Object.entries(groupedProjects).sort((a, b) => {
        if (b[1].length !== a[1].length) {
          return b[1].length - a[1].length;
        }
        return a[0].localeCompare(b[0]);
      }),
    [groupedProjects]
  );

  const statCards = React.useMemo(
    () => [
      {
        label: "Total Projects",
        value: stats.total,
        helper: `Across ${stats.typeCount} focus areas`,
      },
      {
        label: "Technologies Applied",
        value: stats.techCount,
        helper: "Stacks leveraged end-to-end",
      },
      {
        label: "Key Highlights",
        value: stats.highlightCount,
        helper: `${stats.averageHighlights} avg features per build`,
      },
      {
        label: "Spotlighted",
        value: featuredCatalog.length,
        helper: "Flagship case studies",
      },
    ],
    [featuredCatalog.length, stats]
  );

  const nothingFound = filteredProjects.length === 0;

  return (
    <section
      className={`relative min-h-screen px-6 py-16 sm:px-8 lg:px-12 transition-colors duration-500 ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-950 via-[#050818] to-black text-slate-100"
          : "bg-gradient-to-b from-white via-slate-50 to-blue-50 text-slate-900"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span
            className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold tracking-wider ${
              isDarkMode ? "bg-white/5 text-cyan-200" : "bg-blue-100 text-blue-700"
            }`}
          >
            Build Portfolio
          </span>
          <h2
            className={`text-3xl font-extrabold sm:text-4xl lg:text-5xl ${
              isDarkMode ? "text-cyan-400" : "text-blue-600"
            }`}
          >
            Projects
          </h2>
          <p
            className={`mt-4 max-w-3xl mx-auto text-base leading-relaxed sm:text-lg ${
              isDarkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Product builds across healthcare, mobile, and web—engineered end to end with measurable outcomes and thoughtful developer experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {statCards.map((stat, idx) => (
            <div
              key={stat.label}
              className={`rounded-2xl p-5 transition-all duration-300 ${
                isDarkMode
                  ? [
                      "bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-white/10",
                      "bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-rose-500/10 border border-white/10",
                      "bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-white/10",
                      "bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 border border-white/10",
                    ][idx % 4]
                  : [
                      "bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 border-2 border-blue-100",
                      "bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 border-2 border-pink-100",
                      "bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 border-2 border-emerald-100",
                      "bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 border-2 border-amber-100",
                    ][idx % 4]
              } hover:-translate-y-0.5`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className={`text-xs uppercase tracking-wide ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>{stat.label}</p>
                  <p className="text-3xl font-bold mt-1 mb-1">{stat.value.toString().padStart(2, "0")}</p>
                  <p className={`text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>{stat.helper}</p>
                </div>
                <div className={`ml-3 rounded-xl p-2 ${isDarkMode ? "bg-black/30 border border-white/10" : "bg-white border border-slate-200"}`}>
                  {/* Icon */}
                  {idx % 4 === 0 && (
                    <svg className={`${isDarkMode ? "text-cyan-300" : "text-blue-600"} h-5 w-5`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
                    </svg>
                  )}
                  {idx % 4 === 1 && (
                    <svg className={`${isDarkMode ? "text-pink-300" : "text-pink-600"} h-5 w-5`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h10M4 17h16" />
                    </svg>
                  )}
                  {idx % 4 === 2 && (
                    <svg className={`${isDarkMode ? "text-emerald-300" : "text-emerald-600"} h-5 w-5`} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {idx % 4 === 3 && (
                    <svg className={`${isDarkMode ? "text-amber-300" : "text-amber-600"} h-5 w-5`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118L10.5 13.347a1 1 0 00-1.175 0L6.645 16.283c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.99 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.059-3.293z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {typeFilters.map((type) => {
                const isActive = type === selectedType;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`px-3 py-1.5 text-xs sm:text-sm rounded-full border transition-colors ${
                      isActive
                        ? isDarkMode
                          ? "bg-cyan-500 border-cyan-400 text-black"
                          : "bg-blue-600 border-blue-500 text-white"
                        : isDarkMode
                          ? "bg-gray-900 border-gray-800 text-gray-300 hover:border-cyan-400/80"
                          : "bg-white border-gray-200 text-gray-600 hover:border-blue-400"
                    }`}
                  >
                    {type}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {techFilters.map((tech) => {
              const isActive = tech === selectedTech;
              return (
                <button
                  key={tech}
                  type="button"
                  onClick={() => setSelectedTech(tech)}
                  className={`whitespace-nowrap px-3 py-1 text-xs rounded-full border transition-colors ${
                    isActive
                      ? isDarkMode
                        ? "bg-cyan-500 border-cyan-400 text-black"
                        : "bg-blue-600 border-blue-500 text-white"
                      : isDarkMode
                        ? "bg-gray-900 border-gray-800 text-gray-400 hover:border-cyan-400/70"
                        : "bg-white border-gray-200 text-gray-600 hover:border-blue-400"
                  }`}
                >
                  {tech}
                </button>
              );
            })}
          </div>
        </div>

        {nothingFound ? (
          <div
            className={`rounded-3xl border p-10 text-center max-w-3xl mx-auto ${
              isDarkMode
                ? "border-white/10 bg-white/5"
                : "border-blue-100 bg-white"
            }`}
          >
            <p className="text-xl font-semibold mb-2">No matching projects yet</p>
            <p className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"}`}>
              Adjust filters or search terms to rediscover shipped work across healthcare, mobile, web, and backend initiatives.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="max-w-4xl mx-auto w-full">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                <div className="relative flex-1">
                  <svg
                    className={`absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 ${
                      isDarkMode ? "text-slate-400" : "text-slate-500"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                  </svg>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Search across the Projects"
                    className={`w-full rounded-2xl border-2 pl-12 pr-5 py-4 text-base transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      isDarkMode
                        ? "bg-gray-900/80 border-gray-800 text-gray-100 focus:ring-cyan-400 focus:ring-offset-gray-950"
                        : "bg-white border-gray-200 text-gray-900 focus:ring-blue-600 focus:ring-offset-white"
                    }`}
                  />
                </div>
                <div className="relative">
                  <select
                    aria-label="Sort projects by"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className={`rounded-2xl border-2 px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      isDarkMode
                        ? "bg-gray-900/80 border-gray-800 text-gray-100 focus:ring-cyan-400 focus:ring-offset-gray-950"
                        : "bg-white border-gray-200 text-gray-900 focus:ring-blue-600 focus:ring-offset-white"
                    }`}
                  >
                    <option value="most-highlights">Most Highlights</option>
                    <option value="least-highlights">Least Highlights</option>
                    <option value="title-asc">Title A–Z</option>
                    <option value="title-desc">Title Z–A</option>
                    <option value="type-asc">Type A–Z</option>
                    <option value="tech-desc">Most Tech Used</option>
                  </select>
                </div>
              </div>
              <p className={`mt-2 text-sm ${isDarkMode ? "text-slate-400" : "text-slate-600"}`}>
                Showing {filteredProjects.length} of {projects.length} projects
              </p>
            </div>

            {featuredProjects.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <h3 className="text-lg font-semibold uppercase tracking-wider">
                    Featured Case Studies
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-emerald-400 via-transparent to-transparent" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredProjects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                      className={`rounded-3xl border p-6 sm:p-8 transition-all duration-300 ${
                        isDarkMode
                          ? "bg-white/5 border-white/10 hover:border-cyan-400/70 hover:shadow-[0_25px_55px_-30px_rgba(8,145,178,0.55)]"
                          : "bg-white border-blue-100 hover:border-cyan-400/70 hover:shadow-[0_25px_55px_-30px_rgba(8,145,178,0.45)]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4 mb-5">
                        <div className="flex items-center gap-4">
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-2xl text-3xl ${
                              isDarkMode
                                ? "bg-gray-900 border border-gray-800"
                                : "bg-blue-50 border border-blue-100"
                            }`}
                          >
                            {project.image}
                          </div>
                          <div>
                            <span
                              className={`text-xs uppercase tracking-wide ${
                                isDarkMode ? "text-emerald-300" : "text-emerald-600"
                              }`}
                            >
                              {project.type}
                            </span>
                            <h4 className="text-xl font-bold leading-tight">
                              {project.title}
                            </h4>
                          </div>
                        </div>
                        <span
                          className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-wider ${
                            isDarkMode
                              ? "bg-cyan-500/10 text-cyan-300 border border-cyan-400/40"
                              : "bg-blue-50 text-blue-700 border border-blue-200"
                          }`}
                        >
                          Featured
                        </span>
                      </div>
                      <p className={`text-sm leading-relaxed ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}>
                        {project.description}
                      </p>
                      {project.highlights && project.highlights.length > 0 && (
                        <ul className="mt-4 space-y-2 text-sm">
                          {project.highlights.slice(0, 4).map((highlight) => (
                            <li
                              key={`${project.title}-${highlight}`}
                              className="flex items-start gap-2"
                            >
                              <span className={isDarkMode ? "text-cyan-300" : "text-blue-600"}>
                                ◆
                              </span>
                              <span className={isDarkMode ? "text-gray-200" : "text-gray-700"}>
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={`${project.title}-${tech}`}
                            className={`${
                              isDarkMode
                                ? "bg-gray-900/60 border border-gray-800 text-gray-200"
                                : "bg-blue-50 border border-blue-100 text-blue-700"
                            } px-2.5 py-1 text-xs rounded-full`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap flex-shrink-0 ${
                            isDarkMode
                              ? "bg-emerald-500 text-black hover:bg-emerald-400"
                              : "bg-emerald-500 text-white hover:bg-emerald-600"
                          }`}
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          View Repository
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {orderedGroups.map(([group, groupProjects]) => (
              <div key={group}>
                <div className="flex items-center gap-3 mb-4">
                  <h4 className="text-lg font-semibold">{group}</h4>
                  <span
                    className={`rounded-full px-3 py-0.5 text-[10px] uppercase tracking-wider ${
                      isDarkMode
                        ? "bg-gray-900 border border-gray-800 text-gray-400"
                        : "bg-blue-50 border border-blue-100 text-blue-700"
                    }`}
                  >
                    {groupProjects.length} project
                    {groupProjects.length > 1 ? "s" : ""}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {groupProjects.map((project, index) => (
                    <motion.div
                      key={`${group}-${project.title}`}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      whileHover={{ y: -4 }}
                      className={`rounded-2xl border p-6 transition-all duration-300 ${
                        isDarkMode
                          ? "bg-white/5 border-white/10 hover:border-cyan-400/70 hover:shadow-[0_20px_45px_-25px_rgba(8,145,178,0.45)]"
                          : "bg-white border-blue-100 hover:border-blue-400/70 hover:shadow-[0_20px_45px_-25px_rgba(59,130,246,0.45)]"
                      }`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-xl text-2xl ${
                              isDarkMode
                                ? "bg-gray-900 border border-gray-800"
                                : "bg-blue-50 border border-blue-100"
                            }`}
                          >
                            {project.image}
                          </div>
                          <div>
                            <h5 className="text-base font-semibold leading-snug break-words">
                              {project.title}
                            </h5>
                            <p className="text-xs text-gray-500">{project.type}</p>
                          </div>
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap flex-shrink-0 self-start ${
                            isDarkMode
                              ? "bg-emerald-500 text-black hover:bg-emerald-400"
                              : "bg-emerald-500 text-white hover:bg-emerald-600"
                          }`}
                        >
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.339.726-4.034-1.416-4.034-1.416-.546-1.387-1.332-1.756-1.332-1.756-1.09-.745.082-.729.082-.729 1.206.084 1.84 1.237 1.84 1.237 1.069 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.299-1.23 3.299-1.23.652 1.653.241 2.874.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                          </svg>
                          View Repository
                        </a>
                      </div>
                      <p className={`text-sm leading-relaxed mb-4 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}>
                        {project.description}
                      </p>
                      {project.highlights && project.highlights.length > 0 && (
                        <ul className="mb-4 space-y-1 text-xs">
                          {project.highlights.map((highlight) => (
                            <li
                              key={`${project.title}-${highlight}`}
                              className="flex items-start gap-2"
                            >
                              <span className={isDarkMode ? "text-cyan-300" : "text-blue-600"}>
                                •
                              </span>
                              <span className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={`${project.title}-${tech}`}
                            className={`${
                              isDarkMode
                                ? "bg-gray-900 border border-gray-800 text-gray-300"
                                : "bg-blue-50 border border-blue-100 text-blue-700"
                            } px-2 py-1 text-[11px] rounded-full`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
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
    category: "Programming & Coding",
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
    category: "Programming & Coding",
    logo: "https://cdn.worldvectorlogo.com/logos/hackerrank.svg",
    title: "C# (Basic)",
    issuer: "HackerRank",
    date: "Issued Dec 2023",
    credentialId: "a3c2567a2f8b",
    credentialUrl: "https://www.hackerrank.com/certificates/a3c2567a2f8b",
    skills: ["Microsoft Visual Studio Code", "Software Development"],
  },
  {
    category: "Programming & Coding",
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
    category: "Programming & Coding",
    logo: "https://cdn.worldvectorlogo.com/logos/hackerrank.svg",
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "Issued 2024",
    credentialId: "c11e8554e0ac",
    credentialUrl: "https://www.hackerrank.com/certificates/c11e8554e0ac",
    skills: [
      "Algorithms",
      "Data Structures",
      "Problem Solving",
    ],
  },
  {
    category: "Programming & Coding",
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
    category: "Programming & Coding",
    logo: "https://cdn.worldvectorlogo.com/logos/coursera-1.svg",
    title: "Clean Data in SQL using MySQL Workbench",
    issuer: "Coursera",
    date: "Issued Nov 2023",
    credentialId: "NLA9ZX7647JP",
    credentialUrl: "https://coursera.org/verify/NLA9ZX7647JP",
    skills: ["MERN Stack", "SQL"],
  },
  {
    category: "Programming & Coding",
    logo: "https://cdn.worldvectorlogo.com/logos/coursera-1.svg",
    title: "Understanding Basic SQL Syntax",
    issuer: "Coursera",
    date: "Issued Nov 2023",
    credentialId: "BVPHU2KBLFGY",
    credentialUrl: "https://coursera.org/verify/BVPHU2KBLFGY",
    skills: ["MERN Stack", "SQL"],
  },
  {
    category: "Programming & Coding",
    logo: "https://cdn.worldvectorlogo.com/logos/coursera-1.svg",
    title: "Python 101: Develop Your First Python Program",
    issuer: "Coursera",
    date: "Issued Nov 2023",
    credentialId: "6TDVGZE6XEEW",
    credentialUrl: "https://coursera.org/verify/6TDVGZE6XEEW",
    skills: ["Python (Programming Language)"],
  },
  {
    category: "Programming & Coding",
    logo: "https://cdn.worldvectorlogo.com/logos/coursera-1.svg",
    title: "Introduction to Java Programming: Java Fundamental Concepts",
    issuer: "Coursera",
    date: "Issued Sep 2023",
    credentialId: "M93PME67J6M8",
    credentialUrl: "https://coursera.org/verify/M93PME67J6M8",
    skills: ["Java"],
  },
  {
    category: "Programming & Coding",
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
    category: "Programming & Coding",
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
    category: "Programming & Coding",
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
    category: "Programming & Coding",
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
    category: "Programming & Coding",
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
    category: "Programming & Coding",
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
    category: "Software Development",
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
    category: "Web & Frontend",
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
    category: "Web & Frontend",
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
    category: "Language & Communication",
    logo: "https://cdn.worldvectorlogo.com/logos/ielts.svg",
    title: "IELTS Academic",
    issuer: "IELTS Official",
    date: "Issued Jan 2023 · Expired Dec 2024",
    credentialId: "22IA010670JANA003A",
    skills: ["IELTS"],
  },
  {
    category: "Language & Communication",
    logo: "https://cdn.worldvectorlogo.com/logos/duolingo.svg",
    title: "Duolingo English Test",
    issuer: "Duolingo English Test",
    date: "Issued Mar 2022 · Expired Feb 2024",
    credentialId: "cbb4883fc942530db84789decd8dddeb",
    skills: ["English", "Communication"],
  },
  {
    category: "Programming & Coding",
    logo: "https://cdn.worldvectorlogo.com/logos/sololearn-1.svg",
    title: "JavaScript Course",
    issuer: "Sololearn",
    date: "Issued May 2022",
    credentialId: "CC-WXYQA2GW",
    credentialUrl: "https://www.sololearn.com/certificates/CC-WXYQA2GW",
    skills: ["JavaScript", "Web Development", "Programming"],
  },
  {
    category: "Programming & Coding",
    logo: "https://cdn.worldvectorlogo.com/logos/sololearn-1.svg",
    title: "Python 3 Course",
    issuer: "Sololearn",
    date: "Issued Apr 2022",
    credentialId: "CT-COSYKNOP",
    credentialUrl: "https://www.sololearn.com/certificates/CT-COSYKNOP",
    skills: ["Python (Programming Language)", "Programming"],
  },
  {
    category: "Programming & Coding",
    logo: "https://cdn.worldvectorlogo.com/logos/sololearn-1.svg",
    title: "C++ Course",
    issuer: "Sololearn",
    date: "Issued Jun 2022",
    credentialId: "CC-CPP12345",
    credentialUrl: "https://www.sololearn.com/certificates/CC-CPP12345",
    skills: ["C++", "Programming"],
  },
  {
    category: "Programming & Coding",
    logo: "https://cdn.worldvectorlogo.com/logos/sololearn-1.svg",
    title: "Java Course",
    issuer: "Sololearn",
    date: "Issued Jul 2022",
    credentialId: "CC-JAVA12345",
    credentialUrl: "https://www.sololearn.com/certificates/CC-JAVA12345",
    skills: ["Java", "Programming"],
  },
  {
    category: "Programming & Coding",
    logo: "https://cdn.worldvectorlogo.com/logos/sololearn-1.svg",
    title: "SQL Course",
    issuer: "Sololearn",
    date: "Issued Aug 2022",
    credentialId: "CC-SQL12345",
    credentialUrl: "https://www.sololearn.com/certificates/CC-SQL12345",
    skills: ["SQL", "Database", "Programming"],
  },
  {
    category: "Programming & Coding",
    logo: "https://cdn.worldvectorlogo.com/logos/sololearn-1.svg",
    title: "HTML Course",
    issuer: "Sololearn",
    date: "Issued Sep 2022",
    credentialId: "CC-HTML12345",
    credentialUrl: "https://www.sololearn.com/certificates/CC-HTML12345",
    skills: ["HTML", "Web Development"],
  },
  {
    category: "Programming & Coding",
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
    category: "Data & AI",
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
    category: "Data & AI",
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
    category: "Data & AI",
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
    category: "Cloud & DevOps",
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
    category: "Cloud & DevOps",
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
    category: "Programming & Coding",
    logo: sololearnLogo,
    title: "JavaScript Course",
    issuer: "Sololearn",
    date: "Issued May 2022",
    credentialId: "CC-WXYQA2GW",
    credentialUrl: "https://www.sololearn.com/certificates/CC-WXYQA2GW",
    skills: ["JavaScript", "Web Development", "Programming"],
  },
  {
    category: "Programming & Coding",
    logo: sololearnLogo,
    title: "Python 3 Course",
    issuer: "Sololearn",
    date: "Issued Apr 2022",
    credentialId: "CT-COSYKNOP",
    credentialUrl: "https://www.sololearn.com/certificates/CT-COSYKNOP",
    skills: ["Python (Programming Language)", "Programming"],
  },
  {
    category: "Programming & Coding",
    logo: sololearnLogo,
    title: "C++ Course",
    issuer: "Sololearn",
    date: "Issued Jun 2022",
    credentialId: "CC-CPP12345",
    credentialUrl: "https://www.sololearn.com/certificates/CC-CPP12345",
    skills: ["C++", "Programming"],
  },
  {
    category: "Programming & Coding",
    logo: sololearnLogo,
    title: "Java Course",
    issuer: "Sololearn",
    date: "Issued Jul 2022",
    credentialId: "CC-JAVA12345",
    credentialUrl: "https://www.sololearn.com/certificates/CC-JAVA12345",
    skills: ["Java", "Programming"],
  },
  {
    category: "Programming & Coding",
    logo: sololearnLogo,
    title: "SQL Course",
    issuer: "Sololearn",
    date: "Issued Aug 2022",
    credentialId: "CC-SQL12345",
    credentialUrl: "https://www.sololearn.com/certificates/CC-SQL12345",
    skills: ["SQL", "Database", "Programming"],
  },
  {
    category: "Programming & Coding",
    logo: sololearnLogo,
    title: "HTML Course",
    issuer: "Sololearn",
    date: "Issued Sep 2022",
    credentialId: "CC-HTML12345",
    credentialUrl: "https://www.sololearn.com/certificates/CC-HTML12345",
    skills: ["HTML", "Web Development"],
  },
  {
    category: "Programming & Coding",
    logo: sololearnLogo,
    title: "CSS Course",
    issuer: "Sololearn",
    date: "Issued Oct 2022",
    credentialId: "CC-CSS12345",
    credentialUrl: "https://www.sololearn.com/certificates/CC-CSS12345",
    skills: ["CSS", "Web Development"],
  },
  {
    category: "Programming & Coding",
    logo: sololearnLogo,
    title: "JavaScript Intermediate Course",
    issuer: "Sololearn",
    date: "Issued Nov 2022",
    credentialId: "CC-OML7YQCI",
    credentialUrl: "https://www.sololearn.com/certificates/CC-OML7YQCI",
    skills: ["JavaScript", "Programming", "Problem Solving"],
  },
  {
    category: "Programming & Coding",
    logo: sololearnLogo,
    title: "Responsive Web Design",
    issuer: "Sololearn",
    date: "Issued Nov 2022",
    credentialId: "CT-0VOTLEEM",
    credentialUrl: "https://www.sololearn.com/certificates/CT-0VOTLEEM",
    skills: ["CSS", "Responsive Design", "HTML5"],
  },
  {
    category: "Programming & Coding",
    logo: sololearnLogo,
    title: "Bootstrap 4",
    issuer: "Sololearn",
    date: "Issued Nov 2022",
    credentialId: "CT-LSFLEFMI",
    credentialUrl: "https://www.sololearn.com/certificates/CT-LSFLEFMI",
    skills: ["Bootstrap", "Front-end", "CSS"],
  },
  {
    category: "Programming & Coding",
    logo: sololearnLogo,
    title: "jQuery",
    issuer: "Sololearn",
    date: "Issued Nov 2022",
    credentialId: "CT-NCW8BSUG",
    credentialUrl: "https://www.sololearn.com/certificates/CT-NCW8BSUG",
    skills: ["jQuery", "JavaScript", "DOM"],
  },
  {
    category: "Programming & Coding",
    logo: sololearnLogo,
    title: "PHP",
    issuer: "Sololearn",
    date: "Issued Nov 2022",
    credentialId: "CT-WV5R9K2F",
    credentialUrl: "https://www.sololearn.com/certificates/CT-WV5R9K2F",
    skills: ["PHP", "Back-end", "Web Development"],
  },
  {
    category: "Programming & Coding",
    logo: sololearnLogo,
    title: "SQL Intermediate Course",
    issuer: "Sololearn",
    date: "Issued Nov 2022",
    credentialId: "CT-W1DGCWMW",
    credentialUrl: "https://www.sololearn.com/certificates/CT-W1DGCWMW",
    skills: ["SQL", "Databases", "Data Analysis"],
  },
  {
    category: "Programming & Coding",
    logo: sololearnLogo,
    title: "Python Intermediate Course",
    issuer: "Sololearn",
    date: "Issued Nov 2022",
    credentialId: "CT-V6W5XVDF",
    credentialUrl: "https://www.sololearn.com/certificates/CT-V6W5XVDF",
    skills: ["Python", "Algorithms", "Problem Solving"],
  },
  {
    category: "Data & AI",
    logo: "https://cdn.worldvectorlogo.com/logos/kaggle-icon.svg",
    title: "Kaggle 30-Day Machine Learning Badge",
    issuer: "Kaggle",
    date: "Issued 2024",
    credentialId: "Badge-30",
    credentialUrl: "https://www.kaggle.com/certification/badges/adityajanjanam/30",
    skills: ["Machine Learning", "Python", "Data Science"],
  },
  // --- Great Learning Certifications ---
  {
    category: "Data & AI",
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
    category: "Data & AI",
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
    category: "Data & AI",
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
    category: "Cloud & DevOps",
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
    category: "Cloud & DevOps",
    logo: greatlearningLogo,
    title: "Introduction to DevOps",
    issuer: "Great Learning",
    date: "Issued Jul 2023",
    credentialId: "GLDEVOPS-2023-12345",
    credentialUrl:
      "https://www.mygreatlearning.com/academy/learn-for-free/courses/devops-fundamentals",
    skills: ["DevOps", "CI/CD", "Cloud Computing"],
  },
  {
    category: "Professional Development",
    logo: greatlearningLogo,
    title: "How to make a LinkedIn Profile?",
    issuer: "Great Learning",
    date: "Issued Oct 2022",
    credentialId: "HKIKYSEY",
    credentialUrl: "https://www.mygreatlearning.com/certificate/HKIKYSEY",
    skills: ["Personal Branding", "Career Development", "LinkedIn"],
  },
  // --- Internships & Training Certifications ---
  {
    category: "Internships & Training",
    logo: "/assets/certifications/linkedin-cert-01.jpg",
    title: "Embedded Systems Project - Automatic Farmland Monitoring System",
    issuer: "CodeBind Technologies",
    date: "Issued Jun 2018",
    credentialId: "CBTtINE142005180604",
    credentialUrl: "",
    skills: ["Embedded Systems", "Arduino IDE", "PIR Sensor", "Vibration Sensor", "IoT"],
  },
  {
    category: "Internships & Training",
    logo: "/assets/certifications/linkedin-cert-02.jpg",
    title: "In-Plant Training",
    issuer: "Bharat Electronics Limited (BEL)",
    date: "Issued Mar 2019",
    credentialId: "BEL-2019-03",
    credentialUrl: "",
    skills: ["Testing", "Quality Management", "Development & Engineering", "Electronics"],
  },
  {
    category: "Internships & Training",
    logo: "/assets/certifications/linkedin-cert-03.jpg",
    title: "Embedded Systems Internship",
    issuer: "CodeBind Technologies",
    date: "Issued Jun 2018",
    credentialId: "CBTtINE142005180604",
    credentialUrl: "",
    skills: ["Embedded Systems", "Electronics", "Hardware Programming"],
  },
  {
    category: "Internships & Training",
    logo: "/assets/certifications/linkedin-cert-04.jpg",
    title: "Corporate Training Test - Placement Aptitude",
    issuer: "CodeBind Technologies",
    date: "Issued Jun 2018",
    credentialId: "C8TAE142005180604",
    credentialUrl: "",
    skills: ["Aptitude", "Problem Solving", "Logical Reasoning"],
  },
  {
    category: "Workshops & Seminars",
    logo: "/assets/certifications/linkedin-cert-05.jpg",
    title: "One Day Workshop on Android",
    issuer: "CodeBind Technologies",
    date: "Issued Jun 2018",
    credentialId: "CBTNE142005180604",
    credentialUrl: "",
    skills: ["Android Development", "Mobile Development", "Java"],
  },
  {
    category: "Internships & Training",
    logo: "/assets/certifications/linkedin-cert-06.jpg",
    title: "In-Plant Training",
    issuer: "Bharat Electronics Limited (BEL)",
    date: "Issued Mar 2019",
    credentialId: "BEL-IPT-2019",
    credentialUrl: "",
    skills: ["Electronics", "Testing", "Quality Management", "Engineering"],
  },
  {
    category: "Programming & Coding",
    logo: "/assets/certifications/linkedin-cert-07.jpg",
    title: "Project: Employee Details Record System",
    issuer: "Apollo Computer Education Ltd",
    date: "Issued Oct 2018",
    credentialId: "APOLLO-2018-10",
    credentialUrl: "",
    skills: ["C Programming", "Data Structures", "Software Development"],
  },
  {
    category: "Internships & Training",
    logo: "/assets/certifications/linkedin-cert-08.jpg",
    title: "In-Plant Training - CNS",
    issuer: "Airports Authority of India (AAI)",
    date: "Issued Jan 2019",
    credentialId: "AAI-CNS-2019",
    credentialUrl: "",
    skills: ["Communication Navigation Surveillance", "Air Traffic Services", "Electronics"],
  },
  {
    category: "Internships & Training",
    logo: "/assets/certifications/linkedin-cert-09.jpg",
    title: "Vocational In-Plant Training",
    issuer: "Chennai Port Trust",
    date: "Issued Dec 2018",
    credentialId: "1502",
    credentialUrl: "",
    skills: ["Electronic Data Processing", "Electrical Engineering", "Mechanical Engineering"],
  },
  {
    category: "Professional Development",
    logo: "/assets/certifications/linkedin-cert-10.jpg",
    title: "Software Engineer Experience Letter",
    issuer: "Capgemini",
    date: "Issued Sep 2020 - Dec 2020",
    credentialId: "46042143",
    credentialUrl: "",
    skills: ["Software Engineering", "Development", "Professional Experience"],
  },
  {
    category: "Programming & Coding",
    logo: "/assets/certifications/linkedin-cert-11.jpg",
    title: "Programming in C, C++",
    issuer: "Apollo Computer Education Ltd",
    date: "Issued Dec 2018",
    credentialId: "APOLLO-CPP-2018",
    credentialUrl: "",
    skills: ["C Programming", "C++ Programming", "Object-Oriented Programming"],
  },
  {
    category: "Workshops & Seminars",
    logo: "/assets/certifications/linkedin-cert-12.jpg",
    title: "MATLAB Programming for Image Processing Workshop",
    issuer: "Sathyabama Institute",
    date: "Issued Feb 2019",
    credentialId: "SIST-MATLAB-2019",
    credentialUrl: "",
    skills: ["MATLAB", "Image Processing", "Signal Processing"],
  },
  {
    category: "Workshops & Seminars",
    logo: "/assets/certifications/linkedin-cert-13.jpg",
    title: "Technical Events Participation Certificate",
    issuer: "Sathyabama Institute - ECE Department",
    date: "Issued Feb 2019",
    credentialId: "SIST-EVENTS-2019",
    credentialUrl: "",
    skills: ["Quiz", "Debate", "Code in Dark", "VFX", "Deep Learning"],
  },
  {
    category: "Workshops & Seminars",
    logo: "/assets/certifications/linkedin-cert-14.jpg",
    title: "SharePoint and MS Office 365 Workshop",
    issuer: "Sathyabama University",
    date: "Issued Sep 2017",
    credentialId: "SIST-SP365-2017",
    credentialUrl: "",
    skills: ["SharePoint", "Microsoft Office 365", "Cloud Collaboration"],
  },
  {
    category: "Workshops & Seminars",
    logo: "/assets/certifications/linkedin-cert-15.jpg",
    title: "One Day Workshop on Internet of Things (IoT)",
    issuer: "Global Techno Solutions",
    date: "Issued Sep 2018",
    credentialId: "GTS-IOT-2018",
    credentialUrl: "",
    skills: ["IoT", "Embedded Systems", "Sensor Networks"],
  },
  {
    category: "Programming & Coding",
    logo: "/assets/certifications/linkedin-cert-16.jpg",
    title: "Problem Solving Through Programming in C",
    issuer: "NPTEL",
    date: "Issued Apr 2019",
    credentialId: "NPTEL19CS06S41221829",
    credentialUrl: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL19CS06S41221829",
    skills: ["C Programming", "Problem Solving", "Algorithms", "Data Structures"],
  },
  {
    category: "Workshops & Seminars",
    logo: "/assets/certifications/linkedin-cert-17.jpg",
    title: "Technical Events Participation - ECE",
    issuer: "Sathyabama Institute",
    date: "Issued Feb 2019",
    credentialId: "SIST-ECE-2019",
    credentialUrl: "",
    skills: ["Technical Events", "Engineering Competitions", "ECE"],
  },
];

const MONTH_INDEX = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

const extractYear = (dateString) => {
  if (!dateString) {
    return null;
  }
  const matches = dateString.match(/(19|20)\d{2}/g);
  if (!matches || matches.length === 0) {
    return null;
  }
  return parseInt(matches[matches.length - 1], 10);
};

const getDateWeight = (dateString) => {
  const year = extractYear(dateString);
  if (!year) {
    return 0;
  }

  const monthMatch = dateString?.match(/Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec/i);
  const monthKey = monthMatch ? monthMatch[0].slice(0, 3).toLowerCase() : null;
  const monthIndex = monthKey !== null && monthKey in MONTH_INDEX ? MONTH_INDEX[monthKey] : 0;

  return year * 100 + monthIndex;
};

const Certifications = ({ isDarkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const categories = React.useMemo(() => {
    const unique = new Set();
    certifications.forEach((cert) => {
      if (cert.category) {
        unique.add(cert.category);
      }
    });
    return ["All", ...Array.from(unique).sort()];
  }, []);

  const stats = React.useMemo(() => {
    const total = certifications.length;
    const issuers = new Set(certifications.map((cert) => cert.issuer)).size;
    const active = certifications.filter(
      (cert) => !cert.date?.toLowerCase().includes("expired"),
    ).length;
    const latestYear = certifications.reduce((latest, cert) => {
      const year = extractYear(cert.date);
      if (!year) {
        return latest;
      }
      return Math.max(latest, year);
    }, 0);

    return {
      total,
      issuers,
      active,
      latestYear: latestYear || null,
    };
  }, []);

  const sortedCertifications = React.useMemo(() => {
    let sorted = [...certifications];
    
    switch (sortBy) {
      case "newest":
        sorted.sort((a, b) => getDateWeight(b.date) - getDateWeight(a.date));
        break;
      case "oldest":
        sorted.sort((a, b) => getDateWeight(a.date) - getDateWeight(b.date));
        break;
      case "title-asc":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "issuer":
        sorted.sort((a, b) => a.issuer.localeCompare(b.issuer));
        break;
      case "category":
        sorted.sort((a, b) => (a.category || "").localeCompare(b.category || ""));
        break;
      default:
        sorted.sort((a, b) => getDateWeight(b.date) - getDateWeight(a.date));
    }
    
    return sorted;
  }, [sortBy]);

  const filteredCertifications = React.useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    return sortedCertifications.filter((cert) => {
      const matchesCategory =
        selectedCategory === "All" || cert.category === selectedCategory;
      if (!matchesCategory) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      const haystack = [
        cert.title,
        cert.issuer,
        cert.category,
        (cert.skills || []).join(" "),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [searchQuery, selectedCategory, sortedCertifications]);

  const groupByYear = sortBy === "newest" || sortBy === "oldest";

  const groupedByYear = React.useMemo(() => {
    if (!groupByYear) return null;
    return filteredCertifications.reduce((acc, cert) => {
      const year = extractYear(cert.date) || "Other";
      if (!acc.has(year)) {
        acc.set(year, []);
      }
      acc.get(year).push(cert);
      return acc;
    }, new Map());
  }, [filteredCertifications, groupByYear]);

  const orderedYearEntries = React.useMemo(() => {
    if (!groupByYear || !groupedByYear) return [];
    return Array.from(groupedByYear.entries()).sort((a, b) => {
      const aYear = typeof a[0] === "number" ? a[0] : -Infinity;
      const bYear = typeof b[0] === "number" ? b[0] : -Infinity;
      // If sortBy is "oldest", show oldest years first (ascending)
      // If sortBy is "newest", show newest years first (descending)
      return sortBy === "oldest" ? aYear - bYear : bYear - aYear;
    });
  }, [groupByYear, groupedByYear, sortBy]);

  const emptyState = filteredCertifications.length === 0;

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
          className={`text-4xl md:text-5xl font-bold ${
            isDarkMode ? "text-cyan-400" : "text-blue-600"
          } mb-3`}
        >
          Licenses & Certifications
        </h2>
        <p
          className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-700"} text-center mb-8`}
        >
          My professional certifications and licenses
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        <motion.div 
          whileHover={{ scale: 1.05, y: -5 }}
          className={`p-6 rounded-2xl backdrop-blur-md shadow-2xl ${
            isDarkMode 
              ? "bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-purple-600/30 border border-blue-500/30" 
              : "bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 border-2 border-blue-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? "text-blue-300" : "text-blue-700"}`}>
                Total Certifications
              </p>
              <p className={`text-4xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent`}>
                {stats.total}
              </p>
            </div>
            <svg className={`w-12 h-12 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05, y: -5 }}
          className={`p-6 rounded-2xl backdrop-blur-md shadow-2xl ${
            isDarkMode 
              ? "bg-gradient-to-br from-emerald-600/30 via-teal-600/20 to-cyan-600/30 border border-emerald-500/30" 
              : "bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 border-2 border-emerald-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? "text-emerald-300" : "text-emerald-700"}`}>
                Active Credentials
              </p>
              <p className={`text-4xl font-bold bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent`}>
                {stats.active}
              </p>
            </div>
            <svg className={`w-12 h-12 ${isDarkMode ? "text-emerald-400" : "text-emerald-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05, y: -5 }}
          className={`p-6 rounded-2xl backdrop-blur-md shadow-2xl ${
            isDarkMode 
              ? "bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-rose-600/30 border border-purple-500/30" 
              : "bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100 border-2 border-purple-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? "text-purple-300" : "text-purple-700"}`}>
                Issuing Organizations
              </p>
              <p className={`text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent`}>
                {stats.issuers}
              </p>
            </div>
            <svg className={`w-12 h-12 ${isDarkMode ? "text-purple-400" : "text-purple-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05, y: -5 }}
          className={`p-6 rounded-2xl backdrop-blur-md shadow-2xl ${
            isDarkMode 
              ? "bg-gradient-to-br from-amber-600/30 via-orange-600/20 to-red-600/30 border border-amber-500/30" 
              : "bg-gradient-to-br from-amber-100 via-orange-50 to-red-100 border-2 border-amber-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? "text-amber-300" : "text-amber-700"}`}>
                Most Recent Year
              </p>
              <p className={`text-4xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent`}>
                {stats.latestYear || "—"}
              </p>
            </div>
            <svg className={`w-12 h-12 ${isDarkMode ? "text-amber-400" : "text-amber-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8 space-y-4"
      >
        {/* Search Bar */}
        <div className="relative">
          <svg className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
            isDarkMode ? "text-gray-500" : "text-gray-400"
          }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search certifications by title, issuer, category, or skill..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 transition-colors ${
              isDarkMode
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500"
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500"
            } outline-none`}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 flex-1 min-w-[200px]">
            <svg className={`w-5 h-5 ${isDarkMode ? "text-cyan-400" : "text-blue-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={`flex-1 px-4 py-2 rounded-lg border-2 transition-colors ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 text-white focus:border-cyan-500"
                  : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
              } outline-none`}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 flex-1 min-w-[200px]">
            <svg className={`w-5 h-5 ${isDarkMode ? "text-cyan-400" : "text-blue-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`flex-1 px-4 py-2 rounded-lg border-2 transition-colors ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 text-white focus:border-cyan-500"
                  : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
              } outline-none`}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="title-asc">A to Z (Title)</option>
              <option value="title-desc">Z to A (Title)</option>
              <option value="issuer">By Issuer</option>
              <option value="category">By Category</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          Showing {filteredCertifications.length} of {certifications.length} certifications
        </p>
      </motion.div>

      {emptyState ? (
        <div
          className={`rounded-2xl border p-10 text-center ${isDarkMode ? "border-dark-primary-800 bg-gradient-to-br from-gray-900 to-black" : "border-light-primary-200 bg-gradient-to-br from-white to-gray-50"}`}
        >
          <p className="text-lg font-semibold mb-2">No certifications found</p>
          <p className="text-sm text-gray-500">
            Try selecting a different category or updating the search query.
          </p>
        </div>
      ) : (
        groupByYear ? (
          <div className="space-y-12">
            {orderedYearEntries.map(([year, entries]) => (
              <div key={typeof year === "number" ? year : "other"}>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`h-10 w-10 flex items-center justify-center rounded-full border font-semibold ${isDarkMode ? "bg-gray-900 border-gray-700 text-yellow-300" : "bg-light-primary-50 border-light-primary-200 text-light-primary-600"}`}
                  >
                    {typeof year === "number" ? year : "—"}
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-yellow-400/60 via-transparent to-transparent" />
                  <span className="text-xs uppercase tracking-wide text-gray-500">
                    {entries.length} {entries.length === 1 ? "certification" : "certifications"}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                  {entries.map((cert, idx) => {
                    const isExpired = cert.date?.toLowerCase().includes("expired");
                    return (
                      <motion.div
                        key={`${cert.credentialId || cert.title}-${idx}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className={`rounded-2xl border shadow-2xl overflow-hidden flex flex-col backdrop-blur-md hover:shadow-blue-500/30 transition-all duration-300 p-6 space-y-4 ${
                          isDarkMode
                            ? "bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 border-2 border-blue-500/30 hover:border-blue-400/50"
                            : "bg-gradient-to-br from-white/90 via-blue-50/60 to-white/90 border-2 border-blue-300/40 hover:border-blue-400/60"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <img
                              src={cert.logo}
                              alt={cert.issuer}
                              className="w-12 h-12 rounded-full bg-white object-contain border"
                              loading="lazy"
                              onError={(event) => {
                                event.currentTarget.onerror = null;
                                event.currentTarget.src = defaultCertificationLogo;
                              }}
                            />
                          <div>
                              <p className="text-xs uppercase tracking-wide text-gray-500">
                                {cert.category || "General"}
                              </p>
                              <h3
                                className={`text-lg font-bold leading-snug ${isDarkMode ? "text-yellow-300" : "text-light-primary-700"}`}
                              >
                                {cert.title}
                              </h3>
                              <p className="text-sm text-gray-500">{cert.issuer}</p>
                            </div>
                          </div>
                          {isExpired && (
                            <span className="px-2 py-1 text-[10px] uppercase tracking-wide rounded-full bg-red-100 text-red-600 border border-red-200">
                              Expired
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col gap-1 text-xs text-gray-400">
                          <span>{cert.date}</span>
                          {cert.credentialId && <span>Credential ID: {cert.credentialId}</span>}
                          {cert.credentialUrl && (
                            <a
                              href={cert.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`${isDarkMode ? "text-yellow-300" : "text-light-primary-600"} hover:underline inline-flex items-center gap-1`}
                            >
                              Show credential
                              <svg
                                className="h-3 w-3"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M13 5l7 7-7 7M5 12h14"
                                />
                              </svg>
                            </a>
                          )}
                        </div>
                        {cert.skills && cert.skills.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {cert.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className={`${isDarkMode ? "bg-gray-800 border-gray-700 text-gray-200" : "bg-light-primary-50 border-light-primary-200 text-light-primary-700"} px-2.5 py-1 text-xs rounded-full border`}
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {filteredCertifications.map((cert, idx) => {
              const isExpired = cert.date?.toLowerCase().includes("expired");
              return (
                <motion.div
                  key={`${cert.credentialId || cert.title}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`rounded-2xl border shadow-2xl overflow-hidden flex flex-col backdrop-blur-md hover:shadow-blue-500/30 transition-all duration-300 p-6 space-y-4 ${
                    isDarkMode
                      ? "bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 border-2 border-blue-500/30 hover:border-blue-400/50"
                      : "bg-gradient-to-br from-white/90 via-blue-50/60 to-white/90 border-2 border-blue-300/40 hover:border-blue-400/60"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={cert.logo}
                        alt={cert.issuer}
                        className="w-12 h-12 rounded-full bg-white object-contain border"
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.onerror = null;
                          event.currentTarget.src = defaultCertificationLogo;
                        }}
                      />
                    <div>
                        <p className="text-xs uppercase tracking-wide text-gray-500">
                          {cert.category || "General"}
                        </p>
                        <h3
                          className={`text-lg font-bold leading-snug ${isDarkMode ? "text-yellow-300" : "text-light-primary-700"}`}
                        >
                          {cert.title}
                        </h3>
                        <p className="text-sm text-gray-500">{cert.issuer}</p>
                      </div>
                    </div>
                    {isExpired && (
                      <span className="px-2 py-1 text-[10px] uppercase tracking-wide rounded-full bg-red-100 text-red-600 border border-red-200">
                        Expired
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-1 text-xs text-gray-400">
                    <span>{cert.date}</span>
                    {cert.credentialId && <span>Credential ID: {cert.credentialId}</span>}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${isDarkMode ? "text-yellow-300" : "text-light-primary-600"} hover:underline inline-flex items-center gap-1`}
                      >
                        Show credential
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13 5l7 7-7 7M5 12h14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                  {cert.skills && cert.skills.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`${isDarkMode ? "bg-gray-800 border-gray-700 text-gray-200" : "bg-light-primary-50 border-light-primary-200 text-light-primary-700"} px-2.5 py-1 text-xs rounded-full border`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )
      )}
    </div>
  );
};

const HonorsAndAwards = ({ isDarkMode }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedYear, setSelectedYear] = React.useState("all");

  // Calculate statistics
  const stats = React.useMemo(() => {
    const totalAwards = honorsAndAwards.length;
    const years = [...new Set(honorsAndAwards.map((a) => a.date.split(" ")[1]))];
    const categories = [...new Set(honorsAndAwards.map((a) => a.issuer))];
    const totalSkills = [...new Set(honorsAndAwards.flatMap((a) => a.skills || []))].length;

    return {
      totalAwards,
      years: years.length,
      categories: categories.length,
      totalSkills,
    };
  }, []);

  // Get unique years for filter
  const years = React.useMemo(() => {
    return [...new Set(honorsAndAwards.map((a) => a.date.split(" ")[1]))].sort((a, b) => b - a);
  }, []);

  // Filter awards
  const filteredAwards = React.useMemo(() => {
    return honorsAndAwards.filter((award) => {
      // Year filter
      if (selectedYear !== "all" && !award.date.includes(selectedYear)) {
        return false;
      }

      // Search filter
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        return (
          award.title.toLowerCase().includes(searchLower) ||
          award.issuer.toLowerCase().includes(searchLower) ||
          award.description.toLowerCase().includes(searchLower) ||
          (award.skills && award.skills.some((s) => s.toLowerCase().includes(searchLower)))
        );
      }

      return true;
    });
  }, [searchQuery, selectedYear]);

  return (
    <div
      className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 ${
        isDarkMode ? "bg-[#080808] text-gray-200" : "bg-white text-gray-900"
      }`}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-center"
      >
        <h2
          className={`text-4xl md:text-5xl font-bold ${
            isDarkMode ? "text-cyan-400" : "text-blue-600"
          } mb-3`}
        >
          Honors & Awards
        </h2>
        <p
          className={`text-lg ${
            isDarkMode ? "text-gray-400" : "text-gray-700"
          } max-w-2xl mx-auto`}
        >
          Recognition for my achievements and contributions
        </p>
      </motion.div>

      {/* Statistics Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
      >
        <motion.div 
          whileHover={{ scale: 1.05, y: -5 }}
          className={`p-6 rounded-2xl backdrop-blur-md shadow-2xl ${
            isDarkMode 
              ? "bg-gradient-to-br from-amber-600/30 via-orange-600/20 to-red-600/30 border border-amber-500/30" 
              : "bg-gradient-to-br from-amber-100 via-orange-50 to-red-100 border-2 border-amber-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? "text-amber-300" : "text-amber-700"}`}>
                Total Awards
              </p>
              <p className={`text-4xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent`}>
                {stats.totalAwards}
              </p>
            </div>
            <svg className={`w-12 h-12 ${isDarkMode ? "text-amber-400" : "text-amber-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05, y: -5 }}
          className={`p-6 rounded-2xl backdrop-blur-md shadow-2xl ${
            isDarkMode 
              ? "bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-purple-600/30 border border-blue-500/30" 
              : "bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 border-2 border-blue-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? "text-blue-300" : "text-blue-700"}`}>
                Years Active
              </p>
              <p className={`text-4xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent`}>
                {stats.years}
              </p>
            </div>
            <svg className={`w-12 h-12 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05, y: -5 }}
          className={`p-6 rounded-2xl backdrop-blur-md shadow-2xl ${
            isDarkMode 
              ? "bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-rose-600/30 border border-purple-500/30" 
              : "bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100 border-2 border-purple-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? "text-purple-300" : "text-purple-700"}`}>
                Organizations
              </p>
              <p className={`text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent`}>
                {stats.categories}
              </p>
            </div>
            <svg className={`w-12 h-12 ${isDarkMode ? "text-purple-400" : "text-purple-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05, y: -5 }}
          className={`p-6 rounded-2xl backdrop-blur-md shadow-2xl ${
            isDarkMode 
              ? "bg-gradient-to-br from-emerald-600/30 via-teal-600/20 to-cyan-600/30 border border-emerald-500/30" 
              : "bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 border-2 border-emerald-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? "text-emerald-300" : "text-emerald-700"}`}>
                Skills Recognized
              </p>
              <p className={`text-4xl font-bold bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent`}>
                {stats.totalSkills}
              </p>
            </div>
            <svg className={`w-12 h-12 ${isDarkMode ? "text-emerald-400" : "text-emerald-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8 space-y-4"
      >
        {/* Search Bar */}
        <div className="relative">
          <svg className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
            isDarkMode ? "text-gray-500" : "text-gray-400"
          }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search awards by title, organization, or skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 transition-colors ${
              isDarkMode
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500"
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500"
            } outline-none`}
          />
        </div>

        {/* Year Filters */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedYear("all")}
            className={`px-4 py-2 rounded-lg border-2 transition-colors ${
              selectedYear === "all"
                ? isDarkMode
                  ? "bg-cyan-500 text-white border-cyan-400"
                  : "bg-blue-600 text-white border-blue-500"
                : isDarkMode
                ? "bg-gray-800 border-gray-700 text-gray-300 hover:border-cyan-500"
                : "bg-white border-gray-300 text-gray-900 hover:border-blue-500"
            } outline-none`}
          >
            All Years
          </button>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                selectedYear === year
                  ? isDarkMode
                    ? "bg-cyan-500 text-white border-cyan-400"
                    : "bg-blue-600 text-white border-blue-500"
                  : isDarkMode
                  ? "bg-gray-800 border-gray-700 text-gray-300 hover:border-cyan-500"
                  : "bg-white border-gray-300 text-gray-900 hover:border-blue-500"
              } outline-none`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          Showing {filteredAwards.length} of {honorsAndAwards.length} awards
        </p>
      </motion.div>

      {/* Awards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {filteredAwards.map((award, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10, scale: 1.03 }}
            className={`rounded-2xl border shadow-2xl overflow-hidden flex flex-col backdrop-blur-md hover:shadow-yellow-500/30 transition-all duration-300 ${
              isDarkMode
                ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-yellow-500/30 hover:border-yellow-400/50"
                : "bg-gradient-to-br from-white via-orange-50 to-yellow-50 border-2 border-orange-300 hover:border-orange-400"
            }`}
          >
            {/* Award Image */}
            <div className="relative w-full overflow-hidden" style={{ maxHeight: 320 }}>
              <img
                src={award.image}
                alt={award.title}
                className="w-full h-auto object-contain transition-transform hover:scale-105"
              />
              <div className={`absolute top-4 right-4 px-5 py-2.5 rounded-full backdrop-blur-md shadow-xl ${
                isDarkMode
                  ? "bg-gradient-to-r from-yellow-600/40 via-amber-600/30 to-orange-600/40 border-2 border-yellow-400/50 text-yellow-200"
                  : "bg-gradient-to-r from-yellow-100 via-amber-50 to-orange-100 border-2 border-yellow-400 text-yellow-900"
              } font-bold text-sm`}>
                {award.date}
              </div>
            </div>

            {/* Award Content */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-4xl">{award.logo}</span>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    {award.title}
                  </h3>
                  <p className={`text-sm font-semibold ${isDarkMode ? "text-orange-400" : "text-orange-600"}`}>
                    {award.issuer}
                  </p>
                </div>
              </div>

              <p className={`text-sm leading-relaxed mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                {award.description}
              </p>

              {/* Skills Tags */}
              {award.skills && award.skills.length > 0 && (
                <div className="mt-auto">
                  <div className={`text-xs font-semibold mb-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Skills Recognized:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {award.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 + i * 0.05 }}
                        whileHover={{ scale: 1.15, y: -2 }}
                        className={`px-4 py-2 text-xs font-bold rounded-full transition-all shadow-lg ${
                          isDarkMode
                            ? "bg-gradient-to-r from-yellow-600 via-amber-600 to-orange-600 text-white border-2 border-yellow-400/60"
                            : "bg-gradient-to-r from-yellow-200 via-amber-100 to-orange-200 text-orange-900 border-2 border-orange-400"
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredAwards.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="text-6xl mb-4">🏆</div>
          <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            No awards found
          </h3>
          <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
            Try adjusting your search or filter criteria
          </p>
        </motion.div>
      )}
    </div>
  );
};

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
    organization: "Waterloo Central Railway",
    logo: wrmuseumLogo,
    role: "Volunteer – Safety Sensitive Role",
    date: "Aug 2025 - Present · 4 mos",
    area: "Transportation & Safety",
    description: "Support safety-sensitive operations ensuring compliance with railway safety protocols and regulations. Assist in maintaining a secure and efficient environment for both staff and passengers.",
    responsibilities: [
      "Completed required training including Safety and Passenger operations (certified as of August 2025)",
      "Collaborate with the WCR team to enhance operational readiness and customer experience",
      "Demonstrate strong commitment to teamwork, safety awareness, and reliability in a volunteer capacity",
      "Ensure compliance with railway safety protocols and regulations",
      "Maintain a secure and efficient environment for staff and passengers",
    ],
    skills: [
      "Railway Safety",
      "Passenger Operations",
      "Teamwork",
      "Safety Awareness",
      "Customer Experience",
    ],
  },
  {
    organization: "Uptown Waterloo Jazz Festival",
    logo: jazzFestivalLogo,
    role: "Event Support | Guest Services | Operations",
    date: "Jul 2025 · 1 mo",
    area: "Arts and Culture",
    description: "Represented the Uptown Waterloo Jazz Festival and City of Waterloo as an official volunteer across various roles including Main Entrance, Guest Support, and Volunteer Operations.",
    responsibilities: [
      "Assisted in greeting attendees, distributing programs and surveys, maintaining guest count, and creating a welcoming environment",
      "Ensured smooth check-in and communication for volunteers at the Volunteer Tent, supported shift coordination, and provided on-ground logistical assistance as a Floater",
      "Helped guests with festival navigation, answered questions, and promoted accessibility, safety, and enjoyment for all attendees",
      "Collaborated with the festival team to uphold policies, respond to lost-and-found or medical situations, and guide crowd safety during inclement weather",
    ],
    skills: [
      "Event Coordination",
      "Public Interaction",
      "Volunteer Management",
      "Communication",
      "Problem Solving",
      "Teamwork",
    ],
  },
  {
    organization: "Ken Seiling Waterloo Region Museum",
    logo: wrmuseumLogo,
    role: "Museum Volunteer",
    date: "Jun 2025 - Present · 6 mos",
    area: "Arts and Culture",
    description: "Engaged as a community volunteer supporting various public-facing and behind-the-scenes programs at the Region of Waterloo Museums.",
    responsibilities: [
      "Assisting in long-term care visitor programs such as Chapel Assistant, Meal Companion, and Recreation Programs",
      "Supporting visitor engagement through roles like Gift Shop Clerk and Friendly Visitor",
      "Promoting inclusive communication through multi-language awareness (including Hindi, Telugu, and basic Tamil)",
      "Representing the museum at clinic locations in Cambridge, Kitchener, and Waterloo",
      "Contributing to the social and cultural enrichment of local community members, particularly seniors and long-term care residents",
    ],
    skills: [
      "Community Engagement",
      "Empathy & Active Listening",
      "Multicultural Communication",
      "Volunteer Coordination",
      "Museum Visitor Support",
      "Elder Care Assistance",
    ],
  },
  {
    organization: "University of Waterloo",
    logo: uwaterlooLogo,
    role: "Volunteer | You @ Waterloo Day 2025",
    date: "May 2025 · 1 mo",
    area: "Education",
    description: "Proud to have represented the University of Waterloo as a volunteer ambassador during You @ Waterloo Day 2025, an event welcoming over 4,500 future students and their families to campus. Gained hands-on experience in event coordination, team communication, and front-facing hospitality during one of Waterloo's largest annual student events.",
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
];

const Volunteering = ({ isDarkMode }) => {
  const stats = React.useMemo(() => {
    const totalExperiences = volunteeringExperiences.length;
    const organizations = new Set(volunteeringExperiences.map(exp => exp.organization)).size;
    const areas = new Set(volunteeringExperiences.map(exp => exp.area)).size;
    const totalSkills = new Set(volunteeringExperiences.flatMap(exp => exp.skills)).size;

    return {
      totalExperiences,
      organizations,
      areas,
      totalSkills,
    };
  }, []);

  return (
    <div
      className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 ${isDarkMode ? "bg-[#080808] text-gray-200" : "bg-white text-gray-900"}`}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2
          className={`text-4xl md:text-5xl font-bold ${
            isDarkMode ? "text-cyan-400" : "text-blue-600"
          } mb-3`}
        >
          Volunteering
        </h2>
        <p
          className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-700"}`}
        >
          My community and campus volunteer experiences
        </p>
      </motion.div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
      >
        <motion.div 
          whileHover={{ scale: 1.05, y: -5 }}
          className={`p-6 rounded-2xl backdrop-blur-md shadow-2xl ${
            isDarkMode 
              ? "bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-purple-600/30 border border-blue-500/30" 
              : "bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 border-2 border-blue-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? "text-blue-300" : "text-blue-700"}`}>
                Total Experiences
              </p>
              <p className={`text-4xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent`}>
                {stats.totalExperiences}
              </p>
            </div>
            <svg className={`w-12 h-12 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05, y: -5 }}
          className={`p-6 rounded-2xl backdrop-blur-md shadow-2xl ${
            isDarkMode 
              ? "bg-gradient-to-br from-emerald-600/30 via-teal-600/20 to-cyan-600/30 border border-emerald-500/30" 
              : "bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 border-2 border-emerald-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? "text-emerald-300" : "text-emerald-700"}`}>
                Organizations
              </p>
              <p className={`text-4xl font-bold bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent`}>
                {stats.organizations}
              </p>
            </div>
            <svg className={`w-12 h-12 ${isDarkMode ? "text-emerald-400" : "text-emerald-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05, y: -5 }}
          className={`p-6 rounded-2xl backdrop-blur-md shadow-2xl ${
            isDarkMode 
              ? "bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-rose-600/30 border border-purple-500/30" 
              : "bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100 border-2 border-purple-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? "text-purple-300" : "text-purple-700"}`}>
                Focus Areas
              </p>
              <p className={`text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent`}>
                {stats.areas}
              </p>
            </div>
            <svg className={`w-12 h-12 ${isDarkMode ? "text-purple-400" : "text-purple-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05, y: -5 }}
          className={`p-6 rounded-2xl backdrop-blur-md shadow-2xl ${
            isDarkMode 
              ? "bg-gradient-to-br from-amber-600/30 via-orange-600/20 to-red-600/30 border border-amber-500/30" 
              : "bg-gradient-to-br from-amber-100 via-orange-50 to-red-100 border-2 border-amber-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? "text-amber-300" : "text-amber-700"}`}>
                Skills Developed
              </p>
              <p className={`text-4xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent`}>
                {stats.totalSkills}
              </p>
            </div>
            <svg className={`w-12 h-12 ${isDarkMode ? "text-amber-400" : "text-amber-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Results Count */}
      <p className={`text-sm mb-8 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
        Showing {volunteeringExperiences.length} volunteer {volunteeringExperiences.length === 1 ? 'experience' : 'experiences'}
      </p>

      {/* Volunteering Cards */}
      <div className="grid grid-cols-1 gap-8">
        {volunteeringExperiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className={`rounded-2xl border-2 shadow-2xl overflow-hidden backdrop-blur-md hover:shadow-blue-500/30 transition-all duration-300 ${
              isDarkMode
                ? "bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 border-blue-500/30 hover:border-blue-400/50"
                : "bg-gradient-to-br from-white/90 via-blue-50/60 to-white/90 border-blue-300/40 hover:border-blue-400/60"
            }`}
          >
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <img
                    src={exp.logo}
                    alt={exp.organization}
                    className="w-24 h-24 object-contain rounded-2xl border-2 bg-white p-2 shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  {/* Header */}
                  <div>
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        isDarkMode ? "text-cyan-300" : "text-blue-700"
                      }`}
                    >
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className={`text-base font-semibold ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}>
                        {exp.organization}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        isDarkMode 
                          ? "bg-purple-500/20 text-purple-300 border border-purple-400/30" 
                          : "bg-purple-100 text-purple-700 border border-purple-300"
                      }`}>
                        {exp.area}
                      </span>
                      <span className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                        {exp.date}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-base leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}>
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  {exp.responsibilities.length > 0 && (
                    <div>
                      <h4 className={`text-sm font-semibold mb-2 ${
                        isDarkMode ? "text-cyan-400" : "text-blue-600"
                      }`}>
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                              isDarkMode ? "text-cyan-400" : "text-blue-600"
                            }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className={`text-sm ${
                              isDarkMode ? "text-gray-300" : "text-gray-700"
                            }`}>
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Skills */}
                  <div>
                    <h4 className={`text-sm font-semibold mb-3 ${
                      isDarkMode ? "text-cyan-400" : "text-blue-600"
                    }`}>
                      Skills Developed:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1.5 text-sm rounded-full font-medium transition-colors ${
                            isDarkMode
                              ? "bg-gray-800 border-2 border-cyan-500/30 text-cyan-300 hover:border-cyan-400/50"
                              : "bg-blue-50 border-2 border-blue-300 text-blue-700 hover:border-blue-400"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

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

const Skills = ({ isDarkMode }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [showEndorsements, setShowEndorsements] = React.useState(true);

  // Calculate statistics
  const stats = React.useMemo(() => {
    const totalSkills = Object.values(skillsData).reduce(
      (sum, skills) => sum + skills.length,
      0
    );
    const categories = Object.keys(skillsData).length;
    const endorsedSkills = Object.values(skillsData)
      .flat()
      .filter((s) => s.endorsement).length;
    const totalEndorsements = Object.values(skillsData)
      .flat()
      .reduce((sum, s) => sum + (s.endorsement || 0), 0);

    return { totalSkills, categories, endorsedSkills, totalEndorsements };
  }, []);

  // Filter categories and skills
  const filteredData = React.useMemo(() => {
    return Object.entries(skillsData).reduce((acc, [category, skills]) => {
      // Category filter
      if (selectedCategory !== "all" && category !== selectedCategory) {
        return acc;
      }

      // Search filter
      const filteredSkills = searchQuery
        ? skills.filter((skill) =>
            skill.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : skills;

      if (filteredSkills.length > 0) {
        acc[category] = filteredSkills;
      }

      return acc;
    }, {});
  }, [searchQuery, selectedCategory]);

  const categories = Object.keys(skillsData);

  return (
    <div
      className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 ${
        isDarkMode ? "bg-[#080808] text-gray-200" : "bg-white text-gray-900"
      }`}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-center"
      >
        <h2
          className={`text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent`}
        >
          Skills
        </h2>
        <p
          className={`text-lg ${
            isDarkMode ? "text-gray-400" : "text-gray-700"
          } text-center mb-8`}
        >
          A comprehensive list of my technical, professional, and language skills, with endorsements and experience highlights.
        </p>
      </motion.div>

      {/* Statistics Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10"
      >
        {[
          { label: "Total Skills", value: stats.totalSkills, icon: "🎯", color: "from-blue-500 to-cyan-500" },
          { label: "Categories", value: stats.categories, icon: "📊", color: "from-purple-500 to-pink-500" },
          { label: "Endorsed Skills", value: stats.endorsedSkills, icon: "⭐", color: "from-amber-500 to-orange-500" },
          { label: "Total Endorsements", value: stats.totalEndorsements, icon: "👍", color: "from-green-500 to-emerald-500" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
            className={`rounded-2xl p-6 text-center backdrop-blur-md border border-white/10 shadow-xl ${
              isDarkMode
                ? "bg-gradient-to-br from-gray-900/80 to-gray-800/80"
                : "bg-gradient-to-br from-white/90 to-gray-50/90"
            }`}
          >
            <div className={`text-3xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent font-bold`}>
              {stat.icon}
            </div>
            <div className={`text-3xl font-bold mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              {stat.value}
            </div>
            <div className={`text-sm font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="🔍 Search skills... (e.g., React, PowerShell, Communication)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full px-6 py-4 rounded-xl text-lg font-medium border-2 transition-all ${
              isDarkMode
                ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500 focus:border-purple-500"
                : "bg-white/80 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-purple-500"
            } focus:outline-none focus:ring-2 focus:ring-purple-500/50`}
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-4">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-5 py-2.5 rounded-lg font-semibold transition-all transform hover:scale-105 ${
              selectedCategory === "all"
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                : isDarkMode
                ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                  : isDarkMode
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Toggle Endorsements */}
        <div className="flex items-center justify-end gap-3">
          <span className={`text-sm font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Show Endorsements
          </span>
          <button
            onClick={() => setShowEndorsements(!showEndorsements)}
            className={`relative w-14 h-7 rounded-full transition-colors ${
              showEndorsements ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-gray-400"
            }`}
            aria-label="Toggle endorsements display"
            title="Toggle endorsements display"
          >
            <span
              className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                showEndorsements ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </motion.div>

      {/* Skills Grid */}
      <div className="space-y-6">
        {Object.entries(filteredData).map(([category, skills], catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIndex * 0.05 }}
            className={`rounded-2xl p-6 shadow-xl backdrop-blur-md border border-white/10 hover:shadow-2xl transition-all ${
              isDarkMode
                ? "bg-gradient-to-br from-gray-900/80 via-gray-800/70 to-gray-900/90"
                : "bg-gradient-to-br from-white/80 via-blue-50/60 to-white/90"
            }`}
          >
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-gray-700/30">
              <h3
                className={`text-xl font-bold ${
                  isDarkMode ? "text-cyan-300" : "text-blue-700"
                }`}
              >
                {category}
              </h3>
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  isDarkMode
                    ? "bg-blue-500/20 text-blue-300 border border-blue-400/40"
                    : "bg-blue-100 text-blue-700 border border-blue-200"
                }`}
              >
                {skills.length} skill{skills.length !== 1 ? "s" : ""}
              </span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: catIndex * 0.05 + i * 0.02 }}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-1 px-3 py-2 text-sm rounded-full font-medium transition-all cursor-default ${
                    isDarkMode
                      ? skill.endorsement
                        ? "bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white border border-blue-400/50 shadow-lg"
                        : "bg-blue-900/40 text-blue-200 border border-blue-700/50"
                      : skill.endorsement
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white border border-blue-300 shadow-md"
                      : "bg-blue-100 text-blue-700 border border-blue-200"
                  }`}
                >
                  {skill.name}
                  {showEndorsements && skill.endorsement && (
                    <span className="ml-1 text-yellow-300 font-bold flex items-center gap-0.5">
                      ★{skill.endorsement}
                    </span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* No Results Message */}
      {Object.keys(filteredData).length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="text-6xl mb-4">🔍</div>
          <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            No skills found
          </h3>
          <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
            Try adjusting your search or filter criteria
          </p>
        </motion.div>
      )}
    </div>
  );
};

const Blog = ({ isDarkMode }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("All Categories");
  const [sortBy, setSortBy] = React.useState("newest");

  // Calculate statistics
  const stats = React.useMemo(() => {
    const totalArticles = blogResources.length;
    const categories = blogCategorySections.length;
    const totalLinks = uniqueNotionLinks.length;
    
    return {
      totalArticles,
      categories,
      totalLinks,
    };
  }, []);

  // Get all categories
  const categories = React.useMemo(() => {
    return ["All Categories", ...blogCategorySections.map(section => section.category)];
  }, []);

  // Filter and search blog resources
  const filteredResources = React.useMemo(() => {
    let filtered = blogResources.filter(resource => {
      const matchesSearch = searchQuery === "" || 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === "All Categories" || 
        resource.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });

    // Sort resources
    if (sortBy === "newest") {
      filtered = [...filtered].reverse();
    } else if (sortBy === "alpha") {
      filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  // Group filtered resources by category
  const filteredCategorySections = React.useMemo(() => {
    const grouped = new Map();
    filteredResources.forEach((resource) => {
      if (!grouped.has(resource.category)) {
        grouped.set(resource.category, []);
      }
      grouped.get(resource.category).push(resource);
    });
    return Array.from(grouped, ([category, links]) => ({ category, links }));
  }, [filteredResources]);

  return (
    <div
      className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 ${
        isDarkMode ? "bg-[#080808] text-gray-200" : "bg-white text-gray-900"
      }`}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10 text-center"
      >
        <h2
          className={`text-4xl md:text-5xl font-bold ${
            isDarkMode ? "text-cyan-400" : "text-blue-600"
          } mb-3`}
        >
          Blog & Knowledge Hub
        </h2>
        <p
          className={`text-lg ${
            isDarkMode ? "text-gray-400" : "text-gray-700"
          } max-w-2xl mx-auto`}
        >
          Curated Notion articles spanning project ideas, interview prep, roadmaps, and AI-first workflows.
        </p>
      </motion.div>

      {/* Statistics Dashboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
      >
        <motion.div 
          whileHover={{ scale: 1.05, y: -5 }}
          className={`p-6 rounded-2xl backdrop-blur-md shadow-2xl ${
            isDarkMode 
              ? "bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-violet-600/30 border border-blue-500/30" 
              : "bg-gradient-to-br from-blue-100 via-indigo-50 to-violet-100 border-2 border-blue-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? "text-blue-300" : "text-blue-700"}`}>
                Total Articles
              </p>
              <p className={`text-4xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent`}>
                {stats.totalArticles}
              </p>
            </div>
            <svg className={`w-12 h-12 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05, y: -5 }}
          className={`p-6 rounded-2xl backdrop-blur-md shadow-2xl ${
            isDarkMode 
              ? "bg-gradient-to-br from-purple-600/30 via-fuchsia-600/20 to-pink-600/30 border border-purple-500/30" 
              : "bg-gradient-to-br from-purple-100 via-fuchsia-50 to-pink-100 border-2 border-purple-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? "text-purple-300" : "text-purple-700"}`}>
                Categories
              </p>
              <p className={`text-4xl font-bold bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent`}>
                {stats.categories}
              </p>
            </div>
            <svg className={`w-12 h-12 ${isDarkMode ? "text-purple-400" : "text-purple-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.05, y: -5 }}
          className={`p-6 rounded-2xl backdrop-blur-md shadow-2xl ${
            isDarkMode 
              ? "bg-gradient-to-br from-emerald-600/30 via-green-600/20 to-teal-600/30 border border-emerald-500/30" 
              : "bg-gradient-to-br from-emerald-100 via-green-50 to-teal-100 border-2 border-emerald-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-sm font-medium ${isDarkMode ? "text-emerald-300" : "text-emerald-700"}`}>
                Notion Resources
              </p>
              <p className={`text-4xl font-bold bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent`}>
                {stats.totalLinks}
              </p>
            </div>
            <svg className={`w-12 h-12 ${isDarkMode ? "text-emerald-400" : "text-emerald-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
        </motion.div>
      </motion.div>      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8 space-y-4"
      >
        {/* Search Bar */}
        <div className="relative">
          <svg className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
            isDarkMode ? "text-gray-500" : "text-gray-400"
          }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search articles by title or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 transition-colors ${
              isDarkMode
                ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500"
                : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500"
            } outline-none`}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 flex-1 min-w-[200px]">
            <svg className={`w-5 h-5 ${isDarkMode ? "text-cyan-400" : "text-blue-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className={`flex-1 px-4 py-2 rounded-lg border-2 transition-colors ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 text-white focus:border-cyan-500"
                  : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
              } outline-none`}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 flex-1 min-w-[200px]">
            <svg className={`w-5 h-5 ${isDarkMode ? "text-cyan-400" : "text-blue-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`flex-1 px-4 py-2 rounded-lg border-2 transition-colors ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 text-white focus:border-cyan-500"
                  : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
              } outline-none`}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="alpha">Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          Showing {filteredResources.length} of {blogResources.length} articles
        </p>
      </motion.div>

      {/* Blog Content */}
      {filteredCategorySections.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-center py-16 rounded-xl ${
            isDarkMode ? "bg-gray-800" : "bg-gray-100"
          }`}
        >
          <svg className={`w-16 h-16 mx-auto mb-4 ${isDarkMode ? "text-gray-600" : "text-gray-400"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className={`text-lg font-medium ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            No articles found matching your criteria
          </p>
          <p className={`text-sm mt-2 ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>
            Try adjusting your search or filters
          </p>
        </motion.div>
      ) : (
        <div className="space-y-10">
          {filteredCategorySections.map(({ category, links }) => (
            <motion.section
              key={category}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="space-y-4"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3
                  className={`text-2xl font-semibold ${
                    isDarkMode ? "text-cyan-300" : "text-blue-700"
                  }`}
                >
                  {category}
                </h3>
                <span
                  className={`text-xs uppercase tracking-widest font-bold px-4 py-1.5 rounded-full ${
                    isDarkMode 
                      ? "bg-gradient-to-r from-cyan-600/40 via-blue-600/30 to-indigo-600/40 text-cyan-200 border border-cyan-500/30" 
                      : "bg-gradient-to-r from-cyan-100 via-blue-50 to-indigo-100 text-blue-700 border-2 border-blue-300"
                  }`}
                >
                  {links.length} {links.length === 1 ? 'resource' : 'resources'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {links.map((link, index) => (
                  <motion.a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 backdrop-blur-sm ${
                      isDarkMode
                        ? "bg-slate-950/70 border-blue-500/20 hover:border-blue-400/40 hover:shadow-[0_18px_40px_rgba(30,64,175,0.35)]"
                        : "bg-white/80 border-blue-100 hover:border-blue-300 hover:shadow-[0_22px_44px_rgba(59,130,246,0.18)]"
                    }`}
                  >
                    <div
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: isDarkMode
                          ? "linear-gradient(135deg, rgba(37, 99, 235, 0.18), rgba(6, 182, 212, 0.12))"
                          : "linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(14, 165, 233, 0.1))",
                      }}
                    />
                    <div className="relative z-10 flex flex-col gap-3 h-full">
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={`inline-flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold shadow-lg ${
                            isDarkMode
                              ? "bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white border-2 border-blue-400/50"
                              : "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-white border-2 border-blue-300"
                          }`}
                        >
                          {index + 1}
                        </span>
                        <svg
                          className={`w-5 h-5 ${
                            isDarkMode ? "text-cyan-300" : "text-blue-600"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.8}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H7"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h4
                          className={`font-semibold leading-snug ${
                            isDarkMode ? "text-gray-100" : "text-slate-900"
                          }`}
                        >
                          {link.title}
                        </h4>
                        <p
                          className={`mt-2 text-sm flex items-center gap-1 ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                          Open in Notion
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      )}

      {/* Footer Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className={`mt-12 text-center p-6 rounded-xl ${
          isDarkMode
            ? "bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700"
            : "bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200"
        }`}
      >
        <p
          className={`text-sm ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          All resources are curated Notion pages covering development, AI, interviews, and career growth.
        </p>
      </motion.div>
    </div>
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
        {activeTab === "blog" && <Blog isDarkMode={isDarkMode} />}
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
