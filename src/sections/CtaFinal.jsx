import Reveal from '../components/Reveal'
import { WHATSAPP_URL } from '../constants'

export default function CtaFinal() {
  return (
    <section className="cta-final" id="cta-final">
      <div className="hero__glow hero__glow--cyan" aria-hidden="true"></div>
      <div className="hero__glow hero__glow--green" aria-hidden="true"></div>
      <Reveal className="cta-final__content">
        <h2 className="cta-final__title">
          EL SIGUIENTE PASO
          <br />
          COMIENZA CON CONOCIMIENTO.
        </h2>
        <p className="cta-final__text">
          Descubre FinanceMind Perú y comienza a explorar el mundo de los activos digitales.
        </p>
        <a
          href={WHATSAPP_URL}
          className="btn btn--primary btn--large"
          target="_blank"
          rel="noopener noreferrer"
        >
          Conocer la Academia
        </a>
      </Reveal>
    </section>
  )
}
