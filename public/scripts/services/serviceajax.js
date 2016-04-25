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
            return $http.get('/popular?page=' + page);
        }
    };
  });
