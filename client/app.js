angular.module('oneApp', [
  'browse',
  'create',
  'factories',
  'signin',
  'signup',
  'ngRoute',
  'ngMaterial',
  'fmp-card',
  'viewReq',
  'ngAnimate'
  ])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/browse/browse.html',
    controller: 'signinCtrl'
  })
  .when('/signin', {
    templateUrl: '/auth/signin.html',
    controller: 'signinCtrl'
  })
   .when('/browse', {
    templateUrl: '/browse/browse.html',
    controller: 'browseCtrl'
  })
  .when('/create', {
    templateUrl: '/create/create.html',
    controller: 'createCtrl'
  })
  .when('/signup', {
    templateUrl: '/auth/signup.html',
    controller: 'signupCtrl'
  })
  .when('/view', {
  templateUrl: '/browse/vewReq.html',
  controller: 'viewCtrl'
  })
})
