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
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/popular.html',
        controller: 'PopularCtrl',
        controllerAs: 'popular'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
