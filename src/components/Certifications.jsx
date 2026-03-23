import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaAward, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  const certifications = [
     {
      title: "Automation Essentials: Demonstration of Industrial Process Control System Design",
      organization: "AUST Robotics Club (AUSTRC)",
      date: "2024",
      description: "In-depth exploration of industrial process control systems, demonstrating how automation streamlines operations and optimizes efficiency in various industries",
      image: "/certificates/process.jpeg",
      credential: "https://www.linkedin.com/posts/aust-robotics-club_%F0%9D%90%80%F0%9D%90%94%F0%9D%90%92%F0%9D%90%93-%F0%9D%90%91%F0%9D%90%A8%F0%9D%90%9B%F0%9D%90%A8%F0%9D%90%AD%F0%9D%90%A2%F0%9D%90%9C%F0%9D%90%AC-%F0%9D%90%82%F0%9D%90%A5%F0%9D%90%AE%F0%9D%90%9B-along-ugcPost-7202704240031506433-0mjY?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFI47g0BbrWTAqoFwcMJdgOW_QGL9Kv-8ZU",
    
    },
    {
      title: "Optimizing ML with FPGA Technology: A Hands-On Workshop Experience",
      organization: "Ahsanullah University of Science and Technology ",
      date: "January 30, 2025",
      description: "Hardware acceleration techniques for ML workloads",
      image: "/certificates/FPGA.jpeg",
      credential: "https://drive.google.com/file/d/163HDus6QMYTJbd1dHoRvqkN0IX4b_juW/view?usp=drive_link",

    },
    {
      title: "Hands-on Workshop on AWS, CNCF & GitHub",
      organization: "AUST Programming and Informatics Club (AUSTPIC)",
      date: "August 26, 2025",
      description: "Gaining hands-on experience with cloud and DevOps tools",
      image: "/certificates/GIT GITHUB AWS.jpeg",
      credential: "https://drive.google.com/file/d/1AhThcJWnGTFv-VLIgODcgNiiEOm31viC/view?usp=drive_link",

    },
    {
      title: "Charting Saturn’s Secrets: The Cassini Mission & Beyond",
      organization: "AIAA AUST Student Branch",
      date: "January 24, 2025",
      description: "A fascinating webinar led by Todd Barber, Senior Propulsion Engineer at NASA JPL (Jet Propulsion Laboratory)—the hub of legendary missions like Cassini, Mars Rovers and Voyager.",
      image: "/certificates/saturn.jpeg",
      credential: "https://drive.google.com/file/d/1S7cz-YZya1w4KkvmqLlq3WkeMtRUi-F0/view?usp=drive_link",

    },
    {
      title: "Deputy Executive - Graphics Design Team",
      organization: "AUST Robotics Club",
      date: "May 2024 - Aug 2025",
      description: "Led the design team to create event posters and digital content",
      image: "/certificates/DEX (2).jpg",
      credential: "https://drive.google.com/file/d/1mEKr_tg4-JffNZJBn6xfRfNOgrPQvlZ2/view?usp=drive_link",

    },
    {
      title: "Organizer - AUST Rover Challenge 2.0",
      organization: "AUST Robotics Club",
      date: "12-13 July, 2025",
      description: "National Robotics Event Organizer",
      image: "/certificates/organizer.jpeg",
      credential: "https://drive.google.com/file/d/1y2L0pdC0hBTkszao_iH2kkzYmgJztINz/view?usp=drive_link",

    },
    {
      title: "Webmaster",
      organization: "AIAA AUST Student Branch (Fall 2024)",
      date: "2025",
      description: "Maintained the branch’s official website & technical infrastructure.",
      image: "/certificates/WebMaster.jpg",
      credential: "https://drive.google.com/file/d/1k56rTwy1vtWOkp4YwjyiGYgPwlg3C4ri/view?usp=drive_link",

    },
    {
      title: "Executive of the Website & Publicity Team",
      organization: "AIAA AUST Student Branch (Spring 2024)",
      date: "2024",
      description: "Hosted and anchored various online & offline programs and meetings on behalf of the branch.",
      image: "/certificates/Executive of Website and Publicity.jpg",
      credential: "https://drive.google.com/file/d/1eSdch0V34t548zXD8BBEe48Plh93yi-6/view?usp=drive_link",

    },
    {
      title: "Rapid UI Building with React + Tailwind",
      organization: "SkillEcted by JSSAV Edu.Pvt Ltd",
      date: "October 24, 2025",
      description: "Design stunning interfaces faster than ever!",
      image: "/certificates/React.png",
      credential: "https://drive.google.com/file/d/1Rz9TgwkBIrjBJX2X1pz8idU98ABePyVm/view?usp=drive_link",

    },
    {
      title: "4th International Robo Tech Olympiad-2024",
      organization: "Robo Tech Valley",
      date: "October 2024",
      description: "Campus Ambassador",
      image: "/certificates/robo.jpeg",
      credential: "https://drive.google.com/file/d/1-ED63cTeSvuAB4ZOiCYWTICdU7Lp7wJW/view?usp=drive_link",

    }
  ];

  const initialDisplayCount = 4;
  const visibleCertifications = showAll ? certifications : certifications.slice(0, initialDisplayCount);

  return (
    <section id="certifications" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications & Workshops</span>
          </h2>
          <p className="text-slate-400 text-lg">Professional development and continuous learning</p>
        </motion.div>

        {/* Grid Container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <AnimatePresence>
            {visibleCertifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all group"
              >
            
                <div className="relative h-56 overflow-hidden bg-slate-800">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzFhMjMzOCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNjAiIGZpbGw9IiM2MzY2ZjEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj57Y2VydC5pY29ufTwvdGV4dD48L3N2Zz4=';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 text-justify">{cert.title}</h3>
                  <p className="text-white font-semibold mb-1">{cert.organization}</p>
                  <p className="text-slate-400 text-sm mb-3">{cert.date}</p>
                  {cert.description && <p className="text-slate-300 text-sm mb-4 line-clamp-2 text-justify">{cert.description}</p>}
                  
                  <motion.a
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.2)", borderColor: "rgba(56, 189, 248, 0.5)", color: "#38bdf8" }}
                    whileTap={{ scale: 0.95 }}
                    href={cert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 bg-purple-500/10 border border-purple-500/20 rounded-lg text-purple-300 transition-all text-sm font-medium"
                  >
                    <FaAward /> View Certificate
                    {cert.credential !== '#' && <FaExternalLinkAlt className="text-xs" />}
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* SEE MORE / SEE LESS Button Container */}
        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-700 to-sky-600 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/25 transition-all"
          >
            {showAll ? (
              <>Show Less <FaChevronUp /></>
            ) : (
              <>See More Certificates <FaChevronDown /></>
            )}
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default Certifications;