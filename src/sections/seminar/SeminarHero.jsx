import { useEffect, useRef } from 'react'
import Reveal from '../../components/Reveal'
import SplitText from '../../components/reactbits/SplitText'
import Aurora from '../../components/reactbits/Aurora'
import heroBg from '../../assets/images/FONDO PRINCIPAL.png'
import { scrollToId } from '../../utils/scroll'

const MARKET_TICKERS = [
  { pair: 'BTC / USDT', price: '$68,420.50', change: '+3.42%' },
  { pair: 'ETH / USDT', price: '$2,640.10', change: '+2.18%' },
  { pair: 'SOL / USDT', price: '$178.90', change: '+5.74%' },
  { pair: 'S&P 500', price: '5,860.20', change: '+0.85%' },
]

export default function SeminarHero() {
  const heroRef = useRef(null)
  const cyanGlowRef = useRef(null)
  const greenGlowRef = useRef(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero || !window.matchMedia('(pointer: fine)').matches) return

    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30
      const y = (e.clientY / window.innerHeight - 0.5) * 30
      if (cyanGlowRef.current) cyanGlowRef.current.style.transform = `translate(${x}px, ${y}px)`
      if (greenGlowRef.current) greenGlowRef.current.style.transform = `translate(${-x}px, ${-y}px)`
    }

    hero.addEventListener('mousemove', handleMove)
    return () => hero.removeEventListener('mousemove', handleMove)
  }, [])

  const handleScrollTo = (id) => (e) => {
    e.preventDefault()
    scrollToId(id)
  }

  return (
    <section className="seminar-hero" id="seminario-top" ref={heroRef}>
      <img src={heroBg} alt="" className="seminar-hero__bg-image" aria-hidden="true" />
      <div className="seminar-hero__bg-overlay" aria-hidden="true"></div>

      <div className="seminar-hero__aurora" aria-hidden="true">
        <Aurora
          colorStops={['#00CFFF', '#7CFF00', '#00CFFF']}
          amplitude={0.65}
          blend={0.4}
          speed={0.3}
        />
      </div>

      <div className="seminar-hero__glow seminar-hero__glow--cyan" ref={cyanGlowRef} aria-hidden="true"></div>
      <div className="seminar-hero__glow seminar-hero__glow--green" ref={greenGlowRef} aria-hidden="true"></div>
      <div className="seminar-hero__grid" aria-hidden="true"></div>

      {/* Decorative Candlestick & Market SVG visual */}
      <div className="seminar-hero__chart-bg" aria-hidden="true">
        <svg
          className="seminar-hero__chart-svg"
          viewBox="0 0 1200 240"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Subtle grid lines */}
          <line x1="0" y1="60" x2="1200" y2="60" stroke="rgba(244, 241, 232, 0.05)" strokeDasharray="4 4" />
          <line x1="0" y1="120" x2="1200" y2="120" stroke="rgba(244, 241, 232, 0.05)" strokeDasharray="4 4" />
          <line x1="0" y1="180" x2="1200" y2="180" stroke="rgba(244, 241, 232, 0.05)" strokeDasharray="4 4" />

          {/* Candlestick Wicks & Bodies (Stylized Trading Chart) */}
          {/* Candle 1 */}
          <line x1="120" y1="130" x2="120" y2="210" stroke="rgba(0, 207, 255, 0.4)" strokeWidth="1.5" />
          <rect x="114" y="150" width="12" height="40" fill="rgba(0, 207, 255, 0.25)" stroke="#00CFFF" strokeWidth="1" />
          {/* Candle 2 */}
          <line x1="200" y1="110" x2="200" y2="190" stroke="rgba(124, 255, 0, 0.5)" strokeWidth="1.5" />
          <rect x="194" y="125" width="12" height="45" fill="rgba(124, 255, 0, 0.3)" stroke="#7CFF00" strokeWidth="1" />
          {/* Candle 3 */}
          <line x1="280" y1="90" x2="280" y2="170" stroke="rgba(0, 207, 255, 0.4)" strokeWidth="1.5" />
          <rect x="274" y="110" width="12" height="35" fill="rgba(0, 207, 255, 0.2)" stroke="#00CFFF" strokeWidth="1" />
          {/* Candle 4 */}
          <line x1="360" y1="70" x2="360" y2="160" stroke="rgba(124, 255, 0, 0.5)" strokeWidth="1.5" />
          <rect x="354" y="85" width="12" height="50" fill="rgba(124, 255, 0, 0.3)" stroke="#7CFF00" strokeWidth="1" />
          {/* Candle 5 */}
          <line x1="440" y1="100" x2="440" y2="180" stroke="rgba(0, 207, 255, 0.4)" strokeWidth="1.5" />
          <rect x="434" y="120" width="12" height="30" fill="rgba(0, 207, 255, 0.2)" stroke="#00CFFF" strokeWidth="1" />
          {/* Candle 6 */}
          <line x1="520" y1="60" x2="520" y2="150" stroke="rgba(124, 255, 0, 0.6)" strokeWidth="1.5" />
          <rect x="514" y="75" width="12" height="55" fill="rgba(124, 255, 0, 0.35)" stroke="#7CFF00" strokeWidth="1" />
          {/* Candle 7 */}
          <line x1="600" y1="50" x2="600" y2="140" stroke="rgba(124, 255, 0, 0.6)" strokeWidth="1.5" />
          <rect x="594" y="65" width="12" height="45" fill="rgba(124, 255, 0, 0.35)" stroke="#7CFF00" strokeWidth="1" />
          {/* Candle 8 */}
          <line x1="680" y1="80" x2="680" y2="170" stroke="rgba(0, 207, 255, 0.4)" strokeWidth="1.5" />
          <rect x="674" y="100" width="12" height="40" fill="rgba(0, 207, 255, 0.2)" stroke="#00CFFF" strokeWidth="1" />
          {/* Candle 9 */}
          <line x1="760" y1="40" x2="760" y2="130" stroke="rgba(124, 255, 0, 0.7)" strokeWidth="1.5" />
          <rect x="754" y="55" width="12" height="50" fill="rgba(124, 255, 0, 0.4)" stroke="#7CFF00" strokeWidth="1" />
          {/* Candle 10 */}
          <line x1="840" y1="55" x2="840" y2="140" stroke="rgba(0, 207, 255, 0.4)" strokeWidth="1.5" />
          <rect x="834" y="75" width="12" height="35" fill="rgba(0, 207, 255, 0.2)" stroke="#00CFFF" strokeWidth="1" />
          {/* Candle 11 */}
          <line x1="920" y1="30" x2="920" y2="120" stroke="rgba(124, 255, 0, 0.7)" strokeWidth="1.5" />
          <rect x="914" y="45" width="12" height="55" fill="rgba(124, 255, 0, 0.4)" stroke="#7CFF00" strokeWidth="1" />
          {/* Candle 12 */}
          <line x1="1000" y1="20" x2="1000" y2="110" stroke="rgba(124, 255, 0, 0.8)" strokeWidth="1.5" />
          <rect x="994" y="35" width="12" height="55" fill="rgba(124, 255, 0, 0.45)" stroke="#7CFF00" strokeWidth="1" />
          {/* Candle 13 */}
          <line x1="1080" y1="40" x2="1080" y2="130" stroke="rgba(0, 207, 255, 0.4)" strokeWidth="1.5" />
          <rect x="1074" y="60" width="12" height="40" fill="rgba(0, 207, 255, 0.2)" stroke="#00CFFF" strokeWidth="1" />

          {/* Dynamic Trendline */}
          <path
            d="M 120 170 Q 280 130, 440 140 T 760 80 T 1000 60 T 1150 45"
            fill="none"
            stroke="url(#trendGrad)"
            strokeWidth="2.5"
            strokeDasharray="6 4"
            filter="drop-shadow(0 0 8px rgba(124, 255, 0, 0.6))"
          />

          <defs>
            <linearGradient id="trendGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00CFFF" />
              <stop offset="100%" stopColor="#7CFF00" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="seminar-hero__content">
        <Reveal className="seminar-hero__badge">
          <span className="seminar-hero__badge-pulse"></span>
          EVENTO OFICIAL • FINANCEMIND PERÚ
        </Reveal>

        <h1 className="seminar-hero__title">
          <SplitText
            text="SEMINARIOS"
            tag="span"
            splitType="chars"
            delay={35}
            duration={0.9}
            ease="power3.out"
            from={{ opacity: 0, y: 35 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
          />
          <SplitText
            text="FINANCEMIND"
            tag="span"
            className="seminar-hero__title-accent"
            splitType="chars"
            delay={35}
            duration={0.9}
            ease="power3.out"
            from={{ opacity: 0, y: 35 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
          />
        </h1>

        <Reveal as="p" className="seminar-hero__subtitle">
          “Aprende. Analiza. Invierte con conocimiento.”
        </Reveal>

        <Reveal as="p" className="seminar-hero__text">
          Eventos y sesiones especializadas para comprender los mercados financieros,
          las criptomonedas y las nuevas oportunidades de inversión con criterio profesional.
        </Reveal>

        <Reveal className="seminar-hero__actions">
          <a
            href="#registro"
            onClick={handleScrollTo('#registro')}
            className="btn btn--primary btn--large"
          >
            Reservar mi lugar
          </a>
          <a
            href="#proximo-seminario"
            onClick={handleScrollTo('#proximo-seminario')}
            className="btn btn--ghost btn--large"
          >
            Ver detalles
          </a>
        </Reveal>

        {/* Live Market Indicators Pill */}
        <Reveal className="seminar-hero__ticker">
          {MARKET_TICKERS.map((item) => (
            <div className="ticker-item" key={item.pair}>
              <span className="ticker-item__tag">{item.pair}</span>
              <span className="ticker-item__price">{item.price}</span>
              <span className="ticker-item__change">{item.change}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
