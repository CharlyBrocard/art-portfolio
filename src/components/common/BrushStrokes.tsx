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
        opacity: 0.5,
        duration: 1.5,
        ease: 'power1.inOut',
        delay: 0.5 + index * 0.4,
      })
    })
  }, [])

  return (
    <div ref={containerRef} className={styles.container}>
      <svg className={styles.svg} viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        {/* Trait 1 - Diagonal montant (bas gauche vers haut droit) */}
        <path
          className={styles.stroke}
          d="M 50 650 Q 200 500, 350 380 Q 500 280, 620 200"
          fill="none"
          stroke="var(--color-accent-primary)"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0"
        />

        {/* Trait 2 - Vertical avec courbe (gauche) */}
        <path
          className={styles.stroke}
          d="M 180 100 Q 160 250, 200 400 Q 220 550, 180 680"
          fill="none"
          stroke="var(--color-accent-secondary)"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0"
        />

        {/* Trait 3 - Diagonal descendant court (haut droit vers bas gauche) */}
        <path
          className={styles.stroke}
          d="M 900 150 Q 800 230, 720 320"
          fill="none"
          stroke="var(--color-accent-primary)"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0"
        />

        {/* Trait 4 - Courbe en S horizontal */}
        <path
          className={styles.stroke}
          d="M 300 250 Q 450 220, 550 260 Q 650 300, 750 270"
          fill="none"
          stroke="var(--color-accent-secondary)"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0"
        />

        {/* Trait 5 - Vertical ondulé (droite) */}
        <path
          className={styles.stroke}
          d="M 1050 200 Q 1020 350, 1060 480 Q 1080 600, 1040 720"
          fill="none"
          stroke="var(--color-accent-primary)"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0"
        />

        {/* Trait 6 - Diagonal montant énergique */}
        <path
          className={styles.stroke}
          d="M 400 700 Q 550 580, 680 480 Q 820 370, 950 280"
          fill="none"
          stroke="var(--color-accent-secondary)"
          strokeWidth="9"
          strokeLinecap="round"
          opacity="0"
        />

        {/* Trait 7 - Court diagonal (accent) */}
        <path
          className={styles.stroke}
          d="M 700 500 Q 780 560, 850 620"
          fill="none"
          stroke="var(--color-accent-primary)"
          strokeWidth="8"
          strokeLinecap="round"
          opacity="0"
        />

        {/* Trait 8 - Vertical court (centre) */}
        <path
          className={styles.stroke}
          d="M 600 150 Q 580 280, 620 400"
          fill="none"
          stroke="var(--color-accent-secondary)"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0"
        />
      </svg>
    </div>
  )
}

export default BrushStrokes
