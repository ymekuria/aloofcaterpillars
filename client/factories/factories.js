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

  return {
    storeMeal: storeMeal
  }
})