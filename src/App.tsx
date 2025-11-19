import { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useSmoothScroll } from '@hooks/useSmoothScroll'
import Layout from '@components/layout/Layout'
import Home from '@pages/Home'

function AppContent() {
  useSmoothScroll()

  // Protection anti-screenshot (rend plus difficile mais pas impossible)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Bloquer PrintScreen (limité sur certains navigateurs)
      if (e.key === 'PrintScreen') {
        e.preventDefault()
        navigator.clipboard.writeText('').catch(() => {})
      }

      // Bloquer Ctrl+P (imprimer)
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault()
      }

      // Bloquer les outils de développement
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') {
        e.preventDefault()
      }
    }

    // Bloquer le clic droit global
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('contextmenu', handleContextMenu)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('contextmenu', handleContextMenu)
    }
  }, [])

  return (
    <Layout>
      <Home />
    </Layout>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
