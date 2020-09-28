import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import Card from './Components/Card'
import HeaderMain from './Components/Header';
import Showcase from './Components/Showcase';
import CardContainer from './Components/CardContainer';
import Footer from './Components/Footer';
import Catalog from './Components/Catalog'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

const App = () =>{
return(
   <>
      <Router>
         <HeaderMain/>
            <Switch>

            <Route path="/" exact component = {Catalog} />
            </Switch>

         <Showcase/>
         <CardContainer/>
         <Footer/>
      </Router>
   </>
)
}

export default App