import React from 'react'
import '../Components/Showcase.css'
import AboutContainer from '../Components/AboutContainer'
import Testimonial from '../Components/Testimonial';
import Founder from '../Components/Founder';

const About = () =>{
    return(
        <div>
            <AboutContainer/>
            <Founder/>
            <Testimonial/>
        </div>
    )
}


export default About