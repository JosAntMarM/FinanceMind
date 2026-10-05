import Reveal from '../../components/Reveal'
import SpotlightCard from '../../components/reactbits/SpotlightCard'

const PILLARS = [
  {
    number: 'PILAR 01',
    title: 'CONOCIMIENTO',
    subtitle: 'Comprende antes de tomar decisiones.',
    text: 'Aprende los fundamentos técnicos y económicos de los activos digitales para no depender de señales ajenas ni modas momentáneas.',
  },
  {
    number: 'PILAR 02',
    title: 'ANÁLISIS',
    subtitle: 'Aprende a interpretar información del mercado.',
    text: 'Desarrolla la capacidad de evaluar gráficos, métricas on-chain y liquidez objetiva con rigor analítico por encima del ruido de internet.',
  },
  {
    number: 'PILAR 03',
    title: 'DISCIPLINA',
    subtitle: 'Construye una metodología para tomar decisiones responsables.',
    text: 'Aplica una gestión de riesgo estricta y control emocional para preservar tu capital y sostener un crecimiento consistente en el tiempo.',
  },
]

export default function SeminarExperience() {
  return (
    <section className="seminar-exp" id="experiencia">
      <Reveal className="seminar-exp__header">
        <span className="eyebrow">Por Qué FinanceMind</span>
        <h2 className="section-title">EXPERIENCIA FINANCEMIND</h2>
        <p className="seminar-exp__quote">
          “Más que aprender a invertir, buscamos desarrollar criterio financiero.”
        </p>
      </Reveal>

      <div className="seminar-exp__grid">
        {PILLARS.map((pillar) => (
          <SpotlightCard
            key={pillar.title}
            className="pillar-card"
            spotlightColor="rgba(124, 255, 0, 0.18)"
          >
            <span className="pillar-card__number">{pillar.number}</span>
            <h3 className="pillar-card__title">{pillar.title}</h3>
            <p className="pillar-card__subtitle" style={{ color: 'var(--white)', fontWeight: 500, marginBottom: '10px' }}>
              {pillar.subtitle}
            </p>
            <p className="pillar-card__text">{pillar.text}</p>
          </SpotlightCard>
        ))}
      </div>
    </section>
  )
}
