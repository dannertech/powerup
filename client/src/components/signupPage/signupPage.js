import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const Links = styled.div`
font-size: 38px;
color: white;
text-decoration: none;
`

export default class SignupPage extends Component {
  state = {
    users: [],
    newUser: {
      username: '',
      name: '',
      email: ''

    }
    
  }

  componentDidMount = async () => {
    const response = await axios.get('/api/users')
    this.setState({ users: response.data })
  }

  handleChange = (event) => {
    const newUser = {...this.state.newUser}
    newUser[event.target.name] = event.target.value
    this.setState({ newUser })
  }
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
          <input type='text' name='name' value="name" onChange={this.handleChange}></input>
          <br>
          </br>
          <label>Username</label>
          <br>
          </br>
          <input type='text' name='username' value="username" onChange={this.handleChange}></input>
          <br>
          </br>
          <label>Email</label>
          <br>
          </br>
          <input type='text' name='email' value='email' onChange={this.handleChange}></input>
          <br>
          </br>
          <input type="submit" value="Sign Up"></input>
        </form>

      </div>
    )
  }
}
