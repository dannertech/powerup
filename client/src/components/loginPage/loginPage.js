import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import UsersList from '../UsersList';

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
   this.setState({users: response.data})
  }
  
  render() {
    const usersList = this.state.users.map((user,i) => {
    return (
      <div>
        {usersList}
        </div>
    )
  })
return (
      <div>
        <h1>This is the login page</h1>
        <div>
          {usersList}
        </div>
        <h5>Select Your Account</h5>
        <UsersList users={this.state.users}
      //  fetchUsers={this.fetchUsers}
        />
      </div>
    )
  }
}