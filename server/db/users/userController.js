var Q = require('q');
var db = require('../dbconfig.js');
var User = require('./user.js');
var session = require('express-session');
var jwt = require('jwt-simple');

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
      .then(function(user) {
        if(user) {
          //...user exists. Check their password.
          //save database password
          var dbPassword = user.get('password');
          //if input password equals db password
          if(dbPassword === password) {
            // create token to send back for auth
            var token = jwt.encode(user, 'secret');
            res.redirect('/browse');
            res.json({token: token});
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
    findUser({username: username})
      .then(function(user) {
        if(user) {
          next(new Error('username already exists!'));
        } else {
          return createUser({
            username: username,
            password: password
          });
        }
      })
      .then(function(user) {
        var token = jwt.encode(user, 'secret');
        res.redirect('/browse');
        res.json({token: token});
      }); 
    

         // var username = req.body.username;
    // var password = req.body.password;

    // // check to see if user already exists
    // findUser({username: username})
    //   .then(function (user) {
    //     if (user) {
    //       next(new Error('User already exist!'));
    //     } else {
    //       // make a new user if not one
    //       return createUser({
    //         username: username,
    //         password: password
    //       });
    //     }
    //   })
    //   .then(function (user) {
    //     // create token to send back for auth
    //     var token = jwt.encode(user, 'secret');
    //     res.json({token: token});
    //   })
    //   .fail(function (error) {
    //     next(error);
    //   });
  }

};








