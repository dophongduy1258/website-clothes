var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name: String,
	phone: String,
	address: String,
	age: Number,
	gender: Boolean,
	image: String,
	email: String,
	password: String,
},{
    collection:'User'
});

var EmployeeModel = mongoose.model('Employee',userSchema);
module.exports= EmployeeModel; 