'use strict';

/**
 * @ngdoc function
 * @name cineclub.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the cineclub
 */
angular.module('cineclub')
  .controller('NavigationCtrl', function($scope, auth) {
    $scope.user = auth;
  });
