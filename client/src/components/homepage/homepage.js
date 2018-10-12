import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Image = styled.div`
margin: 180px 0px 0px 0px;
display: flex;
align-content: center;
justify-content: center;
`

const Links = styled.div`
font-size: 40px;
color: white;
text-decoration: none;

display: flex;


`




export default class Homepage extends Component {
  render() {
    return (
      <div>
       
        <div>
              <Links id="links">
           
                <Link to='/signup'>Sign Up</Link>
                
              <hr></hr>
              
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
