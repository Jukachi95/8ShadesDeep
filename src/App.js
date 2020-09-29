import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import HeaderMain from './Components/Header';
import Home from './Pages/Home'
import Catalog from './Pages/Catalog'
import About from './Pages/About'
import Footer from './Components/Footer'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

const App = () =>{
return(
   <>
      <Router>
         <HeaderMain/>
            <Switch>
               <Route path="/" exact component = {Home} />
               <Route path="/Catalog" component = {Catalog} />
               <Route path ="/About" component = {About}/>
            </Switch>

        <Footer/>
      </Router>
   </>
)
}

export default App