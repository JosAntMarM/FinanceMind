import { createContext } from 'react'

export const NavigationContext = createContext({
  currentPath: '/',
  navigate: () => {},
  isSeminar: false,
})
