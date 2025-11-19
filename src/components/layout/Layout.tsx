import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '@components/common/ScrollToTop'
import styles from './Layout.module.css'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Layout
