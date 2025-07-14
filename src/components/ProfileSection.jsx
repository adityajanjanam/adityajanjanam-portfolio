import React from "react";

const ProfileSection = ({ isDarkMode }) => {
  return (
    <div className={`p-6 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
      <div className="text-center">
        <div className="w-32 h-56 mx-auto mb-4 rounded-full overflow-hidden">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "block";
            }}
          />
          <div
            className={`w-full h-full flex items-center justify-center text-4xl ${
              isDarkMode ? "bg-gray-700" : "bg-gray-300"
            }`}
            style={{ display: "none" }}
          >
            👤
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-2">Aditya Janjanam</h1>
        <p className="text-xl opacity-75 mb-4">Software Developer</p>
        <p className="max-w-2xl mx-auto text-left leading-relaxed">
          Passionate about creating innovative web applications and exploring
          new technologies. I specialize in React, Node.js, and modern web
          development practices.
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;
