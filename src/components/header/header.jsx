import React from 'react'
import './header.css'
import Cv from './cv'
import Socials from './socials'
import Dp from '../../assets/dp1.jpg'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Anirudh Patnaik</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cv />
        <Socials/>
        <div className='dp'>
          <img src={Dp} alt="img" className='img'  />
        </div>
        <a href="#about" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default header