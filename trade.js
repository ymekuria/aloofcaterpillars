var mongoose = require('mongoose');

var db = require('./config');

var tradeSchema = mongoose.schema({
  mealOneId: Number,
  mealTwoId: Number
});

var Trade = mongoose.model('Trade', tradeSchema);

module.exports = Trade; 