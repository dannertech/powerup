import React, { Component } from 'react';
import styled from 'styled-components';
import '../src/App.css'
import { Link } from 'react-router-dom'

const Navigation = styled.div`
background: black;
cover: 100%;
color: white;
`;

class App extends Component {
  render() {
    return (
   <Navigation>
     <Link></Link>
   </Navigation>
    );
  }
}

export default App;
