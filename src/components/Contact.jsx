import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { portfolioData } from '../data/portfolio'
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCode, FaInstagram, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const { personal } = portfolioData
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.sendForm(
      'service_y6cvghn', // Service ID
      'template_rj3asqm', // Template ID
      form.current,
      'PzRaHsyz_B8wfmqC-' // Public Key
    )
      .then((result) => {
        alert("Message Sent Successfully!");
        e.target.reset();
        setIsSending(false);
      }, (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again.");
        setIsSending(false);
      });
  };

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

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-100 mb-4">
                Let's Work Together!
              </h3>             
               <p className="text-slate-300 text-lg leading-relaxed">
                I'm always excited to discuss new projects, creative ideas or opportunities.
              </p>
            </div>

            <div className="space-y-4">
              <motion.div whileHover={{ x: 10 }} className="glass-effect rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xl font-bold">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <a href={`mailto:${personal.email}`} className="text-slate-400 hover:text-primary transition-colors">
                    {personal.email}
                  </a>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 10 }} className="glass-effect rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-slate-400">{personal.location}</p>
                </div>
              </motion.div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-4 pt-2">
              {[
                { icon: FaLinkedin, link: personal.social.linkedin },
                { icon: FaGithub, link: personal.social.github },
                { icon: FaCode, link: personal.social.leetcode },
                { icon: FaInstagram, link: personal.social.instagram }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ scale: 1.1, y: -5 }}
                  href={social.link}
                  target="_blank"
                  className="w-11 h-11 glass-effect rounded-full flex items-center justify-center text-primary hover:text-sky-400 transition-all border border-white/10"
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8 h-fit"
          >

            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="from_name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  required
                />
                <input
                  name="from_email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  required
                />
              </div>
              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                required
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSending}
                className={`w-full py-4 bg-gradient-to-r from-purple-500 to-secondary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-all shadow-md ${isSending ? 'opacity-50' : ''}`}
              >
                {isSending ? "Sending..." : "Send Message"} <FaPaperPlane className="text-sm" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact