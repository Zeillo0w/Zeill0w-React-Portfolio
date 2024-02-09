import React from 'react'
import './Projects.css'
import { PROJECTS } from '../../utils/data'
import ProjectCard from './ProjectCard/ProjectCard'
import { useRef } from 'react'
import Slider from 'react-slick'


const Projects = () => {
    const sliderRef = useRef();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <section className='project-container'>
            <h5>Projects</h5>

            <div className="project-content">
                <div className="arrow-right">
                    <img src="/Zeill0w-React-Portfolio/assets/images/right-arrow.png" alt="arrow-right" onClick={() => sliderRef.current.slickNext()} />
                </div>

                <div className="arrow-left">
                    <img src="/Zeill0w-React-Portfolio/assets/images/left-arrow.png" alt="arrow-left" onClick={() => sliderRef.current.slickPrev()} />
                </div>


                <Slider ref={sliderRef} {...settings}>
                    {PROJECTS.map((item) => (
                        <ProjectCard key={item.title} details={item} />
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Projects