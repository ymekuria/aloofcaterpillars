var mongoose = require('mongoose');
var Q = require('q'); 
//create mongoose database connection with name database

var connectionPath = process.env.MONGOLAB_URI || 'mongodb://localhost/greenfield'; 
// var connectionPath = process.env.MONGOLAB_URI || 'mongodb://localhost/'; 
// 'mongodb://heroku_knr1s9f3:62topomn5eqkt44d74lrivho0a@ds043605.mongolab.com:43605/heroku_knr1s9f3'
mongoose.connect(connectionPath);

//save connection in variable db
var db = mongoose.connection;

//set up listener for errors if unable to connect to server
db.on('error', console.error.bind(console, 'CONNECTION ERROR'));

//set up listener for success to know that connection was successful
db.once('open', function() {
  console.log('The database is connected here'); 
}); 

//export db
module.exports = db;

