angular.module('factories', ['ngMaterial', 'ngMessages'])

.factory('Meals', function($http) {
  
  var ingredients = [
      { ingredient: 'meat', name: 'Chicken' },
      { ingredient: 'meat', name: 'Beef' },
      { ingredient: 'meat', name: 'Pork' },
      { ingredient: 'meat', name: 'Bacon' },
      { ingredient: 'veg', name: 'Eggs' },
      { ingredient: 'veg', name: 'Beans' },
      { ingredient: 'veg', name: 'Tofu' },
      { ingredient: 'veg', name: 'Grass' }
    ];

  var restrictions = [
    'Vegetarian', 'Paleo',  'Gluten-Free', 'Low-Carb'
  ]

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
    ingredients: ingredients,
    restrictions: restrictions,
    getAllMeals: getAllMeals,
    searchByIngredient: searchByIngredient
  }
})
