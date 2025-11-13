import { motion } from "framer-motion";
import * as React from "react";
import { FaAward, FaCalendar, FaMedal, FaTrophy } from "react-icons/fa";

import { awards } from "../../data/awardsData";

const Awards = () => {
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Technical Excellence":
        return <FaMedal className="text-yellow-400" />;
      case "Innovation":
        return <FaTrophy className="text-purple-400" />;
      case "Competition":
        return <FaAward className="text-blue-400" />;
      case "Community":
        return <FaAward className="text-green-400" />;
      default:
        return <FaAward className="text-pink-400" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Technical Excellence":
        return "from-yellow-600 to-orange-600";
      case "Innovation":
        return "from-purple-600 to-pink-600";
      case "Competition":
        return "from-blue-600 to-cyan-600";
      case "Community":
        return "from-green-600 to-teal-600";
      default:
        return "from-pink-600 to-rose-600";
    }
  };

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
            <FaTrophy className="text-5xl text-yellow-500" />
            <h1 className="text-5xl md:text-6xl font-extrabold gradient-text">
              Honors & Awards
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognition of achievements, technical excellence, and contributions to the community
          </p>
        </motion.div>

        {/* Awards Timeline */}
        <div className="space-y-8">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="group relative"
            >
              {/* Glowing background effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${getCategoryColor(award.category)} rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500`}></div>
              
              {/* Card Content */}
              <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl overflow-hidden border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                  {/* Award Image */}
                  <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent z-10"></div>
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className={`bg-gradient-to-r ${getCategoryColor(award.category)} px-4 py-2 rounded-full flex items-center gap-2 shadow-lg backdrop-blur-sm`}>
                        {getCategoryIcon(award.category)}
                        <span className="text-white font-semibold text-sm">{award.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Award Details */}
                  <div className="md:col-span-2 flex flex-col justify-center">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="mt-1">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${getCategoryColor(award.category)} flex items-center justify-center shadow-lg`}>
                          <FaTrophy className="text-white text-xl" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                          {award.title}
                        </h3>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400 mb-4">
                          <div className="flex items-center gap-2">
                            <FaMedal className="text-purple-400" />
                            <span className="font-semibold text-purple-400">{award.organization}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaCalendar className="text-sm" />
                            <span>{award.date}</span>
                          </div>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed">
                          {award.description}
                        </p>
                      </div>
                    </div>
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
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 backdrop-blur-xl rounded-2xl p-8 border border-yellow-500/30 text-center">
            <FaTrophy className="text-5xl text-yellow-400 mx-auto mb-4" />
            <div className="text-4xl font-extrabold gradient-text mb-2">
              {awards.length}
            </div>
            <div className="text-gray-300">Total Awards</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/30 text-center">
            <FaMedal className="text-5xl text-purple-400 mx-auto mb-4" />
            <div className="text-4xl font-extrabold gradient-text mb-2">
              {awards.filter(a => a.category === "Technical Excellence" || a.category === "Innovation").length}
            </div>
            <div className="text-gray-300">Technical Awards</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/30 text-center">
            <FaAward className="text-5xl text-blue-400 mx-auto mb-4" />
            <div className="text-4xl font-extrabold gradient-text mb-2">
              {awards.filter(a => a.category === "Competition").length}
            </div>
            <div className="text-gray-300">Competition Wins</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 backdrop-blur-xl rounded-2xl p-8 border border-green-500/30 text-center">
            <FaAward className="text-5xl text-green-400 mx-auto mb-4" />
            <div className="text-4xl font-extrabold gradient-text mb-2">
              {awards.filter(a => a.category === "Community").length}
            </div>
            <div className="text-gray-300">Community Impact</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Awards;
