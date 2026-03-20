import { motion } from 'framer-motion'
import { FaLightbulb, FaBookOpen, FaBullseye, FaComments } from 'react-icons/fa'

const About = () => {
  const qualities = [
    {
      icon: <FaLightbulb className="text-2xl" />,
      title: "Innovative Builder",
      description: "Creating impactful solutions"
    },
    {
      icon: <FaBookOpen className="text-2xl" />,
      title: "Continuous Learner",
      description: "Always exploring new tech"
    },
    {
      icon: <FaBullseye className="text-2xl" />,
      title: "Detail-Oriented",
      description: "Quality-focused development"
    },
    {
      icon: <FaComments className="text-2xl" />,
      title: "Strong Communicator",
      description: "Clear & collaborative"
    }
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-effect rounded-2xl p-8 mb-8"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Hello! I'm Anamika Saha
            </h3>
            
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p className="text-xl italic text-sky-400 border-l-4 border-sky-400 pl-4">
                "I don't just build systems; I seek to understand the core mechanics that power them!"
              </p>
              
              <p>
                I am an emerging Full-Stack Developer & AI/ML Engineer driven by an insatiable curiosity for the architecture of intelligent systems. My approach is rooted in rigorous exploration—moving beyond the surface to master the fundamental principles of scalable software and data-driven solutions.
              </p>
              
              <p>
                From architecting enterprise data pipelines to implementing healthcare AI models, I treat every project as a journey of continuous learning. I thrive on deconstructing complex problems and turning them into efficient, under-the-hood engineered realities.
              </p>
            </div>
          </motion.div>

          {/* Core Qualities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Core Qualities</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {qualities.map((quality, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-effect rounded-xl p-6 flex items-start gap-4 hover:shadow-lg hover:shadow-primary/10 transition-all"
                >
                  <div className="text-primary bg-primary/20 p-3 rounded-lg">
                    {quality.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {quality.title}
                    </h4>
                    <p className="text-slate-400">
                      {quality.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About