import useReveal from '../hooks/useReveal'
import Reveal from '../components/Reveal'

export default function About() {
  // The chart media block needs its own visibility flag (drives both the
  // fade-in AND the candlestick/line draw animation), same as the original
  // dedicated mediaObserver.
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
            <svg className="about__chart" viewBox="0 0 400 400" aria-hidden="true">
              <line x1="0" y1="100" x2="400" y2="100" className="grid-line" />
              <line x1="0" y1="200" x2="400" y2="200" className="grid-line" />
              <line x1="0" y1="300" x2="400" y2="300" className="grid-line" />
              <polyline
                points="0,320 40,300 80,330 120,260 160,280 200,190 240,220 280,140 320,160 360,80 400,100"
                className="chart-line"
              />
              <g className="candles">
                <rect x="30" y="260" width="10" height="60" className="candle candle--up" />
                <rect x="70" y="280" width="10" height="40" className="candle candle--down" />
                <rect x="110" y="220" width="10" height="70" className="candle candle--up" />
                <rect x="150" y="230" width="10" height="50" className="candle candle--down" />
                <rect x="190" y="150" width="10" height="80" className="candle candle--up" />
                <rect x="230" y="180" width="10" height="45" className="candle candle--down" />
                <rect x="270" y="100" width="10" height="70" className="candle candle--up" />
                <rect x="310" y="120" width="10" height="45" className="candle candle--down" />
                <rect x="350" y="60" width="10" height="60" className="candle candle--up" />
              </g>
            </svg>
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
