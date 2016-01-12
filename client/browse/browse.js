angular
  .module('browse',['ngMaterial', 'ngMessages', 'factories', 'ngAnimate', 'fmp-card'])
  .controller('browseCtrl',   function($scope, $window, Meals) {

    $scope.user = {
      input: '',
    };

    $scope.activeUser = $window.localStorage.getItem('com.oneAppUser');

    $scope.data;
    $scope.browseMeals = [];

    $scope.proteins = [
      { category: 'meat', name: 'Chicken' },
      { category: 'meat', name: 'Beef' },
      { category: 'meat', name: 'Pork' },
      { category: 'meat', name: 'Bacon' },
      { category: 'veg', name: 'Tofu' },
      { category: 'veg', name: 'Beans' },
      { category: 'veg', name: 'Protein Shake' },
      { category: 'veg', name: 'Grass' }
    ];

    $scope.restrict = [
      'All', 'Vegetarian', 'Gluten-Free', 'Paleo', 'Low-Carb'
    ]

    Meals.getAllMeals().then(function(data){
      console.log('Trying to get all meals')
      $scope.data = data.data      
    })
    .then(function() {
      for (var i = 0; i < $scope.data.length; i++) {
        if ($scope.activeUser !== $scope.data[i].creator) {
          $scope.browseMeals.push($scope.data[i])
        }
      }
    })

    $scope.makeRequest = function(meal) {            
      var req = {
        username: $window.localStorage.getItem('com.oneAppUser'),
        meal: meal
      }
      Meals.makeReq(req).then(function(data) {
        alert('Made the request')
      })
    }


    $scope.offerUserMeals = function() {
      console.log('offered meals')
    }

    $scope.searchIngredient = function(ingredient){
      console.log( ingredient, "selected");
        // searchByIngredient(ingredient).then(function(data){
        //   console.log('data');
        // })

    };

  })
  .config(function($mdThemingProvider) {

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();



  });