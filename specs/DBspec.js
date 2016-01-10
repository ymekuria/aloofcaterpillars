// these test the functionality of the DB independantly 

var expect = require('chai').expect;
var mongoose = require('mongoose');
var User = require('/../server/db/users/user.js')

var dbURI = 'mongodb://localhost/greenfield';

// This helper clears the db 
var clearDB = function (done) {
  mongoose.connection.collections['user'].remove(done);
};

describe('User Controller', function () {

  // Connect to database before any tests
  before(function (done) {
    if (mongoose.connection.db) {
      return done();
    }
    mongoose.connect(dbURI, done);
  });

  beforeEach(function (done) {
    clearDB(function () {
      var users = [{
       username: 'Yoni',
       password: 'test'
      },{
       username: 'Joey',
       password: 'test'
      },{
       username: 'Anthony',
       password: 'test'
      },{
       username: 'Jonathon',
       password: 'test'
      },
      ];
      User.create(users, done);
      
    });
  });

  it('should have a method that creates a user', function (done) {
    // TODO: Write test(s) for a method exported by `userController` that behaves as described one line above
    // HINT: The `done` passed in is quite important...
    var result;
    var callback = function(data){
      result = data;
      expect(result.nModified).to.equal(1);
    };
    User.create({
      username: 'Kari',
      password: 'food'
    }, callback);
    done(); 
  });
  
})