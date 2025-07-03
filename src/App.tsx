import { useState } from 'react'
import Navbar from './components/layout/Navbar/Navbar'
import FullPageContainer from './components/layout/FullPageContainer'
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