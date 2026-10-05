import Reveal from '../../components/Reveal'

const AGENDA_MODULES = [
  {
    num: '01',
    title: 'Introducción al Ecosistema',
    desc: 'Bienvenida institucional, contextualización de los mercados globales, origen y evolución del dinero digital hacia el estándar blockchain.',
  },
  {
    num: '02',
    title: 'Mercado Financiero y Dinámica de Precios',
    desc: 'Cómo interactúan la oferta y la demanda, actores institucionales vs. minoristas, formación de tendencias y ciclos de liquidez.',
  },
  {
    num: '03',
    title: 'Criptomonedas y Seguridad Blockchain',
    desc: 'Arquitectura de Bitcoin y Ethereum, contratos inteligentes, diferencias entre tokens y protocolos, y uso correcto de billeteras frías y calientes.',
  },
  {
    num: '04',
    title: 'Análisis Técnico y Gráficos en Vivo',
    desc: 'Interpretación práctica de velas japonesas, lectura de temporalidades, soportes y resistencias relevantes, y análisis del volumen.',
  },
  {
    num: '05',
    title: 'Gestión del Riesgo y Preservación de Capital',
    desc: 'Construcción de un plan operativo responsable: cálculo de riesgo por operación, uso del stop loss, diversificación y control psicológico.',
  },
  {
    num: '06',
    title: 'Preguntas, Respuestas y Casos Prácticos',
    desc: 'Espacio abierto y directo con el instructor para resolver dudas puntuales de los participantes y analizar ejemplos de mercado en tiempo real.',
  },
]

export default function SeminarAgenda() {
  return (
    <section className="seminar-agenda" id="agenda">
      <Reveal className="seminar-agenda__header">
        <span className="eyebrow">Estructura del Evento</span>
        <h2 className="section-title">AGENDA DEL SEMINARIO</h2>
      </Reveal>

      <div className="seminar-agenda__timeline">
        {AGENDA_MODULES.map((item) => (
          <Reveal as="div" className="agenda-item" key={item.num}>
            <span className="agenda-item__num">{item.num}</span>
            <div className="agenda-item__content">
              <h3 className="agenda-item__title">{item.title}</h3>
              <p className="agenda-item__desc">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
