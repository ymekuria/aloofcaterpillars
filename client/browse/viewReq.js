angular.module('viewReq', [])

.controller('viewCtrl', function($scope, Meals, $compile, $location, $window) {
  //TODO: we need to figure out current user and pass that in the get request
  $scope.user = $window.localStorage.getItem('com.oneAppUser').toLowerCase();

  $scope.pending = [];

  $scope.clicked = false;
  $scope.allData;
  $scope.activeUser = []
  $scope.activeMeals;

  $scope.tradeMeal = ''
  $scope.showHTML = false;

  var vm = this;
  this.handleButtonClick = handleButtonClick
  this.confirmTrade = confirmTrade

  init();

  function init(){
    $scope.showHTML = false;
  }

  Meals.pendingReq().then(function(response) {
    var getData = response
    for (var i = 0; i<getData.length;i++) {
      if (getData[i].creator.toLowerCase() === $scope.user) {
        $scope.pending.push(getData[i])
      }
    }
  })

  function handleButtonClick(meal){
    $scope.activeMeals = []
    Meals.getUserMeals().then(function(response) {
      var allData = response
      $scope.activeUser = meal.consumers[0];
      for (var i = 0; i < allData.length; i++) {
        if (allData[i].creator === $scope.activeUser) {
          $scope.activeMeals.push(allData[i])          
        }
      }
      $scope.tradeMeal = meal;
    }).then(function() { 
      $scope.showHTML = !$scope.showHTML;
    })
  }

  function confirmTrade(meal) {
    var sendReq = {
        meal1: $scope.tradeMeal,
        meal2: meal
    }
    Meals.confirmReq(sendReq).then(function() {
      $location.path('/browse')
    })

  }
  


  //this is really messy, but I wasn't sure if we could issue a GET request filter
  //When this was done in backbone, we filtered it on the front end. Doing that below



  $scope.showUser = function(meal) {
    //Get that meal's data
    $scope.activeMeals = []
    Meals.getUserMeals().then(function(response) {
      var allData = response
      $scope.activeUser = meal.consumers[0];
      for (var i = 0; i < allData.length; i++) {
        if (allData[i].creator === $scope.activeUser) {
          $scope.activeMeals.push(allData[i])          
        }
      }
    }).then(function() {
      $scope.clicked = true;
    })
  }
})







