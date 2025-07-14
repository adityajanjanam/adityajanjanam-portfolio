import React from "react";

const SocialLinks = ({ isDarkMode }) => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com", icon: "🐙" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/janjanamaditya", icon: "💼" },
    { name: "Twitter", url: "https://twitter.com", icon: "🐦" },
    { name: "Email", url: "mailto:contact@example.com", icon: "📧" },
  ];

  return (
    <div className={`p-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
      <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
      <div className="flex space-x-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-lg transition-colors ${
              isDarkMode
                ? "bg-gray-800 hover:bg-gray-700"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            <span className="text-2xl">{link.icon}</span>
            <span className="sr-only">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
