angular.module('create', [])

.controller('createCtrl', ['$scope', 'Meals', '$window', function($scope, Meals, $window) {

  //Pull ingredients and restrictions from Meals factory
    $scope.ingredients = Meals.ingredients
    $scope.restrictions = Meals.restrictions

    $scope.data = {}

  //Add meal via POST request from Meals factory
    $scope.addMeal = function(meal) {
     
  /*This is a bit confusing. We're importing userData into the final data object
  From here, we do a POST request and add to DB
  */
      $scope.userInput = angular.copy(meal)
      $scope.data.creator = $scope.userInput.creator
      $scope.data.title = $scope.userInput.title
      $scope.data.quantity = $scope.userInput.quantity
      console.log($window.localStorage.getItem('com.oneAppUser'))
      
      Meals.storeMeal($scope.data).then(function(d) {
        alert('Hey a meal was added!')
        return d;
      })
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

.directive('addHTML', function($compile){
  return {
    restrict: 'AE',
    link: function(scope, element, attrs){
      var html = `<div class='h1' data-ng-h1 draggable>Test</div>`,
      compiledElement = $compile(html)(scope);

      element.on('click', function(event){
        var pageElement = angular.element(document.getElementById("page"));
        pageElement.empty()
        pageElement.append(compiledElement);
        console.log('Inside directive')
      })
    }
  }
});
