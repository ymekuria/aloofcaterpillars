angular.module('create', [])

.controller('createCtrl', ['$scope', 'Meals', 'Upload', '$base64', '$window', function($scope, Meals, Upload) {

  //Add meal via POST request from Meals factory
    $scope.addMeal = function(meal) {
     
    var meal = meal;
    console.log(Upload)

    meal.upload = Upload.upload({
      url: '/api/create',
      data: {meal: meal, creator: $scope.meal.creator, title: $scope.meal.title, quantity: $scope.meal.quantity},
    });
    meal.upload.then(function (resp) {
      console.log('Meal Created')

      });
    }

  //These button functions are activated when the user chooses from dropdown
    $scope.addProtein= function(ingredient, meal) {
      console.log('addProt')
      $scope.data.protein = ingredient.name
    }

     $scope.addRestrict= function(diet, meal) {
      console.log('restrict')
      $scope.data.diet = diet
    }
}])
