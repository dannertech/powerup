import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const Button = styled.div`
background: white;
`

export default class User extends Component {
  state = {
    user: {},
    users: []
  }
  handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.put(`/api/users/${this.state.user._id}`, this.state.user)
    // this.setState({  })  
  }

  getUser = async () => {
    const userId = this.props.match.params.userId
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({
      user: response.data
    })
  }
getUsers = async () => {
  const response = await axios.get('/api/users')
  this.setState({ users: response.data })
}

    deleteUser = async () => {
        const userId = this.props.match.params.userId
        await axios.delete(`/api/users/${userId}`)
     this.setState({

     })
    }

    componentDidMount = () => {
      this.getUser()
      this.getUser()
    }

    handleChange = (event) => {
const user = {...this.state.user}
user[event.target.name] = event.target.value;
this.setState({ user })
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

<form onSubmit={this.handleSubmit}>
  <input type='text' name="username" onChange={this.handleChange}></input> 
  <br></br>
  <input type='text' name="email" onChange={this.handleChange}></input>
  <br></br>
  <input type='submit'></input>
  </form>
      </div>
    )
  }
}
