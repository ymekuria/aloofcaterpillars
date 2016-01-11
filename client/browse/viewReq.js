angular.module('viewReq', [])

.controller('viewCtrl', function($scope, Meals, $compile, $window) {
  //TODO: we need to figure out current user and pass that in the get request
  $scope.user = $window.localStorage.getItem('com.oneAppUser')
  $scope.pending = [];
  $scope.clicked = false;
  $scope.allData;
  $scope.activeUser = []
  $scope.activeMeals;

  $scope.tradeMeal = ''
  $scope.showHTML = false;

  $scope.$on("receivedPageContent", function(event, args) {
    console.log('new page content received after DB call')
  })

  var vm = this;
  this.handleButtonClick = handleButtonClick
  this.confirmTrade = confirmTrade

  init();

  function init(){
    $scope.showHTML = false;
  }

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
    console.log($scope.tradeMeal, meal)
  }
  


  //this is really messy, but I wasn't sure if we could issue a GET request filter
  //When this was done in backbone, we filtered it on the front end. Doing that below

  Meals.getAllMeals().then(function(response) {
    console.log('$scope user is', $scope.user)
    var getData = response.data
    for (var i = 0; i<getData.length;i++) {
      console.log('getData creator', getData[i].creator)
      if (getData[i].status ==='pending' && $scope.user === getData[i].creator.toLowerCase()) {
        $scope.pending.push(getData[i])
      }
    }
  })

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
      console.log($scope.clicked)      
    })
  }
})







