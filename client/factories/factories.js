angular.module('factories', [])

.factory('Meals', function($http) {


  var storeMeal = function(meal) {
    return $http({
      method: 'POST',
      url: '/api/create',
      data: meal
    })
    .then(function(resp) {
      return resp.data
    })
  }

  var getAllMeals = function(meals) {
    return $http({
      method:'GET',
      url:'api/getAllMeals'
    }).success(function(data){

      return data;

    }).error(function(){
      alert('error');
    })
  }

  var searchByIngredient = function(ingredient){
    return $http({
      method: 'POST',
      url: 'api/getIngredient',
      data: ingredient
    }).then(function(resp){
      return resp.data
    })
  }


  return {
    storeMeal: storeMeal,
    getAllMeals: getAllMeals,
    searchByIngredient: searchByIngredient
  }

})