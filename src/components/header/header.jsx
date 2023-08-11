import React from 'react'
import './header.css'
import Cv from './cv'
import Socials from './socials'

const header = () => {
  
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Anirudh Patnaik</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cv />
        <Socials/>
        <a href="#about" id="scroll__down" ></a>
      </div>
    </header>
  )
}

export default header