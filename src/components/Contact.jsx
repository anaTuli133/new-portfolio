 import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCode, FaInstagram } from 'react-icons/fa'

const Contact = () => {
  const { personal } = portfolioData

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-slate-400 text-lg">Let's connect and create something amazing together</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ x: 10 }}
              className="glass-effect rounded-2xl p-6 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-2xl text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Email</h4>
                <a href={`mailto:${personal.email}`} className="text-slate-400 hover:text-primary transition-colors">
                  {personal.email}
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="glass-effect rounded-2xl p-6 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                <FaPhone className="text-2xl text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Phone</h4>
                <a href={`tel:${personal.phone}`} className="text-slate-400 hover:text-primary transition-colors">
                  {personal.phone}
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              className="glass-effect rounded-2xl p-6 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                <FaMapMarkerAlt className="text-2xl text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Location</h4>
                <p className="text-slate-400">{personal.location}</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 glass-effect rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <FaLinkedin className="text-2xl text-primary" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 glass-effect rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <FaGithub className="text-2xl text-primary" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href={personal.social.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 glass-effect rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <FaCode className="text-2xl text-primary" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href={personal.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 glass-effect rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <FaInstagram className="text-2xl text-primary" />
              </motion.a>
            </div>
          </motion.div>

          {/* Message Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together!</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${personal.email}`}
              className="btn-primary inline-block"
            >
              Send Message
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact