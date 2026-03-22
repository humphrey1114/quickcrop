import { useState, useEffect } from 'react'

export default function useScrollReveal(ref, options = {}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(el)
      }
    }, {
      threshold: options.threshold ?? 0.15,
      rootMargin: options.rootMargin ?? '0px',
    })

    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, options.threshold, options.rootMargin])

  return isVisible
}
