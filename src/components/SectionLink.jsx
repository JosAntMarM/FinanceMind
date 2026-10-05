import { useNav } from '../hooks/useNav'
import { scrollToId } from '../utils/scroll'

/**
 * In-page or cross-page anchor link.
 * If currently on the seminar page and an anchor from the main page is clicked,
 * it routes back to the main page and smooth scrolls to the target section.
 */
export default function SectionLink({ href, className, onClick, children, ...rest }) {
  const { isSeminar, navigate } = useNav()

  const handleClick = (e) => {
    e.preventDefault()

    if (href === '/seminario') {
      navigate('/seminario')
      onClick?.(e)
      return
    }

    if (isSeminar) {
      // Return to main page with hash
      navigate('/', href === '#top' ? '' : href)
    } else {
      // Already on main page
      if (href === '#top') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        scrollToId(href)
      }
    }

    onClick?.(e)
  }

  return (
    <a href={href} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}
