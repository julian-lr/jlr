import { useState, useEffect } from 'react'

// Hook to detect if the device is a tablet (between 600px and 1024px)
export function useIsTablet(): boolean {
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkIsTablet = () => {
      const width = window.innerWidth
      setIsTablet(width >= 600 && width <= 1024)
    }

    checkIsTablet()
    window.addEventListener('resize', checkIsTablet)
    return () => window.removeEventListener('resize', checkIsTablet)
  }, [])

  return isTablet
}
