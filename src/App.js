import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './components/Navbar.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
