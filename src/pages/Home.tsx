import { motion } from 'framer-motion'
import { useScrollAnimations } from '@hooks/useScrollAnimations'
import ProtectedImage from '@components/common/ProtectedImage'
import HeroScene from '@components/three/HeroScene'
import { artworks } from '@/data/artworks'
import styles from './Home.module.css'

const Home = () => {
  useScrollAnimations()

  const categoryLabels = {
    'character-design': 'Character Design',
    comic: 'Bande Dessinée',
    tattoo: 'Tatouage',
  }

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section id="hero" className={styles.hero}>
        {/* 3D Scene Background */}
        <HeroScene />

        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroMain}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.37, 0, 0.63, 1] }}
            >
              Chouchou
            </motion.h1>

            <motion.p
              className={styles.heroTagline}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.37, 0, 0.63, 1] }}
            >
              Artiste multidisciplinaire
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <span>Découvrir</span>
          <motion.div
            className={styles.scrollLine}
            animate={{ height: [0, 40, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </section>

      {/* Character Design Section */}
      <section id="character-design" className={`${styles.fullscreenSection} ${styles.characterDesignSection}`}>
        <div className={styles.sectionContent}>
          <motion.div
            className={styles.sectionLeft}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.sectionNumber}>01</span>
            <h2 className={styles.sectionTitle}>Character Design</h2>
            <p className={styles.sectionDescription}>
              Création de personnages et univers fantastiques. Des concepts originaux qui donnent vie à des histoires uniques.
            </p>
          </motion.div>
          <motion.div
            className={styles.sectionRight}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.artworkGrid}>
              {artworks
                .filter(artwork => artwork.category === 'character-design')
                .slice(0, 3)
                .map((artwork, index) => (
                  <motion.div
                    key={artwork.id}
                    className={`${styles.artworkItem} ${styles[`artworkItem${index + 1}`]}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    <div className={styles.artworkImageWrapper}>
                      <ProtectedImage
                        src={artwork.imageUrl}
                        alt={artwork.title}
                        className={styles.artworkImage}
                        watermarkText={`© ${artwork.year}`}
                      />
                      <div className={styles.artworkOverlay}>
                        <span className={styles.artworkTitle}>{artwork.title}</span>
                        <span className={styles.artworkYear}>{artwork.year}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comic Section - Inversé pour créer du contraste */}
      <section id="comic" className={`${styles.fullscreenSection} ${styles.comicSection}`}>
        <div className={`${styles.sectionContent} ${styles.sectionContentReversed}`}>
          <motion.div
            className={styles.sectionRight}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.artworkGrid}>
              {artworks
                .filter(artwork => artwork.category === 'comic')
                .slice(0, 3)
                .map((artwork, index) => (
                  <motion.div
                    key={artwork.id}
                    className={`${styles.artworkItem} ${styles[`artworkItem${index + 1}`]}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    <div className={styles.artworkImageWrapper}>
                      <ProtectedImage
                        src={artwork.imageUrl}
                        alt={artwork.title}
                        className={styles.artworkImage}
                        watermarkText={`© ${artwork.year}`}
                      />
                      <div className={styles.artworkOverlay}>
                        <span className={styles.artworkTitle}>{artwork.title}</span>
                        <span className={styles.artworkYear}>{artwork.year}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
          <motion.div
            className={styles.sectionLeft}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.sectionNumber}>02</span>
            <h2 className={styles.sectionTitle}>Bande Dessinée</h2>
            <p className={styles.sectionDescription}>
              Planches, strips et narrations visuelles. L'art de raconter des histoires à travers le dessin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tattoo Section */}
      <section id="tattoo" className={`${styles.fullscreenSection} ${styles.tattooSection}`}>
        <div className={styles.sectionContent}>
          <motion.div
            className={styles.sectionLeft}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.sectionNumber}>03</span>
            <h2 className={styles.sectionTitle}>Tatouage</h2>
            <p className={styles.sectionDescription}>
              Designs et flash tattoo sur mesure. Des créations uniques pensées pour devenir des œuvres corporelles.
            </p>
          </motion.div>
          <motion.div
            className={styles.sectionRight}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.artworkGrid}>
              {artworks
                .filter(artwork => artwork.category === 'tattoo')
                .slice(0, 3)
                .map((artwork, index) => (
                  <motion.div
                    key={artwork.id}
                    className={`${styles.artworkItem} ${styles[`artworkItem${index + 1}`]}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                  >
                    <div className={styles.artworkImageWrapper}>
                      <ProtectedImage
                        src={artwork.imageUrl}
                        alt={artwork.title}
                        className={styles.artworkImage}
                        watermarkText={`© ${artwork.year}`}
                      />
                      <div className={styles.artworkOverlay}>
                        <span className={styles.artworkTitle}>{artwork.title}</span>
                        <span className={styles.artworkYear}>{artwork.year}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </motion.div>
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
                Artiste multidisciplinaire passionnée par l'univers de l'illustration narrative.
                Mon travail se décline en trois domaines complémentaires : le character design,
                la bande dessinée et le tatouage artistique.
              </p>
              <p>
                Chaque création est une histoire à raconter. Je m'inspire des mythologies, de
                l'imaginaire fantastique et des émotions humaines pour créer des univers visuels
                qui résonnent et captivent.
              </p>
            </div>

            <div className={styles.aboutDetails}>
              <h3>Disciplines & Spécialités</h3>
              <ul className={styles.techniquesList}>
                <li>
                  <span className={styles.techniqueDot} />
                  Character Design & Concept Art
                </li>
                <li>
                  <span className={styles.techniqueDot} />
                  Bande Dessinée & Narration Visuelle
                </li>
                <li>
                  <span className={styles.techniqueDot} />
                  Tatouage Artistique & Flash Design
                </li>
                <li>
                  <span className={styles.techniqueDot} />
                  Illustration Numérique (Procreate, Photoshop, Clip Studio)
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
