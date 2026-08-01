import { scrollToId } from '../utils/scroll'

/**
 * In-page anchor link with the same offset-aware smooth scroll the vanilla
 * script provided. `#top` is left to the browser's native (CSS
 * scroll-behavior: smooth) jump, exactly like the original.
 */
export default function SectionLink({ href, className, onClick, children, ...rest }) {
  const handleClick = (e) => {
    if (href !== '#top') {
      e.preventDefault()
      scrollToId(href)
    }
    onClick?.(e)
  }

  return (
    <a href={href} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
