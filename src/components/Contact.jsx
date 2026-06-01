import { email, socialLinks } from '../data/portfolio'
import Icon from './Icon'
import SectionHeading from './SectionHeading'

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something clear, useful, and premium."
          description="Reach out for collaborations, product conversations, startup work, AI automation, or founder-led software projects."
        />
        <div className="contact-card fade-up delay-1">
          <p className="contact-kicker">
            Available for focused collaborations and product conversations.
          </p>
          <a className="button button-primary contact-button" href={`mailto:${email}`}>
            Let&apos;s Talk &rarr;
          </a>
          <div className="social-list contact-socials" aria-label="Contact links">
            {socialLinks.map((link) => (
              <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
                <Icon name={link.icon} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
