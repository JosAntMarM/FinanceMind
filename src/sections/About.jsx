import useReveal from '../hooks/useReveal'
import Reveal from '../components/Reveal'
import logoWordmark from '../assets/images/logo-wordmark.png'

export default function About() {
  // The media block needs its own visibility flag to drive the logo's
  // fade/scale-in reveal, same as the original dedicated mediaObserver.
  const [mediaRef, mediaVisible] = useReveal({ threshold: 0.3 })

  return (
    <section className="about" id="nosotros">
      <div className="about__inner">
        <div
          ref={mediaRef}
          className={`about__media reveal${mediaVisible ? ' is-visible' : ''}`}
        >
          <div className="about__media-frame">
            <div className="about__media-glow" aria-hidden="true"></div>
            <img src={logoWordmark} alt="FinanceMind Perú" className="about__logo" />
          </div>
        </div>

        <Reveal className="about__copy">
          <span className="eyebrow">Sobre FinanceMind</span>
          <h2 className="section-title">
            UNA NUEVA FORMA
            <br />
            DE ENTENDER LAS FINANZAS
          </h2>
          <p className="about__text">
            FinanceMind Perú nace con el objetivo de acercar el conocimiento sobre los mercados
            digitales a personas que buscan comprender el ecosistema de las criptomonedas desde
            una perspectiva educativa, estratégica y responsable.
          </p>

          <div className="about__pillars">
            <span className="pillar">Educación</span>
            <span className="pillar">Análisis</span>
            <span className="pillar">Estrategia</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
