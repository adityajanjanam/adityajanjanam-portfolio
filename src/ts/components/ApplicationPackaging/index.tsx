import React from "react";

import { ApplicationPackagingProps } from "../../types";
import PageLayout from "../Layout/PageLayout";
import { useTheme } from "../Theme/ThemeContext";

const ApplicationPackaging: React.FC<ApplicationPackagingProps> = ({
  setActiveTab,
}) => {
  const { isDarkMode } = useTheme();

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Application Packaging</h2>
        {/* Add your application packaging content here */}
      </div>
    </PageLayout>
  );
};

export default ApplicationPackaging;
