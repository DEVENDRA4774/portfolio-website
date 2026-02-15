'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  const strengths = [
    {
      title: "Problem Solving",
      description: "Clear problem-solving approach with attention to detail"
    },
    {
      title: "Continuous Learning",
      description: "Willingness to learn and adapt through hands-on practice"
    },
    {
      title: "Team Collaboration",
      description: "Positive team mindset with clear communication"
    }
  ]

  return (
    <section id="about" className="section-padding bg-slate-800/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">Professional Summary</h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              I am a postgraduate in Computer Science with a disciplined approach to learning and application development. I value structured problem-solving, collaboration, and continuous improvement.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Experienced in working on academic and personal projects that reflect real-world use cases. Currently seeking opportunities as a software developer in a growth-oriented organization where I can contribute my skills and continue learning.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-slate-700/50 px-4 py-2 rounded-lg">
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-medium">Pune, Maharashtra</p>
              </div>
              <div className="bg-slate-700/50 px-4 py-2 rounded-lg">
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-medium">dhandedevendra4774@gmail.com</p>
              </div>
              <div className="bg-slate-700/50 px-4 py-2 rounded-lg">
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white font-medium">+91 9322643609</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Key Strengths</h3>
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 p-6 rounded-lg border border-slate-600/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-blue-400 mb-2">
                  {strength.title}
                </h4>
                <p className="text-gray-300">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
