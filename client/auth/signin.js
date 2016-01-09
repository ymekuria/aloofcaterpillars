angular.module('signin', [])
.controller('signinCtrl', function($scope) {

	$scope.signIn = function (user){

      Meals.signin(user).then(function(d) {
        return d;
      })
	}
});