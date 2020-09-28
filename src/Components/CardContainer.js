import React from 'react'
import Card from './Card'
import './CardContainer.css'

const CardContainer = () =>{
    return(
        <div className = 'cards'>
          <h1>Take a look at our projects</h1>
          <div className = "cards__container">
                <div className = "cards__wrapper">
                   <ul className = "cards__items">
                        <Card
                        src = {require('../img/8shadesafro.jpg')}
                        text = "High Quality Photography for our collaborations" 
                        label = 'Quality Photography'
                        />
                        {/* <Card
                        src = {require('../img/8shadesafro.jpg')}
                        text = "Motion Pictures"
                        label = 'Videography'
                        /> */}

                        <Card
                        src = {require('../img/8shadesbun.jpg')}
                        text = "High Quality Videography for our collaborations"
                        label = 'Creative Professionals'
                        />

                      
                   </ul> 

                   <ul className = "cards__items">
                        <Card
                        src = {require('../img/8shadesafro.jpg')}
                        text = "Quality Photography"
                        label = 'Photography'
                        />
                        {/* <Card
                        src = {require('../img/8shadesafro.jpg')}
                        text = "Motion Pictures"
                        label = 'Videography'
                        /> */}

                        <Card
                        src = {require('../img/8shadesbun.jpg')}
                        text = "Creative Professionals"
                        label = 'Creative Direction'
                        />


                        <Card
                        src = {require('../img/8shadesbun.jpg')}
                        text = "Creative Professionals"
                        label = 'Creative Direction'
                        />
                
                   </ul> 

                </div>
          </div>  
        </div>
    )
}

export default CardContainer