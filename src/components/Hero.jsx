import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaCode, FaInstagram } from 'react-icons/fa'
import { portfolioData } from '../data/portfolio'

const Hero = () => {
  const { personal } = portfolioData

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4"
            >
              <span className="gradient-text">{personal.name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl text-slate-300 mb-6"
            >
              {personal.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {personal.description}
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <a
                href="/anamikacv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm md:text-base px-6 py-3 cursor-pointer"
              >
                Download CV
              </a>

              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(139, 92, 246, 0.2)",
                  borderColor: "rgba(56, 189, 248, 0.5)",
                  color: "#38bdf8"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-300 font-medium transition-all text-sm md:text-base inline-block"
              >
                View Projects
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              {[
                { icon: <FaLinkedin />, href: personal.social.linkedin },
                { icon: <FaGithub />, href: personal.social.github },
                { icon: <FaCode />, href: personal.social.leetcode },
                { icon: <FaInstagram />, href: personal.social.instagram }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 glass-effect rounded-full flex items-center justify-center hover:bg-purple-500/20 transition-colors text-purple-400 text-xl md:text-2xl"
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image (Responsive for Tabs) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center order-1 lg:order-2 mt-8 lg:mt-0"
          >
            {/* Image container sizes Tab (w-72) vs Mobile (w-64) vs Desktop (w-96) */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96">
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 40px rgba(34, 211, 238, 0.3)',
                    '0 0 60px rgba(139, 92, 246, 0.3)',
                    '0 0 40px rgba(34, 211, 238, 0.3)',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 via-sky-400 to-purple-600 p-1"
              >
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                  <img
                    src="/profile.png"
                    alt="Anamika Saha"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 18%' }}
                  />
                </div>
              </motion.div>

              {/* Floating Badge  */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-5 -right-2 md:bottom-8 md:-right-4 lg:bottom-10 lg:-right-5 glass-effect bg-[#4a78dc6d] rounded-2xl p-3 md:p-4 shadow-xl border-sky-500/30"
              >
                <p className="text-yellow-300 font-bold tracking-wider uppercase text-[10px] md:text-[11px] lg:text-xs">Innovative</p>
                <p className="text-slate-200 font-medium uppercase text-xs md:text-base lg:text-base">Learner</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero