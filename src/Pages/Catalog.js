import React from 'react'
import '../Components/Showcase.css'
import CollabContainer from '../Components/CollabContainer';
import '../Components/Collab.css'


const Catalog = () =>{
    return(
        <div>
            <h1 className = "catalog__title" style = {{marginTop: '50px'}}> Our Collaborations </h1>
            <CollabContainer title = {'We Are Cow'} 
            image = {require('../img/WeAreCow.jpg')} 
            className = {'collab__container'}
            compDescription = {'Vintage Styles & Accessories'}
            firstAddress = {'82 - 85 Digbeth'}
            secondAddress = {'Birmingham'}
            openingTimesTitle = {'Opening Times:'}
            openingTime = {'11am'}
            contactTitle = {'Contact Number:'}
            contactNumber = {'0121 643 8989'}
            />

            <CollabContainer title = {'The Joint'} 
            image = {require('../img/TheJoint4.jpg')} 
            className = {'collab__container__reverse'}
            compDescription = {'Exotic Sweets,Candy & Cereals'}
            firstAddress = {'Unit 6 Premier House'}
            secondAddress = {'Smethwick'}
            openingTimesTitle = {'Opening Times:'}
            openingTime = {'12:00 - 20:00'}
            contactTitle = {'Contact Number:'}
            contactNumber = {'0121 448 2084'}
            />
            
            {/* <CollabContainer title = {'The JOINT'} 
            image= {require('../img/TheJoint4.jpg')} 
            className = {'collab__container__reverse'}
            compDescription = {'Exotic Candy & Snacks Store'}
            firstAddress = {'Unit 6 Premier House'}
            secondAddress = {'Rolfe Street'}
            openingTimesTitle = {'Opening Times:'}
            openingTime = {'12:00 - 20:00'}
            contactTitle = {'Contact Number:'}
            contactNumber = {'0121 448 2084'}
            /> */}
            
        </div>
    )
}

export default Catalog