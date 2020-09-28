import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Container, Header, GridRow} from 'semantic-ui-react'
import {Grid, Image} from 'semantic-ui-react'
import HeaderMain from './Header'
import Showcase from './Showcase';


const Card = (props) =>{


    return(

        <div>
            <li className = 'cards__item'>
                <a className = 'cards__item__link'>
                    <figure className = 'cards__item__pic-wrap' data-category= {props.label}>
                        <img  src= {props.src} className = "cards__item__img"></img>
                    </figure>

                    <div class = "cards__item__info">
                        <h5 className = "cards__item__text">{props.text}</h5>
                    </div>
                </a>
            </li>
        </div>
    )


}


// Change to functional component to accept props

export default Card