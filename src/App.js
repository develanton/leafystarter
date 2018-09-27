import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Blog from './pages/Blog'
import Start from './pages/Start-project'
import Projects from './pages/All-projects'
import One from './pages/Single-project/one'
import SignUp from './pages/Sign-in'
import Home from './pages/Home'
import Register from './pages/register/register.js'


class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/start' component={Start} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/sign' component={SignUp} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/project/:id' component={One} />
        </Switch>
      </Router>
    );
  }
}

export default App;


