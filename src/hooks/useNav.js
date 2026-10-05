import { useContext } from 'react'
import { NavigationContext } from '../context/navigation-context'

export function useNav() {
  return useContext(NavigationContext)
}
