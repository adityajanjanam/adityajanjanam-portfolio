import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="mb-4">
      <label htmlFor="language-select" className="mr-2">Language:</label>
      <select id="language-select" onChange={handleChange} value={i18n.language} className="p-1 rounded">
        <option value="en">English</option>
        <option value="te">తెలుగు</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher; 