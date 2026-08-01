import { useEffect, useRef } from 'react'
import Reveal from '../components/Reveal'
import SectionLink from '../components/SectionLink'
import SplitText from '../components/reactbits/SplitText'
import Aurora from '../components/reactbits/Aurora'

export default function Hero() {
  const heroRef = useRef(null)
  const cyanGlowRef = useRef(null)
  const greenGlowRef = useRef(null)

  // Subtle pointer-driven parallax on the hero glows (desktop only).
  useEffect(() => {
    const hero = heroRef.current
    if (!hero || !window.matchMedia('(pointer: fine)').matches) return

    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30
      const y = (e.clientY / window.innerHeight - 0.5) * 30
      if (cyanGlowRef.current) cyanGlowRef.current.style.transform = `translate(${x}px, ${y}px)`
      if (greenGlowRef.current) greenGlowRef.current.style.transform = `translate(${-x}px, ${-y}px)`
    }

    hero.addEventListener('mousemove', handleMove)
    return () => hero.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <section className="hero" id="top" ref={heroRef}>
      <div className="hero__aurora" aria-hidden="true">
        <Aurora colorStops={['#00CFFF', '#7CFF00', '#00CFFF']} amplitude={0.7} blend={0.45} speed={0.35} />
      </div>
      <div className="hero__market-line" aria-hidden="true">
        <svg viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path
            className="market-path"
            d="M -50,620 L 120,600 L 260,660 L 380,540 L 520,590 L 660,460 L 800,500 L 940,360 L 1080,410 L 1220,240 L 1360,290 L 1500,120"
          />
        </svg>
      </div>
      <div className="hero__glow hero__glow--cyan" ref={cyanGlowRef} aria-hidden="true"></div>
      <div className="hero__glow hero__glow--green" ref={greenGlowRef} aria-hidden="true"></div>
      <div className="hero__grid" aria-hidden="true"></div>

      <div className="hero__content">
        <Reveal as="span" className="eyebrow">
          FINANCEMIND PERÚ
        </Reveal>
        <h1 className="hero__title">
          <SplitText
            text="EL CONOCIMIENTO"
            tag="span"
            splitType="chars"
            delay={35}
            duration={0.9}
            ease="power3.out"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-80px"
          />
          <SplitText
            text="ES LA MEJOR"
            tag="span"
            className="reveal--accent"
            splitType="chars"
            delay={35}
            duration={0.9}
            ease="power3.out"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-80px"
          />
          <SplitText
            text="INVERSIÓN."
            tag="span"
            className="reveal--accent"
            splitType="chars"
            delay={35}
            duration={0.9}
            ease="power3.out"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.2}
            rootMargin="-80px"
          />
        </h1>
        <Reveal as="p" className="hero__subtitle">
          Academia de inversiones especializada en criptomonedas.
        </Reveal>
        <Reveal as="p" className="hero__text">
          Aprende a comprender el mercado de activos digitales, analizar oportunidades y tomar
          decisiones financieras con mayor conocimiento.
        </Reveal>

        <Reveal className="hero__actions">
          <SectionLink href="#academia" className="btn btn--primary">
            Conoce la Academia
          </SectionLink>
          <SectionLink href="#nosotros" className="btn btn--ghost">
            Descubre FinanceMind
          </SectionLink>
        </Reveal>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span></span>
        <p>Scroll</p>
      </div>
    </section>
  )
}
