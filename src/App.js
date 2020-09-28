import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import HeaderMain from './Components/Header';
import Home from './Pages/Home'
import Catalog from './Pages/Catalog'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

const App = () =>{
return(
   <>
      <Router>
         <HeaderMain/>
            <Switch>
               <Route path="/Catalog" component = {Catalog} />
            <Route path="/" exact component = {Home} />
            
            </Switch>

        
      </Router>
   </>
)
}

export default App