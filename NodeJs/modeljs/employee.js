const mongoose = require('mongoose');
const Schema = mongoose.Schema
const employeeSchema = new Schema({
    name: String,
    position: String,
    office: String,
    salary: Number,
})
module.exports = mongoose.model('employee', employeeSchema, 'employees')