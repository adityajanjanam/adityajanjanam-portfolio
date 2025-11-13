import * as React from "react";

import { experiences } from "../../data/constants";

const Experience = ({ isDarkMode }) => {
  // Use experiences from constants.ts

  return (
    <div className={`p-6 min-h-screen flex flex-col items-center ${isDarkMode ? "text-white bg-gradient-to-br from-gray-900 to-black" : "text-gray-900 bg-gradient-to-br from-white to-gray-100"}`}> 
      <h1 className="text-4xl font-extrabold mb-10 tracking-tight text-center">Experience</h1>
      <div className="w-full max-w-2xl relative">
        <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-40" style={{zIndex:0}}></div>
        <div className="space-y-10 relative z-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group relative flex items-start gap-6 pl-12 pr-4 py-6 rounded-xl shadow-lg transition-all duration-300 border border-transparent ${isDarkMode ? "bg-gray-900 hover:border-blue-500" : "bg-white hover:border-blue-400"}`}
              style={{zIndex:1}}
            >
              <div className="absolute left-4 top-8 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-pink-400 shadow-lg border-2 border-white text-2xl">
                {exp.logo}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-1 group-hover:text-blue-500 transition-colors">{exp.title}</h3>
                <p className="text-lg font-medium mb-1 text-purple-400 group-hover:text-pink-400">{exp.company}</p>
                <p className="text-xs mb-2 text-gray-400 italic">{exp.date} &mdash; {exp.location}</p>
                <ul className="mb-3 list-disc list-inside text-base leading-relaxed">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className={`px-2 py-1 rounded text-xs font-semibold ${isDarkMode ? "bg-blue-900 text-blue-200" : "bg-blue-100 text-blue-700"}`}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
