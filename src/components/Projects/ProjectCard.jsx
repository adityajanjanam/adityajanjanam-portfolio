import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, isDarkMode }) => {
  return (
    <motion.div
      className={`rounded-xl p-6 ${
        isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
      } shadow-lg transition-all duration-300 hover:shadow-xl`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden rounded-lg">
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-48 w-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
        <div className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100`}>
          <div className="flex space-x-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white p-3 text-black transition-transform hover:scale-110"
              >
                <FaGithub size={20} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white p-3 text-black transition-transform hover:scale-110"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            )}
          </div>
        </div>
      </div>

      <h3 className={`mt-4 text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        {project.title}
      </h3>
      
      <p className={`mt-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className={`rounded-full px-3 py-1 text-sm ${
              isDarkMode 
                ? 'bg-gray-700 text-gray-300' 
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard; 