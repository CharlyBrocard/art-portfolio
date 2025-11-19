import { motion } from 'framer-motion'
import { useScrollAnimations } from '@hooks/useScrollAnimations'
import ArtworkCard from '@components/gallery/ArtworkCard'
import Ornament from '@components/common/Ornament'
import ArtNouveauCurves from '@components/common/ArtNouveauCurves'
import BotanicalBranch from '@components/common/BotanicalBranch'
import { artworks } from '@/data/artworks'
import styles from './Home.module.css'

const Home = () => {
  useScrollAnimations()

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section id="hero" className={styles.hero}>
        <ArtNouveauCurves />
        <Ornament position="top-left" type="corner" />
        <Ornament position="top-right" type="corner" />
        <div className={styles.heroContent}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Chouchou
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Artiste multidisciplinaire
          </motion.p>
          <motion.div
            className={styles.scrollIndicator}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <span>Scroll</span>
            <motion.div
              className={styles.scrollLine}
              animate={{ height: [0, 40, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Artworks Timeline */}
      <section id="artworks" className={styles.artworksSection}>
        <BotanicalBranch position="left" />
        <BotanicalBranch position="right" />
        <div className={styles.timeline}>
          {artworks.map((artwork, index) => (
            <div key={artwork.id} className={styles.artworkItem}>
              <div className={`${styles.artworkNumber} artwork-number`}>
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className={`${styles.artworkCardWrapper} artwork-card`}>
                <ArtworkCard artwork={artwork} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.aboutSection}>
        <motion.div
          className={styles.aboutContent}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`${styles.aboutTitle} about-title`}>À propos</h2>

          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <h3>Mon parcours artistique</h3>
              <p>
                Artiste multidisciplinaire passionnée par l'exploration de différentes techniques
                et médiums. Mon travail s'étend de la peinture traditionnelle à la sculpture, en
                passant par le character design et l'aquarelle.
              </p>
              <p>
                Chaque création est une opportunité d'explorer de nouvelles émotions et
                perspectives. Je m'inspire de la nature, des émotions humaines et de l'imaginaire
                pour créer des œuvres qui résonnent avec le spectateur.
              </p>
            </div>

            <div className={styles.aboutDetails}>
              <h3>Techniques & Disciplines</h3>
              <ul className={styles.techniquesList}>
                <li>
                  <span className={styles.techniqueDot} />
                  Peinture à l'huile et acrylique
                </li>
                <li>
                  <span className={styles.techniqueDot} />
                  Aquarelle
                </li>
                <li>
                  <span className={styles.techniqueDot} />
                  Sculpture (argile, résine, bronze)
                </li>
                <li>
                  <span className={styles.techniqueDot} />
                  Illustration numérique et character design
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.contact}>
            <h3>Travaillons ensemble</h3>
            <p>Intéressé par mon travail ? N'hésitez pas à me contacter.</p>
            <div className={styles.contactLinks}>
              <a href="mailto:contact@example.com" className={styles.contactLink}>
                contact@example.com
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                Instagram
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
