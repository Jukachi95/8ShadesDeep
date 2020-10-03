import React from 'react'
import './Collab.css'

const CollabContainer = (props) => {

    return(
       <div>
         <h1 className = "catalog__title" > Our Collaborations </h1>
        <div className = {props.className}>
            <div className = "body__left">
                <h1>{props.title}</h1> 
                {/* <h3> props.compDescription */}
                <h3>{props.compDescription}</h3>
                {/* <p>props.firstAddress </p> */}
                <p>{props.firstAddress}</p>
                {/* props.secondAddress */}
                <p>{props.secondAddress}</p>
                {/* <h3>props.openingTimesTitle */}
                <h3>{props.openingTimesTitle}</h3>
                {/* props.openingTime */}
                <p>{props.openingTime}</p>
                {/* props.contactTitle */}
                <h3>{props.contactTitle}</h3>
                {/* props.contactNumber */}
                <p>{props.contactNumber}</p>
                {/* Telephone Icon */}
            </div>

            <img src = {props.image}/>
        </div>
        </div>  
    )

}


export default CollabContainer