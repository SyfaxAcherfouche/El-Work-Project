import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/index'
import About from './pages/about'
import Freelance from './pages/freelance'
import Besoin from "./pages/besoin";
import Login from './pages/login'
import Register from './pages/register'
import Profile from './pages/profile'
import MonProfileFreelance from './pages/MonProfileFreelance'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/freelance" exact component={Freelance} />
        <Route path="/besoin" component={Besoin} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/freelance/profile/" component={Profile} />
        <Route path="/mon-profile-freelance" component={MonProfileFreelance} />
      </Switch>
    </Router>
  );
}

export default App;
