import { navLinks, socialLinks } from '../data/portfolio'
import Icon from './Icon'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a className="brand text-brand footer-brand" href="#top">
            <span className="brand-blue">Roniher</span>
            <span>Group Services</span>
          </a>
          <p>Polymath &bull; Founder &bull; Software Engineer &bull; Digital Nomad</p>
        </div>

        <div className="footer-links" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer-links" aria-label="Social links">
          {socialLinks.map((link) => (
            <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
              <Icon name={link.icon} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="container copyright">
        <span>&copy; 2026 Roniher Cabrera. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
