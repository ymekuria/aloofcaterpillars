var express = require('express');
var app = express();
var partials = require('express-partials');
var mongoose = require('mongoose');
var session = require('express-session');
var morgan = require('morgan');
var bodyParser = require('body-parser');

// var db = require('../dbconfig');// uncomment when this is ready

// TODO- add these modules later
// utils = require('./utils');
routes = require('./routes');

var app = express();

// Middleware. Add below as needed

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));// this serves all the static assests in the /client folder
// app.use(express.cookieParser('shhhh, very secret'));// used for Auth uncomment when ready
// app.use(express.session()); // used for Auth


module.exports = app;