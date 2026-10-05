import { useEffect, useState } from 'react'
import SectionLink from './SectionLink'
import logoBadge from '../assets/images/logo-badge.png'
import { NAV_LINKS, WHATSAPP_URL, SEMINAR_URL } from '../constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}`} id="navbar">
      <div className="navbar__inner">
        <SectionLink href="#top" className="navbar__logo">
          <img src={logoBadge} alt="FinanceMind Perú" className="navbar__logo-img" />
          <span className="navbar__logo-text">
            FINANCEMIND<em>PERÚ</em>
          </span>
        </SectionLink>

        <nav className="navbar__links" id="navLinks">
          {NAV_LINKS.map((link) => (
            <SectionLink key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </SectionLink>
          ))}
        </nav>

        <div className="navbar__ctas">
          <a
            href={SEMINAR_URL}
            className="btn btn--ghost btn--nav"
            target="_blank"
            rel="noopener noreferrer"
          >
            Seminario
          </a>
          <a
            href={WHATSAPP_URL}
            className="btn btn--primary btn--nav"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comenzar
          </a>
        </div>

        <button
          className="navbar__burger"
          id="navBurger"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`navbar__mobile${menuOpen ? ' is-open' : ''}`} id="navMobile">
        {NAV_LINKS.map((link) => (
          <SectionLink
            key={link.href}
            href={link.href}
            className="navbar__mobile-link"
            onClick={closeMenu}
          >
            {link.label}
          </SectionLink>
        ))}
        <a
          href={SEMINAR_URL}
          className="btn btn--ghost"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Seminario
        </a>
        <a
          href={WHATSAPP_URL}
          className="btn btn--primary"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Comenzar
        </a>
      </div>
    </header>
  )
}
