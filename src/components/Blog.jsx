import { motion } from 'framer-motion';
import React from 'react';

const Blog = () => {
  return (
    <motion.section
      id="blog"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog posts will be added here */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Coming Soon</h3>
            <p className="text-gray-600">Blog posts will be added here soon.</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Blog; 