import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Image = styled.div`
margin: 180px 0px 0px 0px;
`

const Links = styled.div`
font-size: 38px;
color: white;
text-decoration: none;
display: flex;
justify-content: flex-end;


`





export default class Homepage extends Component {
  render() {
    return (
      <div>
        <h1>This is the homepage</h1>
        <div>
              <Links id="links">
           
                <Link to='/signup'>Sign Up</Link>
               
                <Link to='/login'>Log In</Link>
               
              </Links>
            </div>

        <Image>
          <img alt="Thunderbolt with Power On button"
            src='/images/power-button-off-image.png' />
        </Image>
      </div>
    )
  }
}
