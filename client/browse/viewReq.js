angular.module('viewReq', [])

.controller('viewCtrl', function($scope, Meals, $window) {
  //TODO: we need to figure out current user and pass that in the get request
  $scope.user = $window.localStorage.getItem('com.oneAppUser')
  $scope.pending = [];
  $scope.allData = []
  $scope.active = ""
  $scope.activeMeals = []

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

    Meals.getUserMeals().then(function(response) {
      var allData = response.data
      $scope.active = meal.consumers[0];
      for (var i = 0; i < $scope.allData.length; i++) {
        if ($scope.allData[i].creator === $scope.active) {
          $scope.activeMeals.push($scope.allData[i])
        }
    }
    })


    //Send another get request with the consumer you get
    //display all the meals that the user shows you
    console.log('Showing the user:', $scope.active, 'and the desired meal', $scope.activeMeals)
  }


})