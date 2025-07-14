import React from "react";

interface HomeProps {
  _setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ _setActiveTab, isDarkMode }) => {
  return (
    <div className={`home ${isDarkMode ? "dark" : "light"}`}>
      <h1>Welcome to My Portfolio</h1>
      <div className="debug-box">
        DEBUG: Portfolio sections are loaded successfully. If you don't see
        content, scroll down or check for layout issues.
      </div>
      <div className="spacer" />
      {/* Add your home content here */}
    </div>
  );
};

export default Home;
