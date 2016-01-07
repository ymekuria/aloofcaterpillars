//this file contains the database schema for our users. Here we export the instantiated user model

//must require the database connection from config.js
var db = require('./config');
//must also require mongoose
var mongoose = require('mongoose');

//this variable creates the schema for our users. It includes a name, a password, and a meal object. 
var userSchema = mongoose.schema({
  name: String,
  password: String,
  //in our rough draw-up of the schema, this should be an array of instantiated meal objects, provided to us by the
  //particular meal id - need to figure out how to get that id here. 
  meal: Array 
});

var User = mongoose.model('User', userSchema);

module.exports = User; 
