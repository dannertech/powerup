import React, { Component } from 'react';
import styled from 'styled-components';
import '../src/App.css'
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'

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
     <Link>Login</Link>
     <Link>Sign Up</Link>
   </Navigation>
    );
  }
}

export default App;
