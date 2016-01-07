var mongoose = require('mongoose');

var db = require('../dbconfig');

var mealSchema = mongoose.Schema({
  picture: String, 
  description: String,
  title: String,
  topThreeIngredients: Array,
  creator: String,
  consumer: String
});

var Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal; 