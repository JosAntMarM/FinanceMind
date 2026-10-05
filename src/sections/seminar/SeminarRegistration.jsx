import { useState } from 'react'
import Reveal from '../../components/Reveal'
import { WHATSAPP_URL, NEXT_SEMINAR_CONFIG } from '../../constants'

export default function SeminarRegistration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'Principiante (Desde cero)',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      return
    }
    setSubmitted(true)
  }

  const whatsappConfirmUrl = `${NEXT_SEMINAR_CONFIG.whatsappBookingBase}?text=${encodeURIComponent(
    `Hola Jesús, acabo de registrar mi lugar en la página de FinanceMind para el seminario "${NEXT_SEMINAR_CONFIG.title}".\n\nMis datos:\n- Nombre: ${formData.name}\n- Email: ${formData.email}\n- WhatsApp: ${formData.phone}\n- Nivel: ${formData.experience}\n\nQuedo a la espera de los accesos a la sala. ¡Muchas gracias!`
  )}`

  return (
    <section className="seminar-reg" id="registro">
      <div className="seminar-reg__container">
        <Reveal className="seminar-reg__header">
          <span className="eyebrow">Inscripciones Abiertas</span>
          <h2 className="seminar-reg__title">
            TU PRÓXIMO PASO COMIENZA
            <br />
            CON CONOCIMIENTO.
          </h2>
          <p className="seminar-reg__text">
            Reserva tu lugar en el próximo seminario FinanceMind y adquiere las herramientas
            para comprender los mercados con criterio y responsabilidad.
          </p>
        </Reveal>

        <Reveal as="div" className="seminar-form-card">
          {!submitted ? (
            <form onSubmit={handleSubmit} noValidate>
              <div className="seminar-form-grid">
                <div className="form-group">
                  <label htmlFor="reg-name" className="form-label">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="reg-name"
                    name="name"
                    required
                    placeholder="Ej. Juan Pérez"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="reg-email" className="form-label">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="reg-email"
                    name="email"
                    required
                    placeholder="tucorreo@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="reg-phone" className="form-label">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="reg-phone"
                    name="phone"
                    required
                    placeholder="+51 987 654 321"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="reg-exp" className="form-label">
                    Nivel de Experiencia
                  </label>
                  <select
                    id="reg-exp"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Principiante (Desde cero)">Principiante (Desde cero)</option>
                    <option value="Intermedio (Conocimientos básicos)">Intermedio (Conocimientos básicos)</option>
                    <option value="Avanzado (He invertido antes)">Avanzado (He invertido antes)</option>
                  </select>
                </div>
              </div>

              {/* Inclusions checklist */}
              <div className="seminar-form__perks">
                <div className="perk-item">
                  <span className="perk-item__check">✓</span>
                  <span>Acceso en directo a la sala privada HD</span>
                </div>
                <div className="perk-item">
                  <span className="perk-item__check">✓</span>
                  <span>Grabación en video por 7 días</span>
                </div>
                <div className="perk-item">
                  <span className="perk-item__check">✓</span>
                  <span>Material de estudio en PDF descargable</span>
                </div>
                <div className="perk-item">
                  <span className="perk-item__check">✓</span>
                  <span>Sesión interactiva de preguntas y respuestas</span>
                </div>
              </div>

              <div className="seminar-form__actions">
                <button
                  type="submit"
                  className="btn btn--primary btn--large seminar-form__submit"
                >
                  Reservar mi lugar
                </button>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="seminar-form__direct-wa"
                >
                  ¿Tienes dudas? Escríbenos directamente por WhatsApp →
                </a>
              </div>
            </form>
          ) : (
            <div className="seminar-success">
              <div className="seminar-success__icon">✓</div>
              <h3 className="seminar-success__title">¡Lugar Pre-reservado con Éxito!</h3>
              <p className="seminar-success__text">
                Muchas gracias, <strong>{formData.name}</strong>. Para validar tu cupo y
                recibir el enlace directo de la sala de streaming, confirma tu asistencia a través de nuestro WhatsApp oficial.
              </p>

              <div className="seminar-form__actions">
                <a
                  href={whatsappConfirmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--large seminar-form__submit"
                >
                  Confirmar mi cupo vía WhatsApp
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false)
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      experience: 'Principiante (Desde cero)',
                    })
                  }}
                  className="btn btn--ghost"
                  style={{ marginTop: '10px' }}
                >
                  Registrar otro participante
                </button>
              </div>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
