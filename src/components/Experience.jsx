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
          <p className="text-slate-600 dark:text-slate-500 text-lg">My journey in the tech industry</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pb-12 last:pb-0"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="experience-card bg-slate-900 dark:bg-slate-900 rounded-2xl p-6 shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl transition-all border border-slate-900 dark:border-white/5"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="experience-title text-2xl font-bold text-white dark:text-white">{exp.title}</h3>
                    <p className="experience-company text-sky-400 dark:text-sky-400 italic font-medium">{exp.company}</p>
                  </div>
                  <p className="experience-meta text-slate-400 dark:text-slate-400 text-sm mt-2 md:mt-0 font-mono">
                    {exp.period}
                    <br />
                    {exp.location}
                  </p>
                </div>

                <ul className="space-y-3 mb-6 text-justify">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="experience-text text-slate-300 dark:text-slate-300 flex gap-3 text-sm leading-relaxed">
                      <span className="experience-bullet text-sky-400 mt-1">▹</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills/Items Section */}
                <div className="experience-divider flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {exp.items.map((item, i) => (
                    <span
                      key={i}
                      className="experience-pill px-3 py-1 text-xs font-medium bg-sky-500/10 text-sky-300 border border-sky-500/30 rounded-md hover:bg-sky-500/20 transition-colors"
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