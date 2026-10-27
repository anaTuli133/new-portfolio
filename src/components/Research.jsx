import { FaExternalLinkAlt } from 'react-icons/fa'
import { portfolioData } from '../data/portfolio'
import { Section, Tags, Ext } from './ui'

const Research = () => {
  const { thesis, publications } = portfolioData.research
  const n = publications.length
  return (
    <Section id="research" title="Research & Publications" note="Academic contributions and thesis work">
      <div className="card p-6 md:p-8 mb-8 border-l-4 !border-l-accent">
        <p className="text-sm font-semibold text-accent mb-2">🎓 Thesis</p>
        <h3 className="text-2xl font-bold leading-snug mb-2">{thesis.title}</h3>
        <p className="text-mute italic mb-4">{thesis.supervisor}</p>
        <p className="text-mute leading-relaxed max-w-3xl mb-5">{thesis.description}</p>
        <Tags items={thesis.tech} className="mb-6" />
        <Ext href={thesis.link} className="btn btn-solid">📖 View Thesis <FaExternalLinkAlt size={11} /></Ext>
      </div>

      <ol className="divide-y divide-line border-y border-line">
        {publications.map((p, i) => {
          const done = p.status === 'Published'
          return (
            <li key={i} className="py-8 grid lg:grid-cols-12 gap-4 lg:gap-8">
              <div className="lg:col-span-3">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${done ? 'bg-accent/15 text-accent' : 'bg-warm/15 text-warm'}`}>{p.status}</span>
                {p.journal && <p className="text-sm text-mute mt-3">{p.journal}</p>}
              </div>
              <div className="lg:col-span-9">
                <h3 className="text-xl font-semibold leading-snug mb-3">{p.title}</h3>
                <p className="text-mute text-sm leading-relaxed mb-4">{p.description}</p>
                <Tags items={p.tech} className="mb-5" />
                <Ext href={p.link} className="btn btn-ghost !py-2 text-xs">📄 {i === n - 1 ? 'View Manuscript' : i === n - 2 ? 'View Work' : 'Read Paper'} <FaExternalLinkAlt size={10} /></Ext>
              </div>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}
export default Research
