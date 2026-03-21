import { useState, useEffect } from 'react'
import { motion } from 'framer-motion' 
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Research from './components/Research'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Activities from './components/Activities'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    const timer = setTimeout(() => setIsLoading(false), 5500)
    return () => clearTimeout(timer)
  }, [])


if (isLoading) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden relative">
   
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]"></div>
      
      <div className="text-center z-10 px-6">
        <div className="relative inline-block mb-8">
          {/* Animated Rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="h-20 w-20 border-t-2 border-b-2 border-sky-400 rounded-full opacity-80"
          ></motion.div>
          
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute top-2 left-2 h-16 w-16 border-l-2 border-r-2 border-purple-400 rounded-full opacity-60"
          ></motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md mx-auto"
        >
          {/* Quote Section */}
          <p className="text-lg md:text-xl text-slate-300 italic font-serif leading-relaxed">
            “He who asks a question is a fool for five minutes; he who does not ask a question remains a fool forever.”
          </p>
      

        
          <motion.p 
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="mt-6 text-slate-300 font-mono tracking-[0.3em] text-[10px] uppercase  pt-4"
          >
            Initializing Experience...
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}


return (
  <div className="relative min-h-screen bg-slate-950">
    {/* Background Glows (Fixed Background) */}
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-slate-950"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
    </div>
<div className="relative z-10">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Research />
      <Projects />
      <Certifications />
      <Activities />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
    </div>
  )
}

export default App