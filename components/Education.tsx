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
      subjects: ["Software Engineering", "DBMS", "Web Technologies", "Cloud Computing"],
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
      color: "from-orange-500 to-yellow-500"
    },
    {
      name: "Android Studio Essential Training",
      issuer: "LinkedIn Learning",
      icon: <FaCertificate />,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Career Essentials in Generative AI",
      issuer: "Microsoft and LinkedIn",
      icon: <FaCertificate />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Introduction to Cloud Computing for IT Pros",
      issuer: "LinkedIn Learning (2022)",
      icon: <FaCertificate />,
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section id="education" className="section-padding bg-slate-900" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto"></div>
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
                className="relative pl-8 border-l-2 border-blue-500"
              >
                <div className="absolute -left-4 top-0 bg-blue-500 rounded-full p-2 text-white">
                  {edu.icon}
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                  <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                  <p className="text-blue-400 font-medium mb-2">{edu.institution}</p>
                  <p className="text-gray-400 mb-4">{edu.duration}</p>
                  {edu.cgpa && (
                    <p className="text-emerald-400 font-semibold mb-4">CGPA: {edu.cgpa}</p>
                  )}
                  {edu.subjects && (
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subject, i) => (
                        <span
                          key={i}
                          className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
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
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className={`text-3xl p-3 bg-gradient-to-r ${cert.color} rounded-lg text-white flex-shrink-0`}>
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {cert.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
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
