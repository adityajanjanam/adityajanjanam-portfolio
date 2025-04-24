import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

interface ContactProps {
  isDarkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('pZfwV-LMNWwY10V98');
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const currentTime = new Date().toLocaleString();
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        time: currentTime
      };

      await emailjs.send(
        'service_apfr53b',
        'template_x7zatfu',
        templateParams
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
    }
  };

  return (
    <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 ${isDarkMode ? 'bg-[#080808] text-gray-200' : 'bg-white text-gray-900'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h2 className={`text-3xl sm:text-4xl font-bold ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'} mb-3`}>
          Contact Me
        </h2>
        <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
          Let's connect and discuss opportunities
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className={`max-w-2xl mx-auto p-6 rounded-2xl
                   ${isDarkMode 
                     ? 'bg-[#1a1a1a] border-gray-700' 
                     : 'bg-white border-gray-200 shadow-lg'}
                   border`}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label 
              htmlFor="name" 
              className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 rounded-lg border
                        ${isDarkMode 
                          ? 'bg-gray-900 border-gray-700 text-gray-200' 
                          : 'bg-gray-50 border-gray-200 text-gray-900'}
                        focus:outline-none focus:ring-2 focus:ring-yellow-500`}
            />
          </div>

          <div>
            <label 
              htmlFor="email" 
              className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2 rounded-lg border
                        ${isDarkMode 
                          ? 'bg-gray-900 border-gray-700 text-gray-200' 
                          : 'bg-gray-50 border-gray-200 text-gray-900'}
                        focus:outline-none focus:ring-2 focus:ring-yellow-500`}
            />
          </div>

          <div>
            <label 
              htmlFor="message" 
              className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className={`w-full px-4 py-2 rounded-lg border
                        ${isDarkMode 
                          ? 'bg-gray-900 border-gray-700 text-gray-200' 
                          : 'bg-gray-50 border-gray-200 text-gray-900'}
                        focus:outline-none focus:ring-2 focus:ring-yellow-500`}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-colors
                      ${isDarkMode 
                        ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' 
                        : 'bg-yellow-500 text-white hover:bg-yellow-600'}
                      disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className={`text-center ${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>
              Message sent successfully!
            </p>
          )}

          {status === 'error' && (
            <p className={`text-center ${isDarkMode ? 'text-red-400' : 'text-red-600'}`}>
              Error sending message. Please try again.
            </p>
          )}
        </form>
      </motion.div>
    </div>
  );
}; 