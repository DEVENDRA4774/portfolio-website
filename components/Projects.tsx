'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaJava, FaDatabase, FaCode } from 'react-icons/fa'
import { SiMysql, SiJavascript } from 'react-icons/si'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Mess Management System",
      description: "Designed and developed a comprehensive web-based system for managing mess operations with optimized UI and workflows.",
      technologies: ["Java", "MySQL", "JavaScript", "HTML", "CSS"],
      highlights: [
        "Improved user task completion time through UI optimization",
        "Enhanced system performance with efficient database queries",
        "Streamlined mess operations management"
      ],
      icon: <FaCode />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Secure Banking System",
      description: "Built a robust desktop banking application with comprehensive account and transaction management features.",
      technologies: ["Java", "MySQL", "Swing"],
      highlights: [
        "Implemented secure authentication and authorization",
        "Smooth handling of multiple concurrent user sessions",
        "Complete transaction management system"
      ],
      icon: <FaDatabase />,
      color: "from-emerald-500 to-teal-500"
    }
  ]

  return (
    <section id="projects" className="section-padding bg-slate-800/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`text-4xl p-3 bg-gradient-to-r ${project.color} rounded-lg text-white`}>
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-blue-400 font-semibold mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <span className="text-emerald-400 mt-1">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-slate-800 text-blue-300 px-3 py-1 rounded-full text-sm border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-lg">
            More projects coming soon! Check my GitHub for updates.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
