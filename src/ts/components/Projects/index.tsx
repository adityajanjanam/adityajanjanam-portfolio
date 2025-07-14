import React from "react";

import { ProjectsProps } from "../../types";
import { useTheme } from "../Theme/ThemeContext";

const Projects: React.FC<ProjectsProps> = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        {/* Add your projects content here */}
      </div>
    </div>
  );
};

export default Projects;
