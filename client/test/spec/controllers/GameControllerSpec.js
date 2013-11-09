'use strict';

describe('Controller: GameCtrl', function () {

  // load the controller's module
  beforeEach(module('meanRecipieApp'));

  var GameCtrl;
  var scope;
  var routeParams;
  var mockGameService = {
  	getGame: function() {
  		return {deck: "this is a deck"};
  	},
  	getNextCard: function() {
  		return {name: "Cities", language: "Italian"};
  	},
  	getScoreBoard: function() {
  		return {score: 0, outOf: 10}
  	}
  };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    routeParams = {};
    GameCtrl = $controller('GameCtrl', {
      $scope: scope,
      GameService: mockGameService
    });
  }));

  it('Takes name as id', inject(function($controller) {
        routeParams.name = 'Some Name';
        GameCtrl = $controller('GameCtrl', {
            $scope: scope,
            $routeParams : routeParams,
            GameService: mockGameService
        });        
        expect(scope.name).toEqual('Some Name');
    }));
});
