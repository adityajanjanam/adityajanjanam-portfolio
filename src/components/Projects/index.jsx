import React from "react";

const Projects = ({ isDarkMode }) => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website built with React and Tailwind CSS",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      link: "#",
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce application with payment integration",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application",
      technologies: ["React", "Firebase", "TypeScript"],
      link: "#",
    },
  ];

  return (
    <div className={`p-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className={`px-2 py-1 text-xs rounded ${
                    isDarkMode ? "bg-gray-700" : "bg-gray-200"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              className={`inline-block px-4 py-2 rounded text-sm font-medium ${
                isDarkMode
                  ? "bg-blue-600 hover:bg-blue-700 text-white"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
