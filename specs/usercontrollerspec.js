// these test the functionality of the DB independantly 

var expect = require('chai').expect;
var mongoose = require('mongoose');
var userController = require('/../server/db/users/userController.js')
var mealController = require('/../server/db/meals/mealController.js')

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
      // seed the database
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

  it('should be able to create a new user and save it to the db', function (done) {
    var newUser = {
      name: 'Frank',
      password: 'test'
    };

    // userController.create(newJob, function (job) {
    //   Job.find(function (err, jobs) {
    //     expect(jobs.length).to.equal(5);
    //     done();
    //   });
    // });
  });

  it('should be able to signin a user', function (done) {
    // jobController.getHighPayingJobs(function (jobs) {
    //   expect(jobs.length).to.be.equal(3);
    //   done();
    // });
  });

  it('should be able to register a new user', function (done) {
    // jobController.getHighPayingJobs(function (jobs) {
    //   expect(jobs.length).to.be.equal(3);
    //   done();
    // });
  });  
  
})