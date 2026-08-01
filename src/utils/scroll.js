// Smooth-scrolls to a section, offsetting for the fixed/sticky navbar height.
export function scrollToId(hash, offset = 90) {
  const target = document.querySelector(hash)
  if (!target) return
  const top = target.getBoundingClientRect().top + window.pageYOffset - offset
  window.scrollTo({ top, behavior: 'smooth' })
}
