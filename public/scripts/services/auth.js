'use strict';

/**
 * @ngdoc service
 * @name cineclub.auth
 * @description
 * # auth
 * Factory in the cineclub.
 */
angular.module('cineclub')
  .factory('auth', function ($http, $cookies) {
  var user;

  return {
      setUser : function(aUser){
          var existing_cookie_user = $cookies.get('cineclub.user');
          user = aUser || existing_cookie_user;
          $cookies.put('cineclub.user', user);
      },
      isLoggedIn : function(){
        var current_user = user || $cookies.get('cineclub.user');
          return(current_user)? current_user : false;
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
