import React from "react";

import Footer from "../Footer";
import { useTheme } from "../Theme/ThemeContext";

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${isDarkMode ? "from-[#0f172a] via-[#1e293b] to-[#0a0a23] text-gray-200" : "from-white via-gray-100 to-white text-gray-900"} flex flex-col`}
    >
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 py-8">
        {children}
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default PageLayout;
