import { useState, useEffect } from 'react'
import Reveal from '../../components/Reveal'
import { NEXT_SEMINAR_CONFIG } from '../../constants'
import { scrollToId } from '../../utils/scroll'

export default function SeminarFeatured() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    isFinished: false,
  })

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(NEXT_SEMINAR_CONFIG.targetDate).getTime()
      const now = new Date().getTime()
      const difference = target - now

      if (isNaN(difference) || difference <= 0) {
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00',
          isFinished: true,
        })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
        isFinished: false,
      })
    }

    calculateTime()
    const timer = setInterval(calculateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleParticipate = (e) => {
    e.preventDefault()
    scrollToId('#registro')
  }

  // Calculate spots percentage
  const reservedSpots = NEXT_SEMINAR_CONFIG.spotsTotal - NEXT_SEMINAR_CONFIG.spotsRemaining
  const percentReserved = Math.round((reservedSpots / NEXT_SEMINAR_CONFIG.spotsTotal) * 100)

  return (
    <section className="seminar-next" id="proximo-seminario">
      <div className="seminar-next__container">
        <Reveal className="seminar-next__header">
          <span className="eyebrow">Edición Confirmada</span>
          <h2 className="section-title">PRÓXIMO SEMINARIO</h2>
        </Reveal>

        <Reveal as="div" className="seminar-card">
          <div className="seminar-card__top">
            <div className="seminar-card__live-pill">
              <span className="seminar-card__live-dot"></span>
              {timeLeft.isFinished ? 'En vivo ahora / Próxima fecha' : 'En vivo vía streaming HD'}
            </div>
            <div className="seminar-card__badge-mode">
              {NEXT_SEMINAR_CONFIG.modality}
            </div>
          </div>

          <div className="seminar-card__body">
            <h3 className="seminar-card__title">
              {NEXT_SEMINAR_CONFIG.title}
            </h3>

            <p className="seminar-card__desc">
              {NEXT_SEMINAR_CONFIG.subtitle}
            </p>

            <div className="seminar-card__meta-grid">
              <div className="seminar-meta-item">
                <span className="seminar-meta-item__label">Fecha del Evento</span>
                <span className="seminar-meta-item__value">{NEXT_SEMINAR_CONFIG.dateDisplay}</span>
              </div>

              <div className="seminar-meta-item">
                <span className="seminar-meta-item__label">Horario Oficial</span>
                <span className="seminar-meta-item__value">{NEXT_SEMINAR_CONFIG.timeDisplay}</span>
              </div>

              <div className="seminar-meta-item">
                <span className="seminar-meta-item__label">Modalidad y Plataforma</span>
                <span className="seminar-meta-item__value">{NEXT_SEMINAR_CONFIG.platform}</span>
              </div>

              <div className="seminar-meta-item">
                <span className="seminar-meta-item__label">Duración Intensiva</span>
                <span className="seminar-meta-item__value">{NEXT_SEMINAR_CONFIG.duration}</span>
              </div>

              <div className="seminar-meta-item">
                <span className="seminar-meta-item__label">Nivel de Exigencia</span>
                <span className="seminar-meta-item__value">{NEXT_SEMINAR_CONFIG.level}</span>
              </div>

              <div className="seminar-meta-item">
                <span className="seminar-meta-item__label">Material Incluido</span>
                <span className="seminar-meta-item__value">PDF + Grabación por 7 días</span>
              </div>
            </div>

            {/* Spots capacity indicator */}
            <div className="seminar-card__spots">
              <div className="seminar-card__spots-header">
                <span className="seminar-card__spots-label">Disponibilidad de sala:</span>
                <span className="seminar-card__spots-count">
                  ¡Solo quedan {NEXT_SEMINAR_CONFIG.spotsRemaining} cupos de {NEXT_SEMINAR_CONFIG.spotsTotal}!
                </span>
              </div>
              <div className="seminar-card__progress-track" role="progressbar" aria-valuenow={percentReserved} aria-valuemin="0" aria-valuemax="100">
                <div
                  className="seminar-card__progress-fill"
                  style={{ width: `${percentReserved}%` }}
                ></div>
              </div>
            </div>

            {/* Countdown section */}
            <div className="seminar-countdown">
              <span className="seminar-countdown__label">
                Cuenta regresiva para el inicio
              </span>

              <div className="seminar-countdown__grid">
                <div className="countdown-box">
                  <span className="countdown-box__num">{timeLeft.days}</span>
                  <span className="countdown-box__unit">Días</span>
                </div>
                <div className="countdown-box">
                  <span className="countdown-box__num">{timeLeft.hours}</span>
                  <span className="countdown-box__unit">Horas</span>
                </div>
                <div className="countdown-box">
                  <span className="countdown-box__num">{timeLeft.minutes}</span>
                  <span className="countdown-box__unit">Minutos</span>
                </div>
                <div className="countdown-box">
                  <span className="countdown-box__num">{timeLeft.seconds}</span>
                  <span className="countdown-box__unit">Segundos</span>
                </div>
              </div>
            </div>

            <div className="seminar-card__cta">
              <a
                href="#registro"
                onClick={handleParticipate}
                className="btn btn--primary btn--large"
              >
                Quiero participar
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
