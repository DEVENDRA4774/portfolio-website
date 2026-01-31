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
  FaFigma
} from 'react-icons/fa'
import { SiMysql, SiFlutter, SiJavascript } from 'react-icons/si'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava />, level: 85 },
        { name: "Python", icon: <FaPython />, level: 80 },
        { name: "SQL", icon: <FaDatabase />, level: 75 },
        { name: "JavaScript", icon: <SiJavascript />, level: 70 },
      ]
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "HTML", icon: <FaHtml5 />, level: 90 },
        { name: "CSS", icon: <FaCss3Alt />, level: 85 },
        { name: "WordPress", icon: <FaWordpress />, level: 70 },
      ]
    },
    {
      category: "Mobile & Database",
      skills: [
        { name: "Flutter", icon: <SiFlutter />, level: 75 },
        { name: "MySQL", icon: <SiMysql />, level: 80 },
      ]
    },
    {
      category: "Tools & Cloud",
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 80 },
        { name: "GitHub", icon: <FaGithub />, level: 80 },
        { name: "AWS", icon: <FaAws />, level: 70 },
        { name: "Figma", icon: <FaFigma />, level: 65 },
      ]
    }
  ]

  return (
    <section id="skills" className="section-padding bg-slate-900" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-blue-400 mb-6">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl text-blue-400">{skill.icon}</span>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AWS Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 bg-gradient-to-r from-orange-900/20 to-yellow-900/20 p-8 rounded-xl border border-orange-500/30"
        >
          <div className="flex items-center gap-3 mb-4">
            <FaAws className="text-4xl text-orange-400" />
            <h3 className="text-2xl font-bold text-white">AWS Services</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {['EC2', 'S3', 'IAM', 'RDS', 'Route53'].map((service, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="bg-orange-500/20 text-orange-300 px-4 py-2 rounded-lg border border-orange-500/30 font-medium"
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
