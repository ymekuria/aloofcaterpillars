// these test the functionality of the DB independantly 

var expect = require('chai').expect;
var mongoose = require('mongoose');
var User = require('/../server/db/users/user.js')
var Meal = require('/../server/db/meals/mealController.js')

var dbURI = 'mongodb://localhost/greenfield';

// This helper clears the db 
var clearDB = function (done) {
  mongoose.connection.collections['user'].remove(done);
};

describe('Meal Controller', function () {

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
      var meals = [{ picture: 'test', 
        description: 'Chicken and Rice',
        title: 'Chicken with rice and vegetables',
        protein: 'Chicken',
        creator: 'Anthony',
        consumers: [],
        status: 'false' 
      },{ picture: 'test', 
        description: 'Steak with salad',
        title: 'Steak with salad',
        protein: 'Steak',
        creator: 'Joey',
        consumers: [],
        status: 'false' 
      },{ picture: 'test', 
        description: 'Pasta with sausage and vegetables',
        title: 'Pasta with sausage and vegetables',
        protein: 'Sausage',
        creator: 'Jonathan',
        consumers: [],
        status: 'false' 
      }
      ];
      User.create(users, done);
      
    });
  });

  it('should be able to create a new meal and save it to the db', function (done) {
    var newMeal = { picture: 'test', 
      description: 'Chicken Parmasen',
      title: 'Chicken Parmasen',
      protein: 'Chicken',
      creator: 'Yoni',
      consumers: [],
      status: 'false' 
      };

    // mealController.create(newJob, function (meals) {
    //   mealController.find(function (err, meal) {
    //     expect(meals.length).to.equal(5);
    //     done();
    //   });
    // });
  });

  it('Should be able to return all the', function (done) {
    // mealController.allMeals(newJob, function (meals) {
    //   mealController.find(function (err, meals) {
    //     expect(meals.length).to.equal(5);
    //     done();
    //   });
    // });
  
  })

  it('Should be able to return all the', function (done) {
    // mealController.allMeals(newJob, function (meals) {
    //   mealController.find(function (err, meals) {
    //     expect(meals.length).to.equal(5);
    //     done();
    //   });
    // });
  
  })  

});


