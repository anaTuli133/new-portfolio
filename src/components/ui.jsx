export const Section = ({ id, title, note, children }) => (
  <section id={id} className="py-16 lg:py-24 border-t border-line first:border-0">
    <header className="mb-10 max-w-2xl">
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      {note && <p className="mt-3 text-mute">{note}</p>}
    </header>
    {children}
  </section>
)
export const Tags = ({ items = [], className = '' }) => (
  <div className={`flex flex-wrap gap-1.5 ${className}`}>
    {items.map((t, i) => <span key={i} className="tag">{t}</span>)}
  </div>
)
export const Ext = (p) => <a target="_blank" rel="noopener noreferrer" {...p} />
