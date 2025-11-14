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
    className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden"
  >
    {/* Enhanced Background Effects */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 -right-40 w-96 h-96 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
    </div>

    <div className="w-full max-w-6xl mx-auto relative z-10">
      {/* Hero Section with Profile Image */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
          whileHover={{ scale: 1.05, rotate: 5 }}
          className="relative group"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full opacity-50 group-hover:opacity-75 animate-spin" style={{ animationDuration: '3s' }}></div>
          <img
            src="/profile.png"
            alt="Aditya Janjanam"
            className="relative w-52 h-52 md:w-72 md:h-72 rounded-full object-cover border-4 border-white/20 shadow-2xl ring-4 ring-purple-500/30 group-hover:ring-purple-400/50 transition-all duration-300"
          />
        </motion.div>

        {/* Title and Introduction */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          >
            Hi, I&apos;m Aditya Janjanam
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8"
          >
            <p className="text-2xl md:text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Software Developer</span>
              <span className="text-gray-400"> & </span>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">IT Professional</span>
            </p>
            <p className="text-lg md:text-xl text-gray-400 font-medium">Building innovative solutions across web, mobile & desktop platforms</p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href="/Aditya_Janjanam_Resume.docx"
              download
              onClick={() => trackDownload("Aditya_Janjanam_Resume.docx")}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold rounded-xl shadow-xl hover:shadow-purple-500/50 transition-all duration-300 ring-2 ring-purple-400/50 hover:ring-purple-300"
            >
              <FaDownload className="text-xl" /> Download Resume
            </motion.a>
            <motion.a
              href="https://github.com/AdityaJanjanam"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick("GitHub", "Profile Visit")}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-gray-800/70 border-2 border-purple-500/40 text-white font-bold rounded-xl hover:bg-gray-700/70 hover:border-purple-400/60 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 backdrop-blur-sm"
            >
              <FaGithub className="text-xl" /> GitHub
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/adityajanjanam"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackSocialClick("LinkedIn", "Profile Visit")}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-gray-800/70 border-2 border-blue-500/40 text-white font-bold rounded-xl hover:bg-gray-700/70 hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 backdrop-blur-sm"
            >
              <FaLinkedin className="text-xl" /> LinkedIn
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Optimized About Section */}
      <motion.div
        className="mb-12 p-10 rounded-3xl bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-blue-900/30 backdrop-blur-md border-2 border-purple-500/30 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
        whileHover={{ y: -5 }}
      >
        <h2 className="text-4xl font-black mb-6 bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent">About Me</h2>
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
        className="flex flex-wrap gap-4 mb-12 justify-center"
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
        {[
          { name: 'Full Stack Development', gradient: 'from-blue-600 to-cyan-500' },
          { name: 'Mobile App Development', gradient: 'from-pink-600 to-rose-500' },
          { name: 'Application Packaging', gradient: 'from-green-600 to-emerald-500' },
          { name: 'Software Testing', gradient: 'from-yellow-500 to-orange-500' },
          { name: 'Automation', gradient: 'from-purple-600 to-violet-500' },
          { name: 'Node.js', gradient: 'from-indigo-600 to-blue-500' },
          { name: 'React Native', gradient: 'from-teal-600 to-cyan-500' },
          { name: 'Flutter', gradient: 'from-orange-500 to-red-500' },
          { name: 'MongoDB', gradient: 'from-gray-700 to-gray-600' },
        ].map((skill, index) => (
          <motion.span
            key={skill.name}
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: { scale: 1, opacity: 1 },
            }}
            whileHover={{ scale: 1.1, y: -3 }}
            className={`px-6 py-3 rounded-2xl bg-gradient-to-r ${skill.gradient} text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer ring-2 ring-white/20 hover:ring-white/40`}
          >
            {skill.name}
          </motion.span>
        ))}
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
          className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-transparent backdrop-blur-md border-2 border-purple-500/30 hover:border-purple-400/60 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 group"
          whileHover={{ y: -8, scale: 1.02 }}
        >
          <h3 className="text-xl font-bold text-purple-300 group-hover:text-purple-200 mb-5 transition-colors duration-300">
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
