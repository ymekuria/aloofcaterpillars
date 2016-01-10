angular.module('auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};

  $scope.signup = function () {
    console.log($scope.user)
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.oneApp', token);
        $location.path('/browse');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signin = function () {
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('com.oneApp', token);
        $location.path('/view');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // $scope.signin = function (user){
  //     Meals.signin(user).then(function(d) {
  //       console.log(d)
  //       return d;
  //     })
  // }


//   $scope.createUser = function(user) {
//     console.log(user)
//     Meals.register(user).then(function(d) {
//       console.log("user is ", d)
//       return d;
//     })
// }

});