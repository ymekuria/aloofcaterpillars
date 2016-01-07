var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/database');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'CONNECTION ERROR'));

db.once('open', function() {
  console.log('The database is connected'); 
}); 

module.exports = db;

