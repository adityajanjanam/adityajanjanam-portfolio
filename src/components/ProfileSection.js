import { motion } from 'framer-motion';

// eslint-disable-next-line no-unused-vars
const ProfileSection = () => {
  return (
    <motion.div 
      className="relative w-full max-w-[350px] mx-auto"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-pink-500/20 rounded-[30px] blur-3xl" />
      
      {/* Image Container */}
      <div className="relative h-[500px] w-full rounded-[30px] overflow-hidden 
                    border-2 border-purple-500/20 backdrop-blur-sm
                    bg-gradient-to-b from-purple-900/30 to-transparent">
        <img 
          src="/profile.png" 
          alt="Aditya Janjanam"
          className="h-full w-full object-cover object-center"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
        
        {/* Status Indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-2 
                      bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
          <div className="relative">
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75" />
          </div>
          <span className="text-sm text-white">Available for hire</span>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-0 inset-x-0 p-6 
                      bg-gradient-to-t from-black/80 to-transparent">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold">Aditya Janjanam</h3>
              <p className="text-gray-300 text-sm">Full Stack Developer</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-500 p-2 rounded-full text-white 
                       hover:bg-purple-600 transition-colors"
              onClick={() => window.location.href = 'mailto:adityajanjanam@gmail.com'}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 flex flex-col gap-4">
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-white/10 backdrop-blur-sm rounded-full
                     hover:bg-white/20 transition-colors"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 bg-white/10 backdrop-blur-sm rounded-full
                     hover:bg-white/20 transition-colors"
            onClick={() => {/* Add share functionality */}}
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}; 