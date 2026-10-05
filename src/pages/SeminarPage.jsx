import { useEffect } from 'react'
import SeminarHero from '../sections/seminar/SeminarHero'
import SeminarFeatured from '../sections/seminar/SeminarFeatured'
import SeminarLearning from '../sections/seminar/SeminarLearning'
import SeminarAudience from '../sections/seminar/SeminarAudience'
import SeminarExperience from '../sections/seminar/SeminarExperience'
import SeminarAgenda from '../sections/seminar/SeminarAgenda'
import SeminarRegistration from '../sections/seminar/SeminarRegistration'

export default function SeminarPage() {
  useEffect(() => {
    const originalTitle = document.title
    document.title = 'Seminarios FinanceMind Perú — Aprende. Analiza. Invierte con Conocimiento'
    return () => {
      document.title = originalTitle
    }
  }, [])

  return (
    <div className="seminar-page">
      <SeminarHero />
      <SeminarFeatured />
      <SeminarLearning />
      <SeminarAudience />
      <SeminarExperience />
      <SeminarAgenda />
      <SeminarRegistration />
    </div>
  )
}
