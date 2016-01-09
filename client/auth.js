
angular.module('auth',['ngMaterial', 'ngMessages', 'factories', 'ngAnimate', 'fmp-card2'])
  
.controller('authCtrl',   function($scope, Meals) {

  $scope.leftBackText = 'This is the left cards back, you can place whatever you feel like';
  $scope.rightBackText = 'This is the right cards back, you can place whatever you feel like';

});