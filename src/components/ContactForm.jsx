import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    submitted: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, submitted: true }));
    // Add your form submission logic here
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto p-6 bg-[#1a1a1a]/50 backdrop-blur-sm rounded-xl border border-purple-500/20"
    >
      {formState.submitted ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center py-12"
        >
          <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-gray-400">I'll get back to you soon.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              className="w-full px-4 py-2 bg-black/20 border border-purple-500/20 rounded-lg
                       text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
              placeholder="Your name"
              value={formState.name}
              onChange={e => setFormState(prev => ({ ...prev, name: e.target.value }))}
            />
          </div>
          {/* Add more form fields */}
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm; 