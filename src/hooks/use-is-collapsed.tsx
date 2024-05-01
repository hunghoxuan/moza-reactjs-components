import { useEffect } from 'react'
import useLocalStorage from './use-local-storage'

export default function useIsCollapsed (): [boolean, React.Dispatch<React.SetStateAction<boolean>>] {
  const [isCollapsed, setIsCollapsed] = useLocalStorage({
    key: 'collapsed-sidebar',
    defaultValue: false
  })

  useEffect(() => {
    const handleResize = () => {
      // Update isCollapsed based on window.innerWidth
      setIsCollapsed(window.innerWidth < 768 ? false : isCollapsed)
      return null
    }

    // Initial setup
    handleResize()

    // Add event listener for window resize
    window.addEventListener('resize', handleResize)

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isCollapsed, setIsCollapsed])

  return [isCollapsed, setIsCollapsed] as const
}
