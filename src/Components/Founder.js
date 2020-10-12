import React from 'react'
import './Founder.css'

const Founder = () => {
   return(
       <div className = "founder__main__container">
            <div className = "founder__main__image">
                <img src = {require('../img/sledge_profile.jpg')}></img>
            </div>

            <div className = "founder__main__text">
                <blockquote>
                    <p>The idea behind the collective was to bring a lot
                        of ideas from various individuals and bring them all to life
                    </p>
                </blockquote>
            </div>
       </div>
       
   )
}

export default Founder