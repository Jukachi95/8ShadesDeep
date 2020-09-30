import React from 'react'
import './Collab.css'

const CollabContainer = (props) => {

    return(
        <div className = {props.className}>
            <h1>{props.title}</h1>
            <img src = {props.image}/>
        </div>
    )

}


export default CollabContainer