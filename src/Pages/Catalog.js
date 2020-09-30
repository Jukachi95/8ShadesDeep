import React from 'react'
import '../Components/Showcase.css'
import CollabContainer from '../Components/CollabContainer';


const Catalog = () =>{
    return(
        <div>
            <h1 style = {{color: 'black'}}>Our Collaborations</h1>
            <CollabContainer title = {'We Are Cow'} image = {require('../img/WeAreCow.jpg')} className = {'collab__container'}/>

            
            <CollabContainer title = {'The Joint'} image= {require('../img/TheJoint.jpg')} className = {'collab__container__reverse'}/>
        </div>
    )
}

export default Catalog