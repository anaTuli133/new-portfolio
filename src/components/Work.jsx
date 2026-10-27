import { useState } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { portfolioData } from '../data/portfolio'
import { Section, Tags, Ext } from './ui'

export const Experience = () => (
  <Section id="experience" title="Professional Experience" note="My journey in the tech industry">
    {portfolioData.experience.map((e, i) => (
      <article key={i} className="card p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-6">
          <div>
            <h3 className="text-2xl font-bold">{e.title}</h3>
            <p className="text-accent mt-1">{e.company}</p>
          </div>
          <p className="text-sm text-mute md:text-right">{e.period}<br />{e.location}</p>
        </div>
        <ul className="space-y-3 mb-6">
          {e.responsibilities.map((r, j) => (
            <li key={j} className="flex gap-3 text-mute leading-relaxed"><span className="mt-2.5 h-1 w-1 rounded-full bg-accent shrink-0" />{r}</li>
          ))}
        </ul>
        <Tags items={e.items} className="pt-5 border-t border-line" />
      </article>
    ))}
  </Section>
)

const label = (i) => (i === 8 ? 'Play Game' : [0, 1, 2, 7, 10, 11].includes(i) ? 'Live Demo' : 'View Work')

const Project = ({ p, i, wide }) => (
  <article className={`card overflow-hidden flex ${wide ? 'lg:col-span-2 flex-col lg:flex-row' : 'flex-col'} group`}>
    <div className={`relative overflow-hidden bg-line/40 ${wide ? 'lg:w-1/2 aspect-[16/10]' : 'aspect-[16/10]'}`}>
      <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      <span className="absolute left-3 bottom-3 max-w-[85%] truncate px-2.5 py-1 rounded-md text-xs font-medium bg-bg/90 text-ink">{p.category}</span>
    </div>
    <div className={`p-6 flex flex-col flex-1 ${wide ? 'lg:w-1/2 lg:p-8' : ''}`}>
      <h3 className={`font-bold leading-snug mb-3 ${wide ? 'text-2xl' : 'text-lg'}`}>{p.title}</h3>
      <p className={`text-sm text-mute leading-relaxed mb-5 ${wide ? '' : 'line-clamp-4'}`}>{p.description}</p>
      <Tags items={p.tech} className="mt-auto mb-5" />
      <div className="flex gap-3">
        <Ext href={p.demo} className="btn btn-solid flex-1 !py-2 text-xs"><FaExternalLinkAlt size={10} />{label(i)}</Ext>
        <Ext href={p.github} className="btn btn-ghost flex-1 !py-2 text-xs"><FaGithub size={12} />GitHub</Ext>
      </div>
    </div>
  </article>
)

export const Projects = () => {
  const { projects } = portfolioData
  const [all, setAll] = useState(false)
  const shown = all ? projects : projects.slice(0, 9)
  return (
    <Section id="projects" title="Featured Projects" note="Some of my development work">
      <div className="grid md:grid-cols-2 gap-6">
        {shown.map((p, i) => <Project key={i} p={p} i={i} wide={i === 0} />)}
      </div>
      {projects.length > 9 && (
        <button onClick={() => setAll(!all)} className="btn btn-ghost mt-10">{all ? 'Show Less' : `See More Projects (${projects.length - 9})`}</button>
      )}
    </Section>
  )
}
