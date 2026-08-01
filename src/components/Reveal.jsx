import useReveal from '../hooks/useReveal'

/**
 * Generic scroll-reveal wrapper. Replaces the old `data-reveal` attribute +
 * global observer with a self-contained component: each instance owns its
 * own IntersectionObserver via useReveal().
 */
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, visible] = useReveal()
  const classes = ['reveal', visible ? 'is-visible' : '', className].filter(Boolean).join(' ')

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  )
}
