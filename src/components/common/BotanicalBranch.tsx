import styles from './BotanicalBranch.module.css'

interface BotanicalBranchProps {
  position?: 'left' | 'right'
}

const BotanicalBranch = ({ position = 'left' }: BotanicalBranchProps) => {
  return (
    <div className={`${styles.branch} ${styles[position]}`}>
      <svg
        viewBox="0 0 200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.svg}
      >
        {/* Branche principale courbée */}
        <path
          d="M100,0 Q80,100 70,200 Q65,300 60,400"
          stroke="var(--color-copper)"
          strokeWidth="3"
          fill="none"
          opacity="0.3"
        />

        {/* Feuilles le long de la branche */}
        <g opacity="0.4">
          {/* Feuille 1 */}
          <ellipse cx="75" cy="80" rx="15" ry="25" fill="var(--color-sage)" transform="rotate(-30 75 80)" />
          {/* Feuille 2 */}
          <ellipse cx="68" cy="150" rx="18" ry="28" fill="var(--color-forest)" transform="rotate(20 68 150)" />
          {/* Feuille 3 */}
          <ellipse cx="65" cy="230" rx="16" ry="26" fill="var(--color-sage)" transform="rotate(-40 65 230)" />
          {/* Feuille 4 */}
          <ellipse cx="62" cy="310" rx="14" ry="24" fill="var(--color-forest)" transform="rotate(30 62 310)" />
        </g>

        {/* Petites branches secondaires */}
        <path
          d="M70,150 Q50,165 40,180"
          stroke="var(--color-copper)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.25"
        />
        <path
          d="M65,250 Q45,270 35,290"
          stroke="var(--color-copper)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.25"
        />
      </svg>
    </div>
  )
}

export default BotanicalBranch
