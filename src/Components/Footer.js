import React from 'react'
import './Footer.css'


const Footer = () =>{
return(
    <div className = "footer__container">
        <div className = "footer__left">
            {/* Left side of footer */}

             <h3>8SHADESDEEP </h3>

                <div className = "footer__left__inner">
                    <span><a href = "/">Home</a> | <a href = "/">Portfolio</a> | <a href = "/">Contact</a></span>
                    <p>&copy; 2020 8SHADESDEEP Digital Collective & Photography</p> 
                </div>          

        </div>

        {/* Center of footer */}
        <div className = "footer__center">
          <i class="map marker alternate icon"></i>
           <h3>Smethwick, West Midlands</h3> 
        </div>


        {/* Right side of footer */}
        <div className = "footer__right">
            <h3> Follow Us: </h3>
                    <span>
                    <a href ="https://www.instagram.com/8shadesdeep/?hl=en" target = "_blank">  <i class="instagram icon"> </i>  </a>  
                    <a href ="https://www.youtube.com/channel/UC1OdRJEvyfZwBJpjF1Pgevw" target = "_blank">  <i class="youtube icon"></i> </a>
                    </span>
        </div>


    </div>
)
}

export default Footer