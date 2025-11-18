import React, { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return <div className="min-h-screen">{children}</div>;
};

export default PageLayout;
