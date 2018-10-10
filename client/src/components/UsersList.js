import React, { Component } from 'react'
import User from './User'


export default class UsersList extends Component {
  render() {
      const usersList = this.props.users.map(user => <User key={user._id} userInfo={user} />)
    return (
      <div>
          {usersList}
      </div>
    )
  }
}
