'use strict';

/**
 * @ngdoc overview
 * @name cineclub
 * @description
 * # cineclub
 *
 * Main module of the application.
 */

angular
  .module('cineclub', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'dcbImgFallback',
    'ngRoute.middleware'
  ])
  .config(function($routeProvider) {

  var requiresSignIn = function($http, $location, $rootScope){
    if ($rootScope.currentUser) {
      return;
    }
    // Initialize a new promise
    // Make an AJAX call to check if the user is logged in
    return $http.get('/login').then(function(response){
      console.log(response);
      // Authenticated
      if (response.data) {
        $rootScope.currentUser = response.data;
      // Not Authenticated
      } else {
        console.log("je suis la");
        $location.path('/login');
      }
    });
  };

  var getSignedUser = function($http, $location, $rootScope){
    // Initialize a new promise
    // Make an AJAX call to check if the user is logged in
    return $http.get('/login').then(function(response){
      console.log(response);
      // Authenticated
      if (response.data) {
        $rootScope.currentUser = response.data;
      // Not Authenticated
      } else {
        console.log("je suis la");
        $location.path('/login');
      }
    });
  };

    $routeProvider
      .when('/', {
        templateUrl: 'views/popular.html',
        controller: 'PopularCtrl',
        controllerAs: 'popular',
        resolve: {
          getSignedUser: getSignedUser
        }
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl',
        controllerAs: 'movie',
        resolve: {
          getSignedUser: getSignedUser
        }
      })
      .when('/search/:query', {
        templateUrl: 'views/popular.html',
        controller: 'SearchCtrl',
        controllerAs: 'search',
        resolve: {
          getSignedUser: getSignedUser
        }
      })
      .when('/login', {
        controller: 'LoginCtrl',
        templateUrl: 'views/login.html',
        controllerAs: 'login',
        resolve: {
          getSignedUser: getSignedUser
        }
      })
      .when('/register', {
        controller: 'RegisterCtrl',
        templateUrl: 'views/register.html',
        controllerAs: 'register',
        resolve: {
          getSignedUser: getSignedUser
        }
      })
      .when('/screenings', {
        controller: 'ScreeningsCtrl',
        templateUrl: 'views/screenings.html',
        controllerAs: 'screenings',
        resolve: {
          getSignedUser: getSignedUser
        }
      })
      .when('/account', {
        controller: 'AccountCtrl',
        templateUrl: 'views/account.html',
        controllerAs: 'account',
        resolve: {
          getSignedUser: getSignedUser,
          requiresSignin: checkSignIn
        }
      })
      .when('/likes', {
        controller: 'LikesCtrl',
        templateUrl: 'views/likes.html',
        controllerAs: 'likes',
        resolve: {
          getSignedUser: getSignedUser,
          requiresSignin: checkSignIn
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
