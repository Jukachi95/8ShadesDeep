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
                                <h2> Great service from the collective </h2> 
                                <h4>Adele</h4>
                                <h6>Model</h6>
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
                                <h2> Quality Photos</h2> 
                                <h4>Dani</h4>
                                <h6>Influencer</h6>
                            </div>
                        {/* <img src = {require('../img/model1.jpg')}></img> */}
                        
                    </div>

                    <div>
                    <span data-image-width="500" data-image-height = "500" className = "span__3"></span>
                        
                            <div className = "inner__text">
                                <h2> Excellent photos I could use for my portfolio </h2> 
                                <h4>Sam</h4>
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