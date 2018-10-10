import React, { Component } from 'react'

export default class UsersList extends Component {
  render() {
    return (
      <div>
        { props.users.map((user) => {
            return (
                <Users user={user} {...props} key={user._id} />
            )
        })
    }
      </div>
    )
  }
}
