'use strict';

/**
 * @ngdoc function
 * @name cineclub.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the cineclub
 */
angular.module('cineclub')
  .controller('MovieCtrl', function ($scope, $routeParams, serviceAjax) {
    var getDetailMovie = function(){
        $scope.loading = true;
        var id = $routeParams.id;
        serviceAjax.info(id).success(function(data){
          console.log(data);
          $scope.movie = data;
        });
    };
    getDetailMovie();
  });
