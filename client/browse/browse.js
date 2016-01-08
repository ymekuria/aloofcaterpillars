angular
  .module('browse',['ngMaterial', 'ngMessages', 'factories', 'ngAnimate', 'fmp-card'])
  .controller('browseCtrl',   function($scope, Meals) {


    $scope.leftBackText = 'This is the left cards back, you can place whatever you feel like';
  $scope.rightBackText = 'This is the right cards back, you can place whatever you feel like';


    $scope.user = {
      input: '',
    };

    $scope.data = {}

    $scope.proteins = [
      { category: 'meat', name: 'Chichen' },
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
      
      $scope.data = data.data
      console.log($scope.data);
    })

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