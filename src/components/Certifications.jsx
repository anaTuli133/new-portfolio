import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { certifications } from '../data/extra'
import { Section, Ext } from './ui'

const Certifications = () => {
  const [all, setAll] = useState(false)
  const [zoom, setZoom] = useState(null)
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && setZoom(null)
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [])
  const shown = all ? certifications : certifications.slice(0, 6)
  return (
    <Section id="certifications" title="Certifications & Workshops" note="Professional development and continuous learning">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {shown.map((c, i) => (
          <article key={i} className="card overflow-hidden flex flex-col">
            <button onClick={() => setZoom(c)} aria-label={`Enlarge ${c.title}`} className="aspect-[4/3] overflow-hidden bg-line/40 cursor-zoom-in">
              <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-cover" />
            </button>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-bold leading-snug mb-1">{c.title}</h3>
              <p className="text-sm text-accent">{c.organization}</p>
              <p className="text-xs text-mute mb-3">{c.date}</p>
              {c.description && <p className="text-sm text-mute mb-4 line-clamp-3">{c.description}</p>}
              <Ext href={c.credential} className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">View Certificate <FaExternalLinkAlt size={10} /></Ext>
            </div>
          </article>
        ))}
      </div>
      {certifications.length > 6 && <button onClick={() => setAll(!all)} className="btn btn-ghost mt-10">{all ? 'Show Less' : 'See More Certificates'}</button>}
      <AnimatePresence>
        {zoom && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setZoom(null)}
            className="fixed inset-0 z-50 bg-black/80 grid place-items-center p-4 cursor-zoom-out" role="dialog" aria-label={zoom.title}>
            <img src={zoom.image} alt={zoom.title} className="max-h-[90vh] max-w-full rounded-lg" />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
export default Certifications
