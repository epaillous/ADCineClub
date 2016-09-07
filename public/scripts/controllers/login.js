'use strict';

/**
 * @ngdoc function
 * @name cineclub.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the cineclub
 */
angular.module('cineclub')
  .controller('LoginCtrl', function($scope, $location, $rootScope, auth){
    $scope.dataLoading = false;
    $scope.login = function() {
      $scope.dataLoading = true;
      auth.login($scope.email, $scope.password).then(function(response){
        $rootScope.currentUser = response.user;
        $location.path('/');
      }, function(response){
        // request failed
        $scope.dataLoading = false;
        $scope.form[response.data.error.attribute].unknown = true;
      });
    };

    $scope.resetErrors = function(){
      $scope.form.email.unknown = false;
    };
  });
