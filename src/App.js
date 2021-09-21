import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Menu from './components/Menu/Menu';
import Reservation from './pages/Reservation/Reservation'
import Story from './pages/Story/Story';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/reservation" component={Reservation} />
        <Route path="/story" component={Story} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
