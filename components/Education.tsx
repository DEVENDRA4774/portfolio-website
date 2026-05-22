'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap, FaCertificate, FaAws } from 'react-icons/fa'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Sri Balaji School of Computer Science, Pune",
      duration: "Aug 2023 – May 2025",
      subjects: ["Cloud Computing", "Software Engineering", "DBMS", "Web Technologies"],
      icon: <FaGraduationCap />
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Dr. D. Y. Patil ACS College, Pune",
      duration: "Aug 2020 – Apr 2023",
      cgpa: "8.29 / 10.0",
      icon: <FaGraduationCap />
    }
  ]

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner (CLF-C02)",
      issuer: "Amazon Web Services",
      icon: <FaAws />,
      gradient: "from-amber-500 to-orange-500",
      featured: true
    },
    {
      name: "Android Studio Essential Training",
      issuer: "LinkedIn Learning",
      icon: <FaCertificate />,
      gradient: "from-teal-500 to-emerald-500",
      featured: false
    },
    {
      name: "Career Essentials in Generative AI",
      issuer: "Microsoft and LinkedIn",
      icon: <FaCertificate />,
      gradient: "from-cyan-500 to-blue-500",
      featured: false
    },
    {
      name: "Introduction to Cloud Computing for IT Pros",
      issuer: "LinkedIn Learning (2022)",
      icon: <FaCertificate />,
      gradient: "from-purple-500 to-violet-500",
      featured: false
    }
  ]

  return (
    <section id="education" className="section-padding ambient-bg relative" ref={ref}>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8">Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 border-l-2 border-cyan-500/30"
              >
                <div className="absolute -left-4 top-0 neu-raised rounded-full p-2 text-cyan-400 border border-cyan-500/20">
                  {edu.icon}
                </div>
                <div className="glass-neu-card p-6 rounded-2xl ml-4">
                  <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                  <p className="text-cyan-400 font-medium mb-2">{edu.institution}</p>
                  <p className="text-gray-400 mb-4">{edu.duration}</p>
                  {edu.cgpa && (
                    <p className="text-teal-400 font-semibold mb-4">CGPA: {edu.cgpa}</p>
                  )}
                  {edu.subjects && (
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subject, i) => (
                        <span
                          key={i}
                          className={`glass-neu-pill px-3 py-1 rounded-lg text-sm ${
                            subject === 'Cloud Computing'
                              ? 'text-cyan-300 border-cyan-500/30'
                              : 'text-gray-300'
                          }`}
                        >
                          {subject === 'Cloud Computing' && '☁️ '}
                          {subject}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className={`glass-neu-card p-6 rounded-2xl cursor-default relative overflow-hidden ${
                  cert.featured ? 'md:col-span-2' : ''
                }`}
              >
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${cert.gradient}`}></div>
                
                <div className="flex items-start gap-4">
                  <div className={`text-3xl p-3 bg-gradient-to-r ${cert.gradient} rounded-xl text-white flex-shrink-0`}>
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    {cert.featured && (
                      <span className="inline-block mt-2 text-xs font-semibold text-amber-300 neu-flat px-3 py-1 rounded-full border border-amber-500/15">
                        ⭐ Featured Certification
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
