import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import UsersList from '../UsersList';

export default class LoginPage extends Component {
  state = {
users: []
  }

  fetchUsers = async() => {
    const response = await axios.get('/api/users')
    const users = response.data
    this.setState({users})
  }

  componentDidMount = async () => {
    this.fetchUsers()
  }
  
  render() {
    return (
      <div>
        <h1>This is the login page</h1>
        <h5>Select Your Account</h5>
        <UsersList />
      </div>
    )
  }
}
