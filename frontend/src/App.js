import React, { useState, createContext, useEffect } from "react";
import cookie from "react-cookies";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/index'
import About from './pages/about'
import Freelance from './pages/freelance'
import Besoin from "./pages/besoin";
import Login from './pages/login'
import Register from './pages/register'
import Profile from './pages/profile'
import MonEspaceFreelance from "./pages/MonEspaceFreelance";
import Account from "./pages/MonCompte";

const userContext = createContext(null)

function App() {
  
  const [token, setToken] = useState(null);
  useEffect(() => {
      setToken({user: cookie.load('user'), token: cookie.load('token')});
  },[])
  console.log(token, 'f l app.js')
  return (
    <div>
      <userContext.Provider value={{token, setToken}}>
        <Router>
          <Switch>
            <Route path="/" exact render={()=> <Home userContext={userContext} />} />
            <Route path="/about" render={()=> <About userContext={userContext} />} />
            <Route path="/freelance" exact render={()=> <Freelance userContext={userContext} />} />
            <Route path="/besoin" component={Besoin} />
            <Route path="/login" render={()=> <Login userContext={userContext} />} />
            <Route path="/register" component={Register} />
            <Route path="/freelance/profile/" render={()=> <Profile userContext={userContext} />} />
            <Route path="/compte" render={()=> <Account userContext={userContext} />} />
            <Route path={`/${token?.user?.user_first_name + token?.user?.user_last_name}`} render={()=> <MonEspaceFreelance userContext={userContext} />} />
          </Switch>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
