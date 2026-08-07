import Reveal from '../components/Reveal'
import { LINKEDIN_URL } from '../constants'
import founderPhoto from '../assets/images/FOTO CV LINKD.jpeg'

export default function Founder() {
  return (
    <section className="founder" id="fundador">
      <div className="founder__inner">
        <Reveal className="founder__photo">
          <div className="founder__photo-frame">
            <img src={founderPhoto} alt="Jesús Ríos, fundador de FinanceMind Perú" className="founder__photo-img" />
          </div>
        </Reveal>

        <Reveal className="founder__copy">
          <span className="eyebrow">Fundador</span>
          <h2 className="founder__name">Jesus Andree Rios Echegaray</h2>
          <p className="founder__role">Fundador de FinanceMind Perú</p>
          <p className="founder__text">
            FinanceMind Perú nace de la visión de Jesús Ríos de crear un espacio donde las
            personas puedan acercarse al mundo de los activos digitales a través del
            conocimiento, la educación y el análisis.
          </p>

          <div className="founder__signature">
            <span className="founder__signature-name">Jesús Ríos</span>
            <span className="founder__signature-role">Founder</span>
            <a
              href={LINKEDIN_URL}
              className="founder__signature-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver LinkedIn ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
