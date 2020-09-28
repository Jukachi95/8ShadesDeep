import React from 'react'
import { shape } from 'prop-types';
import Showcase from './Showcase';
import Catalog from './Catalog'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

const HeaderMain = () => {

return(
   <Router>
    <div>
            <div className="ui inverted vertical masthea center aligned segment">
                <div className = "ui container">
                    <div className = "ui large secondary inverted pointing menu">
                        {/* <a className = "toc item">8SHADESDEEP</a>
                        <a className = "item">Home</a> */}
                        <ul>
                        {/* <li><Link to ="/"> Catalog </Link></li>   */}
                         </ul>
                    </div>
                </div>

                {/* <Switch>
                <Route path="/" exact component={Catalog} />
                </Switch> */}

             </div>
             
              
            
            
             
    </div>
    </Router> 
)

}

export default HeaderMain