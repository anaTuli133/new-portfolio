import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import { FaExternalLinkAlt, FaGithub, FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Projects = () => {
  const { projects } = portfolioData
  const [showAll, setShowAll] = useState(false);

  const initialDisplayCount = 9;
  const visibleProjects = showAll ? projects : projects.slice(0, initialDisplayCount);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">Some of my development work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {visibleProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ y: -10 }}
                className="glass-effect bg-white dark:bg-slate-900/80 rounded-2xl overflow-hidden shadow-lg dark:shadow-none hover:shadow-2xl hover:shadow-purple-500/20 transition-all border border-slate-300 dark:border-white/10 flex flex-col h-full"
              >
                {/* Project Image Container */}
                <div className="relative h-48 overflow-hidden group">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}

                  {/* Fallback Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient || 'from-sky-500/40 to-purple-500/40'} flex items-center justify-center`}
                    style={{ display: project.image ? 'none' : 'flex' }}
                  >
                    <div className="text-center p-4">
                      <h3 className="text-white text-xl font-bold">{project.title}</h3>
                      <p className="text-white/70 text-xs mt-1 uppercase tracking-widest">{project.category}</p>
                    </div>
                  </div>

                  {/* Hover Overlay (always visible on mobile since there's no hover there; hover-reveal on desktop) */}
                  <div className="absolute inset-0 bg-purple-600/10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
                    <span className="category-badge bg-slate-900/80 text-white px-3 py-1 rounded-full text-[10px] font-semibold backdrop-blur-sm border border-white/10 tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3 text-justify">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-purple-500/10 dark:bg-purple-500/10 border border-purple-500/30 dark:border-purple-500/20 rounded text-[10px] text-purple-700 dark:text-purple-300 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-600 text-white rounded-lg text-[11px] font-bold shadow-lg shadow-sky-500/20 transition-all uppercase tracking-tighter keep-white-text"
                    >
                      <FaExternalLinkAlt size={10} />
                      {index === 8
                        ? "Play Game"
                        : [0,1,2, 7, 10, 11].includes(index)
                          ? "Live Demo"
                          : "View Work"
                      }
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-300 dark:border-transparent rounded-lg text-slate-800 dark:text-slate-300 text-[11px] font-bold transition-colors uppercase tracking-tighter"
                    >
                      <FaGithub size={12} /> GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* SEE MORE / SEE LESS Button */}
        {projects.length > initialDisplayCount && (
          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-sky-500 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/25 transition-all keep-white-text" >
              {showAll ? (
                <>Show Less <FaChevronUp /></>
              ) : (
                <>See More Projects <FaChevronDown /></>
              )}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects