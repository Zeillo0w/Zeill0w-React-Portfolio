import React from 'react'
import './About.css'

const About = () => {
    return (
        <section id='about'>
            <h2>About Me</h2>

            <div className="About-Container">
                <div className="About-me">
                    <div className="About-Me-Image">
                        <img src='/Zeill0w-React-Portfolio/assets/images/whoami.jpg' alt='Profile' />
                    </div>
                </div>

                <div className="About-Content">
                    <div className="About-Cards">
                        <article className='About-Card'>
                            <img src='/Zeill0w-React-Portfolio/assets/images/woami-icon.png' className="About-Icon"></img>
                            <h5>$ whoami ? </h5>
                            <small>All about me</small>
                        </article>

                        <article className='About-Card'>
                            <img src='/Zeill0w-React-Portfolio/assets/images/heart-icon.png' className="About-Icon"></img>
                            <h5>$ cat >enjoy ? </h5>
                            <small>My hobbies</small>
                        </article>

                        <p>  My name is Yanis Ghanem, I'm 21 years old and I'm a <span>French cybersecurity student at Lille Ynov Campus.</span>
                            <br></br><br></br>
                            I'm currently in my second year of bachelor degree in cybersecurity and I'm currently looking for an <span>internship at Lille and its surroundings from the 1st of July and for a duration of 6 weeks in the field of cybersecurity</span>(or cloud/networking).
                            <br></br><br></br>
                            I'm <span>passionate about cybersecurity </span>and I'm always looking to learn new things and improve my skills.
                            <br></br><br></br>
                            I also like to work on Linux systems and practice pentest on TryHackMe.</p>

                        <p> In my Free time, i like to play <span>video games with my friends</span>, i like FPS, adventure games, sandbox games, strategy...
                            <br></br><br></br>
                            I engage in sports. At the moment I practice <span>boxing and I'm going to the gym</span>.
                            <br></br><br></br>
                            I also like to watch <span>movies, series and anime.</span>
                            <br></br><br></br>
                            I like to listen <span>music when I'm working </span>or when I'm playing video games.
                            <br></br><br></br>
                            I like to travel and <span>go to vaccation with my family or my friends</span>, discover new places and new cultures.
                        </p>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default About