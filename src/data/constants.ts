interface Technology {
  name: string;
  icon: string;
}

interface Technologies {
  fullStack: Technology[];
  frontend: Technology[];
  backend: Technology[];
  desktop: Technology[];
  mobile: Technology[];
  web: Technology[];
  languages: Technology[];
  testing: Technology[];
  devops: Technology[];
  cloud: Technology[];
  uiux: Technology[];
  collaboration: Technology[];
  aiTools: Technology[];
  applicationPackaging: Technology[];
}

export const technologies: Technologies = {
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

export interface Experience {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string[];
  skills: string[];
  logo: string;
}

export const experiences: Experience[] = [
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
    // title originally set here; replaced with more descriptive title below
    company: "Capgemini",
    date: "Sep 2020 – Dec 2020",
    location: "Bengaluru, India",
    title: "Software Engineer Intern | React.js",
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
];

export interface Project {
  title: string;
  description: string;
  tech: string[];
  type: string;
  link: string;
  image: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    title: "HealthTrackPro (Flutter)",
    description:
      "A full-stack healthcare management solution designed to assist medical professionals in tracking patient details and vital health records seamlessly. Built with Flutter and Node.js/Express.",
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
      "A comprehensive healthcare provider app built with React Native for tracking patient data. Features include QR sync, offline-first capability, clinical data management, and interactive charts.",
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
      "Pet training platform offering tailored programs, expert advice, and an integrated pet product shop for enhanced pet-owner relationships.",
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
      "RESTful API for healthcare providers to manage and monitor patient clinical data. Built with Node.js and MongoDB, featuring Swagger documentation.",
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
];

export interface Education {
  program: string;
  institution: string;
  location: string;
  logo: string;
  period: string;
  type: string;
  Grade?: string;
  description: string[];
  courses?: string[];
  skills: string[];
}

export const education: Education[] = [
  {
    program: "Mobile Applications Development",
    institution: "Centennial College",
    location: "Toronto, ON",
    logo: "📱💻",
    period: "Sep 2024 - Apr 2025",
    type: "Postgraduate Degree",
    description: [
      "Graduated in April 2025. Specialized in advanced mobile app development for Android and iOS platforms, with expertise in mobile architecture, UI/UX, and backend integration.",
      "Gained hands-on experience with Kotlin, Swift, and React Native through industry-driven projects, collaborating with professionals to deliver innovative, user-centric applications.",
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
    ],
  },
  {
    program: "Computer Applications Development",
    institution: "Conestoga College",
    location: "Waterloo, ON",
    logo: "🖥️⚙️",
    period: "Sep 2023 - Apr 2024",
    type: "Postgraduate Degree",
    Grade: "DISTINCTION",
    description: [
      "Graduated with distinction, specializing in full-stack and web development. Completed advanced coursework and real-world projects in software engineering.",
      "Gained experience with modern technologies and collaborated with industry experts to deliver impactful solutions.",
    ],
    courses: [
      "Systems Concepts, Analysis and Design",
      "Software Development Techniques",
      "Web Design and Development",
      "Database Management",
      "Web Foundations",
      "System Development Project",
      "Mobile Application Development",
      "Microsoft Web Technologies",
      "User Experience Design",
      "Software Quality",
    ],
    skills: [
      "SQL",
      "Full-Stack Development",
      "Web Applications",
      "Software Development",
      "Mobile Application Development",
      "C#",
      "Microsoft Visual Studio Code",
      "MERN Stack",
      "Web Development",
      ".NET",
      "ASP.NET MVC",
      "User Experience Design (UED)",
      "Front-end Development",
      "Software Development Life Cycle (SDLC)",
    ],
  },
  {
    program:
      "Bachelor of Engineering - BE, Electronics and Communications Engineering",
    institution: "Sathyabama Institute of Science & Technology, Chennai",
    location: "Chennai, India",
    logo: "🎓",
    period: "Jun 2016 - May 2020",
    type: "Bachelor of Engineering",
    Grade: "3.06 (FIRST CLASS)",
    description: [
      "Graduated with first class, building a strong foundation in electronics, programming, and communication systems.",
      "Coursework included C, C++, Python, digital/analog communications, and microcontrollers, preparing me for technical challenges in the field.",
    ],
    skills: [
      "Microsoft Office",
      "Problem Solving",
      "C++",
      "Microsoft Visual Studio Code",
      "English",
      "Electronics",
      "Communication",
      "C (Programming Language)",
      "Programming",
      "Python (Programming Language)",
      "Object-Oriented Programming (OOP)",
    ],
  },
  {
    program: "INTERMEDIATE, Mathematics, Physics and Chemistry (MPC)",
    institution: "Vignan Co operative Junior College",
    location: "",
    logo: "📖",
    period: "Jun 2014 - Apr 2016",
    type: "Intermediate",
    Grade: "95.7 % (DISTINCTION)",
    description: [
      "Achieved 95.7% distinction, developing strong analytical and communication skills. Studied core science and math subjects, along with English and Sanskrit.",
      "Actively participated in extracurricular activities, enhancing creativity and confidence.",
    ],
    skills: ["Chemistry", "Physics", "English", "Sanskrit", "Mathematics"],
  },
  {
    program: "SSC, Mathematics",
    institution: "Teja High School",
    location: "",
    logo: "🏫",
    period: "Jun 2004 - May 2014",
    type: "SSC",
    Grade: "83 %",
    description: [
      "Completed SSC with 83%, building a solid academic foundation and communication skills.",
      "Studied a diverse range of subjects and participated in essay writing and stage performances.",
    ],
    skills: [
      "Telugu",
      "Biology",
      "Physics",
      "English",
      "Sanskrit",
      "Mathematics",
      "Hindi",
      "Social Studies",
    ],
  },
];

const constants = {
  technologies,
  experiences,
  projects,
  education,
};

export default constants;
