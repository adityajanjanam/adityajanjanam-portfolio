import React from "react";

const Experience = ({ isDarkMode }) => {
  const experienceData = [
    {
      title: "Software Developer",
      company: "Tech Company",
      period: "2023 - Present",
      description:
        "Full-stack development using React, Node.js, and modern web technologies",
    },
    {
      title: "Junior Developer",
      company: "Startup Inc",
      period: "2022 - 2023",
      description: "Frontend development and UI/UX implementation",
    },
  ];

  return (
    <div className={`p-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
      <h1 className="text-3xl font-bold mb-6">Experience</h1>
      <div className="space-y-6">
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}
          >
            <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
            <p className="text-lg mb-1">{exp.company}</p>
            <p className="text-sm opacity-75 mb-2">{exp.period}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
