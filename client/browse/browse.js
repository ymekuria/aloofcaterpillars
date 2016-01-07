angular
  .module('browse',['ngMaterial', 'ngMessages', 'factories'])
  .controller('DemoCtrl',   function($scope, Meals) {

    $scope.user = {
      input: '',
    };


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

    // Meals.getAllMeals().then(function(data){
    //   console.log('data');
    // })

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