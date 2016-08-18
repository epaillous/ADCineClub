'use strict';

/**
 * @ngdoc function
 * @name cineclub.controller:LikesCtrl
 * @description
 * # LikesCtrl
 * Controller of the cineclub
 */
angular.module('cineclub')
  .controller('LikesCtrl', function($scope, $location, serviceAjax){
    $scope.currentPage = 1;
    $scope.totalPages = 0;

    var getLikes = function(){
        $scope.loading = true;
        serviceAjax.likes().success(function(data){
            console.log(data);
            $scope.movies = data;
            $scope.loading = false;
        });
    };
    getLikes();
  });
