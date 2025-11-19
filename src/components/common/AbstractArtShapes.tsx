import { useEffect, useRef } from 'react'
import styles from './AbstractArtShapes.module.css'
import { gsap } from 'gsap'

const AbstractArtShapes = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const shapes = containerRef.current.querySelectorAll(`.${styles.shape}`)

    shapes.forEach((shape, index) => {
      // Animation de flottement avec rotation subtile
      gsap.to(shape, {
        y: '+=30',
        x: '+=20',
        rotation: '+=15',
        duration: 8 + index * 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: index * 0.5,
      })

      // Animation de morphing (scale pulsation)
      gsap.to(shape, {
        scale: 1.1,
        duration: 6 + index,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        delay: index * 0.3,
      })
    })
  }, [])

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Forme organique 1 - Terracotta */}
      <svg className={`${styles.shape} ${styles.shape1}`} viewBox="0 0 200 200">
        <path
          d="M100,20 Q140,40 160,80 Q180,120 160,160 Q140,180 100,180 Q60,180 40,160 Q20,120 40,80 Q60,40 100,20 Z"
          fill="var(--color-terracotta)"
          opacity="0.15"
        />
        <path
          d="M100,30 Q130,45 150,80 Q170,115 150,150 Q130,165 100,165 Q70,165 50,150 Q30,115 50,80 Q70,45 100,30 Z"
          fill="none"
          stroke="var(--color-terracotta)"
          strokeWidth="2"
          opacity="0.3"
        />
      </svg>

      {/* Forme organique 2 - Sage */}
      <svg className={`${styles.shape} ${styles.shape2}`} viewBox="0 0 180 180">
        <ellipse
          cx="90"
          cy="90"
          rx="70"
          ry="80"
          fill="var(--color-sage)"
          opacity="0.12"
          transform="rotate(25 90 90)"
        />
        <path
          d="M60,40 Q120,30 140,70 Q150,110 120,140 Q80,160 50,130 Q30,100 40,70 Q50,40 60,40 Z"
          fill="none"
          stroke="var(--color-sage)"
          strokeWidth="2"
          opacity="0.25"
        />
      </svg>

      {/* Forme organique 3 - Copper */}
      <svg className={`${styles.shape} ${styles.shape3}`} viewBox="0 0 150 150">
        <path
          d="M75,15 Q110,25 130,55 Q145,90 120,115 Q90,135 60,120 Q30,100 25,70 Q20,35 50,20 Q65,15 75,15 Z"
          fill="var(--color-copper)"
          opacity="0.1"
        />
        <circle
          cx="75"
          cy="75"
          r="50"
          fill="none"
          stroke="var(--color-copper)"
          strokeWidth="1.5"
          opacity="0.2"
          strokeDasharray="5,5"
        />
      </svg>

      {/* Forme organique 4 - Rose */}
      <svg className={`${styles.shape} ${styles.shape4}`} viewBox="0 0 160 160">
        <path
          d="M80,20 Q115,30 135,60 Q150,95 130,125 Q105,145 75,140 Q45,135 30,110 Q15,80 30,55 Q50,25 80,20 Z"
          fill="var(--color-rose)"
          opacity="0.12"
        />
        <ellipse
          cx="80"
          cy="80"
          rx="45"
          ry="55"
          fill="none"
          stroke="var(--color-rose)"
          strokeWidth="2"
          opacity="0.25"
          transform="rotate(-15 80 80)"
        />
      </svg>

      {/* Forme organique 5 - Coral */}
      <svg className={`${styles.shape} ${styles.shape5}`} viewBox="0 0 140 140">
        <path
          d="M70,10 Q100,15 120,40 Q135,70 120,95 Q100,115 70,120 Q40,115 25,95 Q10,70 25,45 Q45,15 70,10 Z"
          fill="var(--color-coral)"
          opacity="0.1"
        />
        <path
          d="M70,25 Q90,28 105,48 Q118,70 105,90 Q90,105 70,108 Q50,105 38,90 Q25,70 38,50 Q52,28 70,25 Z"
          fill="none"
          stroke="var(--color-coral)"
          strokeWidth="1.5"
          opacity="0.2"
        />
      </svg>

      {/* Forme organique 6 - Forest */}
      <svg className={`${styles.shape} ${styles.shape6}`} viewBox="0 0 170 170">
        <circle cx="85" cy="85" r="60" fill="var(--color-forest)" opacity="0.08" />
        <path
          d="M85,30 Q120,40 145,70 Q160,100 140,130 Q110,155 75,150 Q40,145 30,115 Q20,85 35,60 Q55,30 85,30 Z"
          fill="none"
          stroke="var(--color-forest)"
          strokeWidth="2"
          opacity="0.2"
        />
      </svg>
    </div>
  )
}

export default AbstractArtShapes
