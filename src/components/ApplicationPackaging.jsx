import { motion } from "framer-motion";
import * as React from "react";

import { technologies } from "../data/constants";

const ApplicationPackaging = ({ setActiveTab, isDarkMode }) => {
  const packagingTools = technologies.applicationPackaging;

  const experience = {
    company: "Atos Global",
    role: "Systems Engineer",
    duration: "Jun 2021 – Aug 2023",
    achievements: [
      "Led application packaging and testing initiatives using PowerShell, Admin Studio, and InstallShield",
      "Automated deployment processes reducing manual effort by 40%",
      "Managed enterprise software distribution using SCCM/MECM",
      "Implemented quality assurance protocols improving package success rate by 25%",
    ],
  };

  const skills = [
    {
      category: "Packaging Tools",
      items: ["MSI/MSIX", "InstallShield", "Admin Studio", "Orca", "InstEd"],
    },
    {
      category: "Deployment",
      items: ["SCCM/MECM", "Intune", "Group Policy", "PDQ Deploy"],
    },
    {
      category: "Scripting",
      items: ["PowerShell", "VBScript", "Batch Scripting", "Registry Editing"],
    },
    {
      category: "Virtualization",
      items: ["Citrix", "VMware", "Oracle VM", "Hyper-V", "App-V"],
    },
  ];

  const workflow = [
    {
      step: 1,
      title: "Package Analysis",
      description: "Analyze vendor packages, dependencies, and requirements",
      icon: "🔍",
    },
    {
      step: 2,
      title: "Repackaging",
      description: "Create MSI/MSIX packages with customizations",
      icon: "📦",
    },
    {
      step: 3,
      title: "Testing",
      description: "Test on various OS versions and virtual environments",
      icon: "🧪",
    },
    {
      step: 4,
      title: "Deployment",
      description: "Deploy via SCCM/Intune to enterprise endpoints",
      icon: "🚀",
    },
  ];

  return (
    <div
      className={`min-h-screen p-6 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 to-black text-white"
          : "bg-gradient-to-br from-white to-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1
            className={`text-4xl font-extrabold mb-4 ${
              isDarkMode ? "text-cyan-400" : "text-blue-600"
            }`}
          >
            Application Packaging & Deployment
          </h1>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Enterprise software packaging and deployment expertise with 2+ years of hands-on experience
            at Atos Global, specializing in SCCM/MECM and modern packaging technologies
          </p>
        </motion.div>

        {/* Experience Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`mb-12 p-6 rounded-2xl border ${
            isDarkMode
              ? "bg-gradient-to-br from-gray-900 to-gray-800 border-cyan-500/30"
              : "bg-gradient-to-br from-white to-blue-50 border-blue-200 shadow-lg"
          }`}
        >
          <div className="flex items-start gap-4 mb-4">
            <span className="text-4xl">🏢</span>
            <div>
              <h2
                className={`text-2xl font-bold ${
                  isDarkMode ? "text-cyan-400" : "text-blue-700"
                }`}
              >
                {experience.role} @ {experience.company}
              </h2>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {experience.duration}
              </p>
            </div>
          </div>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, idx) => (
              <li
                key={idx}
                className={`flex items-start gap-3 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <span className={isDarkMode ? "text-cyan-400" : "text-blue-600"}>✓</span>
                {achievement}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2
            className={`text-3xl font-bold mb-6 text-center ${
              isDarkMode ? "text-cyan-400" : "text-blue-600"
            }`}
          >
            Tools & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {packagingTools.map((tool, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.05 }}
                className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 hover:border-cyan-500"
                    : "bg-white border-gray-200 hover:border-blue-500 shadow-md"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{tool.icon}</span>
                  <span
                    className={`text-lg font-semibold ${
                      isDarkMode ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    {tool.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2
            className={`text-3xl font-bold mb-6 text-center ${
              isDarkMode ? "text-cyan-400" : "text-blue-600"
            }`}
          >
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className={`p-6 rounded-2xl border ${
                  isDarkMode
                    ? "bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700"
                    : "bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-lg"
                }`}
              >
                <h3
                  className={`text-lg font-bold mb-4 ${
                    isDarkMode ? "text-cyan-300" : "text-blue-700"
                  }`}
                >
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((item, i) => (
                    <li
                      key={i}
                      className={`text-sm flex items-center gap-2 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      <span className={isDarkMode ? "text-cyan-400" : "text-blue-600"}>
                        •
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Workflow Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2
            className={`text-3xl font-bold mb-6 text-center ${
              isDarkMode ? "text-cyan-400" : "text-blue-600"
            }`}
          >
            Packaging Workflow
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflow.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                className={`relative p-6 rounded-2xl border ${
                  isDarkMode
                    ? "bg-gradient-to-br from-gray-900 to-gray-800 border-cyan-500/30"
                    : "bg-gradient-to-br from-white to-blue-50 border-blue-200 shadow-lg"
                }`}
              >
                {/* Step Number */}
                <div
                  className={`absolute -top-3 -left-3 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                    isDarkMode
                      ? "bg-cyan-600 text-white"
                      : "bg-blue-600 text-white"
                  }`}
                >
                  {step.step}
                </div>

                <div className="text-5xl mb-4 text-center">{step.icon}</div>
                <h3
                  className={`text-lg font-bold mb-2 text-center ${
                    isDarkMode ? "text-cyan-300" : "text-blue-700"
                  }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-sm text-center ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {step.description}
                </p>

                {/* Arrow to next step */}
                {idx < workflow.length - 1 && (
                  <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2">
                    <span
                      className={`text-3xl ${
                        isDarkMode ? "text-cyan-400" : "text-blue-600"
                      }`}
                    >
                      →
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p
            className={`text-lg mb-6 ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Interested in my application packaging and deployment experience?
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                isDarkMode
                  ? "bg-cyan-600 hover:bg-cyan-500 text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              } shadow-lg hover:scale-105`}
            >
              View Full Experience
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 border ${
                isDarkMode
                  ? "border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                  : "border-blue-600 text-blue-600 hover:bg-blue-50"
              }`}
            >
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ApplicationPackaging;
