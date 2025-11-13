import { send as sendEmail } from "@emailjs/browser";
import { motion } from "framer-motion";
import * as React from "react";
import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

import LinktreeIcon from "./LinktreeIcon";

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      // EmailJS configuration
      const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_apfr53b";
      const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_ny54bcd";
      const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "pZfwV-LMNWwY10V98";

      await sendEmail(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          title: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try emailing directly at janjanamaditya@gmail.com");
      console.error("EmailJS Error:", error);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "janjanamaditya@gmail.com",
      link: "mailto:janjanamaditya@gmail.com",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: "Waterloo, Ontario, Canada",
      link: "https://www.google.com/maps/place/Waterloo,+ON",
    },
    {
      icon: FaPhone,
      label: "Availability",
      value: "Open to opportunities",
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/adityajanjanam",
      color: isDarkMode ? "hover:text-purple-400" : "hover:text-purple-600",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/janjanamaditya",
      color: isDarkMode ? "hover:text-blue-400" : "hover:text-blue-600",
    },
    {
      name: "Linktree",
      icon: LinktreeIcon,
      url: "https://linktr.ee/adityajanjanam",
      color: isDarkMode ? "hover:text-green-400" : "hover:text-green-600",
    },
  ];

  return (
    <div
      className={`min-h-screen p-8 ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 to-black text-white"
          : "bg-gradient-to-br from-white to-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-4xl font-extrabold mb-4 ${
              isDarkMode ? "text-cyan-400" : "text-blue-600"
            }`}
          >
            Let&apos;s Connect
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Have a question or want to work together? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3
              className={`text-2xl font-bold mb-6 ${
                isDarkMode ? "text-cyan-300" : "text-blue-700"
              }`}
            >
              Get in Touch
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`flex items-start gap-4 p-4 rounded-xl border ${
                    isDarkMode
                      ? "bg-gray-800/50 border-gray-700"
                      : "bg-white border-gray-200 shadow-md"
                  }`}
                >
                  <div
                    className={`text-2xl ${
                      isDarkMode ? "text-cyan-400" : "text-blue-600"
                    }`}
                  >
                    <Icon />
                  </div>
                  <div>
                    <p
                      className={`text-sm font-semibold mb-1 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${
                          isDarkMode
                            ? "text-cyan-300 hover:text-cyan-400"
                            : "text-blue-600 hover:text-blue-700"
                        } transition-colors`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p
                        className={`${
                          isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4
                className={`text-xl font-bold mb-4 ${
                  isDarkMode ? "text-cyan-300" : "text-blue-700"
                }`}
              >
                Connect on Social Media
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-xl border transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gray-800 border-gray-700 text-gray-300"
                        : "bg-white border-gray-200 text-gray-700 shadow-md"
                    } ${social.color}`}
                    title={social.name}
                  >
                    <span className="text-2xl"><Icon /></span>
                  </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Download Resume */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8"
            >
              <a
                href="/Aditya_Janjanam_Resume.docx"
                download
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:scale-105 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className={`p-8 rounded-2xl border ${
              isDarkMode
                ? "bg-gray-800/50 border-gray-700"
                : "bg-white border-gray-200 shadow-xl"
            }`}
          >
            <h3
              className={`text-2xl font-bold mb-6 ${
                isDarkMode ? "text-cyan-300" : "text-blue-700"
              }`}
            >
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 rounded-lg border transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gray-900 border-gray-700 text-white focus:border-cyan-500"
                      : "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500"
                  } focus:outline-none focus:ring-2 ${
                    isDarkMode ? "focus:ring-cyan-500/50" : "focus:ring-blue-500/50"
                  }`}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 rounded-lg border transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gray-900 border-gray-700 text-white focus:border-cyan-500"
                      : "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500"
                  } focus:outline-none focus:ring-2 ${
                    isDarkMode ? "focus:ring-cyan-500/50" : "focus:ring-blue-500/50"
                  }`}
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 rounded-lg border transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gray-900 border-gray-700 text-white focus:border-cyan-500"
                      : "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500"
                  } focus:outline-none focus:ring-2 ${
                    isDarkMode ? "focus:ring-cyan-500/50" : "focus:ring-blue-500/50"
                  }`}
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full p-3 rounded-lg border transition-all duration-300 resize-none ${
                    isDarkMode
                      ? "bg-gray-900 border-gray-700 text-white focus:border-cyan-500"
                      : "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500"
                  } focus:outline-none focus:ring-2 ${
                    isDarkMode ? "focus:ring-cyan-500/50" : "focus:ring-blue-500/50"
                  }`}
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                  isDarkMode
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                } shadow-lg hover:scale-105 transform`}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-center"
                >
                  ✓ Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-center text-sm"
                >
                  {errorMessage}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export { Contact };
