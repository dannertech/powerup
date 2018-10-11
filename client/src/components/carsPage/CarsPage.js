import React, { Component } from 'react'
import axios from 'axios'

export default class Cars extends Component {
    state = {
        user: {},
        cars: []
    }
    getUser = async () => {
const userId = this.props.match.params.userId
const response = await axios.get(`/api/users/${userId}`)
this.setState({
    user: response.data,
    cars: response.data.cars
})
    }

    componentDidMount = () => {
        this.getUser()
    }
  render() {
      const carsList = this.state.cars.map((car, i) => {
          return (
            <div>
              <h1>{car.make}</h1>
              
              <h2>{car.model}</h2>
              </div>
          )
      })
    return (
      <div>
        <h1>These are your Cars</h1>
<h5>{carsList}</h5>

      </div>
    )
  }
}
