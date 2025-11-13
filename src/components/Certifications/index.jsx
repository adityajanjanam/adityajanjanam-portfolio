import { motion } from "framer-motion";
import * as React from "react";
import { FaAward, FaCalendar, FaCertificate } from "react-icons/fa";

import { certifications } from "../../data/certificationsData";

const Certifications = () => {
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
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaCertificate className="text-5xl text-purple-500" />
            <h1 className="text-5xl md:text-6xl font-extrabold gradient-text">
              Certifications
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications and training programs completed to enhance technical expertise
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="group relative"
            >
              {/* Glowing background effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              
              {/* Card Content */}
              <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl overflow-hidden border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 h-full flex flex-col">
                {/* Certificate Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Floating badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-purple-600/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                      <FaAward className="text-yellow-400" />
                      <span className="text-white font-semibold text-sm">Certified</span>
                    </div>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-purple-400 mb-3">
                    <FaCertificate className="text-sm" />
                    <span className="font-semibold">{cert.issuer}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <FaCalendar className="text-sm" />
                    <span>{cert.date}</span>
                  </div>

                  <p className="text-gray-300 mb-6 flex-1">
                    {cert.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-purple-300 hover:border-purple-500/60 transition-colors duration-300"
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
