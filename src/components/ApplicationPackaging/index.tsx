import React from 'react';
import { useTheme } from '../Theme/ThemeContext';
import { ApplicationPackagingProps } from '../../types';

const ApplicationPackaging: React.FC<ApplicationPackagingProps> = ({ setActiveTab }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Application Packaging</h2>
        {/* Add your application packaging content here */}
      </div>
    </div>
  );
};

export default ApplicationPackaging; 