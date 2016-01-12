var chai = require('chai');
var expect = require('../node_modules/chai/chai').expect;
var request = require('supertest');//npm --save
var app = require('../server/server-config.js');
var Users = require('../server/db/users/user.js');


chai.use(require('chai-things'));

var testUsers = [
  {
  
    name: 'phil',
    password: 'ptest'
  },
  {
    id: 2,
    name: 'john',
    password: 'jtest'
  },
  {
    id: 3,
    name: 'chris',
    password: 'ctest'
  }
];

// Return a JSON object back from the response
// Handles both `res.send(JSON.stringify({}))` and `res.json({})`
var getBody = function (res) {
  return res.body ? res.body : JSON.parse(res.text);
};




describe('RESTful API', function () {

  // beforeEach(function () {
  //   // Send a deep copy in so internal mutations do not affect our `testUsers` array above
  //   // Note: This copy technique works because we don't have any functions
  //   var usersCopy = JSON.parse(JSON.stringify(testUsers));
  //   Users.setAll(usersCopy);
  // });

// TODO 
  // describe('/api/signin', function () {

  //   describe('GET', function () {

  //     it('responds with a 200 (OK)', function (done) {

  //       request(app)
  //         .get('/api/signin')
  //         .expect(200, done);

  //     });
    
  //   }); 



  //   describe('POST', function () {

  //     var newUser = {
  //       name: 'phil',
  //       password: 'ptest'
  //     };

  //     it('responds with a 302 (Created) when a new user tries to signup', function (done) {

  //       request(app)
  //         .post('/api/signin')
  //         .send(newUser)
  //         .expect(302, done);

  //     });

  //   });       
  
  // });

  describe('/api/register', function () {

    describe('POST', function () {

      var newUser = {
        name: 'yoni',
        email: 'yoni@yoni.co'
      };

      it('responds with a 201 (Created) when a users signs up', function (done) {

        request(app)
          .post('/api/signin')
          .send({})
          .expect('Content-Type', "text/plain; charset=utf-8", done);
         

      });

    });    
  
  });
  
  describe('/api/browse', function () {

    describe('GET', function () {

      it('responds with a 200 (OK) and return a JSON object', function (done) {

        request(app)
          .get('/api/browse')
          .expect('Content-Type', /json/)
          .expect(200, done);

      });
    
    });    
  
  });


  describe('/api/viewpending', function () {

    describe('GET', function () {

      it('responds with a 200 (OK) and returns a JSON object', function (done) {

        request(app)
          .get('/api/viewpending')
          .expect('Content-Type', /json/)
          .expect(200, done);

      });
    
    });    
  
  });

  describe('/api/viewuser', function () {

    describe('GET', function () {

      it('responds with a 200 (OK) and returns a JSON object', function (done) {

        request(app)
          .get('/api/viewuser')
          .send({title: 'good food' })
          .expect('Content-Type', /json/)
          .expect(200, done);

      });
    
    });    
  
  });

  // describe('/api/confirmrequest', function () {

  //   describe('PUT', function () {

  //     var mealToUpdate = { picture: 'test', 
  //           description: 'Eggs',
  //           title: 'Egg and sausage bake',
  //           protein: 'eggs',
  //           creator: 'Yoni',
  //           consumers: [],
  //           status: 'pending' 
  //         };

  //     it('responds with a 200 (OK) the meal status is changed to sold', function (done) {

  //       request(app)
  //         .put('/api/confirmrequest')
  //         .send(mealToUpdate)
  //         .expect(200, done);

  //     });

  //   });  
  
  // });


   describe('/api/makerequest', function () {

    var mealToUpdate = { picture: 'test', 
            description: 'Eggs',
            title: 'Egg and sausage bake',
            protein: 'eggs',
            creator: 'Yoni',
            consumers: [],
            status: 'pending' };

    // describe('PUT', function () {

    //   it('responds with a 200 (OK) the meal status is changed to pending', function (done) {

    //     // ask Anthony and Jonathon what they can send back for us to make this work
    //     request(app)
    //       .put('/api/confirmrequest')
    //       .send(mealToUpdate)
    //       .expect(200, done);

    //   });

    // });  
  
  }); 
});









