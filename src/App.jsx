import React, { useRef } from 'react'
import Header from './components/header/header'
import Nav from './components/nav/nav'
import Scroll from './components/scrollToTop/scroll'
import About from './components/about/about'
import Skills from './components/skills/skills'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'



const App = () => {
  const sectionRefs = {
    header: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  }
  const scrollToSection = (section) => {
    //console.log(section)
    sectionRefs[section].current.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <>
        <div ref={sectionRefs.header} ></div>
        <Header />
        <Nav navRef={(section)=> scrollToSection(section)}/>
        <Scroll />
        <div ref={sectionRefs.about}></div>
        <About />
        <div ref={sectionRefs.skills}></div>
        <Skills />
        <div ref={sectionRefs.projects}></div>
        <Projects />
        <div ref={sectionRefs.contact}></div>
        <Contact />
    </>
  )
}

export default App