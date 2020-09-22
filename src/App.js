import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './style.css';

import { Home } from './components/Home/HomeView'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

import Task1 from './components/Task1/Task1View';
import Task2 from './components/Task2/Task2View';
import Task3 from './components/Task3/Task3View';
import Task4 from './components/Task4/Task4View';
import Task5 from './components/Task5/Task5View';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container pt-4">
        <Switch>
          <Route path={'/'} exact component={Home}/>
          <Route path={'/task1'} component={Task1}/>
          <Route path={'/task2'} component={Task2}/>
          <Route path={'/task3'} component={Task3}/>
          <Route path={'/task4'} component={Task4}/>
          <Route path={'/task5'} component={Task5}/>
        </Switch>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
