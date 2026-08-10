import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Pillars  from './components/Pillars'
import About    from './components/About'
import FAQ      from './components/FAQ'
import Footer   from './components/Footer'
import Contact  from './components/contact'
import Atendimento from './components/Atendimento'
import Psicanalise from './components/psicanalise'

export default function App() {
  return (
    <>
      <Navbar />
      <Box as="main">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Pillars />
              <About />
              <FAQ />
            </>
          } />
          <Route path="/contato"     element={<Contact />} />
          <Route path="/atendimento" element={<Atendimento />} />
           <Route path="/psicanalise" element={<Psicanalise />} />
        </Routes>
      </Box>
      <Footer />
    </>
  )
}