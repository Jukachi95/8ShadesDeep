import React from 'react'
import { shape } from 'prop-types';
import Showcase from './Showcase';
import Catalog from '../Pages/Catalog'
import About from '../Pages/About'
import { Link} from 'react-router-dom'
import './Header.css'

const HeaderMain = () => {

return(
   <>
    <div>
            <nav className="navbar__main">
                   
                        <ul className = "navbar__main__inner">
                            <li className = "item"> <Link to = "/">Home</Link>  </li>
                            <li className = "item"><Link to ="/Catalog"> Catalog </Link></li>  
                            <li className = "item"> <Link to = "/About"> About Us</Link> </li>
                        </ul>
                    

               
             </nav>
             
              
            
            
             
    </div>
    </> 
)

}

export default HeaderMain