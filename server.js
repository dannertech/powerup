
require("dotenv").config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.on('connected', () => {
    console.log('Mongoose Connected Successfully');
})
connection.on('error', (err) => {
    console.log(err);
})

const usersController = require('./routes/usersController')
const carsController = require('./routes/carsController')

var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/client/build/'));

app.use('/api/users/:userId/cars', carsController)




app.use('/api/users', usersController)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})



module.exports = app;
