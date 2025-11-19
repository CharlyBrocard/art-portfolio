import { useEffect, useRef } from 'react'
import styles from './ArtNouveauCurves.module.css'
import { gsap } from 'gsap'

const ArtNouveauCurves = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const curves = containerRef.current.querySelectorAll(`.${styles.curve}`)

    curves.forEach((curve, index) => {
      const path = curve as SVGPathElement
      const length = path.getTotalLength()

      // Configuration initiale pour l'animation de dessin
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      })

      // Animation du tracé avec un léger délai entre chaque courbe
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 3 + index * 0.2,
        ease: 'power1.inOut',
        delay: 1 + index * 0.3,
      })

      // Animation d'opacité plus subtile
      gsap.to(path, {
        opacity: 0.15,
        duration: 2,
        ease: 'power1.inOut',
        delay: 1 + index * 0.3,
      })

      // Animation de pulsation très subtile après le dessin
      gsap.to(path, {
        opacity: 0.20,
        duration: 5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 4 + index * 0.3,
      })
    })
  }, [])

  return (
    <div ref={containerRef} className={styles.container}>
      <svg className={styles.svg} viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice">
        {/* Courbe principale Art Nouveau - fluide et organique */}
        <path
          className={styles.curve}
          d="M 100 450 Q 200 200, 400 350 Q 600 500, 700 300 Q 800 100, 1000 400 Q 1200 700, 1300 450"
          fill="none"
          stroke="var(--color-terracotta)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0"
        />

        {/* Courbe secondaire - parallèle à la première */}
        <path
          className={styles.curve}
          d="M 80 470 Q 180 220, 380 370 Q 580 520, 680 320 Q 780 120, 980 420 Q 1180 720, 1280 470"
          fill="none"
          stroke="var(--color-sage)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0"
        />

        {/* Ligne sinueuse fine */}
        <path
          className={styles.curve}
          d="M 300 100 Q 400 250, 500 150 Q 600 50, 700 200 Q 800 350, 900 250 Q 1000 150, 1100 300"
          fill="none"
          stroke="var(--color-copper)"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="5,10"
          opacity="0"
        />

        {/* Courbe en S élégante */}
        <path
          className={styles.curve}
          d="M 200 700 Q 400 600, 600 650 Q 800 700, 1000 600 Q 1200 500, 1300 650"
          fill="none"
          stroke="var(--color-rose)"
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity="0"
        />

        {/* Arabesque complexe */}
        <path
          className={styles.curve}
          d="M 50 250 Q 150 150, 250 250 Q 350 350, 450 250 Q 550 150, 650 250 Q 750 350, 850 250"
          fill="none"
          stroke="var(--color-forest)"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0"
        />

        {/* Courbe verticale ondulante */}
        <path
          className={styles.curve}
          d="M 1200 100 Q 1100 250, 1150 400 Q 1200 550, 1100 700 Q 1050 800, 1100 850"
          fill="none"
          stroke="var(--color-coral)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0"
        />

        {/* Petites volutes décoratives */}
        <path
          className={styles.curve}
          d="M 500 500 Q 520 480, 540 500 Q 560 520, 540 540 Q 520 560, 500 540 Q 480 520, 500 500"
          fill="none"
          stroke="var(--color-terracotta)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0"
        />

        <path
          className={styles.curve}
          d="M 800 600 Q 820 580, 840 600 Q 860 620, 840 640 Q 820 660, 800 640 Q 780 620, 800 600"
          fill="none"
          stroke="var(--color-sage)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0"
        />
      </svg>
    </div>
  )
}

export default ArtNouveauCurves
