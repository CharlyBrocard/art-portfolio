import styles from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>© {currentYear} Chouchou. Tous droits réservés.</p>

        <div className={styles.links}>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a
            href="mailto:contact@example.com"
            className={styles.socialLink}
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
