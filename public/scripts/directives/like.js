'use strict';

/**
 * @ngdoc directive
 * @name cineclub.directive:likeButton
 * @description
 * # likeButton
 */

angular.module('cineclub')
  .directive('likeButton', function() {
    return {
      restrict: 'C',
      scope: {
        movie: '='
      }
    };
  });
