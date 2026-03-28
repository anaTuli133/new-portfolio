import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Research = () => {
  const { research } = portfolioData

  return (
    <section id="research" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Research & Publications</span>
          </h2>
          <p className="text-slate-400 text-lg">Academic contributions and thesis work</p>
        </motion.div>

        {/* Thesis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-effect rounded-2xl p-8 hover:shadow-xl hover:shadow-purple-500/10 transition-all"
          >
            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2 text-justify">
              🎓 Thesis
            </h3>
            <h4 className="text-xl text-purple-300 mb-2 font-semibold">{research.thesis.title}</h4>

            <p className="text-sky-400 italic mb-4">{research.thesis.supervisor}</p>

            <p className="text-slate-300 leading-relaxed mb-4 text-justify">{research.thesis.description}</p>
            {/* Thesis Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {research.thesis.tech?.map((tech, i) => (
                <span key={i} className="px-3 py-1 bg-sky-500/10 border border-sky-500/20 rounded-lg text-[10px] text-sky-300 font-medium uppercase tracking-wider">
                  {tech}
                </span>
              ))}
            </div>

            {/* Thesis Button  */}
            <motion.a
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(139, 92, 246, 0.2)",
                borderColor: "rgba(56, 189, 248, 0.5)",
                color: "#38bdf8"
              }}

              href={research.thesis.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-300 transition-all font-medium"
            >
              📖 View Thesis <FaExternalLinkAlt className="text-sm" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Publications */}
        <div className="grid md:grid-cols-3 gap-6">
          {research.publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-2xl p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all"
            >
              <div className={`inline-block px-3 py-1 rounded-xl text-xs font-semibold mb-4 ${pub.status === 'Published'
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                }`}>
                {pub.status}
              </div>
              <h4 className="text-lg font-semibold text-white mb-4 line-clamp-4">{pub.title}</h4>
              <p className="text-slate-400 text-sm mb-5 line-clamp-3">{pub.description}</p>
              {/* Publication Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {pub.tech?.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded-md text-[10px] text-purple-300 font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Publication Button*/}
              <motion.a
                whileHover={pub.link !== '#' ? {
                  scale: 1.05,
                  backgroundColor: "rgba(139, 92, 246, 0.2)",
                  borderColor: "rgba(56, 189, 248, 0.5)",
                  color: "#38bdf8"
                } : {}}
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all font-medium ${pub.link === '#'
                    ? 'bg-slate-700/50 text-slate-500 cursor-not-allowed border border-transparent'
                    : 'bg-purple-500/10 border border-purple-500/20 text-purple-300'
                  }`}
              >
                📄 {index === research.publications.length - 1 ? "View Work" : "Read Paper"}
                {pub.link !== '#' && <FaExternalLinkAlt className="text-xs" />}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Research