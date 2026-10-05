import { NavigationProvider } from './context/NavigationContext'
import { useNav } from './hooks/useNav'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import ValueProps from './sections/ValueProps'
import Academy from './sections/Academy'
import Methodology from './sections/Methodology'
import Founder from './sections/Founder'
import CtaFinal from './sections/CtaFinal'
import SeminarPage from './pages/SeminarPage'

function MainContent() {
  const { isSeminar } = useNav()

  return (
    <>
      <div className="grain-overlay" aria-hidden="true"></div>
      <Navbar />
      <main>
        {isSeminar ? (
          <SeminarPage />
        ) : (
          <>
            <Hero />
            <About />
            <ValueProps />
            <Academy />
            <Methodology />
            <Founder />
            <CtaFinal />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <NavigationProvider>
      <MainContent />
    </NavigationProvider>
  )
}
