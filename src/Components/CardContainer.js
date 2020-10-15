import React from 'react'
import Card from './Card'
import './CardContainer.css'

const CardContainer = () =>{
    return(
        <div className = 'cards'>
          <h1>What we specialize in</h1>
          <div className = "cards__container">
                <div className = "cards__wrapper">
                   <ul className = "cards__items">
                        <Card
                        src = {require('../img/8shadesafro.jpg')}
                        text = "Quality Photography for any and every event " 
                        label = 'Quality Photography'
                        />
                        {/* <Card
                        src = {require('../img/8shadesafro.jpg')}
                        text = "Motion Pictures"
                        label = 'Videography'
                        /> */}

                        <Card
                        src = {require('../img/8shadesbun.jpg')}
                        text = "Exceptional and Professional Video Editing "
                        label = 'High Quality Productions'
                        />

                      
                   </ul> 

                   <ul className = "cards__items">
                        <Card
                        src = {require('../img/8shadesboard.jpg')}
                        text = "Innovative Visionaries"
                        label = 'Innovation & Progress'
                        />
                        {/* <Card
                        src = {require('../img/8shadesafro.jpg')}
                        text = "Motion Pictures"
                        label = 'Videography'
                        /> */}

                        <Card
                        src = {require('../img/8shadesparkour1.jpg')}
                        text = "Meaningful Collaborations"
                        label = 'Embracing Progress'
                        />


                        <Card
                        src = {require('../img/8shadesdancegroup.jpg')}
                        text = "Creative Professionals"
                        label = 'Purpose'
                        />
                
                   </ul> 

                </div>
          </div>  
        </div>
    )
}

export default CardContainer