import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import People from './People';
import Planets from './Planets';
import Starships from './Starships';
import Navigation from './components/navigation/Navbar';
import NotFound from './components/navigation/NotFound';
import 'bootstrap/dist/css/bootstrap.css';
import Creature from './components/entities/Creature';
import Planet from './components/entities/Planet';
import Starship from './components/entities/Starship';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Switch>
        <Redirect exact from="/" to="/people"/>
        <Route exact path="/people" component={People} />
        <Route exact path="/people/:creatureId" component={Creature}/>
        <Route exact path="/planets" component={Planets} />
        <Route exact path="/planets/:planetId" component={Planet}/>
        <Route exact path="/starships" component={Starships} />
        <Route exact path="/starships/:starshipId" component={Starship}/>
        <Route exact path="/not-found" component={NotFound} />
        <Redirect exact from="*" to="/not-found"/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
