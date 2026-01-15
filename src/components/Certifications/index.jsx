/* eslint-disable */
import { motion } from "framer-motion";
import * as React from "react";
import { FaAward, FaCalendar, FaCertificate, FaSort } from "react-icons/fa";

import { certifications } from "../../data/certificationsData";
import defaultCertificationLogo from "../../assets/logo.svg";

const Certifications = () => {
  const [sortBy, setSortBy] = React.useState("newest");
  const [filteredCerts, setFilteredCerts] = React.useState(certifications);

  // Parse various date formats like "2024", "Nov 2024", "2024-05-01"
  const parseCertDate = (value) => {
    if (!value) return new Date(0);
    if (value instanceof Date) return value;
    if (typeof value === "number") return new Date(value, 0, 1);
    if (typeof value === "string") {
      const lower = value.toLowerCase();
      const monthMap = {
        jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
        jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
      };
      const yearMatch = lower.match(/(19|20)\d{2}/);
      const monthMatch = lower.match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/);
      const year = yearMatch ? parseInt(yearMatch[0], 10) : 1970;
      const month = monthMatch ? monthMap[monthMatch[0]] : 0;
      // Try a normal Date parse as a fallback
      const parsed = new Date(value);
      if (!isNaN(parsed)) return parsed;
      return new Date(year, month, 1);
    }
    return new Date(0);
  };

  // Sort certifications based on selected option
  React.useEffect(() => {
    let sorted = [...certifications];

    switch (sortBy) {
      case "newest":
        sorted.sort((a, b) => parseCertDate(b.date) - parseCertDate(a.date));
        break;
      case "oldest":
        sorted.sort((a, b) => parseCertDate(a.date) - parseCertDate(b.date));
        break;
      case "issuer":
        sorted.sort((a, b) => a.issuer.localeCompare(b.issuer));
        break;
      case "title":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        sorted = certifications;
    }

    setFilteredCerts(sorted);
  }, [sortBy]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-4 py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaCertificate className="text-5xl text-purple-500" />
            <h1 className="text-4xl md:text-5xl font-extrabold gradient-text">
              Certifications
            </h1>
          </div>
          <p className="text-base text-gray-400 max-w-3xl mx-auto">
            Professional certifications and training programs completed to enhance technical expertise
          </p>
        </motion.div>

        {/* Sort Dropdown */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-10 flex justify-center items-center gap-4"
        >
          <FaSort className="text-purple-400 text-xl" />
          <label htmlFor="sort" className="text-gray-300 font-semibold">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-gray-800/80 backdrop-blur-sm border border-purple-500/30 text-white px-6 py-3 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 cursor-pointer hover:border-purple-500/60 text-base font-medium"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="issuer">Issuer (A-Z)</option>
            <option value="title">Title (A-Z)</option>
          </select>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-20">
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="group relative"
            >
              {/* Glowing background effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              
              {/* Card Content */}
              <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 h-full flex flex-col">
                {/* Certificate Image */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = defaultCertificationLogo;
                    }}
                  />
                  {/* Floating badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className="bg-purple-600/90 backdrop-blur-sm px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg">
                      <FaAward className="text-yellow-400 text-lg" />
                      <span className="text-white font-semibold text-base">Certified</span>
                    </div>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-10 flex-1 flex flex-col space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-purple-400">
                    <FaCertificate className="text-base" />
                    <span className="font-semibold text-lg">{cert.issuer}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400">
                    <FaCalendar className="text-base" />
                    <span className="text-base">{cert.date}</span>
                  </div>

                                  <p className="text-gray-300 leading-loose text-base">
                  {cert.description}
                </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 hover:border-purple-500/60 hover:bg-purple-600/30 transition-all duration-300">
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 text-center">
            <div className="text-5xl font-extrabold gradient-text mb-2">
              {certifications.length}+
            </div>
            <div className="text-gray-300 text-lg">Certifications Earned</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/30 text-center">
            <div className="text-5xl font-extrabold gradient-text mb-2">
              {new Set(certifications.flatMap(c => c.skills)).size}+
            </div>
            <div className="text-gray-300 text-lg">Skills Validated</div>
          </div>
          
          <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-xl rounded-2xl p-8 border border-pink-500/30 text-center">
            <div className="text-5xl font-extrabold gradient-text mb-2">
              {new Set(certifications.map(c => c.issuer)).size}+
            </div>
            <div className="text-gray-300 text-lg">Training Providers</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Certifications;
