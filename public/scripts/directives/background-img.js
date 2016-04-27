'use strict';

/**
 * @ngdoc directive
 * @name cineclub.directive:backgroundImg
 * @description
 * # backgroundImg
 */
angular.module('cineclub')
  .directive('backgroundImg', function () {
    return function(scope, element, attrs){
        var url = attrs.backgroundImg;
        element.css({
            'background-image': 'url(' + url +')',
            'background-size' : 'cover'
        });
    };
  });
