import { useState, useEffect, useCallback } from 'react'
import { NavigationContext } from './navigation-context'
import { scrollToId } from '../utils/scroll'

function getInitialPath() {
  if (typeof window === 'undefined') return '/'
  const path = window.location.pathname
  const hash = window.location.hash
  if (path.startsWith('/seminario') || hash === '#seminario') {
    return '/seminario'
  }
  return '/'
}

export function NavigationProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(getInitialPath)

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname
      const hash = window.location.hash
      if (path.startsWith('/seminario') || hash === '#seminario') {
        setCurrentPath('/seminario')
      } else {
        setCurrentPath('/')
      }
    }

    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('hashchange', handleLocationChange)
    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('hashchange', handleLocationChange)
    }
  }, [])

  const navigate = useCallback((path, hash = '') => {
    if (path === '/seminario') {
      if (window.location.pathname !== '/seminario') {
        window.history.pushState({}, '', '/seminario')
      }
      setCurrentPath('/seminario')
      if (hash) {
        setTimeout(() => scrollToId(hash), 60)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return
    }

    // Navigating to main page
    const targetUrl = hash ? `/${hash}` : '/'
    if (window.location.pathname !== '/' || window.location.hash !== hash) {
      window.history.pushState({}, '', targetUrl)
    }
    setCurrentPath('/')

    if (hash && hash !== '#top') {
      setTimeout(() => scrollToId(hash), 80)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])

  const isSeminar = currentPath === '/seminario'

  return (
    <NavigationContext.Provider value={{ currentPath, navigate, isSeminar }}>
      {children}
    </NavigationContext.Provider>
  )
}
