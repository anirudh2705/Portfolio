import React from 'react'
import CV from '../../assets/cv.pdf'

const cv = () => {
  return (
    <div className="cv">
        <a href={CV} download = 'anirudh_patnaik_cv' className='btn'>Download CV</a>
        <a href="#about" className='btn btn-primary'>About</a>
    </div>
  )
}

export default cv