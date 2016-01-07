var Q = require('q');
var db = require('./dbconfig.js');
var User = require('./user.js');

//findone is the actual mongoose method, and it is being called on the User model provided as the second arg. 
var findUser = Q.nbind(User.findOne, User);
// create user is a method that uses the create mongoose method to instantiate a new User model
var createUser = Q.nbind(User.create, User);

//export methods that utilize the Q methods above. 
module.exports = {
  create: function(req, res, next){
    findUser({title : req.body.title})
	  .then(function (user){
	    if (user){
	      //should refactor this later not to return an error but to check the session. 
		  next(new Error('User is already in Mongo database'));
		} else {
	      return createUser({
		    username: req.body.username,
		    password: req.body.password
		  });
		}
	  })
  }
}