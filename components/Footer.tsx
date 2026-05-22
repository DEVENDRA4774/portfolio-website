'use client'

import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-cyan-500/10">
      <div className="absolute inset-0 bg-gradient-to-t from-[#060a14] to-[#0a0f1e]"></div>
      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-500 flex items-center justify-center gap-2 text-sm">
            Made with <FaHeart className="text-cyan-500/70" /> by{' '}
            <span className="gradient-text font-semibold">Devendra Dhande</span>
          </p>
          <p className="text-gray-600 text-xs mt-2">
            © {currentYear} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
