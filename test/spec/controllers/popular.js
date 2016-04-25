'use strict';

describe('Controller: PopularCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJshelloWorldApp'));

  var PopularCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PopularCtrl = $controller('PopularCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PopularCtrl.awesomeThings.length).toBe(3);
  });
});
