'use strict';

/**
 * @ngdoc function
 * @name cineclub.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the cineclub
 */
angular.module('cineclub')
  .controller('LoginCtrl', function ($scope, serviceAjax) {
    $scope.dataLoading = false;
    $scope.login = function() {
      $scope.dataLoading = true;
      serviceAjax.login($scope.email, $scope.password, function(response) {
          if (response.success) {
              $location.path('/');
          } else {
              $scope.dataLoading = false;
          }
      });
    };
  });
