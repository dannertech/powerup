const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CarSchema = new Schema({
    charge: Number,
    make: String,
    model: String,
    owner: String

})


const UserSchema = new Schema({
    name: String, 
    username: String, 
    email: String,
    picture: String,
    cars: [ CarSchema ]
})





module.exports = {
   CarSchema,
   UserSchema
}

