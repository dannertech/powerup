import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const Button = styled.div`
background: white;
`

export default class User extends Component {
    deleteUser = async () => {
        const userId = this.props.match.params.userId
        await axios.delete(`/api/users/${userId}`)
     this.setState({

     })
    }

    updateUser = async () => {
      const userId = this.props.match.params.userId
      
    }
  render() {
    return (

      <div>
        <h1>Welcome to Your Homepage</h1>

        <Link to={`/users/${this.props.match.params.userId}/cars`}>Go to Your Cars</Link>
<Button>
        <button onClick={this.deleteUser}>Delete Account</button>
        </Button>
       <form>
         <input type='text' name="username" value={this.props.match.params.userId} />
       </form>

      </div>
    )
  }
}
