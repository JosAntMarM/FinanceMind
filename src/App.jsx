import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import ValueProps from './sections/ValueProps'
import Academy from './sections/Academy'
import Methodology from './sections/Methodology'
import Founder from './sections/Founder'
import CtaFinal from './sections/CtaFinal'

export default function App() {
  return (
    <>
      <div className="grain-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ValueProps />
        <Academy />
        <Methodology />
        <Founder />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
