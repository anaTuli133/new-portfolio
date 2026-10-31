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
    <section id="home" className="min-h-[92vh] flex flex-col justify-center pt-24 pb-16 lg:pt-0 relative overflow-hidden">
      
      {/* Background Watermark Logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 z-0">
        <img src="/analogo2.png" alt="Watermark Logo" className="w-[500px] md:w-[700px] object-contain" />
      </div>

      <div className="grid lg:grid-cols-12 gap-10 items-center relative z-10">
        {/* Left Content */}
        <div className="rise lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.1] whitespace-nowrap">{personal.name}</h1>
          <div className="mt-6 text-xl md:text-2xl text-accent font-display font-medium h-8 flex justify-center lg:justify-start">
            <Typewriter options={{ strings: ['Software Engineer', 'AI & ML Researcher', 'BI & Data Platform Engineer', 'Full-Stack Web Developer', 'Relentless Builder'], autoStart: true, loop: true, delay: 40, deleteSpeed: 40, pauseFor: 2000, cursor: '|' }} />
          </div>
          
          {/* Direct style diye justify kora holo */}
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mute" style={{ textAlign: 'justify' }}>
            {personal.description}
          </p>

          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-3">
            <a href="/anamikasahacv.pdf" download="anamikasahacv.pdf" className="btn btn-solid">Download CV</a>
            <a href="#projects" className="btn btn-ghost">View Projects</a>
            <a href="#contact" className="btn btn-ghost">Get In Touch</a>
          </div>
          <dl className="mt-16 flex justify-center lg:justify-start gap-10 sm:gap-14 border-t border-line pt-6 w-full lg:w-fit">
            {stats.map(([n, l]) => (
              <div key={l} className="text-center lg:text-left">
                <dd className="font-display text-4xl font-bold">{n}</dd>
                <dt className="text-sm text-mute mt-1">{l}</dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Right Side Image */}
        <div className="lg:col-span-5 flex justify-center items-center mt-8 lg:mt-0">
          <div className="w-72 sm:w-80 md:w-96 h-96 sm:h-[420px] md:h-[460px] relative overflow-hidden shadow-2xl rounded-3xl bg-accent/10 border-2 border-accent/20 flex items-center justify-center">
            <img 
              src={personal.image || "/profile4.png"} 
              alt={personal.name} 
              className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export const About = () => (
  <Section id="about" title="About Me">
    <div className="grid xl:grid-cols-5 gap-10">
      <div className="xl:col-span-3">
        <h3 className="text-2xl font-bold mb-5">Hello! I'm Anamika Saha</h3>
        <p className="text-xl italic text-accent border-l-2 border-accent pl-4 mb-5" style={{ textAlign: 'left' }}>
          I believe understanding the fundamentals is the first step toward building impactful technology!
        </p>
        
        {/* Direct style diye justify kora holo */}
        <p className="text-mute text-lg leading-relaxed" style={{ textAlign: 'justify' }}>
          I am continuously learning new technologies and conducting research with the goal of contributing to impactful innovations in computer science. Passionate about building intelligent, scalable and data-driven solutions that transform research into real-world impact.
        </p>
      </div>
      <div className="xl:col-span-2">
        <h3 className="text-sm font-semibold text-mute mb-4">Core Qualities</h3>
        <ul className="divide-y divide-line border-y border-line">
          {qualities.map((q, i) => {
            const I = ICONS[q.icon]
            return (
              <li key={i} className="flex items-start gap-4 py-4">
                {I && <I className="text-accent mt-1 shrink-0" />}
                <div><p className="font-semibold">{q.title}</p><p className="text-sm text-mute">{q.description}</p></div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  </Section>
)