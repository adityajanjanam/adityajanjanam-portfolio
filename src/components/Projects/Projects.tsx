import React from 'react';

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  return (
    <div className={`projects ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>My Projects</h1>
      {/* Add your projects content here */}
    </div>
  );
};

export default Projects; 