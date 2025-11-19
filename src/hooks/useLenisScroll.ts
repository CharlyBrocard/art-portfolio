import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'

export const useLenisScroll = () => {
  useEffect(() => {
    // Initialiser Lenis avec une inertie modérée
    const lenis = new Lenis({
      duration: 1.2, // Durée de l'animation (plus = plus lent)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Courbe d'easing personnalisée
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1, // Sensibilité de la molette
      touchMultiplier: 2, // Sensibilité du touch
      infinite: false,
    })

    // Connecter Lenis avec GSAP ScrollTrigger
    lenis.on('scroll', () => {
      // ScrollTrigger sera mis à jour automatiquement
    })

    // Boucle d'animation
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Ajouter Lenis à GSAP ticker pour une intégration parfaite
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // Cleanup
    return () => {
      lenis.destroy()
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000)
      })
    }
  }, [])
}
