import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaCode, FaInstagram } from 'react-icons/fa'
import { portfolioData } from '../data/portfolio'

const Hero = () => {
  const { personal } = portfolioData

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Grid-e mobile-e text upore thakbe (order-last/first diye handle kora jay) */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left order-2 md:order-1" // Mobile-e center, desktop-e left
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-7xl font-bold mb-4"
            >
              <span className="gradient-text">{personal.name}</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-4xl text-slate-300 mb-6"
            >
              {personal.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0"
            >
              {personal.description}
            </motion.p>

            {/* Buttons Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-8" // justify-center added
            >
              <a 
                href="/cv/Anamika-Saha-CV.pdf" 
                download="Anamika_Saha_CV.pdf"
                className="btn-primary text-sm md:text-base"
              >
                Download CV
              </a>
              <a href="#projects" className="btn-secondary text-sm md:text-base">
                View Projects
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex justify-center md:justify-start gap-4" // justify-center added
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
                  className="w-10 h-10 md:w-12 md:h-12 glass-effect rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors text-primary text-xl md:text-2xl"
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

{/* Right Side - Profile Image (Now set to order-2 for mobile) */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative flex justify-center order-2 md:order-2 mt-12 md:mt-0" 
>
  <div className="relative w-64 h-64 md:w-96 md:h-96">
    <motion.div
      animate={{
        boxShadow: [
          '0 0 40px rgba(34, 211, 238, 0.3)', // Cyan glow
          '0 0 60px rgba(139, 92, 246, 0.3)',
          '0 0 40px rgba(34, 211, 238, 0.3)',
        ],
      }}
      transition={{ duration: 4, repeat: Infinity }}
      className="w-full h-full rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1"
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

    {/* Classy Floating Badge */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      className="absolute bottom-5 -right-2 md:bottom-10 md:-right-5 glass-effect rounded-2xl p-3 md:p-4 shadow-xl border-cyan-500/30"
    >
      <p className="text-cyan-400 font-bold tracking-wider uppercase text-[10px] md:text-xs">Innovative</p>
      <p className="text-slate-300 font-medium text-sm md:text-base italic">Solutions</p>
    </motion.div>
  </div>
</motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero