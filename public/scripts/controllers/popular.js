'use strict';

/**
 * @ngdoc function
 * @name cineclub.controller:PopularCtrl
 * @description
 * # PopularCtrl
 * Controller of the cineclub
 */
angular.module('cineclub')
  .controller('PopularCtrl', function($scope, $location, serviceAjax){
    $scope.currentPage = 1;
    $scope.totalPages = 0;

    var loadMovies = function(){
        $scope.loading = true;
        serviceAjax.popular($scope.currentPage).success(function(data){
            $scope.movies = data.results;
            $scope.loading = false;
            $scope.totalPages = data.total_pages;
        });
        $scope.pageChanged = function(){
            loadMovies();
        };
    };

    $scope.goToMovie = function(movie) {
       $location.path('/movie/' + movie.id);
    };
    $scope.likeMovie = function(movie) {
        serviceAjax.like(movie).success(function(data) {
            console.log(data);
        });
    };
    loadMovies();
  });
