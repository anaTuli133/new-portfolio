import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

const Experience = () => {
  const { experience } = portfolioData

  return (
    <section id="experience" className="py-20 bg-slate-950/20">
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
                whileHover={{ scale: 1.01 }}
                className="glass-effect rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all border border-white/5"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <p className="text-sky-400 italic font-medium">{exp.company}</p>
                  </div>
                  <p className="text-slate-500 text-sm mt-2 md:mt-0 font-mono">
                    {exp.period} <br className="hidden md:block" /> {exp.location}
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-slate-300 flex gap-3 text-sm leading-relaxed">
                      <span className="text-primary mt-1">▹</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills/Items Section */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {exp.items.map((item, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-white border border-sky-600 rounded-full hover:bg-primary/20 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience