import React from "react";

const ApplicationPackaging = ({ setActiveTab, isDarkMode }) => {
  return (
    <div className={`p-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
      <h1 className="text-3xl font-bold mb-6">Application Packaging</h1>
      <p className="text-lg mb-4">
        Information about application packaging and deployment strategies.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}
        >
          <h3 className="text-xl font-semibold mb-2">Docker</h3>
          <p>Containerization and deployment strategies using Docker.</p>
        </div>
        <div
          className={`p-4 rounded-lg ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}
        >
          <h3 className="text-xl font-semibold mb-2">CI/CD</h3>
          <p>Continuous Integration and Continuous Deployment pipelines.</p>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPackaging;
