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
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
            Thank You for <span className="gradient-text">Visiting!</span>
          </h3>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-6 leading-relaxed">
            I'm always excited to connect with teams and builders. Let's collaborate to design, automate, and secure scalable cloud infrastructure!
          </p>
          <div className="w-12 h-[1px] bg-cyan-500/20 mx-auto mb-4"></div>
          <p className="text-gray-600 text-xs">
            © {currentYear} Devendra Dhande. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
