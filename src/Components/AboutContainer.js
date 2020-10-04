import React from 'react'
import './About.css'

const AboutContainer = () => {

    return(
     <div>
        <div className = "about__main__container">
                <div className = "about__title">
                    <h1 style = {{color: 'black', marginTop: "50px"}}>About 8ShadesDeep</h1>
                </div>

                <div className = "about__photo">
                    <img src = {require('../img/sledge_profile.jpg')}></img>
                    <h4>Sledge Tshibangu</h4>
                    <h5>Founder</h5>
                    <p>Director, Advertiser, Photographer, Music Producer</p>
                </div>
        </div> 
    </div>

    )
   

}

export default AboutContainer