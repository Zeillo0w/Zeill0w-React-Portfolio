import React from 'react'
import './CTF.css'
import CTFCard from './CTFCard/CTFCard'
import { useRef } from 'react'
import Slider from 'react-slick'
import {FLAG} from '../../utils/data'

const CTF = () => {
    const sliderRef = useRef();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayHoverPause: false,
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
        <section className='CTF-container'>
            <h5>My CTF</h5>

            <div className="CTF-content">
                
                <Slider ref={sliderRef} {...settings}>
                    {FLAG.map((item) => (
                        <CTFCard key={item.title} details={item} />
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default CTF