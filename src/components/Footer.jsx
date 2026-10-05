import SectionLink from './SectionLink'
import logoBadge from '../assets/images/logo-badge.png'
import { WHATSAPP_URL, TIKTOK_URL, LINKEDIN_URL, YOUTUBE_URL } from '../constants'
import { useNav } from '../hooks/useNav'

const FOOTER_NAV = [
  { href: '#top', label: 'Inicio' },
  { href: '#academia', label: 'Academia' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#metodologia', label: 'Metodología' },
  { href: '#fundador', label: 'Fundador' },
]

export default function Footer() {
  const { navigate, isSeminar } = useNav()

  const handleSeminarClick = (e) => {
    e.preventDefault()
    if (isSeminar) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/seminario')
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    navigate('/', '#top')
  }

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <a href="/" onClick={handleLogoClick} className="footer__brand-link">
            <img src={logoBadge} alt="FinanceMind Perú" className="footer__logo" />
            <span className="footer__brand-name">
              FINANCEMIND<em>PERÚ</em>
            </span>
          </a>
          <p className="footer__tagline">
            Educación financiera para tomar mejores decisiones.
          </p>
          <p className="footer__subtag">
            Academia de inversiones especializada en criptomonedas y mercados de activos digitales.
          </p>
        </div>

        <div className="footer__links">
          <span className="footer__heading">Navegación</span>
          {FOOTER_NAV.map((link) => (
            <SectionLink key={link.href} href={link.href}>
              {link.label}
            </SectionLink>
          ))}
          <a href="/seminario" onClick={handleSeminarClick} className={isSeminar ? 'active' : ''}>
            Seminarios
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Contacto
          </a>
        </div>

        <div className="footer__social">
          <span className="footer__heading">Síguenos</span>
          <a href={TIKTOK_URL} aria-label="TikTok" target="_blank" rel="noopener noreferrer">
            TikTok
          </a>
          <a href={LINKEDIN_URL} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={YOUTUBE_URL} aria-label="YouTube">
            YouTube
          </a>
          <a href={WHATSAPP_URL} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
            WhatsApp Oficial
          </a>
        </div>
      </div>

      <div className="footer__disclaimer">
        <p>
          FinanceMind Perú proporciona contenido estrictamente con fines educativos e informativos. 
          No prometemos rendimientos mágicos ni garantizados. Toda inversión en mercados financieros y 
          activos digitales conlleva riesgo de capital. Nuestro objetivo es brindarte criterio analítico, 
          estrategia y gestión de riesgo para que tomes decisiones con disciplina y conocimiento propio.
        </p>
      </div>

      <div className="footer__bottom">
        <p>© 2026 FinanceMind Perú. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
