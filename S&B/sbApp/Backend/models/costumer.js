const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;
var customerSchema = new Schema({
    first_name:String,
    last_name:String,
    email:String,
    password:String,
    credit:number = 0,
    time:String
});
var Customer = mongoose.model('Customer', customerSchema)
module.exports = Customer;

