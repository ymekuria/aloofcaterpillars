//this file contains the database schema for our users. Here we export the instantiated user model

//must require the database connection from config.js
var db = require('./config');
//must also require mongoose
var mongoose = require('mongoose');

//this variable creates the schema for our users. It includes a name, a password, and a meal object. 
var userSchema = mongoose.schema({
  name: String,
  password: String,
  //question here: what exactly is meal? objects aren't valid mongoose schema types, so will need to change this
  //maybe should be an array of nested arrays/values?
  meal: Object
});

var User = mongoose.model('User', userSchema);

module.exports = User; 
