import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

const Skills = () => {
  const { skills } = portfolioData

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg">Technologies and tools I work with</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-effect rounded-2xl p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all border border-white/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{skill.icon}</span>
                <h3 className="text-xl font-semibold text-white">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(139, 92, 246, 0.2)", 
                      borderColor: "rgba(56, 189, 248, 0.5)", 
                      color: "#38bdf8"
                    }}
                    className="px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-md text-sm text-sky-300 transition-all cursor-default font-medium"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills