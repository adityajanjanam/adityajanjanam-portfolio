import React from "react";

const Timeline = ({ isDarkMode }) => {
  const timelineData = [
    {
      year: "2024",
      title: "Senior Developer",
      description: "Leading development teams and architecting solutions",
    },
    {
      year: "2023",
      title: "Software Developer",
      description: "Full-stack development and feature implementation",
    },
    {
      year: "2022",
      title: "Junior Developer",
      description: "Learning and contributing to various projects",
    },
    {
      year: "2020",
      title: "Graduation",
      description: "Completed Computer Science degree",
    },
  ];

  return (
    <div className={`p-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
      <h2 className="text-2xl font-bold mb-6">Timeline</h2>
      <div className="relative">
        {timelineData.map((item, index) => (
          <div key={index} className="flex items-start mb-6">
            <div
              className={`w-4 h-4 rounded-full ${isDarkMode ? "bg-blue-500" : "bg-blue-600"} mt-2`}
            />
            <div className="ml-4 flex-1">
              <div
                className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}
              >
                <div className="font-bold text-blue-500 mb-1">{item.year}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
