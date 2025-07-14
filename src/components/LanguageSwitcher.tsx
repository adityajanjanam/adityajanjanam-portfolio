import React from "react";

const LanguageSwitcher: React.FC = () => {
  return (
    <div className="language-switcher">
      <label htmlFor="language-select" className="sr-only">
        Select Language
      </label>
      <select
        id="language-select"
        className="p-2 border rounded-md"
        aria-label="Select Language"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
