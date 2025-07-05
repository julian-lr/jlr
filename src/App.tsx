import { useState, useEffect, useRef } from 'react'
import Navbar from './components/layout/Navbar/Navbar'
import FullPageContainer from './components/layout/FullPageContainer'
import { useIsMobile } from './components/layout/useIsMobile'
import './App.scss'

// Section definitions for navigation and layout
const sections = [
  { id: 'home', name: 'Home' },
  { id: 'aboutme', name: 'About me' },
  { id: 'workexperience', name: 'Work experience' },
  { id: 'gallery', name: 'Gallery' },
  { id: 'education', name: 'Education' },
  { id: 'courses', name: 'Courses' },
  { id: 'contact', name: 'Contact' },
]

function App() {
  const [currentSection, setCurrentSection] = useState(0)
  const isMobile = useIsMobile()
  const observerRef = useRef<IntersectionObserver | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!isMobile) return
    let cancelled = false
    function setupObserverWhenReady() {
      // Map: section id -> observed element
      const idToElement = sections.map(s => {
        if (s.id === 'home') {
          const section = document.getElementById('home')
          return { id: s.id, el: section ? section.querySelector('img') : null }
        } else {
          const section = document.getElementById(s.id)
          return { id: s.id, el: section ? section.querySelector('h2, h1') : null }
        }
      }).filter(pair => pair.el)
      if (idToElement.length !== sections.length) {
        rafRef.current = requestAnimationFrame(setupObserverWhenReady)
        return
      }
      if (cancelled) return
      if (observerRef.current) observerRef.current.disconnect()
      observerRef.current = new window.IntersectionObserver(
        entries => {
          // Find the entry whose top is closest to the top of the viewport and is intersecting
          let minTop = Infinity
          let idx = 0
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const rect = entry.boundingClientRect
              if (rect.top >= 0 && rect.top < minTop) {
                minTop = rect.top
                const foundIdx = idToElement.findIndex(pair => pair.el === entry.target)
                if (foundIdx !== -1) idx = foundIdx
              }
            }
          })
          setCurrentSection(idx)
        },
        {
          root: null,
          rootMargin: '-80px 0px 0px 0px', // offset for navbar
          threshold: [0, 0.1, 0.3, 0.5, 1.0],
        }
      )
      idToElement.forEach(pair => {
        if (pair.el) observerRef.current!.observe(pair.el)
      })
    }
    setupObserverWhenReady()
    return () => {
      cancelled = true
      if (observerRef.current) observerRef.current.disconnect()
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [isMobile])

  return (
    <>
      <Navbar
        current={currentSection}
        setCurrent={setCurrentSection}
        sections={sections}
      />
      <FullPageContainer
        current={currentSection}
        setCurrent={setCurrentSection}
        sections={sections}
      />
    </>
  )
}

export default App