import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import UsersList from '../UsersList';
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
text-decoration: none;
`

const Links = styled.div`
font-size: 38px;
color: white;
text-decoration: none;
`

const LoginPageBody = styled.div`
margin: 0 auto;
`

export default class LoginPage extends Component {
  state = {
    users: []
  }

  /* fetchUsers = async () => {
     const response = await axios.get('/api/users')
     const users = response.data
     this.setState({users})
   } */

  componentDidMount = async () => {
    const response = await axios.get('/api/users')
    this.setState({ users: response.data })
  }

  render() {
    const usersList = this.state.users.map((user, i) => {
      return (
        <div>
          <StyledLink to={`/users/${user._id}`} key={i}>Username: {user.username}</StyledLink></div>

      )
    })
    return (
      <LoginPageBody id='pagebody'>
        <div>
          <Links>
            <Link to='/signup'>Sign Up</Link>
          </Links>
        </div>
        <h1>This is the login page</h1>

        <h5>Select Your Account</h5>
        
          {usersList}
        




      </LoginPageBody>
      //<UsersList users={this.state.users} /> 
    )
  }
}