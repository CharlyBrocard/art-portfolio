import { motion } from 'framer-motion'
import Button from '@components/common/Button'
import styles from './Contact.module.css'

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (can be email link or static form service)
  }

  return (
    <div className={styles.contact}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.description}>
          Intéressé par mon travail ? N'hésitez pas à me contacter pour toute question ou
          collaboration.
        </p>

        <motion.form
          className={styles.form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              required
              placeholder="Votre nom"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              required
              placeholder="votre@email.com"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              required
              placeholder="Votre message..."
              rows={6}
            />
          </div>

          <Button type="submit" size="lg">
            Envoyer
          </Button>
        </motion.form>

        <motion.div
          className={styles.info}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>Ou contactez-moi directement :</p>
          <a href="mailto:contact@example.com" className={styles.email}>
            contact@example.com
          </a>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Contact
