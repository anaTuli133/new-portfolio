import { motion } from 'framer-motion'


const Footer = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-white/10 py-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-400 flex items-center justify-center gap-2">
            © 2026 Anamika Saha. All rights reserved. 
        
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
