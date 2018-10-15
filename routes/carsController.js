const express = require('express')
const { User } = require('../db/model')
const { Car } = require('../db/model')
const router = express.Router({ mergeParams: true})

router.get('/', async (req, res) => {
    const cars = await Car.find()
    res.send(cars)
    });
    
    

router.get('/:carsId', (req,res) => {
    const carsId = req.params.carsId
    const userId = req.param.userId
    User.findById(req.params.userId)
    .then((user) => {
        const car = user.cars.id(carsId)
        res.json(car)
    }).catch((error) => {
        console.log(error)
    }) 

})

router.post('/', async (req,res) => {
    console.log('CARS POST', req.body)
    const newCar = new Car(req.body)
    User.findById(req.params.userId)
    .then((user) => {
        user.cars.push(newCar)
        return user.save()
    })
    .then((user) => {
        res.send(user)
    })
})


router.delete('/:carsId', (req,res) => {
    const userId = req.params.userId
    const carsId = req.params.carsId

    User.findById(userId)
    .then((user) => {
        const car = user.cars.id(carsId).remove()
        return user.save()
    }).then(() => {
        res.sendStatus(200)
    }).catch((error) => {
        console.log(error)
    })
})

module.exports = router