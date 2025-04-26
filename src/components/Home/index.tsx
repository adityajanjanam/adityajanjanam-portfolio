import React from 'react';
import { useTheme } from '../Theme/ThemeContext';

interface HomeProps {
  setActiveTab?: (tab: string) => void;
}

const Home: React.FC<HomeProps> = ({ setActiveTab }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center gap-8">
        {/* Left Column: About Me and Intro */}
        <div className="flex-1 w-full max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <h3 className={`text-2xl font-bold mb-4 ${isDarkMode 
            ? 'text-indigo-400' 
            : 'text-indigo-600'} sm:text-3xl`}>About Me</h3>
          <p className={`text-base font-playfair tracking-wide antialiased ${isDarkMode 
            ? 'text-gray-300' 
            : 'text-gray-700'} leading-relaxed sm:text-lg text-justify`}>
            I am an international student pursuing a Graduate Certificate in Mobile Applications Development at Centennial College, Toronto, with a distinguished diploma in Computer Applications Development from Conestoga College, Waterloo.
          </p>
          <p className={`mt-4 text-base font-playfair tracking-wide antialiased ${isDarkMode 
            ? 'text-gray-300' 
            : 'text-gray-700'} leading-relaxed sm:text-lg text-justify`}>
            With 3+ years of IT experience, including two years as a Systems Engineer at Atos, I have a proven track record in software development, application packaging, and testing. I have successfully streamlined deployment processes, automated installations, and improved application performance in enterprise environments.
          </p>
          <p className={`mt-4 text-base font-playfair tracking-wide antialiased ${isDarkMode 
            ? 'text-gray-300' 
            : 'text-gray-700'} leading-relaxed sm:text-lg text-justify`}>
            My core strengths include building robust mobile, web, and desktop applications using Android, iOS, Flutter, React Native, Node.js, PowerShell, and VBScript. I am passionate about delivering business value through technology and thrive in collaborative, fast-paced teams.
          </p>
          <button
            onClick={() => setActiveTab && setActiveTab('about')}
            className={`mt-6 px-6 py-3 rounded-lg font-semibold shadow-md ${
              isDarkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-indigo-500 hover:bg-indigo-600'
            } text-white transition-colors duration-200`}
          >
            Learn More About Me
          </button>
        </div>
        {/* Right Column: Profile Image and Key Info */}
        <div className="flex-1 w-full max-w-sm flex flex-col items-center">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg mb-4 border-4 border-indigo-500 bg-gray-200 flex items-center justify-center">
            {/* Replace src with your profile image path */}
            <img src="/profile.png" alt="Profile" className="object-cover w-full h-full" />
          </div>
          <div className="text-center">
            <h4 className="text-xl font-bold mb-1">Aditya Janjanam</h4>
            <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-1">Full Stack & Mobile App Developer</p>
            <div className="flex flex-col gap-1 text-sm text-gray-500 dark:text-gray-400 mb-2">
              <span>Toronto, Canada</span>
              <span>Open to Opportunities</span>
            </div>
            {/* Social Media Icons */}
            <div className="flex justify-center gap-4 mt-2">
              <a href="https://www.linkedin.com/in/janjanamaditya" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-200 transition-colors text-2xl">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://github.com/adityajanjanam" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors text-2xl">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.239 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="mailto:janjanamaditya@gmail.com" className="text-red-500 hover:text-red-700 transition-colors text-2xl">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20,4H4C2.9,4,2,4.9,2,6l0,12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,8l-8,5L4,8V6l8,5l8-5V8z"/></svg>
              </a>
              <a href="https://leetcode.com/adityajanjanam" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:text-yellow-600 transition-colors text-2xl">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 