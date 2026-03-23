import { motion } from 'framer-motion'
import { FaGraduationCap, FaAward } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Ahsanullah University of Science & Technology",
      period: "2021 - 2025",
      details: [
        "Core Competencies: AI/ML, Blockchain, IoT, Full-Stack Development and Data Visualization",
        "Completed thesis on Cardiovascular Disease Prediction using Machine Learning"
      ],
      icon: "🎓"
    },
    {
      degree: "Higher Secondary Certificate (Science)",
      institution: "Viqarunnisa Noon College",
      period: "2018 - 2020",
      gpa: "GPA: 5.00/5.00",
      details: [
        "Developed strong communication and critical thinking skills",
        "Active participation in co-curricular activities"
      ],
      icon: "📚"
    },
    {
      degree: "Secondary School Certificate (Science)",
      institution: "Siddheswari Girls' High School",
      period: "2016 - 2018",
      gpa: "GPA: 5.00/5.00",
      details: [
        "Government Scholarship Recipient",
        "Actively participated in co-curricular activities ",
        "Participated in inter-school competitive debates"
      ],
      icon: "👩🏻‍🏫"
    }
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-slate-400 text-lg">Academic background and qualifications</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-effect rounded-2xl p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all"
            >
              {/* Icon & Period Badge*/}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">{edu.icon}</span>
                <motion.span 
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(139, 92, 246, 0.2)",
                    borderColor: "rgba(56, 189, 248, 0.5)",
                    color: "#38bdf8"
                  }}
                  className="px-4 py-1 bg-sky-500/10 border border-sky-500/20 rounded-xl text-sky-300 text-sm font-semibold transition-all cursor-default"
                >
                  {edu.period}
                </motion.span>
              </div>


              <h3 className="text-2xl font-bold text-white mb-2">
                {edu.degree}
              </h3>

 
              <p className="text-white font-semibold text-lg mb-2">
                {edu.institution}
              </p>


              {edu.gpa && (
                <div className="flex items-center gap-2 mb-3">
                  <FaAward className="text-sky-300" />
                  <span className="text-sky-300 font-semibold">{edu.gpa}</span>
                </div>
              )}

              {/* Details */}
              <ul className="space-y-2 text-slate-300">
                {edu.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-sky-500 mt-1">▹</span>
                    <span>{detail}</span>
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

export default Education