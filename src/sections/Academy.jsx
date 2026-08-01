import Reveal from '../components/Reveal'

const MODULES = [
  { number: '01', name: 'Fundamentos de Criptomonedas' },
  { number: '02', name: 'Blockchain y Activos Digitales' },
  { number: '03', name: 'Análisis de Mercados' },
  { number: '04', name: 'Gestión del Riesgo' },
  { number: '05', name: 'Estrategias de Inversión' },
  { number: '06', name: 'Psicología del Inversor' },
]

export default function Academy() {
  return (
    <section className="academy" id="academia">
      <Reveal className="academy__header">
        <span className="eyebrow">Academia FinanceMind</span>
        <h2 className="section-title">
          CONVIERTE LA INFORMACIÓN
          <br />
          EN CONOCIMIENTO.
        </h2>
      </Reveal>

      <div className="academy__list">
        {MODULES.map((mod) => (
          <Reveal as="div" className="academy-module" key={mod.number}>
            <span className="academy-module__number">{mod.number}</span>
            <span className="academy-module__name">{mod.name}</span>
            <span className="academy-module__arrow" aria-hidden="true">
              →
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
