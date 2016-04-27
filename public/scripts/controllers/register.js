'use strict';

/**
 * @ngdoc function
 * @name cineclub.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the cineclub
 */
angular.module('cineclub')
  .controller('RegisterCtrl', function ($scope, serviceAjax) {
    $scope.dataLoading = false;
    $scope.register = function() {
      $scope.dataLoading = true;
      serviceAjax.register($scope.first_name, $scope.last_name, $scope.email, $scope.password, function (response) {
          if (response.success) {
              $location.path('/');
          } else {
            console.log("je suis la");
              $scope.dataLoading = false;
          }
      });
    };
  });
