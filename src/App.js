import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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

const experiences = [
  {
    title: 'Systems Engineer',
    company: 'Atos',
    date: 'Jun 2021 – Present',
    location: 'Remote',
    description: 'Source Validation, Application Packaging & Testing using PowerShell, Admin Studio, InstallShield'
  },
  {
    title: 'Software Engineer Intern',
    company: 'Capgemini',
    date: 'Sep 2020 – Dec 2020',
    location: 'India',
    description: 'Manual and Selenium Testing with Jira & Java'
  }
];

const education = [
  {
    program: 'Mobile Applications Development',
    institution: 'Centennial College',
    period: '2024-2025',
    type: 'Post-Graduate Certificate',
    status: 'PGWP Eligible',
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
    type: 'Post-Graduate Certificate',
    status: 'PGWP Eligible',
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

const projects = [
  {
    title: 'HealthTrackPro',
    description: 'A patient clinical data tracking app with QR sync, REST API, offline-first, and charts.',
    tech: ['React Native', 'Flutter', 'Node.js', 'MongoDB'],
    type: 'Healthcare App',
    link: 'https://github.com/adityajanjanam/HealthTrackPro'
  },
  {
    title: 'Missamma Makeovers',
    description: 'Beauty studio site with smooth UI, contact form, SEO, and custom branding.',
    tech: ['React', 'Tailwind', 'SEO'],
    type: 'Business Website',
    link: 'https://github.com/adityajanjanam'
  },
  {
    title: 'Scientific Calculator',
    description: 'Flutter scientific calculator supporting layout optimization and advanced functions.',
    tech: ['Flutter', 'Firebase'],
    type: 'Mobile Utility App',
    link: 'https://expo.dev/artifacts/eas/qxwm3k8vpPepRHiTQTATXX.aab'
  }
];

// NavLinks component without router links
const NavLinks = ({ activeTab, setActiveTab }) => (
  <motion.nav 
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="fixed top-0 w-full px-6 py-4 bg-[#121212]/80 backdrop-blur-sm z-50 border-b border-purple-500/20"
  >
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <div className="flex space-x-8">
        {['Home', 'Experience', 'Education', 'Projects'].map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item.toLowerCase())}
            className={`text-gray-400 hover:text-purple-400 transition-all duration-300 relative group ${
              activeTab === item.toLowerCase() ? 'text-purple-400' : ''
            }`}
          >
            {item}
            <motion.span
              className={`absolute -bottom-1 left-0 h-0.5 bg-purple-400 ${
                activeTab === item.toLowerCase() ? 'w-full' : 'w-0'
              }`}
              animate={{ width: activeTab === item.toLowerCase() ? '100%' : '0%' }}
              transition={{ duration: 0.3 }}
            />
          </button>
        ))}
      </div>
      <motion.a
        href="/resume.pdf"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume ↗
      </motion.a>
    </div>
  </motion.nav>
);

