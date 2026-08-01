import Reveal from '../components/Reveal'
import SpotlightCard from '../components/reactbits/SpotlightCard'

const CARDS = [
  {
    number: '01',
    title: 'Educación',
    text: 'Comprende los fundamentos detrás de las criptomonedas y los mercados digitales.',
  },
  {
    number: '02',
    title: 'Análisis',
    text: 'Desarrolla criterios para interpretar información y analizar escenarios del mercado.',
  },
  {
    number: '03',
    title: 'Estrategia',
    text: 'Aprende metodologías para estructurar tus decisiones con mayor disciplina.',
  },
  {
    number: '04',
    title: 'Visión',
    text: 'Comprende hacia dónde evoluciona el ecosistema financiero digital.',
  },
]

export default function ValueProps() {
  return (
    <section className="value">
      <Reveal className="value__header">
        <span className="eyebrow">Propuesta de valor</span>
        <h2 className="section-title">
          CUATRO PILARES,
          <br />
          UNA MISMA DISCIPLINA
        </h2>
      </Reveal>

      <div className="value__grid">
        {CARDS.map((card) => (
          <Reveal as="article" className="value-card" key={card.number}>
            <SpotlightCard className="value-card__spotlight" spotlightColor="rgba(124, 255, 0, 0.12)">
              <span className="value-card__number">{card.number}</span>
              <h3 className="value-card__title">{card.title}</h3>
              <p className="value-card__text">{card.text}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
