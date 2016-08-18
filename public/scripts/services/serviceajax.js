'use strict';

/**
 * @ngdoc service
 * @name cineclub.serviceAjax
 * @description
 * # serviceAjax
 * Factory in the cineclub.
 */
angular.module('cineclub')
  .factory('serviceAjax', function($http, auth){
    return {
        popular: function(page){
            return $http.get('/movie/popular?page=' + page);
        },
        info: function(movieId){
            return $http.get('/movie/' + movieId);
        },
        search: function(query, page){
            return $http.get('/movie/search?q=' + query + '&page=' + page);
        },
        screenings: function(){
            return $http.get('/screening');
        },
        likes: function(){
            return $http.get('/user/' + auth.isLoggedIn().id + '/movies');
        },
        like: function(movie){
            return $http.post('/user/' + auth.isLoggedIn().id + '/movies', {'movie': movie});
        }
    };
  });
