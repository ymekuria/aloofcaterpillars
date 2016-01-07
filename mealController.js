var Q = require('q');
var db = require('./dbconfig.js');
var Meal = require('./meal.js');

//findone is the actual mongoose method, and it is being called on the Meal model provided as the second arg. 
var findMeal = Q.nbind(Meal.findOne, Meal);
// create meal is a method that uses the create mongoose method to instantiate a new Meal model
var createMeal = Q.nbind(Meal.create, Meal);

//export methods that utilize the Q methods above. 
module.exports = {
  //create method that takes req, res, and next
  create: function(req, res, next){
  	//calls findmeal, searching the db for a meal with the title of the meal passed in the post request
    findMeal({title : req.body.creator})
      //if it's found, return an error saying the meal is already in the database
	  .then(function (meal){
	    if (meal){
		  next(new Error('Meal is already in Mongo database'));
		//otherwise return a new instance of Meal model, setting its properties according to the post request.
		} else {
	      return createMeal({
		    picture: req.body.picture, 
  			description: req.body.description,
  			title: req.body.title,
  			topThreeIngredients: req.body.topThreeIngredients,
  			creator: req.body.creator,
  			consumer: req.body.consumer
		  });
		}
	  })
  }
}