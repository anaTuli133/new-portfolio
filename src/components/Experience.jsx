import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

const Experience = () => {
  const { experience } = portfolioData

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-slate-400 text-lg">My journey in the tech industry</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8 pb-12 border-l-2 border-primary/30 last:pb-0"
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px] shadow-lg shadow-primary/50"></div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-effect rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                <p className="text-accent font-semibold mb-1">{exp.company}</p>
                <p className="text-slate-400 text-sm mb-4">{exp.period} | {exp.location}</p>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-slate-300 flex gap-2">
                      <span className="text-primary">▹</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
