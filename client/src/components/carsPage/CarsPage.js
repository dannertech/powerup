import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledCard = styled.div`
background: white;
color: black;
border-radius: 30px;
margin: 0px;
padding: 0px;
`
const Body = styled.div`
text-align: center;

`

export default class Cars extends Component {
    state = {
        user: {},
        cars: [],
        newCar: {
            make: '',
            model: ''
        }
    }
    getUser = async () => {
        const userId = this.props.match.params.userId
        const response = await axios.get(`/api/users/${userId}`)
        this.setState({
            user: response.data,
            cars: response.data.cars
        })
    }
handleChange =  (event) => {

const newCar = {...this.state.newCar}

newCar[event.target.name] = event.target.value
this.setState({ newCar })
  /* const newCar = {...this.state.newCar}
    newCar[event.target.name] = event.target.value
    this.setState({ newCar }) */
}

    deleteCar = async (carsId) => {
        const userId = this.props.match.params.userId
        await axios.delete(`/api/users/${userId}/cars/${carsId}`)
        this.getUser()
    }

    componentDidMount = () => {
        this.getUser()

    }

    handleNew = async() => {
       
        const userId = this.props.match.params.userId
        const response = await axios.post(`/api/users/${userId}/cars`, this.state.newCar)
    
        const cars = [...this.state.cars]
        cars.push(response.data)
        this.setState({ cars })  
    }
    render() {
       
        const carsList = this.state.cars.map((car, i) => {
            return (
                
                <StyledCard key={i}>

                    <h1>{car.make}</h1>

                    <h2>{car.model}</h2>

                    <button id="delete" onClick={() => this.deleteCar(car._id)}>Delete Car</button>

                    
                </StyledCard>
            )
        })
        return (
            <Body>
                <h1>These are your Cars</h1>
                <h5>{carsList}</h5>
                <h2>Add Car</h2>
                <form onSubmit={this.handleNew}>

                    <input type='text' name="make" value={this.state.newCar.make} onChange={this.handleChange}></input>
                    <br></br>
                    <input type='text' name="model" value={this.state.newCar.model} onChange={this.handleChange}></input>
<br></br>
<input type="submit" value="Submit"></input>
                </form>
            </Body>
        )
    }
}
