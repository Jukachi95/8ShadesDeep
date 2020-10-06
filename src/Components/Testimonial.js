import React from 'react'
import './Testimonial.css'

const Testimonial = () => {

return (
    <div>
        <div className = "testimonial__container">
            <div className = "testimonial__card">
                    <div>
                        <img src =  {require('../img/model1.jpg')}></img>
                        {/* <figcaption>
                            <blockquote>
                                <p> Excellent Services </p>
                            </blockquote>
                        </figcaption> */}
                    </div>

                    <div>
                        <img src = {require('../img/model1.jpg')}></img>
                        {/* <figcaption>
                            <blockquote>
                                <p> Excellent Services </p>
                            </blockquote>
                        </figcaption> */}
                    </div>

                    <div>
                        <img src = {require('../img/model1.jpg')}></img>
                        {/* <figcaption>
                            <blockquote>
                                <p> Excellent Services </p>
                            </blockquote>
                        </figcaption> */}
                    </div> 
               
            </div>
        </div>
    </div>
)

}

export default Testimonial