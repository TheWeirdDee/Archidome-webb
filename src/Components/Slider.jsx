/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import './Slider.css';  
import { data } from '../../data';
import 'tailwindcss/tailwind.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Slider = () => {
    const [people] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const slider = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % people.length);
        }, 5000);

        return () => {
            clearInterval(slider);
        };
    }, [people.length]);

    useEffect(() => {
        AOS.init({
            duration: 1000,  
            once: true,  
            easing: 'ease-in-out',  
        });
    }, []);

    return (
        <section className='section'>
            <div className='title'>
                <h2 className='reviews'>Testimonials</h2>
            </div>
            <div className='section-center flex justify-center'> 
                {people.map((item, personIndex) => {
                    const { id, image, name, title, quote } = item;

                    let position = 'nextSlide';
                    if (personIndex === index) {
                        position = 'activeSlide';
                    }
                    if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                        position = 'lastSlide';
                    } 
                    return (
                        <article className={position} key={id}>
                            <img src={image} alt={name} className="person-img mx-auto" data-aos="fade-up" style={{ transitionDelay: `${personIndex * 0.1}s` }} />  
                            <h4>{name}</h4>
                            <p className='title'>{title}</p>
                            <p className='text'>{quote}</p>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default Slider;