// Social Links Component
const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/adityajanjanam',
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
const CTASection = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="flex flex-col items-start gap-6 mb-8">
      {/* Buttons */}
      <div className="flex gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 
                   transition-all duration-300 flex items-center gap-2
                   shadow-lg hover:shadow-purple-500/25"
          onClick={() => setShowContactModal(true)}
        >
          Contact Me
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </motion.button>

        <a 
          href="/resume.pdf" 
          target="_blank"
          className="px-6 py-3 border border-purple-500 text-purple-400 rounded-lg
                   hover:bg-purple-500/10 transition-all duration-300 flex items-center gap-2"
        >
          Resume
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </a>
      </div>

      {/* Social Links */}
      <SocialLinks />

      {/* Contact Modal */}
      {showContactModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && setShowContactModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-[#1a1a1a] rounded-xl p-6 max-w-lg w-full border border-purple-500/20"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
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
                className="flex items-center gap-3 p-4 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 
                         border border-purple-500/20 transition-all duration-300"
              >
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Schedule a Call</h3>
                  <p className="text-sm text-gray-400">Book a time slot</p>
                </div>
              </a>

              <a
                href="mailto:adityajanjanam@gmail.com"
                className="flex items-center gap-3 p-4 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 
                         border border-purple-500/20 transition-all duration-300"
              >
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-white">Email Me</h3>
                  <p className="text-sm text-gray-400">Get in touch directly</p>
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
                className="w-full py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 
                         transition-all duration-300 flex items-center justify-center gap-2"
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
const SafeAnimatedGreeting = () => (
  <GreetingErrorBoundary>
    <AnimatedGreeting />
  </GreetingErrorBoundary>
);

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

const TechGrid = ({ setActiveTab }) => (
  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
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
        className={`p-5 rounded-xl bg-purple-900/10 backdrop-blur-sm border border-purple-500/20 
                   transition-all duration-300 group
                   ${area === 'applicationPackaging' ? 
                     'hover:border-purple-500/50 hover:bg-purple-900/20 cursor-pointer' : 
                     'hover:border-purple-500/30'}`}
      >
        <h3 className="text-lg font-semibold text-purple-400 mb-3 flex items-center gap-2">
          {area === 'fullStack' ? '🌐 Full Stack' :
           area === 'desktop' ? '🖥️ Desktop' :
           area === 'mobile' ? '📱 Mobile' :
           area === 'web' ? '🌍 Web' :
           area === 'testing' ? '🧪 Testing' :
           area === 'applicationPackaging' ? (
             <div className="flex items-center gap-2">
               📦 Application Packaging
               <span className="text-xs text-purple-400/70 bg-purple-500/10 px-2 py-0.5 rounded-full">
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
              className="px-2.5 py-1 text-sm bg-purple-900/30 rounded-full text-gray-300
                       hover:bg-purple-800/40 transition-colors duration-300 flex items-center gap-1.5
                       border border-purple-500/10 hover:border-purple-500/20"
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

// Add this new component for animated multilingual greeting
const MultilingualGreeting = () => {
  const greetings = [
    { text: "నమస్కారం!", lang: "Telugu • తెలుగు" },
    { text: "नमस्ते!", lang: "Hindi • हिंदी" },
    { text: "வணக்கம்!", lang: "Tamil • தமிழ்" },
    { text: "ನಮಸ್ಕಾರ!", lang: "Kannada • ಕನ್ನಡ" },
    { text: "നമസ്കാരം!", lang: "Malayalam • മലയാളം" },
    { text: "नमस्कार!", lang: "Sanskrit • संस्कृतम्" },
    { text: "Hello!", lang: "English" },
    { text: "Bonjour!", lang: "French" },
    { text: "Hola!", lang: "Spanish" },
    { text: "こんにちは!", lang: "Japanese • 日本語" },
    { text: "안녕하세요!", lang: "Korean • 한국어" },
    { text: "你好!", lang: "Chinese • 中文" },
    { text: "Hallo!", lang: "German" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 3000); // Change greeting every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full text-center"
        >
          <motion.p
            className="text-purple-400 mb-2 text-xl"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {greetings[currentIndex].text}
            <span className="text-gray-500 text-sm ml-2">
              in {greetings[currentIndex].lang}
            </span>
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Update the name section with animation
const AnimatedName = () => {
  return (
    <motion.h1 
      className="text-5xl lg:text-7xl font-bold mb-6"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <motion.span 
        className="inline-block"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        I am{" "}
      </motion.span>
      <motion.span 
        className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Aditya Janjanam
      </motion.span>
      <motion.span
        className="inline-block text-purple-400"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
      >
        !
      </motion.span>
    </motion.h1>
  );
};

const Home = ({ setActiveTab }) => {
  return (
    <div className="min-h-screen relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-4 pt-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-left">
            <MultilingualGreeting />
            <AnimatedName />
            
            {/* Rest of your content */}
            <motion.p 
              className="text-xl text-gray-400 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Full Stack Developer | Mobile App Developer | Software Engineer
            </motion.p>

            {/* Quick Stats */}
            <motion.div 
              className="flex gap-8 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">2+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">15+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">5+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </motion.div>

            {/* CTA Buttons and Social Links */}
            <CTASection />
          </div>

          {/* Photo Section - Adjusted Size */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[500px] w-full max-w-[350px] mx-auto">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-pink-500/20 rounded-[30px] blur-3xl" />
              
              {/* Image Container */}
              <div className="relative h-full w-full rounded-[30px] overflow-hidden 
                            border-2 border-purple-500/20 backdrop-blur-sm
                            bg-gradient-to-b from-purple-900/30 to-transparent">
                <img 
                  src="/profile.png" 
                  alt="Aditya Janjanam"
                  className="h-full w-full object-cover object-center"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
                
                {/* Status Indicator */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full">
                    <div className="absolute w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75" />
                  </div>
                  <span className="text-sm text-white">Available for hire</span>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-white font-semibold">Aditya Janjanam</h3>
                      <p className="text-gray-300 text-sm">Full Stack Developer</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-purple-500 p-2 rounded-full text-white hover:bg-purple-600 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>
        </div>
          </motion.div>
        </div>

        <TechGrid setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

const Experience = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">Experience</h2>
    {experiences.map((exp, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-purple-900/10 p-6 rounded-xl border border-purple-500/20"
      >
        <h3 className="text-xl font-semibold text-purple-400">{exp.title}</h3>
        <p className="text-gray-300">{exp.company}</p>
        <p className="text-gray-400 mt-2">{exp.description}</p>
        <div className="flex justify-between text-sm text-gray-500 mt-4">
          <span>{exp.date}</span>
          <span>{exp.location}</span>
        </div>
      </motion.div>
    ))}
  </div>
);

const Education = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">Education</h2>
    {education.map((edu, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-purple-900/10 p-6 rounded-xl border border-purple-500/20"
      >
        <h3 className="text-xl font-bold text-purple-400">{edu.program}</h3>
        <p className="text-gray-300">{edu.institution}</p>
        <p className="text-gray-400">{edu.period} • {edu.type}</p>
        <p className="text-green-400 text-sm mb-4">{edu.status}</p>
        <h4 className="text-lg font-semibold text-gray-300 mb-2">Key Courses:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {edu.courses.map((course, j) => (
            <div key={j} className="text-sm text-gray-400 p-2 bg-purple-900/20 rounded">
              {course}
            </div>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
);

const Projects = () => (
  <div className="space-y-8">
    <h2 className="text-3xl font-bold text-center text-purple-400 mb-12">Projects</h2>
    {projects.map((proj, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="bg-purple-900/10 p-6 rounded-xl border border-purple-500/20"
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-purple-400">{proj.title}</h3>
          <span className="text-sm bg-purple-900/30 px-3 py-1 rounded-full text-gray-300">
            {proj.type}
          </span>
        </div>
        <p className="text-gray-400 mb-4">{proj.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {proj.tech.map((t, j) => (
            <span key={j} className="text-sm bg-purple-900/30 px-3 py-1 rounded-full text-gray-300">
              {t}
            </span>
          ))}
        </div>
        <a 
          href={proj.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 inline-flex items-center"
        >
          View Project →
        </a>
      </motion.div>
    ))}
  </div>
);

const ApplicationPackagingSection = () => {
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
    <div className="w-full max-w-6xl mx-auto py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-center"
      >
        <h2 className="text-3xl font-bold text-white mb-3">Application Packaging</h2>
        <p className="text-purple-400/80">Enterprise Software Deployment Solutions</p>
      </motion.div>

      {/* Core Tools */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-purple-400 mb-4">Core Technologies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-purple-900/10 backdrop-blur-sm p-4 rounded-xl border border-purple-500/20
                       hover:border-purple-500/40 hover:bg-purple-900/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{tool.icon}</span>
                <h4 className="font-medium text-white">{tool.name}</h4>
              </div>
              <p className="text-sm text-gray-400/90">{tool.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Tools */}
      <div>
        <h3 className="text-xl font-semibold text-purple-400 mb-4">Supporting Tools</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {additionalTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (index * 0.1) }}
              className="bg-purple-900/10 backdrop-blur-sm p-4 rounded-xl border border-purple-500/20
                       hover:border-purple-500/40 hover:bg-purple-900/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{tool.icon}</span>
                <h4 className="font-medium text-white">{tool.name}</h4>
              </div>
              <p className="text-sm text-gray-400/90">{tool.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <motion.button
        onClick={() => window.history.back()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Overview
      </motion.button>
    </div>
  );
};

// Add this new component for the contact section
const ContactSection = () => {
  const contactOptions = [
    {
      title: "Let's Connect",
      description: "Open to opportunities and collaborations",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      ),
      action: {
        text: "Schedule a Call",
        url: "https://calendly.com/adityajanjanam" // Replace with your Calendly link
      }
    },
    {
      title: "Email Me",
      description: "adityajanjanam@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      action: {
        text: "Send Email",
        url: "mailto:adityajanjanam@gmail.com"
      }
    },
    {
      title: "LinkedIn",
      description: "Connect professionally",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      action: {
        text: "Connect on LinkedIn",
        url: "https://www.linkedin.com/in/adityajanjanam"
      }
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
        <p className="text-gray-400">Let's discuss opportunities, collaborations, or just have a chat!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactOptions.map((option, index) => (
          <motion.div
            key={option.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-purple-900/10 backdrop-blur-sm border border-purple-500/20 
                     rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                {option.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{option.title}</h3>
                <p className="text-sm text-gray-400">{option.description}</p>
              </div>
            </div>
            <motion.a
              href={option.action.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 
                       transition-colors duration-300 text-sm"
            >
              {option.action.text}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </motion.div>
        ))}
      </div>

      {/* Quick Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-12 bg-purple-900/10 backdrop-blur-sm border border-purple-500/20 
                   rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300"
      >
        <h3 className="text-xl font-semibold text-white mb-6">Quick Message</h3>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-purple-900/20 border border-purple-500/20 rounded-lg px-4 py-2.5
                       text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50
                       transition-all duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-purple-900/20 border border-purple-500/20 rounded-lg px-4 py-2.5
                       text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50
                       transition-all duration-300"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full bg-purple-900/20 border border-purple-500/20 rounded-lg px-4 py-2.5
                     text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50
                     transition-all duration-300 resize-none"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-purple-500 text-white px-6 py-2.5 rounded-lg hover:bg-purple-600
                     transition-all duration-300 flex items-center gap-2"
          >
            Send Message
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </motion.button>
      </form>
      </motion.div>

      {/* Social Links */}
      <SocialLinks />
    </motion.div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'experience':
        return <Experience />;
      case 'education':
        return <Education />;
      case 'projects':
        return <Projects />;
      case 'application-packaging':
  return (
          <div className="container mx-auto px-4 pt-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <button
                onClick={() => setActiveTab('home')}
                className="text-purple-400 hover:text-purple-300 mb-6 flex items-center gap-2"
              >
                ← Back to Home
              </button>
              <ApplicationPackagingSection />
            </motion.div>
          </div>
        );
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0b0f] text-white">
      <NavLinks activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderContent()}
      </div>
  );
};

export default App;