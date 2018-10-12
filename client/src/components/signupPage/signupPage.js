import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'


const Links = styled.div`
font-size: 38px;
color: white;
text-decoration: none;
`

const UserPageBody = styled.div`
text-align: center;
`

const Button = styled.div`
height: 30px;
width: 10px;
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

  handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.post('/api/users', this.state.newUser)

    const users = [...this.state.users]
    users.push(response.data)
    this.setState({ users })  
  }

render() {
    return (
      <UserPageBody>
          <div>
              <Links>
                <Link to='/login'>Log In</Link>
              </Links>
            </div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <br>
          </br>
          <input type='text' name='name' value={this.state.newUser.name} onChange={this.handleChange}></input>
          <br>
          </br>
          <label>Username</label>
          <br>
          </br>
          <input type='text' name='username' value={this.state.newUser.username} onChange={this.handleChange}></input>
          <br>
          </br>
          <label>Email</label>
          <br>
          </br>
          <input type='text' name='email' value={this.state.newUser.email} onChange={this.handleChange}></input>
          <br>
          </br>
          <input type="submit" value="Sign Up">
          </input>
          <Button>
       <img src='/images/continue-button.png' alt='continue button'/>
       </Button>
        </form>

      </UserPageBody>
    )
  }
}
