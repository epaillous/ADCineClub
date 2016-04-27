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
        info: function(movie_id){
            return $http.get('/movie/' + movie_id);
        },
        search: function(query, page){
            return $http.get("/movie/search?q=" + query + "&page=" + page);
        },
        login: function(email, password){
            return $http.post("/login", {email: email, password: password});
        }
    }
  });
