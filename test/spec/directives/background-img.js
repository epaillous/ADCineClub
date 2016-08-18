'use strict';

describe('Directive: backgroundImg', function(){

  // load the directive's module
  beforeEach(module('cineclub'));

  var element,
    scope;

  beforeEach(inject(function($rootScope){
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function($compile){
    element = angular.element('<background-img></background-img>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the backgroundImg directive');
  }));
});
