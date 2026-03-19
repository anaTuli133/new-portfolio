import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'

const Activities = () => {
  const { activities } = portfolioData

  return (
    <section id="activities" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Extra-Curricular Activities</span>
          </h2>
          <p className="text-slate-400 text-lg">Leadership roles and community involvement</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all"
            >
              <div className="text-5xl mb-4">{activity.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{activity.title}</h3>
              <p className="text-sky-400 italic mb-4">{activity.organization}</p>
              <p className="text-slate-400 text-sm mb-4">{activity.period}</p>
              <ul className="space-y-2">
                {activity.description.map((desc, i) => (
                  <li key={i} className="text-slate-300 text-sm flex gap-2">
                    <span className="text-primary">▹</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Activities
