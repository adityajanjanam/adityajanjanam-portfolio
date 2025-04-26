import React from 'react';

interface HomeProps {
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ setActiveTab, isDarkMode }) => {
  return (
    <div className={`home ${isDarkMode ? 'dark' : 'light'}`}>
      <h1>Welcome to My Portfolio</h1>
      <div style={{ fontSize: '2rem', color: 'red', background: 'yellow', padding: '2rem', margin: '2rem 0' }}>
        DEBUG: You should see Testimonials and BlogList sections below this box. If not, scroll down or check for layout issues.
      </div>
      <div style={{ height: '600px' }} />
      {/* Add your home content here */}
    </div>
  );
};

export default Home; 