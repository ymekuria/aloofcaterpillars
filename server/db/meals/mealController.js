var Q = require('q');
var db = require('../dbconfig.js');
var Meal = require('./meal.js');

//findone is the actual mongoose method, and it is being called on the Meal model provided as the second arg. 
var findMeal = Q.nbind(Meal.findOne, Meal);
// create meal is a method that uses the create mongoose method to instantiate a new Meal model
var createMeal = Q.nbind(Meal.create, Meal);
//method for showing all Meal instances
var findAllMeals = Q.nbind(Meal.find, Meal);

//export methods that utilize the Q methods above. 
module.exports = {
  //create method that takes req, res, and next
  create: function(req, res, next){
       createMeal({
		      picture: req.body.picture, 
  			  description: req.body.description,
  			  title: req.body.title,
  			  protein: req.body.protein,
  			  creator: req.body.creator,
  			  consumer: req.body.consumer
		    }).then(function(){
          res.send(201,'success');
        });
  }, 

  allMeals: function(req, res, next) {
    findAllMeals({})
      .then(function(meals) {
        res.json(meals);
      })
      .fail(function(error) {
        next(error);
      });
  }, 

  find: function(req, res, next) {
    findMeal({creator: req.body.creator})
      .then(function(match) {
        if(match) {
          res.send(match);
        }
      });
  }
};


  