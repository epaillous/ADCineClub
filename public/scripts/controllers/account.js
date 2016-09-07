'use strict';

/**
 * @ngdoc function
 * @name cineclub.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the cineclub
 */
angular.module('cineclub')
  .controller('AccountCtrl', function($scope, $rootScope) {
    $scope.dataLoading = false;
    $scope.user = $rootScope.current_user;
  });
