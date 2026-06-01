import { navLinks } from '../data/portfolio'

function Header() {
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Primary navigation">
        <a className="brand text-brand" href="#top" aria-label="Roniher Group Services home">
          <span className="brand-blue">Roniher</span>
          <span>Group Services</span>
        </a>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href="#contact">
          Start a conversation
        </a>
      </nav>
    </header>
  )
}

export default Header
