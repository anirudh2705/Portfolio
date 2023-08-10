import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'


const socials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/anirudh-patnaik-1a0374170/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/anirudh2705/" target='_blank'><FaGithub/></a>
        <a href="mailto: anirudhpatnaik2804@gmail.com" target='_blank'><SiGmail/></a>
    </div>
  )
}

export default socials