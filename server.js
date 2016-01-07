// Loading all the node module dependancies
var express = require('express');
var express = require('express');
var partials = require('express-partials');
var mongoose = require('mongoose');
var session = require('express-session');
var morgan = require('morgan');
var bodyParser = require('body-parser');

// var port = process.ENV.PORT || 5000;

// Loading all the file dependancies
//db = require('./config');
// utils = require('./utils');
// routes = require('./routes');

var app = express();

// All the middelware is below
// This serves all the static assests in the /client folder
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));






app.listen(5000);