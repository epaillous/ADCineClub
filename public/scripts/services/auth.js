'use strict';

/**
 * @ngdoc service
 * @name cineclub.auth
 * @description
 * # auth
 * Factory in the cineclub.
 */
angular.module('cineclub')
  .factory('auth', function($http, $rootScope){

  return {
      isLoggedIn: function(){
        return ($rootScope.current_user) ? $rootScope.current_user : false;
      },
      login: function(email, password){
          return $http.post('/login', {email: email, password: password});
      },
      register: function(firstName, lastName, email, password) {
          var data = {email: email, password: password, first_name: firstName, last_name: lastName};
          return $http.post('/register', data, {'Content-Type': 'application/x-www-form-urlencoded'});
      }
    };
  });
