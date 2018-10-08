require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true})
mongoose.Promise = global.Promise

const { Car, User } = require('./model')

const bmw = new Car({
    charge: 100,
    make: "BMW",
    model: "i8",
    owner: "diamonique"
})

const diamonique = new User({
    name: "diamonique",
    username: "diamonique",
    email: "danner@danner.tech",
    cars: [bmw]
})

User.remove({})
  .then(() => diamonique.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())