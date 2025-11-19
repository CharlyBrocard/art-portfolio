import { useMemo } from 'react'
import styles from './FloatingLeaves.module.css'

const FloatingLeaves = () => {
  const leaves = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10,
      size: 50 + Math.random() * 80, // Beaucoup plus grosses : 50-130px
    }))
  }, [])

  return (
    <div className={styles.container}>
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className={styles.leaf}
          style={{
            left: `${leaf.left}%`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
          }}
        >
          <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M25 5 C15 15, 10 30, 25 45 C40 30, 35 15, 25 5 Z"
              fill="currentColor"
              opacity="0.6"
            />
            <path
              d="M25 5 L25 45"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.4"
            />
          </svg>
        </div>
      ))}
    </div>
  )
}

export default FloatingLeaves
