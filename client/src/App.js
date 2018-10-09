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

const Image = styled.div`
margin: 180px 0px 0px 0px;

`

const Links = styled.div`
font-size: 38px;
color: white;
text-decoration: none;
`


class App extends Component {
  render() {
    return (
   <Navigation>
    <Router>
<div>
   <div>
     <Links>
     <Link to='/signup'>Sign Up</Link>
     <Link to='/login'>Log In</Link>
     </Links>
     <Image>
       <button onClick=''>
     <img alt="Thunderbolt with Power On button" src={require('./images/power-button-off-image.png')}></img>
     </button>
  </Image>
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
