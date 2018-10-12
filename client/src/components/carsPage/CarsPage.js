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

    deleteCar = async () => {
const userId = this.props.match.params.userId
//await axios.delete(`/api/users/${userId}/cars/${carsId}`)
this.getUser()
    }

    componentDidMount = () => {
        this.getUser()
    }
  render() {
      const carsList = this.state.cars.map((car, i) => {
          return (
            <div key={i}>
              <h1>{car.make}</h1>
              
              <h2>{car.model}</h2>
              
              <button id="delete" onClick={this.handleDelete(car._id)}>Delete Car</button>
              </div>
          )
      })
    return (
      <div>
        <h1>These are your Cars</h1>
<h5>{carsList}</h5>
<h2>Add Car</h2>
<form>

<input type='text' name="make" value="make"></input>
<br></br>
<input type='text' name="model" value="model"></input>
    
</form>
      </div>
    )
  }
}
