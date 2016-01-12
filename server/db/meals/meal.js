var mongoose = require('mongoose');

var db = require('../dbconfig');

var mealSchema = mongoose.Schema({
  picture: String, 
  description: String,
  title: String,
  protein: String,
  creator: String,
  consumers: Array,
  status: {type: String, default: 'false'}
});

var Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal; 

