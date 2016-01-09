angular.module('register', [])
.controller('registerCtrl', function($scope) {

$scope.createUser = function(user) {
    Meals.register(user).then(function(d) {
      return d;
    })
}

});
