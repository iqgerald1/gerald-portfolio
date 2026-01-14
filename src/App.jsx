import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <section id="home" className="px-6 md:px-10 lg:px-16 scroll-mt-24">
            <Hero />
          </section>
          <section id="skills" className="px-6 md:px-10 lg:px-16 py-24 scroll-mt-24">
            <Skills />
          </section>
          <section id="projects" className="px-6 md:px-10 lg:px-16 py-24 scroll-mt-24">
            <Projects />
          </section>
          <section id="education" className="px-6 md:px-10 lg:px-16 py-24 scroll-mt-24">
            <Education />
          </section>
          <section id="contact" className="px-6 md:px-10 lg:px-16 py-24 scroll-mt-24">
            <Contact />
          </section>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
