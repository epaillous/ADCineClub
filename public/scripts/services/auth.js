'use strict';

/**
 * @ngdoc service
 * @name cineclub.auth
 * @description
 * # auth
 * Factory in the cineclub.
 */
angular.module('cineclub')
  .factory('auth', function () {
  var user;

  return {
      setUser : function(aUser){
          user = aUser;
      },
      isLoggedIn : function(){
          return(user)? user : false;
      }
    }
  });
