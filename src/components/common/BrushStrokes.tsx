import { useEffect, useRef } from 'react'
import styles from './BrushStrokes.module.css'
import { gsap } from 'gsap'

const BrushStrokes = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const strokes = containerRef.current.querySelectorAll(`.${styles.stroke}`)

    strokes.forEach((stroke, index) => {
      const path = stroke as SVGPathElement
      const length = path.getTotalLength()

      // Configuration initiale pour l'animation de dessin
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      })

      // Animation du tracé
      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 2 + index * 0.3,
        ease: 'power2.out',
        delay: 0.5 + index * 0.4,
      })

      // Animation d'opacité et de largeur pour effet de pinceau
      gsap.to(path, {
        opacity: 0.6,
        duration: 1.5,
        ease: 'power1.inOut',
        delay: 0.5 + index * 0.4,
      })
    })
  }, [])

  return (
    <div ref={containerRef} className={styles.container}>
      <svg className={styles.svg} viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Coup de pinceau 1 - Terracotta - horizontal fluide */}
        <path
          className={styles.stroke}
          d="M 50 150 Q 200 140, 350 160 Q 500 180, 650 155 Q 800 130, 900 150"
          fill="none"
          stroke="var(--color-terracotta)"
          strokeWidth="25"
          strokeLinecap="round"
          opacity="0"
        />

        {/* Coup de pinceau 2 - Sage - courbe douce */}
        <path
          className={styles.stroke}
          d="M 200 400 Q 350 350, 500 380 Q 650 410, 850 370"
          fill="none"
          stroke="var(--color-sage)"
          strokeWidth="20"
          strokeLinecap="round"
          opacity="0"
        />

        {/* Coup de pinceau 3 - Copper - diagonal expressif */}
        <path
          className={styles.stroke}
          d="M 100 600 Q 300 550, 450 580 Q 600 610, 750 570 Q 900 530, 1050 560"
          fill="none"
          stroke="var(--color-copper)"
          strokeWidth="30"
          strokeLinecap="round"
          opacity="0"
        />

        {/* Coup de pinceau 4 - Rose - petit accent */}
        <path
          className={styles.stroke}
          d="M 800 250 Q 900 230, 1000 255 Q 1100 280, 1150 260"
          fill="none"
          stroke="var(--color-rose)"
          strokeWidth="18"
          strokeLinecap="round"
          opacity="0"
        />

        {/* Coup de pinceau 5 - Coral - courbe verticale */}
        <path
          className={styles.stroke}
          d="M 950 100 Q 930 200, 960 300 Q 990 400, 970 500"
          fill="none"
          stroke="var(--color-coral)"
          strokeWidth="22"
          strokeLinecap="round"
          opacity="0"
        />

        {/* Coup de pinceau 6 - Forest - trait fin et long */}
        <path
          className={styles.stroke}
          d="M 150 300 Q 400 280, 600 310 Q 800 340, 1000 320"
          fill="none"
          stroke="var(--color-forest)"
          strokeWidth="15"
          strokeLinecap="round"
          opacity="0"
        />
      </svg>
    </div>
  )
}

export default BrushStrokes
