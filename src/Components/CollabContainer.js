import React from 'react'


const CollabContainer = (props) => {

    return(
        <div className = "collab__container">
            <h1>{props.title}</h1>
            <img src = {props.image}/>
        </div>
    )

}


export default CollabContainer