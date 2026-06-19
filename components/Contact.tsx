'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "dhandedevendra4774@gmail.com",
      link: "mailto:dhandedevendra4774@gmail.com"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+91 9322643609",
      link: "tel:+919322643609"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Pune, Maharashtra",
      link: null
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "devendra-dhande",
      link: "https://www.linkedin.com/in/devendra-dhande-6826681b8/"
    }
  ]

  return (
    <section id="contact" className="section-padding ambient-bg relative" ref={ref}>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm currently seeking opportunities in Cloud Support, DevOps, and Infrastructure roles. Feel free to reach out if you'd like to connect!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4 glass-neu-card p-4 rounded-xl"
              >
                <div className="text-2xl text-cyan-400 glass-neu-icon p-3 rounded-xl">
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">{info.title}</p>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium text-sm"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white font-medium text-sm">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/devendra-dhande-6826681b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-neu-icon p-4 rounded-xl text-gray-400 hover:text-cyan-400"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-neu-icon p-4 rounded-xl text-gray-400 hover:text-cyan-400"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-neu-card p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-neu-input rounded-xl text-white placeholder-gray-500"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium text-sm">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-neu-input rounded-xl text-white placeholder-gray-500"
                  placeholder="xxxxx@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium text-sm">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 glass-neu-input rounded-xl text-white placeholder-gray-500 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full glass-neu-btn bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white font-semibold py-3 px-6 rounded-xl"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
