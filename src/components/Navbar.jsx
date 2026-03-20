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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
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
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-effect shadow-lg py-4' : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer z-50"
          >
            {/* Logo Image */}
            <img
              src="/logo.png"
              alt="Anamika Saha"
              className="h-8 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'block';
              }}
            />
           
            <div className="text-2xl font-bold gradient-text" style={{ display: 'none' }}>AS</div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium transition-colors ${activeSection === item.toLowerCase()
                    ? 'text-sky-400'
                    : 'text-slate-300 hover:text-white'
                  }`}
              >
                {item}
              </motion.button>
            ))}

            {/* Desktop Get In Touch Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-sm px-6 py-2"
            >
              Get In Touch
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-3xl text-slate-300 z-50 relative"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </motion.button>
        </div>
      </motion.nav>

{/* Mobile Menu  */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30
      }}
    
      className="md:hidden fixed top-0 right-0 w-full h-screen bg-[#0f172a] flex flex-col items-center justify-start pt-24 pb-10 space-y-5 z-40 overflow-y-auto"
    >
      {navItems.map((item, index) => (
        <motion.button
          key={item}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: index * 0.06,
          }}
          onClick={() => scrollToSection(item)}
          // text-2xl theke text-lg kora hoyeche size choto korar jonno
          className={`text-lg font-medium transition-colors ${
            activeSection === item.toLowerCase() ? 'text-sky-400' : 'text-slate-300'
          }`}
        >
          {item}
        </motion.button>
      ))}

      <motion.a
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: navItems.length * 0.05 }}
        href="#contact"
        onClick={() => setIsOpen(false)}
        // padding ebong font size arektu compact kora hoyeche
        className="btn-primary px-6 py-2.5 text-sm rounded-lg mt-4"
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