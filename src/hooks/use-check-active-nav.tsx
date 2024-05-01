import { useLocation } from 'react-router-dom'

export default function useCheckActiveNav(): { checkActiveNav: (nav: string) => boolean } {
  const { pathname } = useLocation()

  const checkActiveNav = (nav: string) => {
    const pathArray = pathname.split('/').filter((item) => item !== '')

    if (nav === '/' && pathArray.length < 1) return true

    return pathArray.includes(nav.replace(/^\//, ''))
  }


  return { checkActiveNav }
}
