export const WHATSAPP_URL =
  'https://wa.me/51963889442?text=Hola%20Jesús,%20estoy%20interesado%20en%20aprender%20a%20invertir%20de%20forma%20profesional.%20Mi%20nombre%20es:'

export const TIKTOK_URL = 'https://www.tiktok.com/@financemindperu'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/jesus-andree-rios-echegaray/'
export const YOUTUBE_URL = '#'

// Internal route for the FinanceMind Seminar page
export const SEMINAR_ROUTE = '/seminario'

export const NAV_LINKS = [
  { href: '#top', label: 'Inicio' },
  { href: '#academia', label: 'Academia' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#metodologia', label: 'Metodología' },
  { href: '#fundador', label: 'Fundador' },
]

// Configuration for the upcoming seminar and live countdown
// Easily editable for upcoming events
export const NEXT_SEMINAR_CONFIG = {
  title: 'Introducción al Mercado de Criptomonedas',
  subtitle:
    'Comprende cómo funcionan los activos digitales, cómo analizar el mercado y cuáles son los principales factores que influyen en su comportamiento.',
  dateDisplay: 'Sábado, 24 de Octubre de 2026',
  timeDisplay: '19:00 - 21:30 (Hora Perú / GMT-5)',
  modality: 'Online en Vivo (Streaming Privado HD)',
  duration: '2.5 Horas de Formación Práctica',
  spotsTotal: 50,
  spotsRemaining: 14,
  level: 'Principiante a Intermedio',
  platform: 'Sala Privada (Zoom HD + Q&A)',
  // Target date in ISO 8601 format for the live countdown timer
  targetDate: '2026-10-24T19:00:00-05:00',
  whatsappBookingBase: 'https://wa.me/51963889442',
}
