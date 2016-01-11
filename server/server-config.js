var express = require('express');
var app = express();
var partials = require('express-partials');
var mongoose = require('mongoose');
var session = require('express-session');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var Meal = require('./db/meals/meal');
var MealController = require('./db/meals/mealController');

var User = require('./db/users/user');
var UserController = require('./db/users/userController');

var q = require('q');
var jwt = require('jwt-simple');

var db = require('./db/dbconfig');// uncomment when this is ready

var app = express();

// Middleware. Add below as needed

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));// this serves all the static assests in the /client folder
// app.use(express.cookieParser('shhhh, very secret'));// used for Auth uncomment when ready
app.use(session({secret: 'somesecret'})); // used for Auth

var checkUser = function (req,res,next) {
  var token = req.headers['x-access-token'];
  if(!token) {
    res.redirect('/signin');
  } else{
    next();
  }
};

// Look into having both get and post
app.get('/api/signin', UserController.signin);
app.post('/api/signin', UserController.signin);

app.post('/api/register', UserController.register);

// this endpoint returns all the meals objects form the db. TODO check with Jonathon to sync endpoint name 
app.get('/api/browse', MealController.allMeals);

// this endpoint returns all the meal instances.
app.get('/api/usermeals', checkUser, MealController.allMeals);

// this endpoint recieves an object containing a user (the prospective consumer) and the meal being requested and updates the status or the meal to pending  
app.put('/api/makerequest', checkUser, MealController.makeRequest)

// this endpoint returns all the pending meals from a user 
app.get('/api/viewpending', MealController.viewPending);


// this endpoint returns all the consumers of a meal instance
app.get('/api/viewuser', MealController.viewUsers);

// this endpoint takes TWO meal instances and updates the status to sold to confirm transaction
app.put('/api/confirmrequest', MealController.confirmRequest)


module.exports = app;