import React from 'react'
import './projects.css'
import Portfolio from '../../assets/portfolio.png'

const data = [
  {
    id : 1,
    image: Portfolio,
    title: 'My Portfolio',
    github: 'https://github.com/anirudh2705/portfolio',
    demo: ''
  }

]
const projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container project__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='project__item'>
                <div className="project__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="project__item-cta">
                  <a href={github} target='_blank' className='btn'>Live Demo</a>
                  <a href={demo} target='_blank' className='btn btn-primary'>Github</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default projects