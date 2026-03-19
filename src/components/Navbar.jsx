import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi' // 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isOpen, setIsOpen] = useState(false) // Mobile menu state

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'Education','Skills', 'Experience', 'Projects', 'Research','Certifications', 'Activities', 'Contact']

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(section.toLowerCase())
      setIsOpen(false) // Menu bondho korar jonno scroll-er por
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'glass-effect shadow-lg py-4 bg-[#0a192f]/90 backdrop-blur-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
{/* Logo Section */}
<motion.div
  whileHover={{ scale: 1.05 }}
  className="cursor-pointer"
>

  <img 
    src="/logo.png" 
    alt="Anamika Saha" 
    className="h-8 w-auto object-contain"
    onError={(e) => {
      e.target.style.display = 'none';
      e.target.nextElementSibling.style.display = 'block';
    }}
  />
  {/* Fallback to AS if logo not found */}
  <div className="text-2xl font-bold gradient-text" style={{display: 'none'}}>AS</div>
</motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item}
              whileHover={{ scale: 1.1 }}
              onClick={() => scrollToSection(item)}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              {item}
            </motion.button>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-slate-300 focus:outline-none"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a192f] absolute top-full left-0 w-full overflow-hidden flex flex-col items-center pt-10 space-y-6"
          >
            {navItems.map((item) => (
              <motion.button
                key={item}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                onClick={() => scrollToSection(item)}
                className="text-xl font-semibold text-slate-300 hover:text-blue-400"
              >
                {item}
              </motion.button>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary px-8 py-3 rounded-full mt-4"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar