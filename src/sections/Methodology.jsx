import { useEffect, useRef, useState } from 'react'
import Reveal from '../components/Reveal'

const STEPS = [
  { number: '01', title: 'Aprende', text: 'Comprende los conceptos fundamentales.' },
  { number: '02', title: 'Analiza', text: 'Aprende a interpretar información del mercado.' },
  { number: '03', title: 'Planifica', text: 'Construye criterios y estrategias.' },
  {
    number: '04',
    title: 'Decide',
    text: 'Toma decisiones basadas en conocimiento y disciplina.',
  },
]

export default function Methodology() {
  const timelineRef = useRef(null)
  // 0 → 1: how far the visitor has scrolled through the timeline. Replaces
  // the old "trigger once, then run a fixed-timer stagger" approach with a
  // fill that actually tracks scroll position, React-Bits style.
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = timelineRef.current
    if (!el) return
    let ticking = false

    const updateProgress = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const start = vh * 0.85 // timeline top enters this far into the viewport
      const end = vh * 0.35 // timeline top reaches this far → fully filled
      const raw = (start - rect.top) / (start - end)
      setProgress(Math.min(1, Math.max(0, raw)))
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section className="method" id="metodologia">
      <Reveal className="method__header">
        <span className="eyebrow">Metodología</span>
        <h2 className="section-title">
          UN PROCESO CLARO,
          <br />
          PASO A PASO
        </h2>
      </Reveal>

      <div className="method__timeline" ref={timelineRef}>
        <div className="method__line" aria-hidden="true">
          <div className="method__line-fill" style={{ width: `${progress * 100}%` }}></div>
        </div>

        {STEPS.map((step, i) => {
          const isActive = progress >= (i + 0.4) / STEPS.length
          return (
            <Reveal as="div" className={`method-step${isActive ? ' is-active' : ''}`} key={step.number}>
              <span className="method-step__number">{step.number}</span>
              <h3 className="method-step__title">{step.title}</h3>
              <p className="method-step__text">{step.text}</p>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
