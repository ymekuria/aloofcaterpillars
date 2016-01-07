angular
  .module('browse',['ngMaterial', 'ngMessages'])
  .controller('DemoCtrl', function($scope) {
    $scope.user = {
      firstName: '',
      lastName: '',
    };


    $scope.toppings = [
      { category: 'meat', name: 'Chichen' },
      { category: 'meat', name: 'Beef' },
      { category: 'meat', name: 'Pork' },
      { category: 'meat', name: 'Bacon' },
      { category: 'veg', name: 'Tofu' },
      { category: 'veg', name: 'Beans' },
      { category: 'veg', name: 'Protein Shake' },
      { category: 'veg', name: 'Grass' }
    ];

    $http({
      method:'GET',
      url:'api/getAllMeals'
    }).success(function(data){

      $scope.title = data.title;
      $scope.description = data.description;
      $scope.photo = data.photo; 

    }).error(function(){
      alert('error');
    })


  })
  .config(function($mdThemingProvider) {

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();



  });

