import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'

export const useLenisScroll = () => {
  useEffect(() => {
    // Initialiser Lenis avec une configuration optimisée pour mobile
    const lenis = new Lenis({
      duration: 1.2, // Durée de l'animation (plus = plus lent)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Courbe d'easing personnalisée
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1, // Sensibilité de la molette
      touchMultiplier: 2, // Sensibilité du touch pour mobile
      infinite: false,
      autoResize: true,
    })

    // Ajouter la classe 'lenis' au html pour les styles CSS
    document.documentElement.classList.add('lenis')

    // Boucle d'animation avec GSAP ticker (meilleure performance)
    const update = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(update)
    gsap.ticker.lagSmoothing(0)

    // Cleanup
    return () => {
      lenis.destroy()
      gsap.ticker.remove(update)
      document.documentElement.classList.remove('lenis')
    }
  }, [])
}
