require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient:true})
mongoose.Promise = global.Promise

const { Car, User } = require('./model')

const diamonique = new User({
    
})