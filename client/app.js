angular.module('oneApp', [
  'browse',
  'create',
  'factories',
  'ngRoute',
  'auth',
  'ngMaterial',
  'fmp-card',
  'viewReq',
  'ngAnimate',
  'base64',
  'ngFileUpload'
  ])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/browse/browse.html',
    controller: 'browseCtrl'
  })
  .when('/home', {
    templateUrl: './browse/browse.html',
    controller: 'AuthController'
  })
  .when('/signin', {
    templateUrl: '/auth/signin.html',
    controller: 'AuthController'
  })
   .when('/browse', {
    templateUrl: '/browse/browse.html',
    controller: 'browseCtrl'
  })
  .when('/create', {
    templateUrl: '/create/create.html',
    controller: 'createCtrl',
    authenticate: true
  })
  .when('/register', {
    templateUrl: '/auth/register.html',
    controller: 'AuthController'
  })
  .when('/confirmreq', {
    templateUrl: '/browse/viewReq.html',
    controller: 'viewCtrl'
  })
  .when('/view', {
    templateUrl: '/browse/viewReq.html',
    controller: 'viewCtrl',
    authenticate: true  
  })
  .when('/logout', {
    templateUrl: '/auth/signin.html',
    controller: 'AuthController'  
  })

  $httpProvider.interceptors.push('AttachTokens');
})
.factory('AttachTokens', function($window) {
  var attach = {
      request: function(object) {
        var jwt = $window.localStorage.getItem('com.oneApp');
        if (jwt) {
          object.headers['x-access-token'] = jwt;
        }
        object.headers['Allow-Control-Allow-Origin'] = '*';
        return object;
      }
    };
    return attach;
})
.run(function($rootScope, $location, Auth) {
    $rootScope.$on('$routeChangeStart', function(evt, next, current) {
      if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
        $location.path('/signin');
      }
    });
  });
