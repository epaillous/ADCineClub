'use strict';

/**
 * @ngdoc function
 * @name cineclub.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the cineclub
 */
angular.module('cineclub')
  .controller('HeaderCtrl', function($scope, $location) {
    $scope.query = '';
    $scope.searchAction = function(){
        $location.path('/search/' + $scope.query);
    };
  });
