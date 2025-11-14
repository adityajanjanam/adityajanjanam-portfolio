import { motion } from "framer-motion";
import * as React from "react";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

import { technologies } from "../../data/constants";
import { trackDownload, trackSocialClick } from "../../utils/analytics";

export const Home = ({ setActiveTab, isDarkMode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
  >
    <div className="w-full max-w-6xl mx-auto">
      {/* Hero Section with Profile Image */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <img
            src="/profile.png"
            alt="Aditya Janjanam"
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-purple-500/50 shadow-2xl"
          />
        </motion.div>

        {/* Title and Introduction */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 gradient-text"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I&apos;m Aditya Janjanam
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-purple-400 mb-6 font-semibold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            Software Developer & IT Professional
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="/Aditya_Janjanam_Resume.docx"
              download
              onClick={() => trackDownload("Aditya_Janjanam_Resume.docx")}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300"
            >
              <FaDownload /> Download Resume
            </a>
            <a
              href="https://github.com/AdityaJanjanam"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick("GitHub", "Profile Visit")}
              className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 border border-purple-500/30 text-white font-semibold rounded-lg hover:bg-gray-700/50 hover:border-purple-500/60 transition-all duration-300"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/adityajanjanam"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick("LinkedIn", "Profile Visit")}
              className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 border border-purple-500/30 text-white font-semibold rounded-lg hover:bg-gray-700/50 hover:border-purple-500/60 transition-all duration-300"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </motion.div>
        </div>
      </div>

      {/* Optimized About Section */}
      <motion.div
        className="mb-12 p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-purple-500/20"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        <h2 className="text-3xl font-bold mb-4 gradient-text">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Results-driven professional with <b>3+ years</b> of experience in Full Stack Development, Mobile App Development, and Application Packaging. I combine software engineering expertise with IT infrastructure knowledge to deliver secure, scalable solutions across web, mobile, and desktop platforms.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          I hold postgraduate diplomas in <b>Mobile Applications Development</b> (Centennial College, Toronto) and <b>Computer Applications Development with Distinction</b> (Conestoga College, Waterloo), along with a Bachelor&apos;s in Electronics & Communication Engineering.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          At <b>Atos Global IT Solutions</b>, I specialized in Application Packaging (MSI/MSIX), PowerShell automation, and SCCM deployments across enterprise environments. During internships at <b>Capgemini</b> and <b>Tech Mahindra</b>, I built full-stack applications using the MERN stack.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          <b className="gradient-text">Currently seeking opportunities in:</b> Full Stack Development, Mobile App Development (React Native/Flutter), Desktop App Development (Electron), and Application Packaging & Automation.
        </p>
      </motion.div>
      <motion.div
        className="flex flex-wrap gap-3 mb-8 text-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <span className="px-4 py-2 rounded-full bg-blue-700 text-white font-semibold shadow">Full Stack Development</span>
        <span className="px-4 py-2 rounded-full bg-pink-600 text-white font-semibold shadow">Mobile App Development</span>
        <span className="px-4 py-2 rounded-full bg-green-600 text-white font-semibold shadow">Application Packaging</span>
        <span className="px-4 py-2 rounded-full bg-yellow-500 text-gray-900 font-semibold shadow">Software Testing</span>
        <span className="px-4 py-2 rounded-full bg-purple-700 text-white font-semibold shadow">Automation</span>
        <span className="px-4 py-2 rounded-full bg-indigo-600 text-white font-semibold shadow">Node.js</span>
        <span className="px-4 py-2 rounded-full bg-teal-600 text-white font-semibold shadow">React Native</span>
        <span className="px-4 py-2 rounded-full bg-orange-500 text-white font-semibold shadow">Flutter</span>
        <span className="px-4 py-2 rounded-full bg-gray-800 text-white font-semibold shadow">MongoDB</span>
      </motion.div>
    </div>
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full max-w-6xl"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {Object.entries(technologies).map(([area, techs]) => (
        <motion.div
          key={area}
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          className="p-6 rounded-xl bg-gradient-to-br from-[#1e293b]/30 to-transparent backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 hover:shadow-lg transition-all duration-300"
        >
          <h3 className="text-lg font-semibold text-purple-400 mb-4">
            {area === "fullStack"
              ? "🌐 Full Stack"
              : area === "desktop"
                ? "🖥️ Desktop"
                : area === "mobile"
                  ? "📱 Mobile"
                  : area === "web"
                    ? "🌍 Web"
                    : area === "testing"
                      ? "🧪 Testing"
                      : "📦 DevOps"}
          </h3>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span
                key={tech.name}
                className="px-4 py-2 text-sm bg-[#182233]/70 border border-purple-400/40 rounded-full text-gray-300 hover:bg-[#1d2939]/80 transition-colors duration-300"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </motion.div>
);

export default Home;
