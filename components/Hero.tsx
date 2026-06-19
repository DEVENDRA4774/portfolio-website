'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import Hero3D from './Hero3D'

const roles = [
  'Cloud Support Engineer',
  'Junior DevOps Engineer',
  'AWS Support Specialist',
  'Infrastructure Support',
  'System Engineer',
  'Platform Support',
]

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    let timeout: NodeJS.Timeout

    if (!isDeleting) {
      if (displayText.length < role.length) {
        timeout = setTimeout(() => {
          setDisplayText(role.slice(0, displayText.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 40)
      } else {
        setIsDeleting(false)
        setCurrentRole((prev) => (prev + 1) % roles.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      <Hero3D />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1e]/90 via-cyan-950/10 to-[#0a0f1e]/90 -z-5"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="text-cyan-400/80 text-lg font-medium tracking-wide">Hello, I'm</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="gradient-text text-glow">Devendra Madhukar Dhande</span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl text-gray-200 mb-2 h-[44px] flex items-center justify-center"
        >
          <span className="text-cyan-300">{displayText}</span>
          <span className="typewriter-cursor"></span>
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-6"
        >
          {['MCA Graduate', 'AWS Certified Cloud Practitioner', 'Cloud & Infra Enthusiast'].map((tag) => (
            <span
              key={tag}
              className="glass-neu-pill px-4 py-1.5 rounded-full text-sm text-cyan-200/80 font-medium"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Passionate about cloud infrastructure, automation, and building
          reliable, scalable systems with modern DevOps practices
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <a
            href="#contact"
            className="glass-neu-btn bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white px-8 py-3 rounded-xl font-medium"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="glass-neu-btn glass-neu-pill px-8 py-3 rounded-xl font-medium text-cyan-300 hover:text-white"
          >
            View Infrastructure Work
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-5"
        >
          <a
            href="https://www.linkedin.com/in/devendra-dhande-6826681b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-neu-icon p-3 rounded-xl text-gray-400 hover:text-cyan-400"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/DEVENDRA4774"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-neu-icon p-3 rounded-xl text-gray-400 hover:text-cyan-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:dhandedevendra4774@gmail.com"
            className="glass-neu-icon p-3 rounded-xl text-gray-400 hover:text-cyan-400"
          >
            <FaEnvelope size={24} />
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-14"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-cyan-400/50"
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
