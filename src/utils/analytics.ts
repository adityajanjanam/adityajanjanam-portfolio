import ReactGA from "react-ga4";

// Initialize Google Analytics
// Replace 'G-XXXXXXXXXX' with your actual Google Analytics 4 Measurement ID
// Get your ID from: https://analytics.google.com/
const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID || "G-XXXXXXXXXX";

export const initGA = () => {
  // Only initialize in production
  if (process.env.NODE_ENV === "production" && TRACKING_ID !== "G-XXXXXXXXXX") {
    ReactGA.initialize(TRACKING_ID, {
      gaOptions: {
        anonymizeIp: true, // Anonymize IP for GDPR compliance
      },
    });
    console.log("Google Analytics initialized");
  } else {
    console.log("Google Analytics not initialized (development mode or no tracking ID)");
  }
};

// Track page views
export const trackPageView = (path: string, title?: string) => {
  if (process.env.NODE_ENV === "production" && TRACKING_ID !== "G-XXXXXXXXXX") {
    ReactGA.send({
      hitType: "pageview",
      page: path,
      title: title || document.title,
    });
  }
};

// Track custom events
export const trackEvent = (
  category: string,
  action: string,
  label?: string,
  value?: number
) => {
  if (process.env.NODE_ENV === "production" && TRACKING_ID !== "G-XXXXXXXXXX") {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent("Button", "Click", `${buttonName} - ${location}`);
};

// Track form submissions
export const trackFormSubmit = (formName: string, success: boolean) => {
  trackEvent("Form", success ? "Submit Success" : "Submit Error", formName);
};

// Track file downloads
export const trackDownload = (fileName: string) => {
  trackEvent("Download", "File", fileName);
};

// Track navigation
export const trackNavigation = (from: string, to: string) => {
  trackEvent("Navigation", "Tab Change", `${from} to ${to}`);
};

// Track social media clicks
export const trackSocialClick = (platform: string, action = "Click") => {
  trackEvent("Social Media", action, platform);
};

// Track project views
export const trackProjectView = (projectName: string) => {
  trackEvent("Project", "View", projectName);
};

// Track external links
export const trackExternalLink = (url: string, label?: string) => {
  trackEvent("External Link", "Click", label || url);
};
