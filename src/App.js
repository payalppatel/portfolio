import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';

import ContactMe from './components/ContactMe.js';


export default function App(){
  return(
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/skills"><Skills /></Route>
          <Route path="/projects"><Projects /></Route>
          
          <Route path="/contact"><ContactMe /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
