import React from 'react'
import './nav.css'
import { useState, useRef } from 'react'

const Nav = (props) => {
  const { navRef } = props;
  const [nav, activeNav] = useState('#');
  return (
    <nav>
      <div onClick={() => {activeNav('#'); navRef('header')} } className={nav === '#' ? "active" : ''}>Home</div>
      <div onClick={() => {activeNav('#about'); navRef('about')}} className={nav === '#about' ? 'active' : ''}>About</div>
      <div onClick={() => {activeNav('#skills'); navRef('skills')}} className={nav === '#skills' ? 'active' : ''}>Skills</div>
      <div onClick={() => {activeNav('#projects'); navRef('projects')}} className={nav === '#projects' ? 'active' : ''}>Portfolio</div>
      <div onClick={() => {activeNav('#contact'); navRef('contact')}} className={nav === '#contact' ? 'active' : ''}>Contact</div>      
    </nav>
  )
}

export default Nav