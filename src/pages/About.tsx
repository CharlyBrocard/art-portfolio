import { motion } from 'framer-motion'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.about}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>À propos</h1>

        <motion.section
          className={styles.section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className={styles.subtitle}>Mon parcours artistique</h2>
          <p className={styles.text}>
            Artiste multidisciplinaire passionnée par l'exploration de différentes techniques et
            médiums. Mon travail s'étend de la peinture traditionnelle à la sculpture, en passant
            par le character design et l'aquarelle.
          </p>
        </motion.section>

        <motion.section
          className={styles.section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className={styles.subtitle}>Approche créative</h2>
          <p className={styles.text}>
            Chaque création est une opportunité d'explorer de nouvelles émotions et perspectives.
            Je m'inspire de la nature, des émotions humaines et de l'imaginaire pour créer des
            œuvres qui résonnent avec le spectateur.
          </p>
        </motion.section>

        <motion.section
          className={styles.section}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className={styles.subtitle}>Techniques</h2>
          <ul className={styles.list}>
            <li>Peinture à l'huile et acrylique</li>
            <li>Aquarelle</li>
            <li>Sculpture (argile, résine)</li>
            <li>Illustration numérique et character design</li>
          </ul>
        </motion.section>
      </motion.div>
    </div>
  )
}

export default About
