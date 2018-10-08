const mongoose = require('mongoose')
const { UserSchema, CarSchema } = require('./schema')



const UserModel = mongoose.model('User', UserSchema);
const CarModel = mongoose.model('Car', CarSchema);

module.exports = {
    User: UserModel,
    Car: CarModel
}