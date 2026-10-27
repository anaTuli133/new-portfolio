import Typewriter from 'typewriter-effect'
import { portfolioData } from '../data/portfolio'
import { certifications, qualities } from '../data/extra'
import { FaLightbulb, FaBookOpen, FaBullseye, FaComments } from 'react-icons/fa'
import { Section } from './ui'

const ICONS = { FaLightbulb, FaBookOpen, FaBullseye, FaComments }

export const Hero = () => {
  const { personal, projects, research } = portfolioData
const stats = [
  [`${projects.length}+`, 'Projects'],
  [research.publications.length, 'Papers'],
  [`${certifications.length}+`, 'Certificates'],
]
  return (
    <section id="home" className="min-h-[92vh] flex flex-col justify-center pt-24 pb-16 lg:pt-0">
      <div className="rise">
        <h1 className="text-5xl sm:text-6xl xl:text-8xl font-extrabold leading-[0.95]">{personal.name}</h1>
        <div className="mt-6 text-xl md:text-2xl text-accent font-display font-medium h-8">
          <Typewriter options={{ strings: ['Software Engineer', 'AI & ML Researcher', 'BI & Data Platform Engineer', 'Full-Stack Web Developer', 'Relentless Builder'], autoStart: true, loop: true, delay: 40, deleteSpeed: 40, pauseFor: 2000, cursor: '|' }} />
        </div>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mute">{personal.description}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/anamikasahacv.pdf" download="anamikasahacv.pdf" className="btn btn-solid">Download CV</a>
          <a href="#projects" className="btn btn-ghost">View Projects</a>
          <a href="#contact" className="btn btn-ghost">Get In Touch</a>
        </div>
        <dl className="mt-16 flex gap-10 sm:gap-14 border-t border-line pt-6 w-fit">
          {stats.map(([n, l]) => (
            <div key={l}><dd className="font-display text-4xl font-bold">{n}</dd><dt className="text-sm text-mute mt-1">{l}</dt></div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export const About = () => (
  <Section id="about" title="About Me">
    <div className="grid xl:grid-cols-5 gap-10">
      <div className="xl:col-span-3">
        <h3 className="text-2xl font-bold mb-5">Hello! I'm Anamika Saha</h3>
        <p className="text-xl italic text-accent border-l-2 border-accent pl-4 mb-5">I believe understanding the fundamentals is the first step toward building impactful technology!</p>
        <p className="text-mute text-lg leading-relaxed">I am continuously learning new technologies and conducting research with the goal of contributing to impactful innovations in computer science. Passionate about building intelligent, scalable and data-driven solutions that transform research into real-world impact. </p>
      </div>
      <div className="xl:col-span-2">
        <h3 className="text-sm font-semibold text-mute mb-4">Core Qualities</h3>
        <ul className="divide-y divide-line border-y border-line">
          {qualities.map((q, i) => {
            const I = ICONS[q.icon]
            return (
              <li key={i} className="flex items-start gap-4 py-4">
                <I className="text-accent mt-1 shrink-0" />
                <div><p className="font-semibold">{q.title}</p><p className="text-sm text-mute">{q.description}</p></div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  </Section>
)
