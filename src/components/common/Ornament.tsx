import styles from './Ornament.module.css'

interface OrnamentProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  type?: 'floral' | 'vine' | 'corner'
}

const Ornament = ({ position = 'top-left', type = 'floral' }: OrnamentProps) => {
  return (
    <div className={`${styles.ornament} ${styles[position]} ${styles[type]}`}>
      <svg viewBox="0 0 100 100" className={styles.svg}>
        {type === 'floral' && (
          <g>
            {/* Motif floral Art Nouveau */}
            <path
              d="M50,10 Q60,20 50,30 Q40,20 50,10 M50,30 Q55,40 50,50 Q45,40 50,30 M50,50 Q60,60 50,70 Q40,60 50,50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.4" />
          </g>
        )}
        {type === 'vine' && (
          <g>
            {/* Ligne sinueuse Art Nouveau */}
            <path
              d="M10,50 Q30,30 50,50 Q70,70 90,50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              opacity="0.3"
            />
            <circle cx="30" cy="40" r="2" fill="currentColor" opacity="0.3" />
            <circle cx="70" cy="60" r="2" fill="currentColor" opacity="0.3" />
          </g>
        )}
        {type === 'corner' && (
          <g>
            {/* Coin décoratif */}
            <path
              d="M10,90 Q10,50 50,50 Q90,50 90,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.2"
            />
            <path
              d="M20,90 Q20,60 50,60 Q80,60 80,20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.15"
            />
          </g>
        )}
      </svg>
    </div>
  )
}

export default Ornament
