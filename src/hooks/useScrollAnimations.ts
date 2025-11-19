import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Hook pour les animations au scroll avec GSAP
 */
export const useScrollAnimations = () => {
  useEffect(() => {
    // Animation des numéros de la timeline
    gsap.utils.toArray<HTMLElement>('.artwork-number').forEach((element) => {
      gsap.fromTo(
        element,
        {
          scale: 0,
          opacity: 0,
          rotation: -180,
        },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    // Animation des cartes d'œuvres
    gsap.utils.toArray<HTMLElement>('.artwork-card').forEach((element, index) => {
      const isEven = index % 2 === 0
      const xOffset = isEven ? -100 : 100

      gsap.fromTo(
        element,
        {
          x: xOffset,
          opacity: 0,
          rotationY: isEven ? -15 : 15,
        },
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'top 50%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    // Animation du titre About
    gsap.fromTo(
      '.about-title',
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-title',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
}
