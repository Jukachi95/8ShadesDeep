import React from 'react'
import './Collab.css'

const CollabContainer = (props) => {

    return(
        <div className = {props.className}>
            <div className = "body__left">
                <h1>{props.title}</h1> 
                <h3>Exotic Candy & Snacks Store</h3>
                <p>Unit 6 Premier House </p>
                <p>Rolfe Street</p>
                <h3>Opening Times:</h3>
                <p>12:00 - 20:00</p>
                <h3>Contact Number:</h3>
                <p>0121 448 2084</p>
                {/* Telephone Icon */}
            </div>

            <img src = {props.image}/>
        </div>
    )

}


export default CollabContainer