angular
  .module('browse',['ngMaterial', 'ngMessages', 'factories', 'ngAnimate', 'fmp-card'])
  .controller('browseCtrl',   function($scope, $window, Meals) {


    $scope.user = {
      input: '',
    };

    $scope.data = {}

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

    // Meals.getUserMeals($scope.user).then(function(data) {
    //   $scope.userMeals = data.data
    // })

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