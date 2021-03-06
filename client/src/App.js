import React, { Component } from 'react';
import styled from 'styled-components';
import '../src/App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import SignupPage from './components/signupPage/SignupPage'
import LoginPage from './components/loginPage/LoginPage'
import HomePage from './components/homepage/Homepage'
import Cars from './components/carsPage/CarsPage'
import User from './components/User'

const Navigation = styled.div`
background: black;
cover: 100%;
color: white;

`



class App extends Component {
  render() {
    return (
      <Navigation>
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path="/signup" component={SignupPage} />
            
              <Route path="/login" component={LoginPage} />
              <Route exact path='/users/:userId/cars' component={Cars} />
              <Route exact path='/users/:userId' component={User} />
            </Switch>
          </div>
        </Router>

      </Navigation>
    );
  }
}

export default App;
