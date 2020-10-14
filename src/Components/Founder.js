import React from 'react'
import './Founder.css'

const Founder = () => {
   return(
       <div className = "founder__main__container">
            <div className = "founder__main__image">
                <img src = {require('../img/sledge_profile.jpg')}></img>
            </div>

                <div className = "founder__icon">
                <i class="huge quote left icon"></i>
                </div>

            <div className = "founder__main__text">
             <blockquote>
                    <h4>"The idea behind the collective was to bring a lot
                        of ideas from various individuals and bring them all to life. We're
                        always looking for ways to collaborate with the community and those that
                        want to make a difference in their current field"
                    </h4>
                    <p className = "founder__inner__name"> Sledge Tchibangu</p>
                    <p className = "founder__inner__title">Founder</p>
                </blockquote>
                
            </div>
       </div>
       
   )
}

export default Founder