'use strict';

/**
 * @ngdoc function
 * @name cineclub.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the cineclub
 */
angular.module('cineclub')
  .controller('SearchCtrl', function ($scope, $routeParams, serviceAjax) {
    $scope.query = $routeParams.query;
    $scope.currentPage = 1;
    $scope.totalPages = 0;
    var loadMovies = function(){
        serviceAjax.search($scope.query, $scope.currentPage).success(function(data){
            console.log(data);
            $scope.movies = data.results;
            $scope.totalPages = data.total_pages;
        });
    };

    $scope.pageChanged = function(){
        loadMovies();
    };
    loadMovies();
  });
