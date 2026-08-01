import { useEffect, useRef, useState } from 'react'

/**
 * Observes an element and flips `isVisible` to true the first time it enters
 * the viewport. Mirrors the original vanilla-JS IntersectionObserver reveal
 * pattern (data-reveal + .is-visible), but as a reusable hook.
 */
export default function useReveal(options = { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      })
    }, options)

    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [ref, isVisible]
}
