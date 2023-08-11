import React from 'react'
import './nav.css'
import { useState } from 'react'

const Nav = () => {
  const [nav, activeNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => activeNav('#')} className={nav === '#' ? "active" : ''}>Home</a>
      <a href="#about" onClick={() => activeNav('#about')} className={nav === '#about' ? 'active' : ''}>About</a>
      <a href="#skills" onClick={() => activeNav('#skills')} className={nav === '#skills' ? 'active' : ''}>Skills</a>
      <a href="#projects" onClick={() => activeNav('#projects')} className={nav === '#projects' ? 'active' : ''}>Portfolio</a>
      <a href="#contact" onClick={() => activeNav('#contact')} className={nav === '#contact' ? 'active' : ''}>Contact</a>
      
    </nav>
  )
}

export default Nav