var Q = require('q');
var db = require('../dbconfig.js');
var User = require('./user.js');
var session = require('express-session');

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
	  });
  }, 

  signin: function(req, res, next) {
     var username = req.body.username;
     var password = req.body.password;
     //call findUser, which is the mongoose method findone, which will query for the user from post req
     findUser({username: username})
      //when done, if found...
      .then(function(match) {
        if(match) {
          //...user exists. Check their password.
          //save database password
          var dbPassword = match.get('password');
          //if input password equals db password
          if(dbPassword === password) {
            //generate a session...
            return req.session.regenerate(function() {
              //...setting the session user property to input username
              req.session.user = username;
              //TODO: examine redirect property and where we'd route it if we used it
              res.redirect('/browse');
            });
          //password does not match
          } else {
            //redirect to login
            res.redirect('/signin'); 
          }
        //user not found
        } else {
          //redirect to sign up
          res.redirect('/signup'); 
        }
      });
  }, 

  signup: function(req, res, next) {
    //save input username
    var username = req.body.username;
    //save input password
    var password = req.body.password;
    //create a new user with the request username and password
    var newUser = new User({username: username, password:password})
      .then(function(user) {
        //give the user a session on the property user
        req.session.user = username;
        //redirect them to browse 
        res.redirect('/browse');
      }); 
  }

};








