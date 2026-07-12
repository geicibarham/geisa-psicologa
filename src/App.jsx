import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Pillars  from './components/Pillars'
import About    from './components/About'
import FAQ      from './components/FAQ'
import Footer   from './components/Footer'
import './theme/theme.css';

export default function App() {
  return (
    <>
 
      <Navbar />
         <main>
      <Hero />
      <Pillars />
      <About />
      <FAQ />
      </main>
      <Footer />
    </>
  )
}
