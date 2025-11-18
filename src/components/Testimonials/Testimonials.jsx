/* eslint-disable */
import { motion } from "framer-motion";
import * as React from "react";
import { useState, useMemo } from "react";
import { FaLinkedin, FaQuoteLeft, FaSearch, FaFilter, FaUsers, FaBriefcase, FaCalendar, FaStar } from "react-icons/fa";

import { testimonials } from "../../data/testimonials";

const Testimonials = ({ isDarkMode = false }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRelationship, setSelectedRelationship] = useState("All");
  const [selectedYear, setSelectedYear] = useState("All Years");

  // Calculate statistics
  const stats = useMemo(() => {
    const totalTestimonials = testimonials.length;
    const relationships = new Set(testimonials.map(t => t.relationship)).size;
    const companies = new Set(testimonials.map(t => t.company).filter(Boolean)).size;
    const years = new Set(testimonials.map(t => {
      const year = t.date.match(/\d{4}/);
      return year ? year[0] : null;
    }).filter(Boolean)).size;

    return {
      totalTestimonials,
      relationships,
      companies,
      years
    };
  }, []);

  // Get unique relationships for filter
  const relationships = useMemo(() => {
    const unique = new Set(testimonials.map(t => t.relationship));
    return ["All", ...Array.from(unique).sort()];
  }, []);

  // Get unique years for filter
  const years = useMemo(() => {
    const yearSet = new Set();
    testimonials.forEach(t => {
      const year = t.date.match(/\d{4}/);
      if (year) yearSet.add(year[0]);
    });
    return ["All Years", ...Array.from(yearSet).sort((a, b) => b - a)];
  }, []);

  // Filter testimonials
  const filteredTestimonials = useMemo(() => {
    return testimonials.filter(testimonial => {
      // Search filter
      const matchesSearch = searchQuery === "" || 
        testimonial.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        testimonial.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        testimonial.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        testimonial.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        testimonial.relationship.toLowerCase().includes(searchQuery.toLowerCase());

      // Relationship filter
      const matchesRelationship = selectedRelationship === "All" || 
        testimonial.relationship === selectedRelationship;

      // Year filter
      const matchesYear = selectedYear === "All Years" || 
        testimonial.date.includes(selectedYear);

      return matchesSearch && matchesRelationship && matchesYear;
    });
  }, [searchQuery, selectedRelationship, selectedYear]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            Authentic recommendations from colleagues, classmates, and industry professionals
          </p>
        </motion.div>

        {/* Statistics Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
        >
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className={`p-6 rounded-2xl backdrop-blur-md shadow-2xl ${
              isDarkMode 
                ? "bg-gradient-to-br from-blue-600/30 via-indigo-600/20 to-purple-600/30 border border-blue-500/30" 
                : "bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 border-2 border-blue-300"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm font-medium ${isDarkMode ? "text-blue-300" : "text-blue-700"}`}>
                  Total Testimonials
                </p>
                <p className={`text-4xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent`}>
                  {stats.totalTestimonials}
                </p>
              </div>
              <FaStar className={`text-4xl ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className={`p-6 rounded-2xl backdrop-blur-md shadow-2xl ${
              isDarkMode 
                ? "bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-rose-600/30 border border-purple-500/30" 
                : "bg-gradient-to-br from-purple-100 via-pink-50 to-rose-100 border-2 border-purple-300"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm font-medium ${isDarkMode ? "text-purple-300" : "text-purple-700"}`}>
                  Relationships
                </p>
                <p className={`text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent`}>
                  {stats.relationships}
                </p>
              </div>
              <FaUsers className={`text-4xl ${isDarkMode ? "text-purple-400" : "text-purple-600"}`} />
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className={`p-6 rounded-2xl backdrop-blur-md shadow-2xl ${
              isDarkMode 
                ? "bg-gradient-to-br from-emerald-600/30 via-teal-600/20 to-cyan-600/30 border border-emerald-500/30" 
                : "bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 border-2 border-emerald-300"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm font-medium ${isDarkMode ? "text-emerald-300" : "text-emerald-700"}`}>
                  Companies
                </p>
                <p className={`text-4xl font-bold bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent`}>
                  {stats.companies}
                </p>
              </div>
              <FaBriefcase className={`text-4xl ${isDarkMode ? "text-emerald-400" : "text-emerald-600"}`} />
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className={`p-6 rounded-2xl backdrop-blur-md shadow-2xl ${
              isDarkMode 
                ? "bg-gradient-to-br from-amber-600/30 via-orange-600/20 to-red-600/30 border border-amber-500/30" 
                : "bg-gradient-to-br from-amber-100 via-orange-50 to-red-100 border-2 border-amber-300"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-sm font-medium ${isDarkMode ? "text-amber-300" : "text-amber-700"}`}>
                  Years Active
                </p>
                <p className={`text-4xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent`}>
                  {stats.years}
                </p>
              </div>
              <FaCalendar className={`text-4xl ${isDarkMode ? "text-amber-400" : "text-amber-600"}`} />
            </div>
          </motion.div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8 space-y-4"
        >
          {/* Search Bar */}
          <div className="relative">
            <FaSearch className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
              isDarkMode ? "text-gray-500" : "text-gray-400"
            }`} />
            <input
              type="text"
              placeholder="Search by name, role, company, or content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 transition-colors ${
                isDarkMode
                  ? "bg-gray-800 border-gray-700 text-white placeholder-gray-500 focus:border-cyan-500"
                  : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:border-blue-500"
              } outline-none`}
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 flex-1 min-w-[200px]">
              <FaFilter className={isDarkMode ? "text-cyan-400" : "text-blue-600"} />
              <select
                value={selectedRelationship}
                onChange={(e) => setSelectedRelationship(e.target.value)}
                className={`flex-1 px-4 py-2 rounded-lg border-2 transition-colors ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 text-white focus:border-cyan-500"
                    : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                } outline-none`}
              >
                {relationships.map(rel => (
                  <option key={rel} value={rel}>{rel}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2 flex-1 min-w-[200px]">
              <FaCalendar className={isDarkMode ? "text-cyan-400" : "text-blue-600"} />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className={`flex-1 px-4 py-2 rounded-lg border-2 transition-colors ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 text-white focus:border-cyan-500"
                    : "bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                } outline-none`}
              >
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Showing {filteredTestimonials.length} of {testimonials.length} testimonials
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="space-y-6">
          {filteredTestimonials.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-center py-12 rounded-lg ${
                isDarkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <p className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                No testimonials found matching your criteria
              </p>
            </motion.div>
          ) : (
            filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ delay: 0.05 * index, duration: 0.3 }}
                className={`p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all ${
                  isDarkMode
                    ? "bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700"
                    : "bg-gradient-to-br from-white to-gray-50 border border-gray-200"
                }`}
              >
                <div className="flex items-start mb-6">
                  <span
                    className={`text-4xl mr-4 ${
                      isDarkMode ? "text-cyan-400" : "text-blue-600"
                    }`}
                  >
                    <FaQuoteLeft />
                  </span>
                  <div className="flex-1">
                    <h3
                      className={`text-2xl font-bold ${
                        isDarkMode ? "text-cyan-400" : "text-blue-600"
                      }`}
                    >
                      {testimonial.name}
                    </h3>
                    <p
                      className={`text-base mt-1 ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {testimonial.role}
                    </p>
                    {testimonial.company && (
                      <p
                        className={`text-sm mt-1 flex items-center gap-2 ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        <FaBriefcase className="text-xs" />
                        {testimonial.company}
                      </p>
                    )}
                    <div className="flex items-center gap-4 mt-2">
                      <span
                        className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                          isDarkMode
                            ? "bg-gradient-to-r from-purple-600/40 via-pink-600/30 to-rose-600/40 text-purple-200 border border-purple-500/30"
                            : "bg-gradient-to-r from-purple-100 via-pink-50 to-rose-100 text-purple-700 border border-purple-300"
                        }`}
                      >
                        {testimonial.relationship}
                      </span>
                      <span
                        className={`text-xs ${
                          isDarkMode ? "text-gray-500" : "text-gray-500"
                        }`}
                      >
                        {testimonial.date}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`text-3xl ${
                      isDarkMode ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    <FaLinkedin />
                  </span>
                </div>

                <p
                  className={`text-base leading-relaxed italic ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </motion.div>
            ))
          )}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={`mt-12 text-center p-6 rounded-xl ${
            isDarkMode
              ? "bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700"
              : "bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200"
          }`}
        >
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            All testimonials are authentic LinkedIn recommendations from professionals who have worked or studied with me.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
