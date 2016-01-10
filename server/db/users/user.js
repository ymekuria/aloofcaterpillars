//this file contains the database schema for our users. Here we export the instantiated user model

//must require the database connection from config.js
var db = require('../dbconfig');
//must also require mongoose
var mongoose = require('mongoose');

//this variable creates the schema for our users. It includes a name, a password, and a meal object. 
var userSchema = mongoose.Schema({
  username: String,
  password: String
});

var User = mongoose.model('User', userSchema);

module.exports = User; 
