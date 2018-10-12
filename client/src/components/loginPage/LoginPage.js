import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import UsersList from '../UsersList';
import { Link } from 'react-router-dom'

const StyledLink = styled(Link)`
text-decoration: none;
`

const UserListStyle = styled.div`
color: black;
`

const Links = styled.div`
font-size: 18px;
color: white;
text-decoration: none;
`

const LoginPageBody = styled.div`
margin: 0 auto;
`

const UsersListDiv = styled.div`
background: white;
border-radius: 40px;
color: black;


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
        <UserListStyle>
          <StyledLink to={`/users/${user._id}`} key={i}>Username: {user.username}</StyledLink></UserListStyle>

      )
    })
    return (
      <LoginPageBody id='pagebody'>
        <div>
          <Links>
            <Link class='page-link' to='/signup'>Sign Up</Link>
          </Links>
        </div>
        <h1>Login</h1>

        <h5 id="select-account">Select Your Account</h5>
        <UsersListDiv>
         <div id="user-list"> {usersList}</div>
          </UsersListDiv>
        




      </LoginPageBody>
      //<UsersList users={this.state.users} /> 
    )
  }
}