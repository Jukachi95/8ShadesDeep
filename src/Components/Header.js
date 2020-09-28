import React from 'react'
import { shape } from 'prop-types';
import Showcase from './Showcase';
import Catalog from '../Pages/Catalog'
import { Link} from 'react-router-dom'

const HeaderMain = () => {

return(
   <>
    <div>
            <div className="ui inverted vertical masthea center aligned segment">
                <div className = "ui container">
                    <div className = "ui large secondary inverted pointing menu">
                        <a className = "toc item">8SHADESDEEP</a>
                        <li> <Link to = "/">Home</Link>  </li>
                        <ul>
                        <li><Link to ="/Catalog"> Catalog </Link></li>  
                         </ul>
                    </div>
                </div>

               
             </div>
             
              
            
            
             
    </div>
    </> 
)

}

export default HeaderMain