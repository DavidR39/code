import React from 'react'

/* LAYOUT */
import NavBar from './components/NavBar'
import Home from './components/Home'
import Dashboard from './components/Dashboard'

/* AUTH0 */
import { ProtectedRoute } from './components/Auth'

/* ROUTER */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' component={Home} exact />
        <ProtectedRoute path='/dashboard' component={Dashboard} exact/>
      </Switch>
    </Router>
  );
}

export default App;
