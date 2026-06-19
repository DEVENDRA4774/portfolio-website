'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaJava,
  FaPython,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaWordpress,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaLinux,
  FaTerminal
} from 'react-icons/fa'
import { SiMysql } from 'react-icons/si'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      category: "Cloud & AWS",
      icon: <FaAws className="text-xl" />,
      skills: [
        { name: "AWS", icon: <FaAws />, level: 85 },
        { name: "Linux", icon: <FaLinux />, level: 60 },
      ]
    },
    {
      category: "DevOps & Tools",
      icon: <FaTerminal className="text-xl" />,
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 80 },
        { name: "GitHub", icon: <FaGithub />, level: 80 },
        { name: "Bash/Shell", icon: <FaTerminal />, level: 50 },
      ]
    },
    {
      category: "Programming & Scripting",
      icon: <FaJava className="text-xl" />,
      skills: [
        { name: "Python", icon: <FaPython />, level: 55 },
        { name: "SQL", icon: <FaDatabase />, level: 50 },
      ]
    },
    {
      category: "Web & Platforms",
      icon: <FaHtml5 className="text-xl" />,
      skills: [
        { name: "HTML", icon: <FaHtml5 />, level: 90 },
        { name: "CSS", icon: <FaCss3Alt />, level: 85 },
        { name: "WordPress", icon: <FaWordpress />, level: 64 },
        { name: "MySQL", icon: <SiMysql />, level: 50 },
      ]
    }
  ]

  const awsServices = [
    'EC2', 'S3', 'IAM', 'RDS', 'Route53',
    'Lambda', 'CloudWatch', 'VPC', 'ELB'
  ]

  return (
    <section id="skills" className="section-padding ambient-bg relative" ref={ref}>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-neu-card p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="glass-neu-icon p-2 rounded-lg">
                  <span className="text-cyan-400">{category.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.category}
                </h3>
              </div>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg text-cyan-400">{skill.icon}</span>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-500 text-sm font-mono">{skill.level}%</span>
                    </div>
                    <div className="neu-track h-2 rounded-full relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-cyan-500 to-teal-400 h-2 rounded-full relative shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AWS Services Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 glass-neu-card p-8 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent"></div>

          <div className="flex items-center gap-3 mb-6">
            <div className="neu-raised p-3 rounded-xl">
              <FaAws className="text-3xl text-amber-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">AWS Services</h3>
              <p className="text-gray-400 text-sm">Hands-on experience with core AWS services</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {awsServices.map((service, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="glass-neu-pill px-4 py-2 rounded-full text-amber-200/90 font-medium text-sm cursor-default hover:shadow-[0_0_15px_rgba(251,191,36,0.2)]"
              >
                {service}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
