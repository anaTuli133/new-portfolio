import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaPaperPlane, FaLinkedin, FaGithub, FaCode, FaInstagram } from 'react-icons/fa'
import { portfolioData } from '../data/portfolio'
import { Section, Ext } from './ui'

const Contact = () => {
  const { personal } = portfolioData
  const form = useRef()
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSending(true)
    emailjs.sendForm('service_y6cvghn', 'template_rj3asqm', form.current, 'PzRaHsyz_B8wfmqC-').then(
      () => { alert('Message Sent Successfully!'); e.target.reset(); setIsSending(false) },
      (error) => { console.error('EmailJS error:', error?.status, error?.text); alert(`Failed to send message. Please try again.\n\nReason: ${error?.status || ''} ${error?.text || 'Unknown error'}`); setIsSending(false) }
    )
  }
  const s = personal.social
  return (
    <Section id="contact" title="Get In Touch" note="Let's connect and create something amazing together">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-4">Let's Work Together!</h3>
          <p className="text-mute text-lg leading-relaxed mb-8">I'm always excited to discuss new projects, creative ideas or opportunities. Feel free to message me!</p>
          <a href={`mailto:${personal.email}`} className="block font-display text-xl sm:text-3xl font-bold break-all hover:text-accent transition-colors">{personal.email}</a>
          <p className="text-mute mt-3">{personal.location}</p>
          <div className="flex gap-5 mt-8 text-xl text-mute">
            {[[FaLinkedin, s.linkedin, 'LinkedIn'], [FaGithub, s.github, 'GitHub'], [FaCode, s.leetcode, 'LeetCode'], [FaInstagram, s.instagram, 'Instagram']].map(([I, h, l]) => (
              <Ext key={l} href={h} aria-label={l} className="hover:text-accent transition-colors"><I /></Ext>
            ))}
          </div>
        </div>
        <form ref={form} onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-4 h-fit">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="from_name" type="text" placeholder="Your Name" className="field" required />
            <input name="from_email" type="email" placeholder="Your Email" className="field" required />
          </div>
          <input name="subject" type="text" placeholder="Subject" className="field" required />
          <textarea name="message" placeholder="Your Message" rows="5" className="field resize-none" required />
          <button type="submit" disabled={isSending} className="btn btn-solid w-full disabled:opacity-50">{isSending ? 'Sending...' : 'Send Message'} <FaPaperPlane size={12} /></button>
        </form>
      </div>
    </Section>
  )
}
export default Contact
