import React from "react";

const ThemeToggle = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className={`fixed top-4 right-4 z-50 p-3 rounded-full transition-colors ${
        isDarkMode
          ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
          : "bg-white text-gray-600 hover:bg-gray-100"
      } shadow-lg`}
      aria-label="Toggle theme"
    >
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
