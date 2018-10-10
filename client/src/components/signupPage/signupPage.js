import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Links = styled.div`
font-size: 38px;
color: white;
text-decoration: none;
`

export default class SignupPage extends Component {
  render() {
    return (
      <div>
          <div>
              <Links>
                <Link to='/login'>Log In</Link>
              </Links>
            </div>
        <h1>Sign Up</h1>
        <form>
          <label>Name</label>
          <br>
          </br>
          <input type='text' value="Name"></input>
          <br>
          </br>
          <label>Username</label>
          <br>
          </br>
          <input type='text' value="Username"></input>
          <br>
          </br>
          <label>Email</label>
          <br>
          </br>
          <input type='text' value='Email'></input>
        </form>

      </div>
    )
  }
}
