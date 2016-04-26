'use strict';

/**
 * @ngdoc service
 * @name cineclub.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the cineclub.
 */
angular.module('cineclub')
  .factory('serviceAjax', function ($http) {
    return{
        popular: function(page){
            return $http.get('/movie/popular?page=' + page);
        },
        getMovieDetail: function(movie_id){
            return $http.get('/movie/' + movie_id);
        }
    };
  });
