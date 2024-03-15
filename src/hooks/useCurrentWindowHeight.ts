import { useState, useEffect } from 'react'

const useCurrentWindowHeight = () => {
  const [currentHeight, setCurrentHeight] = useState<number>(0)

  useEffect(() => {
    const updateHeight = () => setCurrentHeight(window.innerHeight)

    updateHeight()
    window.addEventListener('resize', updateHeight)

    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  return currentHeight
}

export default useCurrentWindowHeight
