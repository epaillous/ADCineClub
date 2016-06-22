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
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/popular.html',
        controller: 'PopularCtrl',
        controllerAs: 'popular'
      })
      .when('/movie/:id', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl',
        controllerAs: 'movie'
      })
      .when('/search/:query', {
        templateUrl: 'views/popular.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
      .when('/login', {
        controller: 'LoginCtrl',
        templateUrl: 'views/login.html',
        controllerAs: 'login'
      })
      .when('/register', {
        controller: 'RegisterCtrl',
        templateUrl: 'views/register.html',
        controllerAs: 'register'
      })
      .when('/screenings', {
        controller: 'ScreeningsCtrl',
        templateUrl: 'views/screenings.html',
        controllerAs: 'screenings'
      })
      .when('/account', {
        controller: 'AccountCtrl',
        templateUrl: 'views/account.html',
        controllerAs: 'account'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
