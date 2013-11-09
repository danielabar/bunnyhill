'use strict';

describe('Controller: MainCtrl', function () {

  var MainCtrl;
  var scope;
  var $httpBackend;
  var Deck;
  
  beforeEach(module('meanRecipieApp'));
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope, Deck) {
    Deck = Deck;
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/deck').
          respond([{name: 'Numbers'}, {name: 'Days of the week'}]);
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('List of decks is set in scope', function () {
  	// expect(scope.decks).toBeUndefined();
    $httpBackend.flush();
    expect(scope.decks.length).toBe(2);
    console.log(angular.toJson((scope.decks)));
  });
});
