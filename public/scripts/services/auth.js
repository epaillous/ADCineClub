'use strict';

/**
 * @ngdoc service
 * @name cineclub.auth
 * @description
 * # auth
 * Factory in the cineclub.
 */
angular.module('cineclub')
  .factory('auth', function ($http) {
  var user;

  return {
      setUser : function(aUser){
          user = aUser;
      },
      isLoggedIn : function(){
          return(user)? user : false;
      },
      login: function(email, password){
          return $http.post("/login", {email: email, password: password});
      },
      register: function(first_name, last_name, email, password) {
          var data = {email: email, password: password, first_name: first_name, last_name: last_name};
          return $http.post("/register", data, {'Content-Type': 'application/x-www-form-urlencoded'});
      }
    }
  });
