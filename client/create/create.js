angular.module('create', [])

.controller('createCtrl', function($scope, Meals) {

  // $scope.addMeal = function(meal.creator, meal.description, item) {
    $scope.data = {
      username: $scope.creator,
      description: $scope.description,
      protein: $scope.item,
      restrict: $scope.item2,
      style: $scope.item3
    }

    $scope.addMeal = function() {
      Meals.storeMeal($scope.data).then(function(d) {
        return d;
      })
    }
})