import React from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Skills />
        <Projects/>
        <Contact />
    </>
  )
}

export default App