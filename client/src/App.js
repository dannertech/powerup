import React, { Component } from 'react';
import styled from 'styled-components';
import '../src/App.css'

const Body = styled.div`
background: black;
cover: 100%;
color: white;
`;

class App extends Component {
  render() {
    return (
   <Body>
     This is my page now
   </Body>
    );
  }
}

export default App;
