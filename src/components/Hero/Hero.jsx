import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className='hero-container'>
      <div className='hero-content'>
        <h2>
          Cyber Security and Web Development Student
        </h2>
        <p>Passionate young Pentester | In love with Frontend Web Developpement and simple Animations </p>
        <div className="skills-header">
          <a className="cv-button" target="blank_" href="https://drive.google.com/file/d/1rJqiNAXDu1LBVdVJGNuGGsozQKp3wL7T/view">CV</a>
          <a className="linkedin-button" target="blank_" href="https://www.linkedin.com/in/yanis-ghanem-b6981b2b1/">LinkedIn</a>
          <a className="github-button" target="blank_" href="https://github.com/Zeillo0w">GitHub</a>
        </div>
      </div>

      <div className='hero-img'>
        <div>
          <div className='tech-icon'>
            <img src="/Zeill0w-React-Portfolio/assets/images/react.png" alt='' />
          </div>
          <img src='/Zeill0w-React-Portfolio/assets/images/photo.jpg' alt='' width='300' height='auto' />
        </div>

        <div>
          <div className='tech-icon'>
            <img src='/Zeill0w-React-Portfolio/assets/images/html.png' alt='' />
          </div>
          <div className='tech-icon'>
            <img src='/Zeill0w-React-Portfolio/assets/images/css.png' alt='' />
          </div>
          <div className='tech-icon'>
            <img src='/Zeill0w-React-Portfolio/assets/images/python.png' alt='' />
          </div>
          <div className='tech-icon'>
            <img src='/Zeill0w-React-Portfolio/assets/images/js.png' alt='' />
          </div>
        </div>
      </div>

    </section>

  )
}

export default Hero