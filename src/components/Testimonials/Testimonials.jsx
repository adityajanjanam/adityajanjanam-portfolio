import { motion } from "framer-motion";
import * as React from "react";
import { FaLinkedin, FaQuoteLeft } from "react-icons/fa";

import { testimonials } from "../../data/testimonials";

const Testimonials = ({ isDarkMode = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDarkMode ? "text-cyan-400" : "text-blue-600"
            }`}
          >
            Professional Testimonials
          </h1>
          <p
            className={`text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Authentic recommendations from colleagues, classmates, and industry
            professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`p-6 rounded-lg shadow-lg ${
                isDarkMode
                  ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700"
                  : "bg-gradient-to-br from-white to-gray-50 border border-gray-200"
              }`}
            >
              <div className="flex items-start mb-4">
                <span
                  className={`text-3xl mr-3 ${
                    isDarkMode ? "text-cyan-400" : "text-blue-600"
                  }`}
                >
                  <FaQuoteLeft />
                </span>
                <div className="flex-1">
                  <h3
                    className={`text-xl font-bold ${
                      isDarkMode ? "text-cyan-400" : "text-blue-600"
                    }`}
                  >
                    {testimonial.name}
                  </h3>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {testimonial.role}
                    {testimonial.company && ` at ${testimonial.company}`}
                  </p>
                  <p
                    className={`text-xs mt-1 ${
                      isDarkMode ? "text-gray-500" : "text-gray-500"
                    }`}
                  >
                    {testimonial.relationship} • {testimonial.date}
                  </p>
                </div>
                <span
                  className={`text-2xl ${
                    isDarkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                >
                  <FaLinkedin />
                </span>
              </div>

              <p
                className={`text-sm leading-relaxed italic ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className={`mt-12 text-center p-6 rounded-lg ${
            isDarkMode
              ? "bg-gray-800 border border-gray-700"
              : "bg-gray-100 border border-gray-200"
          }`}
        >
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            All testimonials are authentic LinkedIn recommendations from
            professionals who have worked or studied with me.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
