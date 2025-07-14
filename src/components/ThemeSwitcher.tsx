import React from "react";

const ThemeSwitcher: React.FC = () => {
  return (
    <div className="theme-switcher">
      <button className="theme-btn light" title="Light Theme">
        ☀️
      </button>
      <button className="theme-btn dark" title="Dark Theme">
        🌙
      </button>
    </div>
  );
};

export default ThemeSwitcher;
