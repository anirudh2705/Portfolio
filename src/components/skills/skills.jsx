import React from 'react'
import './skills.css'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

const skills = () => {
  return (
    <section id='skills'>
      <h5>Know</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend</h3>
          <div className="skills__content">
            <article className="skill__details">
              <BsFillArrowRightCircleFill className='skills__content-icon'/>
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <BsFillArrowRightCircleFill className='skills__content-icon'/>
              <div>
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <BsFillArrowRightCircleFill className='skills__content-icon'/>
              <div>
                <h4>Java Script</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <BsFillArrowRightCircleFill className='skills__content-icon'/>
              <div>
                <h4>React</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <BsFillArrowRightCircleFill className='skills__content-icon'/>
              <div>
                <h4>Express</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>


        <div className="skills__backend">
          <h3>Backend</h3>
          <div className="skills__content">
            <article className="skill__details">
              <BsFillArrowRightCircleFill  className='skills__content-icon'/>
              <div>
                <h4>Java</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <BsFillArrowRightCircleFill className='skills__content-icon'/>
              <div>
                <h4>Cpp</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <BsFillArrowRightCircleFill className='skills__content-icon'/>
              <div>
                <h4>Python</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <BsFillArrowRightCircleFill className='skills__content-icon'/>
              <div>
                <h4>Node Js</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="skill__details">
              <BsFillArrowRightCircleFill className='skills__content-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default skills