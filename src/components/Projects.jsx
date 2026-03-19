import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolio'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Projects = () => {
  const { projects } = portfolioData

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
          <p className="text-slate-400 text-lg">Some of my development work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all flex flex-col h-full"
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
                
                {/* Fallback Gradient (Jodi image na thake ba load na hoy) */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient || 'from-primary/40 to-secondary/40'} flex items-center justify-center`}
                  style={{ display: project.image ? 'none' : 'flex' }}
                >
                   <div className="text-center p-4">
                      <h3 className="text-white text-xl font-bold">{project.title}</h3>
                      <p className="text-white/70 text-xs mt-1 uppercase tracking-widest">{project.category}</p>
                   </div>
                </div>

                {/* Hover Overlay with Category */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <span className="bg-slate-900/80 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border border-white/10">
                     {project.category}
                   </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-slate-300 font-medium"
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
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg text-xs font-semibold shadow-lg shadow-primary/20 transition-all"
                  >
                    <FaExternalLinkAlt size={12} /> Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 glass-effect hover:bg-white/10 rounded-lg text-slate-300 text-xs transition-colors"
                  >
                    <FaGithub size={14} /> GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects