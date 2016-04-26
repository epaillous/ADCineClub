'use strict';

/**
 * @ngdoc function
 * @name cineclub.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the cineclub
 */
angular.module('cineclub')
  .controller('MovieCtrl', function ($scope, serviceAjax) {

    var getDetailMovie = function(){
        $scope.loading = true;
        serviceAjax.getDetail($scope.movieId).success(function(data){
            console.log(data);
        });
    };
    getDetailMovie();
  });
