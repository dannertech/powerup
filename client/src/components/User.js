import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const Button = styled.div`
background: white;
`

export default class User extends Component {
  state = {
    user: {}
  }

  getUser = async () => {
    const userId = this.props.match.params.userId
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({
      user: response.data
    })
  }
    deleteUser = async () => {
        const userId = this.props.match.params.userId
        await axios.delete(`/api/users/${userId}`)
     this.setState({

     })
    }

    componentDidMount = () => {
      this.getUser()
    }

    handleChange = (event) => {
const users = [...this.state.users]
users[event.target.username] = event.target.value;
this.setState({ users })
    }

    updateUser = async () => {
      const userId = this.props.match.params.userId
      await axios.put(`/api/users/${userId}`)
    }
  render() {
    return (

      <div>
        <h1>Welcome to Your Homepage</h1>

        <Link to={`/users/${this.props.match.params.userId}/cars`}>Go to Your Cars</Link>
<Button>
        <button onClick={this.deleteUser}>Delete Account</button>
        </Button>
        <h1>Edit Your Details</h1>
      <label>Current Username</label>
      <br></br>
      <label>{this.state.user.username}</label>
      <br></br>
<label>Current Email</label>
<br></br>
<label>{this.state.user.email}</label>

<form>
  <input type='text' name="username" value="New Username"></input> 
  <br></br>
  <input type='text' name="email" value="New Email"></input>
  </form>
      </div>
    )
  }
}
