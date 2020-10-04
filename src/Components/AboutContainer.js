import React from 'react'

const AboutContainer = () => {

    return(
     <div>

         <div className = "about__title">
        <h1 style = {{color: 'black', marginTop: "50px"}}>About 8ShadesDeep</h1>
        </div>

        <div className = "about__photo">
        <img src = {require('../img/sledge_profile.jpg')}></img>
        </div>
        
    </div>

    )
   

}

export default AboutContainer