import React from 'react'
import './about.css'
import Me from '../../assets/dp1.jpg'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={Me} alt="About Image" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <h3>Bio</h3>
              <p>
                Intrested in Java backend development having a strong grasp of data structures and algorithms. looking for Java backend roles to architect robust and scalable solutions. Passionate problem solver with a knack for optimizing user experiences. </p>
            </article>
            <a className='btn btn-primary' href="mailto: anirudhpatnaik2804@gmail.com" target='_blank'> Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default about