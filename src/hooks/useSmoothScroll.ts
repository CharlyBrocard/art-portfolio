import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

/**
 * Hook pour gérer le smooth scroll avec GSAP
 */
export const useSmoothScroll = () => {
  useEffect(() => {
    // Intercepter les clics sur les liens d'ancrage
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (anchor) {
        e.preventDefault()
        const href = anchor.getAttribute('href')

        if (href && href !== '#') {
          const targetElement = document.querySelector(href)

          if (targetElement) {
            gsap.to(window, {
              duration: 1.2,
              scrollTo: {
                y: targetElement,
                offsetY: 80, // Offset for fixed header
              },
              ease: 'power3.inOut',
            })
          }
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])
}
