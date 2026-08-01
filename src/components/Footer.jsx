import SectionLink from './SectionLink'
import logoBadge from '../assets/images/logo-badge.png'
import { WHATSAPP_URL, TIKTOK_URL, LINKEDIN_URL, YOUTUBE_URL } from '../constants'

const FOOTER_NAV = [
  { href: '#top', label: 'Inicio' },
  { href: '#academia', label: 'Academia' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#metodologia', label: 'Metodología' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src={logoBadge} alt="FinanceMind Perú" className="footer__logo" />
          <p className="footer__tagline">Academia de inversiones especializada en criptomonedas.</p>
        </div>

        <div className="footer__links">
          <span className="footer__heading">Navegación</span>
          {FOOTER_NAV.map((link) => (
            <SectionLink key={link.href} href={link.href}>
              {link.label}
            </SectionLink>
          ))}
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
        </div>
      </div>

      <div className="footer__disclaimer">
        <p>
          FinanceMind Perú proporciona contenido con fines educativos e informativos. La
          información presentada no constituye asesoramiento financiero ni garantiza resultados
          de inversión. Las inversiones en activos digitales implican riesgos.
        </p>
      </div>

      <div className="footer__bottom">
        <p>© 2026 FinanceMind Perú. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
