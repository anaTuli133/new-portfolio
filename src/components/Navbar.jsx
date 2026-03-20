import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  const navItems = ['Home', 'About', 'Education', 'Skills', 'Experience', 'Research', 'Projects', 'Certifications', 'Contact']

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(section.toLowerCase())
      setIsOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'glass-effect shadow-lg py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo Section - Tablet/Mobile */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer z-50 flex items-center"
            onClick={() => scrollToSection('home')}
          >
            <img
              src="/logo.png"
              alt="Anamika Saha"
              className="h-10 w-auto object-contain block" // block deya hoyeche jate shob jaygay dekhay
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'block';
              }}
            />
          
            <div className="text-xl md:text-2xl font-bold gradient-text ml-2" style={{ display: 'none' }}>
              AS
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.toLowerCase() ? 'text-sky-400' : 'text-slate-300 hover:text-white'
                }`}
              >
                {item}
              </motion.button>
            ))}

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-xs xl:text-sm px-5 py-2"
            >
              Get In Touch
            </motion.a>
          </div>

          {/* Hamburger Icon - Visible on Mobile & Tablet (lg:hidden) */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-3xl text-slate-200 z-50 relative p-2"
          >
            {isOpen ? <HiX className="text-sky-400" /> : <HiMenuAlt3 />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Full Screen Sidebar Menu (Mobile & Tablet) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            className="lg:hidden fixed top-0 right-0 w-full sm:w-[400px] h-screen bg-[#0f172a]/95 backdrop-blur-2xl flex flex-col items-center justify-start pt-28 pb-10 space-y-5 z-40 shadow-2xl overflow-y-auto"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => scrollToSection(item)}
                className={`text-lg font-medium tracking-wide transition-colors ${
                  activeSection === item.toLowerCase() ? 'text-sky-400 scale-110 font-bold' : 'text-slate-300'
                }`}
              >
                {item}
              </motion.button>
            ))}

            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary px-8 py-2.5 text-sm rounded-xl mt-6 shadow-lg shadow-sky-500/20"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar