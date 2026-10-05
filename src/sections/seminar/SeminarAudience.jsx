import Reveal from '../../components/Reveal'

const AUDIENCE_PROFILES = [
  {
    badge: 'Perfil 01',
    title: 'Iniciantes en Inversión',
    text: 'Personas que recién empiezan en el mundo de las finanzas y buscan una guía honesta, paso a paso, sin falsas promesas ni conceptos confusos.',
  },
  {
    badge: 'Perfil 02',
    title: 'Estudiantes de Finanzas',
    text: 'Estudiantes y profesionales interesados en comprender el funcionamiento moderno de los mercados globales y la tecnología blockchain.',
  },
  {
    badge: 'Perfil 03',
    title: 'Interesados en Cripto',
    text: 'Personas que desean comprender de verdad qué hay detrás de Bitcoin y los criptoactivos, separando la innovación tecnológica del ruido especulativo.',
  },
  {
    badge: 'Perfil 04',
    title: 'Buscadores de Criterio',
    text: 'Personas que desean mejorar su educación financiera, proteger su capital y construir hábitos de análisis para tomar decisiones responsables.',
  },
]

export default function SeminarAudience() {
  return (
    <section className="seminar-audience" id="para-quien-es">
      <Reveal className="seminar-audience__header">
        <span className="eyebrow">Público Objetivo</span>
        <h2 className="section-title">¿PARA QUIÉN ES ESTE SEMINARIO?</h2>
      </Reveal>

      <div className="seminar-audience__grid">
        {AUDIENCE_PROFILES.map((profile) => (
          <Reveal as="div" className="audience-card" key={profile.title}>
            <span className="audience-card__badge">{profile.badge}</span>
            <h3 className="audience-card__title">{profile.title}</h3>
            <p className="audience-card__text">{profile.text}</p>
          </Reveal>
        ))}
      </div>

      {/* Ethical Commitment Disclaimer Box */}
      <Reveal className="ethical-box">
        <div className="ethical-box__icon-wrap">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <div className="ethical-box__content">
          <span className="ethical-box__title">Compromiso Ético FinanceMind</span>
          <h4 className="ethical-box__heading">Educación Real, Cero Promesas de Ganancias Garantizadas</h4>
          <p className="ethical-box__text">
            En FinanceMind Perú no vendemos fórmulas mágicas ni aseguramos rentabilidades fijas.
            Toda inversión en los mercados financieros conlleva riesgo. Nuestro propósito exclusivo es
            brindarte criterio, herramientas analíticas y disciplina de gestión de riesgo para que seas tú
            quien tome el control de tus decisiones financieras con total responsabilidad.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
