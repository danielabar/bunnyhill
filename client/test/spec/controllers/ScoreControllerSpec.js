'use strict';

describe('Controller: ScoreCtrl', function () {

  // load the controller's module
  beforeEach(module('meanRecipieApp'));

  var ScoreCtrl;
  var scope;
  var mockGameService = {
  	getScoreBoard: function() {
  		return {score: 0, outOf: 10}
  	}
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScoreCtrl = $controller('ScoreCtrl', {
      $scope: scope,
      GameService: mockGameService
    });
  }));

});
