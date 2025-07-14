import React from "react";

import { experiences } from "../../data/constants";
import PageLayout from "../Layout/PageLayout";
import { useTheme } from "../Theme/ThemeContext";

const Experience: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <PageLayout>
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 ${isDarkMode ? "bg-[#080808] text-gray-200" : "bg-white text-gray-900"}`}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          Professional Experience
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`relative p-6 rounded-2xl shadow-lg border transition-all duration-300 ${isDarkMode ? "bg-[#181818] border-gray-700 hover:border-purple-500" : "bg-gray-50 border-gray-200 hover:border-purple-400"}`}
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{exp.logo}</span>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                  <p className="text-sm text-purple-400 font-medium">
                    {exp.company}
                  </p>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>{exp.date}</span>
                <span>{exp.location}</span>
              </div>
              <ul className="list-disc list-inside mb-3 space-y-1">
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-2 py-1 rounded text-xs font-semibold ${isDarkMode ? "bg-purple-900 text-purple-200" : "bg-purple-100 text-purple-700"}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Experience;
