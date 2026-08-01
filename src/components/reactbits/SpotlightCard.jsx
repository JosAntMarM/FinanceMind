/**
 * SpotlightCard — adapted from React Bits (https://reactbits.dev)
 * Source: DavidHDev/react-bits, src/content/Components/SpotlightCard
 * Zero extra dependencies (unlike BlurText, this one doesn't need `motion`).
 * Only change from the original: restyled in SpotlightCard.css to match
 * FinanceMind's dark/cyan/green palette instead of the library's default
 * rounded dark-gray card.
 */
import { useRef } from 'react'
import './SpotlightCard.css'

export default function SpotlightCard({ children, className = '', spotlightColor = 'rgba(0, 207, 255, 0.18)' }) {
  const divRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    divRef.current.style.setProperty('--mouse-x', `${x}px`)
    divRef.current.style.setProperty('--mouse-y', `${y}px`)
    divRef.current.style.setProperty('--spotlight-color', spotlightColor)
  }

  return (
    <div ref={divRef} onMouseMove={handleMouseMove} className={`card-spotlight ${className}`}>
      {children}
    </div>
  )
}
