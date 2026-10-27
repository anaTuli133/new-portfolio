import { FaAward } from 'react-icons/fa'
import { portfolioData } from '../data/portfolio'
import { education } from '../data/extra'
import { Section, Tags } from './ui'

export const Skills = () => (
  <Section id="skills" title="Skills & Expertise" note="Technologies and tools I work with">
    <dl className="divide-y divide-line border-y border-line">
      {portfolioData.skills.map((s, i) => (
        <div key={i} className="py-5 grid md:grid-cols-4 gap-3">
          <dt className="font-semibold flex items-center gap-3"><span className="text-2xl">{s.icon}</span>{s.category}</dt>
          <dd className="md:col-span-3"><Tags items={s.items} /></dd>
        </div>
      ))}
    </dl>
  </Section>
)

export const Education = () => (
  <Section id="education" title="Education" note="Academic background and qualifications">
    <ol className="relative border-l border-line ml-3 space-y-10">
      {education.map((e, i) => (
        <li key={i} className="pl-8 relative">
          <span className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-bg border border-line grid place-items-center text-xs">{e.icon}</span>
          <p className="text-sm text-accent font-semibold mb-1">{e.period}</p>
          <h3 className="text-xl font-bold">{e.degree}</h3>
          <p className="text-mute mb-3">{e.institution}</p>
          {e.gpa && <p className="flex items-center gap-2 text-sm font-semibold mb-3"><FaAward className="text-accent" />{e.gpa}</p>}
          <ul className="space-y-1.5 text-sm text-mute">
            {e.details.map((d, j) => <li key={j} className="flex gap-3"><span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />{d}</li>)}
          </ul>
        </li>
      ))}
    </ol>
  </Section>
)

export const Activities = () => (
  <Section id="activities" title="Extra-Curricular Activities" note="Leadership roles and community involvement">
    <div className="grid md:grid-cols-2 gap-5">
      {portfolioData.activities.map((a, i) => (
        <article key={i} className="card p-6">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-3xl">{a.icon}</span>
            <div>
              <h3 className="font-bold leading-snug">{a.title}</h3>
              <p className="text-sm text-accent">{a.organization}</p>
              <p className="text-xs text-mute mt-0.5">{a.period}</p>
            </div>
          </div>
          <ul className="space-y-1.5 text-sm text-mute">
            {a.description.map((d, j) => <li key={j} className="flex gap-3"><span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />{d}</li>)}
          </ul>
        </article>
      ))}
    </div>
  </Section>
)
