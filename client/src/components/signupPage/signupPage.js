import React, { Component } from 'react'

export default class SignupPage extends Component {
  render() {
    return (
      <div>
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
