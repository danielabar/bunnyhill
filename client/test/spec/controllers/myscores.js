'use strict';

describe('Controller: MyscoresCtrl', function () {

  // load the controller's module
  beforeEach(module('meanRecipieApp'));

  var MyscoresCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyscoresCtrl = $controller('MyscoresCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
