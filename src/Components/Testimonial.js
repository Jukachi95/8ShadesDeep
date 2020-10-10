import React from 'react'
import './Testimonial.css'

const Testimonial = () => {

return (
    <div>
        <div className = "testimonial__container">
            <div className = "testimonial__card">
                    <div>
                        <span data-image-width="500" data-image-height = "500" className = "span__1"></span>

                           <div className = "inner__text">
                                <p> Great service from the collective </p> 
                                <h5>Adele</h5>
                                <h6>Dancer, Model</h6>
                            </div>
                        {/* <img src =  {require('../img/model1.jpg')}></img> */}
                        {/* <figcaption>
                            <blockquote>
                                <p> Excellent Services </p>
                            </blockquote>
                        </figcaption> */}
                    </div>

                    <div>
                     <span data-image-width="500" data-image-height = "500" className = "span__2"></span>
                            <div className = "inner__text">
                            {/* Blockquote before 'p' */}
                                <p> Quality Photos</p> 
                                <h5>Dani</h5>
                                <h6>Influencer, Model</h6>
                            </div>
                        {/* <img src = {require('../img/model1.jpg')}></img> */}
                        
                    </div>

                    <div>
                    <span data-image-width="500" data-image-height = "500" className = "span__3"></span>
                        
                            <div className = "inner__text">
                                <p> Excellent photos I could use for my portfolio </p> 
                                <h5>Sam</h5>
                                <h6>Illustrator, Storyboard Artist</h6>
                            </div>
                    
                        {/* <img src = {require('../img/model1.jpg')}></img> */}
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

{/* <figcaption>
                            <blockquote>
                                <p> Excellent Services </p>
                            </blockquote>
                        </figcaption> */}