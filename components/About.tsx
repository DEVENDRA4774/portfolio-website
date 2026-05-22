'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCloud, FaServer, FaUsers } from 'react-icons/fa'

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
      title: "Infrastructure Mindset",
      description: "Focus on reliability, uptime, monitoring, and building systems that scale predictably",
      icon: <FaServer className="text-cyan-400" />
    },
    {
      title: "Cloud-First Thinking",
      description: "Leveraging AWS services for scalable, cost-effective, and secure cloud solutions",
      icon: <FaCloud className="text-teal-400" />
    },
    {
      title: "Team Collaboration",
      description: "Clear communication across cross-functional teams, with a focus on documentation and knowledge sharing",
      icon: <FaUsers className="text-cyan-300" />
    }
  ]

  return (
    <section id="about" className="section-padding ambient-bg relative" ref={ref}>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full"></div>
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
              I am a postgraduate in Computer Science with a strong interest in cloud computing, infrastructure management, and DevOps practices. I value structured problem-solving, automation, and continuous improvement in system reliability.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              AWS Certified Cloud Practitioner with hands-on experience in EC2, S3, IAM, RDS, and Route53. Currently seeking opportunities in cloud support, DevOps, and infrastructure roles where I can contribute to building reliable, scalable systems.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="glass-neu-pill px-5 py-3 rounded-xl">
                <p className="text-xs text-gray-400 uppercase tracking-wider">Location</p>
                <p className="text-white font-medium">Pune, Maharashtra</p>
              </div>
              <div className="glass-neu-pill px-5 py-3 rounded-xl">
                <p className="text-xs text-gray-400 uppercase tracking-wider">Email</p>
                <p className="text-white font-medium text-sm">dhandedevendra4774@gmail.com</p>
              </div>
              <div className="glass-neu-pill px-5 py-3 rounded-xl">
                <p className="text-xs text-gray-400 uppercase tracking-wider">Phone</p>
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
                className="glass-neu-card p-6 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="glass-neu-icon p-2 rounded-lg">
                    <span className="text-xl">{strength.icon}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-cyan-400">
                    {strength.title}
                  </h4>
                </div>
                <p className="text-gray-300 pl-12">
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
