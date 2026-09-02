import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import About from './components/About'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Contact from './components/contact'
import Atendimento from './components/Atendimento'
import Psicanalise from './components/psicanalise'

function ScrollToHash() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const id = hash.replace('#', '')
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
          el.setAttribute('tabindex', '-1')
          el.focus({ preventScroll: true })
        }
      }, 150)
      return () => clearTimeout(timer)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [pathname, hash])

  return null
}
export default function App() {
  return (
    <>
      <ScrollToHash />
      <Navbar />
      <Box as="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Pillars />
                <About />
                <FAQ />
              </>
            }
          />
          <Route path="/contato" element={<Contact />} />
          <Route path="/atendimento" element={<Atendimento />} />
          <Route path="/psicanalise" element={<Psicanalise />} />
        </Routes>
      </Box>
      <Footer />
    </>
  )
}