import Reveal from '../../components/Reveal'
import SpotlightCard from '../../components/reactbits/SpotlightCard'

const LEARNING_ITEMS = [
  {
    title: 'Fundamentos de Inversión',
    text: 'Aprende los principios esenciales del dinero, capital de riesgo y la mecánica detrás de los mercados financieros modernos.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: 'Introducción a Criptomonedas',
    text: 'Comprende qué es Bitcoin, Ethereum, el funcionamiento de la blockchain y cómo almacenar activos en wallets de forma segura.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 8h4.5a2 2 0 0 1 0 4H9m0 0h5a2 2 0 0 1 0 4H9" />
        <path d="M11 6v12" />
      </svg>
    ),
  },
  {
    title: 'Análisis de Mercados',
    text: 'Diferencia entre análisis técnico y fundamental. Interpreta ciclos macroeconómicos, liquidez y tendencias con criterio objetivo.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: 'Gestión del Riesgo',
    text: 'Aprende a proteger tu capital: dimensionamiento de posiciones, stop loss, ratio riesgo-beneficio y cómo evitar errores costosos.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: 'Lectura de Gráficos',
    text: 'Interpretación de velas japonesas, zonas clave de soporte y resistencia, volumen transaccional y estructura de precios en tiempo real.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: 'Psicología del Inversor',
    text: 'Domina tus emociones frente a la volatilidad. Supera el FOMO, la euforia y el pánico del mercado con una mentalidad disciplinada.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
        <line x1="10" y1="22" x2="14" y2="22" />
      </svg>
    ),
  },
]

export default function SeminarLearning() {
  return (
    <section className="seminar-learn" id="que-aprenderas">
      <Reveal className="seminar-learn__header">
        <span className="eyebrow">Plan de Aprendizaje</span>
        <h2 className="section-title">¿QUÉ APRENDERÁS?</h2>
        <p className="seminar-learn__subtitle">
          Un temario completo y estructurado para brindarte claridad operativa y criterio sólido.
        </p>
      </Reveal>

      <div className="seminar-learn__grid">
        {LEARNING_ITEMS.map((item) => (
          <SpotlightCard
            key={item.title}
            className="learn-card"
            spotlightColor="rgba(0, 207, 255, 0.22)"
          >
            <div className="learn-card__icon">{item.icon}</div>
            <h3 className="learn-card__title">{item.title}</h3>
            <p className="learn-card__text">{item.text}</p>
          </SpotlightCard>
        ))}
      </div>
    </section>
  )
}
