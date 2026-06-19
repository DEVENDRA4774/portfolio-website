'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCloud, FaDatabase, FaCode } from 'react-icons/fa'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: "Mess Management System",
      description: "Designed and developed a web-based system for managing mess operations, resolving database latency issues and optimizing response time by 15% to deliver a fast and secure administrative experience.",
      technologies: ["Java", "MySQL", "JavaScript", "HTML", "CSS"],
      highlights: [
        "Optimized complex database queries, reducing average response time by 15% and saving user session time",
        "Resolved critical security issues by implementing secure user verification protocols",
        "Streamlined operational workflows, reducing overall data entry and administrative processing time"
      ],
      icon: <FaCode />,
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      title: "Secure Banking System",
      description: "Built a robust desktop banking application emphasizing strict security principles, role-based access control, and transaction safety — resolving synchronization issues and saving transaction processing time.",
      technologies: ["Java", "MySQL", "Swing", "JDBC"],
      highlights: [
        "Implemented secure, role-based authentication mirroring cloud IAM practices to prevent unauthorized access",
        "Optimized query structures and database indexing, saving transaction response time by 10%",
        "Resolved transaction concurrency issues while keeping all critical account operations safe and audited"
      ],
      icon: <FaDatabase />,
      gradient: "from-teal-500 to-emerald-500"
    },
    {
      title: "CloudCanvas-Lite",
      description: "Cloud-themed interactive drawing canvas application hosted on AWS. Configured for fast asset loading, saving visitor download time, and secured using standard cloud security patterns.",
      technologies: ["HTML", "CSS", "JavaScript", "AWS S3"],
      highlights: [
        "Configured Amazon CloudFront CDN, optimizing image/asset delivery and improving load times by 15%",
        "Secured bucket configurations using AWS S3 Bucket Policies to prevent public read/write vulnerability issues",
        "Created an optimized static deployment pipeline, saving deployment setup time for subsequent updates"
      ],
      icon: <FaCloud />,
      gradient: "from-cyan-400 to-blue-500"
    }
  ]

  return (
    <section id="projects" className="section-padding ambient-bg relative" ref={ref}>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass-neu-card rounded-2xl overflow-hidden group"
            >
              <div className={`h-[2px] bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-7">
                <div className="flex items-center gap-4 mb-5 relative z-10">
                  <div className={`text-2xl p-3 bg-gradient-to-r ${project.gradient} rounded-xl text-white glass-neu-icon`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">{project.title}</h3>
                </div>

                <p className="text-gray-400 mb-5 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="mb-5">
                  <h4 className="text-cyan-400 font-semibold mb-3 text-sm uppercase tracking-wider">Key Highlights</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-teal-400 mt-0.5 flex-shrink-0">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="glass-neu-pill px-3 py-1.5 rounded-full text-cyan-300/80 text-xs font-medium tracking-wide"
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
          <p className="text-gray-500 text-lg">
            More cloud & infrastructure projects coming soon! Check my GitHub for updates.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
