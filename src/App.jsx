import { Routes, Route } from 'react-router-dom'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Pillars  from './components/Pillars'
import About    from './components/About'
import FAQ      from './components/FAQ'
import Footer   from './components/Footer'
import Contact  from './components/contact'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Pillars />
            <About />
            <FAQ />
            <Footer />
          </>
        } />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </>
  )
}