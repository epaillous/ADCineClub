'use strict';

/**
 * @ngdoc function
 * @name cineclub.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the cineclub
 */
angular.module('cineclub')
  .controller('LoginCtrl', function ($scope, $location, serviceAjax, auth) {
    $scope.dataLoading = false;
    $scope.login = function() {
      $scope.dataLoading = true;
      serviceAjax.login($scope.email, $scope.password).then(function(response){
        console.log("je suis la");
        auth.setUser(response.data.user);
          $location.path('/');
      }, function(response){
        // request failed
        console.log(response);
        $scope.dataLoading = false;
        $scope.form[response.data.error.attribute].$invalid = true;
        $scope.form[response.data.error.attribute].unknown = true;
      });
    };
  });
