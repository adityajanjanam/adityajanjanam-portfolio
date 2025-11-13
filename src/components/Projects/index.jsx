import { motion } from "framer-motion";
import * as React from "react";

import { projects } from "../../data/constants";
import GithubProjects from "./GithubProjects";

const Projects = ({ isDarkMode }) => {
  return (
    <div className={`p-6 min-h-screen ${isDarkMode ? "text-white bg-gradient-to-br from-gray-900 to-black" : "text-gray-900 bg-gradient-to-br from-white to-gray-100"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className={`text-4xl font-extrabold mb-4 ${isDarkMode ? "text-cyan-400" : "text-blue-600"}`}>
          Projects
        </h1>
        <p className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-700"} max-w-2xl mx-auto`}>
          A showcase of my full-stack development projects featuring healthcare, web, and mobile applications
        </p>
      </motion.div>

      {/* Real Projects from constants.ts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`group relative p-6 rounded-2xl overflow-hidden border transition-all duration-300 ${
              isDarkMode 
                ? "bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-cyan-500" 
                : "bg-gradient-to-br from-white to-gray-50 border-gray-200 hover:border-blue-500 shadow-lg"
            }`}
          >
            {/* Gradient background effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${
              isDarkMode ? "from-cyan-400/5 via-transparent to-transparent" : "from-blue-400/10 via-transparent to-transparent"
            } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            <div className="relative z-10">
              {/* Project Icon/Image */}
              <div className={`text-6xl mb-4 ${isDarkMode ? "text-cyan-400" : "text-blue-600"}`}>
                {project.image}
              </div>

              {/* Project Type Badge */}
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                isDarkMode ? "bg-purple-900/40 text-purple-300" : "bg-purple-100 text-purple-700"
              }`}>
                {project.type}
              </span>

              {/* Project Title */}
              <h3 className={`text-2xl font-bold mb-3 group-hover:${isDarkMode ? "text-cyan-400" : "text-blue-600"} transition-colors`}>
                {project.title}
              </h3>

              {/* Project Description */}
              <p className={`mb-4 text-sm leading-relaxed ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="mb-4">
                  <h4 className={`text-sm font-semibold mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                    ✨ Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className={`text-xs flex items-start gap-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                        <span className={isDarkMode ? "text-cyan-400" : "text-blue-600"}>•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-2 py-1 text-xs rounded-md font-medium ${
                      isDarkMode ? "bg-gray-800 text-gray-300 border border-gray-700" : "bg-gray-100 text-gray-700 border border-gray-200"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isDarkMode
                    ? "bg-cyan-600 hover:bg-cyan-500 text-white shadow-lg hover:shadow-cyan-500/50"
                    : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/50"
                } transform hover:scale-105`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* GitHub projects */}
      <GithubProjects isDarkMode={isDarkMode} />
    </div>
  );
};

export default Projects;
