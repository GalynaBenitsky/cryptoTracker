import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Navigation from './Navigation';
import USD from './USD';
import CAD from './CAD';
import EUR from './EUR';


function App(){
  return (
    <>
      <Router>
        <Switch>
          <div>
            <Navigation/>
            <Route path='/usd' component={USD}></Route>
            <Route path='/eur' component={EUR}></Route>
            <Route path='/' exact component={CAD}></Route>
          </div>
        </Switch>
      </Router>
    </>
    );
}

export default App;
