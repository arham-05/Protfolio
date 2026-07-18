import React, { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger, ScrollSmoother, SplitText } from "gsap/all"
import Wrap from "./components/wrap/Wrap"
import Cursor from "./ui/cursor/Cursor"
import Navbar from "./components/Navbar/Navbar"
import HeroSection from "./components/Hero/HeroSection"
import About from "./components/About/About"
import Skills from "./components/Skill/Skills"
import Experience from "./components/Experience/Experience"
import Projects from "./components/project/Project"
import Contact from "./components/Contact/Contact"
gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother)
import SmoothScrollProvider from "./components/SmoothScrollProvider"

const App = () => {
  useEffect(() => {
    ScrollTrigger.create({
      smooth: 3,
      effect: true,
      normalizeScroll: true,
    })
    ScrollTrigger.refresh()
  }, [])

  return (
    <div>
      <SmoothScrollProvider>
        <Wrap />
        <Cursor />
        <div className="smooth-wrapper">
          <Navbar />
          <div id="smooth-content">
            <HeroSection />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </div>
      </SmoothScrollProvider>
    </div>
  )
}

export default App
