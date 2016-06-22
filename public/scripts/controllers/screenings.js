'use strict';

/**
 * @ngdoc function
 * @name cineclub.controller:ScreeningCtrl
 * @description
 * # ScreeningCtrl
 * Controller of the cineclub
 */
angular.module('cineclub')
  .controller('ScreeningsCtrl', function ($scope, serviceAjax) {
    $scope.currentPage = 1;
    $scope.totalPages = 0;

    var loadScreenings = function(){
        $scope.loading = true;
        serviceAjax.screenings().success(function(screenings){
            var today = new Date();
            $scope.next_screenings = screenings.filter(function(s) {return new Date(s.date) >= today;});
            $scope.past_screenings = screenings.filter(function(s) {return new Date(s.date) <= today;});
            $scope.loading = false;
            $scope.totalPages = screenings.total_pages;
        });
        $scope.pageChanged = function(){
            loadScreenings();
        };
    };
    loadScreenings();
  });
