import React from "react";

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0a0a23] text-gray-200 flex flex-col">
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 py-8">
      {children}
    </main>
    <footer className="w-full text-center py-4 text-gray-400 text-sm border-t border-gray-800 mt-8">
      © 2025 All rights reserved.
    </footer>
  </div>
);

export default PageLayout;

<div className=""></div>;
