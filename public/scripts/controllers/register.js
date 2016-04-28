'use strict';

/**
 * @ngdoc function
 * @name cineclub.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the cineclub
 */
angular.module('cineclub')
  .controller('RegisterCtrl', function ($scope, auth, $location) {
    $scope.dataLoading = false;
    $scope.resetErrors = function() {
       $scope.form['email'].unknown = false;
    }
    $scope.register = function() {
      $scope.dataLoading = true;
      auth.register($scope.user.firstName, $scope.user.lastName, $scope.user.email, $scope.user.password).then(function (response) {
        auth.setUser(response.data);
        $location.path('/');
      },
      function (response) {
        // request failed
        console.log(response);
        $scope.dataLoading = false;
        $scope.form[response.data.error.attribute].alreadyExists = true;
      });
    };
  });
