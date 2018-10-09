import React, { Component } from 'react';
import styled from 'styled-components';
import '../src/App.css'
import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom'
import SignupPage from './components/signupPage/SignupPage'
import LoginPage from './components/loginPage/LoginPage'


const Navigation = styled.div`
background: black;
cover: 100%;
color: white;
display: flex;
`;

class App extends Component {
  render() {
    return (
   <Navigation>
    <Router>
<div>
   <div>
     <Link to='/signup'>Sign Up</Link>
     <Link to='/login'>Log In</Link>
     </div>
     <Switch>
       <Route path="/signup" component={SignupPage} />
       <Route path="/login"  component={LoginPage} />
     </Switch>
     </div>
     </Router>
    
   </Navigation>
    );
  }
}

export default App;
